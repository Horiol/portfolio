<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{title}}</h1>
    <h3><span v-html="description"></span></h3>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
    public title: string = 'Full Stack Developer';
    public description: string = `
      I'm a web developer & programmer living in Barcelona, Spain.
      <br>
      I make web applications, usually with <a href="https://vuejs.org/">Vue</a> and <a href="https://www.python.org/">Python</a>.
    `
  }
</script>
