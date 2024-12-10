<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const props = defineProps<{
  content: string
}>()

const tooltipRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)
const showTooltip = ref(false)
const position = ref({ top: '0px', left: '0px' })

const updatePosition = () => {
  if (!tooltipRef.value || !triggerRef.value) return
  
  const triggerRect = triggerRef.value.getBoundingClientRect()
  const tooltipRect = tooltipRef.value.getBoundingClientRect()
  
  // 计算tooltip的位置
  let left = triggerRect.left
  let top = triggerRect.bottom + 8 // 在触发元素下方8px的位置
  
  // 确保tooltip不会超出视窗右边界
  if (left + tooltipRect.width > window.innerWidth) {
    left = window.innerWidth - tooltipRect.width - 10
  }
  
  // 如果tooltip会超出底部，就显示在触发元素上方
  if (top + tooltipRect.height > window.innerHeight) {
    top = triggerRect.top - tooltipRect.height - 8
  }
  
  position.value = {
    top: `${top}px`,
    left: `${left}px`
  }
}

// 添加防抖处理
const updatePositionDebounced = useDebounceFn(updatePosition, 16)

onMounted(() => {
  window.addEventListener('scroll', updatePositionDebounced, true)
  window.addEventListener('resize', updatePositionDebounced)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updatePositionDebounced, true)
  window.removeEventListener('resize', updatePositionDebounced)
})
</script>

<template>
  <div class="m-tooltip">
    <div 
      ref="triggerRef" 
      class="tooltip-trigger" 
      @mouseenter="showTooltip = true; $nextTick(updatePosition)" 
      @mouseleave="showTooltip = false"
    >
      <slot></slot>
    </div>
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="showTooltip" 
          class="tooltip-content" 
          ref="tooltipRef"
          :style="position"
        >
          {{ content }}
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
.m-tooltip {
  display: contents;
}

.tooltip-content {
  position: fixed;
  z-index: 9999;
  background: var(--vp-c-bg);
  padding: 8px 12px;
  border-radius: 6px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  max-width: 300px;
  word-wrap: break-word;
  pointer-events: none;
  border: 1px solid var(--vp-c-divider);
  font-size: 12px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 