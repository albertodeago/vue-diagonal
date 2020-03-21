/*!
 * vue-diagonal v0.1.0 
 * (c) 2020 albertodeagostini.dev@gmail.com
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueDiagonal = factory());
}(this, (function () { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  var script = {
    name: "diagonal",
    props: {
      /**
       * Inclination, in deg
       */
      deg: Number,

      /**
       * Max width of the slot. This changes the padding top and bottom
       */
      maxWidth: {
        type: String,
        default: "100%"
      },

      /**
       * The background property
       */
      background: String,

      /**
       * If true it adds extra margin at top to avoid overlapping with previous elements
       */
      spaceBefore: Boolean,

      /**
       * If true it adds extra margin at bottom to avoid overlapping with next elements
       */
      spaceAfter: Boolean
    },
    computed: {
      classes: function classes() {
        return {
          "diagonal-container": true,
          "space-before": this.spaceBefore,
          "space-after": this.spaceAfter
        };
      },

      /**
       * Css vars to inject in the component
       */
      cssVars: function cssVars() {
        var angleRad = this.deg * Math.PI / 180;
        var number = Math.abs(Math.tan(angleRad) / 2);
        console.log(this.background);
        return {
          "--v-diag-width": this.maxWidth + "",
          "--v-diag-angle": this.deg + "deg",
          "--v-diag-number": number,
          "--v-diag-background": "" + this.background,
          "--v-diag-skew-padding": "calc(var(--v-diag-width) * var(--v-diag-number))"
        };
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }

  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,style:(_vm.cssVars)},[_c('div',{staticClass:"diagonal-content"},[_vm._t("default")],2)])};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-7b2f3f0f_0", { source: ".diagonal-container{position:relative;padding:var(--v-diag-skew-padding) 0}.diagonal-container.space-before{margin-top:var(--v-diag-skew-padding)}.diagonal-container.space-after{margin-bottom:var(--v-diag-skew-padding)}.diagonal-container:before{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;transform:skewy(var(--v-diag-angle));transform-origin:50% 0;background:var(--v-diag-background)}.diagonal-content{max-width:var(--v-diag-width);position:relative}", map: undefined, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var Diagonal = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      browser,
      undefined
    );

  var Diagonal$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Diagonal
  });

  function getCjsExportFromNamespace (n) {
  	return n && n['default'] || n;
  }

  var require$$0 = getCjsExportFromNamespace(Diagonal$1);

  // const install = Vue => {
  //   /*
  //    * NOTE:
  //    *   if you need to extend Vue contstructor, you can extend it in here.
  //    */
  //   Vue.prototype.$add = (a, b) => {
  //     return a + b
  //   }
  //   /*
  //    * NOTE:
  //    *  somthing implementation here ...
  //    */
  // }
  // const plugin = {
  //   install,
  //   version
  // }
  // export default plugin
  // if (typeof window !== 'undefined' && window.Vue) {
  //   window.Vue.use(plugin)
  // }

  var src = require$$0;

  return src;

})));
