# qui-popup

> 弹层组件，支持上下左右四个方向面板弹出，可通过slot定制内容

## 预览

<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-popup.gif" width="300"/>

## 依赖接口

依赖device接口，请确认manifest.json配置中已引入

```json
"features": [{ "name": "system.device" }]
```

## 使用方法
	
```ux
<import name="qui-popup" src="@qapp-ui/qui-popup/index"></import>

<qui-popup option="{{popupData1}}" @qui-overlay-click="overlayClick">
  <div class="mask">
    <text class="mask-title">快应用</text>
    <text class="mask-txt">快应用是一套以前端开发技术栈为主进行应用开发的框架，采用流行的前端开发模式，贴合主流前端开发者的思维习惯，同时大幅提升应用的性能，提供大量前端环境无法使用的系统能力，以及很多第三方服务的对接能力。</text>
  </div>
</qui-popup>

<script>
  export default {
    private: {
      popupData1: {
        show: false,
        position: 'bottom'
      }
    }
  }
</script>
```

更详细代码可以参考 [qui-popup demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Popup/index.ux)

### 参数 option

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| show | `Boolean` | `N` |`true`| 是否显示 |
| position | `String` | `N` |`bottom`| 弹出位置 `top` / `bottom` / `left` / `right` |
| background | `String` |`N`| `rgba(0,0,0,0.4)` | 蒙层背景色 |
| autoClose | `Boolean` |`N`| `true` | 点击蒙层是否自动关闭overlay |


### 事件

| 事件名 | 参数 | 描述 | 
|-------|-----|-----|
| qui-overlay-click | `-` | 蒙层点击事件 | 

### 注意点
- 参数`option.position` 不支持动态修改



