module.exports = {
  // presets: [["@babel/env", { "modules": false }]],
  presets: ["@vue/app"],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      },
      "Element"
    ],
    [
      "import",
      {
        "libraryName": "ant-design-vue",
        "libraryDirectory": "es",
        "style": "css"
      },
      "Antd"
    ]
  ]
}
