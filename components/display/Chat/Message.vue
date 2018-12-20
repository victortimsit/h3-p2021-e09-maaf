<template>
  <div class="message">
    <template v-if="data.txt">{{ formated(data.txt) }}</template>
    <div v-if="data.html" v-html="formated(data.html)"/>
    <img v-if="data.img" :src="data.img" :alt="data.img">
    <div v-if="data.imgLabel" class="imgLabel">{{ data.imgLabel }}</div>
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

  .smartLink, a
    text-decoration underline
</style>
