<template>
  <div class="choice">
    <div class="wrapper">
      <BasicButton class="fullWidth">
        <SmartLink :href="data.href" :title="data.button">{{ data.button }}</SmartLink>
      </BasicButton>
      <p>{{ data.desc }}</p>
    </div>
  </div>
</template>

<script>
import BasicButton from "~/components/display/Basic/Button.vue";

export default {
  components: {
    BasicButton
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
.choice
  display flex
  justify-content center
  margin globalMargin

.wrapper
  max-width 300px
  
.basicButton
  margin-bottom globalMargin

</style>
