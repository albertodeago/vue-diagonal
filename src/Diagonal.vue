<template>
  <div :class="classes" :style="cssVars">
    <div class="diagonal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-diagonal",

  props: {
    /**
     * Inclination, in deg
     */
    deg: Number,

    /**
     * Max width of the slot. This changes the padding top and bottom
     */
    maxWidth: {
      type: String,
      default: "100%"
    },

    /**
     * The background property
     */
    background: String,

    /**
     * If true it adds extra margin at top to avoid overlapping with previous elements
     */
    spaceBefore: Boolean,

    /**
     * If true it adds extra margin at bottom to avoid overlapping with next elements
     */
    spaceAfter: Boolean
  },

  computed: {

    classes() {
      return {
        "diagonal-container": true,
        "space-before": this.spaceBefore,
        "space-after": this.spaceAfter
      }
    },

    /**
     * Css vars to inject in the component
     */
    cssVars() {
      const angleRad = (this.deg * Math.PI) / 180;
      const number = Math.abs(Math.tan(angleRad) / 2);
      console.log(this.background);
      return {
        "--v-diag-width": this.maxWidth + "",
        "--v-diag-angle": this.deg + "deg",
        "--v-diag-number": number,
        "--v-diag-background": "" + this.background,
        "--v-diag-skew-padding": `calc(var(--v-diag-width) * var(--v-diag-number))`
      };
    }
  }
};
</script>


<style>

/* container has just padding to avoid to cut previous and next content */
.diagonal-container {
  position: relative;
  padding: var(--v-diag-skew-padding) 0;
}
.diagonal-container.space-before {
  margin-top: var(--v-diag-skew-padding);
}
.diagonal-container.space-after {
  margin-bottom: var(--v-diag-skew-padding);
}
/* on before you put the background and we skew it */
.diagonal-container:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: skewy(var(--v-diag-angle));
  transform-origin: 50% 0;
  margin-top: -1px; /* this is a to "attach" completely 2 consecutive vue-diagonal components */
  background: var(--v-diag-background);
}

/* the content that will be filled by the slot */
.diagonal-content {
  max-width: var(--v-diag-width);
  position: relative;
}
</style>
