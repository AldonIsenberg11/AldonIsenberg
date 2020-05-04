<template>
  <div>
    <navigation-bar/>
    <nuxt/>
  </div>
</template>


<script>
import NavigationBar from './NavigationBar.vue'
export default {
  components: {
    'navigation-bar': NavigationBar
  }
}
</script>