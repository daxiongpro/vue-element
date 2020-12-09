<template>
  <div class="testUser">
    <div class="function">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="请输入用户ID名称"
              icon="search"
              v-model="input">
            </el-input>
          </div>
        </el-col>
        <el-col :span="20">
          <el-button type="primary">新建用户测试</el-button>
        </el-col>
      </el-row>
    </div>

    <div id="table">
      <el-table
        :data="audioData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="id"
          label="序号ID">
        </el-table-column>
        <el-table-column
          prop="step"
          label="步骤">
        </el-table-column>
        <el-table-column
          prop="audioString"
          label="语音文本">
        </el-table-column>


        <el-table-column
          :context="_self"
          inline-template
          label="操作">
          <span>
            <el-button @click="handleClick" type="text" size="small">提交</el-button>
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">插入</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </span>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import audioData from "../../mock/audioData";
  export default {
    data(){
      return {
        input: '',
        audioData
      }

    },
    methods: {
      handleClick: function(){
        alert('click');
      }
    }
  }
</script>

<style media="screen">

</style>
