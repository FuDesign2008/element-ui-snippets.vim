export default {
  data() {
    // @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
    this.acceptMimeTypes = ['image/*'].join(',')
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    }
  },
  methods: {
    /**
     * @param {File} file
     * @param {Array<File>} fileList
     */
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    /**
     * @param {File} file
     */
    handlePreview(file) {
      console.log(file)
    },

    /**
     * @param {File} file
     */
    beforeUpload(file) {
      console.log(file)
    },

    /**
     * @param {File} file
     * @param {Array<File>} fileList
     * @return {Promise}
     */
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
  },
}
