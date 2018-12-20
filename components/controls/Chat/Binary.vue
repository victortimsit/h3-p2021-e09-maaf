<template>
  <div class="binary centered">
    <div
      :class="data.positive.class"
      class="option positive softHover"
      @click="$root.$emit('answer', data.positive)"
    >{{ data.positive.label }}</div>
    <div
      :class="data.negative.class"
      class="option negative softHover"
      @click="$root.$emit('answer', data.negative)"
    >{{ data.negative.label }}</div>
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
