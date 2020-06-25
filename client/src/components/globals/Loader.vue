<template>
  <div class="ripple-loader" v-if="showLoader">
    <div></div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'Loader',
  props: {
    showLoader: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
  .ripple-loader {
    display: inline-block;
    position: relative;
    width: 5rem;
    height: 5rem;
  }

  .ripple-loader>div {
    position: absolute;
    border: 0.25rem solid;
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .ripple-loader div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes ripple {
    0% {
      top: 2rem;
      left: 2rem;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: 0;
      left: 0;
      width: 4.5rem;
      height: 4.5rem;
      opacity: 0;
    }
  }
</style>
