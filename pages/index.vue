<template>
  <div>{{ data }}</div>
</template>

<script>
import data from "~/assets/data/index.json";
// import Hero from "~/components/sections/Home/Hero.vue";

export default {
  components: {
    // Hero
  },
  head: {
    title: `${process.env.pkg_name} - ${data.page.title}`
  },
  data() {
    return {
      data
    };
  }
};
</script>

<style scoped lang="stylus">
</style>
