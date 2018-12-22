<template>
  <div class="chat">
    <Header :data="$store.state.scenario.header"/>
    <ChatArea :data="$store.state.scenario"/>
  </div>
</template>

<script>
import Header from "~/components/sections/Chat/Header.vue";
import ChatArea from "~/components/sections/Chat/Area.vue";

export default {
  components: {
    Header,
    ChatArea
  },
  head() {
    return {
      title: this.$store.state.scenario.name
    };
  },
  created() {
    this.$store.commit("init");
  }
};
</script>

<style scoped lang="stylus">
.chat
  background blue
  width 100%
  height 100vh
  display flex
  flex-flow column nowrap
  justify-content space-between

  @media screen and (min-width: desktop)
    width 374px
    height 812px
    padding-top 28px
    position relative

    &::before, &::after
      content ""
      position absolute
      display block
      pointer-events none
      z-index 5

    &::before
      bottom 8px
      left calc(50% - 65px)
      height 5px
      width 130px
      background black
      opacity .5
      border-radius 10px

    &::after
      top -10%
      left -10%
      display block
      width 120%
      height 120%
      background url("~assets/images/iphoneBG.png") center no-repeat
      background-size 104%
</style>
