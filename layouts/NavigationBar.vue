<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand dark-background">
      <nuxt-link to="/" class="navbar-item">
        <img class="logo-image" src="@/assets/AI-logo.png" width="45" height="28">
        <span class="primary">ALDON&nbsp;</span>
        <span class="secondary">ISENBERG</span>
      </nuxt-link>
    </div>

    <div id="navbarBasicExample" class="navbar-menu is-active dark-background">
      <div class="navbar-start">
        <nuxt-link to="/AboutMe" class="navbar-item hover-style">About Me</nuxt-link>
        <nuxt-link to="/Resume" class="navbar-item hover-style">Resume</nuxt-link>
        <nuxt-link to="/Projects" class="navbar-item hover-style">Projects</nuxt-link>
        <nuxt-link to="/Hobbies" class="navbar-item hover-style">Hobbies</nuxt-link>
        <nuxt-link to="/Blog" class="navbar-item hover-style">Blog</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.hover-style {
  color: rgb(177, 199, 216);
  background-color: rgb(26, 28, 29);
}
.hover-style:hover {
  background-color: rgb(26, 28, 29);
  color: rgb(177, 199, 216);
  border-bottom: 5px solid;
  border-bottom-color: rgb(86, 255, 208);
}
.hover-style:focus {
  background-color: rgb(86, 255, 208);
  border-top: 5px solid;
  border-top-color: rgb(26, 28, 29);
  border-bottom: 5px solid;
  border-bottom-left-radius: 12px;
  color: #4a4a4a
}
.dark-background {
  background-color: rgb(26, 28, 29);
}
.dark-text {
  color: #4a4a4a
}
</style>

