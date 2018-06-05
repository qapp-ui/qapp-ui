# qui-indexlist

> 索引列表组件, 可以通过索引快速定位

## 预览
<img src="./docs/assets/qui-indexlist.gif" width="300"/>
## 依赖接口

无依赖

## 使用方法

```ux
<import name="qui-toast" src="@qapp-ui/qui-toast/index"></import>

<template>
  <div class="page">
    <div class="box">
      <qui-indexlist option="{{indexlist}}" @qui-click="click"></qui-indexlist>
    </div>
    <qui-toast id="qui-toast"></qui-toast>
  </div>
</template>

<style>
  .page {
    flex-direction: column;
  }

  .box {
    width: 100%;
    height: 100%;
    background-color: blue;
  }
</style>

<script>
  export default {
      private: {
        indexlist: {
          list: [{
            name: '包头',
            desc: 'BAV',
            key: 'baotou',
            location: true,
            icon: true
          }, {
            name: '黄山',
            key: 'huangshan'
          }, {
            name: '宝鸡',
            key: 'baoji',
            hot: true
          }, {
            name: '成都',
            desc: '天府之国',
            key: 'chengdu',
            hot: true
          }, {
            name: '重庆',
            key: 'chongqing'
          }, {
            name: '长沙',
            key: 'changsha'
          }],
          locationType: 'group',
          hotType: 'group'
        }
      },
      onReady() {
        this.toast = this.$child('qui-toast')
      },
      click(evt) {
        this.toast.show({
          text: JSON.stringify(evt.detail)
        })
      }
    }
</script>

```

更详细代码可以参考[qui-indexlist demo]()

## 参数

qui-flow只接受属性option，option为对象，各属性如下

| 名称 | 类型 | 必填 | 默认值 | 描述 |
|----------|-----------|--------|-------|
| list | `Array` | `Y` | `-` | 数据 |
| list[{name}] | `String` | `Y` | `-` | 名称 |
| list[{desc}] | `String` | `N` | `-` | 描述 |
| list[{key}] | `String` | `Y`| `-` | 排序字符串,比如拼音等 |
| list[{hot}] | `Boolean` | `N` | `false` | 是否是热门项 |
| list[{location}] | `Boolean` | `N` | `false` | 是否是定位等特殊项 |
| list[{icon}] | `Boolean` | `N` | `false` | 定位等特殊项是否显示定位图标 |
| hotTitle | `String` | `N` | `热门` | 热门项索引标签 |
| hotType | `String` | `N` | `-` | 热门项显示类型，支持list，group类型，默认为list类型 |
| LocationTitle | `String`| `N` | `定位` | 定位项索引标签 |
| LocationType | `String` | `N` | `-` | 定位项显示类型，支持list，group类型，默认为list类型 |
| showIndex | `Boolean` | `N` | `true` | 是否显示侧边索引栏 |
| onlyShowList | `Boolean` | `N` | `false` | 是否不显示热门、定位列表 |

## 事件

| 名称 | 参数 | 描述 |
|--------|---------|--------|
|qui-click| `{type,item}` | 点击列表项时触发，type为location表示点击的定位列表项，为hot表示点击的热门列表项，其他为正常列表项；item为传入的列表项数据 |
