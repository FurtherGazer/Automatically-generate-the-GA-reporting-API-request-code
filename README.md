# 根据 GA 自定义报告设置 自动生成 GA Reporting API 请求代码

## 功能简述

本插件可以免除你阅读 API 请求文档的烦恼，而可以直接通过 GA 的自定义报告，自动生成相应的 Reporting API 请求代码（JSON 格式）


## 使用方法

1. 安装插件（下载该项目代码至本地，在 Chrome extensions 中将此文件加载）
2. 进入 GA 自定义报告页面，编辑相应的自定义报告，并点击保存
3. 点击保存后，会根据之前的 GA 自定义报告中的设置内容，自动生成对应的 GA Reporting API 请求代码，此时点击右上角拓展ICON，即可在 popup 弹出页中，查看到相应的代码
4. 复制代码进行使用即可。


## 注意

这个插件对部分维度指标不适配，后面会抽空做一下规则，进行补充，如果遇到了，大家请参考：https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/ 并以此为准。