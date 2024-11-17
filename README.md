## 命令
  yarn install  
  yarn gen
## 说明
在国际化语言翻译时，例如使用il8n插件时，需要编写对应的json语言文档，此工具能自动生成json语言文档;  
执行 yarn gen 命令会将translations.xlsx内的中英文翻译文本，生成chinese.json和english.json文件
## chinese.json内容示例如下：
{
  "main_ok": "好的",  
  "main_hello": "你好"
}

## english.json内容示例如下：
{
  "main_ok": "OK",  
  "main_hello": "Hello"
}
