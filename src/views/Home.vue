<template>
  <div class="wrapper">
  <div class="home">
    <div id="main">
      <p id="htext">Welcome to the European Gamers Social Page</p>
      <p>A place where gamer can come together, socialize and game together</p>
    </div>
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
    <div class="online">
      <p> Currently Online</p><img src="/greenDot.jpg"/>
    </div>
      <FriendList :friends="friends" />
  </div>
</div>
</template>

<script>
import FriendList from "../components/FriendList.vue"
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

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 35px;
}

body {
  background: #92a8d1;
}

p {
  color: white;
}

#main {
  text-align: center;
  object-fit: contain;
}

#htext {
  font-size: 36px;
  padding: 5px;
}

.online {
  padding-top:20px;
}

.online img {
  height: 20px;
  width: 20px;
}
</style>
