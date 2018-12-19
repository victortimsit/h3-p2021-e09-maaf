<template>
  <div class="chatArea">
    <Container ref="scrollContainer">
      <div ref="chatContainer" class="chatContainer">
        <Messages v-for="(messages, index) in postedMessagesGroup" :key="index" :data="messages"/>
      </div>
    </Container>
  </div>
</template>

<script>
import Messages from "~/components/controls/Chat/Messages.vue";

export default {
  components: {
    Messages
  },
  data() {
    return {
      postedMessagesGroup: [],
      current: {}
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
  },
  mounted() {
    this.scroll();
    this.post("start");
  },
  methods: {
    scroll: function() {
      this.$refs.scrollContainer.$el.scroll({
        top: this.$refs.chatContainer.offsetHeight,
        left: 0,
        behavior: "smooth"
      });
    },
    post: function(key) {
      this.postedMessagesGroup.push(this.actions[key]);
      this.current = this.actions[key];
    },
    next: function() {
      if (this.current.next.type === "straight") {
        this.post(this.current.next.key);
      }
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
  overflow-y scroll
  -ms-overflow-style: none;
  &::-webkit-scrollbar
    display none

.container
  overflow-y scroll
  -ms-overflow-style: none;
  &::-webkit-scrollbar
    display none
</style>
