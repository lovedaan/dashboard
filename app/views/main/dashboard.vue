<template>
  <div class="inner">
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('dashboard') }}</el-breadcrumb-item>
    </el-breadcrumb> -->
    <div class="heading">
      <h1 class="title">{{ $t('dashboard') }}</h1>
    </div>
    <el-row type="flex" justify="space-around">
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </el-row>
    <br>
    <br>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">卡片名称</span>
            <el-button style="float: right;" type="primary">操作按钮</el-button>
          </div>
          <div v-for="o in 4" class="text item">{{ '列表内容 ' + o }}</div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">卡片名称</span>
            <el-button style="float: right;" type="primary">操作按钮</el-button>
          </div>
          <div v-for="o in 4" class="text item">{{ '列表内容 ' + o }}</div>
        </el-card>
      </el-col>
    </el-row>
    <br>
    <!-- <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <br>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <br> -->
  </div>
</template>

<script>
  export default {
    name: 'dashboard'
  }
</script>

<style>
  .el-carousel__item h3 {
    margin: 0;
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
