<template>
  <div class="component-name">
    <!-- el-link -->
    <el-link
      href="https://element.eleme.io"
      type="default | primary | success | warning | danger | info"
    >
      主要链接
    </el-link>
    <!-- el-link with full options -->
    <el-link
      href="https://element.eleme.io"
      target="_blank"
      type="default | primary | success | warning | danger | info"
      :disabled="false"
      :underline="false"
    >
      默认链接
    </el-link>
    <!-- el-link with icon -->
    <el-link
      href="https://element.eleme.io"
      type="default | primary | success | warning | danger | info"
      icon="el-icon-edit"
    >
      编辑
    </el-link>
    <!-- el-link with icon align right -->
    <el-link
      href="https://element.eleme.io"
      type="default | primary | success | warning | danger | info"
    >
      编辑
      <i class="el-icon-edit el-icon--right" />
    </el-link>
  </div>
</template>
