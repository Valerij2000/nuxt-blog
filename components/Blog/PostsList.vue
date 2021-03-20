<template>
    <div>

        <b-button @click="loadMore" class="w-100 btn btn-lg mb-5 load-more btn-outline-info">
            Search You Are Post
        </b-button>

        <PostPreview :admin="admin" v-for="(post, index) in filterPosts" :key="index" :post="post"/>

        <b-button @click="loadMore" class="w-100 btn btn-lg btn-primary mb-5 load-more" variant="primary" v-bind:disabled="isButtonDisabled">
            
            More Loading Posts

        </b-button>

    </div>
</template>


<script>    

import PostPreview from '@/components/Blog/PostPreview.vue'

export default {

    components: {
        PostPreview
    },

    data() {
        return {
            isButtonDisabled: false,
            sourcePostsArr: null,
            counter: 5,
            filterPosts: null,
        }
    },


    props: {
        posts: { 
            type: Array,
            required: true, 
        },
        admin: {
            type: Boolean,
            default: false,
        },
    },


    created() {
        this.sourcePostsArr = this.posts;
        this.filterPosts =  this.posts.slice(0, 3);
    },

    methods: {
        loadMore () {
            this.filterPosts = this.posts.slice(0, this.counter);
            this.counter+=2;

                if (this.counter > this.sourcePostsArr.length+3) {
                    this.isButtonDisabled = true;
                    return false;
                }
        },
        
    },

    computed: {
        
    },


    

}
</script>


<style lang="scss">
    .btn-outline-info {
        color: white;
    }
</style>