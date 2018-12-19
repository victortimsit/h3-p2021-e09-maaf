<template>
  <div class="message writing">
    <div class="dot dot--1"/>
    <div class="dot dot--2"/>
    <div class="dot dot--3"/>
  </div>
</template>

<style scoped lang="stylus">
.writing
  display flex

.dot
  width 8px
  height 8px
  border-radius 50%
  margin 2px
  background black
  opacity .5
  animation bounce .8s ease infinite

  &--1
    animation-delay .05s

  &--2
    animation-delay .1s

  &--3
    animation-delay .15s

@keyframes bounce {
  50% {
    transform translateY(-4px)
  }
}
</style>
