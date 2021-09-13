import { compile } from 'vue-template-compiler'
import stripWith from 'vue-template-es2015-compiler'
import * as prettier from 'prettier/standalone'
import * as babylon from 'prettier/parser-babylon'

function toFunction(strip, code, name = '()', stripWithFunctional) {
  code = `function ${name} { ${code} }`

  return strip ? stripWith(code, { transforms: { stripWithFunctional } }) : code
}


export function compileTemplate(template, options = {}) {
  options = { optimize: true, stripWith: true, ...options }

  const { render, staticRenderFns } = compile(template.content, options)
  const code = `export ${toFunction(
    options.stripWith,
    render,
    `render(${template.attrs.functional ? '_h,_vm' : ''})`,
    template.attrs.functional || false
  )}\n` +
    `export const staticRenderFns = [${staticRenderFns.map((fn, i) => toFunction(options.stripWith, fn, `_${i} ()`)).join(', ')}]`

  return prettier.format(code, { parser: 'babylon', plugins: [babylon], printWidth: 40 })
}
