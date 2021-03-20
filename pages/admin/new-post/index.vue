<template>
    <div class="wrapp-post">
        <div class="container">
            <nuxt-link class="link_post" to="/admin">Come back admin page!</nuxt-link>

            <NewPostForm class="mt-5" @submit="onSubmit" />
        </div>
    </div>
</template>

<script>

import NewPostForm from '@/components/Admin/NewPostForm.vue'


export default {
    components: {
        NewPostForm
    }, 
    layout: 'admin',


    methods: {
        onSubmit (post) {
             this.$store.dispatch('addPost', post)
                .then(() => {
                    this.$router.push('/admin');
                })
        }
    },



}
</script>


<style lang="scss">
    .wrapp-post {
        min-height: 650px;
    }


      .link_post {
  font-size: 23px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 70px;
}

</style>