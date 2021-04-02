<template>
  <div class="about">
  <div class="home">

      <div class="test">
        <p>Your Friend List</p>
      </div>
      <div class="launch">
        <span>Launching {{ this.$root.$data.currentGame }} Simulator now!</span>
      </div>
      <h1 v-if="this.$root.$data.friendListSize===0">Get playing and make some friends!!</h1>
      <FriendList :friends="friendList" />
  </div>
</div>
</template>

<script>
import FriendList from "../components/FriendListF.vue"
export default {
  name: 'Browse',
  components: {
    FriendList
  },
  data() {
    return {
        gender: '',
    }
  },
  computed: {
    friendList(){
      return this.$root.$data.friendList;
    }
  },
  methods: {
    select(gender) {
      this.gender = gender;
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

.test {
  padding: 20px;
  color: white;
  font-size: 24px;
}

span {
    opacity: 2 !important;
    z-index: 2500;
    left: 0;
    line-height: 200px;
    margin-top: -100px;
    position: absolute;
    text-align: center;
    top: 20%;
    width: 100%;
    font-size: 48px;
    color: white !important;
    font-weight: bold;
}

.launch {
  height: 100px;
  line-height: 100px;
  text-align: center;
}
</style>
