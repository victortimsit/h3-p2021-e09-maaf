<template>
  <div class="comments">
    <Container>
      <div class="header centered">
        <h1>{{ data.punchline }}</h1>
        <div v-html="data.desc"/>
      </div>
      <div class="wrapper">
        <CardComment v-for="(comment, index) in data.comments" :key="index" :data="comment"/>
      </div>
    </Container>
  </div>
</template>

<script>
import CardComment from "~/components/display/Card/Comment.vue";

export default {
  components: {
    CardComment
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped lang="stylus">
.comments
  background url("~assets/images/carBackground.svg")
  background-size 150%
  padding globalMargin * 4 0

.header
  h1
    margin-bottom globalMargin

.wrapper
  display flex
  margin-top globalMargin
  justify-content space-between

  @media screen and (max-width: tablet)
    flex-flow column nowrap

  .comment
    flex 0 0 30%

    @media screen and (max-width: tablet)
      &:not(:first-child)
        margin-top globalMargin

</style>
