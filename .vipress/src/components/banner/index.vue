<template>
  <header>
    <span id="control-aside" @click="controlSide()" v-bind:style="{ display: controlAside}">&#9776;</span>
    <h1>{{ title }}</h1>
    <div class="toggle-theme-box">
      <i @click="toggleThemeEvt" title="切换页面主题"></i>
    </div>
    <span id="control-toc" @click="controlToc()" v-bind:style="{ display: controlDetail}" >&#9776;</span>
  </header>
</template>

<script setup>
import { useContext, onMounted, defineEmit} from 'vue'

const emit = defineEmit(['control-side','control-toc'])
const props = defineProps({
  title: {
    type: String,
    default: 'ViPress'
  },
  controlAside: {
    type: String,
    default: 'none'
  },
  controlDetail: {
    type: String,
    default: 'none'
  },
  asideWide:{
    type: Number,
    default: 0
  },
  tocShow:{
    type: String,
    default: 'none'
  }
})

const controlSide = () => {
  let width = 300
  if(props.asideWide === 300){
    width = 0
  }else{
    width = 300
  }
  emit('control-side', width)
}

const controlToc = () =>{
  let show = props.tocShow === 'block'? 'none':'block'
  emit('control-toc', show)
}

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
 
  #control-aside{
    z-index: 2;
    color: var(--page-txt-color);
    font-size: 30px;
    font-weight: bolder;
    cursor: pointer;
    margin-right: 20px;
    display: none;
  }
  #control-toc{
    z-index: 2;
    color: var(--page-txt-color);
    font-size: 30px;
    font-weight: bolder;
    cursor: pointer;
    margin-left: 20px;
    display: none;
  }
  h1 {
    flex: 1;
    color: var(--page-txt-color);
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
</style>
