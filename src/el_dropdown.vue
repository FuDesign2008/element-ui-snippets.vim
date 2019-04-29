<template>
  <el-dropdown
    trigger="click | hover"
    split-button
    size="default | medium | small | mini"
    placement="top | top-start | top-end | bottom | bottom-start | bottom-end"
    :show-timeout="250"
    :hide-timeout="150"
    @command="handleCommand"
  >
    <span class="el-dropdown-link">
      下拉菜单<i class="el-icon-arrow-down el-icon--right" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        icon="el-icon-plus"
        command="string | number | object"
      >
        黄金糕
      </el-dropdown-item>
      <el-dropdown-item
        icon="el-icon-circle-plus"
        command="b"
      >
        狮子头
      </el-dropdown-item>
      <el-dropdown-item
        command="c"
      >
        螺蛳粉
      </el-dropdown-item>
      <el-dropdown-item
        command="d"
        disabled
      >
        双皮奶
      </el-dropdown-item>
      <el-dropdown-item
        command="e"
        divided
      >
        蚵仔煎
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

