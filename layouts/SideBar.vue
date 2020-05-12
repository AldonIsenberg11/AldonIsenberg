<template>
  <div class="container">
    <aside class="menu">
      <p class="menu-label">
        About Me
      </p>
      <ul class="menu-list">
        <li><a>My Family</a></li>
        <li><a>Developer</a></li>
        <li><a>Education</a></li>
        <li><a>Wrestling</a></li>
        <li><a>Hobbies</a></li>

      </ul>
      <p class="menu-label">
        Resume
      </p>
      <ul class="menu-list">
        <li>
          <a class="is-active">Work Experience</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li>
          <a class="">Education</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li>
          <a>Web Apps / Projects</a>
          <ul>
            <li><a>Freightview</a></li>
            <li><a>WrestleDB</a></li>
            <li><a>WrestleKC</a></li>
            <li><a>Build-a-Bot</a></li>
          </ul>
        </li>

      </ul>
      <p class="menu-label">
        Blogs
      </p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  computed: {
    isAboutMe() {return this.$route.name == 'AboutMe'},
    isResume() {return this.$route.name == 'Resume'},
    isProjects() {return this.$route.name == 'Projects'},
    isBlog() {return this.$route.name == 'Blog'},
    isLandingPage() {return this.$route.name == 'index'}
  }
}
</script>