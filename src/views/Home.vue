<template>
  <v-container>
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
    <!-- <CodePreview
      language="js"
    >
      module.exports = {
        chainWebpack: config => {
          config.module.rule('vue').use('vue-loader')
            .tap(options => {
              options.modules = {
                ...options.modules,
                postTransformNode
              }
              return options
            })
          }
        }
    </CodePreview> -->
    <v-row>
      <v-col>
        <FancyBrowserWindow :files="files" active="GreetingExample" @pick="logit" />
      </v-col>
      <v-col>
        <SFCExplorer :code="file ? file.content.default : ''" />
      </v-col>
  
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import CodePreview from '@/components/CodePreview.vue'
import FancyBrowserWindow from '@/components/window-subs/FancyBrowserWindow.vue'
import SFCExplorer from '../components/SFCExplorer.vue'

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
    SFCExplorer
  },
  data() {
    return {
      files,
      file: null
    }
  },
  methods: {
    logit(e) {
      console.info(e);
      this.file = e
    }
  }
}
</script>
