<template>
  <div :style="{ opacity: value / 300 }">
    <!-- Some heavy duty component -->
    <div>{{ heavy() }}</div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    // NOTE: heavy logic
    heavy () {
      const n = 100000
      let result = 0
      for (let i = 0; i < n; i++) {
        result += Math.sqrt(Math.cos(Math.sin(42)))
      }
      return result
    },
  },
}
</script>
