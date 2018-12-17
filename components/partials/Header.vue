<template>
  <header class="header">
    <Smart-Link href="/" title="MAAF Automobile" class="logo">
      <img src="~/assets/icons/maafAuto.svg" alt="MAAF Automobile">
    </Smart-Link>
  </header>
</template>

<style scoped lang="stylus">
.header
  position absolute
  top 0
  left 0
  padding 0 globalMargin
  height headerHeight
  display flex
  align-items center
  width 100%
  @media screen and (max-width: mobile)
    justify-content center

.logo
  max-width 80%

  img
    max-height 40px
    max-width 100%
</style>
