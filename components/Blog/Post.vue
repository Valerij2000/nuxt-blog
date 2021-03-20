<template>
    <div>
        <b-card
              :title="post.title"
              :img-src="post.img"
              :img-alt="post.title"
              img-top
              tag="article"
              class="mb-2 card"
            >
              <b-card-text>
                {{ post.descr }}
              </b-card-text>

              <p> {{ post.content }} </p>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>


<style lang="scss" scoped>
    .card {
       box-shadow: 0px 3px 22px darkgrey;
   }
</style>