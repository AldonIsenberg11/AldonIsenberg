<template>
  <div>
    <!-- <div>
      <span class="logo-primary">A</span><span class="logo-secondary">I</span>
    </div>
    <div>
      <h1><span class="primary">ALDON</span> <span class="secondary">ISENBERG</span></h1>
    </div> -->
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
