<template>
  <div class="inner">
    <div class="heading">
      <h1 class="title">{{ $t('posts') }}</h1>
    </div>
    <el-table :data="temp" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'posts',

    data () {
      const temp = []
      for (let i = 0; i < 100; i++) {
        temp.push({
          date: new Date().toLocaleDateString(),
          name: i % 2 ? '汪磊' : '汪子文',
          address: `北京市海淀区中关村国际软件大厦 ${i} 号`
        })
      }
      return {
        temp: temp,
        multipleSelection: []
      }
    },

    methods: {
      handleSelectionChange (value) {
        this.multipleSelection = value
      }
    }
  }
</script>
