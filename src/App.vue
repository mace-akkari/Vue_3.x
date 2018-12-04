<template>
  <div id="app">
    <div id="vue-repos">
      <h1>Vue.js repositories</h1> 
      <repoList v-bind:repositories="vueRepos"></repoList>
      <hr>
      <repoList v-bind:repositories="fbRepos"></repoList>
    </div>
  </div>
</template>

<script>
import repoList from "./components/repo-list.vue";

export default {
  name: "app",
  components: {
    repoList
  },
  // data function- private no one can 
  data() {
    return {
      vueRepos: [],
      fbRepos: []
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
        return (this.vueRepos = data);
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