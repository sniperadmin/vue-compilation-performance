<template>
<div id="bench">
  <v-toolbar>
    <v-toolbar-title>
      <slot name="title">Title here</slot>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn-toggle
      v-model="toggle"
      borderless
      class="mr-5"
    >
      <v-btn :color="toggle === 0 ? 'orange' : 'transparent'">
        <v-icon v-if="toggle === 0" left>
          mdi-check
        </v-icon>
        Unoptimized
      </v-btn>

      <v-btn :color="toggle === 1 ? 'success' : 'transparent'">
        <v-icon v-if="toggle === 1" left>
          mdi-check
        </v-icon>
        Optimized
      </v-btn>
    </v-btn-toggle>


    <v-btn v-if="value" @click="$emit('input', false)" color="indigo">
      <v-icon left>
        mdi-stop
      </v-icon>
      Stop
    </v-btn>
    <v-btn v-else @click="$emit('input', true)" color="error">
      <v-icon left>
        mdi-play
      </v-icon>
      start
    </v-btn>
  </v-toolbar>

  <div class="content">
    <slot v-if="toggle == 1" name="on"></slot>
    <slot v-else name="off"></slot>
  </div>
  <slot></slot>
</div>
</template>

<script>
import Stats from 'stats.js'
  export default {
    props: {
      value: Boolean,
    },
    data() {
      return {
        toggle: 0,
      }
    },
    mounted() {
      const stats = new Stats()
      stats.showPanel(0)
      document.getElementById('bench').appendChild(stats.dom)

      stats.dom.style.left = ''
      stats.dom.style.right = '0px'
      stats.dom.style.top = '20%'

      function animate() {
        stats.begin();
        // monitored code goes here
        stats.end();
        requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    }
  };
</script>

<style scoped>
.content {
  /* flex: 1; */
  background: black;
  overflow: hidden;
}
</style>