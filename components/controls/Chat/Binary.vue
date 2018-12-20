<template>
  <div class="binary">
    <div
      :class="data.positive.class"
      class="option positive softHover"
      @click="$root.$emit('answer', data.positive)"
    >
      <Container class="centered">{{ data.positive.label }}</Container>
    </div>
    <div
      :class="data.negative.class"
      class="option negative softHover"
      @click="$root.$emit('answer', data.negative)"
    >
      <Container class="centered">{{ data.negative.label }}</Container>
    </div>
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
.binary
  display flex
  cursor pointer
  border-top 1px solid grey

.option
  flex 0 0 50%
  padding globalMargin 0

.positive
  border-right 1px solid grey
</style>
