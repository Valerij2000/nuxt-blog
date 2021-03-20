<template>
  <no-ssr>
    <div class="wrapper">
    <Header/>
    <Intro title="Admin Panel" />
    
    <!-- В модуле Nuxt происходит динамическая отрисовка страницы (аналог модуля router-view) -->
    <Nuxt />
    <Footer />
  </div>
  </no-ssr>
</template>

<script>

import Header from '@/components/system/Header.vue'
import Footer from '@/components/system/Footer.vue'
import Intro from '@/components/UI/Intro.vue'

export default {
  components: {
    Header, Footer, Intro
  },

  middleware: ['auth']


}
</script>

<style lang="scss" scoped>




</style>
