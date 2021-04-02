<template>
  <div class="wrapper">
  <div class="home">
    <div id="main">
      <p id="htext">Games Available to Play</p>
    </div>
      <FriendList :friends="friends" />
  </div>
</div>
</template>

<script>
import FriendList from "../components/GamesList.vue"
export default {
  name: 'Home',
  components: {
    FriendList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    friends() {
      return this.$root.$data.friends.filter(friend => friend.first_name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }
}
</script>


<style scoped>
#main {
  text-align: center;
  object-fit: contain;
  color: white;
}

#htext {
  font-size: 36px;
  padding: 5px;
}
</style>
