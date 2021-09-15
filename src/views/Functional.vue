<template>
  <BenchmarkLayoutVue v-model="play">
    <h2 slot="title">Functional Component</h2>

    <template #on>
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="grid">
              <FunctionalOn
                v-for="n of list"
                :key="uid++"
                :value="n"
              />
            </div>
          </v-col>
  
          <v-col class="my-auto">
            <FancyBrowserWindow :files="[functionalFiles[1]]" />
          </v-col>
        </v-row>
      </v-container>
    </template>

    <template #off>
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="grid">
              <FunctionalOff
                v-for="n of list"
                :key="uid++"
                :value="n"
              />
            </div>
          </v-col>
  
          <v-col class="my-auto">
            <FancyBrowserWindow :files="[functionalFiles[0]]" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </BenchmarkLayoutVue>
</template>

<script>
import BenchmarkLayoutVue from '@/layouts/BenchmarkLayout.vue';
import FunctionalOn from '@/components/functional/FunctionalOn.vue'
import FunctionalOff from '@/components/functional/FunctionalOff.vue'
import FancyBrowserWindow from '@/components/window-subs/FancyBrowserWindow.vue'


function loadFunctionalComponentFiles() {
  const context = require.context('!!raw-loader!../components/functional', false, /\.(vue|js)$/)

  return context.keys().map(name => ({
    name: name.replace('./', ''),
    lang: 'vue',
    content: context(name)
  }))
}

const functionalFiles = loadFunctionalComponentFiles()

export default {
  name: 'Functional',
  components: {
    BenchmarkLayoutVue,
    FunctionalOn,
    FunctionalOff,
    FancyBrowserWindow,
  },
  data() {
    return {
      play: false,
      list: [],
      functionalFiles
    }
  },

  watch: {
    play(value) {
      if (value) this.generate()
    }
  },

  created() {
    this.count = 500
    this.uid = 0
    this.generate()
  },
  
  methods: {
    generate() {
      const data = []
      for (let i = 0; i < this.count; i++) {
        data.push(Math.random() < 0.5)
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
}
.grid >>> .cell .on,
.grid >>> .cell .off {
  width: 100%;
  height: 100%;
  color: transparent;
  border-radius: 50%;
}
.grid >>> .cell .on {
  background: #2c3e50;
}
.grid >>> .cell .off {
  background: #4f6f7f;
}

</style>