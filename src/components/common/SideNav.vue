<template>

  <el-col>
    <el-menu default-active="/testManagement" class="el-menu-vertical-demo" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>系统管理</template>
        <el-menu-item-group>
          <template slot="title">产品管理</template>
          <!--          <el-menu-item index="/index/testManagement">产品0</el-menu-item>-->

          <li v-for="product in product_list" v-bind:key="product.id">
            <el-menu-item v-bind:index="['/index/product']+product.id">{{ product.name }}</el-menu-item>
          </li>
        </el-menu-item-group>

        <el-menu-item-group title="分组2">
          <el-menu-item index="/index/userList">用户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/index/help"><i class="el-icon-menu"></i>帮助中心</el-menu-item>
      <el-menu-item index="/index/feedback"><i class="el-icon-setting"></i>意见反馈</el-menu-item>
    </el-menu>
  </el-col>


</template>

<script>

const product_list = [
  {name: '产品一', id: '1'},
  {name: '产品二', id: '2'},
  {name: '产品三', id: '3'},
  {name: '产品四', id: '4'},
  {name: '产品五', id: '5'},
]

export default {
  data() {
    return {
      product_list: product_list
    }
  },
}


</script>