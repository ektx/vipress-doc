<template>
  <div class="code-box">
    <div class="code-display">
      <slot name="child" />
    </div>
    <div :class="['code-source', { 'is-open': open }]">
      <div class="code-source--main" :style="sourceStyle">
        <slot />
      </div>
      <div class="code-source--footer" @click="open = !open">
        {{ open ? '收起' : '查看' }}
      </div>
      <div class="code-source--sentinel"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'code-box',
  data() {
    return {
      open: false,
      intersectionObserver: null
    }
  },
  computed: {
    sourceStyle() {
      let result = {}

      if (this.open) {
        let H = this.$el.querySelector('.code-source--main').scrollHeight

        result.height = H + 'px'
      } else {
        result.height = '0px'
      }

      return result
    },
  },
  mounted() {
    this.setSticky()
  },
  methods: {
    setSticky() {
      let footer = this.$el.querySelector('.code-source--footer')
      let sentinel = this.$el.querySelector('.code-source--sentinel')

      this.intersectionObserver = new IntersectionObserver((entries) => {
        let { intersectionRatio } = entries[0]

        if (intersectionRatio <= 0) {
          footer.style.borderRadius = '0'
        } else {
          footer.style.borderRadius = '0 0 10px 10px'
        }
      })

      this.intersectionObserver.observe(sentinel)
    },
  },
  beforeUnmount() {
    let sentinel = this.$el.querySelector('.code-source--sentinel')

    this.intersectionObserver.unobserve(sentinel)
  },
}
</script>

<style lang="less">
.code-box {
  margin: 1em 0;
  border-radius: 10px;
  border: 1px solid var(--codebox-border);
  background-color: var(--codebox-bg);
  will-change: background, box-shadow;
  // prettier-ignore
  transition: 
    background .4s ease-out,
    border-color 0.4s ease-in-out, 
    box-shadow 0.3s ease-out;

  &:hover {
    box-shadow: 2px 2px 15px var(--codebox-hover-shadow);
  }

  .code-display {
    padding: 10px;
  }

  .code-source {
    border-radius: 0 0 10px 10px;
    border-top: 1px solid transparent;
    transition: border-color 0.4s ease-in-out;

    &.is-open {
      border-top-color: var(--codebox-border);
    }

    &--main {
      overflow: hidden;
      transition: height 0.4s ease-in-out;
      background-color: var(--page-bg-color);

      & pre[class*='language-'] {
        margin: 0;
        background-color: transparent;
      }

      blockquote {
        margin: 1em 1em 0;
        padding: 0 1em;
        color: var(--page-txt-color);
        border-radius: 3px;
        background-color: var(--codebox-bg);
        border: 1px solid var(--codebox-border);

        code {
          padding: 0.2em 0.5em;
          border-radius: 3px;
          color: #37474f;
          background-color: var(--code-inline-bg);
        }
      }
    }
    &--footer {
      position: sticky;
      bottom: 0;
      left: 0;

      font-size: 12px;
      color: #666;
      line-height: 2.8em;
      text-align: center;
      border-top: 1px solid var(--codebox-border);
      background-color: var(--codebox-footer-bg);
      backdrop-filter: blur(5px);
      cursor: pointer;
      // prettier-ignore
      transition: 
        color 0.3s ease-in-out, 
        background-color 0.3s ease-in-out;
    }
  }
}
</style>