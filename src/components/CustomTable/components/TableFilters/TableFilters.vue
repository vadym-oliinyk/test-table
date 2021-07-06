<template>
  <div>
    <label v-for="{ title, name, isHidden } in notEmptyFields" :key="name">
      <input
        type="checkbox"
        :checked="!isHidden"
        @change="changeHandler($event, name)"
      />
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'TableFilters',

  props: {
    fields: {
      type: Array,
      required: true,
    },
  },

  computed: {
    notEmptyFields() {
      return this.fields.filter(({ title }) => Boolean(title));
    },
  },

  methods: {
    changeHandler({ target: { checked } }, name) {
      this.$emit('change', { checked, name });
    },
  },
};
</script>

<style scoped>
label:not(:last-child) {
  margin-right: 10px;
}

@media (max-width: 768px) {
  label {
    display: block;
  }

  label:not(:last-child) {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
