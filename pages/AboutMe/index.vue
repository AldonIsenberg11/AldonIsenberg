<template>
  <div>
    <section class="hero is-primary ">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary title
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="is-hidden-mobile">
          <about-me-sidebar/>
        </div>
        <div class="column">
          <h1>About Me Page!!!!</h1>
          <p>Family</p>
          <p>Education</p>
          <p>Work Experience</p>
          <p>Wrestling Coach</p>
          <p>Hobbies</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutMeSidebar from './AboutMeSidebar.vue'
export default {
  components: {
    'about-me-sidebar': AboutMeSidebar
  }
}
</script>
