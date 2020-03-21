<template>
  <div class="diagonal-container" :style="cssVars">
    <div class="diagonal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "diagonal",
  props: {
    deg: Number, // inclination
    maxWidth: String, // max-width of slot box
    background: String // the css background value
  },
  computed: {
    cssVars() {
      const angleRad = (this.deg * Math.PI) / 180;
      const number = Math.abs(Math.tan(angleRad) / 2);
      console.log(this.background);
      return {
        "--v-diag-width": this.maxWidth + "",
        "--v-diag-angle": this.deg + "deg",
        "--v-diag-magic-number": number,
        "--v-diag-background": "" + this.background,
        "--v-diag-skew-padding": `calc(var(--v-diag-width) * var(--v-diag-magic-number))`,
        "--v-diag-clip-padding": `calc(var(--v-diag-full-width) * var(--v-diag-magic-number))`
      };
    }
  },
  mounted() {
    console.log("mounted");
  }
};
</script>


<style>

.diagonal-container {
  position: relative;
  padding: var(--v-diag-skew-padding) 0;
}
.diagonal-container:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: skewy(var(--v-diag-angle));
  transform-origin: 50% 0;
  outline: 1px solid transparent;
  backface-visibility: hidden;
  background: var(--v-diag-background);
}

.diagonal-content {
  max-width: var(--v-diag-width);
  margin: 0 auto;
  text-align: center;
  padding: 1.5em;
  position: relative;
}
</style>
