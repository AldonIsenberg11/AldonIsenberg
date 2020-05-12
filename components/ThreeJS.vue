<template>
  <div id="containerD" class="container">
    <!-- <canvas></canvas> -->
  </div>
</template>

<script>
// Example Here --> https://stackoverflow.com/questions/47849626/import-and-use-three-js-library-in-vue-component
// import * as THREE from 'three'
import * as animator from '@/components/threejs.js'
// https://github.com/mrdoob/three.js/blob/master/examples/css3d_molecules.html
// https://threejs.org/examples/#webgl_custom_attributes_points2
// https://threejs.org/examples/#webgl_shadowmap_pointlight
// https://threejs.org/examples/#webgl_points_waves

export default {
  mounted() {
    let context = animator.createBoxRotationContext(
        document.getElementById('containerD')
    )
    context.init()
    context.animate()
  }
}
</script>

<style scoped>
#containerD {
  height: 220px;
  z-index: 2;
  position: relative;
}
canvas { width: 100%; height: 100% }
</style>
