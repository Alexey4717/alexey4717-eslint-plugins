/**
 * @fileoverview feature sliced relative path checker
 * @author aleksei
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/path-checker"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  // parserOptions: { ecmaVersion: 6, sourceType: "module" } - без этого работает, с этим нет
});

ruleTester.run("path-checker", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      filename: "C:\\Users\\Alexey\\Desktop\\project\\src\\entities\\Article\\model\\types\\article.ts",
      code: "import { Article } from '../../model/types/article.ts'",
      errors: [],
    },
  ],

  invalid: [
    {
      filename: "C:\\Users\\Alexey\\Desktop\\project\\src\\entities\\Article\\model\\types\\article.ts",
      code: "import { Article } from '@/entities/Article'",
      errors: [{ message: "all paths must be relative inside the same slice", }],
      options: [
        {
          alias: '@'
        }
      ],
    },
    {
      filename: "C:\\Users\\Alexey\\Desktop\\project\\src\\entities\\Article\\model\\types\\article.ts",
      code: "import { Article } from 'entities/Article'",
      errors: [{ message: "all paths must be relative inside the same slice", }],
    },
  ],
});
