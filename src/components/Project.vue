<template>
    <div style="padding:1rem;">
        <b-card :title="project.name"
        :img-src="image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">
            <p class="card-text">
                <span v-html="urlify(project.description)"></span>
            </p>
            <b-button :href="project.html_url" variant="primary">See on GitHub</b-button>
        </b-card>
    </div>
</template>

<style>
.card-img-top {
  width: 15rem;
  margin-left: auto;
  margin-right: auto;
}
</style>


<script>
import HTML from "@/assets/html.png";
import JS from "@/assets/js.png";
import Python from "@/assets/python.png";
import Bash from "@/assets/bash.png";
import Vue from "@/assets/vue.png";

export default {
  name: "Project",
  props: ["project"],
  computed: {
    image: function() {
      if (this.project.language === "HTML") {
        return HTML;
      } else if (this.project.language === "Python") {
        return Python;
      } else if (this.project.language === "Vue") {
        return Vue;
      } else if (this.project.language === "JavaScript") {
        return JS;
      } else if (this.project.language === "Shell") {
        return Bash;
      } else {
        return "https://picsum.photos/600/300/?image=25";
      }
    }
  },
  methods: {
    urlify: function(text) {
      if (text) {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function(url) {
          return '<a href="' + url + '">' + url + "</a>";
        });
      } else {
        return text;
      }
    }
  }
};
</script>
