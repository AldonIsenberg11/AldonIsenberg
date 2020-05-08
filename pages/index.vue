<template>
  <div class="container">

    <!-- <div class="container green-underline">&nbsp;</div> -->

    <div class="container columns content">
      <section class="column section dark-background dark-background-section is-two-fifths">
        <div class="container">
          <!-- <div class="container is-hidden-touch">&nbsp;</div>
          <div class="container is-hidden-touch">&nbsp;</div>
          <div class="container is-hidden-touch">&nbsp;</div> -->



          <div class="column stock-logo">
            <img class="family-photo search-logo" src="@/assets/pics/family-photo-squared.png">
          </div>



        </div>
      </section>


      <div class="column is-three-fifths">
        <h1 class="content is-size-2 green-text text-spaced ">
          <div class="content"></div>
          <span class="dark-background-text green-underline-text">Full Stack</span>
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="rose-underline-text">Developer&nbsp;</span>
        </h1>
        <h2 class="subtitle dark-background-text text-spaced-small">
          &nbsp;&nbsp;<strong class="rose-text">Design</strong> clean & friendly <strong class='green-text'>user interfaces</strong>
        </h2>
        <h2 class="subtitle dark-background-text text-spaced-small">
          &nbsp;&nbsp;<strong class="rose-text">Develop</strong> efficient internal <strong class='green-text'>API</strong> networks
        </h2>
        <h2 class="subtitle dark-background-text text-spaced-small">
          &nbsp;&nbsp;<strong class="rose-text">Debug</strong> systems of <strong class='green-text'>security</strong> vulnerabilities
        </h2>
        <h2 class="subtitle dark-background-text text-spaced-small">
          &nbsp;&nbsp;<strong class="rose-text">Deploy</strong> applications with <strong class='green-text'>scalability</strong> in mind
        </h2>
      </div>
    </div>

    <!-- <div class="container">&nbsp;</div> -->

    <div class="container columns content">

      <section class="column dark-background dark-background-section is-two-fifths">
        <div class="container">
          <h1 class="content green-underline-text is-size-2 text-spaced"><span class="dark-background-text">About</span><span class="green-text"> Me&nbsp;</span></h1>
          <h2 class="subtitle dark-background-text text-spaced-small">
            I <span class="green-text">love</span> my wonderful <span class="rose-text">family</span>
          </h2>
          <h2 class="subtitle dark-background-text text-spaced-small">
            <span class="green-text">Erica</span> is my beautiful <span class="rose-text">wife</span>
          </h2>
          <h2 class="subtitle dark-background-text">
            <span class="green-text">Beau</span> is our amazing <span class="rose-text">son</span> and
          </h2>
          <h2 class="subtitle dark-background-text">
            <span class="green-text">Brie</span> is our wonderful <span class="rose-text">daughter</span>
          </h2>
          <h2 class="subtitle dark-background-text">
            Oh and then there is our crazy <span class="rose-text">dog</span> <br>we call <span class="green-text">Portgas D. Ace</span>
          </h2>
        </div>
      </section>

      <div class="column is-three-fifths stock-logo">
        <img class="search-logo" src="@/assets/search-logo.png">
      </div>

    </div>


    <div class="container columns">
     <div class="column stock-logo">
       <img src="@/assets/build-logo.png">
     </div>
     <section class="column section dark-background dark-background-section">
       <div class="container">
          <!-- <div class="container is-hidden-touch">&nbsp;</div>
          <div class="container is-hidden-touch">&nbsp;</div>
          <div class="container is-hidden-touch">&nbsp;</div> -->
          <h1 class="content is-size-2 green-text text-spaced"><span class="dark-background-text green-underline-text">Challenges</span><span class="green-underline-text"> Accepted&nbsp;</span></h1>

          <p class="content dark-background-text bullet-style text-spaced">
            I'm <strong class='green-text'>always</strong> looking to <strong class="rose-text">challenge</strong> myself.
          </p>
        </div>
      </section>
    </div>

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
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 50%;
  /* border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px; */
}
.stock-logo {
  flex: 200px;
  width: 400px;
  height: 400px;
  display: inline-block;
  position: relative;
}
.search-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* width: 40%; */
}
</style>
