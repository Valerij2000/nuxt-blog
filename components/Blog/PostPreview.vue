<template>
  <div>
       
    <nuxt-link :to="getLink">


<b-card
    class="mb-5"
      :img-src="post.img"
      :title="post.title"
      :img-alt="post.title"
      img-top
    >
    
      <b-card-text>
        {{post.descr}}
      </b-card-text>
    </b-card>




    </nuxt-link>



  </div>
</template>


<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    admin: {
      type: Boolean,

    },
  },


  computed: {
    getLink () {
      return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`;
    },
  },

};
</script>


<style lang="scss">

</style>