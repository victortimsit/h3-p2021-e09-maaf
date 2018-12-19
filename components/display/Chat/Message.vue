<template>
  <div class="message">{{ formatedTxt }}</div>
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
      let txt = this.data.txt;

      // Fill client name
      txt = txt.replace(/%client%/g, this.$store.state.client.name);

      // Fill assistant name
      txt = txt.replace(/%assistant%/g, this.$store.state.assistant.name);

      // Deal with gender exceptions
      let genderRegex = /%gender\|(assistant|client)\|([a-zA-Z]*)\|([a-zA-Z]*)%/g;
      let match;
      while ((match = genderRegex.exec(txt)) !== null) {
        console.log();
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

<style scoped lang="stylus">

</style>
