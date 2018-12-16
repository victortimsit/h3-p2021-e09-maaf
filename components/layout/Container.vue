<template>
  <div class="container">
    <slot/>
  </div>
</template>

<style scoped lang="stylus">
.container
  margin 0 auto
  width calc(100% - 24vw)

  @media screen and (max-width: desktop)
    offset = globalMargin * 4
    width calc(100% - offset)
  @media screen and (max-width: tablet)
    offset = globalMargin * 2
    width calc(100% - offset)
</style>
