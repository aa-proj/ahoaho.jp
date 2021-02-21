<template>
  <div class="user-button">
    <div class="user-image">
      <img :src="item.icon" />
    </div>
    <div class="button-box" @click="$router.push(item.url)">
      <nuxt-link class="button-box-link" :to="item.url">
        <p class="button-user-name">{{ item.name }}</p>
        <p class="button-user-about">一週間水だけで生きれます。試しました。</p>
      </nuxt-link>
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
  width: 1000px;
  text-decoration: none;
  margin: auto;
  padding-top: 100px;
  margin-bottom: 200px;
  margin-left: 150px;
  display: flex;
  justify-content: center;
}

.user-image {
  width: 200px;
  height: 200px;
  background-color: rgba(240, 240, 255, 0);
  margin: 20px;
}

img {
  filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.5));
}

.user-image img {
  width: 200px;
  height: 200px;
  border-radius: 100px;
}

.button-user-name {
  font-size: 70px;
  text-align: left;
  color: rgb(255, 255, 255);
  padding-left: 30px;
}
.button-user-about {
  font-size: 20px;
  text-align: left;
  color: rgb(255, 255, 255);
  padding-left: 100px;
  padding-top: 20px;
}

.button-box {
  width: 800px;
  height: 200px;
  border-right: solid;
  border-width: 5px;
  border-color: rgb(255, 255, 255);
  //border: groove;
  background-color: rgba(240, 240, 255, 0);
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 100px;
  padding-right: 100px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0);
}

.button-box-link {
  text-decoration: none !important;
}
</style>
