<template>
  <div class="user-button">
    <div class="user-image">
      <img :src="item.icon" />
    </div>
    <div class="button-box" @click="$router.push(item.url)">
      <nuxt-link class="button-box-link" :to="item.url">
        <p class="button-user-name">{{ item.name }}</p></nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserButton',
  props: ['item'],
}
</script>

<style scoped lang="scss">
.user-button {
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
  background-color: rgba(240, 240, 255, 0);
  margin: 20px;
  // box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
}

.user-image img {
  width: 200px;
  height: 200px;
  border-radius: 100px;
}

.button-user-name {
  font-size: 60px;
  text-align: left;
  color: rgb(0, 140, 255);
  padding-left: 20px;
}

.button-box {
  width: 400px;
  height: 200px;
  background-color: rgb(240, 240, 255);
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
}

.button-box-link {
  text-decoration: none !important;
}
</style>
