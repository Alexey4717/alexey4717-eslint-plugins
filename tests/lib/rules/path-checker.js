/**
 * @fileoverview feature sliced relative path checker
 * @author alex
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/path-checker'),
    RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    languageOptions: {
        parserOptions: {
            ecmaVersion: 6,
            sourceType: 'module',
        }
    }
});
ruleTester.run('path-checker', rule, {
    valid: [
        {
            filename: 'C:\\Users\\alex\\Desktop\\javascript\\production_project\\src\\entities\\Article',
            code: 'import { addCommentFormActions, addCommentFormReducer } from \'../../model/slices/addCommentFormSlice\'',
            errors: [],
        },
    ],

    invalid: [
        {
            filename: 'C:\\Users\\alex\\Desktop\\javascript\\production_project\\src\\entities\\Article',
            code: 'import { addCommentFormActions, addCommentFormReducer } from \'@/entities/Article/model/slices/addCommentFormSlice\'',
            errors: [{ message: 'В рамках одного слайса все пути должны быть относительными' }],
            options: [
                {
                    alias: '@'
                }
            ]
        },
        {
            filename: 'C:\\Users\\alex\\Desktop\\javascript\\production_project\\src\\entities\\Article',
            code: 'import { addCommentFormActions, addCommentFormReducer } from \'entities/Article/model/slices/addCommentFormSlice\'',
            errors: [{ message: 'В рамках одного слайса все пути должны быть относительными' }],
        },
    ],
});
