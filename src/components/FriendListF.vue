<template>
<div class="wrapper">
  <div class="friends">
    <div class="friend" v-for="friend in friends" :key="friend.id">
      <div class="info">
        <div class="image">
      <img :src="friend.avatar">
        </div>
        <p>{{friend.first_name}} {{friend.last_name}}</p>
      </div>
      <div class="job">
        <p>Currently Playing: {{friend.job}} Simulator</p>
              </div>
        <button class="auto" v-on:click="launch(friend.job)">Play!</button>
        <button class="auto" v-on:click="removeFriend('id')">Remove as Friend</button>
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
  addFriend(friend) {
  this.$root.$data.friendList.push(friend);
  this.$root.$data.friendListSize++;
  },
  removeFriend(friend) {
  if (this.$root.$data.friendListSize > 0) {
      this.$root.$data.friendList.splice(friend, 1);
      this.$root.$data.friendListSize--;
      }

    },
    launch(job) {
      this.$root.$data.currentGame = job;
      this.$router.push('/About');
    }
  }
}

</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
}

.friends {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.friend {
  border: 1px solid white;
  margin-top: 20px;
  width: 40%;
}

.friend img {
  height: 50px;
  width: 100px;
  object-fit: cover;
}

.friend .image {
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
}

.info {
  background: black;
  color: #000;
  height: 60px;
}

.info h1 {
  color: white;
  font-size: 16px;
}

.info h2 {
  font-size: 16px;
}

.info p {
  color: white;
  margin: 0px;
  font-size: 24px;
  text-align: left;
}

.job {
  color: white;
  text-align: left;
  padding-top: 30px;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: 1px solid white;
  padding: 10px;
}

.auto {
  display:block;

}
</style>
