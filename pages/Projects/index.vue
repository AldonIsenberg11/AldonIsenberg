<template>
  <div>
    <h1>Projects</h1>
    <h2> <span class="green-text is-size-4">Wrestling Match simulator</span> <span class="rose-text">(deprecated)</span></h2>
    <span><i class="fad fa-browser rose-text"></i> Application&nbsp;<i class="fal fa-long-arrow-right rose-text"></i> <a href="http://wrestledb.aldonisenberg.com/#/">Match Simulator</a></span><br/>
    <span><i class="fab fa-github"></i> Repository&nbsp;&nbsp;<i class="fal fa-long-arrow-right rose-text"></i> <a href="https://github.com/AldonIsenberg11/matchMachine">Github</a></span><br/>
    <span><i class="fad fa-list-ul"></i> Description <i class="fal fa-long-arrow-right rose-text"></i>  <span class="green-text">App that lets you add wrestlers, users and score an amateur wrestling match.</span></span><br/>
    <div class="rose-underline rose-overline">
      <p><i class="fad fa-lightbulb green-text"></i> One thing I learned from this project is the value that vuex can offer in terms of client side caching.</p>
      <p><i class="fal fa-long-arrow-right rose-text"></i> There are 3 pages, "View Matches",  "Matches Underway", "add new user".</p>
      <p><i class="fal fa-long-arrow-right rose-text"></i> Matches Underway uses vuex to store the list, View Matches pulls from a connected DB, and Add new User hit's an API to get data</p>
      <p><i class="fal fa-long-arrow-right rose-text"></i> Hitting the DB directly resulted in a quicker page render than hitting the API, but is less secure.</p>
      <p><i class="fal fa-long-arrow-right rose-text"></i> After the initial pae load, vuex caches the data on the client side, so when you navigate back to that page, the data is already there (and is refreshed in the backroung)</p>
      <p><i class="fal fa-long-arrow-right rose-text"></i> This makes for a great user experience without any split second network delays.</p>
    </div>

  </div>
</template>

<style>
.rose-overline {
  border-top: 1px solid;
  border-top-color: rgb(241, 72, 106);
}
.rose-underline {
  border-bottom: 1px solid;
  border-bottom-color: rgb(241, 72, 106);
}
</style>