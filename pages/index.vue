<template>
  <div class="container">
    <div>
      <img
        id="index-icon"
        src="https://cdn.discordapp.com/attachments/606109479003750442/811564657265475584/discord_.png"
      />
    </div>
    <p>八田に考えてもらう文章</p>
    <user-button
      v-for="(item, index) in names"
      :key="index"
      :name="item.name"
      :link="item.url"
    />
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
  padding-bottom: 100px;
}

#index-icon {
  width: 100px;
  padding-top: 15vh;
  padding-bottom: 30vh;
}

p {
  font-size: 3em;
  color: rgb(236, 241, 255);
  padding-top: 5vh;
  padding-bottom: 5vh;
}

h1 {
  font-size: 6em;
  color: rgb(236, 241, 255);
  padding-top: 15vh;
}
</style>
