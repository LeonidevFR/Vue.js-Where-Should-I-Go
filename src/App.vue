<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Button class="p-button-primary p-button-rounded"> Content </Button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Button from "primevue/button";

export default {
  name: "App",
  components: {
    HelloWorld,
    Button,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
