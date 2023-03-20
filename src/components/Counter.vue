<template>
  <div class="hello">
    <h1>Counter App</h1>
    <p>This is a Counter Application builts with Vue.</p>
    <h2>{{ count }}</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
 computed: {
   count() {
     return this.$store.state.count;
   },
 },
 methods: {
   increment() {
     this.$store.dispatch("asyncIncrement", 1);
   },
   decrement() {
     this.$store.dispatch("asyncDecrement", 1);
   }
 }

}
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
button{
  padding: 30px;
  margin: 10px;
  border: none;
  width:200px;
  height:50px;
  border-radius: 12px;
 font-weight: bolder;
  background-color: #42b983;
}
</style>
