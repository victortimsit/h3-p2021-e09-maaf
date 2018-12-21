<template>
  <div class="chatArea">
    <div ref="scrollContainer" class="chatTxt">
      <div ref="chatContainer" class="chatContainer">
        <div class="intro centered">{{ formated($store.state.scenario.intro) }}</div>
        <Messages v-for="(messages, index) in postedMessagesGroup" :key="index" :data="messages"/>
      </div>
    </div>
    <div :class="{disabled: !userInput, enabled: userInput}" class="chatInput">
      <Choices v-if="userInput.type === 'choices'" :data="userInput"/>
      <Feedback v-else-if="userInput.type === 'feedback'" :data="userInput"/>
      <Binary v-else-if="userInput.type === 'binary'" :data="userInput"/>
      <VideoReport v-else-if="userInput.type === 'videoReport'" :data="userInput"/>
      <Sign v-else-if="userInput.type === 'sign'" :data="userInput"/>
    </div>
  </div>
</template>

<script>
import elementResizeEvent from "element-resize-event";

import formatTxt from "~/assets/js/helpers/formatTxt";

import Messages from "~/components/controls/Chat/Messages.vue";
import Choices from "~/components/controls/Chat/Choices.vue";
import Feedback from "~/components/controls/Chat/Feedback.vue";
import Binary from "~/components/controls/Chat/Binary.vue";
import VideoReport from "~/components/controls/Chat/VideoReport.vue";
import Sign from "~/components/controls/Chat/Sign.vue";

export default {
  components: {
    Messages,
    Choices,
    Feedback,
    Binary,
    VideoReport,
    Sign
  },
  data() {
    return {
      postedMessagesGroup: [],
      current: {},
      userInput: false,
      history: []
    };
  },
  computed: {
    actions: function() {
      return this.$store.state.scenario.actions;
    }
  },
  created() {
    this.$root.$on("next", this.next.bind(this));
    this.$root.$on("answer", this.answer.bind(this));
    this.$root.$on("imgAnswer", this.imgAnswer.bind(this));
    this.$root.$on("feedback", this.feedback.bind(this));
  },
  mounted() {
    elementResizeEvent(this.$refs.scrollContainer, this.scroll.bind(this));
    elementResizeEvent(this.$refs.chatContainer, this.scroll.bind(this));
    this.post("start");
    // this.post("carCrash__claim");
  },
  methods: {
    scroll: function() {
      if (!this.$refs.scrollContainer) return;
      this.$refs.scrollContainer.scroll({
        top: this.$refs.chatContainer.offsetHeight,
        left: 0,
        behavior: "smooth"
      });
    },
    post: function(key) {
      this.userInput = false;
      this.history.push(key);
      this.postedMessagesGroup.push(this.actions[key]);
      this.current = this.actions[key];
    },
    next: function() {
      if (this.current.userInput.type === "straight") {
        return this.post(this.current.userInput.key);
      } else {
        this.userInput = this.current.userInput;
      }
      // setTimeout(this.scroll.bind(this), 100);
    },
    answer: function(answer) {
      this.sendMsg(answer.label);
      this.post(answer.key);
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
    imgAnswer: function(answer) {
      this.userInput = false;
      this.postedMessagesGroup.push({
        type: "sent",
        messages: [
          {
            img: answer.img,
            imgLabel: answer.imgLabel,
            delay: 0
          }
        ],
        noCallback: true
      });
      setTimeout(this.post.bind(this, answer.key), 1500);
    },
    sendMsg: function(msg, delay = 0, type = "sent") {
      if (
        this.postedMessagesGroup[this.postedMessagesGroup.length - 1].type ===
        type
      ) {
        this.postedMessagesGroup[
          this.postedMessagesGroup.length - 1
        ].messages.push({
          txt: msg,
          delay
        });
      } else {
        this.postedMessagesGroup.push({
          type,
          messages: [
            {
              txt: msg,
              delay
            }
          ],
          noCallback: true
        });
      }
    },
    formated(msg) {
      return formatTxt(msg, {
        client: this.$store.state.client,
        assistant: this.$store.state.assistant
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
  background white
  position relative;
  -ms-overflow-style: none;

  @media screen and (min-width: desktop)
    padding-bottom 18px // iPhone X safezone

  &::-webkit-scrollbar
    display none

.chatTxt
  overflow-y scroll
  -ms-overflow-style: none;
  &::-webkit-scrollbar
    display none

.chatContainer
  padding-bottom globalMargin

.intro
  margin 0 globalMargin
  padding globalMargin
  border-bottom 1px solid grey
  color rgba(black, .5)

.chatInput
  transition transform .3s ease

  &.disabled
    transform translateY(100%)
</style>
