<template>
  <div class="feedback">
    <form @submit.prevent="$root.$emit('feedback', feedback)">
      <div class="wrapper">
        <div
          class="title uppercase centered"
        >{{ data.options ? data.options.title : this.$store.state.scenario.userInputs.feedback.title }}</div>
        <div class="stars">
          <input id="star5" v-model="rating" type="radio" value="5">
          <label for="star5">5 stars</label>
          <input id="star4" v-model="rating" type="radio" value="4">
          <label for="star4">4 stars</label>
          <input id="star3" v-model="rating" type="radio" value="3">
          <label for="star3">3 stars</label>
          <input id="star2" v-model="rating" type="radio" value="2">
          <label for="star2">2 stars</label>
          <input id="star1" v-model="rating" type="radio" value="1">
          <label for="star1">1 stars</label>
        </div>
      </div>
      <template v-if="rating > 0">
        <input
          v-model="message"
          :placeholder="data.options ? data.options.placeholder : this.$store.state.scenario.userInputs.feedback.placeholder"
          type="text"
        >
        <input
          :value="data.options ? data.options.submit : this.$store.state.scenario.userInputs.feedback.submit"
          class="softHover uppercase"
          type="submit"
        >
      </template>
    </form>
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
      rating: 0,
      message: ""
    };
  },
  computed: {
    feedback: function() {
      return {
        rating: this.rating,
        message: this.message,
        answer: this.data.scale[this.rating - 1]
      };
    }
  }
};
</script>

<style scoped lang="stylus">
form
  display flex
  flex-flow column nowrap
  background lightGrey

.wrapper
  background lightBlue

.title
  margin-top globalMargin

.stars
  margin globalMargin 0
  display flex
  flex-flow row-reverse nowrap
  justify-content center

  label
    fontsize(0px)
    width 30px
    height 30px
    background url("~assets/icons/starEmpty.svg") center no-repeat
    background-size contain
    cursor pointer
    margin 0 4px

    &[for="star5"]
      order 1

    &[for="star4"]
      order 2

    &[for="star3"]
      order 3

    &[for="star2"]
      order 4

    &[for="star1"]
      order 5

  input
    display none

    &:checked ~ label
      background url("~assets/icons/starFull.svg") center no-repeat

    &+label
      &:hover, &:hover ~ label
        background url("~assets/icons/starFull.svg") center no-repeat


input[type=text]
  border-radius 8px
  display block
  background white
  border 1px solid grey
  margin globalMargin
  padding globalMargin

input[type=submit]
  color blue
  cursor pointer
  font-weight 500
  display block
  text-align center
  padding globalMargin 0
  border-top 1px solid grey
  background white
</style>
