<template>
  <header>
    <div class="control-aside" @click="controlSide()">
      <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      viewBox="0 0 448 512"
      >
      <path
        fill="currentColor"
        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
      />
      </svg>
    </div>
    <div class="right-show flex-grow"></div>
    <h1>{{ title }}</h1>
    <div class="flex-grow"></div>
    <div class="toggle-theme-box">
      <i @click="toggleThemeEvt" title="切换页面主题"></i>
    </div>
    <div class="control-toc" @click="controlToc()" >
      <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      viewBox="0 0 448 512"
      >
      <path
        fill="currentColor"
        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
      />
      </svg>
    </div>
  </header>
</template>

<script setup>
import { onMounted, defineEmit} from 'vue'

const emit = defineEmit(['control-side','control-toc'])
const props = defineProps({
  title: {
    type: String,
    default: 'ViPress'
  },
  showAside:{
    type: Boolean,
    default: 'false'
  },
  showToc:{
    type: Boolean,
    default: 'false'
  }
})

const controlSide = () => emit('control-side', !props.showAside)

const controlToc = () => emit('control-toc', !props.showToc)

function toggleThemeEvt () {
  let html = document.documentElement.classList
  html.toggle('dark')

  localStorage.setItem('prefersColorScheme', html.contains('dark'))
}
function setTheme(type) {
  type = typeof type === 'boolean' ? type : type === 'true'

  if (type) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const theme = localStorage.getItem('prefersColorScheme')

  darkModeMediaQuery.addEventListener('change', e => {
    if (theme) return

    setTheme(e.matches)
  })

  setTheme(theme ? theme : darkModeMediaQuery.matches)
})

</script>

<style lang="less" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  background-color: var(--header-bg-color);
  backdrop-filter: blur(5px);
  box-sizing: border-box;
  transition: background-color .4s ease-in-out;
 
  .control-aside{
    color: var(--page-txt-color);
    cursor: pointer;
    padding: 20px;
    display: none;
  }

  .control-toc{
    color: var(--page-txt-color);
    cursor: pointer;
    padding: 20px;
    display: none;
  }
  
  .icon {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
  }

  h1 {
    // flex: 1;
    color: var(--page-txt-color);
    font-size: 1.6rem;
  }

  .flex-grow{
    flex-grow: 1;
  }

  .right-show{
    display: none;
  }

  .toggle-theme-box {
    i {
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 100%;
      cursor: pointer;
      background-color: var(--page-txt-color);
      transition: background-color .4s ease-in-out;
    }
  }
}

@media screen and (max-width: 1200px) {
  header {
      padding-left: 0;
     .control-aside{
       display: block;
     }
  }
}

@media screen and (max-width: 800px) {
 header {
      padding-right: 0;
     .control-toc{
       display: block;
     }
  }
}

@media screen and (max-width: 450px) {
 header {
    // 手机模式下打开右边的felx-grow，实现标题居中效果
    .right-show{
      display: block;
    }
    .control-toc{
      display: block;
    }
  }
}
</style>
