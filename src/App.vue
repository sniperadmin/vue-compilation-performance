<template>
  <v-app>
    <v-app-bar app dark>
      <v-btn
        v-for="btn in btns"
        :key="btn.id"
        plain
        color="success"
        exact
        active-class="white--text"
        :to="btn.to"
        class="text-subtitle-1"
      >
        {{ btn.title }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      btns: [
        { id: 1, title: 'Home', to: '/' },
        { id: 2, title: 'Functional Component', to: '/benchmarks/functional' },
      ],
    }
  }
}
</script>

<style>

</style>
