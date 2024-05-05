import { defineComponent, ref, computed, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, isRef, openBlock, createBlock, createCommentVNode, withDirectives, vShow, Fragment, renderList, useSSRContext, nextTick } from 'vue';
import { u as useI18n, V as VContainer, a as VRow, b as VCol, c as VTextField, d as VBtn, e as VIcon, f as VCard, g as VCardTitle, h as VCardText, t as VDataTableServer, v as VChip, l as VListItem, j as VAvatar, k as VImg, m as VListItemTitle, n as VSelect, o as VPagination, p as VDialog, q as VForm, r as VLabel, w as VAutocomplete, x as VTextarea, y as VTable, R as Ripple, s as VFileInput, z as VSlideGroup, A as VSlideGroupItem, B as VSwitch } from './server.mjs';
import { u as useProducts } from './useProducts-C6gC55hV.mjs';
import { u as useCategories } from './useCategories-DHwYENQn.mjs';
import { u as useBrands } from './useBrands-B30sX3nV.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderAttrs, ssrGetDirectiveProps } from 'vue/server-renderer';
import lodash from 'lodash';
import { c as countries, a as conditions } from './index-3dIgU76L.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { getAllProducts, createProduct, deleteProduct, sendImage, updateProduct } = useProducts();
    const { getAllCategories } = useCategories();
    const { getAllBrands } = useBrands();
    const nameRule = [(v) => !!v || "asdf"];
    const { debounce } = lodash;
    const page = ref(1);
    const search = ref("");
    const perpage = ref(25);
    const totalCount = ref(0);
    const loading = ref(false);
    const images = ref([]);
    const save_loading = ref(false);
    const brands = ref([]);
    const items = ref([]);
    const dialog = ref(false);
    const editedId = ref(null);
    const categories = ref([]);
    const editedIndex = ref(null);
    const form = ref(null);
    const itemProps = (item) => ({ title: item.name, "append-avatar": item.flag });
    const headers = [
      { title: "products.title", key: "title", sortable: false },
      { title: "products.price", key: "price", sortable: false },
      { title: "products.category", key: "category", sortable: false },
      { title: "products.brand", key: "brand", sortable: false },
      { title: "products.model", key: "model", sortable: false },
      { title: "products.condition", key: "condition", sortable: false },
      { title: "products.shipping", key: "shipping_from", sortable: false },
      { title: "products.warranty", key: "warranty", sortable: false },
      { title: "products.year", key: "year", sortable: false },
      { title: "admin.show", key: "for_sale", sortable: false },
      { title: "admin.actions", align: "end", key: "actions", sortable: false }
    ];
    const product = ref({
      brand: null,
      category: null,
      condition: "new",
      for_sale: true,
      characteristics: [],
      model: "",
      price: null,
      sales_areas: [],
      shipping_from: null,
      warranty: null,
      year: 2e3,
      description_en: "",
      description_ru: "",
      description_uz: "",
      title_en: "",
      title_ru: "",
      title_uz: ""
    });
    const addCharasteristic = () => {
      product.value.characteristics.push({
        title: { uz: "", ru: "", en: "" },
        value: { uz: "", ru: "", en: "" }
      });
    };
    const removeValue = (i, key) => product.value[key].splice(i, 1);
    const qs = computed(() => {
      const params = new URLSearchParams();
      if (page.value)
        params.append("page", String(page.value));
      if (perpage.value)
        params.append("limit", String(perpage.value));
      if (search.value.trim())
        params.append("search", search.value);
      return "?expand=category,images,brand&" + params.toString();
    });
    const perpagetext = computed(() => {
      const page_1 = (page.value - 1) * perpage.value;
      return `${page_1 + 1}-${page_1 + items.value.length} / ${totalCount.value}`;
    });
    const localizedHeaders = computed(() => {
      return headers.map((h) => ({ ...h, title: t(h.title) }));
    });
    const debounceSearch = debounce((e) => {
      search.value = e;
      page.value = 1;
    }, 500);
    const loadItems = async () => {
      loading.value = true;
      const data = await getAllProducts(qs.value);
      items.value = data.results;
      totalCount.value = data.count;
      loading.value = false;
    };
    const getBlobImage = (image) => {
      return URL.createObjectURL(image);
    };
    const pushImages = (e) => {
      images.value.push(...e.target.files);
    };
    const save = async () => {
      var _a, _b;
      const { valid } = await ((_a = form.value) == null ? void 0 : _a.validate());
      if (!valid)
        return;
      save_loading.value = true;
      try {
        if (editedId.value) {
          if (typeof product.value.brand === "object")
            product.value.brand = product.value.brand.id;
          if (typeof product.value.category === "object")
            product.value.category = product.value.category.id;
          (_b = product.value.images) == null ? void 0 : _b.map((im) => im.id);
          const data = await updateProduct(editedId.value, product.value);
          Object.assign(items.value[editedIndex.value], {
            ...data,
            category: categories.value.find((c) => c.id === data.category),
            brand: brands.value.find((b) => b.id === data.brand)
          });
        } else {
          const data = await createProduct(product.value);
          editedId.value = data.slug;
          items.value.push({
            ...data,
            category: categories.value.find((c) => c.id === data.category),
            brand: brands.value.find((b) => b.id === data.brand)
          });
        }
        images.value && images.value.forEach(async (image) => {
          var _a2;
          var form_data = new FormData();
          form_data.append("image", image);
          const d = await sendImage(editedId.value, form_data);
          Object.assign(items.value.find((p) => p.id === d.product), {
            images: [
              ...((_a2 = items.value.find((p) => p.id === d.product)) == null ? void 0 : _a2.images) || [],
              d
            ]
          });
        });
        close();
      } catch (error) {
        console.log(error);
      } finally {
        save_loading.value = false;
      }
    };
    const editItem = (index, item) => {
      editedId.value = item.slug;
      editedIndex.value = index;
      product.value = Object.assign({}, item);
      dialog.value = true;
    };
    const deleteItem = async (i, id) => {
      if (!confirm("Ushbu malumotni o'chirmoqchimisiz?"))
        return;
      await deleteProduct(id);
      items.value.splice(i, 1);
    };
    const close = () => {
      dialog.value = false;
      nextTick(() => {
        var _a;
        delete product.value.characteristics;
        product.value = Object.assign({}, {
          brand: null,
          category: null,
          condition: "new",
          for_sale: true,
          model: "",
          price: null,
          sales_areas: [],
          shipping_from: null,
          warranty: null,
          year: 2e3,
          description_en: "",
          description_ru: "",
          description_uz: "",
          title_en: "",
          title_ru: "",
          title_uz: ""
        });
        editedId.value = null;
        editedIndex.value = null;
        images.value = [];
        (_a = form.value) == null ? void 0 : _a.reset();
      });
    };
    const init = async () => {
      const [c, b] = await Promise.all([getAllCategories(""), getAllBrands("")]);
      categories.value = c.results;
      brands.value = b.results;
    };
    init();
    watch(dialog, (v) => v || close());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "py-0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              justify: "space-between",
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "9",
                    sm: "6",
                    md: "4",
                    class: "pb-0 pr-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          "bg-color": "surface",
                          "onUpdate:modelValue": unref(debounceSearch),
                          placeholder: _ctx.$t("admin.search"),
                          "append-inner-icon": "mdi-magnify",
                          "hide-details": "",
                          density: "compact",
                          variant: "solo",
                          flat: "",
                          class: "border rounded"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            "bg-color": "surface",
                            "onUpdate:modelValue": unref(debounceSearch),
                            placeholder: _ctx.$t("admin.search"),
                            "append-inner-icon": "mdi-magnify",
                            "hide-details": "",
                            density: "compact",
                            variant: "solo",
                            flat: "",
                            class: "border rounded"
                          }, null, 8, ["onUpdate:modelValue", "placeholder"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "3",
                    sm: "4",
                    md: "2",
                    class: "pb-0 d-flex justify-end"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => dialog.value = true,
                          elevation: "2",
                          color: "primary",
                          size: "40",
                          width: "100%"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { icon: "mdi-plus" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, { icon: "mdi-plus" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            onClick: ($event) => dialog.value = true,
                            elevation: "2",
                            color: "primary",
                            size: "40",
                            width: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "mdi-plus" })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          flat: "",
                          border: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, { class: "px-4 pt-3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("admin.products"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("admin.products")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "px-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="responsive-datatable"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VDataTableServer, {
                                      search: unref(search),
                                      density: "comfortable",
                                      loading: unref(loading),
                                      hover: "",
                                      "items-length": unref(totalCount),
                                      headers: unref(localizedHeaders),
                                      "no-data-text": _ctx.$t("no_data"),
                                      "loading-text": _ctx.$t("loading") + "...",
                                      items: unref(items),
                                      "item-value": "id",
                                      "items-per-page": unref(perpage),
                                      "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                      "onUpdate:options": loadItems
                                    }, {
                                      bottom: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7)
                                          ;
                                        else {
                                          return [];
                                        }
                                      }),
                                      "item.actions": withCtx(({ item, index, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}><div class="d-flex w-100 justify-space-end align-center"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VBtn, {
                                            onClick: ($event) => editItem(index, item),
                                            color: "light-blue-accent-4",
                                            size: "30",
                                            flat: "",
                                            class: "mr-1"
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, { icon: "mdi-pencil" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VIcon, { icon: "mdi-pencil" })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            onClick: ($event) => deleteItem(index, item.id),
                                            color: "red",
                                            size: "30",
                                            flat: ""
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, { icon: "mdi-delete" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VIcon, { icon: "mdi-delete" })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              createVNode("div", { class: "d-flex w-100 justify-space-end align-center" }, [
                                                createVNode(VBtn, {
                                                  onClick: ($event) => editItem(index, item),
                                                  color: "light-blue-accent-4",
                                                  size: "30",
                                                  flat: "",
                                                  class: "mr-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { icon: "mdi-pencil" })
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]),
                                                createVNode(VBtn, {
                                                  onClick: ($event) => deleteItem(index, item.id),
                                                  color: "red",
                                                  size: "30",
                                                  flat: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { icon: "mdi-delete" })
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"])
                                              ])
                                            ], 8, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.title": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate(item[`title_${_ctx.$i18n.locale}`])}</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.price": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate(item.price)} $</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.price) + " $", 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.category": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>`);
                                          if (item.category.id) {
                                            _push7(ssrRenderComponent(VChip, {
                                              class: "text-caption",
                                              label: "",
                                              density: "compact",
                                              color: "primary"
                                            }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.category[`name_${_ctx.$i18n.locale}`] || "")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item.category[`name_${_ctx.$i18n.locale}`] || ""), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              item.category.id ? (openBlock(), createBlock(VChip, {
                                                key: 0,
                                                class: "text-caption",
                                                label: "",
                                                density: "compact",
                                                color: "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.category[`name_${_ctx.$i18n.locale}`] || ""), 1)
                                                ]),
                                                _: 2
                                              }, 1024)) : createCommentVNode("", true)
                                            ], 8, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.brand": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate(item.brand.name)}</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.brand.name), 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.model": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate(item.model)}</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.model), 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.warranty": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate(item.warranty)}</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.warranty), 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.year": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate(item.year)}</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.year), 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.shipping_from": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VListItem, {
                                            nav: "",
                                            density: "compact"
                                          }, {
                                            prepend: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VAvatar, {
                                                  size: "30",
                                                  class: "border",
                                                  rounded: ""
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    var _a, _b;
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VImg, {
                                                        cover: "",
                                                        src: (_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.flag
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VImg, {
                                                          cover: "",
                                                          src: (_b = unref(countries)[item.shipping_from]) == null ? void 0 : _b.flag
                                                        }, null, 8, ["src"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VAvatar, {
                                                    size: "30",
                                                    class: "border",
                                                    rounded: ""
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createVNode(VImg, {
                                                          cover: "",
                                                          src: (_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.flag
                                                        }, null, 8, ["src"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1024)
                                                ];
                                              }
                                            }),
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VListItemTitle, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    var _a, _b;
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate((_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.name)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString((_b = unref(countries)[item.shipping_from]) == null ? void 0 : _b.name), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createTextVNode(toDisplayString((_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.name), 1)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1024)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(`</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              createVNode(VListItem, {
                                                nav: "",
                                                density: "compact"
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VAvatar, {
                                                    size: "30",
                                                    class: "border",
                                                    rounded: ""
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createVNode(VImg, {
                                                          cover: "",
                                                          src: (_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.flag
                                                        }, null, 8, ["src"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createTextVNode(toDisplayString((_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.name), 1)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ], 8, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.condition": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VChip, {
                                            density: "compact",
                                            label: "",
                                            color: { "new": "green", "openbox": "blue", "refurbished": "amber", "used": "red" }[item.condition]
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(_ctx.$t("condition." + item.condition))}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(_ctx.$t("condition." + item.condition)), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(`</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              createVNode(VChip, {
                                                density: "compact",
                                                label: "",
                                                color: { "new": "green", "openbox": "blue", "refurbished": "amber", "used": "red" }[item.condition]
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("condition." + item.condition)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ], 8, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.for_sale": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VChip, {
                                            density: "compact",
                                            label: "",
                                            color: item.for_sale ? "green" : "red"
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(item.for_sale)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(item.for_sale), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(`</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              createVNode(VChip, {
                                                density: "compact",
                                                label: "",
                                                color: item.for_sale ? "green" : "red"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.for_sale), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ], 8, ["data-label"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "responsive-datatable" }, [
                                        createVNode(VDataTableServer, {
                                          search: unref(search),
                                          density: "comfortable",
                                          loading: unref(loading),
                                          hover: "",
                                          "items-length": unref(totalCount),
                                          headers: unref(localizedHeaders),
                                          "no-data-text": _ctx.$t("no_data"),
                                          "loading-text": _ctx.$t("loading") + "...",
                                          items: unref(items),
                                          "item-value": "id",
                                          "items-per-page": unref(perpage),
                                          "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                          "onUpdate:options": loadItems
                                        }, {
                                          bottom: withCtx(() => []),
                                          "item.actions": withCtx(({ item, index, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              createVNode("div", { class: "d-flex w-100 justify-space-end align-center" }, [
                                                createVNode(VBtn, {
                                                  onClick: ($event) => editItem(index, item),
                                                  color: "light-blue-accent-4",
                                                  size: "30",
                                                  flat: "",
                                                  class: "mr-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { icon: "mdi-pencil" })
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]),
                                                createVNode(VBtn, {
                                                  onClick: ($event) => deleteItem(index, item.id),
                                                  color: "red",
                                                  size: "30",
                                                  flat: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { icon: "mdi-delete" })
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"])
                                              ])
                                            ], 8, ["data-label"])
                                          ]),
                                          "item.title": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                          ]),
                                          "item.price": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.price) + " $", 9, ["data-label"])
                                          ]),
                                          "item.category": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              item.category.id ? (openBlock(), createBlock(VChip, {
                                                key: 0,
                                                class: "text-caption",
                                                label: "",
                                                density: "compact",
                                                color: "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.category[`name_${_ctx.$i18n.locale}`] || ""), 1)
                                                ]),
                                                _: 2
                                              }, 1024)) : createCommentVNode("", true)
                                            ], 8, ["data-label"])
                                          ]),
                                          "item.brand": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.brand.name), 9, ["data-label"])
                                          ]),
                                          "item.model": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.model), 9, ["data-label"])
                                          ]),
                                          "item.warranty": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.warranty), 9, ["data-label"])
                                          ]),
                                          "item.year": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.year), 9, ["data-label"])
                                          ]),
                                          "item.shipping_from": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              createVNode(VListItem, {
                                                nav: "",
                                                density: "compact"
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VAvatar, {
                                                    size: "30",
                                                    class: "border",
                                                    rounded: ""
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createVNode(VImg, {
                                                          cover: "",
                                                          src: (_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.flag
                                                        }, null, 8, ["src"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createTextVNode(toDisplayString((_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.name), 1)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ], 8, ["data-label"])
                                          ]),
                                          "item.condition": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              createVNode(VChip, {
                                                density: "compact",
                                                label: "",
                                                color: { "new": "green", "openbox": "blue", "refurbished": "amber", "used": "red" }[item.condition]
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("condition." + item.condition)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ], 8, ["data-label"])
                                          ]),
                                          "item.for_sale": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              createVNode(VChip, {
                                                density: "compact",
                                                label: "",
                                                color: item.for_sale ? "green" : "red"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.for_sale), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ], 8, ["data-label"])
                                          ]),
                                          _: 1
                                        }, 8, ["search", "loading", "items-length", "headers", "no-data-text", "loading-text", "items", "items-per-page", "onUpdate:itemsPerPage"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, { class: "px-4 pt-3" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("admin.products")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "px-0" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "responsive-datatable" }, [
                                      createVNode(VDataTableServer, {
                                        search: unref(search),
                                        density: "comfortable",
                                        loading: unref(loading),
                                        hover: "",
                                        "items-length": unref(totalCount),
                                        headers: unref(localizedHeaders),
                                        "no-data-text": _ctx.$t("no_data"),
                                        "loading-text": _ctx.$t("loading") + "...",
                                        items: unref(items),
                                        "item-value": "id",
                                        "items-per-page": unref(perpage),
                                        "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                        "onUpdate:options": loadItems
                                      }, {
                                        bottom: withCtx(() => []),
                                        "item.actions": withCtx(({ item, index, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, [
                                            createVNode("div", { class: "d-flex w-100 justify-space-end align-center" }, [
                                              createVNode(VBtn, {
                                                onClick: ($event) => editItem(index, item),
                                                color: "light-blue-accent-4",
                                                size: "30",
                                                flat: "",
                                                class: "mr-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { icon: "mdi-pencil" })
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]),
                                              createVNode(VBtn, {
                                                onClick: ($event) => deleteItem(index, item.id),
                                                color: "red",
                                                size: "30",
                                                flat: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { icon: "mdi-delete" })
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"])
                                            ])
                                          ], 8, ["data-label"])
                                        ]),
                                        "item.title": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                        ]),
                                        "item.price": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString(item.price) + " $", 9, ["data-label"])
                                        ]),
                                        "item.category": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, [
                                            item.category.id ? (openBlock(), createBlock(VChip, {
                                              key: 0,
                                              class: "text-caption",
                                              label: "",
                                              density: "compact",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.category[`name_${_ctx.$i18n.locale}`] || ""), 1)
                                              ]),
                                              _: 2
                                            }, 1024)) : createCommentVNode("", true)
                                          ], 8, ["data-label"])
                                        ]),
                                        "item.brand": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString(item.brand.name), 9, ["data-label"])
                                        ]),
                                        "item.model": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString(item.model), 9, ["data-label"])
                                        ]),
                                        "item.warranty": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString(item.warranty), 9, ["data-label"])
                                        ]),
                                        "item.year": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString(item.year), 9, ["data-label"])
                                        ]),
                                        "item.shipping_from": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, [
                                            createVNode(VListItem, {
                                              nav: "",
                                              density: "compact"
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VAvatar, {
                                                  size: "30",
                                                  class: "border",
                                                  rounded: ""
                                                }, {
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createVNode(VImg, {
                                                        cover: "",
                                                        src: (_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.flag
                                                      }, null, 8, ["src"])
                                                    ];
                                                  }),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createTextVNode(toDisplayString((_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.name), 1)
                                                    ];
                                                  }),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ], 8, ["data-label"])
                                        ]),
                                        "item.condition": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, [
                                            createVNode(VChip, {
                                              density: "compact",
                                              label: "",
                                              color: { "new": "green", "openbox": "blue", "refurbished": "amber", "used": "red" }[item.condition]
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("condition." + item.condition)), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ], 8, ["data-label"])
                                        ]),
                                        "item.for_sale": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, [
                                            createVNode(VChip, {
                                              density: "compact",
                                              label: "",
                                              color: item.for_sale ? "green" : "red"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.for_sale), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ], 8, ["data-label"])
                                        ]),
                                        _: 1
                                      }, 8, ["search", "loading", "items-length", "headers", "no-data-text", "loading-text", "items", "items-per-page", "onUpdate:itemsPerPage"])
                                    ])
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
                              createVNode(VCardTitle, { class: "px-4 pt-3" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("admin.products")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "px-0" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "responsive-datatable" }, [
                                    createVNode(VDataTableServer, {
                                      search: unref(search),
                                      density: "comfortable",
                                      loading: unref(loading),
                                      hover: "",
                                      "items-length": unref(totalCount),
                                      headers: unref(localizedHeaders),
                                      "no-data-text": _ctx.$t("no_data"),
                                      "loading-text": _ctx.$t("loading") + "...",
                                      items: unref(items),
                                      "item-value": "id",
                                      "items-per-page": unref(perpage),
                                      "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                      "onUpdate:options": loadItems
                                    }, {
                                      bottom: withCtx(() => []),
                                      "item.actions": withCtx(({ item, index, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, [
                                          createVNode("div", { class: "d-flex w-100 justify-space-end align-center" }, [
                                            createVNode(VBtn, {
                                              onClick: ($event) => editItem(index, item),
                                              color: "light-blue-accent-4",
                                              size: "30",
                                              flat: "",
                                              class: "mr-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { icon: "mdi-pencil" })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(VBtn, {
                                              onClick: ($event) => deleteItem(index, item.id),
                                              color: "red",
                                              size: "30",
                                              flat: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { icon: "mdi-delete" })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ])
                                        ], 8, ["data-label"])
                                      ]),
                                      "item.title": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                      ]),
                                      "item.price": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString(item.price) + " $", 9, ["data-label"])
                                      ]),
                                      "item.category": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, [
                                          item.category.id ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            class: "text-caption",
                                            label: "",
                                            density: "compact",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.category[`name_${_ctx.$i18n.locale}`] || ""), 1)
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true)
                                        ], 8, ["data-label"])
                                      ]),
                                      "item.brand": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString(item.brand.name), 9, ["data-label"])
                                      ]),
                                      "item.model": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString(item.model), 9, ["data-label"])
                                      ]),
                                      "item.warranty": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString(item.warranty), 9, ["data-label"])
                                      ]),
                                      "item.year": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString(item.year), 9, ["data-label"])
                                      ]),
                                      "item.shipping_from": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, [
                                          createVNode(VListItem, {
                                            nav: "",
                                            density: "compact"
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VAvatar, {
                                                size: "30",
                                                class: "border",
                                                rounded: ""
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createVNode(VImg, {
                                                      cover: "",
                                                      src: (_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.flag
                                                    }, null, 8, ["src"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString((_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.name), 1)
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ], 8, ["data-label"])
                                      ]),
                                      "item.condition": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, [
                                          createVNode(VChip, {
                                            density: "compact",
                                            label: "",
                                            color: { "new": "green", "openbox": "blue", "refurbished": "amber", "used": "red" }[item.condition]
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("condition." + item.condition)), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ], 8, ["data-label"])
                                      ]),
                                      "item.for_sale": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, [
                                          createVNode(VChip, {
                                            density: "compact",
                                            label: "",
                                            color: item.for_sale ? "green" : "red"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.for_sale), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ], 8, ["data-label"])
                                      ]),
                                      _: 1
                                    }, 8, ["search", "loading", "items-length", "headers", "no-data-text", "loading-text", "items", "items-per-page", "onUpdate:itemsPerPage"])
                                  ])
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
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "5",
                    class: "pt-0 pb-1 d-flex align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          "bg-color": "surface",
                          modelValue: unref(perpage),
                          "onUpdate:modelValue": ($event) => isRef(perpage) ? perpage.value = $event : null,
                          transition: "fade-transition",
                          "hide-details": "",
                          density: "compact",
                          variant: "solo",
                          flat: "",
                          class: "border rounded",
                          items: [10, 25, 50, 100, 150]
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextField, {
                          "bg-color": "surface",
                          "hide-details": "",
                          density: "compact",
                          variant: "solo",
                          flat: "",
                          class: "border rounded ml-3",
                          "model-value": unref(perpagetext),
                          readonly: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            "bg-color": "surface",
                            modelValue: unref(perpage),
                            "onUpdate:modelValue": ($event) => isRef(perpage) ? perpage.value = $event : null,
                            transition: "fade-transition",
                            "hide-details": "",
                            density: "compact",
                            variant: "solo",
                            flat: "",
                            class: "border rounded",
                            items: [10, 25, 50, 100, 150]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            "bg-color": "surface",
                            "hide-details": "",
                            density: "compact",
                            variant: "solo",
                            flat: "",
                            class: "border rounded ml-3",
                            "model-value": unref(perpagetext),
                            readonly: ""
                          }, null, 8, ["model-value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "7",
                    md: "4",
                    class: "pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VPagination, {
                          "bg-color": "surface",
                          modelValue: unref(page),
                          "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, loadItems],
                          length: Math.ceil(unref(totalCount) / unref(perpage)),
                          "active-color": "primary",
                          size: "40",
                          "total-visible": "3",
                          variant: "flat"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VPagination, {
                            "bg-color": "surface",
                            modelValue: unref(page),
                            "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, loadItems],
                            length: Math.ceil(unref(totalCount) / unref(perpage)),
                            "active-color": "primary",
                            size: "40",
                            "total-visible": "3",
                            variant: "flat"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "length"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "9",
                      sm: "6",
                      md: "4",
                      class: "pb-0 pr-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          "bg-color": "surface",
                          "onUpdate:modelValue": unref(debounceSearch),
                          placeholder: _ctx.$t("admin.search"),
                          "append-inner-icon": "mdi-magnify",
                          "hide-details": "",
                          density: "compact",
                          variant: "solo",
                          flat: "",
                          class: "border rounded"
                        }, null, 8, ["onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "3",
                      sm: "4",
                      md: "2",
                      class: "pb-0 d-flex justify-end"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          onClick: ($event) => dialog.value = true,
                          elevation: "2",
                          color: "primary",
                          size: "40",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "mdi-plus" })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          flat: "",
                          border: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "px-4 pt-3" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("admin.products")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "px-0" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "responsive-datatable" }, [
                                  createVNode(VDataTableServer, {
                                    search: unref(search),
                                    density: "comfortable",
                                    loading: unref(loading),
                                    hover: "",
                                    "items-length": unref(totalCount),
                                    headers: unref(localizedHeaders),
                                    "no-data-text": _ctx.$t("no_data"),
                                    "loading-text": _ctx.$t("loading") + "...",
                                    items: unref(items),
                                    "item-value": "id",
                                    "items-per-page": unref(perpage),
                                    "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                    "onUpdate:options": loadItems
                                  }, {
                                    bottom: withCtx(() => []),
                                    "item.actions": withCtx(({ item, index, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, [
                                        createVNode("div", { class: "d-flex w-100 justify-space-end align-center" }, [
                                          createVNode(VBtn, {
                                            onClick: ($event) => editItem(index, item),
                                            color: "light-blue-accent-4",
                                            size: "30",
                                            flat: "",
                                            class: "mr-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { icon: "mdi-pencil" })
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(VBtn, {
                                            onClick: ($event) => deleteItem(index, item.id),
                                            color: "red",
                                            size: "30",
                                            flat: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { icon: "mdi-delete" })
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ])
                                      ], 8, ["data-label"])
                                    ]),
                                    "item.title": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                    ]),
                                    "item.price": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString(item.price) + " $", 9, ["data-label"])
                                    ]),
                                    "item.category": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, [
                                        item.category.id ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          class: "text-caption",
                                          label: "",
                                          density: "compact",
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.category[`name_${_ctx.$i18n.locale}`] || ""), 1)
                                          ]),
                                          _: 2
                                        }, 1024)) : createCommentVNode("", true)
                                      ], 8, ["data-label"])
                                    ]),
                                    "item.brand": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString(item.brand.name), 9, ["data-label"])
                                    ]),
                                    "item.model": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString(item.model), 9, ["data-label"])
                                    ]),
                                    "item.warranty": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString(item.warranty), 9, ["data-label"])
                                    ]),
                                    "item.year": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString(item.year), 9, ["data-label"])
                                    ]),
                                    "item.shipping_from": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, [
                                        createVNode(VListItem, {
                                          nav: "",
                                          density: "compact"
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VAvatar, {
                                              size: "30",
                                              class: "border",
                                              rounded: ""
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createVNode(VImg, {
                                                    cover: "",
                                                    src: (_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.flag
                                                  }, null, 8, ["src"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString((_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.name), 1)
                                                ];
                                              }),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ], 8, ["data-label"])
                                    ]),
                                    "item.condition": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, [
                                        createVNode(VChip, {
                                          density: "compact",
                                          label: "",
                                          color: { "new": "green", "openbox": "blue", "refurbished": "amber", "used": "red" }[item.condition]
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("condition." + item.condition)), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ], 8, ["data-label"])
                                    ]),
                                    "item.for_sale": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, [
                                        createVNode(VChip, {
                                          density: "compact",
                                          label: "",
                                          color: item.for_sale ? "green" : "red"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.for_sale), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ], 8, ["data-label"])
                                    ]),
                                    _: 1
                                  }, 8, ["search", "loading", "items-length", "headers", "no-data-text", "loading-text", "items", "items-per-page", "onUpdate:itemsPerPage"])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "5",
                      class: "pt-0 pb-1 d-flex align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          "bg-color": "surface",
                          modelValue: unref(perpage),
                          "onUpdate:modelValue": ($event) => isRef(perpage) ? perpage.value = $event : null,
                          transition: "fade-transition",
                          "hide-details": "",
                          density: "compact",
                          variant: "solo",
                          flat: "",
                          class: "border rounded",
                          items: [10, 25, 50, 100, 150]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextField, {
                          "bg-color": "surface",
                          "hide-details": "",
                          density: "compact",
                          variant: "solo",
                          flat: "",
                          class: "border rounded ml-3",
                          "model-value": unref(perpagetext),
                          readonly: ""
                        }, null, 8, ["model-value"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "7",
                      md: "4",
                      class: "pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VPagination, {
                          "bg-color": "surface",
                          modelValue: unref(page),
                          "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, loadItems],
                          length: Math.ceil(unref(totalCount) / unref(perpage)),
                          "active-color": "primary",
                          size: "40",
                          "total-visible": "3",
                          variant: "flat"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "length"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDialog, {
              persistent: "",
              modelValue: unref(dialog),
              "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
              width: "500",
              transition: "fade-transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    elevation: "1",
                    border: "",
                    color: "background"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "px-4 py-3 d-flex justify-space-between align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>${ssrInterpolate(_ctx.$t(unref(editedId) ? "admin.edit_product" : "admin.add_product"))}</span>`);
                              _push5(ssrRenderComponent(VBtn, {
                                flat: "",
                                onClick: ($event) => dialog.value = false,
                                size: "32",
                                color: "primary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      size: "small",
                                      icon: "mdi-close"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        size: "small",
                                        icon: "mdi-close"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("span", null, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_product" : "admin.add_product")), 1),
                                createVNode(VBtn, {
                                  flat: "",
                                  onClick: ($event) => dialog.value = false,
                                  size: "32",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "small",
                                      icon: "mdi-close"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "px-4 py-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, {
                                class: "w-100 form-card",
                                ref_key: "form",
                                ref: form
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, { class: "pa-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Nomi (uz)`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Nomi (uz)")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(product).title_uz,
                                                  "onUpdate:modelValue": ($event) => unref(product).title_uz = $event,
                                                  rules: nameRule,
                                                  placeholder: "Nomi (uz)",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Nomi (uz)")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(product).title_uz,
                                                    "onUpdate:modelValue": ($event) => unref(product).title_uz = $event,
                                                    rules: nameRule,
                                                    placeholder: "Nomi (uz)",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)`);
                                                    } else {
                                                      return [
                                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(product).title_ru,
                                                  "onUpdate:modelValue": ($event) => unref(product).title_ru = $event,
                                                  rules: nameRule,
                                                  placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(product).title_ru,
                                                    "onUpdate:modelValue": ($event) => unref(product).title_ru = $event,
                                                    rules: nameRule,
                                                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Title (en)`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Title (en)")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(product).title_en,
                                                  "onUpdate:modelValue": ($event) => unref(product).title_en = $event,
                                                  rules: nameRule,
                                                  placeholder: "Title (en)",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Title (en)")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(product).title_en,
                                                    "onUpdate:modelValue": ($event) => unref(product).title_en = $event,
                                                    rules: nameRule,
                                                    placeholder: "Title (en)",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("products.model"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.model")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(product).model,
                                                  "onUpdate:modelValue": ($event) => unref(product).model = $event,
                                                  rules: nameRule,
                                                  placeholder: _ctx.$t("products.model"),
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.model")), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(product).model,
                                                    "onUpdate:modelValue": ($event) => unref(product).model = $event,
                                                    rules: nameRule,
                                                    placeholder: _ctx.$t("products.model"),
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("products.price"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.price")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).price,
                                                  "onUpdate:modelValue": ($event) => unref(product).price = $event,
                                                  rules: nameRule,
                                                  flat: "",
                                                  class: "border rounded",
                                                  placeholder: _ctx.$t("products.price"),
                                                  type: "number",
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.price")), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: unref(product).price,
                                                    "onUpdate:modelValue": ($event) => unref(product).price = $event,
                                                    rules: nameRule,
                                                    flat: "",
                                                    class: "border rounded",
                                                    placeholder: _ctx.$t("products.price"),
                                                    type: "number",
                                                    "hide-details": "",
                                                    variant: "outlined",
                                                    color: "primary"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("products.condition"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.condition")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VSelect, {
                                                  rules: nameRule,
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).condition,
                                                  "onUpdate:modelValue": ($event) => unref(product).condition = $event,
                                                  items: unref(conditions),
                                                  placeholder: _ctx.$t("products.condition"),
                                                  "item-title": "title_" + _ctx.$i18n.locale,
                                                  "hide-details": "",
                                                  "item-value": "value",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.condition")), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VSelect, {
                                                    rules: nameRule,
                                                    flat: "",
                                                    class: "border rounded",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: unref(product).condition,
                                                    "onUpdate:modelValue": ($event) => unref(product).condition = $event,
                                                    items: unref(conditions),
                                                    placeholder: _ctx.$t("products.condition"),
                                                    "item-title": "title_" + _ctx.$i18n.locale,
                                                    "hide-details": "",
                                                    "item-value": "value",
                                                    variant: "outlined",
                                                    color: "primary"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("products.warranty"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.warranty")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).warranty,
                                                  "onUpdate:modelValue": ($event) => unref(product).warranty = $event,
                                                  min: "0",
                                                  flat: "",
                                                  class: "border rounded",
                                                  placeholder: _ctx.$t("products.warranty"),
                                                  type: "number",
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.warranty")), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: unref(product).warranty,
                                                    "onUpdate:modelValue": ($event) => unref(product).warranty = $event,
                                                    min: "0",
                                                    flat: "",
                                                    class: "border rounded",
                                                    placeholder: _ctx.$t("products.warranty"),
                                                    type: "number",
                                                    "hide-details": "",
                                                    variant: "outlined",
                                                    color: "primary"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("products.year"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.year")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).year,
                                                  "onUpdate:modelValue": ($event) => unref(product).year = $event,
                                                  rules: nameRule,
                                                  min: "1000",
                                                  flat: "",
                                                  class: "border rounded",
                                                  placeholder: _ctx.$t("products.year"),
                                                  type: "number",
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.year")), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: unref(product).year,
                                                    "onUpdate:modelValue": ($event) => unref(product).year = $event,
                                                    rules: nameRule,
                                                    min: "1000",
                                                    flat: "",
                                                    class: "border rounded",
                                                    placeholder: _ctx.$t("products.year"),
                                                    type: "number",
                                                    "hide-details": "",
                                                    variant: "outlined",
                                                    color: "primary"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("products.category"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.category")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VSelect, {
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).category,
                                                  "onUpdate:modelValue": ($event) => unref(product).category = $event,
                                                  items: unref(categories),
                                                  placeholder: _ctx.$t("products.category"),
                                                  "item-title": `name_${_ctx.$i18n.locale}`,
                                                  "hide-details": "",
                                                  "item-value": "id",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.category")), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VSelect, {
                                                    flat: "",
                                                    class: "border rounded",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: unref(product).category,
                                                    "onUpdate:modelValue": ($event) => unref(product).category = $event,
                                                    items: unref(categories),
                                                    placeholder: _ctx.$t("products.category"),
                                                    "item-title": `name_${_ctx.$i18n.locale}`,
                                                    "hide-details": "",
                                                    "item-value": "id",
                                                    variant: "outlined",
                                                    color: "primary"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("products.brand"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.brand")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VSelect, {
                                                  rules: nameRule,
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).brand,
                                                  "onUpdate:modelValue": ($event) => unref(product).brand = $event,
                                                  items: unref(brands),
                                                  placeholder: _ctx.$t("products.brand"),
                                                  "item-title": "name",
                                                  "hide-details": "",
                                                  "item-value": "id",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.brand")), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VSelect, {
                                                    rules: nameRule,
                                                    flat: "",
                                                    class: "border rounded",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: unref(product).brand,
                                                    "onUpdate:modelValue": ($event) => unref(product).brand = $event,
                                                    items: unref(brands),
                                                    placeholder: _ctx.$t("products.brand"),
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
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("products.shipping"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.shipping")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VSelect, {
                                                  "item-props": itemProps,
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).shipping_from,
                                                  "onUpdate:modelValue": ($event) => unref(product).shipping_from = $event,
                                                  items: unref(countries),
                                                  placeholder: _ctx.$t("products.shipping"),
                                                  "item-title": "name",
                                                  "hide-details": "",
                                                  "item-value": "id",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.shipping")), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VSelect, {
                                                    "item-props": itemProps,
                                                    flat: "",
                                                    class: "border rounded",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: unref(product).shipping_from,
                                                    "onUpdate:modelValue": ($event) => unref(product).shipping_from = $event,
                                                    items: unref(countries),
                                                    placeholder: _ctx.$t("products.shipping"),
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
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("products.sales_area"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.sales_area")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VAutocomplete, {
                                                  "item-props": itemProps,
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  multiple: "",
                                                  chips: "",
                                                  modelValue: unref(product).sales_areas,
                                                  "onUpdate:modelValue": ($event) => unref(product).sales_areas = $event,
                                                  items: unref(countries),
                                                  placeholder: _ctx.$t("products.sales_area"),
                                                  "item-title": "name",
                                                  "hide-details": "",
                                                  "item-value": "id",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.sales_area")), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VAutocomplete, {
                                                    "item-props": itemProps,
                                                    flat: "",
                                                    class: "border rounded",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    multiple: "",
                                                    chips: "",
                                                    modelValue: unref(product).sales_areas,
                                                    "onUpdate:modelValue": ($event) => unref(product).sales_areas = $event,
                                                    items: unref(countries),
                                                    placeholder: _ctx.$t("products.sales_area"),
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
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Ma&#39;lumot (uz)`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Ma'lumot (uz)")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextarea, {
                                                  rules: nameRule,
                                                  "no-resize": "",
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).description_uz,
                                                  "onUpdate:modelValue": ($event) => unref(product).description_uz = $event,
                                                  placeholder: "Ma'lumot (uz)",
                                                  "hide-details": "",
                                                  color: "primary",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Ma'lumot (uz)")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextarea, {
                                                    rules: nameRule,
                                                    "no-resize": "",
                                                    flat: "",
                                                    class: "border rounded",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: unref(product).description_uz,
                                                    "onUpdate:modelValue": ($event) => unref(product).description_uz = $event,
                                                    placeholder: "Ma'lumot (uz)",
                                                    "hide-details": "",
                                                    color: "primary",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)`);
                                                    } else {
                                                      return [
                                                        createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextarea, {
                                                  rules: nameRule,
                                                  "no-resize": "",
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).description_ru,
                                                  "onUpdate:modelValue": ($event) => unref(product).description_ru = $event,
                                                  placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)",
                                                  "hide-details": "",
                                                  color: "primary",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextarea, {
                                                    rules: nameRule,
                                                    "no-resize": "",
                                                    flat: "",
                                                    class: "border rounded",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: unref(product).description_ru,
                                                    "onUpdate:modelValue": ($event) => unref(product).description_ru = $event,
                                                    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)",
                                                    "hide-details": "",
                                                    color: "primary",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Description (en)`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Description (en)")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextarea, {
                                                  rules: nameRule,
                                                  "no-resize": "",
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).description_en,
                                                  "onUpdate:modelValue": ($event) => unref(product).description_en = $event,
                                                  placeholder: "Description (en)",
                                                  "hide-details": "",
                                                  color: "primary",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Description (en)")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextarea, {
                                                    rules: nameRule,
                                                    "no-resize": "",
                                                    flat: "",
                                                    class: "border rounded",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: unref(product).description_en,
                                                    "onUpdate:modelValue": ($event) => unref(product).description_en = $event,
                                                    placeholder: "Description (en)",
                                                    "hide-details": "",
                                                    color: "primary",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<!--[-->`);
                                          ssrRenderList(unref(product).characteristics, (c, i) => {
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "12",
                                              class: "pa-2",
                                              key: i
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VTable, {
                                                    density: "compact",
                                                    class: "border rounded pb-2"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<thead${_scopeId8}><tr${_scopeId8}><td class="px-2"${_scopeId8}>${ssrInterpolate(_ctx.$t("products.characteristics"))}</td><td class="px-2 d-flex align-center justify-space-between"${_scopeId8}>${ssrInterpolate({ "uz": "Qiymat", "ru": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", "en": "Value" }[_ctx.$i18n.locale])} `);
                                                        _push9(ssrRenderComponent(VBtn, {
                                                          size: "20",
                                                          color: "red",
                                                          flat: "",
                                                          onClick: ($event) => removeValue(i, "characteristics")
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VIcon, { icon: "mdi-delete" }, null, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(VIcon, { icon: "mdi-delete" })
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(`</td></tr></thead><tbody${_scopeId8}><tr${_scopeId8}><td class="px-2"${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(VTextField, {
                                                          modelValue: c.title.uz,
                                                          "onUpdate:modelValue": ($event) => c.title.uz = $event,
                                                          rules: nameRule,
                                                          placeholder: "uz",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(`</td><td class="px-2"${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(VTextField, {
                                                          modelValue: c.value.uz,
                                                          "onUpdate:modelValue": ($event) => c.value.uz = $event,
                                                          rules: nameRule,
                                                          placeholder: "uz",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(`</td></tr><tr${_scopeId8}><td class="px-2"${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(VTextField, {
                                                          modelValue: c.title.ru,
                                                          "onUpdate:modelValue": ($event) => c.title.ru = $event,
                                                          rules: nameRule,
                                                          placeholder: "ru",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(`</td><td class="px-2"${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(VTextField, {
                                                          modelValue: c.value.ru,
                                                          "onUpdate:modelValue": ($event) => c.value.ru = $event,
                                                          rules: nameRule,
                                                          placeholder: "ru",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(`</td></tr><tr${_scopeId8}><td class="px-2"${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(VTextField, {
                                                          modelValue: c.title.en,
                                                          "onUpdate:modelValue": ($event) => c.title.en = $event,
                                                          rules: nameRule,
                                                          placeholder: "en",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(`</td><td class="px-2"${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(VTextField, {
                                                          modelValue: c.value.en,
                                                          "onUpdate:modelValue": ($event) => c.value.en = $event,
                                                          rules: nameRule,
                                                          placeholder: "en",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(`</td></tr></tbody>`);
                                                      } else {
                                                        return [
                                                          createVNode("thead", null, [
                                                            createVNode("tr", null, [
                                                              createVNode("td", { class: "px-2" }, toDisplayString(_ctx.$t("products.characteristics")), 1),
                                                              createVNode("td", { class: "px-2 d-flex align-center justify-space-between" }, [
                                                                createTextVNode(toDisplayString({ "uz": "Qiymat", "ru": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", "en": "Value" }[_ctx.$i18n.locale]) + " ", 1),
                                                                createVNode(VBtn, {
                                                                  size: "20",
                                                                  color: "red",
                                                                  flat: "",
                                                                  onClick: ($event) => removeValue(i, "characteristics")
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VIcon, { icon: "mdi-delete" })
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["onClick"])
                                                              ])
                                                            ])
                                                          ]),
                                                          createVNode("tbody", null, [
                                                            createVNode("tr", null, [
                                                              createVNode("td", { class: "px-2" }, [
                                                                createVNode(VTextField, {
                                                                  modelValue: c.title.uz,
                                                                  "onUpdate:modelValue": ($event) => c.title.uz = $event,
                                                                  rules: nameRule,
                                                                  placeholder: "uz",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  "bg-color": "surface",
                                                                  color: "primary",
                                                                  variant: "outlined",
                                                                  flat: "",
                                                                  class: "border rounded"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              createVNode("td", { class: "px-2" }, [
                                                                createVNode(VTextField, {
                                                                  modelValue: c.value.uz,
                                                                  "onUpdate:modelValue": ($event) => c.value.uz = $event,
                                                                  rules: nameRule,
                                                                  placeholder: "uz",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  "bg-color": "surface",
                                                                  color: "primary",
                                                                  variant: "outlined",
                                                                  flat: "",
                                                                  class: "border rounded"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ])
                                                            ]),
                                                            createVNode("tr", null, [
                                                              createVNode("td", { class: "px-2" }, [
                                                                createVNode(VTextField, {
                                                                  modelValue: c.title.ru,
                                                                  "onUpdate:modelValue": ($event) => c.title.ru = $event,
                                                                  rules: nameRule,
                                                                  placeholder: "ru",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  "bg-color": "surface",
                                                                  color: "primary",
                                                                  variant: "outlined",
                                                                  flat: "",
                                                                  class: "border rounded"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              createVNode("td", { class: "px-2" }, [
                                                                createVNode(VTextField, {
                                                                  modelValue: c.value.ru,
                                                                  "onUpdate:modelValue": ($event) => c.value.ru = $event,
                                                                  rules: nameRule,
                                                                  placeholder: "ru",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  "bg-color": "surface",
                                                                  color: "primary",
                                                                  variant: "outlined",
                                                                  flat: "",
                                                                  class: "border rounded"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ])
                                                            ]),
                                                            createVNode("tr", null, [
                                                              createVNode("td", { class: "px-2" }, [
                                                                createVNode(VTextField, {
                                                                  modelValue: c.title.en,
                                                                  "onUpdate:modelValue": ($event) => c.title.en = $event,
                                                                  rules: nameRule,
                                                                  placeholder: "en",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  "bg-color": "surface",
                                                                  color: "primary",
                                                                  variant: "outlined",
                                                                  flat: "",
                                                                  class: "border rounded"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              createVNode("td", { class: "px-2" }, [
                                                                createVNode(VTextField, {
                                                                  modelValue: c.value.en,
                                                                  "onUpdate:modelValue": ($event) => c.value.en = $event,
                                                                  rules: nameRule,
                                                                  placeholder: "en",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  "bg-color": "surface",
                                                                  color: "primary",
                                                                  variant: "outlined",
                                                                  flat: "",
                                                                  class: "border rounded"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ])
                                                            ])
                                                          ])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VTable, {
                                                      density: "compact",
                                                      class: "border rounded pb-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("thead", null, [
                                                          createVNode("tr", null, [
                                                            createVNode("td", { class: "px-2" }, toDisplayString(_ctx.$t("products.characteristics")), 1),
                                                            createVNode("td", { class: "px-2 d-flex align-center justify-space-between" }, [
                                                              createTextVNode(toDisplayString({ "uz": "Qiymat", "ru": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", "en": "Value" }[_ctx.$i18n.locale]) + " ", 1),
                                                              createVNode(VBtn, {
                                                                size: "20",
                                                                color: "red",
                                                                flat: "",
                                                                onClick: ($event) => removeValue(i, "characteristics")
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VIcon, { icon: "mdi-delete" })
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["onClick"])
                                                            ])
                                                          ])
                                                        ]),
                                                        createVNode("tbody", null, [
                                                          createVNode("tr", null, [
                                                            createVNode("td", { class: "px-2" }, [
                                                              createVNode(VTextField, {
                                                                modelValue: c.title.uz,
                                                                "onUpdate:modelValue": ($event) => c.title.uz = $event,
                                                                rules: nameRule,
                                                                placeholder: "uz",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                "bg-color": "surface",
                                                                color: "primary",
                                                                variant: "outlined",
                                                                flat: "",
                                                                class: "border rounded"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            createVNode("td", { class: "px-2" }, [
                                                              createVNode(VTextField, {
                                                                modelValue: c.value.uz,
                                                                "onUpdate:modelValue": ($event) => c.value.uz = $event,
                                                                rules: nameRule,
                                                                placeholder: "uz",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                "bg-color": "surface",
                                                                color: "primary",
                                                                variant: "outlined",
                                                                flat: "",
                                                                class: "border rounded"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ])
                                                          ]),
                                                          createVNode("tr", null, [
                                                            createVNode("td", { class: "px-2" }, [
                                                              createVNode(VTextField, {
                                                                modelValue: c.title.ru,
                                                                "onUpdate:modelValue": ($event) => c.title.ru = $event,
                                                                rules: nameRule,
                                                                placeholder: "ru",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                "bg-color": "surface",
                                                                color: "primary",
                                                                variant: "outlined",
                                                                flat: "",
                                                                class: "border rounded"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            createVNode("td", { class: "px-2" }, [
                                                              createVNode(VTextField, {
                                                                modelValue: c.value.ru,
                                                                "onUpdate:modelValue": ($event) => c.value.ru = $event,
                                                                rules: nameRule,
                                                                placeholder: "ru",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                "bg-color": "surface",
                                                                color: "primary",
                                                                variant: "outlined",
                                                                flat: "",
                                                                class: "border rounded"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ])
                                                          ]),
                                                          createVNode("tr", null, [
                                                            createVNode("td", { class: "px-2" }, [
                                                              createVNode(VTextField, {
                                                                modelValue: c.title.en,
                                                                "onUpdate:modelValue": ($event) => c.title.en = $event,
                                                                rules: nameRule,
                                                                placeholder: "en",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                "bg-color": "surface",
                                                                color: "primary",
                                                                variant: "outlined",
                                                                flat: "",
                                                                class: "border rounded"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            createVNode("td", { class: "px-2" }, [
                                                              createVNode(VTextField, {
                                                                modelValue: c.value.en,
                                                                "onUpdate:modelValue": ($event) => c.value.en = $event,
                                                                rules: nameRule,
                                                                placeholder: "en",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                "bg-color": "surface",
                                                                color: "primary",
                                                                variant: "outlined",
                                                                flat: "",
                                                                class: "border rounded"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ])
                                                          ])
                                                        ])
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
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, {
                                                  onClick: addCharasteristic,
                                                  block: "",
                                                  color: "primary",
                                                  class: "text-none",
                                                  flat: ""
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("admin.add_charac"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("admin.add_charac")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, {
                                                    onClick: addCharasteristic,
                                                    block: "",
                                                    color: "primary",
                                                    class: "text-none",
                                                    flat: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("admin.add_charac")), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        class: "px-4"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<label${ssrRenderAttrs(mergeProps({
                                                              for: "image-files",
                                                              class: "w-100 py-2 rounded bg-primary d-flex justify-center align-center"
                                                            }, ssrGetDirectiveProps(_ctx, Ripple)))}${_scopeId9}>${ssrInterpolate(_ctx.$t("admin.add_image"))}</label>`);
                                                            _push10(ssrRenderComponent(VFileInput, {
                                                              style: { display: "none" },
                                                              id: "image-files",
                                                              flat: "",
                                                              class: "border rounded",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              onChange: pushImages,
                                                              max: "10",
                                                              label: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
                                                              multiple: "",
                                                              counter: "",
                                                              "hide-details": "",
                                                              variant: "solo",
                                                              color: "primary",
                                                              "prepend-icon": ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              withDirectives((openBlock(), createBlock("label", {
                                                                for: "image-files",
                                                                class: "w-100 py-2 rounded bg-primary d-flex justify-center align-center"
                                                              }, [
                                                                createTextVNode(toDisplayString(_ctx.$t("admin.add_image")), 1)
                                                              ])), [
                                                                [Ripple]
                                                              ]),
                                                              withDirectives(createVNode(VFileInput, {
                                                                id: "image-files",
                                                                flat: "",
                                                                class: "border rounded",
                                                                density: "compact",
                                                                "bg-color": "surface",
                                                                onChange: pushImages,
                                                                max: "10",
                                                                label: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
                                                                multiple: "",
                                                                counter: "",
                                                                "hide-details": "",
                                                                variant: "solo",
                                                                color: "primary",
                                                                "prepend-icon": ""
                                                              }, null, 512), [
                                                                [vShow, false]
                                                              ])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSlideGroup, { "show-arrows": "" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`<!--[-->`);
                                                                  ssrRenderList(unref(images), (image, n) => {
                                                                    _push11(ssrRenderComponent(VSlideGroupItem, { key: n }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`<div class="d-flex flex-column align-center mr-4 gap-1"${_scopeId11}>`);
                                                                          _push12(ssrRenderComponent(VAvatar, {
                                                                            rounded: "",
                                                                            size: "80"
                                                                          }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(VImg, {
                                                                                  cover: "",
                                                                                  src: getBlobImage(image)
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(VImg, {
                                                                                    cover: "",
                                                                                    src: getBlobImage(image)
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(`<div class="d-flex align-center justify-space-between w-100"${_scopeId11}><span class="text-caption"${_scopeId11}>${ssrInterpolate(image.name.slice(0, 8))}...</span>`);
                                                                          _push12(ssrRenderComponent(VBtn, {
                                                                            size: "20",
                                                                            color: "red",
                                                                            flat: "",
                                                                            onClick: ($event) => unref(images).splice(n, 1)
                                                                          }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(VIcon, {
                                                                                  size: "small",
                                                                                  icon: "mdi-delete"
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(VIcon, {
                                                                                    size: "small",
                                                                                    icon: "mdi-delete"
                                                                                  })
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(`</div></div>`);
                                                                        } else {
                                                                          return [
                                                                            createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                                              createVNode(VAvatar, {
                                                                                rounded: "",
                                                                                size: "80"
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createVNode(VImg, {
                                                                                    cover: "",
                                                                                    src: getBlobImage(image)
                                                                                  }, null, 8, ["src"])
                                                                                ]),
                                                                                _: 2
                                                                              }, 1024),
                                                                              createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                                createVNode("span", { class: "text-caption" }, toDisplayString(image.name.slice(0, 8)) + "...", 1),
                                                                                createVNode(VBtn, {
                                                                                  size: "20",
                                                                                  color: "red",
                                                                                  flat: "",
                                                                                  onClick: ($event) => unref(images).splice(n, 1)
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createVNode(VIcon, {
                                                                                      size: "small",
                                                                                      icon: "mdi-delete"
                                                                                    })
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1032, ["onClick"])
                                                                              ])
                                                                            ])
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  });
                                                                  _push11(`<!--]-->`);
                                                                } else {
                                                                  return [
                                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image, n) => {
                                                                      return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                                        default: withCtx(() => [
                                                                          createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                                            createVNode(VAvatar, {
                                                                              rounded: "",
                                                                              size: "80"
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(VImg, {
                                                                                  cover: "",
                                                                                  src: getBlobImage(image)
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                              createVNode("span", { class: "text-caption" }, toDisplayString(image.name.slice(0, 8)) + "...", 1),
                                                                              createVNode(VBtn, {
                                                                                size: "20",
                                                                                color: "red",
                                                                                flat: "",
                                                                                onClick: ($event) => unref(images).splice(n, 1)
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createVNode(VIcon, {
                                                                                    size: "small",
                                                                                    icon: "mdi-delete"
                                                                                  })
                                                                                ]),
                                                                                _: 2
                                                                              }, 1032, ["onClick"])
                                                                            ])
                                                                          ])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024);
                                                                    }), 128))
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                                default: withCtx(() => [
                                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image, n) => {
                                                                    return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                                      default: withCtx(() => [
                                                                        createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                                          createVNode(VAvatar, {
                                                                            rounded: "",
                                                                            size: "80"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(VImg, {
                                                                                cover: "",
                                                                                src: getBlobImage(image)
                                                                              }, null, 8, ["src"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                            createVNode("span", { class: "text-caption" }, toDisplayString(image.name.slice(0, 8)) + "...", 1),
                                                                            createVNode(VBtn, {
                                                                              size: "20",
                                                                              color: "red",
                                                                              flat: "",
                                                                              onClick: ($event) => unref(images).splice(n, 1)
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(VIcon, {
                                                                                  size: "small",
                                                                                  icon: "mdi-delete"
                                                                                })
                                                                              ]),
                                                                              _: 2
                                                                            }, 1032, ["onClick"])
                                                                          ])
                                                                        ])
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          class: "px-4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            withDirectives((openBlock(), createBlock("label", {
                                                              for: "image-files",
                                                              class: "w-100 py-2 rounded bg-primary d-flex justify-center align-center"
                                                            }, [
                                                              createTextVNode(toDisplayString(_ctx.$t("admin.add_image")), 1)
                                                            ])), [
                                                              [Ripple]
                                                            ]),
                                                            withDirectives(createVNode(VFileInput, {
                                                              id: "image-files",
                                                              flat: "",
                                                              class: "border rounded",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              onChange: pushImages,
                                                              max: "10",
                                                              label: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
                                                              multiple: "",
                                                              counter: "",
                                                              "hide-details": "",
                                                              variant: "solo",
                                                              color: "primary",
                                                              "prepend-icon": ""
                                                            }, null, 512), [
                                                              [vShow, false]
                                                            ])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                              default: withCtx(() => [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image, n) => {
                                                                  return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                                        createVNode(VAvatar, {
                                                                          rounded: "",
                                                                          size: "80"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(VImg, {
                                                                              cover: "",
                                                                              src: getBlobImage(image)
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                          createVNode("span", { class: "text-caption" }, toDisplayString(image.name.slice(0, 8)) + "...", 1),
                                                                          createVNode(VBtn, {
                                                                            size: "20",
                                                                            color: "red",
                                                                            flat: "",
                                                                            onClick: ($event) => unref(images).splice(n, 1)
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(VIcon, {
                                                                                size: "small",
                                                                                icon: "mdi-delete"
                                                                              })
                                                                            ]),
                                                                            _: 2
                                                                          }, 1032, ["onClick"])
                                                                        ])
                                                                      ])
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        class: "px-4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          withDirectives((openBlock(), createBlock("label", {
                                                            for: "image-files",
                                                            class: "w-100 py-2 rounded bg-primary d-flex justify-center align-center"
                                                          }, [
                                                            createTextVNode(toDisplayString(_ctx.$t("admin.add_image")), 1)
                                                          ])), [
                                                            [Ripple]
                                                          ]),
                                                          withDirectives(createVNode(VFileInput, {
                                                            id: "image-files",
                                                            flat: "",
                                                            class: "border rounded",
                                                            density: "compact",
                                                            "bg-color": "surface",
                                                            onChange: pushImages,
                                                            max: "10",
                                                            label: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
                                                            multiple: "",
                                                            counter: "",
                                                            "hide-details": "",
                                                            variant: "solo",
                                                            color: "primary",
                                                            "prepend-icon": ""
                                                          }, null, 512), [
                                                            [vShow, false]
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                            default: withCtx(() => [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image, n) => {
                                                                return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                                      createVNode(VAvatar, {
                                                                        rounded: "",
                                                                        size: "80"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(VImg, {
                                                                            cover: "",
                                                                            src: getBlobImage(image)
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                        createVNode("span", { class: "text-caption" }, toDisplayString(image.name.slice(0, 8)) + "...", 1),
                                                                        createVNode(VBtn, {
                                                                          size: "20",
                                                                          color: "red",
                                                                          flat: "",
                                                                          onClick: ($event) => unref(images).splice(n, 1)
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(VIcon, {
                                                                              size: "small",
                                                                              icon: "mdi-delete"
                                                                            })
                                                                          ]),
                                                                          _: 2
                                                                        }, 1032, ["onClick"])
                                                                      ])
                                                                    ])
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSlideGroup, { "show-arrows": "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<!--[-->`);
                                                      ssrRenderList(unref(product).images, (image, n) => {
                                                        _push9(ssrRenderComponent(VSlideGroupItem, { key: n }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<div class="d-flex flex-column align-center mr-4 gap-1"${_scopeId9}>`);
                                                              _push10(ssrRenderComponent(VAvatar, {
                                                                rounded: "",
                                                                size: "80",
                                                                color: "grey-lighten-2"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VImg, {
                                                                      cover: "",
                                                                      src: image == null ? void 0 : image.thumbnail
                                                                    }, null, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VImg, {
                                                                        cover: "",
                                                                        src: image == null ? void 0 : image.thumbnail
                                                                      }, null, 8, ["src"])
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              _push10(`<div class="d-flex align-center justify-space-between w-100"${_scopeId9}><span${_scopeId9}>${ssrInterpolate(n)}</span>`);
                                                              _push10(ssrRenderComponent(VBtn, {
                                                                size: "20",
                                                                color: "red",
                                                                flat: "",
                                                                onClick: ($event) => removeValue(n, "images")
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VIcon, {
                                                                      size: "small",
                                                                      icon: "mdi-delete"
                                                                    }, null, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VIcon, {
                                                                        size: "small",
                                                                        icon: "mdi-delete"
                                                                      })
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              _push10(`</div></div>`);
                                                            } else {
                                                              return [
                                                                createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                                  createVNode(VAvatar, {
                                                                    rounded: "",
                                                                    size: "80",
                                                                    color: "grey-lighten-2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VImg, {
                                                                        cover: "",
                                                                        src: image == null ? void 0 : image.thumbnail
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                    createVNode("span", null, toDisplayString(n), 1),
                                                                    createVNode(VBtn, {
                                                                      size: "20",
                                                                      color: "red",
                                                                      flat: "",
                                                                      onClick: ($event) => removeValue(n, "images")
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VIcon, {
                                                                          size: "small",
                                                                          icon: "mdi-delete"
                                                                        })
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["onClick"])
                                                                  ])
                                                                ])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]-->`);
                                                    } else {
                                                      return [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(product).images, (image, n) => {
                                                          return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                                createVNode(VAvatar, {
                                                                  rounded: "",
                                                                  size: "80",
                                                                  color: "grey-lighten-2"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VImg, {
                                                                      cover: "",
                                                                      src: image == null ? void 0 : image.thumbnail
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                  createVNode("span", null, toDisplayString(n), 1),
                                                                  createVNode(VBtn, {
                                                                    size: "20",
                                                                    color: "red",
                                                                    flat: "",
                                                                    onClick: ($event) => removeValue(n, "images")
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VIcon, {
                                                                        size: "small",
                                                                        icon: "mdi-delete"
                                                                      })
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["onClick"])
                                                                ])
                                                              ])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(product).images, (image, n) => {
                                                        return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                              createVNode(VAvatar, {
                                                                rounded: "",
                                                                size: "80",
                                                                color: "grey-lighten-2"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VImg, {
                                                                    cover: "",
                                                                    src: image == null ? void 0 : image.thumbnail
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                createVNode("span", null, toDisplayString(n), 1),
                                                                createVNode(VBtn, {
                                                                  size: "20",
                                                                  color: "red",
                                                                  flat: "",
                                                                  onClick: ($event) => removeValue(n, "images")
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VIcon, {
                                                                      size: "small",
                                                                      icon: "mdi-delete"
                                                                    })
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["onClick"])
                                                              ])
                                                            ])
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "4",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSwitch, {
                                                  modelValue: unref(product).for_sale,
                                                  "onUpdate:modelValue": ($event) => unref(product).for_sale = $event,
                                                  "hide-details": "",
                                                  density: "compact",
                                                  color: "primary",
                                                  inset: "",
                                                  label: _ctx.$t("admin.show")
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSwitch, {
                                                    modelValue: unref(product).for_sale,
                                                    "onUpdate:modelValue": ($event) => unref(product).for_sale = $event,
                                                    "hide-details": "",
                                                    density: "compact",
                                                    color: "primary",
                                                    inset: "",
                                                    label: _ctx.$t("admin.show")
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "4",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, {
                                                  disabled: unref(save_loading),
                                                  loading: unref(save_loading),
                                                  color: "primary",
                                                  flat: "",
                                                  block: "",
                                                  onClick: save,
                                                  height: "45"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(_ctx.$t("admin.save"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("admin.save")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, {
                                                    disabled: unref(save_loading),
                                                    loading: unref(save_loading),
                                                    color: "primary",
                                                    flat: "",
                                                    block: "",
                                                    onClick: save,
                                                    height: "45"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("admin.save")), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["disabled", "loading"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Nomi (uz)")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextField, {
                                                  modelValue: unref(product).title_uz,
                                                  "onUpdate:modelValue": ($event) => unref(product).title_uz = $event,
                                                  rules: nameRule,
                                                  placeholder: "Nomi (uz)",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextField, {
                                                  modelValue: unref(product).title_ru,
                                                  "onUpdate:modelValue": ($event) => unref(product).title_ru = $event,
                                                  rules: nameRule,
                                                  placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Title (en)")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextField, {
                                                  modelValue: unref(product).title_en,
                                                  "onUpdate:modelValue": ($event) => unref(product).title_en = $event,
                                                  rules: nameRule,
                                                  placeholder: "Title (en)",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.model")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextField, {
                                                  modelValue: unref(product).model,
                                                  "onUpdate:modelValue": ($event) => unref(product).model = $event,
                                                  rules: nameRule,
                                                  placeholder: _ctx.$t("products.model"),
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.price")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextField, {
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).price,
                                                  "onUpdate:modelValue": ($event) => unref(product).price = $event,
                                                  rules: nameRule,
                                                  flat: "",
                                                  class: "border rounded",
                                                  placeholder: _ctx.$t("products.price"),
                                                  type: "number",
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.condition")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VSelect, {
                                                  rules: nameRule,
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).condition,
                                                  "onUpdate:modelValue": ($event) => unref(product).condition = $event,
                                                  items: unref(conditions),
                                                  placeholder: _ctx.$t("products.condition"),
                                                  "item-title": "title_" + _ctx.$i18n.locale,
                                                  "hide-details": "",
                                                  "item-value": "value",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.warranty")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextField, {
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).warranty,
                                                  "onUpdate:modelValue": ($event) => unref(product).warranty = $event,
                                                  min: "0",
                                                  flat: "",
                                                  class: "border rounded",
                                                  placeholder: _ctx.$t("products.warranty"),
                                                  type: "number",
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.year")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextField, {
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).year,
                                                  "onUpdate:modelValue": ($event) => unref(product).year = $event,
                                                  rules: nameRule,
                                                  min: "1000",
                                                  flat: "",
                                                  class: "border rounded",
                                                  placeholder: _ctx.$t("products.year"),
                                                  type: "number",
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.category")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VSelect, {
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).category,
                                                  "onUpdate:modelValue": ($event) => unref(product).category = $event,
                                                  items: unref(categories),
                                                  placeholder: _ctx.$t("products.category"),
                                                  "item-title": `name_${_ctx.$i18n.locale}`,
                                                  "hide-details": "",
                                                  "item-value": "id",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.brand")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VSelect, {
                                                  rules: nameRule,
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).brand,
                                                  "onUpdate:modelValue": ($event) => unref(product).brand = $event,
                                                  items: unref(brands),
                                                  placeholder: _ctx.$t("products.brand"),
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
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.shipping")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VSelect, {
                                                  "item-props": itemProps,
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).shipping_from,
                                                  "onUpdate:modelValue": ($event) => unref(product).shipping_from = $event,
                                                  items: unref(countries),
                                                  placeholder: _ctx.$t("products.shipping"),
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
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("products.sales_area")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VAutocomplete, {
                                                  "item-props": itemProps,
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  multiple: "",
                                                  chips: "",
                                                  modelValue: unref(product).sales_areas,
                                                  "onUpdate:modelValue": ($event) => unref(product).sales_areas = $event,
                                                  items: unref(countries),
                                                  placeholder: _ctx.$t("products.sales_area"),
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
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Ma'lumot (uz)")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextarea, {
                                                  rules: nameRule,
                                                  "no-resize": "",
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).description_uz,
                                                  "onUpdate:modelValue": ($event) => unref(product).description_uz = $event,
                                                  placeholder: "Ma'lumot (uz)",
                                                  "hide-details": "",
                                                  color: "primary",
                                                  variant: "outlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextarea, {
                                                  rules: nameRule,
                                                  "no-resize": "",
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).description_ru,
                                                  "onUpdate:modelValue": ($event) => unref(product).description_ru = $event,
                                                  placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)",
                                                  "hide-details": "",
                                                  color: "primary",
                                                  variant: "outlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Description (en)")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextarea, {
                                                  rules: nameRule,
                                                  "no-resize": "",
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(product).description_en,
                                                  "onUpdate:modelValue": ($event) => unref(product).description_en = $event,
                                                  placeholder: "Description (en)",
                                                  "hide-details": "",
                                                  color: "primary",
                                                  variant: "outlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(product).characteristics, (c, i) => {
                                              return openBlock(), createBlock(VCol, {
                                                cols: "12",
                                                class: "pa-2",
                                                key: i
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTable, {
                                                    density: "compact",
                                                    class: "border rounded pb-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("thead", null, [
                                                        createVNode("tr", null, [
                                                          createVNode("td", { class: "px-2" }, toDisplayString(_ctx.$t("products.characteristics")), 1),
                                                          createVNode("td", { class: "px-2 d-flex align-center justify-space-between" }, [
                                                            createTextVNode(toDisplayString({ "uz": "Qiymat", "ru": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", "en": "Value" }[_ctx.$i18n.locale]) + " ", 1),
                                                            createVNode(VBtn, {
                                                              size: "20",
                                                              color: "red",
                                                              flat: "",
                                                              onClick: ($event) => removeValue(i, "characteristics")
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VIcon, { icon: "mdi-delete" })
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["onClick"])
                                                          ])
                                                        ])
                                                      ]),
                                                      createVNode("tbody", null, [
                                                        createVNode("tr", null, [
                                                          createVNode("td", { class: "px-2" }, [
                                                            createVNode(VTextField, {
                                                              modelValue: c.title.uz,
                                                              "onUpdate:modelValue": ($event) => c.title.uz = $event,
                                                              rules: nameRule,
                                                              placeholder: "uz",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              color: "primary",
                                                              variant: "outlined",
                                                              flat: "",
                                                              class: "border rounded"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          createVNode("td", { class: "px-2" }, [
                                                            createVNode(VTextField, {
                                                              modelValue: c.value.uz,
                                                              "onUpdate:modelValue": ($event) => c.value.uz = $event,
                                                              rules: nameRule,
                                                              placeholder: "uz",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              color: "primary",
                                                              variant: "outlined",
                                                              flat: "",
                                                              class: "border rounded"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ])
                                                        ]),
                                                        createVNode("tr", null, [
                                                          createVNode("td", { class: "px-2" }, [
                                                            createVNode(VTextField, {
                                                              modelValue: c.title.ru,
                                                              "onUpdate:modelValue": ($event) => c.title.ru = $event,
                                                              rules: nameRule,
                                                              placeholder: "ru",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              color: "primary",
                                                              variant: "outlined",
                                                              flat: "",
                                                              class: "border rounded"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          createVNode("td", { class: "px-2" }, [
                                                            createVNode(VTextField, {
                                                              modelValue: c.value.ru,
                                                              "onUpdate:modelValue": ($event) => c.value.ru = $event,
                                                              rules: nameRule,
                                                              placeholder: "ru",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              color: "primary",
                                                              variant: "outlined",
                                                              flat: "",
                                                              class: "border rounded"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ])
                                                        ]),
                                                        createVNode("tr", null, [
                                                          createVNode("td", { class: "px-2" }, [
                                                            createVNode(VTextField, {
                                                              modelValue: c.title.en,
                                                              "onUpdate:modelValue": ($event) => c.title.en = $event,
                                                              rules: nameRule,
                                                              placeholder: "en",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              color: "primary",
                                                              variant: "outlined",
                                                              flat: "",
                                                              class: "border rounded"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          createVNode("td", { class: "px-2" }, [
                                                            createVNode(VTextField, {
                                                              modelValue: c.value.en,
                                                              "onUpdate:modelValue": ($event) => c.value.en = $event,
                                                              rules: nameRule,
                                                              placeholder: "en",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              color: "primary",
                                                              variant: "outlined",
                                                              flat: "",
                                                              class: "border rounded"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ])
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128)),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  onClick: addCharasteristic,
                                                  block: "",
                                                  color: "primary",
                                                  class: "text-none",
                                                  flat: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("admin.add_charac")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      class: "px-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        withDirectives((openBlock(), createBlock("label", {
                                                          for: "image-files",
                                                          class: "w-100 py-2 rounded bg-primary d-flex justify-center align-center"
                                                        }, [
                                                          createTextVNode(toDisplayString(_ctx.$t("admin.add_image")), 1)
                                                        ])), [
                                                          [Ripple]
                                                        ]),
                                                        withDirectives(createVNode(VFileInput, {
                                                          id: "image-files",
                                                          flat: "",
                                                          class: "border rounded",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          onChange: pushImages,
                                                          max: "10",
                                                          label: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
                                                          multiple: "",
                                                          counter: "",
                                                          "hide-details": "",
                                                          variant: "solo",
                                                          color: "primary",
                                                          "prepend-icon": ""
                                                        }, null, 512), [
                                                          [vShow, false]
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                          default: withCtx(() => [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image, n) => {
                                                              return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                                default: withCtx(() => [
                                                                  createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                                    createVNode(VAvatar, {
                                                                      rounded: "",
                                                                      size: "80"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VImg, {
                                                                          cover: "",
                                                                          src: getBlobImage(image)
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                      createVNode("span", { class: "text-caption" }, toDisplayString(image.name.slice(0, 8)) + "...", 1),
                                                                      createVNode(VBtn, {
                                                                        size: "20",
                                                                        color: "red",
                                                                        flat: "",
                                                                        onClick: ($event) => unref(images).splice(n, 1)
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(VIcon, {
                                                                            size: "small",
                                                                            icon: "mdi-delete"
                                                                          })
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["onClick"])
                                                                    ])
                                                                  ])
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
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(product).images, (image, n) => {
                                                      return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                            createVNode(VAvatar, {
                                                              rounded: "",
                                                              size: "80",
                                                              color: "grey-lighten-2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VImg, {
                                                                  cover: "",
                                                                  src: image == null ? void 0 : image.thumbnail
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                              createVNode("span", null, toDisplayString(n), 1),
                                                              createVNode(VBtn, {
                                                                size: "20",
                                                                color: "red",
                                                                flat: "",
                                                                onClick: ($event) => removeValue(n, "images")
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    size: "small",
                                                                    icon: "mdi-delete"
                                                                  })
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["onClick"])
                                                            ])
                                                          ])
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
                                            createVNode(VCol, {
                                              cols: "4",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSwitch, {
                                                  modelValue: unref(product).for_sale,
                                                  "onUpdate:modelValue": ($event) => unref(product).for_sale = $event,
                                                  "hide-details": "",
                                                  density: "compact",
                                                  color: "primary",
                                                  inset: "",
                                                  label: _ctx.$t("admin.show")
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "4",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  disabled: unref(save_loading),
                                                  loading: unref(save_loading),
                                                  color: "primary",
                                                  flat: "",
                                                  block: "",
                                                  onClick: save,
                                                  height: "45"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("admin.save")), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["disabled", "loading"])
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
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Nomi (uz)")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextField, {
                                                modelValue: unref(product).title_uz,
                                                "onUpdate:modelValue": ($event) => unref(product).title_uz = $event,
                                                rules: nameRule,
                                                placeholder: "Nomi (uz)",
                                                "hide-details": "",
                                                density: "compact",
                                                "bg-color": "surface",
                                                color: "primary",
                                                variant: "outlined",
                                                flat: "",
                                                class: "border rounded"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextField, {
                                                modelValue: unref(product).title_ru,
                                                "onUpdate:modelValue": ($event) => unref(product).title_ru = $event,
                                                rules: nameRule,
                                                placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                                "hide-details": "",
                                                density: "compact",
                                                "bg-color": "surface",
                                                color: "primary",
                                                variant: "outlined",
                                                flat: "",
                                                class: "border rounded"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Title (en)")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextField, {
                                                modelValue: unref(product).title_en,
                                                "onUpdate:modelValue": ($event) => unref(product).title_en = $event,
                                                rules: nameRule,
                                                placeholder: "Title (en)",
                                                "hide-details": "",
                                                density: "compact",
                                                "bg-color": "surface",
                                                color: "primary",
                                                variant: "outlined",
                                                flat: "",
                                                class: "border rounded"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.model")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextField, {
                                                modelValue: unref(product).model,
                                                "onUpdate:modelValue": ($event) => unref(product).model = $event,
                                                rules: nameRule,
                                                placeholder: _ctx.$t("products.model"),
                                                "hide-details": "",
                                                density: "compact",
                                                "bg-color": "surface",
                                                color: "primary",
                                                variant: "outlined",
                                                flat: "",
                                                class: "border rounded"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.price")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextField, {
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: unref(product).price,
                                                "onUpdate:modelValue": ($event) => unref(product).price = $event,
                                                rules: nameRule,
                                                flat: "",
                                                class: "border rounded",
                                                placeholder: _ctx.$t("products.price"),
                                                type: "number",
                                                "hide-details": "",
                                                variant: "outlined",
                                                color: "primary"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.condition")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VSelect, {
                                                rules: nameRule,
                                                flat: "",
                                                class: "border rounded",
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: unref(product).condition,
                                                "onUpdate:modelValue": ($event) => unref(product).condition = $event,
                                                items: unref(conditions),
                                                placeholder: _ctx.$t("products.condition"),
                                                "item-title": "title_" + _ctx.$i18n.locale,
                                                "hide-details": "",
                                                "item-value": "value",
                                                variant: "outlined",
                                                color: "primary"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.warranty")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextField, {
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: unref(product).warranty,
                                                "onUpdate:modelValue": ($event) => unref(product).warranty = $event,
                                                min: "0",
                                                flat: "",
                                                class: "border rounded",
                                                placeholder: _ctx.$t("products.warranty"),
                                                type: "number",
                                                "hide-details": "",
                                                variant: "outlined",
                                                color: "primary"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.year")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextField, {
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: unref(product).year,
                                                "onUpdate:modelValue": ($event) => unref(product).year = $event,
                                                rules: nameRule,
                                                min: "1000",
                                                flat: "",
                                                class: "border rounded",
                                                placeholder: _ctx.$t("products.year"),
                                                type: "number",
                                                "hide-details": "",
                                                variant: "outlined",
                                                color: "primary"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.category")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VSelect, {
                                                flat: "",
                                                class: "border rounded",
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: unref(product).category,
                                                "onUpdate:modelValue": ($event) => unref(product).category = $event,
                                                items: unref(categories),
                                                placeholder: _ctx.$t("products.category"),
                                                "item-title": `name_${_ctx.$i18n.locale}`,
                                                "hide-details": "",
                                                "item-value": "id",
                                                variant: "outlined",
                                                color: "primary"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.brand")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VSelect, {
                                                rules: nameRule,
                                                flat: "",
                                                class: "border rounded",
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: unref(product).brand,
                                                "onUpdate:modelValue": ($event) => unref(product).brand = $event,
                                                items: unref(brands),
                                                placeholder: _ctx.$t("products.brand"),
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
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.shipping")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VSelect, {
                                                "item-props": itemProps,
                                                flat: "",
                                                class: "border rounded",
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: unref(product).shipping_from,
                                                "onUpdate:modelValue": ($event) => unref(product).shipping_from = $event,
                                                items: unref(countries),
                                                placeholder: _ctx.$t("products.shipping"),
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
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("products.sales_area")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VAutocomplete, {
                                                "item-props": itemProps,
                                                flat: "",
                                                class: "border rounded",
                                                density: "compact",
                                                "bg-color": "surface",
                                                multiple: "",
                                                chips: "",
                                                modelValue: unref(product).sales_areas,
                                                "onUpdate:modelValue": ($event) => unref(product).sales_areas = $event,
                                                items: unref(countries),
                                                placeholder: _ctx.$t("products.sales_area"),
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
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Ma'lumot (uz)")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextarea, {
                                                rules: nameRule,
                                                "no-resize": "",
                                                flat: "",
                                                class: "border rounded",
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: unref(product).description_uz,
                                                "onUpdate:modelValue": ($event) => unref(product).description_uz = $event,
                                                placeholder: "Ma'lumot (uz)",
                                                "hide-details": "",
                                                color: "primary",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextarea, {
                                                rules: nameRule,
                                                "no-resize": "",
                                                flat: "",
                                                class: "border rounded",
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: unref(product).description_ru,
                                                "onUpdate:modelValue": ($event) => unref(product).description_ru = $event,
                                                placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)",
                                                "hide-details": "",
                                                color: "primary",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Description (en)")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextarea, {
                                                rules: nameRule,
                                                "no-resize": "",
                                                flat: "",
                                                class: "border rounded",
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: unref(product).description_en,
                                                "onUpdate:modelValue": ($event) => unref(product).description_en = $event,
                                                placeholder: "Description (en)",
                                                "hide-details": "",
                                                color: "primary",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(product).characteristics, (c, i) => {
                                            return openBlock(), createBlock(VCol, {
                                              cols: "12",
                                              class: "pa-2",
                                              key: i
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTable, {
                                                  density: "compact",
                                                  class: "border rounded pb-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("thead", null, [
                                                      createVNode("tr", null, [
                                                        createVNode("td", { class: "px-2" }, toDisplayString(_ctx.$t("products.characteristics")), 1),
                                                        createVNode("td", { class: "px-2 d-flex align-center justify-space-between" }, [
                                                          createTextVNode(toDisplayString({ "uz": "Qiymat", "ru": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", "en": "Value" }[_ctx.$i18n.locale]) + " ", 1),
                                                          createVNode(VBtn, {
                                                            size: "20",
                                                            color: "red",
                                                            flat: "",
                                                            onClick: ($event) => removeValue(i, "characteristics")
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, { icon: "mdi-delete" })
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["onClick"])
                                                        ])
                                                      ])
                                                    ]),
                                                    createVNode("tbody", null, [
                                                      createVNode("tr", null, [
                                                        createVNode("td", { class: "px-2" }, [
                                                          createVNode(VTextField, {
                                                            modelValue: c.title.uz,
                                                            "onUpdate:modelValue": ($event) => c.title.uz = $event,
                                                            rules: nameRule,
                                                            placeholder: "uz",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            "bg-color": "surface",
                                                            color: "primary",
                                                            variant: "outlined",
                                                            flat: "",
                                                            class: "border rounded"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        createVNode("td", { class: "px-2" }, [
                                                          createVNode(VTextField, {
                                                            modelValue: c.value.uz,
                                                            "onUpdate:modelValue": ($event) => c.value.uz = $event,
                                                            rules: nameRule,
                                                            placeholder: "uz",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            "bg-color": "surface",
                                                            color: "primary",
                                                            variant: "outlined",
                                                            flat: "",
                                                            class: "border rounded"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ]),
                                                      createVNode("tr", null, [
                                                        createVNode("td", { class: "px-2" }, [
                                                          createVNode(VTextField, {
                                                            modelValue: c.title.ru,
                                                            "onUpdate:modelValue": ($event) => c.title.ru = $event,
                                                            rules: nameRule,
                                                            placeholder: "ru",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            "bg-color": "surface",
                                                            color: "primary",
                                                            variant: "outlined",
                                                            flat: "",
                                                            class: "border rounded"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        createVNode("td", { class: "px-2" }, [
                                                          createVNode(VTextField, {
                                                            modelValue: c.value.ru,
                                                            "onUpdate:modelValue": ($event) => c.value.ru = $event,
                                                            rules: nameRule,
                                                            placeholder: "ru",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            "bg-color": "surface",
                                                            color: "primary",
                                                            variant: "outlined",
                                                            flat: "",
                                                            class: "border rounded"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ]),
                                                      createVNode("tr", null, [
                                                        createVNode("td", { class: "px-2" }, [
                                                          createVNode(VTextField, {
                                                            modelValue: c.title.en,
                                                            "onUpdate:modelValue": ($event) => c.title.en = $event,
                                                            rules: nameRule,
                                                            placeholder: "en",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            "bg-color": "surface",
                                                            color: "primary",
                                                            variant: "outlined",
                                                            flat: "",
                                                            class: "border rounded"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        createVNode("td", { class: "px-2" }, [
                                                          createVNode(VTextField, {
                                                            modelValue: c.value.en,
                                                            "onUpdate:modelValue": ($event) => c.value.en = $event,
                                                            rules: nameRule,
                                                            placeholder: "en",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            "bg-color": "surface",
                                                            color: "primary",
                                                            variant: "outlined",
                                                            flat: "",
                                                            class: "border rounded"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128)),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                onClick: addCharasteristic,
                                                block: "",
                                                color: "primary",
                                                class: "text-none",
                                                flat: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("admin.add_charac")), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    class: "px-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      withDirectives((openBlock(), createBlock("label", {
                                                        for: "image-files",
                                                        class: "w-100 py-2 rounded bg-primary d-flex justify-center align-center"
                                                      }, [
                                                        createTextVNode(toDisplayString(_ctx.$t("admin.add_image")), 1)
                                                      ])), [
                                                        [Ripple]
                                                      ]),
                                                      withDirectives(createVNode(VFileInput, {
                                                        id: "image-files",
                                                        flat: "",
                                                        class: "border rounded",
                                                        density: "compact",
                                                        "bg-color": "surface",
                                                        onChange: pushImages,
                                                        max: "10",
                                                        label: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
                                                        multiple: "",
                                                        counter: "",
                                                        "hide-details": "",
                                                        variant: "solo",
                                                        color: "primary",
                                                        "prepend-icon": ""
                                                      }, null, 512), [
                                                        [vShow, false]
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image, n) => {
                                                            return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                              default: withCtx(() => [
                                                                createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                                  createVNode(VAvatar, {
                                                                    rounded: "",
                                                                    size: "80"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VImg, {
                                                                        cover: "",
                                                                        src: getBlobImage(image)
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                    createVNode("span", { class: "text-caption" }, toDisplayString(image.name.slice(0, 8)) + "...", 1),
                                                                    createVNode(VBtn, {
                                                                      size: "20",
                                                                      color: "red",
                                                                      flat: "",
                                                                      onClick: ($event) => unref(images).splice(n, 1)
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VIcon, {
                                                                          size: "small",
                                                                          icon: "mdi-delete"
                                                                        })
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["onClick"])
                                                                  ])
                                                                ])
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
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(product).images, (image, n) => {
                                                    return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                          createVNode(VAvatar, {
                                                            rounded: "",
                                                            size: "80",
                                                            color: "grey-lighten-2"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VImg, {
                                                                cover: "",
                                                                src: image == null ? void 0 : image.thumbnail
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                            createVNode("span", null, toDisplayString(n), 1),
                                                            createVNode(VBtn, {
                                                              size: "20",
                                                              color: "red",
                                                              flat: "",
                                                              onClick: ($event) => removeValue(n, "images")
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  size: "small",
                                                                  icon: "mdi-delete"
                                                                })
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["onClick"])
                                                          ])
                                                        ])
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
                                          createVNode(VCol, {
                                            cols: "4",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSwitch, {
                                                modelValue: unref(product).for_sale,
                                                "onUpdate:modelValue": ($event) => unref(product).for_sale = $event,
                                                "hide-details": "",
                                                density: "compact",
                                                color: "primary",
                                                inset: "",
                                                label: _ctx.$t("admin.show")
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "4",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                disabled: unref(save_loading),
                                                loading: unref(save_loading),
                                                color: "primary",
                                                flat: "",
                                                block: "",
                                                onClick: save,
                                                height: "45"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("admin.save")), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["disabled", "loading"])
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
                                  class: "w-100 form-card",
                                  ref_key: "form",
                                  ref: form
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, { class: "pa-2" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Nomi (uz)")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextField, {
                                              modelValue: unref(product).title_uz,
                                              "onUpdate:modelValue": ($event) => unref(product).title_uz = $event,
                                              rules: nameRule,
                                              placeholder: "Nomi (uz)",
                                              "hide-details": "",
                                              density: "compact",
                                              "bg-color": "surface",
                                              color: "primary",
                                              variant: "outlined",
                                              flat: "",
                                              class: "border rounded"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextField, {
                                              modelValue: unref(product).title_ru,
                                              "onUpdate:modelValue": ($event) => unref(product).title_ru = $event,
                                              rules: nameRule,
                                              placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                              "hide-details": "",
                                              density: "compact",
                                              "bg-color": "surface",
                                              color: "primary",
                                              variant: "outlined",
                                              flat: "",
                                              class: "border rounded"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Title (en)")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextField, {
                                              modelValue: unref(product).title_en,
                                              "onUpdate:modelValue": ($event) => unref(product).title_en = $event,
                                              rules: nameRule,
                                              placeholder: "Title (en)",
                                              "hide-details": "",
                                              density: "compact",
                                              "bg-color": "surface",
                                              color: "primary",
                                              variant: "outlined",
                                              flat: "",
                                              class: "border rounded"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.model")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextField, {
                                              modelValue: unref(product).model,
                                              "onUpdate:modelValue": ($event) => unref(product).model = $event,
                                              rules: nameRule,
                                              placeholder: _ctx.$t("products.model"),
                                              "hide-details": "",
                                              density: "compact",
                                              "bg-color": "surface",
                                              color: "primary",
                                              variant: "outlined",
                                              flat: "",
                                              class: "border rounded"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.price")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextField, {
                                              density: "compact",
                                              "bg-color": "surface",
                                              modelValue: unref(product).price,
                                              "onUpdate:modelValue": ($event) => unref(product).price = $event,
                                              rules: nameRule,
                                              flat: "",
                                              class: "border rounded",
                                              placeholder: _ctx.$t("products.price"),
                                              type: "number",
                                              "hide-details": "",
                                              variant: "outlined",
                                              color: "primary"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.condition")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VSelect, {
                                              rules: nameRule,
                                              flat: "",
                                              class: "border rounded",
                                              density: "compact",
                                              "bg-color": "surface",
                                              modelValue: unref(product).condition,
                                              "onUpdate:modelValue": ($event) => unref(product).condition = $event,
                                              items: unref(conditions),
                                              placeholder: _ctx.$t("products.condition"),
                                              "item-title": "title_" + _ctx.$i18n.locale,
                                              "hide-details": "",
                                              "item-value": "value",
                                              variant: "outlined",
                                              color: "primary"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.warranty")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextField, {
                                              density: "compact",
                                              "bg-color": "surface",
                                              modelValue: unref(product).warranty,
                                              "onUpdate:modelValue": ($event) => unref(product).warranty = $event,
                                              min: "0",
                                              flat: "",
                                              class: "border rounded",
                                              placeholder: _ctx.$t("products.warranty"),
                                              type: "number",
                                              "hide-details": "",
                                              variant: "outlined",
                                              color: "primary"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.year")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextField, {
                                              density: "compact",
                                              "bg-color": "surface",
                                              modelValue: unref(product).year,
                                              "onUpdate:modelValue": ($event) => unref(product).year = $event,
                                              rules: nameRule,
                                              min: "1000",
                                              flat: "",
                                              class: "border rounded",
                                              placeholder: _ctx.$t("products.year"),
                                              type: "number",
                                              "hide-details": "",
                                              variant: "outlined",
                                              color: "primary"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.category")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VSelect, {
                                              flat: "",
                                              class: "border rounded",
                                              density: "compact",
                                              "bg-color": "surface",
                                              modelValue: unref(product).category,
                                              "onUpdate:modelValue": ($event) => unref(product).category = $event,
                                              items: unref(categories),
                                              placeholder: _ctx.$t("products.category"),
                                              "item-title": `name_${_ctx.$i18n.locale}`,
                                              "hide-details": "",
                                              "item-value": "id",
                                              variant: "outlined",
                                              color: "primary"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.brand")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VSelect, {
                                              rules: nameRule,
                                              flat: "",
                                              class: "border rounded",
                                              density: "compact",
                                              "bg-color": "surface",
                                              modelValue: unref(product).brand,
                                              "onUpdate:modelValue": ($event) => unref(product).brand = $event,
                                              items: unref(brands),
                                              placeholder: _ctx.$t("products.brand"),
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
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.shipping")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VSelect, {
                                              "item-props": itemProps,
                                              flat: "",
                                              class: "border rounded",
                                              density: "compact",
                                              "bg-color": "surface",
                                              modelValue: unref(product).shipping_from,
                                              "onUpdate:modelValue": ($event) => unref(product).shipping_from = $event,
                                              items: unref(countries),
                                              placeholder: _ctx.$t("products.shipping"),
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
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("products.sales_area")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VAutocomplete, {
                                              "item-props": itemProps,
                                              flat: "",
                                              class: "border rounded",
                                              density: "compact",
                                              "bg-color": "surface",
                                              multiple: "",
                                              chips: "",
                                              modelValue: unref(product).sales_areas,
                                              "onUpdate:modelValue": ($event) => unref(product).sales_areas = $event,
                                              items: unref(countries),
                                              placeholder: _ctx.$t("products.sales_area"),
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
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Ma'lumot (uz)")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextarea, {
                                              rules: nameRule,
                                              "no-resize": "",
                                              flat: "",
                                              class: "border rounded",
                                              density: "compact",
                                              "bg-color": "surface",
                                              modelValue: unref(product).description_uz,
                                              "onUpdate:modelValue": ($event) => unref(product).description_uz = $event,
                                              placeholder: "Ma'lumot (uz)",
                                              "hide-details": "",
                                              color: "primary",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextarea, {
                                              rules: nameRule,
                                              "no-resize": "",
                                              flat: "",
                                              class: "border rounded",
                                              density: "compact",
                                              "bg-color": "surface",
                                              modelValue: unref(product).description_ru,
                                              "onUpdate:modelValue": ($event) => unref(product).description_ru = $event,
                                              placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)",
                                              "hide-details": "",
                                              color: "primary",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Description (en)")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextarea, {
                                              rules: nameRule,
                                              "no-resize": "",
                                              flat: "",
                                              class: "border rounded",
                                              density: "compact",
                                              "bg-color": "surface",
                                              modelValue: unref(product).description_en,
                                              "onUpdate:modelValue": ($event) => unref(product).description_en = $event,
                                              placeholder: "Description (en)",
                                              "hide-details": "",
                                              color: "primary",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(product).characteristics, (c, i) => {
                                          return openBlock(), createBlock(VCol, {
                                            cols: "12",
                                            class: "pa-2",
                                            key: i
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTable, {
                                                density: "compact",
                                                class: "border rounded pb-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("thead", null, [
                                                    createVNode("tr", null, [
                                                      createVNode("td", { class: "px-2" }, toDisplayString(_ctx.$t("products.characteristics")), 1),
                                                      createVNode("td", { class: "px-2 d-flex align-center justify-space-between" }, [
                                                        createTextVNode(toDisplayString({ "uz": "Qiymat", "ru": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", "en": "Value" }[_ctx.$i18n.locale]) + " ", 1),
                                                        createVNode(VBtn, {
                                                          size: "20",
                                                          color: "red",
                                                          flat: "",
                                                          onClick: ($event) => removeValue(i, "characteristics")
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, { icon: "mdi-delete" })
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"])
                                                      ])
                                                    ])
                                                  ]),
                                                  createVNode("tbody", null, [
                                                    createVNode("tr", null, [
                                                      createVNode("td", { class: "px-2" }, [
                                                        createVNode(VTextField, {
                                                          modelValue: c.title.uz,
                                                          "onUpdate:modelValue": ($event) => c.title.uz = $event,
                                                          rules: nameRule,
                                                          placeholder: "uz",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      createVNode("td", { class: "px-2" }, [
                                                        createVNode(VTextField, {
                                                          modelValue: c.value.uz,
                                                          "onUpdate:modelValue": ($event) => c.value.uz = $event,
                                                          rules: nameRule,
                                                          placeholder: "uz",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", { class: "px-2" }, [
                                                        createVNode(VTextField, {
                                                          modelValue: c.title.ru,
                                                          "onUpdate:modelValue": ($event) => c.title.ru = $event,
                                                          rules: nameRule,
                                                          placeholder: "ru",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      createVNode("td", { class: "px-2" }, [
                                                        createVNode(VTextField, {
                                                          modelValue: c.value.ru,
                                                          "onUpdate:modelValue": ($event) => c.value.ru = $event,
                                                          rules: nameRule,
                                                          placeholder: "ru",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    createVNode("tr", null, [
                                                      createVNode("td", { class: "px-2" }, [
                                                        createVNode(VTextField, {
                                                          modelValue: c.title.en,
                                                          "onUpdate:modelValue": ($event) => c.title.en = $event,
                                                          rules: nameRule,
                                                          placeholder: "en",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      createVNode("td", { class: "px-2" }, [
                                                        createVNode(VTextField, {
                                                          modelValue: c.value.en,
                                                          "onUpdate:modelValue": ($event) => c.value.en = $event,
                                                          rules: nameRule,
                                                          placeholder: "en",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "outlined",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ])
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128)),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              onClick: addCharasteristic,
                                              block: "",
                                              color: "primary",
                                              class: "text-none",
                                              flat: ""
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("admin.add_charac")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  class: "px-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    withDirectives((openBlock(), createBlock("label", {
                                                      for: "image-files",
                                                      class: "w-100 py-2 rounded bg-primary d-flex justify-center align-center"
                                                    }, [
                                                      createTextVNode(toDisplayString(_ctx.$t("admin.add_image")), 1)
                                                    ])), [
                                                      [Ripple]
                                                    ]),
                                                    withDirectives(createVNode(VFileInput, {
                                                      id: "image-files",
                                                      flat: "",
                                                      class: "border rounded",
                                                      density: "compact",
                                                      "bg-color": "surface",
                                                      onChange: pushImages,
                                                      max: "10",
                                                      label: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
                                                      multiple: "",
                                                      counter: "",
                                                      "hide-details": "",
                                                      variant: "solo",
                                                      color: "primary",
                                                      "prepend-icon": ""
                                                    }, null, 512), [
                                                      [vShow, false]
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image, n) => {
                                                          return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                                createVNode(VAvatar, {
                                                                  rounded: "",
                                                                  size: "80"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VImg, {
                                                                      cover: "",
                                                                      src: getBlobImage(image)
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                  createVNode("span", { class: "text-caption" }, toDisplayString(image.name.slice(0, 8)) + "...", 1),
                                                                  createVNode(VBtn, {
                                                                    size: "20",
                                                                    color: "red",
                                                                    flat: "",
                                                                    onClick: ($event) => unref(images).splice(n, 1)
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VIcon, {
                                                                        size: "small",
                                                                        icon: "mdi-delete"
                                                                      })
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["onClick"])
                                                                ])
                                                              ])
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
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSlideGroup, { "show-arrows": "" }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(product).images, (image, n) => {
                                                  return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                        createVNode(VAvatar, {
                                                          rounded: "",
                                                          size: "80",
                                                          color: "grey-lighten-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VImg, {
                                                              cover: "",
                                                              src: image == null ? void 0 : image.thumbnail
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                          createVNode("span", null, toDisplayString(n), 1),
                                                          createVNode(VBtn, {
                                                            size: "20",
                                                            color: "red",
                                                            flat: "",
                                                            onClick: ($event) => removeValue(n, "images")
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                size: "small",
                                                                icon: "mdi-delete"
                                                              })
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["onClick"])
                                                        ])
                                                      ])
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
                                        createVNode(VCol, {
                                          cols: "4",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSwitch, {
                                              modelValue: unref(product).for_sale,
                                              "onUpdate:modelValue": ($event) => unref(product).for_sale = $event,
                                              "hide-details": "",
                                              density: "compact",
                                              color: "primary",
                                              inset: "",
                                              label: _ctx.$t("admin.show")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "4",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              disabled: unref(save_loading),
                                              loading: unref(save_loading),
                                              color: "primary",
                                              flat: "",
                                              block: "",
                                              onClick: save,
                                              height: "45"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("admin.save")), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["disabled", "loading"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 512)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "px-4 py-3 d-flex justify-space-between align-center" }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_product" : "admin.add_product")), 1),
                              createVNode(VBtn, {
                                flat: "",
                                onClick: ($event) => dialog.value = false,
                                size: "32",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "small",
                                    icon: "mdi-close"
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "px-4 py-4" }, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                class: "w-100 form-card",
                                ref_key: "form",
                                ref: form
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, { class: "pa-2" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Nomi (uz)")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextField, {
                                            modelValue: unref(product).title_uz,
                                            "onUpdate:modelValue": ($event) => unref(product).title_uz = $event,
                                            rules: nameRule,
                                            placeholder: "Nomi (uz)",
                                            "hide-details": "",
                                            density: "compact",
                                            "bg-color": "surface",
                                            color: "primary",
                                            variant: "outlined",
                                            flat: "",
                                            class: "border rounded"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextField, {
                                            modelValue: unref(product).title_ru,
                                            "onUpdate:modelValue": ($event) => unref(product).title_ru = $event,
                                            rules: nameRule,
                                            placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                            "hide-details": "",
                                            density: "compact",
                                            "bg-color": "surface",
                                            color: "primary",
                                            variant: "outlined",
                                            flat: "",
                                            class: "border rounded"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Title (en)")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextField, {
                                            modelValue: unref(product).title_en,
                                            "onUpdate:modelValue": ($event) => unref(product).title_en = $event,
                                            rules: nameRule,
                                            placeholder: "Title (en)",
                                            "hide-details": "",
                                            density: "compact",
                                            "bg-color": "surface",
                                            color: "primary",
                                            variant: "outlined",
                                            flat: "",
                                            class: "border rounded"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("products.model")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextField, {
                                            modelValue: unref(product).model,
                                            "onUpdate:modelValue": ($event) => unref(product).model = $event,
                                            rules: nameRule,
                                            placeholder: _ctx.$t("products.model"),
                                            "hide-details": "",
                                            density: "compact",
                                            "bg-color": "surface",
                                            color: "primary",
                                            variant: "outlined",
                                            flat: "",
                                            class: "border rounded"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("products.price")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextField, {
                                            density: "compact",
                                            "bg-color": "surface",
                                            modelValue: unref(product).price,
                                            "onUpdate:modelValue": ($event) => unref(product).price = $event,
                                            rules: nameRule,
                                            flat: "",
                                            class: "border rounded",
                                            placeholder: _ctx.$t("products.price"),
                                            type: "number",
                                            "hide-details": "",
                                            variant: "outlined",
                                            color: "primary"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("products.condition")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VSelect, {
                                            rules: nameRule,
                                            flat: "",
                                            class: "border rounded",
                                            density: "compact",
                                            "bg-color": "surface",
                                            modelValue: unref(product).condition,
                                            "onUpdate:modelValue": ($event) => unref(product).condition = $event,
                                            items: unref(conditions),
                                            placeholder: _ctx.$t("products.condition"),
                                            "item-title": "title_" + _ctx.$i18n.locale,
                                            "hide-details": "",
                                            "item-value": "value",
                                            variant: "outlined",
                                            color: "primary"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("products.warranty")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextField, {
                                            density: "compact",
                                            "bg-color": "surface",
                                            modelValue: unref(product).warranty,
                                            "onUpdate:modelValue": ($event) => unref(product).warranty = $event,
                                            min: "0",
                                            flat: "",
                                            class: "border rounded",
                                            placeholder: _ctx.$t("products.warranty"),
                                            type: "number",
                                            "hide-details": "",
                                            variant: "outlined",
                                            color: "primary"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("products.year")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextField, {
                                            density: "compact",
                                            "bg-color": "surface",
                                            modelValue: unref(product).year,
                                            "onUpdate:modelValue": ($event) => unref(product).year = $event,
                                            rules: nameRule,
                                            min: "1000",
                                            flat: "",
                                            class: "border rounded",
                                            placeholder: _ctx.$t("products.year"),
                                            type: "number",
                                            "hide-details": "",
                                            variant: "outlined",
                                            color: "primary"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("products.category")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VSelect, {
                                            flat: "",
                                            class: "border rounded",
                                            density: "compact",
                                            "bg-color": "surface",
                                            modelValue: unref(product).category,
                                            "onUpdate:modelValue": ($event) => unref(product).category = $event,
                                            items: unref(categories),
                                            placeholder: _ctx.$t("products.category"),
                                            "item-title": `name_${_ctx.$i18n.locale}`,
                                            "hide-details": "",
                                            "item-value": "id",
                                            variant: "outlined",
                                            color: "primary"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("products.brand")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VSelect, {
                                            rules: nameRule,
                                            flat: "",
                                            class: "border rounded",
                                            density: "compact",
                                            "bg-color": "surface",
                                            modelValue: unref(product).brand,
                                            "onUpdate:modelValue": ($event) => unref(product).brand = $event,
                                            items: unref(brands),
                                            placeholder: _ctx.$t("products.brand"),
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
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("products.shipping")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VSelect, {
                                            "item-props": itemProps,
                                            flat: "",
                                            class: "border rounded",
                                            density: "compact",
                                            "bg-color": "surface",
                                            modelValue: unref(product).shipping_from,
                                            "onUpdate:modelValue": ($event) => unref(product).shipping_from = $event,
                                            items: unref(countries),
                                            placeholder: _ctx.$t("products.shipping"),
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
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("products.sales_area")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VAutocomplete, {
                                            "item-props": itemProps,
                                            flat: "",
                                            class: "border rounded",
                                            density: "compact",
                                            "bg-color": "surface",
                                            multiple: "",
                                            chips: "",
                                            modelValue: unref(product).sales_areas,
                                            "onUpdate:modelValue": ($event) => unref(product).sales_areas = $event,
                                            items: unref(countries),
                                            placeholder: _ctx.$t("products.sales_area"),
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
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Ma'lumot (uz)")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextarea, {
                                            rules: nameRule,
                                            "no-resize": "",
                                            flat: "",
                                            class: "border rounded",
                                            density: "compact",
                                            "bg-color": "surface",
                                            modelValue: unref(product).description_uz,
                                            "onUpdate:modelValue": ($event) => unref(product).description_uz = $event,
                                            placeholder: "Ma'lumot (uz)",
                                            "hide-details": "",
                                            color: "primary",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextarea, {
                                            rules: nameRule,
                                            "no-resize": "",
                                            flat: "",
                                            class: "border rounded",
                                            density: "compact",
                                            "bg-color": "surface",
                                            modelValue: unref(product).description_ru,
                                            "onUpdate:modelValue": ($event) => unref(product).description_ru = $event,
                                            placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)",
                                            "hide-details": "",
                                            color: "primary",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Description (en)")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextarea, {
                                            rules: nameRule,
                                            "no-resize": "",
                                            flat: "",
                                            class: "border rounded",
                                            density: "compact",
                                            "bg-color": "surface",
                                            modelValue: unref(product).description_en,
                                            "onUpdate:modelValue": ($event) => unref(product).description_en = $event,
                                            placeholder: "Description (en)",
                                            "hide-details": "",
                                            color: "primary",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(product).characteristics, (c, i) => {
                                        return openBlock(), createBlock(VCol, {
                                          cols: "12",
                                          class: "pa-2",
                                          key: i
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTable, {
                                              density: "compact",
                                              class: "border rounded pb-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("thead", null, [
                                                  createVNode("tr", null, [
                                                    createVNode("td", { class: "px-2" }, toDisplayString(_ctx.$t("products.characteristics")), 1),
                                                    createVNode("td", { class: "px-2 d-flex align-center justify-space-between" }, [
                                                      createTextVNode(toDisplayString({ "uz": "Qiymat", "ru": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", "en": "Value" }[_ctx.$i18n.locale]) + " ", 1),
                                                      createVNode(VBtn, {
                                                        size: "20",
                                                        color: "red",
                                                        flat: "",
                                                        onClick: ($event) => removeValue(i, "characteristics")
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, { icon: "mdi-delete" })
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"])
                                                    ])
                                                  ])
                                                ]),
                                                createVNode("tbody", null, [
                                                  createVNode("tr", null, [
                                                    createVNode("td", { class: "px-2" }, [
                                                      createVNode(VTextField, {
                                                        modelValue: c.title.uz,
                                                        "onUpdate:modelValue": ($event) => c.title.uz = $event,
                                                        rules: nameRule,
                                                        placeholder: "uz",
                                                        "hide-details": "",
                                                        density: "compact",
                                                        "bg-color": "surface",
                                                        color: "primary",
                                                        variant: "outlined",
                                                        flat: "",
                                                        class: "border rounded"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    createVNode("td", { class: "px-2" }, [
                                                      createVNode(VTextField, {
                                                        modelValue: c.value.uz,
                                                        "onUpdate:modelValue": ($event) => c.value.uz = $event,
                                                        rules: nameRule,
                                                        placeholder: "uz",
                                                        "hide-details": "",
                                                        density: "compact",
                                                        "bg-color": "surface",
                                                        color: "primary",
                                                        variant: "outlined",
                                                        flat: "",
                                                        class: "border rounded"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", { class: "px-2" }, [
                                                      createVNode(VTextField, {
                                                        modelValue: c.title.ru,
                                                        "onUpdate:modelValue": ($event) => c.title.ru = $event,
                                                        rules: nameRule,
                                                        placeholder: "ru",
                                                        "hide-details": "",
                                                        density: "compact",
                                                        "bg-color": "surface",
                                                        color: "primary",
                                                        variant: "outlined",
                                                        flat: "",
                                                        class: "border rounded"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    createVNode("td", { class: "px-2" }, [
                                                      createVNode(VTextField, {
                                                        modelValue: c.value.ru,
                                                        "onUpdate:modelValue": ($event) => c.value.ru = $event,
                                                        rules: nameRule,
                                                        placeholder: "ru",
                                                        "hide-details": "",
                                                        density: "compact",
                                                        "bg-color": "surface",
                                                        color: "primary",
                                                        variant: "outlined",
                                                        flat: "",
                                                        class: "border rounded"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", { class: "px-2" }, [
                                                      createVNode(VTextField, {
                                                        modelValue: c.title.en,
                                                        "onUpdate:modelValue": ($event) => c.title.en = $event,
                                                        rules: nameRule,
                                                        placeholder: "en",
                                                        "hide-details": "",
                                                        density: "compact",
                                                        "bg-color": "surface",
                                                        color: "primary",
                                                        variant: "outlined",
                                                        flat: "",
                                                        class: "border rounded"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    createVNode("td", { class: "px-2" }, [
                                                      createVNode(VTextField, {
                                                        modelValue: c.value.en,
                                                        "onUpdate:modelValue": ($event) => c.value.en = $event,
                                                        rules: nameRule,
                                                        placeholder: "en",
                                                        "hide-details": "",
                                                        density: "compact",
                                                        "bg-color": "surface",
                                                        color: "primary",
                                                        variant: "outlined",
                                                        flat: "",
                                                        class: "border rounded"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ])
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128)),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            onClick: addCharasteristic,
                                            block: "",
                                            color: "primary",
                                            class: "text-none",
                                            flat: ""
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("admin.add_charac")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                class: "px-4"
                                              }, {
                                                default: withCtx(() => [
                                                  withDirectives((openBlock(), createBlock("label", {
                                                    for: "image-files",
                                                    class: "w-100 py-2 rounded bg-primary d-flex justify-center align-center"
                                                  }, [
                                                    createTextVNode(toDisplayString(_ctx.$t("admin.add_image")), 1)
                                                  ])), [
                                                    [Ripple]
                                                  ]),
                                                  withDirectives(createVNode(VFileInput, {
                                                    id: "image-files",
                                                    flat: "",
                                                    class: "border rounded",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    onChange: pushImages,
                                                    max: "10",
                                                    label: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
                                                    multiple: "",
                                                    counter: "",
                                                    "hide-details": "",
                                                    variant: "solo",
                                                    color: "primary",
                                                    "prepend-icon": ""
                                                  }, null, 512), [
                                                    [vShow, false]
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image, n) => {
                                                        return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                              createVNode(VAvatar, {
                                                                rounded: "",
                                                                size: "80"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VImg, {
                                                                    cover: "",
                                                                    src: getBlobImage(image)
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                                createVNode("span", { class: "text-caption" }, toDisplayString(image.name.slice(0, 8)) + "...", 1),
                                                                createVNode(VBtn, {
                                                                  size: "20",
                                                                  color: "red",
                                                                  flat: "",
                                                                  onClick: ($event) => unref(images).splice(n, 1)
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VIcon, {
                                                                      size: "small",
                                                                      icon: "mdi-delete"
                                                                    })
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["onClick"])
                                                              ])
                                                            ])
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
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSlideGroup, { "show-arrows": "" }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(product).images, (image, n) => {
                                                return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                      createVNode(VAvatar, {
                                                        rounded: "",
                                                        size: "80",
                                                        color: "grey-lighten-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VImg, {
                                                            cover: "",
                                                            src: image == null ? void 0 : image.thumbnail
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                        createVNode("span", null, toDisplayString(n), 1),
                                                        createVNode(VBtn, {
                                                          size: "20",
                                                          color: "red",
                                                          flat: "",
                                                          onClick: ($event) => removeValue(n, "images")
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              size: "small",
                                                              icon: "mdi-delete"
                                                            })
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"])
                                                      ])
                                                    ])
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
                                      createVNode(VCol, {
                                        cols: "4",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSwitch, {
                                            modelValue: unref(product).for_sale,
                                            "onUpdate:modelValue": ($event) => unref(product).for_sale = $event,
                                            "hide-details": "",
                                            density: "compact",
                                            color: "primary",
                                            inset: "",
                                            label: _ctx.$t("admin.show")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "4",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            disabled: unref(save_loading),
                                            loading: unref(save_loading),
                                            color: "primary",
                                            flat: "",
                                            block: "",
                                            onClick: save,
                                            height: "45"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("admin.save")), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["disabled", "loading"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 512)
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
                    createVNode(VCard, {
                      elevation: "1",
                      border: "",
                      color: "background"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "px-4 py-3 d-flex justify-space-between align-center" }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_product" : "admin.add_product")), 1),
                            createVNode(VBtn, {
                              flat: "",
                              onClick: ($event) => dialog.value = false,
                              size: "32",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "small",
                                  icon: "mdi-close"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "px-4 py-4" }, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              class: "w-100 form-card",
                              ref_key: "form",
                              ref: form
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, { class: "pa-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Nomi (uz)")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextField, {
                                          modelValue: unref(product).title_uz,
                                          "onUpdate:modelValue": ($event) => unref(product).title_uz = $event,
                                          rules: nameRule,
                                          placeholder: "Nomi (uz)",
                                          "hide-details": "",
                                          density: "compact",
                                          "bg-color": "surface",
                                          color: "primary",
                                          variant: "outlined",
                                          flat: "",
                                          class: "border rounded"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextField, {
                                          modelValue: unref(product).title_ru,
                                          "onUpdate:modelValue": ($event) => unref(product).title_ru = $event,
                                          rules: nameRule,
                                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                          "hide-details": "",
                                          density: "compact",
                                          "bg-color": "surface",
                                          color: "primary",
                                          variant: "outlined",
                                          flat: "",
                                          class: "border rounded"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Title (en)")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextField, {
                                          modelValue: unref(product).title_en,
                                          "onUpdate:modelValue": ($event) => unref(product).title_en = $event,
                                          rules: nameRule,
                                          placeholder: "Title (en)",
                                          "hide-details": "",
                                          density: "compact",
                                          "bg-color": "surface",
                                          color: "primary",
                                          variant: "outlined",
                                          flat: "",
                                          class: "border rounded"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("products.model")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextField, {
                                          modelValue: unref(product).model,
                                          "onUpdate:modelValue": ($event) => unref(product).model = $event,
                                          rules: nameRule,
                                          placeholder: _ctx.$t("products.model"),
                                          "hide-details": "",
                                          density: "compact",
                                          "bg-color": "surface",
                                          color: "primary",
                                          variant: "outlined",
                                          flat: "",
                                          class: "border rounded"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("products.price")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextField, {
                                          density: "compact",
                                          "bg-color": "surface",
                                          modelValue: unref(product).price,
                                          "onUpdate:modelValue": ($event) => unref(product).price = $event,
                                          rules: nameRule,
                                          flat: "",
                                          class: "border rounded",
                                          placeholder: _ctx.$t("products.price"),
                                          type: "number",
                                          "hide-details": "",
                                          variant: "outlined",
                                          color: "primary"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("products.condition")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VSelect, {
                                          rules: nameRule,
                                          flat: "",
                                          class: "border rounded",
                                          density: "compact",
                                          "bg-color": "surface",
                                          modelValue: unref(product).condition,
                                          "onUpdate:modelValue": ($event) => unref(product).condition = $event,
                                          items: unref(conditions),
                                          placeholder: _ctx.$t("products.condition"),
                                          "item-title": "title_" + _ctx.$i18n.locale,
                                          "hide-details": "",
                                          "item-value": "value",
                                          variant: "outlined",
                                          color: "primary"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("products.warranty")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextField, {
                                          density: "compact",
                                          "bg-color": "surface",
                                          modelValue: unref(product).warranty,
                                          "onUpdate:modelValue": ($event) => unref(product).warranty = $event,
                                          min: "0",
                                          flat: "",
                                          class: "border rounded",
                                          placeholder: _ctx.$t("products.warranty"),
                                          type: "number",
                                          "hide-details": "",
                                          variant: "outlined",
                                          color: "primary"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("products.year")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextField, {
                                          density: "compact",
                                          "bg-color": "surface",
                                          modelValue: unref(product).year,
                                          "onUpdate:modelValue": ($event) => unref(product).year = $event,
                                          rules: nameRule,
                                          min: "1000",
                                          flat: "",
                                          class: "border rounded",
                                          placeholder: _ctx.$t("products.year"),
                                          type: "number",
                                          "hide-details": "",
                                          variant: "outlined",
                                          color: "primary"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("products.category")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VSelect, {
                                          flat: "",
                                          class: "border rounded",
                                          density: "compact",
                                          "bg-color": "surface",
                                          modelValue: unref(product).category,
                                          "onUpdate:modelValue": ($event) => unref(product).category = $event,
                                          items: unref(categories),
                                          placeholder: _ctx.$t("products.category"),
                                          "item-title": `name_${_ctx.$i18n.locale}`,
                                          "hide-details": "",
                                          "item-value": "id",
                                          variant: "outlined",
                                          color: "primary"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("products.brand")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VSelect, {
                                          rules: nameRule,
                                          flat: "",
                                          class: "border rounded",
                                          density: "compact",
                                          "bg-color": "surface",
                                          modelValue: unref(product).brand,
                                          "onUpdate:modelValue": ($event) => unref(product).brand = $event,
                                          items: unref(brands),
                                          placeholder: _ctx.$t("products.brand"),
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
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("products.shipping")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VSelect, {
                                          "item-props": itemProps,
                                          flat: "",
                                          class: "border rounded",
                                          density: "compact",
                                          "bg-color": "surface",
                                          modelValue: unref(product).shipping_from,
                                          "onUpdate:modelValue": ($event) => unref(product).shipping_from = $event,
                                          items: unref(countries),
                                          placeholder: _ctx.$t("products.shipping"),
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
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("products.sales_area")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VAutocomplete, {
                                          "item-props": itemProps,
                                          flat: "",
                                          class: "border rounded",
                                          density: "compact",
                                          "bg-color": "surface",
                                          multiple: "",
                                          chips: "",
                                          modelValue: unref(product).sales_areas,
                                          "onUpdate:modelValue": ($event) => unref(product).sales_areas = $event,
                                          items: unref(countries),
                                          placeholder: _ctx.$t("products.sales_area"),
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
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Ma'lumot (uz)")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextarea, {
                                          rules: nameRule,
                                          "no-resize": "",
                                          flat: "",
                                          class: "border rounded",
                                          density: "compact",
                                          "bg-color": "surface",
                                          modelValue: unref(product).description_uz,
                                          "onUpdate:modelValue": ($event) => unref(product).description_uz = $event,
                                          placeholder: "Ma'lumot (uz)",
                                          "hide-details": "",
                                          color: "primary",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextarea, {
                                          rules: nameRule,
                                          "no-resize": "",
                                          flat: "",
                                          class: "border rounded",
                                          density: "compact",
                                          "bg-color": "surface",
                                          modelValue: unref(product).description_ru,
                                          "onUpdate:modelValue": ($event) => unref(product).description_ru = $event,
                                          placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)",
                                          "hide-details": "",
                                          color: "primary",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Description (en)")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextarea, {
                                          rules: nameRule,
                                          "no-resize": "",
                                          flat: "",
                                          class: "border rounded",
                                          density: "compact",
                                          "bg-color": "surface",
                                          modelValue: unref(product).description_en,
                                          "onUpdate:modelValue": ($event) => unref(product).description_en = $event,
                                          placeholder: "Description (en)",
                                          "hide-details": "",
                                          color: "primary",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(product).characteristics, (c, i) => {
                                      return openBlock(), createBlock(VCol, {
                                        cols: "12",
                                        class: "pa-2",
                                        key: i
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTable, {
                                            density: "compact",
                                            class: "border rounded pb-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("thead", null, [
                                                createVNode("tr", null, [
                                                  createVNode("td", { class: "px-2" }, toDisplayString(_ctx.$t("products.characteristics")), 1),
                                                  createVNode("td", { class: "px-2 d-flex align-center justify-space-between" }, [
                                                    createTextVNode(toDisplayString({ "uz": "Qiymat", "ru": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", "en": "Value" }[_ctx.$i18n.locale]) + " ", 1),
                                                    createVNode(VBtn, {
                                                      size: "20",
                                                      color: "red",
                                                      flat: "",
                                                      onClick: ($event) => removeValue(i, "characteristics")
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { icon: "mdi-delete" })
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"])
                                                  ])
                                                ])
                                              ]),
                                              createVNode("tbody", null, [
                                                createVNode("tr", null, [
                                                  createVNode("td", { class: "px-2" }, [
                                                    createVNode(VTextField, {
                                                      modelValue: c.title.uz,
                                                      "onUpdate:modelValue": ($event) => c.title.uz = $event,
                                                      rules: nameRule,
                                                      placeholder: "uz",
                                                      "hide-details": "",
                                                      density: "compact",
                                                      "bg-color": "surface",
                                                      color: "primary",
                                                      variant: "outlined",
                                                      flat: "",
                                                      class: "border rounded"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  createVNode("td", { class: "px-2" }, [
                                                    createVNode(VTextField, {
                                                      modelValue: c.value.uz,
                                                      "onUpdate:modelValue": ($event) => c.value.uz = $event,
                                                      rules: nameRule,
                                                      placeholder: "uz",
                                                      "hide-details": "",
                                                      density: "compact",
                                                      "bg-color": "surface",
                                                      color: "primary",
                                                      variant: "outlined",
                                                      flat: "",
                                                      class: "border rounded"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", { class: "px-2" }, [
                                                    createVNode(VTextField, {
                                                      modelValue: c.title.ru,
                                                      "onUpdate:modelValue": ($event) => c.title.ru = $event,
                                                      rules: nameRule,
                                                      placeholder: "ru",
                                                      "hide-details": "",
                                                      density: "compact",
                                                      "bg-color": "surface",
                                                      color: "primary",
                                                      variant: "outlined",
                                                      flat: "",
                                                      class: "border rounded"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  createVNode("td", { class: "px-2" }, [
                                                    createVNode(VTextField, {
                                                      modelValue: c.value.ru,
                                                      "onUpdate:modelValue": ($event) => c.value.ru = $event,
                                                      rules: nameRule,
                                                      placeholder: "ru",
                                                      "hide-details": "",
                                                      density: "compact",
                                                      "bg-color": "surface",
                                                      color: "primary",
                                                      variant: "outlined",
                                                      flat: "",
                                                      class: "border rounded"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", { class: "px-2" }, [
                                                    createVNode(VTextField, {
                                                      modelValue: c.title.en,
                                                      "onUpdate:modelValue": ($event) => c.title.en = $event,
                                                      rules: nameRule,
                                                      placeholder: "en",
                                                      "hide-details": "",
                                                      density: "compact",
                                                      "bg-color": "surface",
                                                      color: "primary",
                                                      variant: "outlined",
                                                      flat: "",
                                                      class: "border rounded"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  createVNode("td", { class: "px-2" }, [
                                                    createVNode(VTextField, {
                                                      modelValue: c.value.en,
                                                      "onUpdate:modelValue": ($event) => c.value.en = $event,
                                                      rules: nameRule,
                                                      placeholder: "en",
                                                      "hide-details": "",
                                                      density: "compact",
                                                      "bg-color": "surface",
                                                      color: "primary",
                                                      variant: "outlined",
                                                      flat: "",
                                                      class: "border rounded"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ])
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128)),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          onClick: addCharasteristic,
                                          block: "",
                                          color: "primary",
                                          class: "text-none",
                                          flat: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("admin.add_charac")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "px-4"
                                            }, {
                                              default: withCtx(() => [
                                                withDirectives((openBlock(), createBlock("label", {
                                                  for: "image-files",
                                                  class: "w-100 py-2 rounded bg-primary d-flex justify-center align-center"
                                                }, [
                                                  createTextVNode(toDisplayString(_ctx.$t("admin.add_image")), 1)
                                                ])), [
                                                  [Ripple]
                                                ]),
                                                withDirectives(createVNode(VFileInput, {
                                                  id: "image-files",
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  onChange: pushImages,
                                                  max: "10",
                                                  label: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
                                                  multiple: "",
                                                  counter: "",
                                                  "hide-details": "",
                                                  variant: "solo",
                                                  color: "primary",
                                                  "prepend-icon": ""
                                                }, null, 512), [
                                                  [vShow, false]
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image, n) => {
                                                      return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                            createVNode(VAvatar, {
                                                              rounded: "",
                                                              size: "80"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VImg, {
                                                                  cover: "",
                                                                  src: getBlobImage(image)
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                              createVNode("span", { class: "text-caption" }, toDisplayString(image.name.slice(0, 8)) + "...", 1),
                                                              createVNode(VBtn, {
                                                                size: "20",
                                                                color: "red",
                                                                flat: "",
                                                                onClick: ($event) => unref(images).splice(n, 1)
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    size: "small",
                                                                    icon: "mdi-delete"
                                                                  })
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["onClick"])
                                                            ])
                                                          ])
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
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSlideGroup, { "show-arrows": "" }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(product).images, (image, n) => {
                                              return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                    createVNode(VAvatar, {
                                                      rounded: "",
                                                      size: "80",
                                                      color: "grey-lighten-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VImg, {
                                                          cover: "",
                                                          src: image == null ? void 0 : image.thumbnail
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                      createVNode("span", null, toDisplayString(n), 1),
                                                      createVNode(VBtn, {
                                                        size: "20",
                                                        color: "red",
                                                        flat: "",
                                                        onClick: ($event) => removeValue(n, "images")
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            size: "small",
                                                            icon: "mdi-delete"
                                                          })
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"])
                                                    ])
                                                  ])
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
                                    createVNode(VCol, {
                                      cols: "4",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSwitch, {
                                          modelValue: unref(product).for_sale,
                                          "onUpdate:modelValue": ($event) => unref(product).for_sale = $event,
                                          "hide-details": "",
                                          density: "compact",
                                          color: "primary",
                                          inset: "",
                                          label: _ctx.$t("admin.show")
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "4",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          disabled: unref(save_loading),
                                          loading: unref(save_loading),
                                          color: "primary",
                                          flat: "",
                                          block: "",
                                          onClick: save,
                                          height: "45"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("admin.save")), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["disabled", "loading"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 512)
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
              createVNode(VRow, {
                justify: "space-between",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "9",
                    sm: "6",
                    md: "4",
                    class: "pb-0 pr-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        "bg-color": "surface",
                        "onUpdate:modelValue": unref(debounceSearch),
                        placeholder: _ctx.$t("admin.search"),
                        "append-inner-icon": "mdi-magnify",
                        "hide-details": "",
                        density: "compact",
                        variant: "solo",
                        flat: "",
                        class: "border rounded"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "3",
                    sm: "4",
                    md: "2",
                    class: "pb-0 d-flex justify-end"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        onClick: ($event) => dialog.value = true,
                        elevation: "2",
                        color: "primary",
                        size: "40",
                        width: "100%"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "mdi-plus" })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        flat: "",
                        border: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "px-4 pt-3" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("admin.products")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "px-0" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "responsive-datatable" }, [
                                createVNode(VDataTableServer, {
                                  search: unref(search),
                                  density: "comfortable",
                                  loading: unref(loading),
                                  hover: "",
                                  "items-length": unref(totalCount),
                                  headers: unref(localizedHeaders),
                                  "no-data-text": _ctx.$t("no_data"),
                                  "loading-text": _ctx.$t("loading") + "...",
                                  items: unref(items),
                                  "item-value": "id",
                                  "items-per-page": unref(perpage),
                                  "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                  "onUpdate:options": loadItems
                                }, {
                                  bottom: withCtx(() => []),
                                  "item.actions": withCtx(({ item, index, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, [
                                      createVNode("div", { class: "d-flex w-100 justify-space-end align-center" }, [
                                        createVNode(VBtn, {
                                          onClick: ($event) => editItem(index, item),
                                          color: "light-blue-accent-4",
                                          size: "30",
                                          flat: "",
                                          class: "mr-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-pencil" })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(VBtn, {
                                          onClick: ($event) => deleteItem(index, item.id),
                                          color: "red",
                                          size: "30",
                                          flat: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-delete" })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ], 8, ["data-label"])
                                  ]),
                                  "item.title": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, toDisplayString(item[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                  ]),
                                  "item.price": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, toDisplayString(item.price) + " $", 9, ["data-label"])
                                  ]),
                                  "item.category": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, [
                                      item.category.id ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        class: "text-caption",
                                        label: "",
                                        density: "compact",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.category[`name_${_ctx.$i18n.locale}`] || ""), 1)
                                        ]),
                                        _: 2
                                      }, 1024)) : createCommentVNode("", true)
                                    ], 8, ["data-label"])
                                  ]),
                                  "item.brand": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, toDisplayString(item.brand.name), 9, ["data-label"])
                                  ]),
                                  "item.model": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, toDisplayString(item.model), 9, ["data-label"])
                                  ]),
                                  "item.warranty": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, toDisplayString(item.warranty), 9, ["data-label"])
                                  ]),
                                  "item.year": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, toDisplayString(item.year), 9, ["data-label"])
                                  ]),
                                  "item.shipping_from": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, [
                                      createVNode(VListItem, {
                                        nav: "",
                                        density: "compact"
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VAvatar, {
                                            size: "30",
                                            class: "border",
                                            rounded: ""
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createVNode(VImg, {
                                                  cover: "",
                                                  src: (_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.flag
                                                }, null, 8, ["src"])
                                              ];
                                            }),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString((_a = unref(countries)[item.shipping_from]) == null ? void 0 : _a.name), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ], 8, ["data-label"])
                                  ]),
                                  "item.condition": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, [
                                      createVNode(VChip, {
                                        density: "compact",
                                        label: "",
                                        color: { "new": "green", "openbox": "blue", "refurbished": "amber", "used": "red" }[item.condition]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("condition." + item.condition)), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ], 8, ["data-label"])
                                  ]),
                                  "item.for_sale": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, [
                                      createVNode(VChip, {
                                        density: "compact",
                                        label: "",
                                        color: item.for_sale ? "green" : "red"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.for_sale), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ], 8, ["data-label"])
                                  ]),
                                  _: 1
                                }, 8, ["search", "loading", "items-length", "headers", "no-data-text", "loading-text", "items", "items-per-page", "onUpdate:itemsPerPage"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "5",
                    class: "pt-0 pb-1 d-flex align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        "bg-color": "surface",
                        modelValue: unref(perpage),
                        "onUpdate:modelValue": ($event) => isRef(perpage) ? perpage.value = $event : null,
                        transition: "fade-transition",
                        "hide-details": "",
                        density: "compact",
                        variant: "solo",
                        flat: "",
                        class: "border rounded",
                        items: [10, 25, 50, 100, 150]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextField, {
                        "bg-color": "surface",
                        "hide-details": "",
                        density: "compact",
                        variant: "solo",
                        flat: "",
                        class: "border rounded ml-3",
                        "model-value": unref(perpagetext),
                        readonly: ""
                      }, null, 8, ["model-value"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "7",
                    md: "4",
                    class: "pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VPagination, {
                        "bg-color": "surface",
                        modelValue: unref(page),
                        "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, loadItems],
                        length: Math.ceil(unref(totalCount) / unref(perpage)),
                        "active-color": "primary",
                        size: "40",
                        "total-visible": "3",
                        variant: "flat"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "length"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDialog, {
                persistent: "",
                modelValue: unref(dialog),
                "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
                width: "500",
                transition: "fade-transition"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    elevation: "1",
                    border: "",
                    color: "background"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "px-4 py-3 d-flex justify-space-between align-center" }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_product" : "admin.add_product")), 1),
                          createVNode(VBtn, {
                            flat: "",
                            onClick: ($event) => dialog.value = false,
                            size: "32",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "small",
                                icon: "mdi-close"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "px-4 py-4" }, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            class: "w-100 form-card",
                            ref_key: "form",
                            ref: form
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, { class: "pa-2" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Nomi (uz)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextField, {
                                        modelValue: unref(product).title_uz,
                                        "onUpdate:modelValue": ($event) => unref(product).title_uz = $event,
                                        rules: nameRule,
                                        placeholder: "Nomi (uz)",
                                        "hide-details": "",
                                        density: "compact",
                                        "bg-color": "surface",
                                        color: "primary",
                                        variant: "outlined",
                                        flat: "",
                                        class: "border rounded"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextField, {
                                        modelValue: unref(product).title_ru,
                                        "onUpdate:modelValue": ($event) => unref(product).title_ru = $event,
                                        rules: nameRule,
                                        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                        "hide-details": "",
                                        density: "compact",
                                        "bg-color": "surface",
                                        color: "primary",
                                        variant: "outlined",
                                        flat: "",
                                        class: "border rounded"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Title (en)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextField, {
                                        modelValue: unref(product).title_en,
                                        "onUpdate:modelValue": ($event) => unref(product).title_en = $event,
                                        rules: nameRule,
                                        placeholder: "Title (en)",
                                        "hide-details": "",
                                        density: "compact",
                                        "bg-color": "surface",
                                        color: "primary",
                                        variant: "outlined",
                                        flat: "",
                                        class: "border rounded"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.model")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextField, {
                                        modelValue: unref(product).model,
                                        "onUpdate:modelValue": ($event) => unref(product).model = $event,
                                        rules: nameRule,
                                        placeholder: _ctx.$t("products.model"),
                                        "hide-details": "",
                                        density: "compact",
                                        "bg-color": "surface",
                                        color: "primary",
                                        variant: "outlined",
                                        flat: "",
                                        class: "border rounded"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.price")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextField, {
                                        density: "compact",
                                        "bg-color": "surface",
                                        modelValue: unref(product).price,
                                        "onUpdate:modelValue": ($event) => unref(product).price = $event,
                                        rules: nameRule,
                                        flat: "",
                                        class: "border rounded",
                                        placeholder: _ctx.$t("products.price"),
                                        type: "number",
                                        "hide-details": "",
                                        variant: "outlined",
                                        color: "primary"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.condition")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VSelect, {
                                        rules: nameRule,
                                        flat: "",
                                        class: "border rounded",
                                        density: "compact",
                                        "bg-color": "surface",
                                        modelValue: unref(product).condition,
                                        "onUpdate:modelValue": ($event) => unref(product).condition = $event,
                                        items: unref(conditions),
                                        placeholder: _ctx.$t("products.condition"),
                                        "item-title": "title_" + _ctx.$i18n.locale,
                                        "hide-details": "",
                                        "item-value": "value",
                                        variant: "outlined",
                                        color: "primary"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.warranty")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextField, {
                                        density: "compact",
                                        "bg-color": "surface",
                                        modelValue: unref(product).warranty,
                                        "onUpdate:modelValue": ($event) => unref(product).warranty = $event,
                                        min: "0",
                                        flat: "",
                                        class: "border rounded",
                                        placeholder: _ctx.$t("products.warranty"),
                                        type: "number",
                                        "hide-details": "",
                                        variant: "outlined",
                                        color: "primary"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.year")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextField, {
                                        density: "compact",
                                        "bg-color": "surface",
                                        modelValue: unref(product).year,
                                        "onUpdate:modelValue": ($event) => unref(product).year = $event,
                                        rules: nameRule,
                                        min: "1000",
                                        flat: "",
                                        class: "border rounded",
                                        placeholder: _ctx.$t("products.year"),
                                        type: "number",
                                        "hide-details": "",
                                        variant: "outlined",
                                        color: "primary"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.category")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VSelect, {
                                        flat: "",
                                        class: "border rounded",
                                        density: "compact",
                                        "bg-color": "surface",
                                        modelValue: unref(product).category,
                                        "onUpdate:modelValue": ($event) => unref(product).category = $event,
                                        items: unref(categories),
                                        placeholder: _ctx.$t("products.category"),
                                        "item-title": `name_${_ctx.$i18n.locale}`,
                                        "hide-details": "",
                                        "item-value": "id",
                                        variant: "outlined",
                                        color: "primary"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder", "item-title"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.brand")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VSelect, {
                                        rules: nameRule,
                                        flat: "",
                                        class: "border rounded",
                                        density: "compact",
                                        "bg-color": "surface",
                                        modelValue: unref(product).brand,
                                        "onUpdate:modelValue": ($event) => unref(product).brand = $event,
                                        items: unref(brands),
                                        placeholder: _ctx.$t("products.brand"),
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
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.shipping")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VSelect, {
                                        "item-props": itemProps,
                                        flat: "",
                                        class: "border rounded",
                                        density: "compact",
                                        "bg-color": "surface",
                                        modelValue: unref(product).shipping_from,
                                        "onUpdate:modelValue": ($event) => unref(product).shipping_from = $event,
                                        items: unref(countries),
                                        placeholder: _ctx.$t("products.shipping"),
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
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("products.sales_area")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VAutocomplete, {
                                        "item-props": itemProps,
                                        flat: "",
                                        class: "border rounded",
                                        density: "compact",
                                        "bg-color": "surface",
                                        multiple: "",
                                        chips: "",
                                        modelValue: unref(product).sales_areas,
                                        "onUpdate:modelValue": ($event) => unref(product).sales_areas = $event,
                                        items: unref(countries),
                                        placeholder: _ctx.$t("products.sales_area"),
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
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Ma'lumot (uz)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextarea, {
                                        rules: nameRule,
                                        "no-resize": "",
                                        flat: "",
                                        class: "border rounded",
                                        density: "compact",
                                        "bg-color": "surface",
                                        modelValue: unref(product).description_uz,
                                        "onUpdate:modelValue": ($event) => unref(product).description_uz = $event,
                                        placeholder: "Ma'lumot (uz)",
                                        "hide-details": "",
                                        color: "primary",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextarea, {
                                        rules: nameRule,
                                        "no-resize": "",
                                        flat: "",
                                        class: "border rounded",
                                        density: "compact",
                                        "bg-color": "surface",
                                        modelValue: unref(product).description_ru,
                                        "onUpdate:modelValue": ($event) => unref(product).description_ru = $event,
                                        placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (ru)",
                                        "hide-details": "",
                                        color: "primary",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Description (en)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextarea, {
                                        rules: nameRule,
                                        "no-resize": "",
                                        flat: "",
                                        class: "border rounded",
                                        density: "compact",
                                        "bg-color": "surface",
                                        modelValue: unref(product).description_en,
                                        "onUpdate:modelValue": ($event) => unref(product).description_en = $event,
                                        placeholder: "Description (en)",
                                        "hide-details": "",
                                        color: "primary",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(product).characteristics, (c, i) => {
                                    return openBlock(), createBlock(VCol, {
                                      cols: "12",
                                      class: "pa-2",
                                      key: i
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTable, {
                                          density: "compact",
                                          class: "border rounded pb-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("thead", null, [
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "px-2" }, toDisplayString(_ctx.$t("products.characteristics")), 1),
                                                createVNode("td", { class: "px-2 d-flex align-center justify-space-between" }, [
                                                  createTextVNode(toDisplayString({ "uz": "Qiymat", "ru": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", "en": "Value" }[_ctx.$i18n.locale]) + " ", 1),
                                                  createVNode(VBtn, {
                                                    size: "20",
                                                    color: "red",
                                                    flat: "",
                                                    onClick: ($event) => removeValue(i, "characteristics")
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, { icon: "mdi-delete" })
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"])
                                                ])
                                              ])
                                            ]),
                                            createVNode("tbody", null, [
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "px-2" }, [
                                                  createVNode(VTextField, {
                                                    modelValue: c.title.uz,
                                                    "onUpdate:modelValue": ($event) => c.title.uz = $event,
                                                    rules: nameRule,
                                                    placeholder: "uz",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                createVNode("td", { class: "px-2" }, [
                                                  createVNode(VTextField, {
                                                    modelValue: c.value.uz,
                                                    "onUpdate:modelValue": ($event) => c.value.uz = $event,
                                                    rules: nameRule,
                                                    placeholder: "uz",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "px-2" }, [
                                                  createVNode(VTextField, {
                                                    modelValue: c.title.ru,
                                                    "onUpdate:modelValue": ($event) => c.title.ru = $event,
                                                    rules: nameRule,
                                                    placeholder: "ru",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                createVNode("td", { class: "px-2" }, [
                                                  createVNode(VTextField, {
                                                    modelValue: c.value.ru,
                                                    "onUpdate:modelValue": ($event) => c.value.ru = $event,
                                                    rules: nameRule,
                                                    placeholder: "ru",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "px-2" }, [
                                                  createVNode(VTextField, {
                                                    modelValue: c.title.en,
                                                    "onUpdate:modelValue": ($event) => c.title.en = $event,
                                                    rules: nameRule,
                                                    placeholder: "en",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                createVNode("td", { class: "px-2" }, [
                                                  createVNode(VTextField, {
                                                    modelValue: c.value.en,
                                                    "onUpdate:modelValue": ($event) => c.value.en = $event,
                                                    rules: nameRule,
                                                    placeholder: "en",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128)),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        onClick: addCharasteristic,
                                        block: "",
                                        color: "primary",
                                        class: "text-none",
                                        flat: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("admin.add_charac")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "px-4"
                                          }, {
                                            default: withCtx(() => [
                                              withDirectives((openBlock(), createBlock("label", {
                                                for: "image-files",
                                                class: "w-100 py-2 rounded bg-primary d-flex justify-center align-center"
                                              }, [
                                                createTextVNode(toDisplayString(_ctx.$t("admin.add_image")), 1)
                                              ])), [
                                                [Ripple]
                                              ]),
                                              withDirectives(createVNode(VFileInput, {
                                                id: "image-files",
                                                flat: "",
                                                class: "border rounded",
                                                density: "compact",
                                                "bg-color": "surface",
                                                onChange: pushImages,
                                                max: "10",
                                                label: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
                                                multiple: "",
                                                counter: "",
                                                "hide-details": "",
                                                variant: "solo",
                                                color: "primary",
                                                "prepend-icon": ""
                                              }, null, 512), [
                                                [vShow, false]
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSlideGroup, { "show-arrows": "" }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image, n) => {
                                                    return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                          createVNode(VAvatar, {
                                                            rounded: "",
                                                            size: "80"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VImg, {
                                                                cover: "",
                                                                src: getBlobImage(image)
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                            createVNode("span", { class: "text-caption" }, toDisplayString(image.name.slice(0, 8)) + "...", 1),
                                                            createVNode(VBtn, {
                                                              size: "20",
                                                              color: "red",
                                                              flat: "",
                                                              onClick: ($event) => unref(images).splice(n, 1)
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  size: "small",
                                                                  icon: "mdi-delete"
                                                                })
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["onClick"])
                                                          ])
                                                        ])
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
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSlideGroup, { "show-arrows": "" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(product).images, (image, n) => {
                                            return openBlock(), createBlock(VSlideGroupItem, { key: n }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex flex-column align-center mr-4 gap-1" }, [
                                                  createVNode(VAvatar, {
                                                    rounded: "",
                                                    size: "80",
                                                    color: "grey-lighten-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        cover: "",
                                                        src: image == null ? void 0 : image.thumbnail
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode("div", { class: "d-flex align-center justify-space-between w-100" }, [
                                                    createVNode("span", null, toDisplayString(n), 1),
                                                    createVNode(VBtn, {
                                                      size: "20",
                                                      color: "red",
                                                      flat: "",
                                                      onClick: ($event) => removeValue(n, "images")
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          size: "small",
                                                          icon: "mdi-delete"
                                                        })
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"])
                                                  ])
                                                ])
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
                                  createVNode(VCol, {
                                    cols: "4",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSwitch, {
                                        modelValue: unref(product).for_sale,
                                        "onUpdate:modelValue": ($event) => unref(product).for_sale = $event,
                                        "hide-details": "",
                                        density: "compact",
                                        color: "primary",
                                        inset: "",
                                        label: _ctx.$t("admin.show")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "4",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        disabled: unref(save_loading),
                                        loading: unref(save_loading),
                                        color: "primary",
                                        flat: "",
                                        block: "",
                                        onClick: save,
                                        height: "45"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("admin.save")), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["disabled", "loading"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
