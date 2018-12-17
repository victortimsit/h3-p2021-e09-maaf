<template>
  <div class="start">
    <h1 class="centered">Avant de commencer...</h1>
    <div class="wrapper">
      <Choice :data="data.sections.already"/>
      <Choice :data="data.sections.new"/>
    </div>
  </div>
</template>

<script>
import data from "~/assets/data/subscribe/start/index.json";

import Choice from "~/components/sections/Subscribe/Start/Choice.vue";

export default {
  components: {
    Choice
  },
  head: {
    title: `${data.page.title}`
  },
  data() {
    return {
      data
    };
  },
  transition: {
    enterActiveClass: "animated fadeIn faster",
    leaveActiveClass: "animated fadeOut faster"
  }
};
</script>

<style scoped lang="stylus">
.start
  min-height 100vh
  padding-top headerHeight * 1.5
  padding-bottom globalMargin
  background url("~assets/images/carBackground.svg")
  background-size 150%
  display flex
  flex-flow column nowrap

.wrapper
  flex 1
  display flex
  justify-content center

  @media screen and (max-width: tablet)
    flex-flow column nowrap

.choice
  flex 0 0 40%

  @media screen and (max-width: tablet)
    flex 1 0 40%
</style>
