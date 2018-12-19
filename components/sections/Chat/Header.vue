<template>
  <header class="header">
    <Container>
      <div class="back">
        <img src="~/assets/icons/arrowBack.svg" alt="arrowBack">
      </div>
      <div class="mainTxt title">{{ title }}</div>
      <div class="mainTxt cancel softHover">Cancel</div>
    </Container>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "Sinistre"
    }
  }
};
</script>

<style scoped lang="stylus">
.header
  border-bottom 1px solid lightGrey

.container
  margin globalMargin
  text-align center
  position relative

.title, .back
  opacity .5

.back, .cancel
  position absolute
  top 50%
  transform translateY(-50%)
  cursor pointer

.back
  left 0
  height 26px
  width 26px


.cancel
  right 0
  color red

</style>
