<template>
  <div class="testProject">
    <div class="function">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-input
                placeholder="请输入方案ID名称"
                icon="search"
                v-model="input">
            </el-input>
          </div>
        </el-col>
        <el-col :span="20">
          <el-button type="primary" @click.native="onNewClick">新建方案测试</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="table">
      <el-table
          :data="tableData"
          stripe
          style="width: 100%">
        <el-table-column
            prop="id"
            label="ID">
        </el-table-column>
        <el-table-column
            prop="step"
            label="步骤">
        </el-table-column>


        <el-table-column
            prop="videoPath"
            label="视频路径">
        </el-table-column>

        <el-table-column
            :context="_self"
            inline-template
            label="操作">
          <span>
            <el-button @click="" type="text" size="small">提交</el-button>
            <el-button @click="" type="text" size="small">插入</el-button>
            <el-button @click="onDelClick($index)" type="text" size="small">删除</el-button>
            <el-button @click="onEditClick($index)" type="text" size="small">编辑</el-button>
          </span>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="dialogTitle" v-model="isDialogShow" size="small">
      <el-form :model="form">
        <el-form-item label="步骤" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="isDialogShow = false">确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
import videoData from "../../mock/videoData";

export default {
  data() {
    return {
      input: '',
      dialogTitle: '',
      isDialogShow: false,
      tableData: videoData,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
    }

  },
  methods: {
    // 表格内编辑按钮点击实现
    onEditClick: function (index) {
      this.dialogTitle = "编辑方案";
      this.isDialogShow = true;
    },

    // 表格内删除按钮点击实现
    onDelClick: function (index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 此处应为异步请求服务器进行数据库的操作
        this.tableData.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    onNewClick: function () {
      this.dialogTitle = "新建方案";
      this.isDialogShow = true;
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  },
}
</script>

<style media="screen">
.function {
  margin-bottom: 10px;
}

.function button {
  float: right;
}
</style>
