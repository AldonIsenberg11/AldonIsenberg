<template>
  <div>
    <section class="hero dark-background is-small">
      <div class="hero-body">
        <div class="container">
          <figure class="image is-16by9">
            <img class="" src="@/assets/pics/family-photo-cropped.png">
          </figure>
        </div>
      </div>
    </section>

    <div class="columns">
      <section class="hero green-background is-small">
        <div class="hero-body">
          <div class="container">
            <h1 class="title green-background-text">
              Fullstack Web Developer
            </h1>
            <h2 class="subtitle green-backround-text">
              Husband, Father, Coach
            </h2>
          </div>
        </div>
      </section>
      <div class="column">
        <figure class="image">
          <img src="@/assets/search-logo.png">
        </figure>
      </div>
    </div>

    <span> ---- </span>
    <section class="hero dark-background is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title dark-backround-text">
            Fullstack Web Developer
          </h1>
          <h2 class="subtitle dark-backround-text">
            Husband, Father, Coach, Developer
          </h2>
        </div>
      </div>
    </section>
    <span> ---- </span>
      <section class="section is-small">
        <div class="container">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>
    <span> ---- </span>
      <section class="section is-medium">
        <div class="container">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>
    <span> ---- </span>
      <section class="section is-large">
        <div class="container">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>
    <span> ---- </span>
  </div>
</template>

<style scoped>
.hover-style {
  color: rgb(177, 199, 216);
  background-color: rgb(26, 28, 29);
  font-size: 1.4em;
  letter-spacing: 0.1em;
}
.hover-style:hover {
  background-color: rgb(26, 28, 29);
  color: rgb(177, 199, 216);
  border-bottom: 5px solid;
  border-bottom-color: rgb(86, 255, 208);
  font-size: 1.5em;
  letter-spacing: 0.1em;
}
.hover-style:focus {
  color: rgb(177, 199, 216);
  background-color: rgb(26, 28, 29);
  border-top: 5px solid;
  border-top-color: rgb(26, 28, 29);
  border-bottom: 5px solid;
  border-bottom-left-radius: 12px;
  font-size: 1.4em;
}
.selected-link {
  background-color: rgb(86, 255, 208);
  border-top: 5px solid;
  border-top-color: rgb(26, 28, 29);
  border-bottom: 5px solid;
  border-bottom-left-radius: 12px;
  letter-spacing: 0.1em;
  color: #4a4a4a;
  font-size: 1.4em;
}
.selected-link:focus {
  background-color: rgb(86, 255, 208);
  border-top: 5px solid;
  border-top-color: rgb(26, 28, 29);
  border-bottom: 5px solid;
  border-bottom-left-radius: 12px;
  color: #4a4a4a;
  font-size: 1.4em;
}
.selected-link:hover {
  background-color: rgb(86, 255, 208);
  border-top: 5px solid;
  border-top-color: rgb(26, 28, 29);
  border-bottom: 5px solid;
  border-bottom-left-radius: 12px;
  color: #4a4a4a;
  font-size: 1.5em;
}
.dark-background {
  background-color: rgb(26, 28, 29);
}
.dark-backround-text {
  color: rgb(177, 199, 216);
}
.green-background {
  background-color: rgb(86, 255, 208);
  color: #4a4a4a;
  border-top: 5px solid;
  border-top-left-radius: 33px;
  border-top-right-radius: 33px;
  border-top-color: rgb(26, 28, 29);
  border-bottom: 9px solid;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
}
.green-backround-text {
  color: #4a4a4a;
}
</style>
