<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    // reference from https://github.com/ElemeFE/element/blob/dev/examples/app.vue#L150
    reRenderAnchor() {
      const anchors = document.querySelectorAll('.header-anchor');
      const basePath = window.location.href.split('#').splice(0, 2).join('#');

      [].slice.call(anchors).forEach((a) => {
        const href = a.getAttribute('href');
        a.href = basePath + href;
      });
    },
    goAnchor() {
      if (window.location.href.match(/#/g).length > 1) {
        const anchor = window.location.href.match(/#[^#]+$/g);
        if (!anchor) return;
        const elm = document.querySelector(anchor[0]);
        if (!elm) return;
        setTimeout(() => {
          document.documentElement.scrollTop = document.body.scrollTop = elm.offsetTop + 80;
        }, 50);
      }
    },
  },

  created() {
    window.addEventListener('hashchange', () => {
      if (window.location.href.match(/#/g).length < 2) {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        this.reRenderAnchor();
      } else {
        this.goAnchor();
      }
    });
  },

  mounted() {
    this.reRenderAnchor();
    this.goAnchor();
  },
};
</script>

<style lang="scss">
  @import "./scss/docs.scss";
  /*

  Darcula color scheme from the JetBrains family of IDEs

  */


  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #2b2b2b;
  }

  .hljs {
    color: #bababa;
  }

  .hljs-strong,
  .hljs-emphasis {
    color: #a8a8a2;
  }

  .hljs-bullet,
  .hljs-quote,
  .hljs-link,
  .hljs-number,
  .hljs-regexp,
  .hljs-literal {
    color: #6896ba;
  }

  .hljs-code,
  .hljs-selector-class {
    color: #a6e22e;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-section,
  .hljs-attribute,
  .hljs-name,
  .hljs-variable {
    color: #268bd2;
  }

  .hljs-params {
    color: #b9b9b9;
  }

  .hljs-attr {
    color: #B58900;
  }

  .hljs-string {
    color: #2aa198;
  }

  .hljs-subst,
  .hljs-type,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-symbol,
  .hljs-selector-id,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-addition {
    color: #e0c46c;
  }

  .hljs-comment,
  .hljs-deletion,
  .hljs-meta {
    color: #7f7f7f;
  }


</style>
