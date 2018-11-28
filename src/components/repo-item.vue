<template>
  <div>
  <li>
    <h3>{{repository.name}}</h3>
     <p>Description: {{repository.description}}</p> 
     <p v-on:click="isOpen=!isOpen">Please click here for more info:</p>
     <div v-show="isOpen">
     <p>Forked {{repository.forks_count}} times</p>
     <p>Created: {{repository.created_at}}</p>
     <p>Updated at: {{repository.updated_at}}</p>
     <p>{{repository.watchers_count}} Watchers</p>
     <p>Has {{repository.open_issues_count}} issues</p>
     </div>
  </li>
  </div>
</template> 

<script>

export default {
  name: "repo-item",
  props: ["repository"],
  data: () => ({
    isOpen: false
  })
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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