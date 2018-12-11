<template>
    <div style="padding:1rem;">
        <b-card :title="project.name"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">
            <p class="card-text">
            {{project.description}}
            </p>
            <b-button :href="project.html_url" variant="primary">See in GitHub</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  name: "Project",
  props: ["project"]
};
</script>
