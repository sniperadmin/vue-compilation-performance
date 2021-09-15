<template>
  <div class="greeting" v-console:warn="'Name is ' + name">
    <h1>Hello {{ name }}!</h1>

    <div>
      <input style="border: 1px solid blue" type="text" v-model="name" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Jane Doe'
    }
  }
}
</script>
