<template>
  <div :style="{ opacity: value / 300 }">
    <!-- Now we split the component -->
    <ChildComponent/>
  </div>
</template>

<script>
export default {
  components: {
    // NOTE: This is the child
    ChildComponent: {
      methods: {
        heavy () {
          const n = 100000
          let result = 0
          for (let i = 0; i < n; i++) {
            result += Math.sqrt(Math.cos(Math.sin(42)))
          }
          return result
        },
      },
      render (h) {
        return h('div', this.heavy())
      },
    },
  },
  props: ['value'],
}
</script>
