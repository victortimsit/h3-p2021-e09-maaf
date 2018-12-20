<template>
  <div class="chatArea">
    <div ref="scrollContainer" class="chatTxt">
      <div ref="chatContainer" class="chatContainer">
        <Messages v-for="(messages, index) in postedMessagesGroup" :key="index" :data="messages"/>
      </div>
    </div>
    <div :class="{disabled: !userInput, enabled: userInput}" class="chatInput">
      <Choices v-if="userInput.type === 'choice'" :data="userInput"/>
      <Feedback v-else-if="userInput.type === 'feedback'" :data="userInput"/>
    </div>
  </div>
</template>

<script>
import Messages from "~/components/controls/Chat/Messages.vue";
import Choices from "~/components/controls/Chat/Choices.vue";
import Feedback from "~/components/controls/Chat/Feedback.vue";

export default {
  components: {
    Messages,
    Choices,
    Feedback
  },
  data() {
    return {
      postedMessagesGroup: [],
      current: {},
      userInput: false
    };
  },
  computed: {
    actions: function() {
      return this.$store.state.scenario.actions;
    }
  },
  created() {
    this.$root.$on("scroll", this.scroll.bind(this));
    this.$root.$on("next", this.next.bind(this));
    this.$root.$on("choice", this.choice.bind(this));
    this.$root.$on("feedback", this.feedback.bind(this));
  },
  mounted() {
    this.scroll();
    this.post("start");
  },
  methods: {
    scroll: function() {
      this.$refs.scrollContainer.scroll({
        top: this.$refs.chatContainer.offsetHeight,
        left: 0,
        behavior: "smooth"
      });
    },
    post: function(key) {
      this.userInput = false;
      this.postedMessagesGroup.push(this.actions[key]);
      this.current = this.actions[key];
    },
    next: function() {
      if (this.current.userInput.type === "straight") {
        return this.post(this.current.userInput.key);
      } else {
        this.userInput = this.current.userInput;
      }
    },
    choice: function(choice) {
      this.sendMsg(choice.label);
      this.post(choice.key);
    },
    feedback: function(feedback) {
      this.userInput = false;
      let stars = "";
      for (let i = 0; i < feedback.rating; i++) {
        stars += "★";
      }
      this.sendMsg(stars);
      if (feedback.message) {
        this.sendMsg(feedback.message, 1500);
      }
      setTimeout(() => {
        this.sendMsg(feedback.answer, 2000, "received");
      }, 1000);
    },
    sendMsg: function(msg, delay = 0, type = "sent") {
      this.postedMessagesGroup.push({
        type,
        messages: [
          {
            txt: msg,
            delay: delay
          }
        ],
        noCallback: true
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.chatArea
  flex 1
  display flex
  justify-content flex-end
  flex-flow column nowrap
  overflow hidden
  -ms-overflow-style: none;
  &::-webkit-scrollbar
    display none

.chatTxt
  overflow-y scroll
  -ms-overflow-style: none;
  &::-webkit-scrollbar
    display none

.chatInput
  margin-top globalMargin
  transition transform .3s ease
  will-change transform

  &.disabled
    transform translateY(100%)
</style>
