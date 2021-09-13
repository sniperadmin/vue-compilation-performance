<!-- Render Function Explorer -->
<template>
  <Window v-on="$listeners">
    <template slot="title">
      Render Function

      <select v-model="optimize">
        <option value="true">(optimized)</option>
        <option value="false">(unoptimized)</option>
      </select>
    </template>

    <CodePreview language="javascript">
      {{ output }}
    </CodePreview>
  </Window>
</template>

<script>
import { parseComponent } from "vue-template-compiler";
import compiler from './componentCompiler.js';
import { compileTemplate } from './compilers'
import Window from "./window-subs/Window.vue";
import CodePreview from "./CodePreview.vue";
  export default {
    name: 'RFExplorer',
    components: {
      Window,
      CodePreview
    },
    extends: compiler,

    props: {
      code: {
        type: String,
        required: true,
      },
      stripWith: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        optimize: true,
      }
    },

    computed: {
      output() {
        const { template } = parseComponent(this.code)

        return compileTemplate(template, { optimize: this.optimize, stripWith: this.stripWith })
      }
    }
  }
</script>

<style scoped>

</style>