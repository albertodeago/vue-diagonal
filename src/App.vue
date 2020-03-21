<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to Your Plugin in Vue.js</h1>
    <diagonal :deg="10"
              background="salmon"
              space-before
              space-after
    >
      My content
    </diagonal>
    <div style="text-align: right">
      <h1>and this is a content after</h1>
    </div>
  </div>
</template>


<style>
#app {
  /*text-align: center;*/
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}
</style>