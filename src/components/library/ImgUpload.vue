<template>
    <el-upload
    class="img-upload"
    ref="upload"
    action="http://localhost:8443/api/books/covers"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-success="handleSuccess"
    multiple
    :limit="1"
    :on-exceed="handleExceed"
    :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件,大小不超过500kb</div>
    </el-upload>
</template>

<script>
export default {
  name: 'ImgUpload',
  data () {
    return {
      fileList: [],
      url: ''
    }
  },
  methods: {
    handleRemove (file, fileList) {
    },
    handlePreview (file) {
    },
    handleExceed (files, fileList) {
      // eslint-disable-next-line no-template-curly-in-string
      this.$message.warning('当前限制选择了1个文件,本次选择了 ${files.length} 个文件,共选择了 ${files.length + fileList.length} 个文件')
    },
    beforeRemove (file, fileList) {
      // eslint-disable-next-line no-template-curly-in-string
      return this.$confirm('确认移除${file.name}?')
    },
    handleSuccess (response) {
      if (response && response === 200) {
        this.url = response.data.data
        this.$emit('onUpload')
        this.$message.warning('上传成功')
      } else {
        this.$message.warning('上传失败')
      }
      // this.url = response
      // this.$emit('onUpload')
      // this.$message.warning('上传成功')
    },
    clear () {
      this.$refs.upload.clearFiles()
    }
  }
}
</script>

<style scoped>

</style>
