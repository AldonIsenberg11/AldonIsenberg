<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA" />
      </router-link>
      <router-link class="nav-item is-tab" to="/category/about-me" >About me</router-link>
      <router-link class="nav-item is-tab" :to="{ name: 'category', params: { id: 'Education' } }">Education</router-link>
      <router-link class="nav-item is-tab" to="/login">Login</router-link>
    </div>
  </nav>
</template>
