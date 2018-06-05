# qui-titlebar

> 顶部导航栏组件

## 预览

<img src="./docs/assets/qui-titlebar.jpg" width="300"/>

## 依赖接口

依赖router接口，请确认manifest.json配置中已引入

```json
"features": [{ "name": "system.router" }]
```

## 使用方法
	
```ux
<import name='qui-titlebar' src='@qapp-ui/qui-titlebar/index'></import>

<template>
    <div class="page-doc">
      <qui-titlebar option="{{option}}"
       @qui-leftclicked="leftClick"
       @qui-rightclicked="rightClick"></qui-titlebar>
    <div>
</template>

<script>
import prompt from '@system.prompt'

export default {
	data: {
		option: {
			title: '标题',
			textColor: '#000000', 
			backgroundColor: '#eeeeee',
			backgroundOpacity: '0.5',
			leftIcon: '/Common/img/back.webp',
			rightIcon: '/Common/img/more.webp'
		}
	},
	leftClick() {
		prompt.showToast({
			message: 'left click'
		})
	},
	rightClick() {
		prompt.showToast({
			message: 'right click'
		})
	}
};
</script>
```

更详细代码可以参考 [qui-titlebar demo]()

### 参数 option

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| richContent | `String` |`N`| `-` | 自定义富文本内容 |
| title | `String` |`N`| `标题` | 标题 |
| titleAlign | `String` |`N`| `center` | 标题对齐方式 |
| textColor | `String` |`N`| `#333333` | 标题颜色|
| backgroundColor | `String` |`N`| `#ffffff` | 背景颜色 |
| backgroundOpacity | `String` |`N`| `1` | 背景透明度 |
| leftIcon | `String` |`N`| `base64格式图片` | 左侧icon 优先显示（默认返回箭头） |
| leftText | `String` |`N`| `-` | 左侧文案 |
| rightIcon | `String` |`N`| `-` | 右侧icon 优先显示 |
| rightText | `String` | `N` |`-`| 右侧文案 |
| defaultReturn | `Boolean` | `N` |`true`| 是否使用系统默认返回 |
| show | `Boolean` | `N` |`true`| 是否显示 |

### 事件

| 事件名 | 参数 | 描述 | 
|-------|-----|-----|
| qui-leftclicked | `-` | 左侧按钮响应事件 | 
| qui-rightclicked | `-` | 右侧按钮响应事件 | 


### 注意点
- 当将该组件作为标题栏使用时，请将系统自带的标题栏删除，在`manifest.json`文件中设置`display.titleBar`为`false`
- 如果以上配置无法满足需求时，可以使用参数`option.richContent`来完全自定义。当使用richContent时，组件内部使用了`<richtext>`组件，而富文本类型只支持ux `type="ux"`
- 参数`option.defaultReturn`默认为ture，当点击左侧按钮触发事件时默认执行接口`router.back`返回上一页。若想自己控制左侧响应事件时，请设置为`false`
- 如果你需要隐藏左边返回按钮，可传入 `option: {leftIcon:'',leftText:''}`

