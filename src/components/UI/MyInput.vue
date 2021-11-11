<template>

    <input
        :value="modelValue"
        @input="updateInput"
        class="input"
        type="text"
    >

</template>

<script>

export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {

  border: 1px solid #939a9f;
  text-align: start;
  color: dimgrey;
  min-width: 370px;
  margin-right: 2px;
  padding: 10px 15px;
  margin-top: 15px;
}

</style>