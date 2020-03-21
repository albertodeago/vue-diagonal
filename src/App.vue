<template>
  <div id="app">
    <h1 class="align-center">VUE DIAGONAL</h1>
    <div style="text-align: right">
      content before, you can choose to not overlap it
    </div>
    <div class="align-center">
      <vue-diagonal :deg="-8"
                background="#00d4ff"
                space-before
      >
        <h2>With a solid color</h2>
      </vue-diagonal>
      <vue-diagonal :deg="-8"
                background="linear-gradient(183deg, rgba(0,212,255,1) 0%, rgba(85,239,136,1) 52%, rgba(0,212,255,1) 100%)"
      >
        <h2>With a beautiful gradient</h2>
      </vue-diagonal>
      <vue-diagonal :deg="-8"
                background="url('./pattern.png')"
                space-after
      >
        <h2 style="color: white">
          <div>
            With background image
          </div>
          <div>
            Beware, the image is being skewed, not cool with a lot of images
          </div>
        </h2>
      </vue-diagonal>
      
    </div>
    <div>
      and this is a content after, you can choose to avoid overlapping at bottom too
    </div>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.align-center {
  text-align: center;
}
</style>