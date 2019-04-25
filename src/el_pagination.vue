<template>
  <div>
    <el-pagination
      :current-page.sync="currentPage"
      :page-size="20"
      :pager-count="11"
      :total="1000"
      background
      layout="prev, pager, next"
    />
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      :total="1000"
      layout="total, sizes, prev, pager, next, jumper"
      background
      small
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

