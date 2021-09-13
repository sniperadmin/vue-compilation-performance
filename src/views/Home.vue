<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <img alt="Vue logo" src="../assets/logo.png">
        <img alt="Vuetify logo" width="200" src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg">
      </v-col>

      <v-col>
        <h2>Vue POC Compiling Mechanics</h2>
        <p>
          Prepared by Nasr Galal
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <FancyBrowserWindow :files="files" active="GreetingExample" @pick="logit" />
      </v-col>

      <v-col cols="3">
        <SFCExplorer :code="file ? file.content.default : ''" />
      </v-col>
      
      <v-col cols="3">
        <!-- NOTE: Read more about component.sync -->
        <component
          v-if="file"
          :is="explorer"
          :code="file ?file.content.default : ''"
          :strip-with="true"
          :component.sync="component"
        />
      </v-col>

      <v-col cols="2">
        Preview component
        <ComponentPreview :component="component" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import CodePreview from '@/components/CodePreview.vue'
import FancyBrowserWindow from '@/components/window-subs/FancyBrowserWindow.vue'
import SFCExplorer from '../components/SFCExplorer.vue'
import RFExplorer from '../components/RFExplorer.vue'
import ComponentPreview from '../components/ComponentPreview.vue'

function loadFiles() {
  const context = require.context('!!raw-loader!../files/', false, /\.(vue|js)$/)

  return context.keys().map(name => ({
    name: name.replace('./', ''),
    lang: name.endsWith('.vue') ? 'vue' : 'js',
    content: context(name)
  }))
}

const files = loadFiles()
export default {
  name: 'Home',
  components: {
    // CodePreview,
    FancyBrowserWindow,
    SFCExplorer,
    RFExplorer,
    ComponentPreview
  },
  data() {
    return {
      files,
      file: null,
      explorer: 'RFExplorer',
      component: null
    }
  },
  methods: {
    logit(e) {
      this.file = e
    }
  }
}
</script>
