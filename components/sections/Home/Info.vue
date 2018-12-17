<template>
  <div
    :class="{
      infoLeft: type === 'left',
      infoCenter: type === 'center',
      infoRight: type === 'right'
    }"
    class="info"
  >
    <Container>
      <div class="wrapper">
        <h2>{{ data.punchline }}</h2>
        <p>{{ data.desc }}</p>
      </div>
      <div class="img">
        <img :src="data.image.src" :alt="data.image.alt">
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => "left"
    },
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped lang="stylus">
.info
  border-bottom 8px solid lightBlue

.container
  display flex
  align-items center
  height 100%
  min-height 70vh

.info
  .wrapper, .img
    flex 0 0 50%

.wrapper
  padding 0 globalMargin * 2

  @media screen and (max-width: desktop)
    padding 0 globalMargin

  @media screen and (max-width: mobile)
    margin-top globalMargin

.img
  text-align center
  padding globalMargin * 2

  img
    max-width 100%
    max-height 100%

    @media screen and (max-width: mobile)
      max-width 90%
      max-height 90%

// Left case
.infoLeft
  .container
    border-left 8px solid lightBlue

    @media screen and (max-width: mobile)
      flex-flow column nowrap

// Center case
.infoCenter
  .container
    flex-flow column-reverse nowrap
    justify-content center

    @media screen and (max-width: mobile)
      flex-flow column nowrap

  .wrapper, .img
    flex 0 0 auto

  .img
    padding globalMargin * 2 0
    width 80%

  .wrapper
    @media screen and (min-width: tablet)
      width 50%

// Right case
.infoRight
  .container
    flex-flow row-reverse nowrap
    border-right 8px solid lightBlue

    @media screen and (max-width: mobile)
      flex-flow column nowrap
</style>
