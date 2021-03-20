<template>
    <div>
        <section class="post-id-section">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <h1 class="text-center mt-5">Page post id is {{ $route.params.id }}</h1>
                        
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>

import Post from '@/components/Blog/Post.vue'

export default {

    components: {
        Post
    },

    validate ({params}) {
        // Number !
        return /^\d+$/.test(params.id); 
    },
}
</script>


<style lang="scss" scoped>
    .post-id-section {
        min-height: 73vh;
    }
</style>