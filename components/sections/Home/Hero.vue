<template>
  <div ref="hero" class="hero">
    <div class="primary">
      <section class="sub">
        <div class="wrapper">
          <h1>{{ data.sub.punchline }}</h1>
          <BasicCTA>
            <SmartLink href="/subscribe/start">{{ data.sub.cta }}</SmartLink>
          </BasicCTA>
        </div>
      </section>
      <section class="more">
        <div class="wrapper">
          <div class="img">
            <img src="~/assets/images/vehicles.svg" alt="vehicles">
          </div>
          <h4>{{ data.more.punchline }}</h4>
          <BasicButton class="fullWidth" @click.native="scrollHero">{{ data.more.cta }}</BasicButton>
        </div>
      </section>
    </div>
    <section class="info">
      <Container>
        <div class="download">
          <SmartLink
            href="https://play.google.com/store"
            title="Téléchargez l'application pour Android"
            target="blank"
          >
            <img src="~/assets/icons/googlePlay.svg" alt="googlePlay">
          </SmartLink>
          <SmartLink
            href="https://www.apple.com/lae/ios/app-store/"
            title="Téléchargez l'application pour IOS"
            target="blank"
          >
            <img src="~/assets/icons/appStore.svg" alt="appStore">
          </SmartLink>
        </div>
        <div class="text">{{ data.info.punchline }}</div>
      </Container>
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
.primary
  display flex

.sub, .more
  display flex
  align-items flex-end
  min-height "calc(100vh - %s)" % headerHeight
  padding headerHeight globalMargin * 2 30vh globalMargin * 2

  @media screen and (max-width: desktop)
    padding headerHeight globalMargin 30vh globalMargin
  @media screen and (max-width: mobile)
    padding headerHeight globalMargin 10vh globalMargin

.sub
  display flex
  justify-content center
  flex 1 1 80%
  position relative

  &::after
    content ""
    position absolute
    bottom 0
    left 0
    z-index -1
    opacity 1
    display block
    width 100%
    height 80%
    background url("~assets/images/news.svg")no-repeat
    background-size auto 100%
    background-position 5vw 100%

    @media screen and (max-width: tablet)
      background-position -5vw 100%

  .wrapper
    flex 0 0 40%

    @media screen and (max-width: tablet)
      flex 0 0 70%

.more
  background blue
  color white
  flex 20%
  @media screen and (max-width: tablet)
    display none
  
  .img
    width 100%
    height 160px
    margin 0 auto
    background white
    display flex
    align-items center
    padding 8px
    border-radius 30px
    margin-bottom globalMargin

    img
      width 100%

.info
  background blue
  color white

  .container
    height headerHeight
    display flex
    align-items center
    justify-content space-between

    @media screen and (max-width: tablet)
      justify-content center

  .text
    @media screen and (max-width: tablet)
      display none
</style>
