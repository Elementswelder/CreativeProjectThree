<template>
  <div class="wrapper">
    <div class="about">
  <div class="home">
    <div id="main">
      <p id="htext">Games Available to Play</p>
    </div>
    <div class="launch">
      <span>Launching {{ this.$root.$data.currentGame }} Simulator now!</span>
    </div>
      <FriendList :friends="friends" />
  </div>
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
.about {
    position: fixed;
    top: 0; bottom: 0; left: 0; right: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
}

span {
    opacity: 2 !important;
    z-index: 2500;
    left: 0;
    line-height: 200px;
    margin-top: -100px;
    position: absolute;
    text-align: center;
    top: 12%;
    width: 100%;
    font-size: 40px;
    color: white !important;
    font-weight: bold;
}

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
