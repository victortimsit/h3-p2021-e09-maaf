<template>
  <header class="header">
    <Container>
      <div class="back">
        <img src="~/assets/icons/arrowBack.svg" alt="arrowBack">
      </div>
      <div class="mainTxt title">{{ data.title }}</div>
      <div class="mainTxt cta softHover">{{ data.cta }}</div>
    </Container>
  </header>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped lang="stylus">
.header
  background blue
  color white

  .container
    margin globalMargin
    text-align center
    position relative

.back, .cta
  position absolute
  top 50%
  transform translateY(-50%)
  cursor pointer

.back
  left 0
  height 26px
  width 26px

.cta
  right 0

</style>
