<template>
  <div>
    <section class="home-page-section">
      <div class="container mt-5">

    <Search :value="search" placeholder="Find you are post" @search="search = $event"/>

    <PostsList :posts="notesFilter"/>  

         
      </div>
    </section>
  </div> 
</template>

<script>


import PostsList from '@/components/Blog/PostsList.vue'
import Search from '@/components/Blog/Search.vue'

export default {

components: {
     PostsList, Search
  },

  data() {
    return {
      search: '',
    }
  },


  head () {
  let title = 'Blog Nuxt!',
      descr = 'SSR Blog Nuxt.js!',
      type = 'site'

  return {
    title: title,
    meta: [
      { hid: 'og:title', name: 'og:title', content:  title },
      { hid: 'description', name: 'description', content:  descr },
      { hid: 'og:description', name: 'og:description', content:  descr },
      { hid: 'og:type', name: 'og:type', content:  type },
    ]
  }
},

 computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded;
    },



  notesFilter () {
		  let arr = this.postsLoaded,
		  	search = this.search
				if (!search) return arr;
				// Small
			search = search.trim().toLowerCase();
			// Filter
			arr = arr.filter(function (item) {
				if (item.title.toLowerCase().indexOf(search) !== -1) {
					return item;
				}
			})
			// Error
			return arr;
	  },



  },

  


}
</script>


<style lang="scss" scoped> 

  .home-page-section {
    min-height: 75vh;
  }

</style>