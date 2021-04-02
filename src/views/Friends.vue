<template>
  <div class="home">
      <div class="test">
        <p>Your Friend List</p>
      </div>
      <h1 v-if="this.$root.$data.friendListSize===0">Get playing and make some friends!!</h1>
      <FriendList :friends="friendList" />
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
.test {
  padding: 20px;
  color: white;
  font-size: 24px;
}
</style>
