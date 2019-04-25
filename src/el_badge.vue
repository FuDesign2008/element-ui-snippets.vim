<template>
  <div>
    <el-badge
      :value="12"
      :max="10"
      type="primary | success | warning | danger | info"
    >
      <el-button size="small">
        评论
      </el-button>
    </el-badge>
    <el-badge value="new">
      <el-button size="small">
        评论
      </el-button>
    </el-badge>
    <el-badge is-dot>
      <el-button size="small">
        评论
      </el-button>
    </el-badge>
  </div>
</template>
