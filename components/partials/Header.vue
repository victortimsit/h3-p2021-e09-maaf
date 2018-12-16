<template>
  <header class="header">
    <Smart-Link href="/" title="MAAF Automobile" class="logo">
      <img src="~/assets/icons/maafAuto.svg" alt="MAAF Automobile">
    </Smart-Link>
  </header>
</template>

<style scoped lang="stylus">
.header
  position fixed
  top 0
  left 0
  padding 0 globalMargin headerHeight * 0.5 globalMargin
  height headerHeight * 1.5
  display flex
  align-items center
  width 100%
  background linear-gradient(white, rgba(white, .9) 60%, transparent)

  @media screen and (max-width: mobile)
    justify-content center
    position absolute

.logo
  max-width 80%

  img
    max-height 40px
    max-width 100%
</style>
