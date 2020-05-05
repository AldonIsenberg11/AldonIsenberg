<template>
  <div>
    <navigation-bar/>
    <div class="container is-hidden-desktop">
      <mobile-nav-bar/>
    </div>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>


<script>
import NavigationBar from './NavigationBar.vue'
import MobileNavBar from './MobileNavBar.vue'

export default {
  components: {
    'navigation-bar': NavigationBar,
    'mobile-nav-bar': MobileNavBar
  },
  head: {
    bodyAttrs: {
      class: 'has-navbar-fixed-top has-spaced-navbar-fixed-top'
    }
  }
}
</script>