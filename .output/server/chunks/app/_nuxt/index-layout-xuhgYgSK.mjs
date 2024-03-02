import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-xuX_fO1d.mjs';
import { Y as VApp, Z as VMain, u as useI18n, a2 as VNavigationDrawer, e as VBtn, G as VMenu, k as VAvatar, l as VImg, H as VList, m as VListItem, n as VListItemTitle, a1 as useDisplay, a3 as VAppBar, V as VContainer, f as VIcon, ae as VFooter, a as VRow, b as VCol, N as VDivider, W as useRouter$1, a6 as hasProtocol, a7 as joinURL, a8 as parseURL, a9 as parseQuery$1, aa as nuxtLinkDefaults, ab as useRuntimeConfig, a0 as navigateTo, ac as withTrailingSlash$1, ad as withoutTrailingSlash$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withCtx, renderSlot, createVNode, toRefs, computed, mergeProps, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, h, resolveComponent } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderAttrs } from 'vue/server-renderer';
import { l as languages, n as navigation_links, s as social_links } from './index-ppswWwq3.mjs';
import { _ as _imports_0$1 } from './keshmed-logo-bly5Azg7.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppNavbar",
  __ssrInlineRender: true,
  props: {
    drawer: Boolean
  },
  setup(__props) {
    const { locale } = useI18n();
    const props = __props;
    const { drawer } = toRefs(props);
    const currentLang = computed(() => languages.find((l) => l.lang === locale.value));
    const changeLang = (l) => {
      localStorage.setItem("language", l);
      locale.value = l;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
        "model-value": unref(drawer),
        "onUpdate:modelValue": ($event) => _ctx.$emit("close-nav"),
        temporary: ""
      }, _attrs), {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-2"${_scopeId}><span class="px-4"${_scopeId}>KESHMED</span></div>`);
          } else {
            return [
              createVNode("div", { class: "py-2" }, [
                createVNode("span", { class: "px-4" }, "KESHMED")
              ])
            ];
          }
        }),
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pa-2"${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              href: "tel:+998908893700",
              block: "",
              variant: "text",
              flat: "",
              "prepend-icon": "mdi-phone",
              class: "mb-2 text-caption",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`+998 (90) 889 37 00`);
                } else {
                  return [
                    createTextVNode("+998 (90) 889 37 00")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMenu, {
              location: "bottom center",
              transition: "fade-transition"
            }, {
              activator: withCtx(({ props: props2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, mergeProps({ block: "" }, props2, {
                    variant: "outlined",
                    color: "primary",
                    class: "text-none text-body-2 font-weight-light"
                  }), {
                    prepend: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VAvatar, {
                          rounded: "",
                          size: "20"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(ssrRenderComponent(VImg, {
                                src: (_a = unref(currentLang)) == null ? void 0 : _a.img,
                                alt: "site-nav-language image"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VImg, {
                                  src: (_b = unref(currentLang)) == null ? void 0 : _b.img,
                                  alt: "site-nav-language image"
                                }, null, 8, ["src"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VAvatar, {
                            rounded: "",
                            size: "20"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(VImg, {
                                  src: (_a = unref(currentLang)) == null ? void 0 : _a.img,
                                  alt: "site-nav-language image"
                                }, null, 8, ["src"])
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<span${_scopeId3}>${ssrInterpolate((_a = unref(currentLang)) == null ? void 0 : _a.title)}</span>`);
                      } else {
                        return [
                          createVNode("span", null, toDisplayString((_b = unref(currentLang)) == null ? void 0 : _b.title), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, mergeProps({ block: "" }, props2, {
                      variant: "outlined",
                      color: "primary",
                      class: "text-none text-body-2 font-weight-light"
                    }), {
                      prepend: withCtx(() => [
                        createVNode(VAvatar, {
                          rounded: "",
                          size: "20"
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode(VImg, {
                                src: (_a = unref(currentLang)) == null ? void 0 : _a.img,
                                alt: "site-nav-language image"
                              }, null, 8, ["src"])
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("span", null, toDisplayString((_a = unref(currentLang)) == null ? void 0 : _a.title), 1)
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
                    density: "compact",
                    nav: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(languages), (lang, i) => {
                          _push4(ssrRenderComponent(VListItem, {
                            link: "",
                            key: i,
                            onClick: ($event) => changeLang(lang.lang)
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "",
                                  size: "30"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VImg, {
                                        src: lang.img,
                                        alt: "site-nav-language image",
                                        class: "select language"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VImg, {
                                          src: lang.img,
                                          alt: "site-nav-language image",
                                          class: "select language"
                                        }, null, 8, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    size: "30"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        src: lang.img,
                                        alt: "site-nav-language image",
                                        class: "select language"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(lang.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(lang.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(lang.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (lang, i) => {
                            return openBlock(), createBlock(VListItem, {
                              link: "",
                              key: i,
                              onClick: ($event) => changeLang(lang.lang)
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  size: "30"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: lang.img,
                                      alt: "site-nav-language image",
                                      class: "select language"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(lang.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
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
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (lang, i) => {
                          return openBlock(), createBlock(VListItem, {
                            link: "",
                            key: i,
                            onClick: ($event) => changeLang(lang.lang)
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "",
                                size: "30"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: lang.img,
                                    alt: "site-nav-language image",
                                    class: "select language"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(lang.title), 1)
                                ]),
                                _: 2
                              }, 1024)
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pa-2" }, [
                createVNode(VBtn, {
                  href: "tel:+998908893700",
                  block: "",
                  variant: "text",
                  flat: "",
                  "prepend-icon": "mdi-phone",
                  class: "mb-2 text-caption",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("+998 (90) 889 37 00")
                  ]),
                  _: 1
                }),
                createVNode(VMenu, {
                  location: "bottom center",
                  transition: "fade-transition"
                }, {
                  activator: withCtx(({ props: props2 }) => [
                    createVNode(VBtn, mergeProps({ block: "" }, props2, {
                      variant: "outlined",
                      color: "primary",
                      class: "text-none text-body-2 font-weight-light"
                    }), {
                      prepend: withCtx(() => [
                        createVNode(VAvatar, {
                          rounded: "",
                          size: "20"
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode(VImg, {
                                src: (_a = unref(currentLang)) == null ? void 0 : _a.img,
                                alt: "site-nav-language image"
                              }, null, 8, ["src"])
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("span", null, toDisplayString((_a = unref(currentLang)) == null ? void 0 : _a.title), 1)
                        ];
                      }),
                      _: 2
                    }, 1040)
                  ]),
                  default: withCtx(() => [
                    createVNode(VList, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (lang, i) => {
                          return openBlock(), createBlock(VListItem, {
                            link: "",
                            key: i,
                            onClick: ($event) => changeLang(lang.lang)
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "",
                                size: "30"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: lang.img,
                                    alt: "site-nav-language image",
                                    class: "select language"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(lang.title), 1)
                                ]),
                                _: 2
                              }, 1024)
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
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, {
              density: "compact",
              nav: "",
              color: "primary",
              "aria-label": "nav-links"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(navigation_links), (link, i) => {
                    _push3(ssrRenderComponent(VListItem, {
                      density: "compact",
                      key: i,
                      link: "",
                      to: link.url,
                      "aria-label": "link",
                      exact: "",
                      title: _ctx.$t(link.title)
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation_links), (link, i) => {
                      return openBlock(), createBlock(VListItem, {
                        density: "compact",
                        key: i,
                        link: "",
                        to: link.url,
                        "aria-label": "link",
                        exact: "",
                        title: _ctx.$t(link.title)
                      }, null, 8, ["to", "title"]);
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
                nav: "",
                color: "primary",
                "aria-label": "nav-links"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation_links), (link, i) => {
                    return openBlock(), createBlock(VListItem, {
                      density: "compact",
                      key: i,
                      link: "",
                      to: link.url,
                      "aria-label": "link",
                      exact: "",
                      title: _ctx.$t(link.title)
                    }, null, 8, ["to", "title"]);
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavbar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter$1();
      const config = useRuntimeConfig();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isAbsoluteUrl = computed(() => typeof to.value === "string" && hasProtocol(to.value, { acceptRelative: true }));
      const hasTarget = computed(() => props.target && props.target !== "_self");
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (hasTarget.value) {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || isAbsoluteUrl.value;
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a2;
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_a2 = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _a2 : null : to.value && !props.external && !isAbsoluteUrl.value ? resolveTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), router.resolve) : to.value || null;
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery$1(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash$1 : withoutTrailingSlash$1;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppBar",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const currentLang = computed(() => languages.find((l) => l.lang === locale.value));
    const changeLang = (l) => {
      localStorage.setItem("language", l);
      locale.value = l;
    };
    const { mobile } = useDisplay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(VAppBar, mergeProps({
        theme: "light",
        flat: "",
        color: "background"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "d-flex align-center justify-space-between" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(mobile)) {
                    _push3(`<div class="d-flex ga-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(navigation_links), (link, i) => {
                      _push3(ssrRenderComponent(VBtn, {
                        height: "28",
                        color: "primary",
                        class: "text-none text-body-2 font-weight-light",
                        variant: "text",
                        key: i,
                        to: link.url,
                        exact: ""
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(_ctx.$t(link.title))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.$t(link.title)), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(ssrRenderComponent(VBtn, {
                      class: "mr-5",
                      "aria-labelledby": "toggle-nav-drawer",
                      "aria-label": "toggle-drawer",
                      onClick: ($event) => _ctx.$emit("open-nav"),
                      size: "35",
                      variant: "flat",
                      color: "primary"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-menu`);
                              } else {
                                return [
                                  createTextVNode("mdi-menu")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-menu")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                  _push3(ssrRenderComponent(_component_nuxt_link, {
                    to: "/",
                    class: "text-h6 text-primary text-decoration-none py-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0$1)} width="100" height="45" alt="site-logo"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0$1,
                            width: "100",
                            height: "45",
                            alt: "site-logo"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center gap-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    style: !unref(mobile) ? null : { display: "none" },
                    href: "tel:+998908893700",
                    color: "primary",
                    height: "28",
                    "prepend-icon": "mdi-phone",
                    variant: "text",
                    class: "text-none text-body-2 font-weight-light mr-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>+998 (90) 889 37 00</span>`);
                      } else {
                        return [
                          createVNode("span", null, "+998 (90) 889 37 00")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VMenu, {
                    location: "bottom center",
                    transition: "fade-transition"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, mergeProps({
                          color: "primary",
                          height: "28"
                        }, props, {
                          variant: "outlined",
                          class: "text-none text-body-2 font-weight-light"
                        }), {
                          prepend: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAvatar, {
                                rounded: "",
                                size: "20",
                                style: !unref(mobile) ? null : { display: "none" }
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  var _a, _b;
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VImg, {
                                      src: (_a = currentLang.value) == null ? void 0 : _a.img,
                                      alt: "sile-languages-choice"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VImg, {
                                        src: (_b = currentLang.value) == null ? void 0 : _b.img,
                                        alt: "sile-languages-choice"
                                      }, null, 8, ["src"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                withDirectives(createVNode(VAvatar, {
                                  rounded: "",
                                  size: "20"
                                }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createVNode(VImg, {
                                        src: (_a = currentLang.value) == null ? void 0 : _a.img,
                                        alt: "sile-languages-choice"
                                      }, null, 8, ["src"])
                                    ];
                                  }),
                                  _: 1
                                }, 512), [
                                  [vShow, !unref(mobile)]
                                ])
                              ];
                            }
                          }),
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`<span${_scopeId4}>${ssrInterpolate((_a = currentLang.value) == null ? void 0 : _a.title)}</span>`);
                            } else {
                              return [
                                createVNode("span", null, toDisplayString((_b = currentLang.value) == null ? void 0 : _b.title), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, mergeProps({
                            color: "primary",
                            height: "28"
                          }, props, {
                            variant: "outlined",
                            class: "text-none text-body-2 font-weight-light"
                          }), {
                            prepend: withCtx(() => [
                              withDirectives(createVNode(VAvatar, {
                                rounded: "",
                                size: "20"
                              }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createVNode(VImg, {
                                      src: (_a = currentLang.value) == null ? void 0 : _a.img,
                                      alt: "sile-languages-choice"
                                    }, null, 8, ["src"])
                                  ];
                                }),
                                _: 1
                              }, 512), [
                                [vShow, !unref(mobile)]
                              ])
                            ]),
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("span", null, toDisplayString((_a = currentLang.value) == null ? void 0 : _a.title), 1)
                              ];
                            }),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, {
                          density: "compact",
                          nav: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(languages), (lang, i) => {
                                _push5(ssrRenderComponent(VListItem, {
                                  link: "",
                                  key: i,
                                  onClick: ($event) => changeLang(lang.lang)
                                }, {
                                  prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VAvatar, {
                                        rounded: "",
                                        size: "30"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VImg, {
                                              src: lang.img,
                                              alt: "sile-languages-choice"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VImg, {
                                                src: lang.img,
                                                alt: "sile-languages-choice"
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VAvatar, {
                                          rounded: "",
                                          size: "30"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: lang.img,
                                              alt: "sile-languages-choice"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(lang.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(lang.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(lang.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (lang, i) => {
                                  return openBlock(), createBlock(VListItem, {
                                    link: "",
                                    key: i,
                                    onClick: ($event) => changeLang(lang.lang)
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VAvatar, {
                                        rounded: "",
                                        size: "30"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: lang.img,
                                            alt: "sile-languages-choice"
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(lang.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VList, {
                            density: "compact",
                            nav: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (lang, i) => {
                                return openBlock(), createBlock(VListItem, {
                                  link: "",
                                  key: i,
                                  onClick: ($event) => changeLang(lang.lang)
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      rounded: "",
                                      size: "30"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: lang.img,
                                          alt: "sile-languages-choice"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(lang.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    !unref(mobile) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "d-flex ga-2"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation_links), (link, i) => {
                        return openBlock(), createBlock(VBtn, {
                          height: "28",
                          color: "primary",
                          class: "text-none text-body-2 font-weight-light",
                          variant: "text",
                          key: i,
                          to: link.url,
                          exact: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t(link.title)), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 128))
                    ])) : (openBlock(), createBlock(VBtn, {
                      key: 1,
                      class: "mr-5",
                      "aria-labelledby": "toggle-nav-drawer",
                      "aria-label": "toggle-drawer",
                      onClick: ($event) => _ctx.$emit("open-nav"),
                      size: "35",
                      variant: "flat",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-menu")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])),
                    createVNode(_component_nuxt_link, {
                      to: "/",
                      class: "text-h6 text-primary text-decoration-none py-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0$1,
                          width: "100",
                          height: "45",
                          alt: "site-logo"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "d-flex align-center gap-1" }, [
                      withDirectives(createVNode(VBtn, {
                        href: "tel:+998908893700",
                        color: "primary",
                        height: "28",
                        "prepend-icon": "mdi-phone",
                        variant: "text",
                        class: "text-none text-body-2 font-weight-light mr-1"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "+998 (90) 889 37 00")
                        ]),
                        _: 1
                      }, 512), [
                        [vShow, !unref(mobile)]
                      ]),
                      createVNode(VMenu, {
                        location: "bottom center",
                        transition: "fade-transition"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps({
                            color: "primary",
                            height: "28"
                          }, props, {
                            variant: "outlined",
                            class: "text-none text-body-2 font-weight-light"
                          }), {
                            prepend: withCtx(() => [
                              withDirectives(createVNode(VAvatar, {
                                rounded: "",
                                size: "20"
                              }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createVNode(VImg, {
                                      src: (_a = currentLang.value) == null ? void 0 : _a.img,
                                      alt: "sile-languages-choice"
                                    }, null, 8, ["src"])
                                  ];
                                }),
                                _: 1
                              }, 512), [
                                [vShow, !unref(mobile)]
                              ])
                            ]),
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("span", null, toDisplayString((_a = currentLang.value) == null ? void 0 : _a.title), 1)
                              ];
                            }),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(() => [
                          createVNode(VList, {
                            density: "compact",
                            nav: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (lang, i) => {
                                return openBlock(), createBlock(VListItem, {
                                  link: "",
                                  key: i,
                                  onClick: ($event) => changeLang(lang.lang)
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      rounded: "",
                                      size: "30"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: lang.img,
                                          alt: "sile-languages-choice"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(lang.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
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
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, { class: "d-flex align-center justify-space-between" }, {
                default: withCtx(() => [
                  !unref(mobile) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "d-flex ga-2"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation_links), (link, i) => {
                      return openBlock(), createBlock(VBtn, {
                        height: "28",
                        color: "primary",
                        class: "text-none text-body-2 font-weight-light",
                        variant: "text",
                        key: i,
                        to: link.url,
                        exact: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t(link.title)), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ])) : (openBlock(), createBlock(VBtn, {
                    key: 1,
                    class: "mr-5",
                    "aria-labelledby": "toggle-nav-drawer",
                    "aria-label": "toggle-drawer",
                    onClick: ($event) => _ctx.$emit("open-nav"),
                    size: "35",
                    variant: "flat",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-menu")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])),
                  createVNode(_component_nuxt_link, {
                    to: "/",
                    class: "text-h6 text-primary text-decoration-none py-1"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0$1,
                        width: "100",
                        height: "45",
                        alt: "site-logo"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "d-flex align-center gap-1" }, [
                    withDirectives(createVNode(VBtn, {
                      href: "tel:+998908893700",
                      color: "primary",
                      height: "28",
                      "prepend-icon": "mdi-phone",
                      variant: "text",
                      class: "text-none text-body-2 font-weight-light mr-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "+998 (90) 889 37 00")
                      ]),
                      _: 1
                    }, 512), [
                      [vShow, !unref(mobile)]
                    ]),
                    createVNode(VMenu, {
                      location: "bottom center",
                      transition: "fade-transition"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(VBtn, mergeProps({
                          color: "primary",
                          height: "28"
                        }, props, {
                          variant: "outlined",
                          class: "text-none text-body-2 font-weight-light"
                        }), {
                          prepend: withCtx(() => [
                            withDirectives(createVNode(VAvatar, {
                              rounded: "",
                              size: "20"
                            }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(VImg, {
                                    src: (_a = currentLang.value) == null ? void 0 : _a.img,
                                    alt: "sile-languages-choice"
                                  }, null, 8, ["src"])
                                ];
                              }),
                              _: 1
                            }, 512), [
                              [vShow, !unref(mobile)]
                            ])
                          ]),
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("span", null, toDisplayString((_a = currentLang.value) == null ? void 0 : _a.title), 1)
                            ];
                          }),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(() => [
                        createVNode(VList, {
                          density: "compact",
                          nav: ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (lang, i) => {
                              return openBlock(), createBlock(VListItem, {
                                link: "",
                                key: i,
                                onClick: ($event) => changeLang(lang.lang)
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    size: "30"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        src: lang.img,
                                        alt: "sile-languages-choice"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(lang.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
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
                  ])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app-footer-link",
  __ssrInlineRender: true,
  props: {
    title: String,
    links: [Object]
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "d-flex flex-column justify-start",
        style: { "max-width": "200px" }
      }, _attrs))}><span>${ssrInterpolate(props.title)}</span><div class="d-flex flex-column mt-2"><!--[-->`);
      ssrRenderList(props.links, (s, i) => {
        _push(`<a${ssrRenderAttr("href", s.url)} width="100%" class="mb-2 text-caption text-white text-decoration-none text-link text-left mt-1">`);
        _push(ssrRenderComponent(VIcon, {
          class: "mr-2",
          icon: s.icon
        }, null, _parent));
        if (s.lang) {
          _push(`<span>${ssrInterpolate(_ctx.$t(s.title))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(s.title)}</span>`);
        }
        _push(`</a>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-footer-link.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("logo-white.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "app-footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_app_footer_link = _sfc_main$2;
      _push(ssrRenderComponent(VFooter, mergeProps({
        class: "bg-grey-darken-4 d-flex flex-column pb-15 pb-md-5",
        absolute: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "py-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-2 mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    width: "150",
                    src: _imports_0,
                    alt: "Footer logo"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VRow, { class: "mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "6",
                          sm: "4",
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_app_footer_link, {
                                title: _ctx.$t("footer.social_links"),
                                links: unref(social_links)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_app_footer_link, {
                                  title: _ctx.$t("footer.social_links"),
                                  links: unref(social_links)
                                }, null, 8, ["title", "links"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "6",
                          sm: "4",
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_app_footer_link, {
                                title: _ctx.$t("footer.site_links"),
                                links: unref(navigation_links)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_app_footer_link, {
                                  title: _ctx.$t("footer.site_links"),
                                  links: unref(navigation_links)
                                }, null, 8, ["title", "links"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex flex-column h-100 w-100 rounded overflow-hidden"${_scopeId4}><iframe title="geolocation" width="100%" height="240px" id="gmap_canvas" src="https://maps.google.com/maps?q=39.084234,66.838668&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"${_scopeId4}></iframe></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex flex-column h-100 w-100 rounded overflow-hidden" }, [
                                  createVNode("iframe", {
                                    title: "geolocation",
                                    width: "100%",
                                    height: "240px",
                                    id: "gmap_canvas",
                                    src: "https://maps.google.com/maps?q=39.084234,66.838668&t=&z=18&ie=UTF8&iwloc=&output=embed",
                                    frameborder: "0",
                                    scrolling: "no",
                                    marginheight: "0",
                                    marginwidth: "0"
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "6",
                            sm: "4",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_app_footer_link, {
                                title: _ctx.$t("footer.social_links"),
                                links: unref(social_links)
                              }, null, 8, ["title", "links"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "6",
                            sm: "4",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_app_footer_link, {
                                title: _ctx.$t("footer.site_links"),
                                links: unref(navigation_links)
                              }, null, 8, ["title", "links"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-column h-100 w-100 rounded overflow-hidden" }, [
                                createVNode("iframe", {
                                  title: "geolocation",
                                  width: "100%",
                                  height: "240px",
                                  id: "gmap_canvas",
                                  src: "https://maps.google.com/maps?q=39.084234,66.838668&t=&z=18&ie=UTF8&iwloc=&output=embed",
                                  frameborder: "0",
                                  scrolling: "no",
                                  marginheight: "0",
                                  marginwidth: "0"
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(`<div class="text-center mt-2"${_scopeId2}>${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} \u2014 <strong${_scopeId2}>Kesh Med</strong></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mt-2 mb-4" }, [
                      createVNode(VImg, {
                        width: "150",
                        src: _imports_0,
                        alt: "Footer logo"
                      })
                    ]),
                    createVNode(VRow, { class: "mb-3" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "6",
                          sm: "4",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_app_footer_link, {
                              title: _ctx.$t("footer.social_links"),
                              links: unref(social_links)
                            }, null, 8, ["title", "links"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "6",
                          sm: "4",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_app_footer_link, {
                              title: _ctx.$t("footer.site_links"),
                              links: unref(navigation_links)
                            }, null, 8, ["title", "links"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column h-100 w-100 rounded overflow-hidden" }, [
                              createVNode("iframe", {
                                title: "geolocation",
                                width: "100%",
                                height: "240px",
                                id: "gmap_canvas",
                                src: "https://maps.google.com/maps?q=39.084234,66.838668&t=&z=18&ie=UTF8&iwloc=&output=embed",
                                frameborder: "0",
                                scrolling: "no",
                                marginheight: "0",
                                marginwidth: "0"
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode("div", { class: "text-center mt-2" }, [
                      createTextVNode(toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " \u2014 ", 1),
                      createVNode("strong", null, "Kesh Med")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, { class: "py-0" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mt-2 mb-4" }, [
                    createVNode(VImg, {
                      width: "150",
                      src: _imports_0,
                      alt: "Footer logo"
                    })
                  ]),
                  createVNode(VRow, { class: "mb-3" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "6",
                        sm: "4",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_app_footer_link, {
                            title: _ctx.$t("footer.social_links"),
                            links: unref(social_links)
                          }, null, 8, ["title", "links"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "6",
                        sm: "4",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_app_footer_link, {
                            title: _ctx.$t("footer.site_links"),
                            links: unref(navigation_links)
                          }, null, 8, ["title", "links"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column h-100 w-100 rounded overflow-hidden" }, [
                            createVNode("iframe", {
                              title: "geolocation",
                              width: "100%",
                              height: "240px",
                              id: "gmap_canvas",
                              src: "https://maps.google.com/maps?q=39.084234,66.838668&t=&z=18&ie=UTF8&iwloc=&output=embed",
                              frameborder: "0",
                              scrolling: "no",
                              marginheight: "0",
                              marginwidth: "0"
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode("div", { class: "text-center mt-2" }, [
                    createTextVNode(toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " \u2014 ", 1),
                    createVNode("strong", null, "Kesh Med")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index-layout",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(false);
    const init = async () => {
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_AppNavbar = _sfc_main$4;
      const _component_AppBar = _sfc_main$3;
      const _component_AppFooter = _sfc_main$1;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, { class: "min-h-screen" }, {
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
            _push2(ssrRenderComponent(_component_AppFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(_component_AppNavbar, {
                    drawer: drawer.value,
                    onCloseNav: ($event) => drawer.value = false
                  }, null, 8, ["drawer", "onCloseNav"]),
                  createVNode(_component_AppBar, {
                    onOpenNav: ($event) => drawer.value = true
                  }, null, 8, ["onOpenNav"])
                ]),
                _: 1
              }),
              createVNode(VMain, { class: "min-h-screen" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }),
              createVNode(_component_AppFooter)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/index-layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
