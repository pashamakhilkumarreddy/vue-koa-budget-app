<template>
  <div class="columns is-mobile is-centered is-vcentered mt-6">
    <!-- eslint-disable -->
    <div class="column is-10-mobile is-two-thirds-tablet is-half-desktop is-half-widescreen is-half-fullhd">
    <!-- eslint-enable -->
      <slot name="form-content">
        <h3 class="title is-3">Ohh! No slot content provided</h3>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormLayout',
};
</script>
<style lang="scss" scoped>
.form {
  padding: 2.5rem 3rem 3.5rem;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #ddd;
  border-radius: 5px;
}

h1 {
  font-family: 'LatoBold';
}

.aside-content {
  font-family: 'LatoItalic';
  font-size: 1.1rem;
  padding-right: 0.8rem;
}
</style>
