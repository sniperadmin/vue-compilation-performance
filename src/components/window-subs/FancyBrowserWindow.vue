<template>
  <Window v-on="$listeners" v-bind="$attrs">
    <select slot="title" class="selector" v-model.number="index" @click.stop="() => {}">
      <option v-for="(item, i) in files" :value="i" :key="item.name">
        {{ item.name }}
      </option>
    </select>

    <CodePreview :language="file.lang" :code="file.content.default" />
  </Window>
</template>

<script>
  import Window from './Window.vue'
  import CodePreview from '@/components/CodePreview.vue'

  export default {
    name: 'FancyBrowserWindow',
    inheritAttr: false,
    components: {
      Window,
      CodePreview
    },
    props: {
      files: {
        type: Array,
        required: true
      },
      active: [Number, String]
    },

    data() {
      return { index: 0 }
    },

    computed: {
      file() {
        return this.files[this.index]
      }
    },

    watch: {
      file: {
        immediate: true,
        deep: true,
        handler(value) {
          this.$emit('pick', value)
        }
      },

      active: {
        immediate: true,
        handler(value) {
          if (Number.isSafeInteger(value)) {
            this.index = Math.max(0, value)
          } else {
            this.index = Math.max(0, this.files.findIndex(file => file.name.startsWith(`${value}`)))
          }
        }
      }
    }
  };
</script>

<style scoped>
.selector {
  background: transparent;
  border: none;
  font-size: 0.75rem;
}
.selector:focus {
  outline: none;
}
</style>
