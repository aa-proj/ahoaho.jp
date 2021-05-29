<template>
  <div class="container">
    <section>
      <!--
    <img id="ImgBlur" src="/images/HomeBackBlur.png" />
    -->
      <div>
        <img id="index-icon" src="/images/sample-icon.png" />
      </div>

      <p id="catch">マッチを飲み過ぎない世界へ</p>
      <div class="base-buttons">
        <base-button
          v-for="(item, index) in bases"
          :key="index"
          :name="item.name"
        />
      </div>
      <div class="users-box">
        <user-button v-for="(item, index) in names" :key="index" :item="item" />
      </div>
    </section>
    <div class="footer">
      <div class="signature">
        <p>
          ©aa-proj 2020-2021 <a href="https://github.com/aa-proj">GitHub</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from '~/components/BaseButton.vue'
import UserButton from '~/components/UserButton.vue'

export default {
  components: { UserButton, BaseButton },

  data() {
    return {
      names: [
        {
          name: 'UNo',
          url: '/user/uno',
          icon: '/images/uno-avatar.jpg',
        },
        {
          name: 'Kokoa',
          url: '/user/kokoa',
          icon: '/images/kokoa-avatar.png',
        },
         {
          name: 'ao',
          url: '/user/namari-by-shapingrain/',
          icon: '/images/-lkxQu2N_400x400.jpg',
        },
      ],
      bases: [
        {
          name: 'sleeptime',
        },
        {
          name: 'board',
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  width: 100vw;
  text-align: center;
  background-image: url('/images/HomeBack.png');
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}
section {
  width: 720px;
  margin: auto;
}

.base-buttons {
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
}

#ImgBlur {
  width: 100%;
  position: fixed;
  opacity: 0;
  left: 0;
}

.users-box {
  background-color: rgba(32, 32, 32, 0.7);
  border-radius: 70px;
  padding-bottom: 50px;
  box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.5);
}

#index-icon {
  width: 300px;
  padding-top: 25vh;
  padding-bottom: 6vh;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
}

#catch {
  font-size: 3em;
  font-family: serif;
  color: rgb(236, 241, 255);
  padding-bottom: 10vh;
  text-shadow: black;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.7));
}

h1 {
  font-size: 6em;
  color: rgb(236, 241, 255);
  padding-top: 15vh;
}

.footer {
  background-color: black;
  margin-bottom: 0;
  margin-top: 100px;
  padding: 50px;
}

.signature a {
  color: #b8b8b8;
  text-decoration: none;
}

p {
  color: white;
  font-size: 15px;
}
</style>
