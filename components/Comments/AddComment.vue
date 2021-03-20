<template>
  <div>
    <section class="newComment-section">
      <div class="container mt-3">
        <div class="row">
          <div class="col-xl-12"  v-for="(comment, index) in addComment" :key="index">
            <b-jumbotron
              bg-variant="info"
              text-variant="white"
              border-variant="dark"
              class="card-new-post"  
            >
              <template #header>{{ comment.name }}</template>

              <template #lead>
                {{ comment.text }}
              </template>

              <hr class="my-4" />

            </b-jumbotron>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  props: {
    addComment: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style lang="scss" scoped>
    .card-new-post {
        box-shadow: 0px 12px 25px darkgrey;
    }
</style>