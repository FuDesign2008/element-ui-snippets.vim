<template>
  <div>
    <!-- el-steps -->
    <el-steps
      :active="activeIndex"
      finish-status="success"
      align-center
    >
      <el-step
        title="步骤 1"
        description="描述性文字, 可选"
      />
      <el-step
        title="步骤 2"
      />
      <el-step
        title="步骤 3"
      />
    </el-steps>
    <!-- el-steps with icon -->
    <el-steps
      :active="activeIndex"
      finish-status="success"
      align-center
    >
      <el-step
        title="步骤 1"
        icon="el-icon-edit"
        description="描述性文字, 可选"
      />
      <el-step
        icon="el-icon-upload"
        title="步骤 2"
      />
      <el-step
        icon="el-icon-picture"
        title="步骤 3"
      />
    </el-steps>
    <!-- el-steps with vertical direction -->
    <el-steps
      :active="activeIndex"
      finish-status="success"
      align-center
      direction="vertical"
    >
      <el-step
        title="步骤 1"
        description="描述性文字, 可选"
      />
      <el-step
        title="步骤 2"
      />
      <el-step
        title="步骤 3"
      />
    </el-steps>
    <!-- el-steps with simple style -->
    <!-- 设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。 -->
    <el-steps
      :active="activeIndex"
      finish-status="success"
      simple
    >
      <el-step
        title="步骤 1"
        icon="el-icon-edit"
      />
      <el-step
        title="步骤 2"
        icon="el-icon-upload"
      />
      <el-step
        title="步骤 3"
        icon="el-icon-picture"
      />
    </el-steps>
  </div>
</template>
