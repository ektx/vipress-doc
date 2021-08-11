<template>
  <Banner :title="title" :show-aside="showAside" :show-toc="showToc" @control-toc ="controlToc" @control-side="controlSide"  @click.stop/>
  <section class="content">
    <aside v-if="menu.length" :class="{aopen: showAside}" @click.stop>
      <Navs :value="menu" />
    </aside>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade-slide-y" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <div class="toc-box" :class="{topen: showToc}" @click.stop>
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
      // 动态展示左侧栏
      showAside: false,
      // 动态展示toc-box侧栏
      showToc: false
    }
  },
  mounted(){
    // 监听点击空白区域收回侧边栏
    document.addEventListener('click',() => {
      this.showAside = false
      this.showToc = false
    })
  },
  methods:{
    controlSide(val){
      this.showAside = val
    },
    controlToc(val){
      this.showToc = val
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
    bottom: 0;
    z-index: 1;
    padding: 60px 0 0;
    width: 300px;
    overflow-y: auto;
    box-sizing: border-box;
    content-visibility: auto;
    background-color: var(--page-bg-color);
    transform: translateX(0);
    transition: transform 0.3s ease;
  }
  & > main {
    display: flex;
    padding: 60px 20px 20px 320px;
    box-sizing: border-box;

    &:only-child {
      padding: 60px 30px 20px;
    }
    
    .toc-box {
      padding-left: 20px;
      background-color: var(--page-bg-color);
      width: 12rem;
      transition: width 0.3s ease;

      .top-of-centent{
        display: block;
        width: 12rem;
      }
    }
  }

  // & > aside {
  //   &::-webkit-scrollbar {
  //     width: 3px;
  //   }
  // }
  
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

@media (max-width: 1200px) {
  .content {
     & > main {
      padding-left: 30px;
     }
     & > aside {
      width: 300px;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
     }
  }
}

@media (max-width: 800px) {
 .content {
    & > main {
      padding-right: 10px;
      .toc-box {
        width: 0;
        transition: width 0.3s ease;

        .top-of-centent{
          display: none;
        }
      }
    }
  }
}

@media (max-width: 450px) {
 .content {
    & > aside {
      width: 100%;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
     }
  }
}

.content > .aopen {
  transform: translateX(0);
  transition: width transform 0.3s ease;
}

.content > main > .topen {
  width: 12rem;
  transition: width 0.3s ease;

  .top-of-centent{
    display: block;
  }
}
</style>
