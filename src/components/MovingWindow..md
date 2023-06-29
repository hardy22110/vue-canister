MovingWindow example:

```vue
       <MovingWindow
      :wrap-min-height="'400px'"
      :wrap-min-width="'400px'"
    >
      <template #shrinkButton>
        <span>-</span>
      </template>
      <template #zoomButton>
        <span>□</span>
      </template>
      <!-- <template #closeButton>
        <span>Xx</span>
      </template> -->
      <template #title>
        <div style="padding: 10px; overflow-x: hidden; text-overflow: ellipsis;">
          詳細交談內容測試-1687932321575123123123 進線
        </div>
      </template>
      <template #body>
        <div style="padding: 10px; height: 100%; box-sizing: border-box;">
          <div style="overflow: auto; background-color: aquamarine; height: 100%;">
            <div
              v-for="i in 1"
              :key="i"
            >
              content
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div style="padding: 10px">
          footer
        </div>
      </template>
    </MovingWindow>
```
