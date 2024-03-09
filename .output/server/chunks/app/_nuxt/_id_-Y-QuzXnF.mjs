import { _ as __nuxt_component_0 } from './client-only-xuX_fO1d.mjs';
import { _ as _sfc_main$1 } from './AppProductCard-MoPwMfbs.mjs';
import { V as VContainer, a as VRow, b as VCol, g as VCard, i as VCardText, a1 as VSkeletonLoader, l as VImg, N as VDivider, a2 as VCardActions, A as VSlideGroup, B as VSlideGroupItem, k as VAvatar, h as VCardTitle, z as VTable, G as VMenu, H as VList, m as VListItem, e as VBtn, q as VDialog, r as VForm, d as VTextField, y as VTextarea, o as VSelect, a0 as useState } from '../server.mjs';
import { u as useOrders } from './useOrders-_cxtZ5UV.mjs';
import { u as useProducts } from './useProducts-3EOAoU1e.mjs';
import { defineComponent, ref, reactive, withAsyncContext, resolveComponent, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, unref, withDirectives, vShow, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { a as useSeoMeta, u as useHead } from './index-rm2KKCow.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { c as countries } from './index-J2odrurN.mjs';
import './nuxt-link-SDkYvVE-.mjs';
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

const useLang = () => {
  const lang = useState("lang", () => "ru");
  return {
    lang
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    let __temp, __restore;
    const nameRule = [(v) => !!v || "asdf"];
    const { lang } = useLang();
    const { createOrder } = useOrders();
    const { getProductById, getAllProducts } = useProducts();
    const save_loading = ref(false);
    const route = useRoute();
    const validd = ref(false);
    const dialog = ref(false);
    const loading = ref(false);
    const currentImage = ref(0);
    const product = ref(null);
    const similarProduct = ref([]);
    const form = ref(null);
    const review = reactive({
      checked: false,
      first_name: "",
      last_name: "",
      message: "",
      country: 232,
      phone: ""
    });
    const init = async () => {
      var _a2;
      loading.value = true;
      try {
        if (!((_a2 = route.params) == null ? void 0 : _a2.id))
          return;
        const data = await getProductById(route.params.id, "expand=images,category,brand");
        product.value = data;
        getSimilar(data.category.id, data.brand.id);
      } catch (error) {
        alert({ "uz": "Bunday Qurilma topilmadi!", "ru": "\u0414\u0430\u043D\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E!", en: "This Equipment not found!" }[lang.value]);
        console.log(error);
      } finally {
        loading.value = false;
      }
    };
    const getSimilar = async (c, b) => {
      var _a2;
      const data = await getAllProducts(`?category=${c}&brand=${b}&page=1&limit=10&expand=images,brand`);
      similarProduct.value = (_a2 = data.results) == null ? void 0 : _a2.filter((p) => {
        var _a3;
        return p.slug !== ((_a3 = route.params) == null ? void 0 : _a3.id);
      });
    };
    const itemProps = (item) => {
      return {
        title: item.name,
        "append-avatar": item.flag
      };
    };
    const handleReview = async () => {
      var _a2, _b2;
      const { valid } = await ((_a2 = form.value) == null ? void 0 : _a2.validate());
      if (!valid)
        return;
      try {
        save_loading.value = true;
        await createOrder({ ...review, product: (_b2 = product.value) == null ? void 0 : _b2.id });
        dialog.value = false;
        alert({ "uz": "Muvaffaqiyatli yuborildi!", "ru": "\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E!", en: "Succesfully sended!" }[lang.value]);
        Object.assign(review, {
          checked: false,
          first_name: "",
          last_name: "",
          message: "",
          country: 232,
          phone: "",
          product: null
        });
      } catch (error) {
        console.log(error);
      } finally {
        save_loading.value = false;
      }
    };
    [__temp, __restore] = withAsyncContext(() => init()), await __temp, __restore();
    useSeoMeta({
      keywords: `${(_a = product.value) == null ? void 0 : _a.title_en}, ${(_b = product.value) == null ? void 0 : _b.title_ru}, ${(_c = product.value) == null ? void 0 : _c.title_uz}`,
      title: (_d = product.value) == null ? void 0 : _d.title_ru,
      ogTitle: () => {
        var _a2;
        return (_a2 = product.value) == null ? void 0 : _a2.title_ru;
      },
      ogDescription: (_e = product.value) == null ? void 0 : _e.description_ru,
      ogImage: (_h = (_g = (_f = product.value) == null ? void 0 : _f.images) == null ? void 0 : _g[0]) == null ? void 0 : _h.image,
      description: (_i = product.value) == null ? void 0 : _i.description_ru
    });
    useHead({
      meta: [
        { id: "og:price:amount", property: "og:price:amount", content: `${(_j = product.value) == null ? void 0 : _j.price} USD` },
        { id: "og:price:currency", property: "og:price:currency", content: "USD" },
        { id: "product:price:amount", property: "product:price:amount", content: `${(_k = product.value) == null ? void 0 : _k.price} USD` },
        { id: "product:price:currency", property: "product:price:currency", content: "USD" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_AppProductCard = _sfc_main$1;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2;
                if (_push3) {
                  if (!loading.value) {
                    _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            border: "",
                            flat: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardText, { class: "d-flex gap-1 align-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l, _m, _n, _o, _p;
                                    if (_push6) {
                                      if ((_c3 = (_b3 = (_a3 = product.value) == null ? void 0 : _a3.category) == null ? void 0 : _b3.parent) == null ? void 0 : _c3.parent) {
                                        _push6(ssrRenderComponent(_component_router_link, {
                                          class: "text-decoration-none text-black text-hover-link",
                                          to: `/products?category=${product.value.category.parent.parent.id}`
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(product.value.category.parent.parent[`name_${_ctx.$i18n.locale}`])} /`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(product.value.category.parent.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if ((_e2 = (_d3 = product.value) == null ? void 0 : _d3.category) == null ? void 0 : _e2.parent) {
                                        _push6(ssrRenderComponent(_component_router_link, {
                                          class: "text-decoration-none text-black text-hover-link",
                                          to: `/products?category=${(_f2 = product.value.category.parent) == null ? void 0 : _f2.id}`
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(product.value.category.parent[`name_${_ctx.$i18n.locale}`])} /`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(product.value.category.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if ((_h2 = (_g2 = product.value) == null ? void 0 : _g2.category) == null ? void 0 : _h2.id) {
                                        _push6(ssrRenderComponent(_component_router_link, {
                                          class: "text-decoration-none text-black text-hover-link",
                                          to: `/products?category=${product.value.category.id}`
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(product.value.category[`name_${_ctx.$i18n.locale}`])}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(product.value.category[`name_${_ctx.$i18n.locale}`]), 1)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        ((_k2 = (_j2 = (_i2 = product.value) == null ? void 0 : _i2.category) == null ? void 0 : _j2.parent) == null ? void 0 : _k2.parent) ? (openBlock(), createBlock(_component_router_link, {
                                          key: 0,
                                          class: "text-decoration-none text-black text-hover-link",
                                          to: `/products?category=${product.value.category.parent.parent.id}`
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.value.category.parent.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                          ]),
                                          _: 1
                                        }, 8, ["to"])) : createCommentVNode("", true),
                                        ((_m = (_l = product.value) == null ? void 0 : _l.category) == null ? void 0 : _m.parent) ? (openBlock(), createBlock(_component_router_link, {
                                          key: 1,
                                          class: "text-decoration-none text-black text-hover-link",
                                          to: `/products?category=${(_n = product.value.category.parent) == null ? void 0 : _n.id}`
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.value.category.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                          ]),
                                          _: 1
                                        }, 8, ["to"])) : createCommentVNode("", true),
                                        ((_p = (_o = product.value) == null ? void 0 : _o.category) == null ? void 0 : _p.id) ? (openBlock(), createBlock(_component_router_link, {
                                          key: 2,
                                          class: "text-decoration-none text-black text-hover-link",
                                          to: `/products?category=${product.value.category.id}`
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.value.category[`name_${_ctx.$i18n.locale}`]), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["to"])) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardText, { class: "d-flex gap-1 align-center" }, {
                                    default: withCtx(() => {
                                      var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2;
                                      return [
                                        ((_c3 = (_b3 = (_a3 = product.value) == null ? void 0 : _a3.category) == null ? void 0 : _b3.parent) == null ? void 0 : _c3.parent) ? (openBlock(), createBlock(_component_router_link, {
                                          key: 0,
                                          class: "text-decoration-none text-black text-hover-link",
                                          to: `/products?category=${product.value.category.parent.parent.id}`
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.value.category.parent.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                          ]),
                                          _: 1
                                        }, 8, ["to"])) : createCommentVNode("", true),
                                        ((_e2 = (_d3 = product.value) == null ? void 0 : _d3.category) == null ? void 0 : _e2.parent) ? (openBlock(), createBlock(_component_router_link, {
                                          key: 1,
                                          class: "text-decoration-none text-black text-hover-link",
                                          to: `/products?category=${(_f2 = product.value.category.parent) == null ? void 0 : _f2.id}`
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.value.category.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                          ]),
                                          _: 1
                                        }, 8, ["to"])) : createCommentVNode("", true),
                                        ((_h2 = (_g2 = product.value) == null ? void 0 : _g2.category) == null ? void 0 : _h2.id) ? (openBlock(), createBlock(_component_router_link, {
                                          key: 2,
                                          class: "text-decoration-none text-black text-hover-link",
                                          to: `/products?category=${product.value.category.id}`
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.value.category[`name_${_ctx.$i18n.locale}`]), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["to"])) : createCommentVNode("", true)
                                      ];
                                    }),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              border: "",
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, { class: "d-flex gap-1 align-center" }, {
                                  default: withCtx(() => {
                                    var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2;
                                    return [
                                      ((_c3 = (_b3 = (_a3 = product.value) == null ? void 0 : _a3.category) == null ? void 0 : _b3.parent) == null ? void 0 : _c3.parent) ? (openBlock(), createBlock(_component_router_link, {
                                        key: 0,
                                        class: "text-decoration-none text-black text-hover-link",
                                        to: `/products?category=${product.value.category.parent.parent.id}`
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(product.value.category.parent.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                        ]),
                                        _: 1
                                      }, 8, ["to"])) : createCommentVNode("", true),
                                      ((_e2 = (_d3 = product.value) == null ? void 0 : _d3.category) == null ? void 0 : _e2.parent) ? (openBlock(), createBlock(_component_router_link, {
                                        key: 1,
                                        class: "text-decoration-none text-black text-hover-link",
                                        to: `/products?category=${(_f2 = product.value.category.parent) == null ? void 0 : _f2.id}`
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(product.value.category.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                        ]),
                                        _: 1
                                      }, 8, ["to"])) : createCommentVNode("", true),
                                      ((_h2 = (_g2 = product.value) == null ? void 0 : _g2.category) == null ? void 0 : _h2.id) ? (openBlock(), createBlock(_component_router_link, {
                                        key: 2,
                                        class: "text-decoration-none text-black text-hover-link",
                                        to: `/products?category=${product.value.category.id}`
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(product.value.category[`name_${_ctx.$i18n.locale}`]), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["to"])) : createCommentVNode("", true)
                                    ];
                                  }),
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
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSkeletonLoader, {
                          height: "100%",
                          class: "h-100",
                          loading: loading.value,
                          type: "image,image,button,button,button,button"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                flat: "",
                                width: "100%",
                                height: "100%",
                                border: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j2;
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VImg, {
                                      alt: (_a3 = product.value) == null ? void 0 : _a3.title_ru,
                                      height: "500",
                                      width: "100%",
                                      src: ((_d3 = (_c3 = (_b3 = product.value) == null ? void 0 : _b3.images) == null ? void 0 : _c3[currentImage.value]) == null ? void 0 : _d3.image) || "/images/nophoto.jpg"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VDivider, null, null, _parent6, _scopeId5));
                                    if (((_e2 = product.value) == null ? void 0 : _e2.images.length) !== 0) {
                                      _push6(ssrRenderComponent(VCardActions, { class: "pa-0 d-flex justify-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_ClientOnly, null, {}, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_ClientOnly, null, {
                                                default: withCtx(() => [
                                                  createVNode(VSlideGroup, {
                                                    modelValue: currentImage.value,
                                                    "onUpdate:modelValue": ($event) => currentImage.value = $event,
                                                    class: "pa-2",
                                                    mandatory: "",
                                                    "selected-class": "bg-primary",
                                                    "show-arrows": ""
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a4;
                                                      return [
                                                        (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.images, (image, i) => {
                                                          return openBlock(), createBlock(VSlideGroupItem, { key: i }, {
                                                            default: withCtx(({ isSelected, toggle }) => [
                                                              createVNode(VAvatar, {
                                                                size: "50",
                                                                rounded: "",
                                                                onClick: toggle,
                                                                color: !isSelected ? "grey-lighten-3" : "primary",
                                                                class: "mx-1 pa-1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VImg, {
                                                                    alt: "thumb",
                                                                    src: (image == null ? void 0 : image.thumbnail) || "/images/nophoto.jpg",
                                                                    cover: ""
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["onClick", "color"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ];
                                                    }),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createVNode(VImg, {
                                        alt: (_f2 = product.value) == null ? void 0 : _f2.title_ru,
                                        height: "500",
                                        width: "100%",
                                        src: ((_i2 = (_h2 = (_g2 = product.value) == null ? void 0 : _g2.images) == null ? void 0 : _h2[currentImage.value]) == null ? void 0 : _i2.image) || "/images/nophoto.jpg"
                                      }, null, 8, ["alt", "src"]),
                                      createVNode(VDivider),
                                      ((_j2 = product.value) == null ? void 0 : _j2.images.length) !== 0 ? (openBlock(), createBlock(VCardActions, {
                                        key: 0,
                                        class: "pa-0 d-flex justify-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ClientOnly, null, {
                                            default: withCtx(() => [
                                              createVNode(VSlideGroup, {
                                                modelValue: currentImage.value,
                                                "onUpdate:modelValue": ($event) => currentImage.value = $event,
                                                class: "pa-2",
                                                mandatory: "",
                                                "selected-class": "bg-primary",
                                                "show-arrows": ""
                                              }, {
                                                default: withCtx(() => {
                                                  var _a4;
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.images, (image, i) => {
                                                      return openBlock(), createBlock(VSlideGroupItem, { key: i }, {
                                                        default: withCtx(({ isSelected, toggle }) => [
                                                          createVNode(VAvatar, {
                                                            size: "50",
                                                            rounded: "",
                                                            onClick: toggle,
                                                            color: !isSelected ? "grey-lighten-3" : "primary",
                                                            class: "mx-1 pa-1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VImg, {
                                                                alt: "thumb",
                                                                src: (image == null ? void 0 : image.thumbnail) || "/images/nophoto.jpg",
                                                                cover: ""
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["onClick", "color"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ];
                                                }),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, {
                                  flat: "",
                                  width: "100%",
                                  height: "100%",
                                  border: ""
                                }, {
                                  default: withCtx(() => {
                                    var _a3, _b3, _c3, _d3, _e2;
                                    return [
                                      createVNode(VImg, {
                                        alt: (_a3 = product.value) == null ? void 0 : _a3.title_ru,
                                        height: "500",
                                        width: "100%",
                                        src: ((_d3 = (_c3 = (_b3 = product.value) == null ? void 0 : _b3.images) == null ? void 0 : _c3[currentImage.value]) == null ? void 0 : _d3.image) || "/images/nophoto.jpg"
                                      }, null, 8, ["alt", "src"]),
                                      createVNode(VDivider),
                                      ((_e2 = product.value) == null ? void 0 : _e2.images.length) !== 0 ? (openBlock(), createBlock(VCardActions, {
                                        key: 0,
                                        class: "pa-0 d-flex justify-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ClientOnly, null, {
                                            default: withCtx(() => [
                                              createVNode(VSlideGroup, {
                                                modelValue: currentImage.value,
                                                "onUpdate:modelValue": ($event) => currentImage.value = $event,
                                                class: "pa-2",
                                                mandatory: "",
                                                "selected-class": "bg-primary",
                                                "show-arrows": ""
                                              }, {
                                                default: withCtx(() => {
                                                  var _a4;
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.images, (image, i) => {
                                                      return openBlock(), createBlock(VSlideGroupItem, { key: i }, {
                                                        default: withCtx(({ isSelected, toggle }) => [
                                                          createVNode(VAvatar, {
                                                            size: "50",
                                                            rounded: "",
                                                            onClick: toggle,
                                                            color: !isSelected ? "grey-lighten-3" : "primary",
                                                            class: "mx-1 pa-1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VImg, {
                                                                alt: "thumb",
                                                                src: (image == null ? void 0 : image.thumbnail) || "/images/nophoto.jpg",
                                                                cover: ""
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["onClick", "color"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ];
                                                }),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSkeletonLoader, {
                            height: "100%",
                            class: "h-100",
                            loading: loading.value,
                            type: "image,image,button,button,button,button"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                flat: "",
                                width: "100%",
                                height: "100%",
                                border: ""
                              }, {
                                default: withCtx(() => {
                                  var _a3, _b3, _c3, _d3, _e2;
                                  return [
                                    createVNode(VImg, {
                                      alt: (_a3 = product.value) == null ? void 0 : _a3.title_ru,
                                      height: "500",
                                      width: "100%",
                                      src: ((_d3 = (_c3 = (_b3 = product.value) == null ? void 0 : _b3.images) == null ? void 0 : _c3[currentImage.value]) == null ? void 0 : _d3.image) || "/images/nophoto.jpg"
                                    }, null, 8, ["alt", "src"]),
                                    createVNode(VDivider),
                                    ((_e2 = product.value) == null ? void 0 : _e2.images.length) !== 0 ? (openBlock(), createBlock(VCardActions, {
                                      key: 0,
                                      class: "pa-0 d-flex justify-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ClientOnly, null, {
                                          default: withCtx(() => [
                                            createVNode(VSlideGroup, {
                                              modelValue: currentImage.value,
                                              "onUpdate:modelValue": ($event) => currentImage.value = $event,
                                              class: "pa-2",
                                              mandatory: "",
                                              "selected-class": "bg-primary",
                                              "show-arrows": ""
                                            }, {
                                              default: withCtx(() => {
                                                var _a4;
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.images, (image, i) => {
                                                    return openBlock(), createBlock(VSlideGroupItem, { key: i }, {
                                                      default: withCtx(({ isSelected, toggle }) => [
                                                        createVNode(VAvatar, {
                                                          size: "50",
                                                          rounded: "",
                                                          onClick: toggle,
                                                          color: !isSelected ? "grey-lighten-3" : "primary",
                                                          class: "mx-1 pa-1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VImg, {
                                                              alt: "thumb",
                                                              src: (image == null ? void 0 : image.thumbnail) || "/images/nophoto.jpg",
                                                              cover: ""
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick", "color"])
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ];
                                              }),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSkeletonLoader, {
                          loading: loading.value,
                          type: "article, avatar, text, paragraph",
                          "min-height": "100%",
                          color: "transparent",
                          width: "100%"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                variant: "text",
                                width: "100%"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, { class: "px-0 pt-0" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        var _a3, _b3;
                                        if (_push7) {
                                          _push7(`${ssrInterpolate((_a3 = product.value) == null ? void 0 : _a3[`title_${_ctx.$i18n.locale}`])}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString((_b3 = product.value) == null ? void 0 : _b3[`title_${_ctx.$i18n.locale}`]), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, { class: "pb-0 pt-2 px-0 d-flex justify-space-between align-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        var _a3, _b3;
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}><span class="text-h5 text-primary font-weight-medium"${_scopeId6}>${ssrInterpolate((_a3 = product.value) == null ? void 0 : _a3.price)} $</span></div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode("span", { class: "text-h5 text-primary font-weight-medium" }, toDisplayString((_b3 = product.value) == null ? void 0 : _b3.price) + " $", 1)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, { class: "px-0 pb-0" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>${ssrInterpolate(_ctx.$t("products.information"))}</span>`);
                                          _push7(ssrRenderComponent(VTable, {
                                            density: "compact",
                                            hover: "",
                                            class: "rounded mt-3 border"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l, _m, _n, _o, _p, _q, _r, _s, _t;
                                              if (_push8) {
                                                _push8(`<tbody${_scopeId7}><tr${_scopeId7}><td${_scopeId7}>${ssrInterpolate(_ctx.$t("products.category"))}</td><td class="text-right"${_scopeId7}>${ssrInterpolate((_a3 = product.value) == null ? void 0 : _a3.category[`name_${_ctx.$i18n.locale}`])}</td></tr><tr${_scopeId7}><td${_scopeId7}>${ssrInterpolate(_ctx.$t("products.condition"))}</td><td class="text-right"${_scopeId7}>${ssrInterpolate(_ctx.$t("condition." + ((_b3 = product.value) == null ? void 0 : _b3.condition)))}</td></tr><tr${_scopeId7}><td${_scopeId7}>${ssrInterpolate(_ctx.$t("products.year"))}</td><td class="text-right"${_scopeId7}>${ssrInterpolate((_c3 = product.value) == null ? void 0 : _c3.year)}</td></tr><tr${_scopeId7}><td${_scopeId7}>${ssrInterpolate(_ctx.$t("products.shipping"))}</td><td class="text-right"${_scopeId7}><div class="d-flex align-center gap-1 justify-end"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VAvatar, { size: "30" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    var _a4, _b4, _c4, _d4;
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VImg, {
                                                        alt: "flag",
                                                        cover: "",
                                                        src: (_b4 = unref(countries)[(_a4 = product.value) == null ? void 0 : _a4.shipping_from]) == null ? void 0 : _b4.flag
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VImg, {
                                                          alt: "flag",
                                                          cover: "",
                                                          src: (_d4 = unref(countries)[(_c4 = product.value) == null ? void 0 : _c4.shipping_from]) == null ? void 0 : _d4.flag
                                                        }, null, 8, ["src"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<span${_scopeId7}>${ssrInterpolate((_e2 = unref(countries)[(_d3 = product.value) == null ? void 0 : _d3.shipping_from]) == null ? void 0 : _e2.name)}</span></div></td></tr><tr${_scopeId7}><td${_scopeId7}>${ssrInterpolate(_ctx.$t("products.sales_area"))}</td><td class="text-right"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VMenu, {
                                                  transition: "fade-transition",
                                                  "open-on-hover": true
                                                }, {
                                                  activator: withCtx(({ props }, _push9, _parent9, _scopeId8) => {
                                                    var _a4, _b4, _c4, _d4;
                                                    if (_push9) {
                                                      _push9(`<span${ssrRenderAttrs(props)}${_scopeId8}>${ssrInterpolate((_b4 = (_a4 = product.value) == null ? void 0 : _a4.sales_areas) == null ? void 0 : _b4.length)} \u0441\u0442\u0440\u0430\u043D</span>`);
                                                    } else {
                                                      return [
                                                        createVNode("span", props, toDisplayString((_d4 = (_c4 = product.value) == null ? void 0 : _c4.sales_areas) == null ? void 0 : _d4.length) + " \u0441\u0442\u0440\u0430\u043D", 17)
                                                      ];
                                                    }
                                                  }),
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VList, {
                                                        nav: "",
                                                        density: "compact"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          var _a4, _b4;
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList((_a4 = product.value) == null ? void 0 : _a4.sales_areas, (cn, i) => {
                                                              _push10(ssrRenderComponent(VListItem, { key: i }, {
                                                                prepend: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VAvatar, { rounded: "" }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        var _a5, _b5;
                                                                        if (_push12) {
                                                                          _push12(ssrRenderComponent(VImg, {
                                                                            alt: "flag",
                                                                            src: (_a5 = unref(countries)[cn]) == null ? void 0 : _a5.flag
                                                                          }, null, _parent12, _scopeId11));
                                                                        } else {
                                                                          return [
                                                                            createVNode(VImg, {
                                                                              alt: "flag",
                                                                              src: (_b5 = unref(countries)[cn]) == null ? void 0 : _b5.flag
                                                                            }, null, 8, ["src"])
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VAvatar, { rounded: "" }, {
                                                                        default: withCtx(() => {
                                                                          var _a5;
                                                                          return [
                                                                            createVNode(VImg, {
                                                                              alt: "flag",
                                                                              src: (_a5 = unref(countries)[cn]) == null ? void 0 : _a5.flag
                                                                            }, null, 8, ["src"])
                                                                          ];
                                                                        }),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ];
                                                                  }
                                                                }),
                                                                title: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  var _a5, _b5;
                                                                  if (_push11) {
                                                                    _push11(`${ssrInterpolate((_a5 = unref(countries)[cn]) == null ? void 0 : _a5.name)}`);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(toDisplayString((_b5 = unref(countries)[cn]) == null ? void 0 : _b5.name), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(true), createBlock(Fragment, null, renderList((_b4 = product.value) == null ? void 0 : _b4.sales_areas, (cn, i) => {
                                                                return openBlock(), createBlock(VListItem, { key: i }, {
                                                                  prepend: withCtx(() => [
                                                                    createVNode(VAvatar, { rounded: "" }, {
                                                                      default: withCtx(() => {
                                                                        var _a5;
                                                                        return [
                                                                          createVNode(VImg, {
                                                                            alt: "flag",
                                                                            src: (_a5 = unref(countries)[cn]) == null ? void 0 : _a5.flag
                                                                          }, null, 8, ["src"])
                                                                        ];
                                                                      }),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  title: withCtx(() => {
                                                                    var _a5;
                                                                    return [
                                                                      createTextVNode(toDisplayString((_a5 = unref(countries)[cn]) == null ? void 0 : _a5.name), 1)
                                                                    ];
                                                                  }),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VList, {
                                                          nav: "",
                                                          density: "compact"
                                                        }, {
                                                          default: withCtx(() => {
                                                            var _a4;
                                                            return [
                                                              (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.sales_areas, (cn, i) => {
                                                                return openBlock(), createBlock(VListItem, { key: i }, {
                                                                  prepend: withCtx(() => [
                                                                    createVNode(VAvatar, { rounded: "" }, {
                                                                      default: withCtx(() => {
                                                                        var _a5;
                                                                        return [
                                                                          createVNode(VImg, {
                                                                            alt: "flag",
                                                                            src: (_a5 = unref(countries)[cn]) == null ? void 0 : _a5.flag
                                                                          }, null, 8, ["src"])
                                                                        ];
                                                                      }),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  title: withCtx(() => {
                                                                    var _a5;
                                                                    return [
                                                                      createTextVNode(toDisplayString((_a5 = unref(countries)[cn]) == null ? void 0 : _a5.name), 1)
                                                                    ];
                                                                  }),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</td></tr><tr${_scopeId7}><td${_scopeId7}>${ssrInterpolate(_ctx.$t("products.brand"))}</td><td class="text-primary text-right"${_scopeId7}>${ssrInterpolate((_g2 = (_f2 = product.value) == null ? void 0 : _f2.brand) == null ? void 0 : _g2.name)}</td></tr><tr${_scopeId7}><td${_scopeId7}>${ssrInterpolate(_ctx.$t("products.model"))}</td><td class="text-right"${_scopeId7}>${ssrInterpolate((_h2 = product.value) == null ? void 0 : _h2.model)}</td></tr><tr${_scopeId7}><td${_scopeId7}>${ssrInterpolate(_ctx.$t("products.warranty"))}</td><td class="text-right"${_scopeId7}>${ssrInterpolate((_i2 = product.value) == null ? void 0 : _i2.warranty)}</td></tr><tr${_scopeId7}><td${_scopeId7}>${ssrInterpolate(_ctx.$t("products.created"))}</td><td class="text-right"${_scopeId7}>${ssrInterpolate(new Date((_j2 = product.value) == null ? void 0 : _j2.created_at).toLocaleDateString())}</td></tr></tbody>`);
                                              } else {
                                                return [
                                                  createVNode("tbody", null, [
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.category")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString((_k2 = product.value) == null ? void 0 : _k2.category[`name_${_ctx.$i18n.locale}`]), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.condition")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString(_ctx.$t("condition." + ((_l = product.value) == null ? void 0 : _l.condition))), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.year")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString((_m = product.value) == null ? void 0 : _m.year), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.shipping")), 1),
                                                      createVNode("td", { class: "text-right" }, [
                                                        createVNode("div", { class: "d-flex align-center gap-1 justify-end" }, [
                                                          createVNode(VAvatar, { size: "30" }, {
                                                            default: withCtx(() => {
                                                              var _a4, _b4;
                                                              return [
                                                                createVNode(VImg, {
                                                                  alt: "flag",
                                                                  cover: "",
                                                                  src: (_b4 = unref(countries)[(_a4 = product.value) == null ? void 0 : _a4.shipping_from]) == null ? void 0 : _b4.flag
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }),
                                                            _: 1
                                                          }),
                                                          createVNode("span", null, toDisplayString((_o = unref(countries)[(_n = product.value) == null ? void 0 : _n.shipping_from]) == null ? void 0 : _o.name), 1)
                                                        ])
                                                      ])
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.sales_area")), 1),
                                                      createVNode("td", { class: "text-right" }, [
                                                        createVNode(VMenu, {
                                                          transition: "fade-transition",
                                                          "open-on-hover": true
                                                        }, {
                                                          activator: withCtx(({ props }) => {
                                                            var _a4, _b4;
                                                            return [
                                                              createVNode("span", props, toDisplayString((_b4 = (_a4 = product.value) == null ? void 0 : _a4.sales_areas) == null ? void 0 : _b4.length) + " \u0441\u0442\u0440\u0430\u043D", 17)
                                                            ];
                                                          }),
                                                          default: withCtx(() => [
                                                            createVNode(VList, {
                                                              nav: "",
                                                              density: "compact"
                                                            }, {
                                                              default: withCtx(() => {
                                                                var _a4;
                                                                return [
                                                                  (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.sales_areas, (cn, i) => {
                                                                    return openBlock(), createBlock(VListItem, { key: i }, {
                                                                      prepend: withCtx(() => [
                                                                        createVNode(VAvatar, { rounded: "" }, {
                                                                          default: withCtx(() => {
                                                                            var _a5;
                                                                            return [
                                                                              createVNode(VImg, {
                                                                                alt: "flag",
                                                                                src: (_a5 = unref(countries)[cn]) == null ? void 0 : _a5.flag
                                                                              }, null, 8, ["src"])
                                                                            ];
                                                                          }),
                                                                          _: 2
                                                                        }, 1024)
                                                                      ]),
                                                                      title: withCtx(() => {
                                                                        var _a5;
                                                                        return [
                                                                          createTextVNode(toDisplayString((_a5 = unref(countries)[cn]) == null ? void 0 : _a5.name), 1)
                                                                        ];
                                                                      }),
                                                                      _: 2
                                                                    }, 1024);
                                                                  }), 128))
                                                                ];
                                                              }),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ])
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.brand")), 1),
                                                      createVNode("td", { class: "text-primary text-right" }, toDisplayString((_q = (_p = product.value) == null ? void 0 : _p.brand) == null ? void 0 : _q.name), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.model")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString((_r = product.value) == null ? void 0 : _r.model), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.warranty")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString((_s = product.value) == null ? void 0 : _s.warranty), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.created")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString(new Date((_t = product.value) == null ? void 0 : _t.created_at).toLocaleDateString()), 1)
                                                    ])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("span", null, toDisplayString(_ctx.$t("products.information")), 1),
                                            createVNode(VTable, {
                                              density: "compact",
                                              hover: "",
                                              class: "rounded mt-3 border"
                                            }, {
                                              default: withCtx(() => {
                                                var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j2;
                                                return [
                                                  createVNode("tbody", null, [
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.category")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3.category[`name_${_ctx.$i18n.locale}`]), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.condition")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString(_ctx.$t("condition." + ((_b3 = product.value) == null ? void 0 : _b3.condition))), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.year")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString((_c3 = product.value) == null ? void 0 : _c3.year), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.shipping")), 1),
                                                      createVNode("td", { class: "text-right" }, [
                                                        createVNode("div", { class: "d-flex align-center gap-1 justify-end" }, [
                                                          createVNode(VAvatar, { size: "30" }, {
                                                            default: withCtx(() => {
                                                              var _a4, _b4;
                                                              return [
                                                                createVNode(VImg, {
                                                                  alt: "flag",
                                                                  cover: "",
                                                                  src: (_b4 = unref(countries)[(_a4 = product.value) == null ? void 0 : _a4.shipping_from]) == null ? void 0 : _b4.flag
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }),
                                                            _: 1
                                                          }),
                                                          createVNode("span", null, toDisplayString((_e2 = unref(countries)[(_d3 = product.value) == null ? void 0 : _d3.shipping_from]) == null ? void 0 : _e2.name), 1)
                                                        ])
                                                      ])
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.sales_area")), 1),
                                                      createVNode("td", { class: "text-right" }, [
                                                        createVNode(VMenu, {
                                                          transition: "fade-transition",
                                                          "open-on-hover": true
                                                        }, {
                                                          activator: withCtx(({ props }) => {
                                                            var _a4, _b4;
                                                            return [
                                                              createVNode("span", props, toDisplayString((_b4 = (_a4 = product.value) == null ? void 0 : _a4.sales_areas) == null ? void 0 : _b4.length) + " \u0441\u0442\u0440\u0430\u043D", 17)
                                                            ];
                                                          }),
                                                          default: withCtx(() => [
                                                            createVNode(VList, {
                                                              nav: "",
                                                              density: "compact"
                                                            }, {
                                                              default: withCtx(() => {
                                                                var _a4;
                                                                return [
                                                                  (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.sales_areas, (cn, i) => {
                                                                    return openBlock(), createBlock(VListItem, { key: i }, {
                                                                      prepend: withCtx(() => [
                                                                        createVNode(VAvatar, { rounded: "" }, {
                                                                          default: withCtx(() => {
                                                                            var _a5;
                                                                            return [
                                                                              createVNode(VImg, {
                                                                                alt: "flag",
                                                                                src: (_a5 = unref(countries)[cn]) == null ? void 0 : _a5.flag
                                                                              }, null, 8, ["src"])
                                                                            ];
                                                                          }),
                                                                          _: 2
                                                                        }, 1024)
                                                                      ]),
                                                                      title: withCtx(() => {
                                                                        var _a5;
                                                                        return [
                                                                          createTextVNode(toDisplayString((_a5 = unref(countries)[cn]) == null ? void 0 : _a5.name), 1)
                                                                        ];
                                                                      }),
                                                                      _: 2
                                                                    }, 1024);
                                                                  }), 128))
                                                                ];
                                                              }),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ])
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.brand")), 1),
                                                      createVNode("td", { class: "text-primary text-right" }, toDisplayString((_g2 = (_f2 = product.value) == null ? void 0 : _f2.brand) == null ? void 0 : _g2.name), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.model")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString((_h2 = product.value) == null ? void 0 : _h2.model), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.warranty")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString((_i2 = product.value) == null ? void 0 : _i2.warranty), 1)
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", null, toDisplayString(_ctx.$t("products.created")), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString(new Date((_j2 = product.value) == null ? void 0 : _j2.created_at).toLocaleDateString()), 1)
                                                    ])
                                                  ])
                                                ];
                                              }),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, { class: "px-0" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>${ssrInterpolate(_ctx.$t("products.contact_us"))}</span>`);
                                          _push7(ssrRenderComponent(VRow, { class: "pa-2 mt-0" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "6",
                                                  md: "4",
                                                  class: "pa-1"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VBtn, {
                                                        href: "https://t.me/Keshmed37",
                                                        height: "35",
                                                        "prepend-icon": "mdi-send",
                                                        block: "",
                                                        color: "#0088cc",
                                                        variant: "flat",
                                                        class: "text-none"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`${ssrInterpolate(_ctx.$t("products.telegram"))}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(_ctx.$t("products.telegram")), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VBtn, {
                                                          href: "https://t.me/Keshmed37",
                                                          height: "35",
                                                          "prepend-icon": "mdi-send",
                                                          block: "",
                                                          color: "#0088cc",
                                                          variant: "flat",
                                                          class: "text-none"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(_ctx.$t("products.telegram")), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "6",
                                                  md: "4",
                                                  class: "pa-1"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VBtn, {
                                                        href: "tel:+998908893700",
                                                        height: "35",
                                                        "prepend-icon": "mdi-phone",
                                                        block: "",
                                                        color: "green",
                                                        variant: "flat",
                                                        class: "text-none"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`${ssrInterpolate(_ctx.$t("products.call"))}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(_ctx.$t("products.call")), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VBtn, {
                                                          href: "tel:+998908893700",
                                                          height: "35",
                                                          "prepend-icon": "mdi-phone",
                                                          block: "",
                                                          color: "green",
                                                          variant: "flat",
                                                          class: "text-none"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(_ctx.$t("products.call")), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  md: "4",
                                                  class: "pa-1"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VBtn, {
                                                        onClick: ($event) => dialog.value = true,
                                                        height: "35",
                                                        "prepend-icon": "mdi-cart",
                                                        block: "",
                                                        color: "primary",
                                                        variant: "flat",
                                                        class: "text-none"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`${ssrInterpolate(_ctx.$t("products.order"))}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(_ctx.$t("products.order")), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VBtn, {
                                                          onClick: ($event) => dialog.value = true,
                                                          height: "35",
                                                          "prepend-icon": "mdi-cart",
                                                          block: "",
                                                          color: "primary",
                                                          variant: "flat",
                                                          class: "text-none"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(_ctx.$t("products.order")), 1)
                                                          ]),
                                                          _: 1
                                                        }, 8, ["onClick"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, {
                                                    cols: "6",
                                                    md: "4",
                                                    class: "pa-1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        href: "https://t.me/Keshmed37",
                                                        height: "35",
                                                        "prepend-icon": "mdi-send",
                                                        block: "",
                                                        color: "#0088cc",
                                                        variant: "flat",
                                                        class: "text-none"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(_ctx.$t("products.telegram")), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "6",
                                                    md: "4",
                                                    class: "pa-1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        href: "tel:+998908893700",
                                                        height: "35",
                                                        "prepend-icon": "mdi-phone",
                                                        block: "",
                                                        color: "green",
                                                        variant: "flat",
                                                        class: "text-none"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(_ctx.$t("products.call")), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "4",
                                                    class: "pa-1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        onClick: ($event) => dialog.value = true,
                                                        height: "35",
                                                        "prepend-icon": "mdi-cart",
                                                        block: "",
                                                        color: "primary",
                                                        variant: "flat",
                                                        class: "text-none"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(_ctx.$t("products.order")), 1)
                                                        ]),
                                                        _: 1
                                                      }, 8, ["onClick"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("span", null, toDisplayString(_ctx.$t("products.contact_us")), 1),
                                            createVNode(VRow, { class: "pa-2 mt-0" }, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "6",
                                                  md: "4",
                                                  class: "pa-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      href: "https://t.me/Keshmed37",
                                                      height: "35",
                                                      "prepend-icon": "mdi-send",
                                                      block: "",
                                                      color: "#0088cc",
                                                      variant: "flat",
                                                      class: "text-none"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.telegram")), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "6",
                                                  md: "4",
                                                  class: "pa-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      href: "tel:+998908893700",
                                                      height: "35",
                                                      "prepend-icon": "mdi-phone",
                                                      block: "",
                                                      color: "green",
                                                      variant: "flat",
                                                      class: "text-none"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.call")), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "4",
                                                  class: "pa-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      onClick: ($event) => dialog.value = true,
                                                      height: "35",
                                                      "prepend-icon": "mdi-cart",
                                                      block: "",
                                                      color: "primary",
                                                      variant: "flat",
                                                      class: "text-none"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.order")), 1)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick"])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, { class: "px-0 pt-0" }, {
                                        default: withCtx(() => {
                                          var _a3;
                                          return [
                                            createTextVNode(toDisplayString((_a3 = product.value) == null ? void 0 : _a3[`title_${_ctx.$i18n.locale}`]), 1)
                                          ];
                                        }),
                                        _: 1
                                      }),
                                      createVNode(VCardText, { class: "pb-0 pt-2 px-0 d-flex justify-space-between align-center" }, {
                                        default: withCtx(() => {
                                          var _a3;
                                          return [
                                            createVNode("div", null, [
                                              createVNode("span", { class: "text-h5 text-primary font-weight-medium" }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3.price) + " $", 1)
                                            ])
                                          ];
                                        }),
                                        _: 1
                                      }),
                                      createVNode(VCardText, { class: "px-0 pb-0" }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(_ctx.$t("products.information")), 1),
                                          createVNode(VTable, {
                                            density: "compact",
                                            hover: "",
                                            class: "rounded mt-3 border"
                                          }, {
                                            default: withCtx(() => {
                                              var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j2;
                                              return [
                                                createVNode("tbody", null, [
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, toDisplayString(_ctx.$t("products.category")), 1),
                                                    createVNode("td", { class: "text-right" }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3.category[`name_${_ctx.$i18n.locale}`]), 1)
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, toDisplayString(_ctx.$t("products.condition")), 1),
                                                    createVNode("td", { class: "text-right" }, toDisplayString(_ctx.$t("condition." + ((_b3 = product.value) == null ? void 0 : _b3.condition))), 1)
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, toDisplayString(_ctx.$t("products.year")), 1),
                                                    createVNode("td", { class: "text-right" }, toDisplayString((_c3 = product.value) == null ? void 0 : _c3.year), 1)
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, toDisplayString(_ctx.$t("products.shipping")), 1),
                                                    createVNode("td", { class: "text-right" }, [
                                                      createVNode("div", { class: "d-flex align-center gap-1 justify-end" }, [
                                                        createVNode(VAvatar, { size: "30" }, {
                                                          default: withCtx(() => {
                                                            var _a4, _b4;
                                                            return [
                                                              createVNode(VImg, {
                                                                alt: "flag",
                                                                cover: "",
                                                                src: (_b4 = unref(countries)[(_a4 = product.value) == null ? void 0 : _a4.shipping_from]) == null ? void 0 : _b4.flag
                                                              }, null, 8, ["src"])
                                                            ];
                                                          }),
                                                          _: 1
                                                        }),
                                                        createVNode("span", null, toDisplayString((_e2 = unref(countries)[(_d3 = product.value) == null ? void 0 : _d3.shipping_from]) == null ? void 0 : _e2.name), 1)
                                                      ])
                                                    ])
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, toDisplayString(_ctx.$t("products.sales_area")), 1),
                                                    createVNode("td", { class: "text-right" }, [
                                                      createVNode(VMenu, {
                                                        transition: "fade-transition",
                                                        "open-on-hover": true
                                                      }, {
                                                        activator: withCtx(({ props }) => {
                                                          var _a4, _b4;
                                                          return [
                                                            createVNode("span", props, toDisplayString((_b4 = (_a4 = product.value) == null ? void 0 : _a4.sales_areas) == null ? void 0 : _b4.length) + " \u0441\u0442\u0440\u0430\u043D", 17)
                                                          ];
                                                        }),
                                                        default: withCtx(() => [
                                                          createVNode(VList, {
                                                            nav: "",
                                                            density: "compact"
                                                          }, {
                                                            default: withCtx(() => {
                                                              var _a4;
                                                              return [
                                                                (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.sales_areas, (cn, i) => {
                                                                  return openBlock(), createBlock(VListItem, { key: i }, {
                                                                    prepend: withCtx(() => [
                                                                      createVNode(VAvatar, { rounded: "" }, {
                                                                        default: withCtx(() => {
                                                                          var _a5;
                                                                          return [
                                                                            createVNode(VImg, {
                                                                              alt: "flag",
                                                                              src: (_a5 = unref(countries)[cn]) == null ? void 0 : _a5.flag
                                                                            }, null, 8, ["src"])
                                                                          ];
                                                                        }),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ]),
                                                                    title: withCtx(() => {
                                                                      var _a5;
                                                                      return [
                                                                        createTextVNode(toDisplayString((_a5 = unref(countries)[cn]) == null ? void 0 : _a5.name), 1)
                                                                      ];
                                                                    }),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ];
                                                            }),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ])
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, toDisplayString(_ctx.$t("products.brand")), 1),
                                                    createVNode("td", { class: "text-primary text-right" }, toDisplayString((_g2 = (_f2 = product.value) == null ? void 0 : _f2.brand) == null ? void 0 : _g2.name), 1)
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, toDisplayString(_ctx.$t("products.model")), 1),
                                                    createVNode("td", { class: "text-right" }, toDisplayString((_h2 = product.value) == null ? void 0 : _h2.model), 1)
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, toDisplayString(_ctx.$t("products.warranty")), 1),
                                                    createVNode("td", { class: "text-right" }, toDisplayString((_i2 = product.value) == null ? void 0 : _i2.warranty), 1)
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, toDisplayString(_ctx.$t("products.created")), 1),
                                                    createVNode("td", { class: "text-right" }, toDisplayString(new Date((_j2 = product.value) == null ? void 0 : _j2.created_at).toLocaleDateString()), 1)
                                                  ])
                                                ])
                                              ];
                                            }),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, { class: "px-0" }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(_ctx.$t("products.contact_us")), 1),
                                          createVNode(VRow, { class: "pa-2 mt-0" }, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "6",
                                                md: "4",
                                                class: "pa-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    href: "https://t.me/Keshmed37",
                                                    height: "35",
                                                    "prepend-icon": "mdi-send",
                                                    block: "",
                                                    color: "#0088cc",
                                                    variant: "flat",
                                                    class: "text-none"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.telegram")), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "6",
                                                md: "4",
                                                class: "pa-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    href: "tel:+998908893700",
                                                    height: "35",
                                                    "prepend-icon": "mdi-phone",
                                                    block: "",
                                                    color: "green",
                                                    variant: "flat",
                                                    class: "text-none"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.call")), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "4",
                                                class: "pa-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    onClick: ($event) => dialog.value = true,
                                                    height: "35",
                                                    "prepend-icon": "mdi-cart",
                                                    block: "",
                                                    color: "primary",
                                                    variant: "flat",
                                                    class: "text-none"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.order")), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, {
                                  variant: "text",
                                  width: "100%"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "px-0 pt-0" }, {
                                      default: withCtx(() => {
                                        var _a3;
                                        return [
                                          createTextVNode(toDisplayString((_a3 = product.value) == null ? void 0 : _a3[`title_${_ctx.$i18n.locale}`]), 1)
                                        ];
                                      }),
                                      _: 1
                                    }),
                                    createVNode(VCardText, { class: "pb-0 pt-2 px-0 d-flex justify-space-between align-center" }, {
                                      default: withCtx(() => {
                                        var _a3;
                                        return [
                                          createVNode("div", null, [
                                            createVNode("span", { class: "text-h5 text-primary font-weight-medium" }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3.price) + " $", 1)
                                          ])
                                        ];
                                      }),
                                      _: 1
                                    }),
                                    createVNode(VCardText, { class: "px-0 pb-0" }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(_ctx.$t("products.information")), 1),
                                        createVNode(VTable, {
                                          density: "compact",
                                          hover: "",
                                          class: "rounded mt-3 border"
                                        }, {
                                          default: withCtx(() => {
                                            var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j2;
                                            return [
                                              createVNode("tbody", null, [
                                                createVNode("tr", null, [
                                                  createVNode("td", null, toDisplayString(_ctx.$t("products.category")), 1),
                                                  createVNode("td", { class: "text-right" }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3.category[`name_${_ctx.$i18n.locale}`]), 1)
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, toDisplayString(_ctx.$t("products.condition")), 1),
                                                  createVNode("td", { class: "text-right" }, toDisplayString(_ctx.$t("condition." + ((_b3 = product.value) == null ? void 0 : _b3.condition))), 1)
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, toDisplayString(_ctx.$t("products.year")), 1),
                                                  createVNode("td", { class: "text-right" }, toDisplayString((_c3 = product.value) == null ? void 0 : _c3.year), 1)
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, toDisplayString(_ctx.$t("products.shipping")), 1),
                                                  createVNode("td", { class: "text-right" }, [
                                                    createVNode("div", { class: "d-flex align-center gap-1 justify-end" }, [
                                                      createVNode(VAvatar, { size: "30" }, {
                                                        default: withCtx(() => {
                                                          var _a4, _b4;
                                                          return [
                                                            createVNode(VImg, {
                                                              alt: "flag",
                                                              cover: "",
                                                              src: (_b4 = unref(countries)[(_a4 = product.value) == null ? void 0 : _a4.shipping_from]) == null ? void 0 : _b4.flag
                                                            }, null, 8, ["src"])
                                                          ];
                                                        }),
                                                        _: 1
                                                      }),
                                                      createVNode("span", null, toDisplayString((_e2 = unref(countries)[(_d3 = product.value) == null ? void 0 : _d3.shipping_from]) == null ? void 0 : _e2.name), 1)
                                                    ])
                                                  ])
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, toDisplayString(_ctx.$t("products.sales_area")), 1),
                                                  createVNode("td", { class: "text-right" }, [
                                                    createVNode(VMenu, {
                                                      transition: "fade-transition",
                                                      "open-on-hover": true
                                                    }, {
                                                      activator: withCtx(({ props }) => {
                                                        var _a4, _b4;
                                                        return [
                                                          createVNode("span", props, toDisplayString((_b4 = (_a4 = product.value) == null ? void 0 : _a4.sales_areas) == null ? void 0 : _b4.length) + " \u0441\u0442\u0440\u0430\u043D", 17)
                                                        ];
                                                      }),
                                                      default: withCtx(() => [
                                                        createVNode(VList, {
                                                          nav: "",
                                                          density: "compact"
                                                        }, {
                                                          default: withCtx(() => {
                                                            var _a4;
                                                            return [
                                                              (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.sales_areas, (cn, i) => {
                                                                return openBlock(), createBlock(VListItem, { key: i }, {
                                                                  prepend: withCtx(() => [
                                                                    createVNode(VAvatar, { rounded: "" }, {
                                                                      default: withCtx(() => {
                                                                        var _a5;
                                                                        return [
                                                                          createVNode(VImg, {
                                                                            alt: "flag",
                                                                            src: (_a5 = unref(countries)[cn]) == null ? void 0 : _a5.flag
                                                                          }, null, 8, ["src"])
                                                                        ];
                                                                      }),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  title: withCtx(() => {
                                                                    var _a5;
                                                                    return [
                                                                      createTextVNode(toDisplayString((_a5 = unref(countries)[cn]) == null ? void 0 : _a5.name), 1)
                                                                    ];
                                                                  }),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, toDisplayString(_ctx.$t("products.brand")), 1),
                                                  createVNode("td", { class: "text-primary text-right" }, toDisplayString((_g2 = (_f2 = product.value) == null ? void 0 : _f2.brand) == null ? void 0 : _g2.name), 1)
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, toDisplayString(_ctx.$t("products.model")), 1),
                                                  createVNode("td", { class: "text-right" }, toDisplayString((_h2 = product.value) == null ? void 0 : _h2.model), 1)
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, toDisplayString(_ctx.$t("products.warranty")), 1),
                                                  createVNode("td", { class: "text-right" }, toDisplayString((_i2 = product.value) == null ? void 0 : _i2.warranty), 1)
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, toDisplayString(_ctx.$t("products.created")), 1),
                                                  createVNode("td", { class: "text-right" }, toDisplayString(new Date((_j2 = product.value) == null ? void 0 : _j2.created_at).toLocaleDateString()), 1)
                                                ])
                                              ])
                                            ];
                                          }),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, { class: "px-0" }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(_ctx.$t("products.contact_us")), 1),
                                        createVNode(VRow, { class: "pa-2 mt-0" }, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "6",
                                              md: "4",
                                              class: "pa-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  href: "https://t.me/Keshmed37",
                                                  height: "35",
                                                  "prepend-icon": "mdi-send",
                                                  block: "",
                                                  color: "#0088cc",
                                                  variant: "flat",
                                                  class: "text-none"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.telegram")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "6",
                                              md: "4",
                                              class: "pa-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  href: "tel:+998908893700",
                                                  height: "35",
                                                  "prepend-icon": "mdi-phone",
                                                  block: "",
                                                  color: "green",
                                                  variant: "flat",
                                                  class: "text-none"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.call")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "4",
                                              class: "pa-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  onClick: ($event) => dialog.value = true,
                                                  height: "35",
                                                  "prepend-icon": "mdi-cart",
                                                  block: "",
                                                  color: "primary",
                                                  variant: "flat",
                                                  class: "text-none"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.order")), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSkeletonLoader, {
                            loading: loading.value,
                            type: "article, avatar, text, paragraph",
                            "min-height": "100%",
                            color: "transparent",
                            width: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                variant: "text",
                                width: "100%"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "px-0 pt-0" }, {
                                    default: withCtx(() => {
                                      var _a3;
                                      return [
                                        createTextVNode(toDisplayString((_a3 = product.value) == null ? void 0 : _a3[`title_${_ctx.$i18n.locale}`]), 1)
                                      ];
                                    }),
                                    _: 1
                                  }),
                                  createVNode(VCardText, { class: "pb-0 pt-2 px-0 d-flex justify-space-between align-center" }, {
                                    default: withCtx(() => {
                                      var _a3;
                                      return [
                                        createVNode("div", null, [
                                          createVNode("span", { class: "text-h5 text-primary font-weight-medium" }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3.price) + " $", 1)
                                        ])
                                      ];
                                    }),
                                    _: 1
                                  }),
                                  createVNode(VCardText, { class: "px-0 pb-0" }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(_ctx.$t("products.information")), 1),
                                      createVNode(VTable, {
                                        density: "compact",
                                        hover: "",
                                        class: "rounded mt-3 border"
                                      }, {
                                        default: withCtx(() => {
                                          var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j2;
                                          return [
                                            createVNode("tbody", null, [
                                              createVNode("tr", null, [
                                                createVNode("td", null, toDisplayString(_ctx.$t("products.category")), 1),
                                                createVNode("td", { class: "text-right" }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3.category[`name_${_ctx.$i18n.locale}`]), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, toDisplayString(_ctx.$t("products.condition")), 1),
                                                createVNode("td", { class: "text-right" }, toDisplayString(_ctx.$t("condition." + ((_b3 = product.value) == null ? void 0 : _b3.condition))), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, toDisplayString(_ctx.$t("products.year")), 1),
                                                createVNode("td", { class: "text-right" }, toDisplayString((_c3 = product.value) == null ? void 0 : _c3.year), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, toDisplayString(_ctx.$t("products.shipping")), 1),
                                                createVNode("td", { class: "text-right" }, [
                                                  createVNode("div", { class: "d-flex align-center gap-1 justify-end" }, [
                                                    createVNode(VAvatar, { size: "30" }, {
                                                      default: withCtx(() => {
                                                        var _a4, _b4;
                                                        return [
                                                          createVNode(VImg, {
                                                            alt: "flag",
                                                            cover: "",
                                                            src: (_b4 = unref(countries)[(_a4 = product.value) == null ? void 0 : _a4.shipping_from]) == null ? void 0 : _b4.flag
                                                          }, null, 8, ["src"])
                                                        ];
                                                      }),
                                                      _: 1
                                                    }),
                                                    createVNode("span", null, toDisplayString((_e2 = unref(countries)[(_d3 = product.value) == null ? void 0 : _d3.shipping_from]) == null ? void 0 : _e2.name), 1)
                                                  ])
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, toDisplayString(_ctx.$t("products.sales_area")), 1),
                                                createVNode("td", { class: "text-right" }, [
                                                  createVNode(VMenu, {
                                                    transition: "fade-transition",
                                                    "open-on-hover": true
                                                  }, {
                                                    activator: withCtx(({ props }) => {
                                                      var _a4, _b4;
                                                      return [
                                                        createVNode("span", props, toDisplayString((_b4 = (_a4 = product.value) == null ? void 0 : _a4.sales_areas) == null ? void 0 : _b4.length) + " \u0441\u0442\u0440\u0430\u043D", 17)
                                                      ];
                                                    }),
                                                    default: withCtx(() => [
                                                      createVNode(VList, {
                                                        nav: "",
                                                        density: "compact"
                                                      }, {
                                                        default: withCtx(() => {
                                                          var _a4;
                                                          return [
                                                            (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.sales_areas, (cn, i) => {
                                                              return openBlock(), createBlock(VListItem, { key: i }, {
                                                                prepend: withCtx(() => [
                                                                  createVNode(VAvatar, { rounded: "" }, {
                                                                    default: withCtx(() => {
                                                                      var _a5;
                                                                      return [
                                                                        createVNode(VImg, {
                                                                          alt: "flag",
                                                                          src: (_a5 = unref(countries)[cn]) == null ? void 0 : _a5.flag
                                                                        }, null, 8, ["src"])
                                                                      ];
                                                                    }),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                title: withCtx(() => {
                                                                  var _a5;
                                                                  return [
                                                                    createTextVNode(toDisplayString((_a5 = unref(countries)[cn]) == null ? void 0 : _a5.name), 1)
                                                                  ];
                                                                }),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, toDisplayString(_ctx.$t("products.brand")), 1),
                                                createVNode("td", { class: "text-primary text-right" }, toDisplayString((_g2 = (_f2 = product.value) == null ? void 0 : _f2.brand) == null ? void 0 : _g2.name), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, toDisplayString(_ctx.$t("products.model")), 1),
                                                createVNode("td", { class: "text-right" }, toDisplayString((_h2 = product.value) == null ? void 0 : _h2.model), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, toDisplayString(_ctx.$t("products.warranty")), 1),
                                                createVNode("td", { class: "text-right" }, toDisplayString((_i2 = product.value) == null ? void 0 : _i2.warranty), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, toDisplayString(_ctx.$t("products.created")), 1),
                                                createVNode("td", { class: "text-right" }, toDisplayString(new Date((_j2 = product.value) == null ? void 0 : _j2.created_at).toLocaleDateString()), 1)
                                              ])
                                            ])
                                          ];
                                        }),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, { class: "px-0" }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(_ctx.$t("products.contact_us")), 1),
                                      createVNode(VRow, { class: "pa-2 mt-0" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "6",
                                            md: "4",
                                            class: "pa-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                href: "https://t.me/Keshmed37",
                                                height: "35",
                                                "prepend-icon": "mdi-send",
                                                block: "",
                                                color: "#0088cc",
                                                variant: "flat",
                                                class: "text-none"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.telegram")), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "6",
                                            md: "4",
                                            class: "pa-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                href: "tel:+998908893700",
                                                height: "35",
                                                "prepend-icon": "mdi-phone",
                                                block: "",
                                                color: "green",
                                                variant: "flat",
                                                class: "text-none"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.call")), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "4",
                                            class: "pa-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                onClick: ($event) => dialog.value = true,
                                                height: "35",
                                                "prepend-icon": "mdi-cart",
                                                block: "",
                                                color: "primary",
                                                variant: "flat",
                                                class: "text-none"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.order")), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
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
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6",
                    style: ((_b2 = (_a2 = product.value) == null ? void 0 : _a2.characteristics) == null ? void 0 : _b2.length) > 0 ? null : { display: "none" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSkeletonLoader, {
                          loading: loading.value,
                          type: "sentences,avatar, paragraph",
                          "min-height": "100%"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                flat: "",
                                border: "",
                                width: "100%"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(_ctx.$t("products.characteristics"))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(_ctx.$t("products.characteristics")), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, { class: "pt-2 px-0" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTable, {
                                            density: "compact",
                                            hover: ""
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              var _a3, _b3;
                                              if (_push8) {
                                                _push8(`<tbody${_scopeId7}><!--[-->`);
                                                ssrRenderList((_a3 = product.value) == null ? void 0 : _a3.characteristics, (c, i) => {
                                                  _push8(`<tr${_scopeId7}><td${_scopeId7}>${ssrInterpolate(c.title[_ctx.$i18n.locale])}</td><td class="text-right"${_scopeId7}>${ssrInterpolate(c.value[_ctx.$i18n.locale])}</td></tr>`);
                                                });
                                                _push8(`<!--]--></tbody>`);
                                              } else {
                                                return [
                                                  createVNode("tbody", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList((_b3 = product.value) == null ? void 0 : _b3.characteristics, (c, i) => {
                                                      return openBlock(), createBlock("tr", { key: i }, [
                                                        createVNode("td", null, toDisplayString(c.title[_ctx.$i18n.locale]), 1),
                                                        createVNode("td", { class: "text-right" }, toDisplayString(c.value[_ctx.$i18n.locale]), 1)
                                                      ]);
                                                    }), 128))
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTable, {
                                              density: "compact",
                                              hover: ""
                                            }, {
                                              default: withCtx(() => {
                                                var _a3;
                                                return [
                                                  createVNode("tbody", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList((_a3 = product.value) == null ? void 0 : _a3.characteristics, (c, i) => {
                                                      return openBlock(), createBlock("tr", { key: i }, [
                                                        createVNode("td", null, toDisplayString(c.title[_ctx.$i18n.locale]), 1),
                                                        createVNode("td", { class: "text-right" }, toDisplayString(c.value[_ctx.$i18n.locale]), 1)
                                                      ]);
                                                    }), 128))
                                                  ])
                                                ];
                                              }),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.characteristics")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, { class: "pt-2 px-0" }, {
                                        default: withCtx(() => [
                                          createVNode(VTable, {
                                            density: "compact",
                                            hover: ""
                                          }, {
                                            default: withCtx(() => {
                                              var _a3;
                                              return [
                                                createVNode("tbody", null, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList((_a3 = product.value) == null ? void 0 : _a3.characteristics, (c, i) => {
                                                    return openBlock(), createBlock("tr", { key: i }, [
                                                      createVNode("td", null, toDisplayString(c.title[_ctx.$i18n.locale]), 1),
                                                      createVNode("td", { class: "text-right" }, toDisplayString(c.value[_ctx.$i18n.locale]), 1)
                                                    ]);
                                                  }), 128))
                                                ])
                                              ];
                                            }),
                                            _: 1
                                          })
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
                                createVNode(VCard, {
                                  flat: "",
                                  border: "",
                                  width: "100%"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("products.characteristics")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, { class: "pt-2 px-0" }, {
                                      default: withCtx(() => [
                                        createVNode(VTable, {
                                          density: "compact",
                                          hover: ""
                                        }, {
                                          default: withCtx(() => {
                                            var _a3;
                                            return [
                                              createVNode("tbody", null, [
                                                (openBlock(true), createBlock(Fragment, null, renderList((_a3 = product.value) == null ? void 0 : _a3.characteristics, (c, i) => {
                                                  return openBlock(), createBlock("tr", { key: i }, [
                                                    createVNode("td", null, toDisplayString(c.title[_ctx.$i18n.locale]), 1),
                                                    createVNode("td", { class: "text-right" }, toDisplayString(c.value[_ctx.$i18n.locale]), 1)
                                                  ]);
                                                }), 128))
                                              ])
                                            ];
                                          }),
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSkeletonLoader, {
                            loading: loading.value,
                            type: "sentences,avatar, paragraph",
                            "min-height": "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                flat: "",
                                border: "",
                                width: "100%"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("products.characteristics")), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, { class: "pt-2 px-0" }, {
                                    default: withCtx(() => [
                                      createVNode(VTable, {
                                        density: "compact",
                                        hover: ""
                                      }, {
                                        default: withCtx(() => {
                                          var _a3;
                                          return [
                                            createVNode("tbody", null, [
                                              (openBlock(true), createBlock(Fragment, null, renderList((_a3 = product.value) == null ? void 0 : _a3.characteristics, (c, i) => {
                                                return openBlock(), createBlock("tr", { key: i }, [
                                                  createVNode("td", null, toDisplayString(c.title[_ctx.$i18n.locale]), 1),
                                                  createVNode("td", { class: "text-right" }, toDisplayString(c.value[_ctx.$i18n.locale]), 1)
                                                ]);
                                              }), 128))
                                            ])
                                          ];
                                        }),
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
                          }, 8, ["loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSkeletonLoader, {
                          loading: loading.value,
                          type: "sentences,avatar, paragraph",
                          "min-height": "100%"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                flat: "",
                                border: "",
                                width: "100%"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(_ctx.$t("products.description"))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(_ctx.$t("products.description")), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, { class: "pt-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ClientOnly, null, {}, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_ClientOnly, null, {
                                              default: withCtx(() => {
                                                var _a3;
                                                return [
                                                  createVNode("span", { style: { "white-space": "pre-line" } }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3[`description_${_ctx.$i18n.locale}`]), 1)
                                                ];
                                              }),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.description")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, { class: "pt-2" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ClientOnly, null, {
                                            default: withCtx(() => {
                                              var _a3;
                                              return [
                                                createVNode("span", { style: { "white-space": "pre-line" } }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3[`description_${_ctx.$i18n.locale}`]), 1)
                                              ];
                                            }),
                                            _: 1
                                          })
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
                                createVNode(VCard, {
                                  flat: "",
                                  border: "",
                                  width: "100%"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("products.description")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, { class: "pt-2" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ClientOnly, null, {
                                          default: withCtx(() => {
                                            var _a3;
                                            return [
                                              createVNode("span", { style: { "white-space": "pre-line" } }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3[`description_${_ctx.$i18n.locale}`]), 1)
                                            ];
                                          }),
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSkeletonLoader, {
                            loading: loading.value,
                            type: "sentences,avatar, paragraph",
                            "min-height": "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                flat: "",
                                border: "",
                                width: "100%"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("products.description")), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, { class: "pt-2" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => {
                                          var _a3;
                                          return [
                                            createVNode("span", { style: { "white-space": "pre-line" } }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3[`description_${_ctx.$i18n.locale}`]), 1)
                                          ];
                                        }),
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
                          }, 8, ["loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    style: similarProduct.value.length > 0 ? null : { display: "none" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-100 d-flex pb-5 justify-space-between align-center"${_scopeId3}><span class="text-primary"${_scopeId3}>${ssrInterpolate(_ctx.$t("products.similar"))}</span></div>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(similarProduct.value, (item, i) => {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  lg: "3",
                                  key: i
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
                                (openBlock(true), createBlock(Fragment, null, renderList(similarProduct.value, (item, i) => {
                                  return openBlock(), createBlock(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4",
                                    lg: "3",
                                    key: i
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
                          createVNode("div", { class: "w-100 d-flex pb-5 justify-space-between align-center" }, [
                            createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.similar")), 1)
                          ]),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(similarProduct.value, (item, i) => {
                                return openBlock(), createBlock(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  lg: "3",
                                  key: i
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
                } else {
                  return [
                    !loading.value ? (openBlock(), createBlock(VCol, {
                      key: 0,
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          border: "",
                          flat: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardText, { class: "d-flex gap-1 align-center" }, {
                              default: withCtx(() => {
                                var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2;
                                return [
                                  ((_c3 = (_b3 = (_a3 = product.value) == null ? void 0 : _a3.category) == null ? void 0 : _b3.parent) == null ? void 0 : _c3.parent) ? (openBlock(), createBlock(_component_router_link, {
                                    key: 0,
                                    class: "text-decoration-none text-black text-hover-link",
                                    to: `/products?category=${product.value.category.parent.parent.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.value.category.parent.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                    ]),
                                    _: 1
                                  }, 8, ["to"])) : createCommentVNode("", true),
                                  ((_e2 = (_d3 = product.value) == null ? void 0 : _d3.category) == null ? void 0 : _e2.parent) ? (openBlock(), createBlock(_component_router_link, {
                                    key: 1,
                                    class: "text-decoration-none text-black text-hover-link",
                                    to: `/products?category=${(_f2 = product.value.category.parent) == null ? void 0 : _f2.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.value.category.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                    ]),
                                    _: 1
                                  }, 8, ["to"])) : createCommentVNode("", true),
                                  ((_h2 = (_g2 = product.value) == null ? void 0 : _g2.category) == null ? void 0 : _h2.id) ? (openBlock(), createBlock(_component_router_link, {
                                    key: 2,
                                    class: "text-decoration-none text-black text-hover-link",
                                    to: `/products?category=${product.value.category.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.value.category[`name_${_ctx.$i18n.locale}`]), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["to"])) : createCommentVNode("", true)
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSkeletonLoader, {
                          height: "100%",
                          class: "h-100",
                          loading: loading.value,
                          type: "image,image,button,button,button,button"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              flat: "",
                              width: "100%",
                              height: "100%",
                              border: ""
                            }, {
                              default: withCtx(() => {
                                var _a3, _b3, _c3, _d3, _e2;
                                return [
                                  createVNode(VImg, {
                                    alt: (_a3 = product.value) == null ? void 0 : _a3.title_ru,
                                    height: "500",
                                    width: "100%",
                                    src: ((_d3 = (_c3 = (_b3 = product.value) == null ? void 0 : _b3.images) == null ? void 0 : _c3[currentImage.value]) == null ? void 0 : _d3.image) || "/images/nophoto.jpg"
                                  }, null, 8, ["alt", "src"]),
                                  createVNode(VDivider),
                                  ((_e2 = product.value) == null ? void 0 : _e2.images.length) !== 0 ? (openBlock(), createBlock(VCardActions, {
                                    key: 0,
                                    class: "pa-0 d-flex justify-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(VSlideGroup, {
                                            modelValue: currentImage.value,
                                            "onUpdate:modelValue": ($event) => currentImage.value = $event,
                                            class: "pa-2",
                                            mandatory: "",
                                            "selected-class": "bg-primary",
                                            "show-arrows": ""
                                          }, {
                                            default: withCtx(() => {
                                              var _a4;
                                              return [
                                                (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.images, (image, i) => {
                                                  return openBlock(), createBlock(VSlideGroupItem, { key: i }, {
                                                    default: withCtx(({ isSelected, toggle }) => [
                                                      createVNode(VAvatar, {
                                                        size: "50",
                                                        rounded: "",
                                                        onClick: toggle,
                                                        color: !isSelected ? "grey-lighten-3" : "primary",
                                                        class: "mx-1 pa-1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VImg, {
                                                            alt: "thumb",
                                                            src: (image == null ? void 0 : image.thumbnail) || "/images/nophoto.jpg",
                                                            cover: ""
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick", "color"])
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
                                              ];
                                            }),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSkeletonLoader, {
                          loading: loading.value,
                          type: "article, avatar, text, paragraph",
                          "min-height": "100%",
                          color: "transparent",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              variant: "text",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "px-0 pt-0" }, {
                                  default: withCtx(() => {
                                    var _a3;
                                    return [
                                      createTextVNode(toDisplayString((_a3 = product.value) == null ? void 0 : _a3[`title_${_ctx.$i18n.locale}`]), 1)
                                    ];
                                  }),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pb-0 pt-2 px-0 d-flex justify-space-between align-center" }, {
                                  default: withCtx(() => {
                                    var _a3;
                                    return [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "text-h5 text-primary font-weight-medium" }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3.price) + " $", 1)
                                      ])
                                    ];
                                  }),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "px-0 pb-0" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, toDisplayString(_ctx.$t("products.information")), 1),
                                    createVNode(VTable, {
                                      density: "compact",
                                      hover: "",
                                      class: "rounded mt-3 border"
                                    }, {
                                      default: withCtx(() => {
                                        var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j2;
                                        return [
                                          createVNode("tbody", null, [
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.category")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3.category[`name_${_ctx.$i18n.locale}`]), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.condition")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString(_ctx.$t("condition." + ((_b3 = product.value) == null ? void 0 : _b3.condition))), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.year")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString((_c3 = product.value) == null ? void 0 : _c3.year), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.shipping")), 1),
                                              createVNode("td", { class: "text-right" }, [
                                                createVNode("div", { class: "d-flex align-center gap-1 justify-end" }, [
                                                  createVNode(VAvatar, { size: "30" }, {
                                                    default: withCtx(() => {
                                                      var _a4, _b4;
                                                      return [
                                                        createVNode(VImg, {
                                                          alt: "flag",
                                                          cover: "",
                                                          src: (_b4 = unref(countries)[(_a4 = product.value) == null ? void 0 : _a4.shipping_from]) == null ? void 0 : _b4.flag
                                                        }, null, 8, ["src"])
                                                      ];
                                                    }),
                                                    _: 1
                                                  }),
                                                  createVNode("span", null, toDisplayString((_e2 = unref(countries)[(_d3 = product.value) == null ? void 0 : _d3.shipping_from]) == null ? void 0 : _e2.name), 1)
                                                ])
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.sales_area")), 1),
                                              createVNode("td", { class: "text-right" }, [
                                                createVNode(VMenu, {
                                                  transition: "fade-transition",
                                                  "open-on-hover": true
                                                }, {
                                                  activator: withCtx(({ props }) => {
                                                    var _a4, _b4;
                                                    return [
                                                      createVNode("span", props, toDisplayString((_b4 = (_a4 = product.value) == null ? void 0 : _a4.sales_areas) == null ? void 0 : _b4.length) + " \u0441\u0442\u0440\u0430\u043D", 17)
                                                    ];
                                                  }),
                                                  default: withCtx(() => [
                                                    createVNode(VList, {
                                                      nav: "",
                                                      density: "compact"
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a4;
                                                        return [
                                                          (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.sales_areas, (cn, i) => {
                                                            return openBlock(), createBlock(VListItem, { key: i }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VAvatar, { rounded: "" }, {
                                                                  default: withCtx(() => {
                                                                    var _a5;
                                                                    return [
                                                                      createVNode(VImg, {
                                                                        alt: "flag",
                                                                        src: (_a5 = unref(countries)[cn]) == null ? void 0 : _a5.flag
                                                                      }, null, 8, ["src"])
                                                                    ];
                                                                  }),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              title: withCtx(() => {
                                                                var _a5;
                                                                return [
                                                                  createTextVNode(toDisplayString((_a5 = unref(countries)[cn]) == null ? void 0 : _a5.name), 1)
                                                                ];
                                                              }),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.brand")), 1),
                                              createVNode("td", { class: "text-primary text-right" }, toDisplayString((_g2 = (_f2 = product.value) == null ? void 0 : _f2.brand) == null ? void 0 : _g2.name), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.model")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString((_h2 = product.value) == null ? void 0 : _h2.model), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.warranty")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString((_i2 = product.value) == null ? void 0 : _i2.warranty), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.created")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString(new Date((_j2 = product.value) == null ? void 0 : _j2.created_at).toLocaleDateString()), 1)
                                            ])
                                          ])
                                        ];
                                      }),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "px-0" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, toDisplayString(_ctx.$t("products.contact_us")), 1),
                                    createVNode(VRow, { class: "pa-2 mt-0" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "4",
                                          class: "pa-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              href: "https://t.me/Keshmed37",
                                              height: "35",
                                              "prepend-icon": "mdi-send",
                                              block: "",
                                              color: "#0088cc",
                                              variant: "flat",
                                              class: "text-none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.telegram")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "4",
                                          class: "pa-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              href: "tel:+998908893700",
                                              height: "35",
                                              "prepend-icon": "mdi-phone",
                                              block: "",
                                              color: "green",
                                              variant: "flat",
                                              class: "text-none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.call")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "4",
                                          class: "pa-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              onClick: ($event) => dialog.value = true,
                                              height: "35",
                                              "prepend-icon": "mdi-cart",
                                              block: "",
                                              color: "primary",
                                              variant: "flat",
                                              class: "text-none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.order")), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
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
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSkeletonLoader, {
                          loading: loading.value,
                          type: "sentences,avatar, paragraph",
                          "min-height": "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              flat: "",
                              border: "",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("products.characteristics")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pt-2 px-0" }, {
                                  default: withCtx(() => [
                                    createVNode(VTable, {
                                      density: "compact",
                                      hover: ""
                                    }, {
                                      default: withCtx(() => {
                                        var _a3;
                                        return [
                                          createVNode("tbody", null, [
                                            (openBlock(true), createBlock(Fragment, null, renderList((_a3 = product.value) == null ? void 0 : _a3.characteristics, (c, i) => {
                                              return openBlock(), createBlock("tr", { key: i }, [
                                                createVNode("td", null, toDisplayString(c.title[_ctx.$i18n.locale]), 1),
                                                createVNode("td", { class: "text-right" }, toDisplayString(c.value[_ctx.$i18n.locale]), 1)
                                              ]);
                                            }), 128))
                                          ])
                                        ];
                                      }),
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
                        }, 8, ["loading"])
                      ]),
                      _: 1
                    }, 512), [
                      [vShow, ((_d2 = (_c2 = product.value) == null ? void 0 : _c2.characteristics) == null ? void 0 : _d2.length) > 0]
                    ]),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSkeletonLoader, {
                          loading: loading.value,
                          type: "sentences,avatar, paragraph",
                          "min-height": "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              flat: "",
                              border: "",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("products.description")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pt-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => {
                                        var _a3;
                                        return [
                                          createVNode("span", { style: { "white-space": "pre-line" } }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3[`description_${_ctx.$i18n.locale}`]), 1)
                                        ];
                                      }),
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
                        }, 8, ["loading"])
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-100 d-flex pb-5 justify-space-between align-center" }, [
                          createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.similar")), 1)
                        ]),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(similarProduct.value, (item, i) => {
                              return openBlock(), createBlock(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4",
                                lg: "3",
                                key: i
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
                    }, 512), [
                      [vShow, similarProduct.value.length > 0]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDialog, {
              modelValue: dialog.value,
              "onUpdate:modelValue": ($event) => dialog.value = $event,
              "max-width": "450",
              width: "100%"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "text-primary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("products.send_order"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("products.send_order")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "py-3 px-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, {
                                ref_key: "form",
                                ref: form,
                                modelValue: validd.value,
                                "onUpdate:modelValue": ($event) => validd.value = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "py-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: review.first_name,
                                                  "onUpdate:modelValue": ($event) => review.first_name = $event,
                                                  class: "border rounded",
                                                  flat: "",
                                                  "no-resize": "",
                                                  "hide-details": "",
                                                  required: "",
                                                  rules: nameRule,
                                                  density: "comfortable",
                                                  variant: "outlined",
                                                  placeholder: _ctx.$t("products.first_name")
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: review.first_name,
                                                    "onUpdate:modelValue": ($event) => review.first_name = $event,
                                                    class: "border rounded",
                                                    flat: "",
                                                    "no-resize": "",
                                                    "hide-details": "",
                                                    required: "",
                                                    rules: nameRule,
                                                    density: "comfortable",
                                                    variant: "outlined",
                                                    placeholder: _ctx.$t("products.first_name")
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "py-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: review.last_name,
                                                  "onUpdate:modelValue": ($event) => review.last_name = $event,
                                                  class: "border rounded",
                                                  flat: "",
                                                  "no-resize": "",
                                                  "hide-details": "",
                                                  required: "",
                                                  rules: nameRule,
                                                  density: "comfortable",
                                                  variant: "outlined",
                                                  placeholder: _ctx.$t("products.last_name")
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: review.last_name,
                                                    "onUpdate:modelValue": ($event) => review.last_name = $event,
                                                    class: "border rounded",
                                                    flat: "",
                                                    "no-resize": "",
                                                    "hide-details": "",
                                                    required: "",
                                                    rules: nameRule,
                                                    density: "comfortable",
                                                    variant: "outlined",
                                                    placeholder: _ctx.$t("products.last_name")
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "py-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: review.phone,
                                                  "onUpdate:modelValue": ($event) => review.phone = $event,
                                                  class: "border rounded",
                                                  flat: "",
                                                  "no-resize": "",
                                                  "hide-details": "",
                                                  required: "",
                                                  rules: nameRule,
                                                  density: "comfortable",
                                                  variant: "outlined",
                                                  placeholder: _ctx.$t("products.phone")
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: review.phone,
                                                    "onUpdate:modelValue": ($event) => review.phone = $event,
                                                    class: "border rounded",
                                                    flat: "",
                                                    "no-resize": "",
                                                    "hide-details": "",
                                                    required: "",
                                                    rules: nameRule,
                                                    density: "comfortable",
                                                    variant: "outlined",
                                                    placeholder: _ctx.$t("products.phone")
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "py-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextarea, {
                                                  modelValue: review.message,
                                                  "onUpdate:modelValue": ($event) => review.message = $event,
                                                  class: "border rounded",
                                                  flat: "",
                                                  "no-resize": "",
                                                  "hide-details": "",
                                                  required: "",
                                                  rules: nameRule,
                                                  density: "comfortable",
                                                  variant: "outlined",
                                                  placeholder: _ctx.$t("products.message")
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextarea, {
                                                    modelValue: review.message,
                                                    "onUpdate:modelValue": ($event) => review.message = $event,
                                                    class: "border rounded",
                                                    flat: "",
                                                    "no-resize": "",
                                                    "hide-details": "",
                                                    required: "",
                                                    rules: nameRule,
                                                    density: "comfortable",
                                                    variant: "outlined",
                                                    placeholder: _ctx.$t("products.message")
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "py-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  required: "",
                                                  "item-props": itemProps,
                                                  rules: nameRule,
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: review.country,
                                                  "onUpdate:modelValue": ($event) => review.country = $event,
                                                  items: unref(countries),
                                                  placeholder: _ctx.$t("products.country"),
                                                  "item-title": "name",
                                                  "hide-details": "",
                                                  "item-value": "id",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    required: "",
                                                    "item-props": itemProps,
                                                    rules: nameRule,
                                                    flat: "",
                                                    class: "border rounded",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: review.country,
                                                    "onUpdate:modelValue": ($event) => review.country = $event,
                                                    items: unref(countries),
                                                    placeholder: _ctx.$t("products.country"),
                                                    "item-title": "name",
                                                    "hide-details": "",
                                                    "item-value": "id",
                                                    variant: "outlined",
                                                    color: "primary"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "d-flex justify-end pt-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, {
                                                  loading: save_loading.value,
                                                  disabled: !validd.value,
                                                  flat: "",
                                                  onClick: handleReview,
                                                  color: "primary"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("products.send"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.send")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, {
                                                    loading: save_loading.value,
                                                    disabled: !validd.value,
                                                    flat: "",
                                                    onClick: handleReview,
                                                    color: "primary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.send")), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["loading", "disabled"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "py-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: review.first_name,
                                                  "onUpdate:modelValue": ($event) => review.first_name = $event,
                                                  class: "border rounded",
                                                  flat: "",
                                                  "no-resize": "",
                                                  "hide-details": "",
                                                  required: "",
                                                  rules: nameRule,
                                                  density: "comfortable",
                                                  variant: "outlined",
                                                  placeholder: _ctx.$t("products.first_name")
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "py-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: review.last_name,
                                                  "onUpdate:modelValue": ($event) => review.last_name = $event,
                                                  class: "border rounded",
                                                  flat: "",
                                                  "no-resize": "",
                                                  "hide-details": "",
                                                  required: "",
                                                  rules: nameRule,
                                                  density: "comfortable",
                                                  variant: "outlined",
                                                  placeholder: _ctx.$t("products.last_name")
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "py-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: review.phone,
                                                  "onUpdate:modelValue": ($event) => review.phone = $event,
                                                  class: "border rounded",
                                                  flat: "",
                                                  "no-resize": "",
                                                  "hide-details": "",
                                                  required: "",
                                                  rules: nameRule,
                                                  density: "comfortable",
                                                  variant: "outlined",
                                                  placeholder: _ctx.$t("products.phone")
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "py-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextarea, {
                                                  modelValue: review.message,
                                                  "onUpdate:modelValue": ($event) => review.message = $event,
                                                  class: "border rounded",
                                                  flat: "",
                                                  "no-resize": "",
                                                  "hide-details": "",
                                                  required: "",
                                                  rules: nameRule,
                                                  density: "comfortable",
                                                  variant: "outlined",
                                                  placeholder: _ctx.$t("products.message")
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "py-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  required: "",
                                                  "item-props": itemProps,
                                                  rules: nameRule,
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: review.country,
                                                  "onUpdate:modelValue": ($event) => review.country = $event,
                                                  items: unref(countries),
                                                  placeholder: _ctx.$t("products.country"),
                                                  "item-title": "name",
                                                  "hide-details": "",
                                                  "item-value": "id",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "d-flex justify-end pt-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  loading: save_loading.value,
                                                  disabled: !validd.value,
                                                  flat: "",
                                                  onClick: handleReview,
                                                  color: "primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.send")), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["loading", "disabled"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "py-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: review.first_name,
                                                "onUpdate:modelValue": ($event) => review.first_name = $event,
                                                class: "border rounded",
                                                flat: "",
                                                "no-resize": "",
                                                "hide-details": "",
                                                required: "",
                                                rules: nameRule,
                                                density: "comfortable",
                                                variant: "outlined",
                                                placeholder: _ctx.$t("products.first_name")
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "py-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: review.last_name,
                                                "onUpdate:modelValue": ($event) => review.last_name = $event,
                                                class: "border rounded",
                                                flat: "",
                                                "no-resize": "",
                                                "hide-details": "",
                                                required: "",
                                                rules: nameRule,
                                                density: "comfortable",
                                                variant: "outlined",
                                                placeholder: _ctx.$t("products.last_name")
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "py-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: review.phone,
                                                "onUpdate:modelValue": ($event) => review.phone = $event,
                                                class: "border rounded",
                                                flat: "",
                                                "no-resize": "",
                                                "hide-details": "",
                                                required: "",
                                                rules: nameRule,
                                                density: "comfortable",
                                                variant: "outlined",
                                                placeholder: _ctx.$t("products.phone")
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "py-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextarea, {
                                                modelValue: review.message,
                                                "onUpdate:modelValue": ($event) => review.message = $event,
                                                class: "border rounded",
                                                flat: "",
                                                "no-resize": "",
                                                "hide-details": "",
                                                required: "",
                                                rules: nameRule,
                                                density: "comfortable",
                                                variant: "outlined",
                                                placeholder: _ctx.$t("products.message")
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "py-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                required: "",
                                                "item-props": itemProps,
                                                rules: nameRule,
                                                flat: "",
                                                class: "border rounded",
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: review.country,
                                                "onUpdate:modelValue": ($event) => review.country = $event,
                                                items: unref(countries),
                                                placeholder: _ctx.$t("products.country"),
                                                "item-title": "name",
                                                "hide-details": "",
                                                "item-value": "id",
                                                variant: "outlined",
                                                color: "primary"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "d-flex justify-end pt-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                loading: save_loading.value,
                                                disabled: !validd.value,
                                                flat: "",
                                                onClick: handleReview,
                                                color: "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.send")), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["loading", "disabled"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, {
                                  ref_key: "form",
                                  ref: form,
                                  modelValue: validd.value,
                                  "onUpdate:modelValue": ($event) => validd.value = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "py-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: review.first_name,
                                              "onUpdate:modelValue": ($event) => review.first_name = $event,
                                              class: "border rounded",
                                              flat: "",
                                              "no-resize": "",
                                              "hide-details": "",
                                              required: "",
                                              rules: nameRule,
                                              density: "comfortable",
                                              variant: "outlined",
                                              placeholder: _ctx.$t("products.first_name")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "py-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: review.last_name,
                                              "onUpdate:modelValue": ($event) => review.last_name = $event,
                                              class: "border rounded",
                                              flat: "",
                                              "no-resize": "",
                                              "hide-details": "",
                                              required: "",
                                              rules: nameRule,
                                              density: "comfortable",
                                              variant: "outlined",
                                              placeholder: _ctx.$t("products.last_name")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "py-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: review.phone,
                                              "onUpdate:modelValue": ($event) => review.phone = $event,
                                              class: "border rounded",
                                              flat: "",
                                              "no-resize": "",
                                              "hide-details": "",
                                              required: "",
                                              rules: nameRule,
                                              density: "comfortable",
                                              variant: "outlined",
                                              placeholder: _ctx.$t("products.phone")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "py-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextarea, {
                                              modelValue: review.message,
                                              "onUpdate:modelValue": ($event) => review.message = $event,
                                              class: "border rounded",
                                              flat: "",
                                              "no-resize": "",
                                              "hide-details": "",
                                              required: "",
                                              rules: nameRule,
                                              density: "comfortable",
                                              variant: "outlined",
                                              placeholder: _ctx.$t("products.message")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "py-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              required: "",
                                              "item-props": itemProps,
                                              rules: nameRule,
                                              flat: "",
                                              class: "border rounded",
                                              density: "compact",
                                              "bg-color": "surface",
                                              modelValue: review.country,
                                              "onUpdate:modelValue": ($event) => review.country = $event,
                                              items: unref(countries),
                                              placeholder: _ctx.$t("products.country"),
                                              "item-title": "name",
                                              "hide-details": "",
                                              "item-value": "id",
                                              variant: "outlined",
                                              color: "primary"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "d-flex justify-end pt-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              loading: save_loading.value,
                                              disabled: !validd.value,
                                              flat: "",
                                              onClick: handleReview,
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.send")), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["loading", "disabled"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "text-primary" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("products.send_order")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "py-3 px-4" }, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                ref_key: "form",
                                ref: form,
                                modelValue: validd.value,
                                "onUpdate:modelValue": ($event) => validd.value = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "py-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: review.first_name,
                                            "onUpdate:modelValue": ($event) => review.first_name = $event,
                                            class: "border rounded",
                                            flat: "",
                                            "no-resize": "",
                                            "hide-details": "",
                                            required: "",
                                            rules: nameRule,
                                            density: "comfortable",
                                            variant: "outlined",
                                            placeholder: _ctx.$t("products.first_name")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "py-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: review.last_name,
                                            "onUpdate:modelValue": ($event) => review.last_name = $event,
                                            class: "border rounded",
                                            flat: "",
                                            "no-resize": "",
                                            "hide-details": "",
                                            required: "",
                                            rules: nameRule,
                                            density: "comfortable",
                                            variant: "outlined",
                                            placeholder: _ctx.$t("products.last_name")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "py-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: review.phone,
                                            "onUpdate:modelValue": ($event) => review.phone = $event,
                                            class: "border rounded",
                                            flat: "",
                                            "no-resize": "",
                                            "hide-details": "",
                                            required: "",
                                            rules: nameRule,
                                            density: "comfortable",
                                            variant: "outlined",
                                            placeholder: _ctx.$t("products.phone")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "py-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            modelValue: review.message,
                                            "onUpdate:modelValue": ($event) => review.message = $event,
                                            class: "border rounded",
                                            flat: "",
                                            "no-resize": "",
                                            "hide-details": "",
                                            required: "",
                                            rules: nameRule,
                                            density: "comfortable",
                                            variant: "outlined",
                                            placeholder: _ctx.$t("products.message")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "py-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            required: "",
                                            "item-props": itemProps,
                                            rules: nameRule,
                                            flat: "",
                                            class: "border rounded",
                                            density: "compact",
                                            "bg-color": "surface",
                                            modelValue: review.country,
                                            "onUpdate:modelValue": ($event) => review.country = $event,
                                            items: unref(countries),
                                            placeholder: _ctx.$t("products.country"),
                                            "item-title": "name",
                                            "hide-details": "",
                                            "item-value": "id",
                                            variant: "outlined",
                                            color: "primary"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex justify-end pt-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            loading: save_loading.value,
                                            disabled: !validd.value,
                                            flat: "",
                                            onClick: handleReview,
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("products.send")), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["loading", "disabled"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "text-primary" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("products.send_order")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "py-3 px-4" }, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              ref_key: "form",
                              ref: form,
                              modelValue: validd.value,
                              "onUpdate:modelValue": ($event) => validd.value = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "py-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: review.first_name,
                                          "onUpdate:modelValue": ($event) => review.first_name = $event,
                                          class: "border rounded",
                                          flat: "",
                                          "no-resize": "",
                                          "hide-details": "",
                                          required: "",
                                          rules: nameRule,
                                          density: "comfortable",
                                          variant: "outlined",
                                          placeholder: _ctx.$t("products.first_name")
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "py-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: review.last_name,
                                          "onUpdate:modelValue": ($event) => review.last_name = $event,
                                          class: "border rounded",
                                          flat: "",
                                          "no-resize": "",
                                          "hide-details": "",
                                          required: "",
                                          rules: nameRule,
                                          density: "comfortable",
                                          variant: "outlined",
                                          placeholder: _ctx.$t("products.last_name")
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "py-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: review.phone,
                                          "onUpdate:modelValue": ($event) => review.phone = $event,
                                          class: "border rounded",
                                          flat: "",
                                          "no-resize": "",
                                          "hide-details": "",
                                          required: "",
                                          rules: nameRule,
                                          density: "comfortable",
                                          variant: "outlined",
                                          placeholder: _ctx.$t("products.phone")
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "py-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          modelValue: review.message,
                                          "onUpdate:modelValue": ($event) => review.message = $event,
                                          class: "border rounded",
                                          flat: "",
                                          "no-resize": "",
                                          "hide-details": "",
                                          required: "",
                                          rules: nameRule,
                                          density: "comfortable",
                                          variant: "outlined",
                                          placeholder: _ctx.$t("products.message")
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "py-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          required: "",
                                          "item-props": itemProps,
                                          rules: nameRule,
                                          flat: "",
                                          class: "border rounded",
                                          density: "compact",
                                          "bg-color": "surface",
                                          modelValue: review.country,
                                          "onUpdate:modelValue": ($event) => review.country = $event,
                                          items: unref(countries),
                                          placeholder: _ctx.$t("products.country"),
                                          "item-title": "name",
                                          "hide-details": "",
                                          "item-value": "id",
                                          variant: "outlined",
                                          color: "primary"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "d-flex justify-end pt-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          loading: save_loading.value,
                                          disabled: !validd.value,
                                          flat: "",
                                          onClick: handleReview,
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("products.send")), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["loading", "disabled"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(VRow, null, {
                default: withCtx(() => {
                  var _a2, _b2;
                  return [
                    !loading.value ? (openBlock(), createBlock(VCol, {
                      key: 0,
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          border: "",
                          flat: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardText, { class: "d-flex gap-1 align-center" }, {
                              default: withCtx(() => {
                                var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2;
                                return [
                                  ((_c2 = (_b3 = (_a3 = product.value) == null ? void 0 : _a3.category) == null ? void 0 : _b3.parent) == null ? void 0 : _c2.parent) ? (openBlock(), createBlock(_component_router_link, {
                                    key: 0,
                                    class: "text-decoration-none text-black text-hover-link",
                                    to: `/products?category=${product.value.category.parent.parent.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.value.category.parent.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                    ]),
                                    _: 1
                                  }, 8, ["to"])) : createCommentVNode("", true),
                                  ((_e2 = (_d2 = product.value) == null ? void 0 : _d2.category) == null ? void 0 : _e2.parent) ? (openBlock(), createBlock(_component_router_link, {
                                    key: 1,
                                    class: "text-decoration-none text-black text-hover-link",
                                    to: `/products?category=${(_f2 = product.value.category.parent) == null ? void 0 : _f2.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.value.category.parent[`name_${_ctx.$i18n.locale}`]) + " /", 1)
                                    ]),
                                    _: 1
                                  }, 8, ["to"])) : createCommentVNode("", true),
                                  ((_h2 = (_g2 = product.value) == null ? void 0 : _g2.category) == null ? void 0 : _h2.id) ? (openBlock(), createBlock(_component_router_link, {
                                    key: 2,
                                    class: "text-decoration-none text-black text-hover-link",
                                    to: `/products?category=${product.value.category.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.value.category[`name_${_ctx.$i18n.locale}`]), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["to"])) : createCommentVNode("", true)
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSkeletonLoader, {
                          height: "100%",
                          class: "h-100",
                          loading: loading.value,
                          type: "image,image,button,button,button,button"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              flat: "",
                              width: "100%",
                              height: "100%",
                              border: ""
                            }, {
                              default: withCtx(() => {
                                var _a3, _b3, _c2, _d2, _e2;
                                return [
                                  createVNode(VImg, {
                                    alt: (_a3 = product.value) == null ? void 0 : _a3.title_ru,
                                    height: "500",
                                    width: "100%",
                                    src: ((_d2 = (_c2 = (_b3 = product.value) == null ? void 0 : _b3.images) == null ? void 0 : _c2[currentImage.value]) == null ? void 0 : _d2.image) || "/images/nophoto.jpg"
                                  }, null, 8, ["alt", "src"]),
                                  createVNode(VDivider),
                                  ((_e2 = product.value) == null ? void 0 : _e2.images.length) !== 0 ? (openBlock(), createBlock(VCardActions, {
                                    key: 0,
                                    class: "pa-0 d-flex justify-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(VSlideGroup, {
                                            modelValue: currentImage.value,
                                            "onUpdate:modelValue": ($event) => currentImage.value = $event,
                                            class: "pa-2",
                                            mandatory: "",
                                            "selected-class": "bg-primary",
                                            "show-arrows": ""
                                          }, {
                                            default: withCtx(() => {
                                              var _a4;
                                              return [
                                                (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.images, (image, i) => {
                                                  return openBlock(), createBlock(VSlideGroupItem, { key: i }, {
                                                    default: withCtx(({ isSelected, toggle }) => [
                                                      createVNode(VAvatar, {
                                                        size: "50",
                                                        rounded: "",
                                                        onClick: toggle,
                                                        color: !isSelected ? "grey-lighten-3" : "primary",
                                                        class: "mx-1 pa-1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VImg, {
                                                            alt: "thumb",
                                                            src: (image == null ? void 0 : image.thumbnail) || "/images/nophoto.jpg",
                                                            cover: ""
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick", "color"])
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
                                              ];
                                            }),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSkeletonLoader, {
                          loading: loading.value,
                          type: "article, avatar, text, paragraph",
                          "min-height": "100%",
                          color: "transparent",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              variant: "text",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "px-0 pt-0" }, {
                                  default: withCtx(() => {
                                    var _a3;
                                    return [
                                      createTextVNode(toDisplayString((_a3 = product.value) == null ? void 0 : _a3[`title_${_ctx.$i18n.locale}`]), 1)
                                    ];
                                  }),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pb-0 pt-2 px-0 d-flex justify-space-between align-center" }, {
                                  default: withCtx(() => {
                                    var _a3;
                                    return [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "text-h5 text-primary font-weight-medium" }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3.price) + " $", 1)
                                      ])
                                    ];
                                  }),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "px-0 pb-0" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, toDisplayString(_ctx.$t("products.information")), 1),
                                    createVNode(VTable, {
                                      density: "compact",
                                      hover: "",
                                      class: "rounded mt-3 border"
                                    }, {
                                      default: withCtx(() => {
                                        var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
                                        return [
                                          createVNode("tbody", null, [
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.category")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3.category[`name_${_ctx.$i18n.locale}`]), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.condition")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString(_ctx.$t("condition." + ((_b3 = product.value) == null ? void 0 : _b3.condition))), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.year")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString((_c2 = product.value) == null ? void 0 : _c2.year), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.shipping")), 1),
                                              createVNode("td", { class: "text-right" }, [
                                                createVNode("div", { class: "d-flex align-center gap-1 justify-end" }, [
                                                  createVNode(VAvatar, { size: "30" }, {
                                                    default: withCtx(() => {
                                                      var _a4, _b4;
                                                      return [
                                                        createVNode(VImg, {
                                                          alt: "flag",
                                                          cover: "",
                                                          src: (_b4 = unref(countries)[(_a4 = product.value) == null ? void 0 : _a4.shipping_from]) == null ? void 0 : _b4.flag
                                                        }, null, 8, ["src"])
                                                      ];
                                                    }),
                                                    _: 1
                                                  }),
                                                  createVNode("span", null, toDisplayString((_e2 = unref(countries)[(_d2 = product.value) == null ? void 0 : _d2.shipping_from]) == null ? void 0 : _e2.name), 1)
                                                ])
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.sales_area")), 1),
                                              createVNode("td", { class: "text-right" }, [
                                                createVNode(VMenu, {
                                                  transition: "fade-transition",
                                                  "open-on-hover": true
                                                }, {
                                                  activator: withCtx(({ props }) => {
                                                    var _a4, _b4;
                                                    return [
                                                      createVNode("span", props, toDisplayString((_b4 = (_a4 = product.value) == null ? void 0 : _a4.sales_areas) == null ? void 0 : _b4.length) + " \u0441\u0442\u0440\u0430\u043D", 17)
                                                    ];
                                                  }),
                                                  default: withCtx(() => [
                                                    createVNode(VList, {
                                                      nav: "",
                                                      density: "compact"
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a4;
                                                        return [
                                                          (openBlock(true), createBlock(Fragment, null, renderList((_a4 = product.value) == null ? void 0 : _a4.sales_areas, (cn, i) => {
                                                            return openBlock(), createBlock(VListItem, { key: i }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VAvatar, { rounded: "" }, {
                                                                  default: withCtx(() => {
                                                                    var _a5;
                                                                    return [
                                                                      createVNode(VImg, {
                                                                        alt: "flag",
                                                                        src: (_a5 = unref(countries)[cn]) == null ? void 0 : _a5.flag
                                                                      }, null, 8, ["src"])
                                                                    ];
                                                                  }),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              title: withCtx(() => {
                                                                var _a5;
                                                                return [
                                                                  createTextVNode(toDisplayString((_a5 = unref(countries)[cn]) == null ? void 0 : _a5.name), 1)
                                                                ];
                                                              }),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.brand")), 1),
                                              createVNode("td", { class: "text-primary text-right" }, toDisplayString((_g2 = (_f2 = product.value) == null ? void 0 : _f2.brand) == null ? void 0 : _g2.name), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.model")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString((_h2 = product.value) == null ? void 0 : _h2.model), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.warranty")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString((_i2 = product.value) == null ? void 0 : _i2.warranty), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, toDisplayString(_ctx.$t("products.created")), 1),
                                              createVNode("td", { class: "text-right" }, toDisplayString(new Date((_j2 = product.value) == null ? void 0 : _j2.created_at).toLocaleDateString()), 1)
                                            ])
                                          ])
                                        ];
                                      }),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "px-0" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, toDisplayString(_ctx.$t("products.contact_us")), 1),
                                    createVNode(VRow, { class: "pa-2 mt-0" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "4",
                                          class: "pa-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              href: "https://t.me/Keshmed37",
                                              height: "35",
                                              "prepend-icon": "mdi-send",
                                              block: "",
                                              color: "#0088cc",
                                              variant: "flat",
                                              class: "text-none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.telegram")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "4",
                                          class: "pa-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              href: "tel:+998908893700",
                                              height: "35",
                                              "prepend-icon": "mdi-phone",
                                              block: "",
                                              color: "green",
                                              variant: "flat",
                                              class: "text-none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.call")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "4",
                                          class: "pa-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              onClick: ($event) => dialog.value = true,
                                              height: "35",
                                              "prepend-icon": "mdi-cart",
                                              block: "",
                                              color: "primary",
                                              variant: "flat",
                                              class: "text-none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.order")), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
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
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSkeletonLoader, {
                          loading: loading.value,
                          type: "sentences,avatar, paragraph",
                          "min-height": "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              flat: "",
                              border: "",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("products.characteristics")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pt-2 px-0" }, {
                                  default: withCtx(() => [
                                    createVNode(VTable, {
                                      density: "compact",
                                      hover: ""
                                    }, {
                                      default: withCtx(() => {
                                        var _a3;
                                        return [
                                          createVNode("tbody", null, [
                                            (openBlock(true), createBlock(Fragment, null, renderList((_a3 = product.value) == null ? void 0 : _a3.characteristics, (c, i) => {
                                              return openBlock(), createBlock("tr", { key: i }, [
                                                createVNode("td", null, toDisplayString(c.title[_ctx.$i18n.locale]), 1),
                                                createVNode("td", { class: "text-right" }, toDisplayString(c.value[_ctx.$i18n.locale]), 1)
                                              ]);
                                            }), 128))
                                          ])
                                        ];
                                      }),
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
                        }, 8, ["loading"])
                      ]),
                      _: 1
                    }, 512), [
                      [vShow, ((_b2 = (_a2 = product.value) == null ? void 0 : _a2.characteristics) == null ? void 0 : _b2.length) > 0]
                    ]),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSkeletonLoader, {
                          loading: loading.value,
                          type: "sentences,avatar, paragraph",
                          "min-height": "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              flat: "",
                              border: "",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, { class: "text-primary pb-0 text-body-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("products.description")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pt-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => {
                                        var _a3;
                                        return [
                                          createVNode("span", { style: { "white-space": "pre-line" } }, toDisplayString((_a3 = product.value) == null ? void 0 : _a3[`description_${_ctx.$i18n.locale}`]), 1)
                                        ];
                                      }),
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
                        }, 8, ["loading"])
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-100 d-flex pb-5 justify-space-between align-center" }, [
                          createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.similar")), 1)
                        ]),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(similarProduct.value, (item, i) => {
                              return openBlock(), createBlock(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4",
                                lg: "3",
                                key: i
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
                    }, 512), [
                      [vShow, similarProduct.value.length > 0]
                    ])
                  ];
                }),
                _: 1
              }),
              createVNode(VDialog, {
                modelValue: dialog.value,
                "onUpdate:modelValue": ($event) => dialog.value = $event,
                "max-width": "450",
                width: "100%"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "text-primary" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("products.send_order")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "py-3 px-4" }, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            ref_key: "form",
                            ref: form,
                            modelValue: validd.value,
                            "onUpdate:modelValue": ($event) => validd.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "py-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: review.first_name,
                                        "onUpdate:modelValue": ($event) => review.first_name = $event,
                                        class: "border rounded",
                                        flat: "",
                                        "no-resize": "",
                                        "hide-details": "",
                                        required: "",
                                        rules: nameRule,
                                        density: "comfortable",
                                        variant: "outlined",
                                        placeholder: _ctx.$t("products.first_name")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "py-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: review.last_name,
                                        "onUpdate:modelValue": ($event) => review.last_name = $event,
                                        class: "border rounded",
                                        flat: "",
                                        "no-resize": "",
                                        "hide-details": "",
                                        required: "",
                                        rules: nameRule,
                                        density: "comfortable",
                                        variant: "outlined",
                                        placeholder: _ctx.$t("products.last_name")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "py-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: review.phone,
                                        "onUpdate:modelValue": ($event) => review.phone = $event,
                                        class: "border rounded",
                                        flat: "",
                                        "no-resize": "",
                                        "hide-details": "",
                                        required: "",
                                        rules: nameRule,
                                        density: "comfortable",
                                        variant: "outlined",
                                        placeholder: _ctx.$t("products.phone")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "py-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextarea, {
                                        modelValue: review.message,
                                        "onUpdate:modelValue": ($event) => review.message = $event,
                                        class: "border rounded",
                                        flat: "",
                                        "no-resize": "",
                                        "hide-details": "",
                                        required: "",
                                        rules: nameRule,
                                        density: "comfortable",
                                        variant: "outlined",
                                        placeholder: _ctx.$t("products.message")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "py-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        required: "",
                                        "item-props": itemProps,
                                        rules: nameRule,
                                        flat: "",
                                        class: "border rounded",
                                        density: "compact",
                                        "bg-color": "surface",
                                        modelValue: review.country,
                                        "onUpdate:modelValue": ($event) => review.country = $event,
                                        items: unref(countries),
                                        placeholder: _ctx.$t("products.country"),
                                        "item-title": "name",
                                        "hide-details": "",
                                        "item-value": "id",
                                        variant: "outlined",
                                        color: "primary"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "d-flex justify-end pt-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        loading: save_loading.value,
                                        disabled: !validd.value,
                                        flat: "",
                                        onClick: handleReview,
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.send")), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["loading", "disabled"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
