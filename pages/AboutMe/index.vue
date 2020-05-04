<template>
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
</template>

<script>
import AboutMeSidebar from './AboutMeSidebar.vue'
export default {
  components: {
    'about-me-sidebar': AboutMeSidebar
  }
}
</script>
