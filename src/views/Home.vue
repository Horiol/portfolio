<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <b-jumbotron :header="title">
      <h3><span v-html="description"></span></h3>
    </b-jumbotron>
    <Projects></Projects>
  </div>
</template>

<style media="screen">
@media (min-width: 768px) {
  .top-padding {
    padding-top: 5rem;
  }
}
</style>

<script>
import Projects from "@/components/Projects.vue";

export default {
  name: "Home",
  components: {
    Projects
  },
  data: function() {
    return {
      title: "Full Stack Developer",
      description: `
          I'm a web developer & programmer living in Barcelona, Spain.
          <br>
          I make web applications, usually with
          <a href="https://vuejs.org/">Vue</a> and
          <a href="https://www.python.org/">Python</a>.
        `
    };
  }
};
</script>
