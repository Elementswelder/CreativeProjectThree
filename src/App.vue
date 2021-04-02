

<template>
  <div id="app">
    <div>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="#">Gamers Social Page</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#Home"><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item href="#Friends"><router-link to="/Friends">Friend List</router-link></b-nav-item>
          <b-nav-item href="#Launch"><router-link to="/Games">Game Launcher</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
  <div class="footer">
    <p><a href="https://github.com/Elementswelder/CreativeProjectThree">Github Link</a></p>
  </div>
  </div>

</template>

<style>

body {
  background-color: #92a8d1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  position: fixed;
  margin: auto;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: black;
  text-align: center;
  border-radius: 1px solid black;
}
</style>
