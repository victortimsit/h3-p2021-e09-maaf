<template>
  <div class="videoReport centered">
    <div
      class="option positive softHover"
      @click="start(true)"
    >{{ data.options ? data.options.start : this.$store.state.scenario.userInputs.videoReport.start }}</div>
    <div
      :class="data.negative.class"
      class="option negative softHover"
      @click="$root.$emit('answer', data.negative)"
    >{{ data.negative.label }}</div>
    <div :class="{hidden: !recording}" class="video">
      <video ref="capture" autoplay/>
      <div
        class="recording"
      >{{ data.options ? data.options.recording : this.$store.state.scenario.userInputs.videoReport.recording }}</div>
      <div v-if="devices.length > 1" class="reverse softHover" @click="start(false)">
        <img src="~/assets/icons/cameraReverse.svg" alt="cameraReverse">
      </div>
      <div
        class="end softHover"
        @click="stop"
      >{{ data.options ? data.options.stop : this.$store.state.scenario.userInputs.videoReport.stop }}</div>
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
  },
  data() {
    return {
      recording: false,
      devices: [],
      currentDevice: 0,
      startTime: 0
    };
  },
  mounted() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      // Find video devices
      navigator.mediaDevices
        .enumerateDevices()
        .then(devices => {
          for (const device of devices) {
            if (device.kind === "videoinput") {
              this.devices.push(device.deviceId);
            }
          }
          if (!this.devices.length) {
            // No camera found
            this.error(`${this.data.negative.label} (no camera found)`);
          }
        })
        .catch(e => {
          // No camera found
          this.error(`${this.data.negative.label} (no camera found)`);
        });
    } else {
      // Browser failure
      this.error(`${this.data.negative.label} (record function not supported)`);
    }
  },
  methods: {
    start: function(setStartTime = false) {
      this.stopTrack();

      setStartTime && (this.startTime = Date.now());

      console.log(setStartTime, this.startTime);

      const constraints = {
        video: {
          deviceId: { exact: this.devices[++this.currentDevice] }
        }
      };

      this.currentDevice %= this.devices.length;

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          // Success
          window.stream = stream;
          this.$refs.capture.srcObject = stream;
          this.recording = true;
        })
        .catch(e => {
          // User failure
          this.error(`${this.data.negative.label} (permission denied)`);
        });
    },
    stop: function() {
      // Retrieve screenshot
      const canvas = document.createElement("canvas");
      canvas.width = this.$refs.capture.videoWidth;
      canvas.height = this.$refs.capture.videoHeight;
      canvas.getContext("2d").drawImage(this.$refs.capture, 0, 0);

      this.$root.$emit("imgAnswer", {
        img: canvas.toDataURL("image/png"),
        imgLabel: new Date(Date.now() - this.startTime - 3600000)
          .toTimeString()
          .split(" ")[0],
        key: this.data.key
      });

      this.recording = false;

      this.stopTrack();
    },
    stopTrack: function() {
      window.stream &&
        window.stream.getTracks().forEach(function(track) {
          track.stop();
        });
    },
    error: function(msg) {
      this.$root.$emit("answer", {
        label: msg,
        key: this.data.key
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.videoReport
  display flex
  cursor pointer
  border-top 1px solid grey

.option
  flex 0 0 50%
  padding globalMargin 0

.positive
  border-right 1px solid grey

.video
  position fixed
  width 100%
  height 100%
  top 0
  left 0
  z-index 10
  transition opacity .3s ease
  will-change opacity
  opacity 1
  background black

  &.hidden
    opacity 0
    pointer-events none

  video
    height 100%
    width 100%
    object-fit cover

.reverse
  width 36px
  height 36px
  position absolute
  top globalMargin
  right globalMargin
  cursor pointer

.recording, .end
  padding globalMargin 0
  width 100%
  position absolute
  left 0

.recording
  top globalMargin * 0.5
  color red
  animation breath 1s ease infinite

.end
  bottom 0
  background white
  cursor pointer

@keyframes breath {
  50% {
    opacity .5
  }
}
</style>
