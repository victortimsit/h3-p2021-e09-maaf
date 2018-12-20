<template>
  <div class="message">
    <template v-if="formatedTxt">{{ formatedTxt }}</template>
    <img v-if="data.img" :src="data.img" :alt="data.img">
    <SmartLink v-if="data.link" :href="data.link" target="blank">{{ data.link }}</SmartLink>
    <div v-if="data.html" v-html="data.html"/>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    formatedTxt: function() {
      if (!this.data.txt) return false;
      let txt = this.data.txt;

      // Fill client name
      txt = txt.replace(/%client%/g, this.$store.state.client.name);

      // Fill assistant name
      txt = txt.replace(/%assistant%/g, this.$store.state.assistant.name);

      // Deal with gender exceptions
      let genderRegex = /%gender\|(assistant|client)\|([a-zA-Z]*)\|([a-zA-Z]*)%/g;
      let match;
      while ((match = genderRegex.exec(txt)) !== null) {
        txt = txt.replace(
          match[0],
          this.$store.state[match[1]].gender === "man" ? match[2] : match[3]
        );
      }
      return txt;
    }
  }
};
</script>

<style lang="stylus">
.messages .message
  max-width 720px
  line-height 1.1

  img
    border-radius globalMargin * 0.5
    display block
    max-width 100%
    max-height 400px

  .smartLink, a
    text-decoration underline
</style>
