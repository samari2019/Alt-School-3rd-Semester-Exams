
<template>
  <div class="counter">
    <h1>Counter App</h1>
    <p>This is a Counter Application builts with Vue.</p>
    <h1>{{ count }}</h1>
    <div className="btn">
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
   <button @click="handleReset">SetValue</button>
  <!-- <input v-model="updateMessage" >-->
   <!-- <input :value="message" @input="updateMessage"> -->
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
 computed: {
   count() {
     return this.$store.state.count;
   },
  // ...mapState({
    // message: state => state.count 
  // }),
  
 },
 methods: {
   increment() {
     this.$store.dispatch("asyncIncrement", 1);
   },
   decrement() {
     this.$store.dispatch("asyncDecrement", 1);
   },
    handleReset() {
     this.$store.commit("setReset")
   }
 }
  //updateMessage (e) {
    // this.$store.commit('updateMessage', e.target.value = Number(e.target.value))
  // },
  // setCount() {
    // this.$store.commit("setCount", this.set)
  // },

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
.btn{
  display: flex;
  flex-direction: column;
  align-items: center;
}
button{
  padding: 30px;
  margin: 10px;
  border: none;
  width:200px;
  height:50px;
  border-radius: 12px;
  font-weight: bolder;
  font-size: 18px;
  background-color: #42b983;
  color: #FFFFFF;
  text-align: center;
}
p{
  font-size: 18px;
}
h1{
  font-size: 40px;
  
}
input{
  width:200px;
  height:40px;
  background-color: rgba(0, 0, 0, 0.644);
  color: #FFFFFF;
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
  border-radius: 12px;
}
</style>
