<template>
  <BenchmarkLayoutVue v-model="play">
    <h2 slot="title">Functional Component</h2>

    <template #on>
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="grid">
              <ChildOn
                v-for="(n, index) of list"
                :key="index"
                :value="n"
                class="cell"
              />
            </div>
          </v-col>
  
          <v-col class="my-auto">
            <FancyBrowserWindow :files="[childFiles[1]]" />
          </v-col>
        </v-row>
      </v-container>
    </template>

    <template #off>
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="grid">
              <ChildOff
                v-for="(n, index) of list"
                :key="index"
                :value="n"
                class="cell"
              />
            </div>
          </v-col>
  
          <v-col class="my-auto">
            <FancyBrowserWindow :files="[childFiles[0]]" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </BenchmarkLayoutVue>
</template>

<script>
import BenchmarkLayoutVue from '@/layouts/BenchmarkLayout.vue';
import ChildOn from '@/components/child/ChildOn.vue'
import ChildOff from '@/components/child/ChildOff.vue'
import FancyBrowserWindow from '@/components/window-subs/FancyBrowserWindow.vue'


function loadChildComponentFiles() {
  const context = require.context('!!raw-loader!../components/child', false, /\.(vue|js)$/)

  return context.keys().map(name => ({
    name: name.replace('./', ''),
    lang: 'vue',
    content: context(name)
  }))
}

const childFiles = loadChildComponentFiles()

export default {
  name: 'Child',
  components: {
    BenchmarkLayoutVue,
    ChildOn,
    ChildOff,
    FancyBrowserWindow,
  },
  data() {
    return {
      play: false,
      list: [],
      childFiles
    }
  },

  watch: {
    play(value) {
      if (value) this.generate()
    }
  },

  created() {
    this.count = 300
    this.generate()
  },
  
  methods: {
    generate() {
      const data = []
      for (let i = 0; i < this.count; i++) {
        data.push(Math.random() * 300)
      }
      this.list = data
      this.play && requestAnimationFrame(this.generate)
    }
  }
}
</script>

<style scoped>
  .grid {
  margin: 24px auto;
  max-width: 896px;
}
.grid >>> .cell {
  float: left;
  width: 24px;
  height: 24px;
  margin: 2px;
  color: transparent;
  background: #4f6f7f;
  border-radius: 50%;
}
</style>