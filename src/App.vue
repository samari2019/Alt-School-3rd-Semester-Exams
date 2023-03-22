<template>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/NotFoundPage">404 Page</router-link>
    <router-view/>
  </nav>
  

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
 background-color: rgba(165, 255, 255, 0.411)
/* background-image: linear-gradient(to right, rgba(43, 192, 155, 0.5),rgba(255, 175, 175, 0.63));*/
}
nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
