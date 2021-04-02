<template>
<div class="wrapper">
  <div class="friends">
    <div class="friend" v-for="friend in friends" :key="friend.id">
      <div class="info">
      <div class="job">
        <p>{{friend.job}} Simulator</p>
              </div>
        <button class="auto" v-on:click="launch(friend.job)">Play!</button>
    </div>
  </div>
</div>
</div>
</template>


<script>
export default {
  name: 'FriendList',
  props: {
    friends: Array
  },
  methods: {
    launch(job) {
      this.$root.$data.currentGame = job;
      this.$router.push('/GameLaunch');
    }
  }
}

</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
}

.friends {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
}

.friend {
  border: 1px solid white;
  width: 100%;
}


.info p {
  color: white;
  margin: 0px;
  font-size: 24px;
}


button {
  padding: 20px;
  padding-bottom: 40px;
  align-items: right;
  height: 50px;
  width: 100px;
  background: #000;
  color: white;
  border: 1px solid white;
}


</style>
