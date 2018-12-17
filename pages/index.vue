<template>
  <div class="home">
    <Hero :data="data.sections.hero"/>
    <Info v-for="(info, index) in data.sections.infos" :key="index" :type="info.type" :data="info"/>
    <Comments :data="data.sections.comments"/>
  </div>
</template>

<script>
import data from "~/assets/data/index.json";

import Hero from "~/components/sections/Home/Hero.vue";
import Info from "~/components/sections/Home/Info.vue";
import Comments from "~/components/sections/Home/Comments.vue";

export default {
  components: {
    Hero,
    Info,
    Comments
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
