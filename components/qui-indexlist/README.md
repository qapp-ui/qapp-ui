# qui-indexlist

> 索引列表组件, 可以通过索引快速定位

## 预览
<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-indexlist.gif" width="300"/>

## 依赖接口

无依赖

## 使用方法

```ux
<import name="qui-indexlist" src="@qapp-ui/qui-indexlist/index"></import>
<import name="qui-toast" src="@qapp-ui/qui-toast/index"></import>

<template>
  <div class="page">
    <div class="box">
      <qui-indexlist list="{{list}}" hot-type="{{hotType}}" @qui-click="click"></qui-indexlist>
    </div>
    <qui-toast id="qui-toast"></qui-toast>
  </div>
</template>

<script>
  export default {
    let data = {
      hotList: [
        {name: '北京', key: 'beijing', py: 'bj', desc: 'BJS'},
        {name: '上海', key: 'shanghai', py: 'sh', desc: 'BJS'},
        {name: '天津', key: 'tianjin', py: 'tj', desc: 'BJS'},
        {name: '青岛', key: 'qingdao', py: 'qd', desc: 'BJS'}
      ],
      normalList: [
        {
          name: '安徽',
          desc: 'AH',
          key: 'ahui',
          py: 'ah',
          hot: true
        },
        {
          name: '长沙',
          key: 'changsha',
          py: 'cs'
        }
      ]
    };
    private: {
      indexlist: {
        list: data.normalList,
        hotType: 'group'
      }
    }
  }
</script>
```

更详细代码可以参考[qui-indexlist demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Indexlist/index.ux)

## 参数

| 名称 | 类型 | 必填 | 默认值 | 描述 |
|-----|------|-----|-------|-----|
| list | `Array` | `Y` | `-` | 数据 |
| list[{name}] | `String` | `Y` | `-` | 名称 |
| list[{desc}] | `String` | `N` | `-` | 描述 |
| list[{key}] | `String` | `Y`| `-` | 排序字符串,比如拼音等 |
| list[{hot}] | `Boolean` | `N` | `false` | 是否是热门项 |
| hotTitle | `String` | `N` | `热门` | 热门项索引标签 |
| hotType | `String` | `N` | `list` | 热门项显示类型，支持list，group类型，默认为list类型 |
| showIndex | `String` | `N` | `1` | 是否显示侧边索引栏，`'1'`表示显示，`'0'`表示不显示 |
| onlyShowList | `String` | `N` | `0` | 是否不显示热门列表，`'1'`表示不显示热门列表，`'0'`表示显示热门列表 |

## 事件

| 名称 | 参数 | 描述 |
|--------|---------|--------|
|qui-click| `{type,item}` | 点击列表项时触发，type为hot表示点击的热门列表项，其他为正常列表项；item为传入的列表项数据 |
