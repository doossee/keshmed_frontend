import { _ as __nuxt_component_0 } from './nuxt-link-CJtFDBOS.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { c as countries } from './index-3dIgU76L.mjs';
import { f as VCard, k as VImg, M as VDivider, h as VCardText } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppProductCard",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(VCard, mergeProps({
        border: "",
        flat: "",
        theme: "light",
        class: "pt-2"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(ssrRenderComponent(VImg, {
              width: "100%",
              height: "200",
              alt: _ctx.item.title_ru + " image",
              src: ((_c = (_b = (_a = _ctx.item) == null ? void 0 : _a.images) == null ? void 0 : _b[0]) == null ? void 0 : _c.image) || "/images/nophoto.jpg"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "mb-1" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "py-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_nuxt_link, {
                    to: `/product/${_ctx.item.slug}`,
                    class: "text-decoration-none font-weight-medium text-subtitle-1 py-1 text-primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a2 = _ctx.item) == null ? void 0 : _a2[`title_${_ctx.$i18n.locale}`])}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString((_b2 = _ctx.item) == null ? void 0 : _b2[`title_${_ctx.$i18n.locale}`]), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_nuxt_link, {
                      to: `/product/${_ctx.item.slug}`,
                      class: "text-decoration-none font-weight-medium text-subtitle-1 py-1 text-primary"
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createTextVNode(toDisplayString((_a2 = _ctx.item) == null ? void 0 : _a2[`title_${_ctx.$i18n.locale}`]), 1)
                        ];
                      }),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "py-1 px-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<span class="font-weight-medium"${_scopeId2}>${ssrInterpolate(_ctx.$t("products.price"))}:</span> ${ssrInterpolate((_a2 = _ctx.item) == null ? void 0 : _a2.price)} $`);
                } else {
                  return [
                    createVNode("span", { class: "font-weight-medium" }, toDisplayString(_ctx.$t("products.price")) + ":", 1),
                    createTextVNode(" " + toDisplayString((_b2 = _ctx.item) == null ? void 0 : _b2.price) + " $", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "py-1 px-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<span class="font-weight-medium"${_scopeId2}>${ssrInterpolate(_ctx.$t("products.brand"))}:</span> ${ssrInterpolate((_a2 = _ctx.item) == null ? void 0 : _a2.brand.name)}`);
                } else {
                  return [
                    createVNode("span", { class: "font-weight-medium" }, toDisplayString(_ctx.$t("products.brand")) + ":", 1),
                    createTextVNode(" " + toDisplayString((_b2 = _ctx.item) == null ? void 0 : _b2.brand.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "py-1 px-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<span class="font-weight-medium"${_scopeId2}>${ssrInterpolate(_ctx.$t("products.shipping"))}:</span> ${ssrInterpolate((_a2 = unref(countries)[_ctx.item.shipping_from]) == null ? void 0 : _a2.name)}`);
                } else {
                  return [
                    createVNode("span", { class: "font-weight-medium" }, toDisplayString(_ctx.$t("products.shipping")) + ":", 1),
                    createTextVNode(" " + toDisplayString((_b2 = unref(countries)[_ctx.item.shipping_from]) == null ? void 0 : _b2.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "py-1 px-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-weight-medium"${_scopeId2}>${ssrInterpolate(_ctx.$t("products.model"))}:</span> ${ssrInterpolate(_ctx.item.model)}`);
                } else {
                  return [
                    createVNode("span", { class: "font-weight-medium" }, toDisplayString(_ctx.$t("products.model")) + ":", 1),
                    createTextVNode(" " + toDisplayString(_ctx.item.model), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "pt-1 pb-3 px-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-weight-medium"${_scopeId2}>${ssrInterpolate(_ctx.$t("products.warranty"))}:</span> ${ssrInterpolate(_ctx.item.warranty)}`);
                } else {
                  return [
                    createVNode("span", { class: "font-weight-medium" }, toDisplayString(_ctx.$t("products.warranty")) + ":", 1),
                    createTextVNode(" " + toDisplayString(_ctx.item.warranty), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VImg, {
                width: "100%",
                height: "200",
                alt: _ctx.item.title_ru + " image",
                src: ((_f = (_e = (_d = _ctx.item) == null ? void 0 : _d.images) == null ? void 0 : _e[0]) == null ? void 0 : _f.image) || "/images/nophoto.jpg"
              }, null, 8, ["alt", "src"]),
              createVNode(VDivider, { class: "mb-1" }),
              createVNode(VCardText, { class: "py-0" }, {
                default: withCtx(() => [
                  createVNode(_component_nuxt_link, {
                    to: `/product/${_ctx.item.slug}`,
                    class: "text-decoration-none font-weight-medium text-subtitle-1 py-1 text-primary"
                  }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createTextVNode(toDisplayString((_a2 = _ctx.item) == null ? void 0 : _a2[`title_${_ctx.$i18n.locale}`]), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              }),
              createVNode(VCardText, { class: "py-1 px-4" }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode("span", { class: "font-weight-medium" }, toDisplayString(_ctx.$t("products.price")) + ":", 1),
                    createTextVNode(" " + toDisplayString((_a2 = _ctx.item) == null ? void 0 : _a2.price) + " $", 1)
                  ];
                }),
                _: 1
              }),
              createVNode(VCardText, { class: "py-1 px-4" }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode("span", { class: "font-weight-medium" }, toDisplayString(_ctx.$t("products.brand")) + ":", 1),
                    createTextVNode(" " + toDisplayString((_a2 = _ctx.item) == null ? void 0 : _a2.brand.name), 1)
                  ];
                }),
                _: 1
              }),
              createVNode(VCardText, { class: "py-1 px-4" }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode("span", { class: "font-weight-medium" }, toDisplayString(_ctx.$t("products.shipping")) + ":", 1),
                    createTextVNode(" " + toDisplayString((_a2 = unref(countries)[_ctx.item.shipping_from]) == null ? void 0 : _a2.name), 1)
                  ];
                }),
                _: 1
              }),
              createVNode(VCardText, { class: "py-1 px-4" }, {
                default: withCtx(() => [
                  createVNode("span", { class: "font-weight-medium" }, toDisplayString(_ctx.$t("products.model")) + ":", 1),
                  createTextVNode(" " + toDisplayString(_ctx.item.model), 1)
                ]),
                _: 1
              }),
              createVNode(VCardText, { class: "pt-1 pb-3 px-4" }, {
                default: withCtx(() => [
                  createVNode("span", { class: "font-weight-medium" }, toDisplayString(_ctx.$t("products.warranty")) + ":", 1),
                  createTextVNode(" " + toDisplayString(_ctx.item.warranty), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
