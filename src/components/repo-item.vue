<template>
  <li>
    <h3>{{repository.name}}</h3>
     <p>Description: {{repository.description}}</p> 
     <p class="drop" v-on:click="isOpen=!isOpen">Please click here for more info:</p>
     <div v-show="isOpen">
     <p>Forked {{repository.forks_count}} times</p>
     <p>Created: {{repository.created_at}}</p>
     <p>Updated at: {{repository.updated_at}}</p>
     <p>{{repository.watchers_count}} Watchers</p>
     <p>Has {{repository.open_issues_count}} issues</p>
     </div>
  </li>
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
  font-size: 25px
}
li {
  display: block;
  margin: 10px auto;
  border: 2px solid black;

}
a {
  color: #42b983;
}

.drop {
  font-weight: bold;
  color: blue;
}

</style>