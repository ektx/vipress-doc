<template>
  <Banner :title="title" 
  :control-aside="controlAside" 
  :control-detail="controlDetail" 
  :aside-wide="asideWide"
  :toc-show="tocShow"
  @control-toc ="controlToc" 
  @control-side="controlSide" @click.stop />
  <section class="content">
    <aside v-if="menu.length" v-bind:style="{ width: asideWide + 'px'}" @click.stop>
      <Navs :value="menu" />
    </aside>
    <main id="main" class="main"  v-bind:style="{ paddingLeft: mainPL + 'px'}">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide-y" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <div class="toc-box" id="toc-box" :style="{display: tocShow}" @click.stop>
        <TOC :list="TOCData" :offsetTop="100"/>
      </div>
    </main>
  </section>
</template>

<script>
import Navs from './components/navs/index.vue'
import Banner from './components/banner/index.vue'
import { TOCData } from './store'
import { menu } from '../client.js'
import config from '@@vipress-plugin-config'

export default {
  name: 'app-view',
  components: { Navs, Banner },
  data() {
    return {
      menu,
      title: config.title,
      TOCData,
      screenwidth: window.innerWidth,
      // 侧边栏宽
      asideWide: 300,
      // 主体padding
      mainPL: 320,
      // 侧栏展示控制按钮
      controlAside: '',
      // 目录展示控制按钮
      controlDetail: '',
      // 目录展示状态
      tocShow: ''
    }
  },
  mounted(){
    window.addEventListener('resize',this.changeShow);
    this.changeShow();
    // 监听点击空白区域收回侧边栏
    document.addEventListener('click',(e) => {
      if(this.screenWidth < 900) {
        this.asideWide = 0
        this.tocShow = 'none'
      }else if(this.screenWidth < 1200) {
        this.asideWide = 0
      }
    })
  },
  methods:{
    changeShow(){
      this.screenWidth = window.innerWidth
      if(this.screenWidth > 1200) {
        this.asideWide = 300
        this.controlAside = 'none'
        this.mainPL = 320
      }else{
        this.asideWide = 0
        this.controlAside = 'block'
        this.mainPL = 30
      }
      if(this.screenWidth > 900) {
        this.tocShow = 'block'
        this.controlDetail = 'none'
      }else{
        this.tocShow = 'none'
        this.controlDetail = 'block'
      }
    },
    controlSide(val){
      this.asideWide = val
    },
    controlToc(val){
      this.tocShow = val
    },
  }
}
</script>

<style lang="less" scoped>
.content {
  & > aside {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 60px 0 0;
    bottom: 0;
    // width: 300px;
    overflow: auto;
    box-sizing: border-box;
    content-visibility: auto;
    background-color: var(--page-bg-color);
  }
  & > main {
    display: flex;
    padding: 60px 20px 20px 320px;
    box-sizing: border-box;

    &:only-child {
      padding: 60px 30px 20px;
    }

    .toc-box {
      padding: 0 0 0 20px;
    }
  }
  & > aside {
    &::-webkit-scrollbar {
      width: 3px;
    }
  }
  
  .fade-slide-y-leave-active,
  .fade-slide-y-enter-active {
    transition: 
      opacity .35s ease-in-out,
      transform .35s ease-in-out;
  }

  .fade-slide-y-enter-from,
  .fade-slide-y-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
