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
    width 100% - globalMargin * 4
  @media screen and (max-width: tablet)
    width 100% - globalMargin * 2
</style>
