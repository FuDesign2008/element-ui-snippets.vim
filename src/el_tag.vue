<template>
  <div>
    <el-tag>标签一</el-tag>
    <el-tag
      type="success"
      size="medium"
    >
      标签二
    </el-tag>
    <el-tag
      type="info"
      size="small"
    >
      标签三
    </el-tag>
    <el-tag
      type="warning"
      size="mini"
    >
      标签四
    </el-tag>
    <el-tag type="danger">
      标签五
    </el-tag>
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type"
    >
      {{ tag.name }}
    </el-tag>
  </div>
</template>
