<template>
  <vueMiniPlayer ref="vueMiniPlayer" :video="video" :mutex="true" @fullscreen="handleFullscreen"></vueMiniPlayer>
</template>

<script>


export default {
  name: "VideoTest",
  data() {
    return {
      video: {
        // url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
        url: '../../static/eat.mp4',
        cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
        muted: false,
        loop: false,
        preload: 'auto',
        poster: '',
        volume: 1,
        autoplay: false
      }
    }
  },

  computed() {
    $video()
    {
      return this.$refs.vueMiniPlayer.$video;
    }
  },
  methods: {
    handleFullscreen() {

    }
  }
}
</script>

<style scoped>

</style>


