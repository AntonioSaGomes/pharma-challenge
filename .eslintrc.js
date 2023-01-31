module.exports = {
    extends: [
      'plugin:vue/base',
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:vue/vue3-strongly-recommended',
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
      "vue/require-default-prop": "off",
    }
  }