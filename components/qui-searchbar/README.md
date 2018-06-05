# qui-searchbar

> 搜索框组件

## 预览
<img src="./docs/assets/qui-searchbar.gif" width="300"/>


## 依赖接口

无

## 使用方法
	
```ux
<import name='qui-searchbar' src='@qapp-ui/qui-searchbar/index'></import>

<template>
  <div class="page-doc">
    <qui-searchbar id="search1" option="{{searchData1}}" @qui-search-focus="focus" @qui-search-blur="blur"
      @qui-search-click="search" @qui-search-clear="clear" ></qui-searchbar>
  <div>
</template>

<script>
export default {
  private: {
    searchData1: {
      placeholder: '请输入关键字',
      barBackground: '#0988F0',
      inputBackground: '#ffffff',
      searchBtnColor: '#ffffff'
    }
  }
}
</script>
```

更详细代码可以参考 [qui-searchbar demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Searchbar/index.ux)

### 参数 option

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| placeholder | `String` | `N` |`搜索`| 提示文本的内容 |
| disabled | `Boolean` | `N` |`false`| 是否禁用 |
| barBackground | `String` |`N`| `#FFFFFF` | 背景色 |
| inputBackground | `String` |`N`| `#E5E5E5` | 搜索输入框背景色 |
| searchBtnColor | `String` |`N`| `#0988F0` | 搜索按钮颜色 |
| width | `String` |`N`| `1080px` | 搜索框宽度 |
| show | `Boolean` | `N` |`true`| 是否显示 |


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
