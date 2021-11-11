<template>
  <div>
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "my-button-add-comment"
}
</script>

<style scoped>

.btn {
  height: 80%;
  cursor: pointer;
  background: repeating-linear-gradient(45deg, #f0f1f4, #f0f1f4 1px, white 1px, white 6px);
  text-transform: uppercase;
  border: 1px solid #a6adbf;
  color: #6B7794;
  font-weight: bold;
  padding: 15px;
  width: 200px;
  box-sizing: border-box;
  margin-top: 5px;
}



</style>