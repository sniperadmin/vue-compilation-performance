<template>
  <Window title="SFC Descriptor" @click.native.stop="() => {}">
    <div class="sfc">
      <ObjectExplorer :value="output" />
    </div>
  </Window>
</template>

<script>
import Window from './window-subs/Window.vue'
import ObjectExplorer from './window-subs/ObjectExplorer.vue'

import { parseComponent } from 'vue-template-compiler'
export default {
  name: 'SFCExplorer',
  components: {
    Window,
    ObjectExplorer
  },
  props: {
    code: {
      type: String,
      required: true
    }
  },
  computed: {
    output () {
      return parseComponent(this.code)
    }
  }
}
</script>

<style scoped>
.sfc {
  padding: 0.5rem;
}
</style>
