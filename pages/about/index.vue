<template>
  <div>
    <section class="about-section">
      <div class="container">


    <Intro :title="title" />
        <div class="row">
          <div class="col-xl-3" v-for="(item, index) in 12" :key="index">
            <b-card
              title="Card Title"
              :img-src="`https://picsum.photos/600/300/?image=${random+item}`"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-5 mt-5"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>

import Intro from '@/components/UI/Intro.vue'

export default {

    components: {
        Intro
    },

  

  head () {
  let title = 'About Blog Nuxt!',
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

    data() {
        return {
            title: 'Hello Title Intro!',
            random: null,
        }
    },

    created() {
      this.random = this.mathRandInt(1,60); 
    },


    methods: {
      mathRandInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    },



};
</script>


<style lang="scss" scoped>

</style>