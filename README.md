# eslint-plugin-alexey4717-plugin

plugin for production project

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-alexey4717-plugin`:

```sh
npm install eslint-plugin-alexey4717-plugin --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-alexey4717-plugin` and add `alexey4717-plugin` to the `plugins` key:

```js
import alexey4717-plugin from "eslint-plugin-alexey4717-plugin";

export default [
    {
        plugins: {
            alexey4717-plugin
        }
    }
];
```


Then configure the rules you want to use under the `rules` key.

```js
import alexey4717-plugin from "eslint-plugin-alexey4717-plugin";

export default [
    {
        plugins: {
            alexey4717-plugin
        },
        rules: {
            "alexey4717-plugin/rule-name": "warn"
        }
    }
];
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


