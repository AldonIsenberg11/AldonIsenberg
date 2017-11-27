<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA" />
      </router-link>
      <router-link class="nav-item is-tab" to="/about-me">About Me</router-link>
      <router-link class="nav-item is-tab" to="/education">Education</router-link>
      <router-link class="nav-item is-tab" to="/work-experience">Work Experience</router-link>
      <router-link class="nav-item is-tab" to="/wrestling">Wrestling</router-link>
      <router-link class="nav-item is-tab" to="/hobbies">Hobbies</router-link>
      <router-link class="nav-item is-tab" to="/blog">Blogs</router-link>
      <router-link class="nav-item is-tab" :to="{ name: 'blog', params: { id: 'transportation' } }">Transportation</router-link>
    </div>
  </nav>
</template>
