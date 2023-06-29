<template>
  <div class="v-canister-moving-window--wrapper">
    <vxe-modal
      ref="vxeModal"
      v-model="windowShowStatus"
      :lock-view="false"
      :mask="false"
      :resize="resizable"
      :transfer="true"
      :draggable="true"
      :remember="rememberState"
      :show-close="false"
      :show-zoom="false"
      :show-footer="true"
      :min-width="wrapMinWidth"
      :min-height="wrapMinHeight"
      :width="boxWidth"
      :height="boxHeight"
      @show="onShow"
      @hide="onHide"
    >
      <!-- title -->
      <template #title>
        <div
          class="v-canister-moving-window--title"
          @dblclick="titleDoubleClick"
        >
          <!-- @slot title 燈箱左上標題 -->
          <slot name="title" />
        </div>
      </template>
      <!-- title - right  -->
      <template #corner>
        <div class="v-canister-moving-window--corner">
          <button
            v-show="zoomState === 'normal' && showShrinkButton"
            class="v-canister-moving-window--shrink-button"
            @click="zoom('reduce')"
          >
            <!-- @slot title 燈箱右上縮小按鈕 -->
            <slot name="shrinkButton">
              -
            </slot>
          </button>
          <button
            v-show="showZoomButton"
            class="v-canister-moving-window--zoom-button"
            @click="zoom('enlarge')"
          >
            <!-- @slot title 燈箱右上放大按鈕 -->
            <slot name="zoomButton">
              □
            </slot>
          </button>

          <button
            v-show="showCloseButton"
            class="v-canister-moving-window--close-button"
            @click.prevent="windowShowStatus = false"
          >
            <!-- @slot title 燈箱右上關閉按鈕 -->
            <slot name="closeButton">
              x
            </slot>
          </button>
        </div>
      </template>
      <!-- content -->
      <template #default>
        <div class="v-canister-moving-window--body">
          <!-- @slot title 燈箱中間內容 -->
          <slot name="body" />
        </div>
      </template>
      <!-- footer -->
      <template #footer>
        <div class="v-canister-moving-window--footer">
          <!-- @slot title 燈箱下方列 -->
          <slot name="footer" />
        </div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Modal } from 'vxe-table'
/**
 * MovingWindow
 * @displayName MovingWindow
 * @since v0.0.3
*/
export default Vue.extend({
  name: 'MovingWindow',
  props: {
    /**
     * value 顯示開關
     */
    value: {
      default: false,
      type: Boolean,
      required: true
    },
    /**
     * 是否顯示縮小按鈕
     */
    showShrinkButton: {
      default: true,
      type: Boolean
    },
    /**
     * 是否顯示放大按鈕
     */
    showZoomButton: {
      default: true,
      type: Boolean
    },
    /**
     * 是否顯示關閉按鈕
     */
    showCloseButton: {
      default: true,
      type: Boolean
    },
    /**
     * 是否可以改變燈箱大小
     */
    resizable: {
      default: true,
      type: Boolean
    },
    /**
     * 燈箱外框最小寬度 (可拖曳至最小寬度)
     */
    wrapMinWidth: {
      default: '200px',
      type: String
    },
    /**
     * 燈箱外框最小高度 (可拖曳至最小高度)
     */
    wrapMinHeight: {
      default: '100px',
      type: String
    }
  },
  data() {
    return {
      // 是否縮小
      zoomState: 'normal' as 'normal' | 'enlarged' | 'reduced',
      // 暫存外框上一次高度
      tempBoxHeightStr: '',
      // 是否記住最後操作狀態
      rememberState: false
    }
  },
  computed: {
    // 顯示開關
    windowShowStatus: {
      get(): boolean {
        return this.value
      },
      set(newVal: boolean) {
        /**
       * 監聽 開關狀態更新
       * @event input
       * @param {boolean} newVal - newValue
       */
        this.$emit('input', newVal)
      }
    },
    // 外框寬度
    boxWidth(): string {
      return this.wrapMinWidth
    },
    // 外框高度
    boxHeight(): string {
      return this.wrapMinHeight
    }
  },
  watch: {
    // 監聽 放大/縮小/一般 狀態
    zoomState(newValue: 'normal' | 'enlarged' | 'reduced') {
      console.log('[watch] isZoomOut', newValue)
      const vxeModalInstance = this.$refs.vxeModal as Modal
      const box = vxeModalInstance.$el.getElementsByClassName('vxe-modal--box')[0] as HTMLElement | undefined
      const body = vxeModalInstance.$el.getElementsByClassName('vxe-modal--body')[0] as HTMLElement | undefined
      const footer = vxeModalInstance.$el.getElementsByClassName('vxe-modal--footer')[0] as HTMLElement | undefined
      const resize = vxeModalInstance.$el.getElementsByClassName('vxe-modal--resize')[0] as HTMLElement | undefined
      if (body) {
        body.style.display = newValue === 'reduced' ? 'none' : 'flex'
      }
      if (footer) {
        footer.style.display = newValue === 'reduced' ? 'none' : 'block'
      }
      if (resize) {
        resize.style.display = newValue === 'reduced' ? 'none' : 'block'
      }
      if (box) {
        if (newValue === 'normal' && this.tempBoxHeightStr) {
          box.style.height = this.tempBoxHeightStr
        } else if (newValue === 'reduced') {
          box.style.height = 'unset'
        }
      }
    },
    // 監聽 燈箱開起 狀態
    value(newValue: boolean) {
      if (newValue && !this.rememberState) {
        this.zoomState = 'normal'
      }
    }
  },
  methods: {
    // 監聽 燈箱顯示
    onShow() {
      /**
       * 監聽 燈箱已開啟
       * @event show
       */
      this.$emit('show')
    },
    // 監聽 燈箱關閉
    onHide() {
      /**
       * 監聽 燈箱已關閉
       * @event hide
       */
      this.$emit('hide')
    },
    /**
     * 點擊 放大/縮小 按鈕
     * @public
     * @param {'enlarge' | 'reduce'} operation - 放大/縮小
     */
    async zoom(operation: 'enlarge' | 'reduce') {
      const vxeModalInstance = this.$refs.vxeModal as Modal | undefined
      console.log('zoom vxeModalInstance', vxeModalInstance)

      if (!vxeModalInstance) {
        // TODO 補上log
        return
      }

      // 點縮小
      if (operation === 'reduce') {
        const currentBoxDOM = vxeModalInstance.getBox()
        this.tempBoxHeightStr = window.getComputedStyle(currentBoxDOM, null).getPropertyValue('height')
        console.log('zoom this.tempBoxHeightStr', this.tempBoxHeightStr)
        console.log('zoom this.tempBoxHeightStr', this.tempBoxHeightStr)
        this.zoomState = 'reduced'
        return
      }

      // 點放大
      // 原本為一般/放大狀態 切換燈箱大小
      if (['enlarged', 'normal'].includes(this.zoomState)) {
        await vxeModalInstance.zoom()
      }

      // 原本為縮小/放大 切換為 正常狀態，原本為一般則切為放大狀態
      this.zoomState = ['reduced', 'enlarged'].includes(this.zoomState) ? 'normal' : 'enlarged'
    },
    /**
     * 重複點擊 標題區塊
     * @public
     */
    async titleDoubleClick() {
      if (this.zoomState === 'reduced') {
        return
      }
      await this.zoom('enlarge')
    }
  }
})
</script>

<style lang="scss">

</style>
