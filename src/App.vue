<template>
  <div id="app">
    <div id="vue-repos">
      <h1>Vue.js repositories</h1> 
      <repo-item 
          v-for="(repos, keys) in repos"
          v-bind:repository="repos"
          >
        </repo-item>
    </div>
  </div>
</template>

<script>
import repoItem from "./components/repo-item.vue";

export default {
  name: "app",
  components: {
    repoItem
  },
  // data function- private no one can 
  data() {
    return {
      repos: []
    };
  },
  created() {
    fetch(gitHubURL("vuejs"))
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Bad Response");
        }
      })
      .then(data => {
        return (this.repos = data);
      })
      .catch(error => {
        console.error(error);
      });
  }
};

//------- Functions -----------

function gitHubURL(gitUser) {
  return `https://api.github.com/users/${gitUser}/repos`;
}
</script>

<style>
html {
  background-color: lightgoldenrodyellow;
  text-align: center;
}
</style>

<!-- Comment <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
