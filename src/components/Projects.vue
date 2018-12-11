<template>
    <div>
        <h1>Recent Projects</h1>
        <div class="flex">
            <div v-for="project in projects" :key="project.id">
                <Project :project="project"></Project>
            </div>
        </div>
    </div>
</template>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>


<script>
import axios from "axios";
import Project from "./Project.vue";

export default {
  name: "Projects",
  components: {
    Project
  },
  data: function() {
    return {
      projects: []
    };
  },
  mounted: function() {
    axios
      .get("https://api.github.com/users/Horiol/repos", {
        params: { fork: false, sort: "updated" }
      })
      .then(response => {
        this.projects = response.data.filter(e => e.fork === false);
      });
  }
};
</script>
