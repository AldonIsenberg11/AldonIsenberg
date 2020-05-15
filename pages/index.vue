<template>
  <div class="container">

    <!-- <div class="container green-underline">&nbsp;</div> -->
    <div class="container"><threejs-animation/></div>

    <div class="container columns">
      <div class="container column section dark-background dark-background-section is-narrow">
        <div class="stock-logo">
          <img class="family-photo search-logo" src="@/assets/pics/family-photo-squared.png">
        </div>
      </div>
      <div class="column content">
        <h1 class="content is-size-2 green-text text-spaced ">
          <div class="content"></div>
          <span class="dark-background-text green-underline-text">Full Stack</span>
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="rose-underline-text">App Developer&nbsp;</span>
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

    <div class="container columns content">
      <section class="column dark-background dark-background-section is-two-thirds">
        <div class="container">
          <h1 class="content green-underline-text is-size-2 text-spaced">
            <span class="dark-background-text">Current</span>
            <span class="green-text"> Projects&nbsp;</span>
          </h1>
          <h2 class="subtitle dark-background-text text-spaced-small">
            These links are a few projects that I've built or help build. More details can be found on the
            <nuxt-link to="/Projects" class="rose-text hover-green-underline-text">Projects</nuxt-link> page
          </h2>
          <ul>
            <li><a href="">freightview.com</a> - Transportation Management System</li>
            <li><a href="">wrestleDB.com</a> - Wrestling match stat recorder & ELO system</li>
            <li><a href="">wrestleKC.com</a> - Wrestling Fan site for Kansas City Metro area</li>
            <li><a href="">build-a-bot.aldonisenberg.com</a> built during hackathon to learn vue & vuex state management</li>
          </ul>
        </div>
      </section>
      <div class="column is-one-third stock-logo">
        <img class="search-logo" src="@/assets/search-logo.png">
      </div>
    </div>

    <div class="container content green-underline green-overline">
      <div class="container content">
        <h1 class="resume-format is-size-2 dark-background-text text-spaced">
          <nuxt-link to="/Resume" class="green-text hover-rose-underline-text text-size-small">View Resume</nuxt-link>&nbsp;
          |&nbsp;<a class="rose-text hover-green-underline-text text-size-small" href="/isenberg_resume.pdf" download>Download Resume </a><span class="text-size-smaller">(PDF)</span>
        </h1>
      </div>
    </div>

    <div class="container">&nbsp;</div>

    <div class="container columns content">
      <section class="column dark-background dark-background-section is-two-thirds">
        <div class="container">
          <h1 class="content green-underline-text is-size-2 text-spaced">
            <span class="dark-background-text">Wrestling</span>
            <span class="green-text"> Coach&nbsp;</span>
          </h1>
          <p class="content dark-background-text bullet-style text-spaced">
            This past year I helped coach Ottawa University to a conference title and punch 5 guys into the national tournament.
          </p>
          <p class="content dark-background-text bullet-style text-spaced">
            Former <strong class="green-text">NCAA</strong> Division 1 <strong class="rose-text">wrestler</strong>.
          </p>
          <p class="content dark-background-text bullet-style text-spaced">
            I started <strong class="rose-text">wrestling</strong> when I was 5 and have been competing ever since.
          </p>
          <p class="is-italic">
            "Wrestling is a hard sport, but then again I am a hard man."
          </p>
          <p class="content dark-background-text bullet-style text-spaced">
            I recently <strong class="green-text">competed</strong> in the 2019 <strong class="rose-text">U.S. Open</strong> in Fort Worth, TX
          </p>
        </div>
      </section>

      <div class="column is-one-third stock-logo">
        <img class="search-logo" src="@/assets/pics/AI-coach.png">
      </div>

    </div>

    <div class="container columns">
     <div class="column is-one-third stock-logo">
       <img src="@/assets/build-logo.png">
     </div>
     <section class="column section dark-background dark-background-section">
       <div class="container">
          <h1 class="content is-size-2 green-text text-spaced"><span class="dark-background-text green-underline-text">Challenges</span><span class="green-underline-text"> Accepted&nbsp;</span></h1>
          <p class="content dark-background-text bullet-style text-spaced">
            I'm constantly <strong class="green-text">evolving</strong> my skillset by adding <strong class="rose-text">technologies</strong> to my toolbox
          </p>
          <p class="content dark-background-text bullet-style text-spaced">
            I take <strong class='green-text'>pride</strong> in the work I do and embrace the <strong class="rose-text">challenges</strong>
            that life offers on my journey.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ThreeJS from '../components/ThreeJS.vue'
export default ({
  components: {
    'threejs-animation': ThreeJS
  }
})
</script>

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

.text-size-small {
  font-size: 80%
}
.text-size-smaller {
  font-size: 40%
}

.hover-green-underline-text {
  letter-spacing: .05em;
  text-decoration-color: rgb(86, 255, 208);
}
.hover-green-underline-text:hover {
  letter-spacing: .10em;
  text-decoration-line: underline overline;
  text-decoration-color: rgb(86, 255, 208);
}
.hover-rose-underline-text {
  letter-spacing: .05em;
  text-decoration-color: rgb(241, 72, 106);
}
.hover-rose-underline-text:hover {
  letter-spacing: .10em;
  text-decoration-line: underline overline;
  text-decoration-color: rgb(241, 72, 106);
}

.green-underline {
  /* background-color: rgb(86, 255, 208); */
  border-bottom: 1px solid;
  border-bottom-color: rgb(86, 255, 208);
  /* border-top-color: rgb(241, 72, 106); */
  /* border-top-color: rgb(242, 85, 103); */
}
.green-overline {
  /* background-color: rgb(86, 255, 208); */
  border-top: 1px solid;
  border-top-color: rgb(86, 255, 208);
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
  /* position: relative; */
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
.resume-format {
  height: 1.66em;
  display: flex;
  align-items: center;
  justify-content: center
}
</style>
