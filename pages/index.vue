<template>
  <div class="container">
    <div>
      <img
        id="index-icon"
        src="https://cdn.discordapp.com/attachments/606109479003750442/811564657265475584/discord_.png"
      />
    </div>
    <p id="catch">マッチを飲み過ぎない世界へ</p>
    <div class="users-box">
      <user-button
        v-for="(item, index) in names"
        :key="index"
        :name="item.name"
        :link="item.url"
      />
    </div>
    <div class="bottom-box">
      <div class="signature">
        <p>@discord</p>
        <p>@toiawasesaki@Kokoa</p>
      </div>
    </div>
  </div>
</template>

<script>
import UserButton from '~/components/UserButton.vue'
export default {
  components: { UserButton },

  data() {
    return {
      names: [
        {
          name: 'UNo',
          url: '/user/uno',
        },
        {
          name: 'Kokoa',
          url: '/user/kokoa',
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
  background-image: url('/images/HomeBack.jpg');
  background-size: cover;
  background-attachment: fixed;
}
.users-box {
  width: 90%;
  background-color: rgba(238, 247, 255, 0.1);
  margin: auto;
  padding: 100px;
}

#index-icon {
  width: 100px;
  padding-top: 15vh;
  padding-bottom: 15vh;
}

#catch {
  font-size: 3em;
  color: rgb(236, 241, 255);
  padding-bottom: 10vh;
}

h1 {
  font-size: 6em;
  color: rgb(236, 241, 255);
  padding-top: 15vh;
}

.bottom-box {
  background-color: black;
  margin-bottom: 0;
  margin-top: 100px;
  padding: 50px;
}
.signature {
}

p {
  color: white;
  font-size: 15px;
}
</style>
