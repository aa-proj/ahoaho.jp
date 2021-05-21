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
  text-decoration: none;
  margin: auto;
  padding-top: 50px;
  display: flex;
  justify-content: center;
}

.user-image {
  background-color: rgba(240, 240, 255, 0);
  margin: 30px;
}

img {
  filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.5));
}

.user-image img {
  width: 150px;
  height: 150px;
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
  width: auto;
  height: 150px;
  margin: auto;
  margin-right: 50px;
  border-right: solid;
  border-width: 5px;
  border-color: rgb(255, 255, 255);
  //border: groove;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    95%,
    rgba(143, 143, 143, 0.3)
  );
  //background-color: rgba(240, 240, 255, 0);
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0);
}

.button-box-link {
  text-decoration: none !important;
}
</style>
