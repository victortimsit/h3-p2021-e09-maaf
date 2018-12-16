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
  min-height 80vh

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
    z-index -1

// Left case
.infoLeft
  .container
    border-left 8px solid lightBlue

    @media screen and (max-width: mobile)
      flex-flow column nowrap

  .img img
    transform rotateZ(10deg)

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
    padding globalMargin
    @media screen and (min-width: mobile)
      margin-bottom 100px

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

    .img img
      transform rotateZ(-10deg)
</style>
