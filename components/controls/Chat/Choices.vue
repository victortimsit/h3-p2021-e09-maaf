<template>
  <div class="choices">
    <ul>
      <li
        v-for="(choice, index) in data.choices"
        :key="index"
        :class="choice.class"
        @click="$root.$emit('answer', choice)"
      >
        <Container>{{ choice.label }}</Container>
      </li>
      <li>
        <Container>
          <form @submit.prevent="manual && $root.$emit('answer', manualChoice)">
            <input
              v-model="manual"
              :placeholder="data.options ? data.options.placeholder : this.$store.state.scenario.userInputs.choices.placeholder"
              type="text"
            >
            <input
              :value="data.options ? data.options.submit : this.$store.state.scenario.userInputs.choices.submit"
              class="softHover uppercase"
              type="submit"
            >
          </form>
        </Container>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      manual: ""
    };
  },
  computed: {
    manualChoice: function() {
      return {
        label: this.manual,
        key: this.data.default
      };
    }
  }
};
</script>

<style scoped lang="stylus">
li
  padding globalMargin 0
  border-top 1px solid grey
  cursor pointer

.disabled
  pointer-events none
  opacity .5

form
  position relative

input[type=text]
  width 80%

input[type=submit]
  color blue
  cursor pointer
  position absolute
  right 0
  top 50%
  transform translateY(-50%)
  font-weight 500
</style>
