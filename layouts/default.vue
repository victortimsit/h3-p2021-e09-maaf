<template>
  <div>
    <Header/>
    <main class="main">
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/partials/Header.vue";
import Footer from "~/components/partials/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="stylus">
html
  font-family mainFont
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  color black
  background white

body
  min-height 100vh
  display flex
  flex-flow column nowrap
  justify-content space-between
</style>
