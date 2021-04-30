<template>
  <div class="button">{{ name }}</div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: ['name'],
}
</script>

<style scoped>
.button {
  width: 220px;
  height: 220px;
  margin: 10px;
  border-radius: 70px;
  background-color: rgba(32, 32, 32, 0.7);
}
</style>
