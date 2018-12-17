<template>
  <div :style="{color, background}" class="basicButton centered softHover">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: () => ""
    },
    background: {
      type: String,
      default: () => ""
    }
  }
};
</script>

<style scoped lang="stylus">
.basicButton
  fontsize(20px)
  font-weight 600
  padding 12px 24px
  display inline-block
  border-radius 30px
  cursor pointer
  color white
  background darkBlue
</style>
