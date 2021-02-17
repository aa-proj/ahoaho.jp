<template>
  <a>
    <div class="button-box" @click="$router.push(link)">
      <nuxt-link :to="link">
        <p class="button-user-name">{{ name }}</p></nuxt-link
      >
    </div>
  </a>
</template>

<script>
export default {
  name: 'UserButton',
  props: ['name', 'link'],
}
</script>

<style scoped>
a {
  width: 100%;
  height: 100%;
  text-decoration: none;
}
.button-user-name {
  font-size: 60px;
  color: rgb(164, 214, 255);
}

.button-box {
  width: 300px;
  height: 100px;
  background-color: rgba(238, 247, 255, 0.2);
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20p;
}
</style>
