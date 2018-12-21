<template>
  <div class="message">
    <template v-if="data.txt">{{ formated(data.txt) }}</template>
    <div v-if="data.html" v-html="formated(data.html)"/>
    <img :src="data.img" :alt="data.img" @click="fullView = true">
    <div v-if="data.imgLabel" class="imgLabel">{{ data.imgLabel }}</div>
    <div v-if="data.img" :class="{active: fullView}" class="fullView" @click="fullView = false">
      <div class="wrapper">
        <img :src="data.img" :alt="data.img">
        <div v-if="data.imgLabel" class="imgLabel">{{ data.imgLabel }}</div>
      </div>
    </div>
    <SmartLink v-if="data.link" :href="data.link" target="blank">{{ data.link }}</SmartLink>
  </div>
</template>

<script>
import formatTxt from "~/assets/js/helpers/formatTxt";

export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      fullView: false
    };
  },
  methods: {
    formated(msg) {
      return formatTxt(msg, {
        client: this.$store.state.client,
        assistant: this.$store.state.assistant
      });
    }
  }
};
</script>

<style lang="stylus">
.messages .message
  max-width 720px
  line-height 1.1
  position relative

  img
    border-radius globalMargin * 0.5
    display block
    max-width 100%
    max-height 300px

  .imgLabel
    background rgba(darkGrey, .5)
    color white
    border-radius globalMargin
    padding 2px 4px
    position absolute
    top globalMargin
    right globalMargin

  .fullView
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 20
    background rgba(black, .8)
    opacity 0
    pointer-events none
    transition opacity .3s ease
    will-change opacity
    display flex
    align-items center

    &.active
      pointer-events auto
      opacity 1

    .wrapper
      position relative

    img
      max-height 100%

  .smartLink, a
    text-decoration underline
</style>
