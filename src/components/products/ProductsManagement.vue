<template>
  <div id="testManagement">
    <el-tabs :active-name="activeName">
      <el-tab-pane label="语音文本" name="audio">
        <add-audio></add-audio>
      </el-tab-pane>
      <el-tab-pane label="视频文件" name="video">
        <add-video></add-video>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import Nothing from '../common/Nothing.vue';
import AddAudio from "./AddAudio.vue";
import AddVideo from "./AddVideo.vue";

export default {
  name: 'ProductsManagement',
  data() {
    return {
      activeName: 'audio'
    }
  },
  components: {
    Nothing,
    AddAudio,
    AddVideo,
  }
}
</script>

<style>
.el-tabs {
  width: 100%;
}
</style>
