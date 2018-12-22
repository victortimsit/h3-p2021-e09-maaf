<template>
  <Container
    v-if="data.type === 'received' && data.messages.length || messages.length"
    :class="data.type"
    class="messages"
  >
    <div v-if="data.header" class="header">
      <img :src="data.header" alt="header">
    </div>
    <div class="wrapper">
      <div class="pp">
        <img :src="author.image" :alt="author.name">
      </div>
      <div class="list">
        <Message v-for="(message, index) in messages" :key="index" :data="message"/>
        <Writing v-if="writing && data.type === 'received'"/>
      </div>
    </div>
  </Container>
</template>

<script>
import Message from "~/components/display/Chat/Message.vue";
import Writing from "~/components/display/Chat/Writing.vue";

export default {
  components: {
    Message,
    Writing
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        type: "",
        messages: []
      })
    }
  },
  data() {
    return {
      messages: [],
      writing: true
    };
  },
  computed: {
    author: function() {
      return this.data.type === "received"
        ? this.$store.state.assistant
        : this.$store.state.client;
    }
  },
  mounted() {
    this.postMessages();
  },
  methods: {
    postMessages: function() {
      if (this.data.messages.length === 0) return this.$root.$emit("next");

      for (let i = 0; i < this.data.messages.length; i++) {
        const message = this.data.messages[i];
        const index = i;
        setTimeout(() => {
          this.messages.push(message);
          if (index + 1 === this.data.messages.length) {
            this.writing = false;
            setTimeout(() => {
              this.data.noCallback || this.$root.$emit("next");
            }, 100);
          }
        }, message.delay);
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.header
  text-align center

  img
    width 160px
    max-height 100px
    max-width 100%
    margin-top globalMargin

.wrapper
  display flex
  align-items flex-end
  margin-top globalMargin

.list
  display flex
  flex-flow column nowrap

  .message
    padding 12px

    &:not(:last-child)
      margin-bottom 2px

.sent
  .wrapper
    flex-flow row-reverse nowrap

  .list
    margin-right globalMargin * 0.5
    padding-left globalMargin
    align-items flex-end

  .message
    color white
    background blue
    border-radius 18px 4px 4px 18px
    text-align right

    &:first-child
      border-radius 18px 18px 4px 18px

    &:last-child
      border-radius 18px 4px 18px 18px

    &:only-child
      border-radius 18px

.received
  .list
    margin-left globalMargin * 0.5
    padding-right globalMargin
    align-items flex-start

  .message
    background grey
    color black
    border-radius 4px 18px 18px 4px

    &:first-child
      border-radius 18px 18px 18px 4px

    &:last-child
      border-radius 4px 18px 18px 18px

    &:only-child
      border-radius 18px

.pp
  img
    width 36px
    height 36px
    border-radius 50%
</style>
