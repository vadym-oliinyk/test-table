<template>
  <button :class="variant">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',

  props: {
    variant: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style scoped>
button {
  background-color: white;
  border: none;
  font: inherit;
  cursor: pointer;
  color: #2385e4;
  padding: 9px 15px;
  border-radius: 4px;
  border: 1px solid white;
  transition: all 0.15s;
}

.primary:hover {
  border-color: #2385e4;
}

.outline {
  border-color: #2385e4;
}

.outline:hover {
  background-color: #2385e4;
  color: white;
}
</style>
