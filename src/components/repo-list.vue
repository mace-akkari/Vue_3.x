<template>
  <ul>
    <repoItem 
      v-for="repo in repositories" :key="repo.id"
      v-bind:repository="repo"
    >
    </repoItem>
  </ul>
</template>

<script>
import repoItem from "./repo-item.vue";

export default {
  name: "repo-list",
  components: {
    repoItem
  },
  props: ["repositories"]
};
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>