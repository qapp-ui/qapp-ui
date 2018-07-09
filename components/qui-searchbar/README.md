# qui-searchbar

> 搜索框组件

## 预览
<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-searchbar.gif" width="300"/>


## 依赖接口

无

## 使用方法
	
```ux
<import name='qui-searchbar' src='@qapp-ui/qui-searchbar/index'></import>

<template>
    <div class="page-doc">
      <div class="search-box">
        <qui-searchbar id="search" placeholder='请输入关键字' @qui-search-focus="focus"
         @qui-search-blur="blur" @qui-search-click="search" @qui-search-clear="clear"></qui-searchbar>
    </div>
    <div>
</template>

<script>
  export default {
    onInit() {
      this.$page.setTitleBar({ text: 'Searchbar' })
      setTimeout(() => {
        this.$child("search").focus()
      }, 1000);
    },
    focus(e){
      prompt.showToast({
        message: 'focus value:' + e.detail.value
      })
    },
    blur(e) {
      prompt.showToast({
        message: 'blur value:' + e.detail.value
      })
    },
    clear(){
      prompt.showToast({
        message: 'clear'
      })
    },
    search(e) {
      prompt.showToast({
        message: 'value:' + e.detail.value
      })
    }
  }
</script>
```

更详细代码可以参考 [qui-searchbar demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Searchbar/index.ux)

### 参数

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| visible | `String` | `N` |`1`| 是否显示 |
| placeholder | `String` | `N` |`搜索`| 提示文本的内容 |
| disabled | `String` | `N` |`0`| 是否禁用 |
| barBackground | `String` |`N`| `#FFFFFF` | 背景色 |
| inputBackground | `String` |`N`| `#E5E5E5` | 搜索输入框背景色 |
| searchBtnColor | `String` |`N`| `#0988F0` | 搜索按钮颜色 |



### 事件

| 事件名 | 参数 | 描述 | 
|-------|-----|-----|
| qui-search-focus | `{value: searchValue}` | 搜索框获取焦点事件 | 
| qui-search-blur | `{value: searchValue}` | 搜索框失去焦点事件 | 
| qui-search-click | `{value: searchValue}` | 搜索框搜索按钮事件 | 
| qui-search-clear | `-` | 搜索框清空按钮事件 | 

## 方法

支持外部Api形式

| 方法名 | 参数 | 描述 | 
|-------|-----|-----|
| focus | `-` | 设置控件获得焦点 | 
| blur | `-` | 设置控件失去焦点 | 
