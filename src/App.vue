<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
require('../static/reset.css');
export default {
  name: 'app',
	data() {
		return {
      }
    },
    methods: {
      change: function () {
      }
    }
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
