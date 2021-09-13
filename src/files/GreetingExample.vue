<template>
  <div class="greeting">
    Hello {{ name }}!
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style scoped>
.greeting {
  color: green;
}
</style>
