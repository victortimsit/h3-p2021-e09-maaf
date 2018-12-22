<template>
  <div class="sign centered">
    <div
      class="help centered"
    >{{ data.options ? data.options.help : this.$store.state.scenario.userInputs.sign.help }}</div>
    <div class="erase softHover" @click="clear">
      <img src="~/assets/icons/erase.svg" alt="erase">
    </div>
    <canvas
      ref="canvas"
      @mousedown.prevent="startPath"
      @mouseup.prevent="endPath"
      @mouseout.prevent="endPath"
      @mousemove.prevent="mouseMove"
      @touchstart.prevent="startPath"
      @touchmove.prevent="touchMove"
      @touchend.prevent="endPath"
      @touchleave.prevent="endPath"
    >Browser does not support canvas</canvas>
    <div
      class="send uppercase softHover"
      @click="send"
    >{{ data.options ? data.options.submit : this.$store.state.scenario.userInputs.sign.submit }}</div>
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
      ctx: false,
      drawing: false,
      clientRect: false
    };
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext("2d");
    this.$refs.canvas.width = this.$refs.canvas.offsetWidth * 2;
    this.$refs.canvas.height = this.$refs.canvas.offsetHeight * 2;
    this.ctx.strokeStyle = "#222222";
    this.ctx.fillStyle = "#f5f5f5";
    this.ctx.lineWidth = 6;
    this.clientRect = this.$refs.canvas.getBoundingClientRect();
    this.clear();
  },
  methods: {
    send: function() {
      this.$root.$emit("imgAnswer", {
        img: this.$refs.canvas.toDataURL("image/png"),
        key: this.data.key
      });
    },
    startPath: function() {
      this.ctx.beginPath();
      this.drawing = true;
    },
    endPath: function() {
      this.drawing = false;
    },
    mouseMove: function(e) {
      if (!this.drawing) return;
      this.ctx.lineTo(e.layerX * 2, e.layerY * 2);
      this.ctx.stroke();
    },
    touchMove: function(e) {
      if (!this.drawing) return;
      this.ctx.lineTo(
        (e.touches[0].clientX - this.clientRect.left) * 2,
        (e.touches[0].clientY - this.clientRect.top) * 2
      );
      this.ctx.stroke();
    },
    clear: function() {
      this.ctx.clearRect(
        0,
        0,
        this.$refs.canvas.width,
        this.$refs.canvas.height
      );
      this.ctx.fillRect(
        0,
        0,
        this.$refs.canvas.width,
        this.$refs.canvas.height
      );
    }
  }
};
</script>

<style scoped lang="stylus">
.sign
  cursor pointer
  border-top 1px solid grey
  position relative

.help
  position absolute
  top 0
  left 0
  width 100%
  opacity .6
  padding globalMargin * 1.5 0
  pointer-events none

.erase
  position absolute
  top globalMargin
  right globalMargin
  width 36px
  height 36px

canvas
  width 100%
  height 40vh
  background lightGrey

.send
  color blue
  font-weight 500
  padding globalMargin 0
</style>
