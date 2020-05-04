<template>
  <div>
    <div></div>
    <a class="pipe">|</a>
    <nuxt-link to="/AboutMe" class="link">About Me</nuxt-link>
    <a class="pipe">|</a>
    <nuxt-link to="/Hobbies" class="link">Hobbies</nuxt-link>
    <a class="pipe">|</a>
    <nuxt-link to="/Projects" class="link">Projects</nuxt-link>
    <a class="pipe">|</a>
  </div>
</template>

<style scoped>
.link {
  background-color: rgb(26, 28, 29);
  color: rgb(177, 199, 216);
}
.pipe {
  color: rgb(86, 255, 208);
  /* letter-spacing: -0.3em; */
  font-size: 1.4em;
}
</style>