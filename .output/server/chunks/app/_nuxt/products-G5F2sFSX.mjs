import { useSSRContext, defineComponent, ref, reactive, withAsyncContext, withCtx, createVNode, toDisplayString, unref, withModifiers, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { U as useRoute$1, W as useRouter$1, V as VContainer, a as VRow, b as VCol, g as VCard, i as VCardText, d as VTextField, H as VList, f as VIcon, m as VListItem, p as VPagination, k as VAvatar, l as VImg, n as VListItemTitle, I as VListItemSubtitle } from '../server.mjs';
import { u as useHead } from './index-rm2KKCow.mjs';
import { u as useProducts } from './useProducts-3EOAoU1e.mjs';
import { u as useCategories } from './useCategories-RZ6CC0L8.mjs';
import { u as useBrands } from './useBrands-KsJyQ7GL.mjs';
import lodash from 'lodash';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppProductList",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VListItem, mergeProps({
        theme: "light",
        variant: "flat",
        color: "surface",
        link: "",
        to: `/product/${__props.product.slug}`,
        border: "",
        lines: "three",
        rounded: "",
        class: "mb-3 pa-2 pt-0"
      }, _attrs), {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, {
              size: "120",
              rounded: "",
              color: "grey-lighten-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, {
                    alt: ((_a = __props.product) == null ? void 0 : _a.title_uz) + " image",
                    src: ((_d = (_c = (_b = __props.product) == null ? void 0 : _b.images) == null ? void 0 : _c[0]) == null ? void 0 : _d.image) || "/images/nophoto.jpg"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, {
                      alt: ((_e = __props.product) == null ? void 0 : _e.title_uz) + " image",
                      src: ((_h = (_g = (_f = __props.product) == null ? void 0 : _f.images) == null ? void 0 : _g[0]) == null ? void 0 : _h.image) || "/images/nophoto.jpg"
                    }, null, 8, ["alt", "src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, {
                size: "120",
                rounded: "",
                color: "grey-lighten-3"
              }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d;
                  return [
                    createVNode(VImg, {
                      alt: ((_a = __props.product) == null ? void 0 : _a.title_uz) + " image",
                      src: ((_d = (_c = (_b = __props.product) == null ? void 0 : _b.images) == null ? void 0 : _c[0]) == null ? void 0 : _d.image) || "/images/nophoto.jpg"
                    }, null, 8, ["alt", "src"])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VListItemTitle, { class: "text-primary text-body-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.product.brand.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.product.brand.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VListItemTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.product[`title_${_ctx.$i18n.locale}`])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.product[`title_${_ctx.$i18n.locale}`]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VListItemSubtitle, { class: "text-caption" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.product[`description_${_ctx.$i18n.locale}`])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.product[`description_${_ctx.$i18n.locale}`]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VListItemTitle, { class: "text-body-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.product.price)} $`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.product.price) + " $", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VListItemTitle, { class: "text-primary text-body-2" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.product.brand.name), 1)
                ]),
                _: 1
              }),
              createVNode(VListItemTitle, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.product[`title_${_ctx.$i18n.locale}`]), 1)
                ]),
                _: 1
              }),
              createVNode(VListItemSubtitle, { class: "text-caption" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.product[`description_${_ctx.$i18n.locale}`]), 1)
                ]),
                _: 1
              }),
              createVNode(VListItemTitle, { class: "text-body-1" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.product.price) + " $", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppProductList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "products",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u0418\u0441\u043A\u0430\u0442\u044C \u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0435 \u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435",
      meta: [
        { name: "description", content: "\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435. \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B, \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u0435\u0440\u0432\u0438\u0441\u0430. \u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0437\u0434\u0440\u0430\u0432\u043E\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0443 \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u0445 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432." },
        { name: "keywords", content: "\u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435, \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D, \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0437\u0434\u0440\u0430\u0432\u043E\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F, \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u044B, \u043C\u0435\u0434\u0442\u0435\u0445\u043D\u0438\u043A\u0430, \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438, \u043A\u0443\u043F\u0438\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435" }
      ]
    });
    const { getAllProducts } = useProducts();
    const { getTree } = useCategories();
    const { getAllBrands } = useBrands();
    const categoires = ref([]);
    const brands = ref([]);
    const count = ref(0);
    const route = useRoute$1();
    const loading = ref(true);
    const items = ref([]);
    const router = useRouter$1();
    const filters = reactive({
      search: route.query.search || "",
      brand: route.query.brand || "",
      category: route.query.category || "",
      min_price: route.query.min_price || 0,
      max_price: route.query.max_price || 0,
      page: route.query.page || 1,
      for_sale: true
    });
    const setValue = (key, value) => {
      if (route.query[key] == value)
        return;
      const updatedQuery = { ...route.query };
      if (value === 0 || value === "")
        delete updatedQuery[key];
      else
        updatedQuery[key] = value;
      filters[key] = value;
      router.replace({ path: "/products", query: updatedQuery });
      getProducts();
    };
    const getProducts = lodash.debounce(async () => {
      loading.value = true;
      items.value = [];
      const data = await getAllProducts("?expand=images");
      items.value = data.results;
      loading.value = false;
    }, 500);
    const init = async () => {
      const [c, b, _] = await Promise.all([
        getTree(),
        getAllBrands(""),
        getProducts()
      ]);
      categoires.value = c;
      brands.value = b.results;
    };
    [__temp, __restore] = withAsyncContext(() => init()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppProductList = _sfc_main$1;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "4",
                    class: "pr-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          flat: "",
                          border: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, { class: "w-100 text-primary d-flex justify-space-between align-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>${ssrInterpolate(_ctx.$t("products.search_by_name"))}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, toDisplayString(_ctx.$t("products.search_by_name")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "py-0 pb-1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: _ctx.$t("products.search_by_name"),
                                      "append-inner-icon": "mdi-magnify",
                                      flat: "",
                                      density: "compact",
                                      class: "border rounded",
                                      "hide-details": "",
                                      variant: "solo",
                                      "bg-color": "background",
                                      color: "primary",
                                      modelValue: unref(filters).search,
                                      "onUpdate:modelValue": [($event) => unref(filters).search = $event, ($event) => setValue("search", $event)]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        placeholder: _ctx.$t("products.search_by_name"),
                                        "append-inner-icon": "mdi-magnify",
                                        flat: "",
                                        density: "compact",
                                        class: "border rounded",
                                        "hide-details": "",
                                        variant: "solo",
                                        "bg-color": "background",
                                        color: "primary",
                                        modelValue: unref(filters).search,
                                        "onUpdate:modelValue": [($event) => unref(filters).search = $event, ($event) => setValue("search", $event)]
                                      }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "pb-0 pt-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-primary"${_scopeId5}>${ssrInterpolate(_ctx.$t("products.search_by_price"))}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.search_by_price")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "pb-0 pt-2 px-3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, { class: "pa-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            class: "pa-2",
                                            cols: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  min: "0",
                                                  modelValue: unref(filters).min_price,
                                                  "onUpdate:modelValue": [($event) => unref(filters).min_price = $event, ($event) => setValue("min_price", +$event)],
                                                  "bg-color": "background",
                                                  class: "border rounded",
                                                  type: "number",
                                                  variant: "solo",
                                                  flat: "",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  placeholder: _ctx.$t("products.min")
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    min: "0",
                                                    modelValue: unref(filters).min_price,
                                                    "onUpdate:modelValue": [($event) => unref(filters).min_price = $event, ($event) => setValue("min_price", +$event)],
                                                    "bg-color": "background",
                                                    class: "border rounded",
                                                    type: "number",
                                                    variant: "solo",
                                                    flat: "",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    placeholder: _ctx.$t("products.min")
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            class: "pa-2",
                                            cols: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  min: "0",
                                                  modelValue: unref(filters).max_price,
                                                  "onUpdate:modelValue": [($event) => unref(filters).max_price = $event, ($event) => setValue("max_price", +$event)],
                                                  "bg-color": "background",
                                                  class: "border rounded",
                                                  type: "number",
                                                  variant: "solo",
                                                  flat: "",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  placeholder: _ctx.$t("products.max")
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    min: "0",
                                                    modelValue: unref(filters).max_price,
                                                    "onUpdate:modelValue": [($event) => unref(filters).max_price = $event, ($event) => setValue("max_price", +$event)],
                                                    "bg-color": "background",
                                                    class: "border rounded",
                                                    type: "number",
                                                    variant: "solo",
                                                    flat: "",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    placeholder: _ctx.$t("products.max")
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              class: "pa-2",
                                              cols: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  min: "0",
                                                  modelValue: unref(filters).min_price,
                                                  "onUpdate:modelValue": [($event) => unref(filters).min_price = $event, ($event) => setValue("min_price", +$event)],
                                                  "bg-color": "background",
                                                  class: "border rounded",
                                                  type: "number",
                                                  variant: "solo",
                                                  flat: "",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  placeholder: _ctx.$t("products.min")
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              class: "pa-2",
                                              cols: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  min: "0",
                                                  modelValue: unref(filters).max_price,
                                                  "onUpdate:modelValue": [($event) => unref(filters).max_price = $event, ($event) => setValue("max_price", +$event)],
                                                  "bg-color": "background",
                                                  class: "border rounded",
                                                  type: "number",
                                                  variant: "solo",
                                                  flat: "",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  placeholder: _ctx.$t("products.max")
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
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
                                      createVNode(VRow, { class: "pa-2" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            class: "pa-2",
                                            cols: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                min: "0",
                                                modelValue: unref(filters).min_price,
                                                "onUpdate:modelValue": [($event) => unref(filters).min_price = $event, ($event) => setValue("min_price", +$event)],
                                                "bg-color": "background",
                                                class: "border rounded",
                                                type: "number",
                                                variant: "solo",
                                                flat: "",
                                                "hide-details": "",
                                                density: "compact",
                                                placeholder: _ctx.$t("products.min")
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            class: "pa-2",
                                            cols: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                min: "0",
                                                modelValue: unref(filters).max_price,
                                                "onUpdate:modelValue": [($event) => unref(filters).max_price = $event, ($event) => setValue("max_price", +$event)],
                                                "bg-color": "background",
                                                class: "border rounded",
                                                type: "number",
                                                variant: "solo",
                                                flat: "",
                                                "hide-details": "",
                                                density: "compact",
                                                placeholder: _ctx.$t("products.max")
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
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
                              _push5(ssrRenderComponent(VCardText, { class: "pb-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-primary"${_scopeId5}>${ssrInterpolate(_ctx.$t("products.categories"))}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.categories")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "py-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VList, {
                                      items: unref(categoires),
                                      "item-children": "children",
                                      "item-title": `name_${_ctx.$i18n.locale}`,
                                      density: "compact",
                                      nav: "",
                                      class: "px-0",
                                      "open-strategy": "single",
                                      "item-value": "id",
                                      mandatory: "",
                                      modelValue: unref(filters).category,
                                      "onUpdate:modelValue": ($event) => unref(filters).category = $event,
                                      "active-class": "text-primary"
                                    }, {
                                      title: withCtx(({ title, item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="${ssrRenderClass([{ "text-primary": unref(filters).category === item.id }, "font-weight-light text-hover-link"])}"${_scopeId6}>${ssrInterpolate(title)}</span>`);
                                        } else {
                                          return [
                                            createVNode("span", {
                                              class: ["font-weight-light text-hover-link", { "text-primary": unref(filters).category === item.id }],
                                              onClick: withModifiers(($event) => setValue("category", item.id), ["stop"])
                                            }, toDisplayString(title), 11, ["onClick"])
                                          ];
                                        }
                                      }),
                                      append: withCtx(({ item, isActive }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (item.children.length) {
                                            _push7(ssrRenderComponent(VIcon, null, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-${ssrInterpolate(isActive ? "minus" : "plus")}`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-" + toDisplayString(isActive ? "minus" : "plus"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            item.children.length ? (openBlock(), createBlock(VIcon, { key: 0 }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-" + toDisplayString(isActive ? "minus" : "plus"), 1)
                                              ]),
                                              _: 2
                                            }, 1024)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VList, {
                                        items: unref(categoires),
                                        "item-children": "children",
                                        "item-title": `name_${_ctx.$i18n.locale}`,
                                        density: "compact",
                                        nav: "",
                                        class: "px-0",
                                        "open-strategy": "single",
                                        "item-value": "id",
                                        mandatory: "",
                                        modelValue: unref(filters).category,
                                        "onUpdate:modelValue": ($event) => unref(filters).category = $event,
                                        "active-class": "text-primary"
                                      }, {
                                        title: withCtx(({ title, item }) => [
                                          createVNode("span", {
                                            class: ["font-weight-light text-hover-link", { "text-primary": unref(filters).category === item.id }],
                                            onClick: withModifiers(($event) => setValue("category", item.id), ["stop"])
                                          }, toDisplayString(title), 11, ["onClick"])
                                        ]),
                                        append: withCtx(({ item, isActive }) => [
                                          item.children.length ? (openBlock(), createBlock(VIcon, { key: 0 }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-" + toDisplayString(isActive ? "minus" : "plus"), 1)
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["items", "item-title", "modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "py-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-primary"${_scopeId5}>${ssrInterpolate(_ctx.$t("products.brands"))}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.brands")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "py-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VList, {
                                      density: "compact",
                                      nav: "",
                                      class: "px-0",
                                      mandatory: "",
                                      color: "primary"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(unref(brands), (b, i) => {
                                            _push7(ssrRenderComponent(VListItem, {
                                              class: "py-0",
                                              key: i,
                                              active: unref(filters).brand === b.id,
                                              height: "25",
                                              value: b.id,
                                              link: "",
                                              onClick: ($event) => setValue("brand", b.id)
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(b.name)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(b.name), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b, i) => {
                                              return openBlock(), createBlock(VListItem, {
                                                class: "py-0",
                                                key: i,
                                                active: unref(filters).brand === b.id,
                                                height: "25",
                                                value: b.id,
                                                link: "",
                                                onClick: ($event) => setValue("brand", b.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(b.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["active", "value", "onClick"]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VList, {
                                        density: "compact",
                                        nav: "",
                                        class: "px-0",
                                        mandatory: "",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b, i) => {
                                            return openBlock(), createBlock(VListItem, {
                                              class: "py-0",
                                              key: i,
                                              active: unref(filters).brand === b.id,
                                              height: "25",
                                              value: b.id,
                                              link: "",
                                              onClick: ($event) => setValue("brand", b.id)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(b.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["active", "value", "onClick"]);
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
                                createVNode(VCardText, { class: "w-100 text-primary d-flex justify-space-between align-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, toDisplayString(_ctx.$t("products.search_by_name")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "py-0 pb-1" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      placeholder: _ctx.$t("products.search_by_name"),
                                      "append-inner-icon": "mdi-magnify",
                                      flat: "",
                                      density: "compact",
                                      class: "border rounded",
                                      "hide-details": "",
                                      variant: "solo",
                                      "bg-color": "background",
                                      color: "primary",
                                      modelValue: unref(filters).search,
                                      "onUpdate:modelValue": [($event) => unref(filters).search = $event, ($event) => setValue("search", $event)]
                                    }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pb-0 pt-2" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.search_by_price")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pb-0 pt-2 px-3" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, { class: "pa-2" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          class: "pa-2",
                                          cols: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              min: "0",
                                              modelValue: unref(filters).min_price,
                                              "onUpdate:modelValue": [($event) => unref(filters).min_price = $event, ($event) => setValue("min_price", +$event)],
                                              "bg-color": "background",
                                              class: "border rounded",
                                              type: "number",
                                              variant: "solo",
                                              flat: "",
                                              "hide-details": "",
                                              density: "compact",
                                              placeholder: _ctx.$t("products.min")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          class: "pa-2",
                                          cols: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              min: "0",
                                              modelValue: unref(filters).max_price,
                                              "onUpdate:modelValue": [($event) => unref(filters).max_price = $event, ($event) => setValue("max_price", +$event)],
                                              "bg-color": "background",
                                              class: "border rounded",
                                              type: "number",
                                              variant: "solo",
                                              flat: "",
                                              "hide-details": "",
                                              density: "compact",
                                              placeholder: _ctx.$t("products.max")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pb-0" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.categories")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "py-0" }, {
                                  default: withCtx(() => [
                                    createVNode(VList, {
                                      items: unref(categoires),
                                      "item-children": "children",
                                      "item-title": `name_${_ctx.$i18n.locale}`,
                                      density: "compact",
                                      nav: "",
                                      class: "px-0",
                                      "open-strategy": "single",
                                      "item-value": "id",
                                      mandatory: "",
                                      modelValue: unref(filters).category,
                                      "onUpdate:modelValue": ($event) => unref(filters).category = $event,
                                      "active-class": "text-primary"
                                    }, {
                                      title: withCtx(({ title, item }) => [
                                        createVNode("span", {
                                          class: ["font-weight-light text-hover-link", { "text-primary": unref(filters).category === item.id }],
                                          onClick: withModifiers(($event) => setValue("category", item.id), ["stop"])
                                        }, toDisplayString(title), 11, ["onClick"])
                                      ]),
                                      append: withCtx(({ item, isActive }) => [
                                        item.children.length ? (openBlock(), createBlock(VIcon, { key: 0 }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-" + toDisplayString(isActive ? "minus" : "plus"), 1)
                                          ]),
                                          _: 2
                                        }, 1024)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["items", "item-title", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "py-0" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.brands")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "py-0" }, {
                                  default: withCtx(() => [
                                    createVNode(VList, {
                                      density: "compact",
                                      nav: "",
                                      class: "px-0",
                                      mandatory: "",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b, i) => {
                                          return openBlock(), createBlock(VListItem, {
                                            class: "py-0",
                                            key: i,
                                            active: unref(filters).brand === b.id,
                                            height: "25",
                                            value: b.id,
                                            link: "",
                                            onClick: ($event) => setValue("brand", b.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(b.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["active", "value", "onClick"]);
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, {
                            flat: "",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "w-100 text-primary d-flex justify-space-between align-center" }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(_ctx.$t("products.search_by_name")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "py-0 pb-1" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    placeholder: _ctx.$t("products.search_by_name"),
                                    "append-inner-icon": "mdi-magnify",
                                    flat: "",
                                    density: "compact",
                                    class: "border rounded",
                                    "hide-details": "",
                                    variant: "solo",
                                    "bg-color": "background",
                                    color: "primary",
                                    modelValue: unref(filters).search,
                                    "onUpdate:modelValue": [($event) => unref(filters).search = $event, ($event) => setValue("search", $event)]
                                  }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "pb-0 pt-2" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.search_by_price")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "pb-0 pt-2 px-3" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, { class: "pa-2" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        class: "pa-2",
                                        cols: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            min: "0",
                                            modelValue: unref(filters).min_price,
                                            "onUpdate:modelValue": [($event) => unref(filters).min_price = $event, ($event) => setValue("min_price", +$event)],
                                            "bg-color": "background",
                                            class: "border rounded",
                                            type: "number",
                                            variant: "solo",
                                            flat: "",
                                            "hide-details": "",
                                            density: "compact",
                                            placeholder: _ctx.$t("products.min")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        class: "pa-2",
                                        cols: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            min: "0",
                                            modelValue: unref(filters).max_price,
                                            "onUpdate:modelValue": [($event) => unref(filters).max_price = $event, ($event) => setValue("max_price", +$event)],
                                            "bg-color": "background",
                                            class: "border rounded",
                                            type: "number",
                                            variant: "solo",
                                            flat: "",
                                            "hide-details": "",
                                            density: "compact",
                                            placeholder: _ctx.$t("products.max")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "pb-0" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.categories")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "py-0" }, {
                                default: withCtx(() => [
                                  createVNode(VList, {
                                    items: unref(categoires),
                                    "item-children": "children",
                                    "item-title": `name_${_ctx.$i18n.locale}`,
                                    density: "compact",
                                    nav: "",
                                    class: "px-0",
                                    "open-strategy": "single",
                                    "item-value": "id",
                                    mandatory: "",
                                    modelValue: unref(filters).category,
                                    "onUpdate:modelValue": ($event) => unref(filters).category = $event,
                                    "active-class": "text-primary"
                                  }, {
                                    title: withCtx(({ title, item }) => [
                                      createVNode("span", {
                                        class: ["font-weight-light text-hover-link", { "text-primary": unref(filters).category === item.id }],
                                        onClick: withModifiers(($event) => setValue("category", item.id), ["stop"])
                                      }, toDisplayString(title), 11, ["onClick"])
                                    ]),
                                    append: withCtx(({ item, isActive }) => [
                                      item.children.length ? (openBlock(), createBlock(VIcon, { key: 0 }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-" + toDisplayString(isActive ? "minus" : "plus"), 1)
                                        ]),
                                        _: 2
                                      }, 1024)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["items", "item-title", "modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "py-0" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.brands")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "py-0" }, {
                                default: withCtx(() => [
                                  createVNode(VList, {
                                    density: "compact",
                                    nav: "",
                                    class: "px-0",
                                    mandatory: "",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b, i) => {
                                        return openBlock(), createBlock(VListItem, {
                                          class: "py-0",
                                          key: i,
                                          active: unref(filters).brand === b.id,
                                          height: "25",
                                          value: b.id,
                                          link: "",
                                          onClick: ($event) => setValue("brand", b.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(b.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["active", "value", "onClick"]);
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
                  }, _parent3, _scopeId2));
                  if (unref(loading)) {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      sm: "8"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="text-center text-grey font-weight-light"${_scopeId3}>${ssrInterpolate(_ctx.$t("loading"))}...</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-center text-grey font-weight-light" }, toDisplayString(_ctx.$t("loading")) + "...", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      sm: "8"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VList, {
                            class: "py-0 px-0",
                            "bg-color": "background"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (!unref(loading) && unref(items).length === 0) {
                                  _push5(`<p class="text-center text-grey font-weight-light"${_scopeId4}>${ssrInterpolate(_ctx.$t("no_data"))}</p>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(items), (item, i) => {
                                  _push5(ssrRenderComponent(_component_AppProductList, {
                                    key: i,
                                    product: item
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  !unref(loading) && unref(items).length === 0 ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-center text-grey font-weight-light"
                                  }, toDisplayString(_ctx.$t("no_data")), 1)) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                                    return openBlock(), createBlock(_component_AppProductList, {
                                      key: i,
                                      product: item
                                    }, null, 8, ["product"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VPagination, {
                            density: "comfortable",
                            length: Math.ceil(unref(count) / 25),
                            "model-value": +unref(filters).page,
                            "onUpdate:modelValue": ($event) => setValue("page", $event),
                            variant: "flat",
                            "active-color": "primary"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VList, {
                              class: "py-0 px-0",
                              "bg-color": "background"
                            }, {
                              default: withCtx(() => [
                                !unref(loading) && unref(items).length === 0 ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-center text-grey font-weight-light"
                                }, toDisplayString(_ctx.$t("no_data")), 1)) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                                  return openBlock(), createBlock(_component_AppProductList, {
                                    key: i,
                                    product: item
                                  }, null, 8, ["product"]);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode(VPagination, {
                              density: "comfortable",
                              length: Math.ceil(unref(count) / 25),
                              "model-value": +unref(filters).page,
                              "onUpdate:modelValue": ($event) => setValue("page", $event),
                              variant: "flat",
                              "active-color": "primary"
                            }, null, 8, ["length", "model-value", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "4",
                      class: "pr-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          flat: "",
                          border: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardText, { class: "w-100 text-primary d-flex justify-space-between align-center" }, {
                              default: withCtx(() => [
                                createVNode("span", null, toDisplayString(_ctx.$t("products.search_by_name")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "py-0 pb-1" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  placeholder: _ctx.$t("products.search_by_name"),
                                  "append-inner-icon": "mdi-magnify",
                                  flat: "",
                                  density: "compact",
                                  class: "border rounded",
                                  "hide-details": "",
                                  variant: "solo",
                                  "bg-color": "background",
                                  color: "primary",
                                  modelValue: unref(filters).search,
                                  "onUpdate:modelValue": [($event) => unref(filters).search = $event, ($event) => setValue("search", $event)]
                                }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "pb-0 pt-2" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.search_by_price")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "pb-0 pt-2 px-3" }, {
                              default: withCtx(() => [
                                createVNode(VRow, { class: "pa-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      class: "pa-2",
                                      cols: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          min: "0",
                                          modelValue: unref(filters).min_price,
                                          "onUpdate:modelValue": [($event) => unref(filters).min_price = $event, ($event) => setValue("min_price", +$event)],
                                          "bg-color": "background",
                                          class: "border rounded",
                                          type: "number",
                                          variant: "solo",
                                          flat: "",
                                          "hide-details": "",
                                          density: "compact",
                                          placeholder: _ctx.$t("products.min")
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      class: "pa-2",
                                      cols: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          min: "0",
                                          modelValue: unref(filters).max_price,
                                          "onUpdate:modelValue": [($event) => unref(filters).max_price = $event, ($event) => setValue("max_price", +$event)],
                                          "bg-color": "background",
                                          class: "border rounded",
                                          type: "number",
                                          variant: "solo",
                                          flat: "",
                                          "hide-details": "",
                                          density: "compact",
                                          placeholder: _ctx.$t("products.max")
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "pb-0" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.categories")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "py-0" }, {
                              default: withCtx(() => [
                                createVNode(VList, {
                                  items: unref(categoires),
                                  "item-children": "children",
                                  "item-title": `name_${_ctx.$i18n.locale}`,
                                  density: "compact",
                                  nav: "",
                                  class: "px-0",
                                  "open-strategy": "single",
                                  "item-value": "id",
                                  mandatory: "",
                                  modelValue: unref(filters).category,
                                  "onUpdate:modelValue": ($event) => unref(filters).category = $event,
                                  "active-class": "text-primary"
                                }, {
                                  title: withCtx(({ title, item }) => [
                                    createVNode("span", {
                                      class: ["font-weight-light text-hover-link", { "text-primary": unref(filters).category === item.id }],
                                      onClick: withModifiers(($event) => setValue("category", item.id), ["stop"])
                                    }, toDisplayString(title), 11, ["onClick"])
                                  ]),
                                  append: withCtx(({ item, isActive }) => [
                                    item.children.length ? (openBlock(), createBlock(VIcon, { key: 0 }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-" + toDisplayString(isActive ? "minus" : "plus"), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["items", "item-title", "modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "py-0" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.brands")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "py-0" }, {
                              default: withCtx(() => [
                                createVNode(VList, {
                                  density: "compact",
                                  nav: "",
                                  class: "px-0",
                                  mandatory: "",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b, i) => {
                                      return openBlock(), createBlock(VListItem, {
                                        class: "py-0",
                                        key: i,
                                        active: unref(filters).brand === b.id,
                                        height: "25",
                                        value: b.id,
                                        link: "",
                                        onClick: ($event) => setValue("brand", b.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(b.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["active", "value", "onClick"]);
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
                    }),
                    unref(loading) ? (openBlock(), createBlock(VCol, {
                      key: 0,
                      cols: "12",
                      sm: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-center text-grey font-weight-light" }, toDisplayString(_ctx.$t("loading")) + "...", 1)
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(VCol, {
                      key: 1,
                      cols: "12",
                      sm: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(VList, {
                          class: "py-0 px-0",
                          "bg-color": "background"
                        }, {
                          default: withCtx(() => [
                            !unref(loading) && unref(items).length === 0 ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-center text-grey font-weight-light"
                            }, toDisplayString(_ctx.$t("no_data")), 1)) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                              return openBlock(), createBlock(_component_AppProductList, {
                                key: i,
                                product: item
                              }, null, 8, ["product"]);
                            }), 128))
                          ]),
                          _: 1
                        }),
                        createVNode(VPagination, {
                          density: "comfortable",
                          length: Math.ceil(unref(count) / 25),
                          "model-value": +unref(filters).page,
                          "onUpdate:modelValue": ($event) => setValue("page", $event),
                          variant: "flat",
                          "active-color": "primary"
                        }, null, 8, ["length", "model-value", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "4",
                    class: "pr-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        flat: "",
                        border: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "w-100 text-primary d-flex justify-space-between align-center" }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(_ctx.$t("products.search_by_name")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "py-0 pb-1" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                placeholder: _ctx.$t("products.search_by_name"),
                                "append-inner-icon": "mdi-magnify",
                                flat: "",
                                density: "compact",
                                class: "border rounded",
                                "hide-details": "",
                                variant: "solo",
                                "bg-color": "background",
                                color: "primary",
                                modelValue: unref(filters).search,
                                "onUpdate:modelValue": [($event) => unref(filters).search = $event, ($event) => setValue("search", $event)]
                              }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "pb-0 pt-2" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.search_by_price")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "pb-0 pt-2 px-3" }, {
                            default: withCtx(() => [
                              createVNode(VRow, { class: "pa-2" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    class: "pa-2",
                                    cols: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        min: "0",
                                        modelValue: unref(filters).min_price,
                                        "onUpdate:modelValue": [($event) => unref(filters).min_price = $event, ($event) => setValue("min_price", +$event)],
                                        "bg-color": "background",
                                        class: "border rounded",
                                        type: "number",
                                        variant: "solo",
                                        flat: "",
                                        "hide-details": "",
                                        density: "compact",
                                        placeholder: _ctx.$t("products.min")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    class: "pa-2",
                                    cols: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        min: "0",
                                        modelValue: unref(filters).max_price,
                                        "onUpdate:modelValue": [($event) => unref(filters).max_price = $event, ($event) => setValue("max_price", +$event)],
                                        "bg-color": "background",
                                        class: "border rounded",
                                        type: "number",
                                        variant: "solo",
                                        flat: "",
                                        "hide-details": "",
                                        density: "compact",
                                        placeholder: _ctx.$t("products.max")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "pb-0" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.categories")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "py-0" }, {
                            default: withCtx(() => [
                              createVNode(VList, {
                                items: unref(categoires),
                                "item-children": "children",
                                "item-title": `name_${_ctx.$i18n.locale}`,
                                density: "compact",
                                nav: "",
                                class: "px-0",
                                "open-strategy": "single",
                                "item-value": "id",
                                mandatory: "",
                                modelValue: unref(filters).category,
                                "onUpdate:modelValue": ($event) => unref(filters).category = $event,
                                "active-class": "text-primary"
                              }, {
                                title: withCtx(({ title, item }) => [
                                  createVNode("span", {
                                    class: ["font-weight-light text-hover-link", { "text-primary": unref(filters).category === item.id }],
                                    onClick: withModifiers(($event) => setValue("category", item.id), ["stop"])
                                  }, toDisplayString(title), 11, ["onClick"])
                                ]),
                                append: withCtx(({ item, isActive }) => [
                                  item.children.length ? (openBlock(), createBlock(VIcon, { key: 0 }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-" + toDisplayString(isActive ? "minus" : "plus"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["items", "item-title", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "py-0" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-primary" }, toDisplayString(_ctx.$t("products.brands")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "py-0" }, {
                            default: withCtx(() => [
                              createVNode(VList, {
                                density: "compact",
                                nav: "",
                                class: "px-0",
                                mandatory: "",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b, i) => {
                                    return openBlock(), createBlock(VListItem, {
                                      class: "py-0",
                                      key: i,
                                      active: unref(filters).brand === b.id,
                                      height: "25",
                                      value: b.id,
                                      link: "",
                                      onClick: ($event) => setValue("brand", b.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(b.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["active", "value", "onClick"]);
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
                  }),
                  unref(loading) ? (openBlock(), createBlock(VCol, {
                    key: 0,
                    cols: "12",
                    sm: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-center text-grey font-weight-light" }, toDisplayString(_ctx.$t("loading")) + "...", 1)
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(VCol, {
                    key: 1,
                    cols: "12",
                    sm: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(VList, {
                        class: "py-0 px-0",
                        "bg-color": "background"
                      }, {
                        default: withCtx(() => [
                          !unref(loading) && unref(items).length === 0 ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-center text-grey font-weight-light"
                          }, toDisplayString(_ctx.$t("no_data")), 1)) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                            return openBlock(), createBlock(_component_AppProductList, {
                              key: i,
                              product: item
                            }, null, 8, ["product"]);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createVNode(VPagination, {
                        density: "comfortable",
                        length: Math.ceil(unref(count) / 25),
                        "model-value": +unref(filters).page,
                        "onUpdate:modelValue": ($event) => setValue("page", $event),
                        variant: "flat",
                        "active-color": "primary"
                      }, null, 8, ["length", "model-value", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
