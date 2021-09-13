<template>
  <Window title="Abstract Syntax Tree" v-on="$listeners">
    <div class="ast">
      <ObjectExplorer :value="output.ast" />
    </div>
  </Window>
</template>

<script>
  import Window from './window-subs/Window.vue'
  import ObjectExplorer from './window-subs/ObjectExplorer.vue'
  import { compile, parseComponent } from 'vue-template-compiler'

  export default {
    name: 'ASTExplorer',
    components: {
      Window,
      ObjectExplorer
    },
    props: {
      code: {
        type: String
      }
    },
    computed: {
      output() {
        return this.code ? compile(parseComponent(this.code).template.content) : '{}'
      }
    }
  };
</script>

<style scoped>
.ast {
  padding: 0.5rem;
}
</style>