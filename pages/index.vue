<template>
  <div class="container">

    <!-- <div class="container green-underline">&nbsp;</div> -->

    <div class="container columns">
      <div class="column stock-logo">
        <!-- <figure class="image"> -->
          <img src="@/assets/search-logo.png">
        <!-- </figure> -->
      </div>
      <section class="column section dark-background dark-background-section is-medium">
        <div class="container">
          <h1 class="title green-underline-text is-size-2 text-spaced"><span class="dark-background-text">About</span><span class="green-text">Me&nbsp;</span></h1>
          <h2 class="subtitle dark-background-text text-spaced-small">
            I have a wonderful <span class="rose-text">Family</span>.
          </h2>
          <h2 class="subtitle dark-background-text text-spaced-small">
            My beautiful <span class="rose-text">wife's</span> name is <span class="green-text">Erica</span>.
          </h2>
          <h2 class="subtitle dark-background-text">
            I have a wonderful <span class="rose-text">Family</span>. <span class="green-text">Erica</span> is made up of my beautifyl <span class="rose-text">wife</span> , my <span class="rose-text">son</span> <span class="green-text">Beau</span>, daughter, and dog.
          </h2>
        </div>
      </section>
      <!-- <section class="column dark-background dark-background-section is-medium">
        <div class="container">
          <div class="container is-hidden-touch">&nbsp;</div>
          <div class="container is-hidden-touch">&nbsp;</div>
          <div class="container is-hidden-touch">&nbsp;</div>
          <h1 class="content is-size-2 green-text text-spaced"><span class="rose-text no-underline">|</span><span class="dark-background-text">Full Stack </span><span class="green-underline-text">Developer</span></h1>
          <div class="container"></div>
          <h2 class="content dark-background-text bullet-style">
            &nbsp;&nbsp;<strong class="green-text">Design</strong> a clean friendly<strong class='rose-text'> User Interface</strong>
          </h2>
          <div class="container"></div>
          <h2 class="content dark-background-text bullet-style">
            &nbsp;&nbsp;<strong class="green-text">Develop</strong> an efficient <strong class='rose-text'>API</strong> ecosystem
          </h2>
          <h2 class="content dark-background-text bullet-style">
            &nbsp;&nbsp;<strong class="green-text">Deploy</strong> to a <strong class='rose-text'>Scalable</strong> network
          </h2>
          <h2 class="content dark-background-text bullet-style">
            &nbsp;&nbsp;<strong class="green-text">Secure</strong> system from <strong class='rose-text'>Vulnerabilities</strong>
          </h2>
        </div>
      </section> -->
    </div>

    <div class="container">&nbsp;</div>

    <!-- <section class="hero green-background is-small">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle green-background-text">
            Husband - Father - Coach
          </h2>
        </div>
      </div>
    </section> -->
    <div class="container columns">
      <section class="column section dark-background dark-background-section">
        <div class="container">
          <!-- <div class="container is-hidden-touch">&nbsp;</div>
          <div class="container is-hidden-touch">&nbsp;</div>
          <div class="container is-hidden-touch">&nbsp;</div> -->
          <h1 class="content is-size-2 green-text text-spaced"><span class="dark-background-text green-underline-text">Full Stack</span><span class="green-underline-text">Developer&nbsp;</span></h1>
          <div class="container"></div>
          <li class="content dark-background-text bullet-style">
            <strong class="rose-text">Design</strong> a friendly clean<strong class='green-text'> User Interface</strong>
          </li>
          <div class="container"></div>
          <li class="content dark-background-text bullet-style">
            <strong class="rose-text">Develop</strong> an efficient <strong class='green-text'>API</strong> network
          </li>
          <li class="content dark-background-text bullet-style">
            <strong class="rose-text">Secure</strong> system from <strong class='green-text'>Vulnerabilities</strong>
          </li>
          <li class="content dark-background-text bullet-style">
            <strong class="rose-text">Deploy</strong> to a <strong class='green-text'>Scalable</strong> ecosystem
          </li>
        </div>
      </section>

      <div class="column stock-logo">
        <img class="" src="@/assets/pics/family-photo-cropped.png">
      </div>
    </div>


    <span> ---- </span>

    <figure class="image">
      <img src="@/assets/build-logo.png">
    </figure>

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

    <figure class="image">
      <img src="@/assets/mustache-man-logo.png">
    </figure>

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
strong {
  font-weight: bold;
  font-size: 115%;
}

.bullet-style {
  letter-spacing: 0.05em;
  font-weight: 900;
  font-size: 125%;
}

.dark-background {
  background-color: rgb(26, 28, 29);
}
.dark-background-text {
  color: rgb(177, 199, 216);
}
.red-text {
  color: rgb(245, 101, 101);
}
.rose-text {
  color: rgb(241, 72, 106);
}
.green-text {
  color: rgb(86, 255, 208);
}

.align-right {
  text-align: right;
}

.align-center {
  text-align: center;
}

.align-top {
  vertical-align: top;
}

.text-spaced {
  letter-spacing: 0.07em;
}
.text-spaced-small {
  letter-spacing: 0.05em;
}



.green-underline {
  /* background-color: rgb(86, 255, 208); */
  border-bottom: 1px solid;
  border-bottom-color: rgb(86, 255, 208);
  /* border-top-color: rgb(241, 72, 106); */
  /* border-top-color: rgb(242, 85, 103); */
}

.green-underline-text {
  text-decoration-line: underline;
  text-decoration-color: rgb(86, 255, 208);
}

.rose-underline {
  border-bottom: 1px solid;
  border-bottom-color: rgb(241, 72, 106);
}

.rose-underline-text {
  text-decoration-line: underline;
  text-decoration-color: rgb(241, 72, 106);
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
.green-background-text {
  color: #4a4a4a;
}
.green-background-shadow {
  box-shadow: 10px -10px rgb(26, 28, 29);
  border-bottom: none;
}

.family-photo {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  /* border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px; */
}
.stock-logo {
  flex: 200px;
}
</style>
