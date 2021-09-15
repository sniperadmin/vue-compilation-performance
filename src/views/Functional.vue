<template>
  <BenchmarkLayoutVue v-model="play">
    <h2 slot="title">Functional Component</h2>

    <template #on>
      <div class="grid">
        <FunctionalOn
          v-for="n of list"
          :key="uid++"
          :value="n"
        />
      </div>
    </template>

    <template #off>
      <div class="grid">
        <FunctionalOff
          v-for="n of list"
          :key="uid++"
          :value="n"
        />
      </div>
    </template>
  </BenchmarkLayoutVue>
</template>

<script>
import BenchmarkLayoutVue from '@/layouts/BenchmarkLayout.vue';
import FunctionalOn from '@/components/functional/FunctionalOn.vue'
import FunctionalOff from '@/components/functional/FunctionalOff.vue'
export default {
  name: 'Functional',
  components: {
    BenchmarkLayoutVue,
    FunctionalOn,
    FunctionalOff
  },
  data() {
    return {
      play: false,
      list: [],
    }
  },

  watch: {
    play(value) {
      if (value) this.generate()
    }
  },

  created() {
    this.count = 800
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