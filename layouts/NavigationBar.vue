<template>
  <nav class="navbar is-fixed-top dark-background " role="navigation" aria-label="main navigation">
    <div class="navbar-brand dark-background ">
      <nuxt-link to="/" class="navbar-item">
        <img class="logo-image" src="@/assets/AI-logo.png" width="44">
        <span class="primary">&nbsp;ALDON&nbsp;</span>
        <span class="secondary">ISENBERG</span>
      </nuxt-link>
    </div>

    <div class="navbar-menu dark-background is-hidden-touch">
      <div class="navbar-end">
        <!-- <nuxt-link to="/AboutMe" class="navbar-item hover-style">About Me</nuxt-link>
        <nuxt-link to="/Resume" class="navbar-item hover-style">Resume</nuxt-link>
        <nuxt-link to="/Projects" class="navbar-item hover-style">Projects</nuxt-link>
        <nuxt-link to="/Hobbies" class="navbar-item hover-style">Hobbies</nuxt-link>
        <nuxt-link to="/Blog" class="navbar-item hover-style">Blog</nuxt-link> -->
        <nuxt-link v-if="isAboutMe" to="/AboutMe" class="navbar-item selected-link">About Me</nuxt-link>
        <nuxt-link v-else to="/AboutMe" class="navbar-item hover-style">About Me</nuxt-link>

        <nuxt-link v-if="isResume" to="/Resume" class="navbar-item selected-link">Resume</nuxt-link>
        <nuxt-link v-else to="/Resume" class="navbar-item hover-style">Resume</nuxt-link>

        <nuxt-link v-if="isProjects" to="/Projects" class="navbar-item selected-link">Projects</nuxt-link>
        <nuxt-link v-else to="/Projects" class="navbar-item hover-style">Projects</nuxt-link>

        <nuxt-link v-if="isHobbies" to="/Hobbies" class="navbar-item selected-link">Hobbies</nuxt-link>
        <nuxt-link v-else to="/Hobbies" class="navbar-item hover-style">Hobbies</nuxt-link>

        <nuxt-link v-if="isBlog" to="/Blog" class="navbar-item selected-link">Blog</nuxt-link>
        <nuxt-link v-else to="/Blog" class="navbar-item hover-style">Blog</nuxt-link>
        <div class="container">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isAboutMe() {return this.$route.name == 'AboutMe'},
    isResume() {return this.$route.name == 'Resume'},
    isProjects() {return this.$route.name == 'Projects'},
    isHobbies() {return this.$route.name == 'Hobbies'},
    isBlog() {return this.$route.name == 'Blog'}
  }
}
</script>

<style scoped>
.primary {
  color: rgb(177, 199, 216);
  letter-spacing: 0.05em;
  font-size: 2.0em;
  vertical-align: bottom;
}
.secondary {
  color: rgb(86, 255, 208);
  letter-spacing: 0.05em;
  font-size: 2.0em;
}
.hover-style {
  color: rgb(177, 199, 216);
  background-color: rgb(26, 28, 29);
  font-size: 1.4em;
  letter-spacing: 0.1em;
}
.hover-style:hover {
  background-color: rgb(26, 28, 29);
  color: rgb(177, 199, 216);
  border-bottom: 5px solid;
  border-bottom-color: rgb(86, 255, 208);
  font-size: 1.4em;
  letter-spacing: 0.1em;
}
.hover-style:focus {
  background-color: rgb(86, 255, 208);
  border-top: 5px solid;
  border-top-color: rgb(26, 28, 29);
  border-bottom: 5px solid;
  border-bottom-left-radius: 12px;
  color: #4a4a4a;
  font-size: 1.4em;
}
.selected-link {
  background-color: rgb(86, 255, 208);
  border-top: 5px solid;
  border-top-color: rgb(26, 28, 29);
  border-bottom: 5px solid;
  border-bottom-left-radius: 12px;
  letter-spacing: 0.1em;
  color: #4a4a4a;
  font-size: 1.4em;
}
.selected-link:focus {
  background-color: rgb(86, 255, 208);
  border-top: 5px solid;
  border-top-color: rgb(26, 28, 29);
  border-bottom: 5px solid;
  border-bottom-left-radius: 12px;
  color: #4a4a4a;
  font-size: 1.4em;
}
.selected-link:hover {
  background-color: rgb(86, 255, 208);
  border-top: 5px solid;
  border-top-color: rgb(26, 28, 29);
  border-bottom: 5px solid;
  border-bottom-left-radius: 12px;
  color: #4a4a4a;
  font-size: 1.5em;
}
.dark-background {
  background-color: rgb(26, 28, 29);
}

</style>

