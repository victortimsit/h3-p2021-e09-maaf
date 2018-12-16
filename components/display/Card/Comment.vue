<template>
  <div class="comment">
    <div class="wrapper centered">
      <img :src="data.image.src" :alt="data.image.alt" class="profilePicture">
      <p class="desc">{{ data.desc }}</p>
    </div>
    <span class="name bold">{{ data.name }}</span>
  </div>
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
.comment
  display flex
  background white
  border 1px solid lightBlue
  border-radius 5px
  flex-flow column nowrap
  padding globalMargin
  box-sizing border-box
  align-items center
  justify-content space-between

.wrapper
  margin-bottom globalMargin

.profilePicture
  width 100px
  height 100px
  object-fit cover
  object-position center
  border-radius 5px
  margin-bottom globalMargin
</style>
