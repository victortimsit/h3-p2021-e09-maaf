<template>
  <div ref="hero" class="hero">
    <section class="sub">
      <transition
        appear
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div class="wrapper">
          <h1>{{ data.sub.punchline }}</h1>
          <BasicCTA>
            <Smart-Link href="/subscribe">{{ data.sub.cta }}</Smart-Link>
          </BasicCTA>
        </div>
      </transition>
    </section>
    <section class="more">
      <transition
        appear
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div class="wrapper">
          <h4>{{ data.more.punchline }}</h4>
          <BasicButton @click.native="scrollHero">{{ data.more.cta }}</BasicButton>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
import BasicButton from "~/components/display/Basic/Button.vue";
import BasicCTA from "~/components/display/Basic/CTA.vue";

export default {
  components: {
    BasicButton,
    BasicCTA
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    scrollHero: function() {
      window.scroll({
        top: this.$refs.hero.clientHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.hero
  min-height 100vh
  display flex
  align-items stretch

section
  display flex
  align-items flex-end
  padding headerHeight globalMargin * 2 30vh globalMargin * 2
  border-bottom headerHeight solid blue

  @media screen and (max-width: desktop)
    padding headerHeight globalMargin 30vh globalMargin
  @media screen and (max-width: mobile)
    padding headerHeight globalMargin 10vh globalMargin

.sub
  display flex
  justify-content center
  flex 1 1 80%
  // background url("~assets/images/carBackground.svg")
  // background-size 150%
  position relative

  &::after
    content ""
    position absolute
    bottom 0
    left globalMargin
    z-index -1
    opacity .75
    display block
    width 80%
    height 80%
    background url("~assets/images/news.svg") bottom left no-repeat
    background-size contain

  .wrapper
    flex 0 0 40%

    @media screen and (max-width: mobile)
      flex 0 0 70%

.more
  background blue
  color white
  flex 20%
  @media screen and (max-width: mobile)
    display none

  .basicButton
    width 100%
</style>
