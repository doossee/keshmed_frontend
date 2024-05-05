import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, unref, createTextVNode, toDisplayString, resolveComponent, createSlots } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VContainer, a as VRow, b as VCol, E as VCarousel, F as VCarouselItem, k as VImg, G as VSheet, C as VMenu, c as VTextField, D as VList, l as VListItem, j as VAvatar, m as VListItemTitle, H as VListItemSubtitle, e as VIcon, d as VBtn, I as VExpansionPanels, J as VExpansionPanel, K as VExpansionPanelTitle, L as VExpansionPanelText } from './server.mjs';
import { _ as _sfc_main$2 } from './AppProductCard-CY8FnE-D.mjs';
import { u as useHead, w as withAsyncContext } from './asyncContext-vgxCXwM7.mjs';
import { u as useCategories } from './useCategories-DHwYENQn.mjs';
import { u as useProducts } from './useProducts-C6gC55hV.mjs';
import lodash from 'lodash';
import { c as countries, i as index_card_items, f as faqs } from './index-3dIgU76L.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:async_hooks';
import 'packrup';
import 'nitropack/dist/runtime/plugin';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './nuxt-link-CJtFDBOS.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppHomeCategory",
  __ssrInlineRender: true,
  props: {
    category: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(VMenu, mergeProps({
        "open-on-hover": false,
        "close-on-back": "",
        transition: "fade-transition",
        "open-delay": "0",
        "close-delay": "0",
        "close-on-content-click": false
      }, _attrs), {
        activator: withCtx((menu, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VListItem, mergeProps({
              class: "text-body-2",
              "base-color": "primary",
              height: "50",
              variant: "flat",
              rounded: "",
              link: ""
            }, menu.props, {
              color: "primary",
              "append-icon": "mdi-chevron-down"
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_router_link, {
                    to: `/products?category=${_ctx.category.id}`,
                    class: "text-white text-decoration-none"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.category[`name_${_ctx.$i18n.locale}`])}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.category[`name_${_ctx.$i18n.locale}`]), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_router_link, {
                      to: `/products?category=${_ctx.category.id}`,
                      class: "text-white text-decoration-none"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.category[`name_${_ctx.$i18n.locale}`]), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VListItem, mergeProps({
                class: "text-body-2",
                "base-color": "primary",
                height: "50",
                variant: "flat",
                rounded: "",
                link: ""
              }, menu.props, {
                color: "primary",
                "append-icon": "mdi-chevron-down"
              }), {
                default: withCtx(() => [
                  createVNode(_component_router_link, {
                    to: `/products?category=${_ctx.category.id}`,
                    class: "text-white text-decoration-none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.category[`name_${_ctx.$i18n.locale}`]), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, {
              density: "compact",
              elevation: "1",
              "max-height": "400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.category.children, (ct1, j) => {
                    _push3(ssrRenderComponent(VListItem, {
                      link: "",
                      key: j
                    }, {
                      append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(ssrRenderComponent(VMenu, {
                            "close-on-content-click": true,
                            location: "right",
                            offset: "30",
                            transition: "fade-transition"
                          }, createSlots({
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VList, {
                                  elevation: "1",
                                  density: "compact"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(ct1.children, (ct2, o) => {
                                        _push6(ssrRenderComponent(VListItem, {
                                          link: "",
                                          key: o,
                                          "min-width": "150"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_router_link, {
                                                to: `/products?category=${ct2.id}`,
                                                class: "text-black text-decoration-none"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(ct2[`name_${_ctx.$i18n.locale}`])}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(ct2[`name_${_ctx.$i18n.locale}`]), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_router_link, {
                                                  to: `/products?category=${ct2.id}`,
                                                  class: "text-black text-decoration-none"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(ct2[`name_${_ctx.$i18n.locale}`]), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(ct1.children, (ct2, o) => {
                                          return openBlock(), createBlock(VListItem, {
                                            link: "",
                                            key: o,
                                            "min-width": "150"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_router_link, {
                                                to: `/products?category=${ct2.id}`,
                                                class: "text-black text-decoration-none"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(ct2[`name_${_ctx.$i18n.locale}`]), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["to"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VList, {
                                    elevation: "1",
                                    density: "compact"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(ct1.children, (ct2, o) => {
                                        return openBlock(), createBlock(VListItem, {
                                          link: "",
                                          key: o,
                                          "min-width": "150"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_router_link, {
                                              to: `/products?category=${ct2.id}`,
                                              class: "text-black text-decoration-none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(ct2[`name_${_ctx.$i18n.locale}`]), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, [
                            ((_a = ct1.children) == null ? void 0 : _a.length) ? {
                              name: "activator",
                              fn: withCtx(({ isActive, props }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VBtn, mergeProps({ ref_for: true }, props, {
                                    rounded: "circle",
                                    size: "30",
                                    variant: "tonal"
                                  }), {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VIcon, null, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`mdi-chevron-${ssrInterpolate(!isActive ? "right" : "down")}`);
                                            } else {
                                              return [
                                                createTextVNode("mdi-chevron-" + toDisplayString(!isActive ? "right" : "down"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-chevron-" + toDisplayString(!isActive ? "right" : "down"), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VBtn, mergeProps({ ref_for: true }, props, {
                                      rounded: "circle",
                                      size: "30",
                                      variant: "tonal"
                                    }), {
                                      default: withCtx(() => [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-chevron-" + toDisplayString(!isActive ? "right" : "down"), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ];
                                }
                              }),
                              key: "0"
                            } : void 0
                          ]), _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VMenu, {
                              "close-on-content-click": true,
                              location: "right",
                              offset: "30",
                              transition: "fade-transition"
                            }, createSlots({
                              default: withCtx(() => [
                                createVNode(VList, {
                                  elevation: "1",
                                  density: "compact"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(ct1.children, (ct2, o) => {
                                      return openBlock(), createBlock(VListItem, {
                                        link: "",
                                        key: o,
                                        "min-width": "150"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_router_link, {
                                            to: `/products?category=${ct2.id}`,
                                            class: "text-black text-decoration-none"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(ct2[`name_${_ctx.$i18n.locale}`]), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, [
                              ((_b = ct1.children) == null ? void 0 : _b.length) ? {
                                name: "activator",
                                fn: withCtx(({ isActive, props }) => [
                                  createVNode(VBtn, mergeProps({ ref_for: true }, props, {
                                    rounded: "circle",
                                    size: "30",
                                    variant: "tonal"
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-chevron-" + toDisplayString(!isActive ? "right" : "down"), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                key: "0"
                              } : void 0
                            ]), 1024)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_router_link, {
                            to: `/products?category=${ct1.id}`,
                            class: "text-black text-decoration-none"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(ct1[`name_${_ctx.$i18n.locale}`])}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(ct1[`name_${_ctx.$i18n.locale}`]), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_router_link, {
                              to: `/products?category=${ct1.id}`,
                              class: "text-black text-decoration-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(ct1[`name_${_ctx.$i18n.locale}`]), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.category.children, (ct1, j) => {
                      return openBlock(), createBlock(VListItem, {
                        link: "",
                        key: j
                      }, {
                        append: withCtx(() => {
                          var _a;
                          return [
                            createVNode(VMenu, {
                              "close-on-content-click": true,
                              location: "right",
                              offset: "30",
                              transition: "fade-transition"
                            }, createSlots({
                              default: withCtx(() => [
                                createVNode(VList, {
                                  elevation: "1",
                                  density: "compact"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(ct1.children, (ct2, o) => {
                                      return openBlock(), createBlock(VListItem, {
                                        link: "",
                                        key: o,
                                        "min-width": "150"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_router_link, {
                                            to: `/products?category=${ct2.id}`,
                                            class: "text-black text-decoration-none"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(ct2[`name_${_ctx.$i18n.locale}`]), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, [
                              ((_a = ct1.children) == null ? void 0 : _a.length) ? {
                                name: "activator",
                                fn: withCtx(({ isActive, props }) => [
                                  createVNode(VBtn, mergeProps({ ref_for: true }, props, {
                                    rounded: "circle",
                                    size: "30",
                                    variant: "tonal"
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-chevron-" + toDisplayString(!isActive ? "right" : "down"), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                key: "0"
                              } : void 0
                            ]), 1024)
                          ];
                        }),
                        default: withCtx(() => [
                          createVNode(_component_router_link, {
                            to: `/products?category=${ct1.id}`,
                            class: "text-black text-decoration-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(ct1[`name_${_ctx.$i18n.locale}`]), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, {
                density: "compact",
                elevation: "1",
                "max-height": "400"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.category.children, (ct1, j) => {
                    return openBlock(), createBlock(VListItem, {
                      link: "",
                      key: j
                    }, {
                      append: withCtx(() => {
                        var _a;
                        return [
                          createVNode(VMenu, {
                            "close-on-content-click": true,
                            location: "right",
                            offset: "30",
                            transition: "fade-transition"
                          }, createSlots({
                            default: withCtx(() => [
                              createVNode(VList, {
                                elevation: "1",
                                density: "compact"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(ct1.children, (ct2, o) => {
                                    return openBlock(), createBlock(VListItem, {
                                      link: "",
                                      key: o,
                                      "min-width": "150"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_router_link, {
                                          to: `/products?category=${ct2.id}`,
                                          class: "text-black text-decoration-none"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(ct2[`name_${_ctx.$i18n.locale}`]), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, [
                            ((_a = ct1.children) == null ? void 0 : _a.length) ? {
                              name: "activator",
                              fn: withCtx(({ isActive, props }) => [
                                createVNode(VBtn, mergeProps({ ref_for: true }, props, {
                                  rounded: "circle",
                                  size: "30",
                                  variant: "tonal"
                                }), {
                                  default: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-chevron-" + toDisplayString(!isActive ? "right" : "down"), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              key: "0"
                            } : void 0
                          ]), 1024)
                        ];
                      }),
                      default: withCtx(() => [
                        createVNode(_component_router_link, {
                          to: `/products?category=${ct1.id}`,
                          class: "text-black text-decoration-none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(ct1[`name_${_ctx.$i18n.locale}`]), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHomeCategory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0435 \u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435",
      meta: [
        { name: "description", content: "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0435 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435. \u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430, \u043B\u0435\u0447\u0435\u043D\u0438\u0435, \u0440\u0435\u0430\u0431\u0438\u043B\u0438\u0442\u0430\u0446\u0438\u044F \u2014 \u043C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043A\u043B\u0438\u043D\u0438\u043A\u0438. \u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B \u043B\u0443\u0447\u0448\u0438\u0445 \u043C\u0438\u0440\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0442 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C. \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u043E\u0442 \u043D\u0430\u0448\u0438\u0445 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u044C\u0442\u0435 \u0432\u0430\u0448\u0443 \u043A\u043B\u0438\u043D\u0438\u043A\u0443 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0434\u043B\u044F \u0437\u0430\u0431\u043E\u0442\u044B \u043E \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u043E\u0432." },
        { name: "keywords", content: "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0435 \u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435, \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435, \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043A\u0430\u0448\u043A\u0430\u0434\u0430\u0440\u0439\u0435, \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0430\u0437\u0438\u0438, \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0435, \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435, tibbiy uskunalar, o'zbekistondagi tibbiy uskunalar, tibbiy, uskunalar, osiyodagi tibbiy uskunalar, qashqadaryo tibbiy uskunalar, Medical Equipment in Uzbekistan, medical equipment, medical equipment in Kashkadarya, medical equipment in Asia, medical equipment" }
      ]
    });
    const { debounce } = lodash;
    const { getTree } = useCategories();
    const { getAllProducts } = useProducts();
    const products = ref([]);
    const categories = ref([]);
    const searchedProducts = ref([]);
    const init = async () => {
      const [data, cdata] = await Promise.all([
        getAllProducts("?expand=images,brand&limit=12"),
        getTree()
      ]);
      products.value = data.results;
      categories.value = cdata;
    };
    const searchProducts = debounce(async (e) => {
      if (!(e == null ? void 0 : e.trim()))
        return searchedProducts.value = [];
      const data = await getAllProducts(`?search=${e}&limit=50`);
      searchedProducts.value = data.results;
    }, 500);
    [__temp, __restore] = withAsyncContext(() => init()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHomeCategory = _sfc_main$1;
      const _component_AppProductCard = _sfc_main$2;
      _push(ssrRenderComponent(VContainer, mergeProps({ theme: "light" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    style: { "height": "80vh", "position": "relative" },
                    class: "d-flex rounded flex-column align-center justify-center mt-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-100 h-100 px-2" style="${ssrRenderStyle({ "position": "absolute" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VCarousel, {
                          cycle: "",
                          height: "100%",
                          "hide-delimiter-background": "",
                          "show-arrows": false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(4, (i) => {
                                _push5(ssrRenderComponent(VCarouselItem, { key: i }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VImg, {
                                        alt: "medical",
                                        gradient: "to top left, rgba(104, 59, 181, 1), rgba(104, 59, 181, .4)",
                                        cover: "",
                                        src: `/carousel/image-${i}.jpg`
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VImg, {
                                          alt: "medical",
                                          gradient: "to top left, rgba(104, 59, 181, 1), rgba(104, 59, 181, .4)",
                                          cover: "",
                                          src: `/carousel/image-${i}.jpg`
                                        }, null, 8, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                                  return createVNode(VCarouselItem, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        alt: "medical",
                                        gradient: "to top left, rgba(104, 59, 181, 1), rgba(104, 59, 181, .4)",
                                        cover: "",
                                        src: `/carousel/image-${i}.jpg`
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div style="${ssrRenderStyle({ "position": "relative", "z-index": "1" })}" class="px-4"${_scopeId3}><div class="text-center"${_scopeId3}><span class="text-white text-h5 text-md-h4 font-weight-light"${_scopeId3}>${ssrInterpolate(_ctx.$t("home.title"))}</span></div>`);
                        _push4(ssrRenderComponent(VSheet, {
                          "max-width": "650",
                          color: "transparent",
                          class: "w-100 mt-4 text-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-grey-lighten-2 font-weight-light text-body-2"${_scopeId4}>${ssrInterpolate(_ctx.$t("home.desc"))}</p>`);
                              _push5(ssrRenderComponent(VMenu, {
                                offset: "12",
                                transition: "fade-transition",
                                "model-value": searchedProducts.value.length > 0,
                                "close-on-content-click": false
                              }, {
                                activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, mergeProps(props, {
                                      class: "mt-4",
                                      color: "primary",
                                      rounded: "lg",
                                      "hide-details": "",
                                      type: "search",
                                      "onUpdate:modelValue": unref(searchProducts),
                                      "bg-color": "white",
                                      density: "comfortable",
                                      autofocus: "",
                                      variant: "outlined",
                                      "base-color": "primary",
                                      "aria-label": "search products",
                                      role: "text",
                                      "prepend-inner-icon": "mdi-magnify",
                                      placeholder: _ctx.$t("home.search")
                                    }), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, mergeProps(props, {
                                        class: "mt-4",
                                        color: "primary",
                                        rounded: "lg",
                                        "hide-details": "",
                                        type: "search",
                                        "onUpdate:modelValue": unref(searchProducts),
                                        "bg-color": "white",
                                        density: "comfortable",
                                        autofocus: "",
                                        variant: "outlined",
                                        "base-color": "primary",
                                        "aria-label": "search products",
                                        role: "text",
                                        "prepend-inner-icon": "mdi-magnify",
                                        placeholder: _ctx.$t("home.search")
                                      }), null, 16, ["onUpdate:modelValue", "placeholder"])
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VList, {
                                      elevation: "0",
                                      width: "100%",
                                      nav: "",
                                      lines: "two",
                                      density: "compact"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(searchedProducts.value, (item, i) => {
                                            _push7(ssrRenderComponent(VListItem, {
                                              height: "65",
                                              class: "py-1",
                                              key: i,
                                              link: "",
                                              to: `/product/${item.slug}`
                                            }, {
                                              prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VAvatar, { rounded: "" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      var _a, _b, _c, _d;
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VImg, {
                                                          alt: "searched images",
                                                          cover: "",
                                                          src: ((_b = (_a = item.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.image) || "/images/nophoto.jpg"
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VImg, {
                                                            alt: "searched images",
                                                            cover: "",
                                                            src: ((_d = (_c = item.images) == null ? void 0 : _c[0]) == null ? void 0 : _d.image) || "/images/nophoto.jpg"
                                                          }, null, 8, ["src"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VAvatar, { rounded: "" }, {
                                                      default: withCtx(() => {
                                                        var _a, _b;
                                                        return [
                                                          createVNode(VImg, {
                                                            alt: "searched images",
                                                            cover: "",
                                                            src: ((_b = (_a = item.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.image) || "/images/nophoto.jpg"
                                                          }, null, 8, ["src"])
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItemTitle, { class: "text-body-2" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item[`title_${_ctx.$i18n.locale}`])}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VListItemSubtitle, { class: "text-caption mt-1 d-flex align-center gap-1" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<div class="d-flex align-center gap-1 font-weight-bold"${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(VImg, {
                                                          alt: "flag",
                                                          width: "20",
                                                          height: "20",
                                                          src: unref(countries)[item.shipping_from].flag
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(` ${ssrInterpolate(unref(countries)[item.shipping_from].name)}</div> ${ssrInterpolate(item.model)} <span class="font-weight-bold"${_scopeId8}>${ssrInterpolate(item.price)} $</span>`);
                                                      } else {
                                                        return [
                                                          createVNode("div", { class: "d-flex align-center gap-1 font-weight-bold" }, [
                                                            createVNode(VImg, {
                                                              alt: "flag",
                                                              width: "20",
                                                              height: "20",
                                                              src: unref(countries)[item.shipping_from].flag
                                                            }, null, 8, ["src"]),
                                                            createTextVNode(" " + toDisplayString(unref(countries)[item.shipping_from].name), 1)
                                                          ]),
                                                          createTextVNode(" " + toDisplayString(item.model) + " ", 1),
                                                          createVNode("span", { class: "font-weight-bold" }, toDisplayString(item.price) + " $", 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VListItemTitle, { class: "text-body-2" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, { class: "text-caption mt-1 d-flex align-center gap-1" }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "d-flex align-center gap-1 font-weight-bold" }, [
                                                          createVNode(VImg, {
                                                            alt: "flag",
                                                            width: "20",
                                                            height: "20",
                                                            src: unref(countries)[item.shipping_from].flag
                                                          }, null, 8, ["src"]),
                                                          createTextVNode(" " + toDisplayString(unref(countries)[item.shipping_from].name), 1)
                                                        ]),
                                                        createTextVNode(" " + toDisplayString(item.model) + " ", 1),
                                                        createVNode("span", { class: "font-weight-bold" }, toDisplayString(item.price) + " $", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(searchedProducts.value, (item, i) => {
                                              return openBlock(), createBlock(VListItem, {
                                                height: "65",
                                                class: "py-1",
                                                key: i,
                                                link: "",
                                                to: `/product/${item.slug}`
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VAvatar, { rounded: "" }, {
                                                    default: withCtx(() => {
                                                      var _a, _b;
                                                      return [
                                                        createVNode(VImg, {
                                                          alt: "searched images",
                                                          cover: "",
                                                          src: ((_b = (_a = item.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.image) || "/images/nophoto.jpg"
                                                        }, null, 8, ["src"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, { class: "text-body-2" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(VListItemSubtitle, { class: "text-caption mt-1 d-flex align-center gap-1" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "d-flex align-center gap-1 font-weight-bold" }, [
                                                        createVNode(VImg, {
                                                          alt: "flag",
                                                          width: "20",
                                                          height: "20",
                                                          src: unref(countries)[item.shipping_from].flag
                                                        }, null, 8, ["src"]),
                                                        createTextVNode(" " + toDisplayString(unref(countries)[item.shipping_from].name), 1)
                                                      ]),
                                                      createTextVNode(" " + toDisplayString(item.model) + " ", 1),
                                                      createVNode("span", { class: "font-weight-bold" }, toDisplayString(item.price) + " $", 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["to"]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VList, {
                                        elevation: "0",
                                        width: "100%",
                                        nav: "",
                                        lines: "two",
                                        density: "compact"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(searchedProducts.value, (item, i) => {
                                            return openBlock(), createBlock(VListItem, {
                                              height: "65",
                                              class: "py-1",
                                              key: i,
                                              link: "",
                                              to: `/product/${item.slug}`
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VAvatar, { rounded: "" }, {
                                                  default: withCtx(() => {
                                                    var _a, _b;
                                                    return [
                                                      createVNode(VImg, {
                                                        alt: "searched images",
                                                        cover: "",
                                                        src: ((_b = (_a = item.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.image) || "/images/nophoto.jpg"
                                                      }, null, 8, ["src"])
                                                    ];
                                                  }),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, { class: "text-body-2" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VListItemSubtitle, { class: "text-caption mt-1 d-flex align-center gap-1" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "d-flex align-center gap-1 font-weight-bold" }, [
                                                      createVNode(VImg, {
                                                        alt: "flag",
                                                        width: "20",
                                                        height: "20",
                                                        src: unref(countries)[item.shipping_from].flag
                                                      }, null, 8, ["src"]),
                                                      createTextVNode(" " + toDisplayString(unref(countries)[item.shipping_from].name), 1)
                                                    ]),
                                                    createTextVNode(" " + toDisplayString(item.model) + " ", 1),
                                                    createVNode("span", { class: "font-weight-bold" }, toDisplayString(item.price) + " $", 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["to"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-grey-lighten-2 font-weight-light text-body-2" }, toDisplayString(_ctx.$t("home.desc")), 1),
                                createVNode(VMenu, {
                                  offset: "12",
                                  transition: "fade-transition",
                                  "model-value": searchedProducts.value.length > 0,
                                  "close-on-content-click": false
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VTextField, mergeProps(props, {
                                      class: "mt-4",
                                      color: "primary",
                                      rounded: "lg",
                                      "hide-details": "",
                                      type: "search",
                                      "onUpdate:modelValue": unref(searchProducts),
                                      "bg-color": "white",
                                      density: "comfortable",
                                      autofocus: "",
                                      variant: "outlined",
                                      "base-color": "primary",
                                      "aria-label": "search products",
                                      role: "text",
                                      "prepend-inner-icon": "mdi-magnify",
                                      placeholder: _ctx.$t("home.search")
                                    }), null, 16, ["onUpdate:modelValue", "placeholder"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VList, {
                                      elevation: "0",
                                      width: "100%",
                                      nav: "",
                                      lines: "two",
                                      density: "compact"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(searchedProducts.value, (item, i) => {
                                          return openBlock(), createBlock(VListItem, {
                                            height: "65",
                                            class: "py-1",
                                            key: i,
                                            link: "",
                                            to: `/product/${item.slug}`
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VAvatar, { rounded: "" }, {
                                                default: withCtx(() => {
                                                  var _a, _b;
                                                  return [
                                                    createVNode(VImg, {
                                                      alt: "searched images",
                                                      cover: "",
                                                      src: ((_b = (_a = item.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.image) || "/images/nophoto.jpg"
                                                    }, null, 8, ["src"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "text-body-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, { class: "text-caption mt-1 d-flex align-center gap-1" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex align-center gap-1 font-weight-bold" }, [
                                                    createVNode(VImg, {
                                                      alt: "flag",
                                                      width: "20",
                                                      height: "20",
                                                      src: unref(countries)[item.shipping_from].flag
                                                    }, null, 8, ["src"]),
                                                    createTextVNode(" " + toDisplayString(unref(countries)[item.shipping_from].name), 1)
                                                  ]),
                                                  createTextVNode(" " + toDisplayString(item.model) + " ", 1),
                                                  createVNode("span", { class: "font-weight-bold" }, toDisplayString(item.price) + " $", 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["to"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["model-value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "w-100 h-100 px-2",
                            style: { "position": "absolute" }
                          }, [
                            createVNode(VCarousel, {
                              cycle: "",
                              height: "100%",
                              "hide-delimiter-background": "",
                              "show-arrows": false
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                                  return createVNode(VCarouselItem, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        alt: "medical",
                                        gradient: "to top left, rgba(104, 59, 181, 1), rgba(104, 59, 181, .4)",
                                        cover: "",
                                        src: `/carousel/image-${i}.jpg`
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", {
                            style: { "position": "relative", "z-index": "1" },
                            class: "px-4"
                          }, [
                            createVNode("div", { class: "text-center" }, [
                              createVNode("span", { class: "text-white text-h5 text-md-h4 font-weight-light" }, toDisplayString(_ctx.$t("home.title")), 1)
                            ]),
                            createVNode(VSheet, {
                              "max-width": "650",
                              color: "transparent",
                              class: "w-100 mt-4 text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-grey-lighten-2 font-weight-light text-body-2" }, toDisplayString(_ctx.$t("home.desc")), 1),
                                createVNode(VMenu, {
                                  offset: "12",
                                  transition: "fade-transition",
                                  "model-value": searchedProducts.value.length > 0,
                                  "close-on-content-click": false
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VTextField, mergeProps(props, {
                                      class: "mt-4",
                                      color: "primary",
                                      rounded: "lg",
                                      "hide-details": "",
                                      type: "search",
                                      "onUpdate:modelValue": unref(searchProducts),
                                      "bg-color": "white",
                                      density: "comfortable",
                                      autofocus: "",
                                      variant: "outlined",
                                      "base-color": "primary",
                                      "aria-label": "search products",
                                      role: "text",
                                      "prepend-inner-icon": "mdi-magnify",
                                      placeholder: _ctx.$t("home.search")
                                    }), null, 16, ["onUpdate:modelValue", "placeholder"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VList, {
                                      elevation: "0",
                                      width: "100%",
                                      nav: "",
                                      lines: "two",
                                      density: "compact"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(searchedProducts.value, (item, i) => {
                                          return openBlock(), createBlock(VListItem, {
                                            height: "65",
                                            class: "py-1",
                                            key: i,
                                            link: "",
                                            to: `/product/${item.slug}`
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VAvatar, { rounded: "" }, {
                                                default: withCtx(() => {
                                                  var _a, _b;
                                                  return [
                                                    createVNode(VImg, {
                                                      alt: "searched images",
                                                      cover: "",
                                                      src: ((_b = (_a = item.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.image) || "/images/nophoto.jpg"
                                                    }, null, 8, ["src"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "text-body-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, { class: "text-caption mt-1 d-flex align-center gap-1" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex align-center gap-1 font-weight-bold" }, [
                                                    createVNode(VImg, {
                                                      alt: "flag",
                                                      width: "20",
                                                      height: "20",
                                                      src: unref(countries)[item.shipping_from].flag
                                                    }, null, 8, ["src"]),
                                                    createTextVNode(" " + toDisplayString(unref(countries)[item.shipping_from].name), 1)
                                                  ]),
                                                  createTextVNode(" " + toDisplayString(item.model) + " ", 1),
                                                  createVNode("span", { class: "font-weight-bold" }, toDisplayString(item.price) + " $", 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["to"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["model-value"])
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "px-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSheet, {
                          width: "100%",
                          color: "surface",
                          class: "mt-8 py-4 pl-4 rounded border"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(index_card_items), (item, i) => {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        key: i
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItem, {
                                              nav: "",
                                              lines: "three"
                                            }, {
                                              prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    size: "35",
                                                    color: "primary",
                                                    icon: item.icon
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VIcon, {
                                                      size: "35",
                                                      color: "primary",
                                                      icon: item.icon
                                                    }, null, 8, ["icon"])
                                                  ];
                                                }
                                              }),
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItemTitle, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(_ctx.$t(item.title))}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(_ctx.$t(item.title)), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VListItemSubtitle, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(_ctx.$t(item.description))}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(_ctx.$t(item.description)), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(_ctx.$t(item.title)), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(_ctx.$t(item.description)), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItem, {
                                                nav: "",
                                                lines: "three"
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    size: "35",
                                                    color: "primary",
                                                    icon: item.icon
                                                  }, null, 8, ["icon"])
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t(item.title)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(VListItemSubtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t(item.description)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(index_card_items), (item, i) => {
                                        return openBlock(), createBlock(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          md: "3",
                                          key: i
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VListItem, {
                                              nav: "",
                                              lines: "three"
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  size: "35",
                                                  color: "primary",
                                                  icon: item.icon
                                                }, null, 8, ["icon"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t(item.title)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t(item.description)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(index_card_items), (item, i) => {
                                      return openBlock(), createBlock(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        md: "3",
                                        key: i
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItem, {
                                            nav: "",
                                            lines: "three"
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                size: "35",
                                                color: "primary",
                                                icon: item.icon
                                              }, null, 8, ["icon"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t(item.title)), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t(item.description)), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSheet, {
                            width: "100%",
                            color: "surface",
                            class: "mt-8 py-4 pl-4 rounded border"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(index_card_items), (item, i) => {
                                    return openBlock(), createBlock(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      md: "3",
                                      key: i
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItem, {
                                          nav: "",
                                          lines: "three"
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              size: "35",
                                              color: "primary",
                                              icon: item.icon
                                            }, null, 8, ["icon"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t(item.title)), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t(item.description)), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-100 py-4 d-flex justify-start align-center"${_scopeId3}><span class="text-primary"${_scopeId3}>${ssrInterpolate(_ctx.$t("home.all_categories"))}</span></div>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(categories.value, (c, i) => {
                                _push5(ssrRenderComponent(VCol, {
                                  class: "pa-2",
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  key: i
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_AppHomeCategory, { category: c }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppHomeCategory, { category: c }, null, 8, ["category"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (c, i) => {
                                  return openBlock(), createBlock(VCol, {
                                    class: "pa-2",
                                    cols: "12",
                                    sm: "6",
                                    md: "4",
                                    key: i
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppHomeCategory, { category: c }, null, 8, ["category"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "w-100 py-4 d-flex justify-start align-center" }, [
                            createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("home.all_categories")), 1)
                          ]),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (c, i) => {
                                return openBlock(), createBlock(VCol, {
                                  class: "pa-2",
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  key: i
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppHomeCategory, { category: c }, null, 8, ["category"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-100 py-4 d-flex justify-space-between align-center"${_scopeId3}><span class="text-primary"${_scopeId3}>${ssrInterpolate(_ctx.$t("home.recomended"))}</span>`);
                        _push4(ssrRenderComponent(VBtn, {
                          to: "/products",
                          "append-icon": "mdi-arrow-right",
                          color: "primary",
                          variant: "text",
                          class: "text-none font-weight-light"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>${ssrInterpolate(_ctx.$t("home.see_all"))}</span>`);
                            } else {
                              return [
                                createVNode("span", null, toDisplayString(_ctx.$t("home.see_all")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(products.value, (item, i) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: i,
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_AppProductCard, { item }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppProductCard, { item }, null, 8, ["item"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(products.value, (item, i) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: i,
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppProductCard, { item }, null, 8, ["item"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "w-100 py-4 d-flex justify-space-between align-center" }, [
                            createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("home.recomended")), 1),
                            createVNode(VBtn, {
                              to: "/products",
                              "append-icon": "mdi-arrow-right",
                              color: "primary",
                              variant: "text",
                              class: "text-none font-weight-light"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, toDisplayString(_ctx.$t("home.see_all")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(products.value, (item, i) => {
                                return openBlock(), createBlock(VCol, {
                                  key: i,
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppProductCard, { item }, null, 8, ["item"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-100 py-4 d-flex justify-start align-center"${_scopeId3}><span class="text-primary"${_scopeId3}>${ssrInterpolate(_ctx.$t("home.faqs"))}</span></div>`);
                        _push4(ssrRenderComponent(VSheet, {
                          width: "100%",
                          border: "",
                          rounded: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VExpansionPanels, { variant: "accordion" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(faqs), (f, i) => {
                                      _push6(ssrRenderComponent(VExpansionPanel, {
                                        elevation: "0",
                                        key: i
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VExpansionPanelTitle, { class: "font-weight-normal text-subtitle-2" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(i + 1)}. ${ssrInterpolate(f.question[_ctx.$i18n.locale])}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(i + 1) + ". " + toDisplayString(f.question[_ctx.$i18n.locale]), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VExpansionPanelText, { class: "text-body-2" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(f.answer[_ctx.$i18n.locale])}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(f.answer[_ctx.$i18n.locale]), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VExpansionPanelTitle, { class: "font-weight-normal text-subtitle-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(i + 1) + ". " + toDisplayString(f.question[_ctx.$i18n.locale]), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VExpansionPanelText, { class: "text-body-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(f.answer[_ctx.$i18n.locale]), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (f, i) => {
                                        return openBlock(), createBlock(VExpansionPanel, {
                                          elevation: "0",
                                          key: i
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VExpansionPanelTitle, { class: "font-weight-normal text-subtitle-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(i + 1) + ". " + toDisplayString(f.question[_ctx.$i18n.locale]), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VExpansionPanelText, { class: "text-body-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(f.answer[_ctx.$i18n.locale]), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VExpansionPanels, { variant: "accordion" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (f, i) => {
                                      return openBlock(), createBlock(VExpansionPanel, {
                                        elevation: "0",
                                        key: i
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VExpansionPanelTitle, { class: "font-weight-normal text-subtitle-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(i + 1) + ". " + toDisplayString(f.question[_ctx.$i18n.locale]), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VExpansionPanelText, { class: "text-body-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(f.answer[_ctx.$i18n.locale]), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "w-100 py-4 d-flex justify-start align-center" }, [
                            createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("home.faqs")), 1)
                          ]),
                          createVNode(VSheet, {
                            width: "100%",
                            border: "",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VExpansionPanels, { variant: "accordion" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (f, i) => {
                                    return openBlock(), createBlock(VExpansionPanel, {
                                      elevation: "0",
                                      key: i
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VExpansionPanelTitle, { class: "font-weight-normal text-subtitle-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(i + 1) + ". " + toDisplayString(f.question[_ctx.$i18n.locale]), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VExpansionPanelText, { class: "text-body-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f.answer[_ctx.$i18n.locale]), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      style: { "height": "80vh", "position": "relative" },
                      class: "d-flex rounded flex-column align-center justify-center mt-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "w-100 h-100 px-2",
                          style: { "position": "absolute" }
                        }, [
                          createVNode(VCarousel, {
                            cycle: "",
                            height: "100%",
                            "hide-delimiter-background": "",
                            "show-arrows": false
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                                return createVNode(VCarouselItem, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      alt: "medical",
                                      gradient: "to top left, rgba(104, 59, 181, 1), rgba(104, 59, 181, .4)",
                                      cover: "",
                                      src: `/carousel/image-${i}.jpg`
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", {
                          style: { "position": "relative", "z-index": "1" },
                          class: "px-4"
                        }, [
                          createVNode("div", { class: "text-center" }, [
                            createVNode("span", { class: "text-white text-h5 text-md-h4 font-weight-light" }, toDisplayString(_ctx.$t("home.title")), 1)
                          ]),
                          createVNode(VSheet, {
                            "max-width": "650",
                            color: "transparent",
                            class: "w-100 mt-4 text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-grey-lighten-2 font-weight-light text-body-2" }, toDisplayString(_ctx.$t("home.desc")), 1),
                              createVNode(VMenu, {
                                offset: "12",
                                transition: "fade-transition",
                                "model-value": searchedProducts.value.length > 0,
                                "close-on-content-click": false
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VTextField, mergeProps(props, {
                                    class: "mt-4",
                                    color: "primary",
                                    rounded: "lg",
                                    "hide-details": "",
                                    type: "search",
                                    "onUpdate:modelValue": unref(searchProducts),
                                    "bg-color": "white",
                                    density: "comfortable",
                                    autofocus: "",
                                    variant: "outlined",
                                    "base-color": "primary",
                                    "aria-label": "search products",
                                    role: "text",
                                    "prepend-inner-icon": "mdi-magnify",
                                    placeholder: _ctx.$t("home.search")
                                  }), null, 16, ["onUpdate:modelValue", "placeholder"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VList, {
                                    elevation: "0",
                                    width: "100%",
                                    nav: "",
                                    lines: "two",
                                    density: "compact"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(searchedProducts.value, (item, i) => {
                                        return openBlock(), createBlock(VListItem, {
                                          height: "65",
                                          class: "py-1",
                                          key: i,
                                          link: "",
                                          to: `/product/${item.slug}`
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VAvatar, { rounded: "" }, {
                                              default: withCtx(() => {
                                                var _a, _b;
                                                return [
                                                  createVNode(VImg, {
                                                    alt: "searched images",
                                                    cover: "",
                                                    src: ((_b = (_a = item.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.image) || "/images/nophoto.jpg"
                                                  }, null, 8, ["src"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-body-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, { class: "text-caption mt-1 d-flex align-center gap-1" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-center gap-1 font-weight-bold" }, [
                                                  createVNode(VImg, {
                                                    alt: "flag",
                                                    width: "20",
                                                    height: "20",
                                                    src: unref(countries)[item.shipping_from].flag
                                                  }, null, 8, ["src"]),
                                                  createTextVNode(" " + toDisplayString(unref(countries)[item.shipping_from].name), 1)
                                                ]),
                                                createTextVNode(" " + toDisplayString(item.model) + " ", 1),
                                                createVNode("span", { class: "font-weight-bold" }, toDisplayString(item.price) + " $", 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["model-value"])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "px-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSheet, {
                          width: "100%",
                          color: "surface",
                          class: "mt-8 py-4 pl-4 rounded border"
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(index_card_items), (item, i) => {
                                  return openBlock(), createBlock(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "3",
                                    key: i
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, {
                                        nav: "",
                                        lines: "three"
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            size: "35",
                                            color: "primary",
                                            icon: item.icon
                                          }, null, 8, ["icon"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t(item.title)), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t(item.description)), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-100 py-4 d-flex justify-start align-center" }, [
                          createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("home.all_categories")), 1)
                        ]),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (c, i) => {
                              return openBlock(), createBlock(VCol, {
                                class: "pa-2",
                                cols: "12",
                                sm: "6",
                                md: "4",
                                key: i
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppHomeCategory, { category: c }, null, 8, ["category"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-100 py-4 d-flex justify-space-between align-center" }, [
                          createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("home.recomended")), 1),
                          createVNode(VBtn, {
                            to: "/products",
                            "append-icon": "mdi-arrow-right",
                            color: "primary",
                            variant: "text",
                            class: "text-none font-weight-light"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(_ctx.$t("home.see_all")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(products.value, (item, i) => {
                              return openBlock(), createBlock(VCol, {
                                key: i,
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppProductCard, { item }, null, 8, ["item"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-100 py-4 d-flex justify-start align-center" }, [
                          createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("home.faqs")), 1)
                        ]),
                        createVNode(VSheet, {
                          width: "100%",
                          border: "",
                          rounded: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VExpansionPanels, { variant: "accordion" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (f, i) => {
                                  return openBlock(), createBlock(VExpansionPanel, {
                                    elevation: "0",
                                    key: i
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VExpansionPanelTitle, { class: "font-weight-normal text-subtitle-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(i + 1) + ". " + toDisplayString(f.question[_ctx.$i18n.locale]), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VExpansionPanelText, { class: "text-body-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f.answer[_ctx.$i18n.locale]), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    style: { "height": "80vh", "position": "relative" },
                    class: "d-flex rounded flex-column align-center justify-center mt-1"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "w-100 h-100 px-2",
                        style: { "position": "absolute" }
                      }, [
                        createVNode(VCarousel, {
                          cycle: "",
                          height: "100%",
                          "hide-delimiter-background": "",
                          "show-arrows": false
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                              return createVNode(VCarouselItem, { key: i }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    alt: "medical",
                                    gradient: "to top left, rgba(104, 59, 181, 1), rgba(104, 59, 181, .4)",
                                    cover: "",
                                    src: `/carousel/image-${i}.jpg`
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", {
                        style: { "position": "relative", "z-index": "1" },
                        class: "px-4"
                      }, [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("span", { class: "text-white text-h5 text-md-h4 font-weight-light" }, toDisplayString(_ctx.$t("home.title")), 1)
                        ]),
                        createVNode(VSheet, {
                          "max-width": "650",
                          color: "transparent",
                          class: "w-100 mt-4 text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-grey-lighten-2 font-weight-light text-body-2" }, toDisplayString(_ctx.$t("home.desc")), 1),
                            createVNode(VMenu, {
                              offset: "12",
                              transition: "fade-transition",
                              "model-value": searchedProducts.value.length > 0,
                              "close-on-content-click": false
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(VTextField, mergeProps(props, {
                                  class: "mt-4",
                                  color: "primary",
                                  rounded: "lg",
                                  "hide-details": "",
                                  type: "search",
                                  "onUpdate:modelValue": unref(searchProducts),
                                  "bg-color": "white",
                                  density: "comfortable",
                                  autofocus: "",
                                  variant: "outlined",
                                  "base-color": "primary",
                                  "aria-label": "search products",
                                  role: "text",
                                  "prepend-inner-icon": "mdi-magnify",
                                  placeholder: _ctx.$t("home.search")
                                }), null, 16, ["onUpdate:modelValue", "placeholder"])
                              ]),
                              default: withCtx(() => [
                                createVNode(VList, {
                                  elevation: "0",
                                  width: "100%",
                                  nav: "",
                                  lines: "two",
                                  density: "compact"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(searchedProducts.value, (item, i) => {
                                      return openBlock(), createBlock(VListItem, {
                                        height: "65",
                                        class: "py-1",
                                        key: i,
                                        link: "",
                                        to: `/product/${item.slug}`
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VAvatar, { rounded: "" }, {
                                            default: withCtx(() => {
                                              var _a, _b;
                                              return [
                                                createVNode(VImg, {
                                                  alt: "searched images",
                                                  cover: "",
                                                  src: ((_b = (_a = item.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.image) || "/images/nophoto.jpg"
                                                }, null, 8, ["src"])
                                              ];
                                            }),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-body-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, { class: "text-caption mt-1 d-flex align-center gap-1" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-center gap-1 font-weight-bold" }, [
                                                createVNode(VImg, {
                                                  alt: "flag",
                                                  width: "20",
                                                  height: "20",
                                                  src: unref(countries)[item.shipping_from].flag
                                                }, null, 8, ["src"]),
                                                createTextVNode(" " + toDisplayString(unref(countries)[item.shipping_from].name), 1)
                                              ]),
                                              createTextVNode(" " + toDisplayString(item.model) + " ", 1),
                                              createVNode("span", { class: "font-weight-bold" }, toDisplayString(item.price) + " $", 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["model-value"])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "px-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSheet, {
                        width: "100%",
                        color: "surface",
                        class: "mt-8 py-4 pl-4 rounded border"
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(index_card_items), (item, i) => {
                                return openBlock(), createBlock(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3",
                                  key: i
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, {
                                      nav: "",
                                      lines: "three"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "35",
                                          color: "primary",
                                          icon: item.icon
                                        }, null, 8, ["icon"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t(item.title)), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t(item.description)), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-100 py-4 d-flex justify-start align-center" }, [
                        createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("home.all_categories")), 1)
                      ]),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (c, i) => {
                            return openBlock(), createBlock(VCol, {
                              class: "pa-2",
                              cols: "12",
                              sm: "6",
                              md: "4",
                              key: i
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppHomeCategory, { category: c }, null, 8, ["category"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-100 py-4 d-flex justify-space-between align-center" }, [
                        createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("home.recomended")), 1),
                        createVNode(VBtn, {
                          to: "/products",
                          "append-icon": "mdi-arrow-right",
                          color: "primary",
                          variant: "text",
                          class: "text-none font-weight-light"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(_ctx.$t("home.see_all")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(products.value, (item, i) => {
                            return openBlock(), createBlock(VCol, {
                              key: i,
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppProductCard, { item }, null, 8, ["item"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-100 py-4 d-flex justify-start align-center" }, [
                        createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("home.faqs")), 1)
                      ]),
                      createVNode(VSheet, {
                        width: "100%",
                        border: "",
                        rounded: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VExpansionPanels, { variant: "accordion" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (f, i) => {
                                return openBlock(), createBlock(VExpansionPanel, {
                                  elevation: "0",
                                  key: i
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VExpansionPanelTitle, { class: "font-weight-normal text-subtitle-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(i + 1) + ". " + toDisplayString(f.question[_ctx.$i18n.locale]), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VExpansionPanelText, { class: "text-body-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f.answer[_ctx.$i18n.locale]), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
