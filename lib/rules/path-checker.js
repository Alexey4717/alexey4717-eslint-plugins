'use strict';

// Для преобразования путей в единый формат для разных ОС
const path = require('path');
const { isPathRelative } = require("../helpers");

module.exports = {
    meta: {
        type: null,
        docs: {
            description: 'feature sliced relative path checker',
            recommended: false,
            url: null,
        },
        fixable: null,
        schema: [
            {
                type: 'object',
                properties: {
                    alias: {
                        type: 'string',
                    }
                }
            }
        ],
        messages: {},
    },

    create(context) {
        const alias = context.options[0]?.alias || ''; // передали в файле тестов в options.[0].alias
        return {
            ImportDeclaration(node) {
                // example: app/Entities/Article.tsx
                const value = node.source.value;
                const importTo = alias ? value.replace(`${alias}/`, '') : value;

                // full path in own computer
                const fromFilename = context.getFilename();

                if (shouldBeRelative(fromFilename, importTo)) {
                    context.report(node, 'all paths must be relative inside the same slice');
                }
            }
        };
    },
};

const layers = {
    'entities': 'entities',
    'features': 'features',
    'shared': 'shared',
    'pages': 'pages',
    'widgets': 'widgets',
};

// Проверка должен ли путь быть относительным (в рамках одного модуля - да)
// Во всех остальных случаях используем абсолютные импорты из public-api
function shouldBeRelative(from, to) {
    if (isPathRelative(to)) {
        return false;
    }

    const toArray = to.split('/');

    // Слой и слайс по методологии FSD
    const toLayer = toArray[0]; // typeof keyof layers
    const toSlice = toArray[1]; // example - Article

    if (!toLayer || !toSlice || !layers[toLayer]) {
        return false;
    }

    const normalizedPath = path.toNamespacedPath(from);
    const projectFrom = normalizedPath.split('src')[1];
    const fromArray = projectFrom.split('\\');
    const fromLayer = fromArray[1];
    const fromSlice = fromArray[2];

    if (!fromLayer || !fromSlice || !layers[fromLayer]) {
        return false;
    }

    return fromSlice === toSlice && toLayer === fromLayer;
}
