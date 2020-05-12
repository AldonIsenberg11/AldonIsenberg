<template>
  <div class="container">
    <navigation-bar/>
    <div class="container is-hidden-desktop">
      <mobile-nav-bar/>
    </div>
    <div class="container">
      <div v-if="!isLandingPage || isAboutMePage">
        <div class="container">
          <nuxt/>
        </div>
      </div>
      <section v-else class="section">
        <div class="columns">
          <div class="is-hidden-mobile">
            <side-bar/>
          </div>
          <div class="column">
            <div class="container">
              <nuxt/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import NavigationBar from './NavigationBar.vue'
import MobileNavBar from './MobileNavBar.vue'
import SideBar from './SideBar.vue'

export default {
  components: {
    'navigation-bar': NavigationBar,
    'mobile-nav-bar': MobileNavBar,
    'side-bar': SideBar
  },
  computed: {
    isAboutMePage() {return this.$route.name == 'AboutMe'},
    isLandingPage() {return this.$route.name == 'index'}
  },
  head: {
    bodyAttrs: {
      class: 'has-navbar-fixed-top has-spaced-navbar-fixed-top'
    }
  }
}
</script>