<template>
  <div id="app">
    <search :images.sync="images"></search>
    <ul>
      <li v-for="image in images" v-bind:key="image">
        <img v-bind:src="image"
          v-clipboard:copy="image"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError">
      </li>
    </ul>
  </div>
</template>

<script>
import search from "./components/Search.vue"

export default {
  name: 'app',
  data () {
    return {
      images: []
    }
  },
  methods: {
    onCopy() {
      this.$toaster.success('Yayyyyyyyyy');
    },
    onError() {
      this.$toaster.error('you messed up big time');
    }
  },
  components: {search}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
