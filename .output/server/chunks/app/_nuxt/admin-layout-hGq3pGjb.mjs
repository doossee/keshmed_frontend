import { _ as __nuxt_component_0 } from './client-only-xuX_fO1d.mjs';
import { ad as _export_sfc, a9 as useDisplay, a4 as useAuth, aa as VNavigationDrawer, H as VList, m as VListItem, f as VIcon, n as VListItemTitle, e as VBtn, u as useI18n, ab as VAppBar, G as VMenu, ac as VSpacer, a5 as VApp, a6 as VMain } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, computed, renderSlot } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { b as admin_links, l as languages } from './index-J2odrurN.mjs';
import { _ as _imports_0 } from './keshmed-logo-bly5Azg7.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'packrup';
import 'nitropack/dist/runtime/plugin';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app-admin-nav",
  __ssrInlineRender: true,
  setup(__props) {
    const { mobile } = useDisplay();
    const { logout } = useAuth();
    const rail = ref(true);
    const drawer = ref(true);
    const handleLogout = () => {
      if (!confirm("Log out?"))
        return;
      logout();
    };
    watch(mobile, () => mobile && (rail.value = true));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
        modelValue: drawer.value,
        "onUpdate:modelValue": ($event) => drawer.value = $event,
        rail: rail.value,
        permanent: "",
        width: "250",
        "expand-on-hover": unref(mobile)
      }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, {
              lines: false,
              nav: "",
              variant: "flat"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VListItem, {
                    link: "",
                    color: "primary",
                    "base-color": "transparent",
                    onClick: handleLogout
                  }, {
                    prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "mdi-logout-variant" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "mdi-logout-variant" })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItemTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("admin.logout"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("admin.logout")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("admin.logout")), 1)
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
                    createVNode(VListItem, {
                      link: "",
                      color: "primary",
                      "base-color": "transparent",
                      onClick: handleLogout
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VIcon, { icon: "mdi-logout-variant" })
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("admin.logout")), 1)
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
              createVNode(VList, {
                lines: false,
                nav: "",
                variant: "flat"
              }, {
                default: withCtx(() => [
                  createVNode(VListItem, {
                    link: "",
                    color: "primary",
                    "base-color": "transparent",
                    onClick: handleLogout
                  }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, { icon: "mdi-logout-variant" })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.logout")), 1)
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
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, {
              lines: false,
              nav: "",
              variant: "flat"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(admin_links), (link, i) => {
                    _push3(ssrRenderComponent(VListItem, {
                      link: "",
                      key: i,
                      to: link.url,
                      color: "primary",
                      "base-color": "transparent",
                      exact: ""
                    }, {
                      prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: link.icon
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: link.icon
                            }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VListItemTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.$t(link.title))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.$t(link.title)), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t(link.title)), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(admin_links), (link, i) => {
                      return openBlock(), createBlock(VListItem, {
                        link: "",
                        key: i,
                        to: link.url,
                        color: "primary",
                        "base-color": "transparent",
                        exact: ""
                      }, {
                        prepend: withCtx(() => [
                          createVNode(VIcon, {
                            icon: link.icon
                          }, null, 8, ["icon"])
                        ]),
                        default: withCtx(() => [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t(link.title)), 1)
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
            }, _parent2, _scopeId));
            if (!unref(mobile)) {
              _push2(ssrRenderComponent(VBtn, {
                position: "absolute",
                elevation: "1",
                icon: `mdi-chevron-${!rail.value ? "left" : "right"}`,
                size: "x-small",
                onClick: ($event) => rail.value = !rail.value,
                style: { "right": "-15px" }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(VList, {
                lines: false,
                nav: "",
                variant: "flat"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(admin_links), (link, i) => {
                    return openBlock(), createBlock(VListItem, {
                      link: "",
                      key: i,
                      to: link.url,
                      color: "primary",
                      "base-color": "transparent",
                      exact: ""
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VIcon, {
                          icon: link.icon
                        }, null, 8, ["icon"])
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t(link.title)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 128))
                ]),
                _: 1
              }),
              !unref(mobile) ? (openBlock(), createBlock(VBtn, {
                key: 0,
                position: "absolute",
                elevation: "1",
                icon: `mdi-chevron-${!rail.value ? "left" : "right"}`,
                size: "x-small",
                onClick: ($event) => rail.value = !rail.value,
                style: { "right": "-15px" }
              }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-admin-nav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "app-admin-bar",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const currentLang = computed(() => languages.find((l) => l.lang === locale.value));
    const changeLang = (l) => {
      localStorage.setItem("language", l);
      locale.value = l;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAppBar, mergeProps({
        color: "background",
        flat: "",
        height: "60"
      }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VMenu, { transition: "fade-transition" }, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, mergeProps({ style: { "margin-right": "6px" } }, props, {
                    flat: "",
                    size: "40",
                    variant: "flat",
                    color: "primary",
                    elevation: "1"
                  }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a = currentLang.value) == null ? void 0 : _a.lang)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString((_b = currentLang.value) == null ? void 0 : _b.lang), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, mergeProps({ style: { "margin-right": "6px" } }, props, {
                      flat: "",
                      size: "40",
                      variant: "flat",
                      color: "primary",
                      elevation: "1"
                    }), {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString((_a = currentLang.value) == null ? void 0 : _a.lang), 1)
                        ];
                      }),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    elevation: "2",
                    density: "compact"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(languages), (item, i) => {
                          _push4(ssrRenderComponent(VListItem, {
                            link: "",
                            key: i,
                            onClick: ($event) => changeLang(item.lang)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "text-caption" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, {
                                    class: "text-caption",
                                    textContent: toDisplayString(item.title)
                                  }, null, 8, ["textContent"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (item, i) => {
                            return openBlock(), createBlock(VListItem, {
                              link: "",
                              key: i,
                              onClick: ($event) => changeLang(item.lang)
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, {
                                  class: "text-caption",
                                  textContent: toDisplayString(item.title)
                                }, null, 8, ["textContent"])
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      elevation: "2",
                      density: "compact"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (item, i) => {
                          return openBlock(), createBlock(VListItem, {
                            link: "",
                            key: i,
                            onClick: ($event) => changeLang(item.lang)
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, {
                                class: "text-caption",
                                textContent: toDisplayString(item.title)
                              }, null, 8, ["textContent"])
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
                        }), 128))
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
              createVNode(VMenu, { transition: "fade-transition" }, {
                activator: withCtx(({ props }) => [
                  createVNode(VBtn, mergeProps({ style: { "margin-right": "6px" } }, props, {
                    flat: "",
                    size: "40",
                    variant: "flat",
                    color: "primary",
                    elevation: "1"
                  }), {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(toDisplayString((_a = currentLang.value) == null ? void 0 : _a.lang), 1)
                      ];
                    }),
                    _: 2
                  }, 1040)
                ]),
                default: withCtx(() => [
                  createVNode(VList, {
                    elevation: "2",
                    density: "compact"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (item, i) => {
                        return openBlock(), createBlock(VListItem, {
                          link: "",
                          key: i,
                          onClick: ($event) => changeLang(item.lang)
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, {
                              class: "text-caption",
                              textContent: toDisplayString(item.title)
                            }, null, 8, ["textContent"])
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
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
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-100 d-flex justify-start pl-4"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} height="50" width="110"${_scopeId}></div>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "w-100 d-flex justify-start pl-4" }, [
                createVNode("img", {
                  src: _imports_0,
                  height: "50",
                  width: "110"
                })
              ]),
              createVNode(VSpacer)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-admin-bar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = __nuxt_component_0;
  const _component_app_admin_nav = _sfc_main$2;
  const _component_app_admin_bar = _sfc_main$1;
  _push(ssrRenderComponent(VApp, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
        _push2(ssrRenderComponent(VMain, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createVNode(_component_app_admin_nav),
              createVNode(_component_app_admin_bar)
            ]),
            _: 1
          }),
          createVNode(VMain, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin-layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const adminLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { adminLayout as default };
