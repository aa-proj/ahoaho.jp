<template>
  <a>
    <div class="user-image"></div>
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
  width: 700px;
  text-decoration: none;
  margin: auto;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
}

.user-image {
  width: 200px;
  height: 200px;
  background-color: rgba(240, 240, 255, 1);
  margin: 20px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
}

.button-user-name {
  font-size: 60px;
  text-align: left;
  color: rgb(164, 214, 255);
}

.button-box {
  width: 400px;
  height: 200px;
  background-color: rgb(240, 240, 255);
  margin-top: 20px;
  margin-bottom: 20p;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
}
</style>
