import { defineComponent, ref, computed, watch, nextTick, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { u as useBrands } from './useBrands-KsJyQ7GL.mjs';
import { u as useI18n, V as VContainer, a as VRow, b as VCol, d as VTextField, e as VBtn, f as VIcon, g as VCard, h as VCardTitle, i as VCardText, j as VDataTable, k as VAvatar, l as VImg, m as VListItem, n as VListItemTitle, o as VSelect, p as VPagination, q as VDialog, r as VForm, s as VLabel, t as VFileInput } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import lodash from 'lodash';
import { c as countries } from './index-J2odrurN.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "brands",
  __ssrInlineRender: true,
  setup(__props) {
    const { createBrand, deleteBrand, getAllBrands, updateBrand } = useBrands();
    const { debounce } = lodash;
    const { t } = useI18n();
    const nameRule = [(v) => !!v || "asdf"];
    const page = ref(1);
    const perpage = ref(25);
    const totalCount = ref(0);
    const loading = ref(false);
    const image = ref(null);
    const search = ref("");
    const items = ref([]);
    const editedId = ref(null);
    const editedIndex = ref(-1);
    const dialog = ref(false);
    const save_loading = ref(false);
    const form = ref(null);
    const headers = [
      { title: "admin.photo", key: "photo", sortable: false },
      { title: "products.title", key: "name" },
      { title: "admin.actions", align: "end", key: "actions", sortable: false }
    ];
    const editedItem = ref({
      name: ""
      //   country: null,
    });
    const imageSrc = computed(() => {
      var _a;
      if (((_a = image.value) == null ? void 0 : _a.length) > 0)
        return URL.createObjectURL(image.value[0]);
      return "/images/nophoto.jpg";
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
    watch(dialog, (v) => v || close());
    const editItem = (item, index) => {
      editedIndex.value = index;
      editedId.value = item.id;
      editedItem.value = Object.assign({}, item);
      dialog.value = true;
    };
    const deleteItemConfirm = async (id, index) => {
      if (!confirm("Do you delete this item?"))
        return;
      await deleteBrand(id);
      items.value.splice(index, 1);
    };
    const close = () => {
      dialog.value = false;
      nextTick(() => {
        editedItem.value = Object.assign({}, {
          name: "",
          country: null,
          description_uz: "",
          description_ru: "",
          description_en: ""
        });
        image.value = null;
        editedId.value = null;
        editedIndex.value = -1;
      });
    };
    const save = async () => {
      var _a;
      const { valid } = await ((_a = form.value) == null ? void 0 : _a.validate());
      if (!valid)
        return;
      var form_data = new FormData();
      Object.keys(editedItem.value).map((key) => {
        form_data.append(key, editedItem.value[key]);
      });
      if (image.value)
        form_data.append("image", image.value[0]);
      try {
        save_loading.value = true;
        if (editedIndex.value > -1) {
          const data = await updateBrand(editedId.value, form_data);
          Object.assign(items.value[editedIndex.value], data);
        } else {
          const data = await createBrand(form_data);
          items.value.push(data);
        }
        close();
      } catch (error) {
        console.log(error);
      } finally {
        save_loading.value = false;
      }
    };
    const loadItems = async () => {
      loading.value = true;
      const data = await getAllBrands("");
      items.value = data.results;
      totalCount.value = data.results.length;
      loading.value = false;
    };
    loadItems();
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
                          flat: "",
                          density: "compact",
                          variant: "solo",
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
                            flat: "",
                            density: "compact",
                            variant: "solo",
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
                              _push5(ssrRenderComponent(VCardTitle, { class: "px-4 pt-3 font-weight-light" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("products.brands"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("products.brands")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "px-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="responsive-datatable"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VDataTable, {
                                      page: unref(page),
                                      "item-value": "id",
                                      search: unref(search),
                                      loading: unref(loading),
                                      hover: "",
                                      items: unref(items),
                                      "items-per-page": unref(perpage),
                                      "no-data-text": _ctx.$t("no_data"),
                                      "loading-text": _ctx.$t("loading") + "...",
                                      headers: unref(localizedHeaders),
                                      density: "comfortable"
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
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)} class="d-flex justify-space-between align-center"${_scopeId6}><span${_scopeId6}></span><div${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VBtn, {
                                            onClick: ($event) => editItem(item, index),
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
                                            onClick: ($event) => deleteItemConfirm(item.id, index),
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
                                              "data-label": column.title,
                                              class: "d-flex justify-space-between align-center"
                                            }, [
                                              createVNode("span"),
                                              createVNode("div", null, [
                                                createVNode(VBtn, {
                                                  onClick: ($event) => editItem(item, index),
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
                                                  onClick: ($event) => deleteItemConfirm(item.id, index),
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
                                      "item.photo": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VAvatar, {
                                            size: "40",
                                            rounded: ""
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VImg, {
                                                  src: item.thumbnail || "/images/nophoto.jpg",
                                                  cover: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VImg, {
                                                    src: item.thumbnail || "/images/nophoto.jpg",
                                                    cover: ""
                                                  }, null, 8, ["src"])
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
                                              createVNode(VAvatar, {
                                                size: "40",
                                                rounded: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: item.thumbnail || "/images/nophoto.jpg",
                                                    cover: ""
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ], 8, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.name": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate(item.name)}</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.name), 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.country": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VListItem, {
                                            nav: "",
                                            density: "compact"
                                          }, {
                                            prepend: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VAvatar, { size: "30" }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    var _a, _b;
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VImg, {
                                                        cover: "",
                                                        src: (_a = unref(countries)[item.country]) == null ? void 0 : _a.flag
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VImg, {
                                                          cover: "",
                                                          src: (_b = unref(countries)[item.country]) == null ? void 0 : _b.flag
                                                        }, null, 8, ["src"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VAvatar, { size: "30" }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createVNode(VImg, {
                                                          cover: "",
                                                          src: (_a = unref(countries)[item.country]) == null ? void 0 : _a.flag
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
                                                      _push9(`${ssrInterpolate((_a = unref(countries)[item.country]) == null ? void 0 : _a.name)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString((_b = unref(countries)[item.country]) == null ? void 0 : _b.name), 1)
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
                                                        createTextVNode(toDisplayString((_a = unref(countries)[item.country]) == null ? void 0 : _a.name), 1)
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
                                                  createVNode(VAvatar, { size: "30" }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createVNode(VImg, {
                                                          cover: "",
                                                          src: (_a = unref(countries)[item.country]) == null ? void 0 : _a.flag
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
                                                        createTextVNode(toDisplayString((_a = unref(countries)[item.country]) == null ? void 0 : _a.name), 1)
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
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "responsive-datatable" }, [
                                        createVNode(VDataTable, {
                                          page: unref(page),
                                          "item-value": "id",
                                          search: unref(search),
                                          loading: unref(loading),
                                          hover: "",
                                          items: unref(items),
                                          "items-per-page": unref(perpage),
                                          "no-data-text": _ctx.$t("no_data"),
                                          "loading-text": _ctx.$t("loading") + "...",
                                          headers: unref(localizedHeaders),
                                          density: "comfortable"
                                        }, {
                                          bottom: withCtx(() => []),
                                          "item.actions": withCtx(({ item, index, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title,
                                              class: "d-flex justify-space-between align-center"
                                            }, [
                                              createVNode("span"),
                                              createVNode("div", null, [
                                                createVNode(VBtn, {
                                                  onClick: ($event) => editItem(item, index),
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
                                                  onClick: ($event) => deleteItemConfirm(item.id, index),
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
                                          "item.photo": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              createVNode(VAvatar, {
                                                size: "40",
                                                rounded: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: item.thumbnail || "/images/nophoto.jpg",
                                                    cover: ""
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ], 8, ["data-label"])
                                          ]),
                                          "item.name": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.name), 9, ["data-label"])
                                          ]),
                                          "item.country": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              createVNode(VListItem, {
                                                nav: "",
                                                density: "compact"
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VAvatar, { size: "30" }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createVNode(VImg, {
                                                          cover: "",
                                                          src: (_a = unref(countries)[item.country]) == null ? void 0 : _a.flag
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
                                                        createTextVNode(toDisplayString((_a = unref(countries)[item.country]) == null ? void 0 : _a.name), 1)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ], 8, ["data-label"])
                                          ]),
                                          _: 1
                                        }, 8, ["page", "search", "loading", "items", "items-per-page", "no-data-text", "loading-text", "headers"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, { class: "px-4 pt-3 font-weight-light" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("products.brands")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "px-0" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "responsive-datatable" }, [
                                      createVNode(VDataTable, {
                                        page: unref(page),
                                        "item-value": "id",
                                        search: unref(search),
                                        loading: unref(loading),
                                        hover: "",
                                        items: unref(items),
                                        "items-per-page": unref(perpage),
                                        "no-data-text": _ctx.$t("no_data"),
                                        "loading-text": _ctx.$t("loading") + "...",
                                        headers: unref(localizedHeaders),
                                        density: "comfortable"
                                      }, {
                                        bottom: withCtx(() => []),
                                        "item.actions": withCtx(({ item, index, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title,
                                            class: "d-flex justify-space-between align-center"
                                          }, [
                                            createVNode("span"),
                                            createVNode("div", null, [
                                              createVNode(VBtn, {
                                                onClick: ($event) => editItem(item, index),
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
                                                onClick: ($event) => deleteItemConfirm(item.id, index),
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
                                        "item.photo": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, [
                                            createVNode(VAvatar, {
                                              size: "40",
                                              rounded: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: item.thumbnail || "/images/nophoto.jpg",
                                                  cover: ""
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ], 8, ["data-label"])
                                        ]),
                                        "item.name": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString(item.name), 9, ["data-label"])
                                        ]),
                                        "item.country": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, [
                                            createVNode(VListItem, {
                                              nav: "",
                                              density: "compact"
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VAvatar, { size: "30" }, {
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createVNode(VImg, {
                                                        cover: "",
                                                        src: (_a = unref(countries)[item.country]) == null ? void 0 : _a.flag
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
                                                      createTextVNode(toDisplayString((_a = unref(countries)[item.country]) == null ? void 0 : _a.name), 1)
                                                    ];
                                                  }),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ], 8, ["data-label"])
                                        ]),
                                        _: 1
                                      }, 8, ["page", "search", "loading", "items", "items-per-page", "no-data-text", "loading-text", "headers"])
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
                              createVNode(VCardTitle, { class: "px-4 pt-3 font-weight-light" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("products.brands")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "px-0" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "responsive-datatable" }, [
                                    createVNode(VDataTable, {
                                      page: unref(page),
                                      "item-value": "id",
                                      search: unref(search),
                                      loading: unref(loading),
                                      hover: "",
                                      items: unref(items),
                                      "items-per-page": unref(perpage),
                                      "no-data-text": _ctx.$t("no_data"),
                                      "loading-text": _ctx.$t("loading") + "...",
                                      headers: unref(localizedHeaders),
                                      density: "comfortable"
                                    }, {
                                      bottom: withCtx(() => []),
                                      "item.actions": withCtx(({ item, index, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title,
                                          class: "d-flex justify-space-between align-center"
                                        }, [
                                          createVNode("span"),
                                          createVNode("div", null, [
                                            createVNode(VBtn, {
                                              onClick: ($event) => editItem(item, index),
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
                                              onClick: ($event) => deleteItemConfirm(item.id, index),
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
                                      "item.photo": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, [
                                          createVNode(VAvatar, {
                                            size: "40",
                                            rounded: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: item.thumbnail || "/images/nophoto.jpg",
                                                cover: ""
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ], 8, ["data-label"])
                                      ]),
                                      "item.name": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString(item.name), 9, ["data-label"])
                                      ]),
                                      "item.country": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, [
                                          createVNode(VListItem, {
                                            nav: "",
                                            density: "compact"
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VAvatar, { size: "30" }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createVNode(VImg, {
                                                      cover: "",
                                                      src: (_a = unref(countries)[item.country]) == null ? void 0 : _a.flag
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
                                                    createTextVNode(toDisplayString((_a = unref(countries)[item.country]) == null ? void 0 : _a.name), 1)
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ], 8, ["data-label"])
                                      ]),
                                      _: 1
                                    }, 8, ["page", "search", "loading", "items", "items-per-page", "no-data-text", "loading-text", "headers"])
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
                    sm: "4",
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
                          flat: "",
                          density: "compact",
                          variant: "solo",
                          class: "border rounded",
                          items: [10, 25, 50, 100, 150]
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextField, {
                          "bg-color": "surface",
                          variant: "solo",
                          class: "border rounded ml-3",
                          "hide-details": "",
                          flat: "",
                          density: "compact",
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
                            flat: "",
                            density: "compact",
                            variant: "solo",
                            class: "border rounded",
                            items: [10, 25, 50, 100, 150]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            "bg-color": "surface",
                            variant: "solo",
                            class: "border rounded ml-3",
                            "hide-details": "",
                            flat: "",
                            density: "compact",
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
                    sm: "4",
                    md: "4",
                    class: "pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VPagination, {
                          "bg-color": "surface",
                          modelValue: unref(page),
                          "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, loadItems],
                          length: Math.floor(unref(totalCount) / unref(perpage)),
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
                            length: Math.floor(unref(totalCount) / unref(perpage)),
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
                          flat: "",
                          density: "compact",
                          variant: "solo",
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
                            createVNode(VCardTitle, { class: "px-4 pt-3 font-weight-light" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("products.brands")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "px-0" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "responsive-datatable" }, [
                                  createVNode(VDataTable, {
                                    page: unref(page),
                                    "item-value": "id",
                                    search: unref(search),
                                    loading: unref(loading),
                                    hover: "",
                                    items: unref(items),
                                    "items-per-page": unref(perpage),
                                    "no-data-text": _ctx.$t("no_data"),
                                    "loading-text": _ctx.$t("loading") + "...",
                                    headers: unref(localizedHeaders),
                                    density: "comfortable"
                                  }, {
                                    bottom: withCtx(() => []),
                                    "item.actions": withCtx(({ item, index, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title,
                                        class: "d-flex justify-space-between align-center"
                                      }, [
                                        createVNode("span"),
                                        createVNode("div", null, [
                                          createVNode(VBtn, {
                                            onClick: ($event) => editItem(item, index),
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
                                            onClick: ($event) => deleteItemConfirm(item.id, index),
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
                                    "item.photo": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, [
                                        createVNode(VAvatar, {
                                          size: "40",
                                          rounded: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: item.thumbnail || "/images/nophoto.jpg",
                                              cover: ""
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ], 8, ["data-label"])
                                    ]),
                                    "item.name": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString(item.name), 9, ["data-label"])
                                    ]),
                                    "item.country": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, [
                                        createVNode(VListItem, {
                                          nav: "",
                                          density: "compact"
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VAvatar, { size: "30" }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createVNode(VImg, {
                                                    cover: "",
                                                    src: (_a = unref(countries)[item.country]) == null ? void 0 : _a.flag
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
                                                  createTextVNode(toDisplayString((_a = unref(countries)[item.country]) == null ? void 0 : _a.name), 1)
                                                ];
                                              }),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ], 8, ["data-label"])
                                    ]),
                                    _: 1
                                  }, 8, ["page", "search", "loading", "items", "items-per-page", "no-data-text", "loading-text", "headers"])
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
                      sm: "4",
                      class: "pt-0 pb-1 d-flex align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          "bg-color": "surface",
                          modelValue: unref(perpage),
                          "onUpdate:modelValue": ($event) => isRef(perpage) ? perpage.value = $event : null,
                          transition: "fade-transition",
                          "hide-details": "",
                          flat: "",
                          density: "compact",
                          variant: "solo",
                          class: "border rounded",
                          items: [10, 25, 50, 100, 150]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextField, {
                          "bg-color": "surface",
                          variant: "solo",
                          class: "border rounded ml-3",
                          "hide-details": "",
                          flat: "",
                          density: "compact",
                          "model-value": unref(perpagetext),
                          readonly: ""
                        }, null, 8, ["model-value"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "4",
                      md: "4",
                      class: "pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VPagination, {
                          "bg-color": "surface",
                          modelValue: unref(page),
                          "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, loadItems],
                          length: Math.floor(unref(totalCount) / unref(perpage)),
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
              "max-width": "500px",
              transition: "fade-transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    flat: "",
                    border: "",
                    color: "background"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "px-4 py-3 d-flex justify-space-between align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="font-weight-light"${_scopeId4}>${ssrInterpolate(_ctx.$t(unref(editedId) ? "admin.edit_brands" : "admin.add_brands"))}</span>`);
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
                                createVNode("span", { class: "font-weight-light" }, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_brands" : "admin.add_brands")), 1),
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
                        _push4(ssrRenderComponent(VCardText, { class: "px-4 pt-2 pb-3" }, {
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
                                                      _push9(`${ssrInterpolate(_ctx.$t("products.title"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("products.title")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(editedItem).name,
                                                  "onUpdate:modelValue": ($event) => unref(editedItem).name = $event,
                                                  rules: nameRule,
                                                  placeholder: _ctx.$t("products.title"),
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  required: "",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("products.title")), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(editedItem).name,
                                                    "onUpdate:modelValue": ($event) => unref(editedItem).name = $event,
                                                    rules: nameRule,
                                                    placeholder: _ctx.$t("products.title"),
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    required: "",
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
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "4",
                                                        sm: "2",
                                                        class: "pr-0"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VAvatar, {
                                                              rounded: "",
                                                              size: "40"
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VImg, {
                                                                    cover: "",
                                                                    src: unref(imageSrc)
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VImg, {
                                                                      cover: "",
                                                                      src: unref(imageSrc)
                                                                    }, null, 8, ["src"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VAvatar, {
                                                                rounded: "",
                                                                size: "40"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VImg, {
                                                                    cover: "",
                                                                    src: unref(imageSrc)
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "8",
                                                        sm: "10",
                                                        class: "pl-0"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VFileInput, {
                                                              flat: "",
                                                              class: "border rounded",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              modelValue: unref(image),
                                                              "onUpdate:modelValue": ($event) => isRef(image) ? image.value = $event : null,
                                                              max: "10",
                                                              label: _ctx.$t("admin.photo"),
                                                              "hide-details": "",
                                                              variant: "solo",
                                                              color: "primary",
                                                              "prepend-icon": ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VFileInput, {
                                                                flat: "",
                                                                class: "border rounded",
                                                                density: "compact",
                                                                "bg-color": "surface",
                                                                modelValue: unref(image),
                                                                "onUpdate:modelValue": ($event) => isRef(image) ? image.value = $event : null,
                                                                max: "10",
                                                                label: _ctx.$t("admin.photo"),
                                                                "hide-details": "",
                                                                variant: "solo",
                                                                color: "primary",
                                                                "prepend-icon": ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, {
                                                          cols: "4",
                                                          sm: "2",
                                                          class: "pr-0"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VAvatar, {
                                                              rounded: "",
                                                              size: "40"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VImg, {
                                                                  cover: "",
                                                                  src: unref(imageSrc)
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "8",
                                                          sm: "10",
                                                          class: "pl-0"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VFileInput, {
                                                              flat: "",
                                                              class: "border rounded",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              modelValue: unref(image),
                                                              "onUpdate:modelValue": ($event) => isRef(image) ? image.value = $event : null,
                                                              max: "10",
                                                              label: _ctx.$t("admin.photo"),
                                                              "hide-details": "",
                                                              variant: "solo",
                                                              color: "primary",
                                                              "prepend-icon": ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
                                                        cols: "4",
                                                        sm: "2",
                                                        class: "pr-0"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VAvatar, {
                                                            rounded: "",
                                                            size: "40"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VImg, {
                                                                cover: "",
                                                                src: unref(imageSrc)
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "8",
                                                        sm: "10",
                                                        class: "pl-0"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VFileInput, {
                                                            flat: "",
                                                            class: "border rounded",
                                                            density: "compact",
                                                            "bg-color": "surface",
                                                            modelValue: unref(image),
                                                            "onUpdate:modelValue": ($event) => isRef(image) ? image.value = $event : null,
                                                            max: "10",
                                                            label: _ctx.$t("admin.photo"),
                                                            "hide-details": "",
                                                            variant: "solo",
                                                            color: "primary",
                                                            "prepend-icon": ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, {
                                                  disabled: unref(save_loading),
                                                  loading: unref(save_loading),
                                                  color: "primary",
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
                                                    createTextVNode(toDisplayString(_ctx.$t("products.title")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VTextField, {
                                                  modelValue: unref(editedItem).name,
                                                  "onUpdate:modelValue": ($event) => unref(editedItem).name = $event,
                                                  rules: nameRule,
                                                  placeholder: _ctx.$t("products.title"),
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  required: "",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
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
                                                      cols: "4",
                                                      sm: "2",
                                                      class: "pr-0"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VAvatar, {
                                                          rounded: "",
                                                          size: "40"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VImg, {
                                                              cover: "",
                                                              src: unref(imageSrc)
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "8",
                                                      sm: "10",
                                                      class: "pl-0"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VFileInput, {
                                                          flat: "",
                                                          class: "border rounded",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          modelValue: unref(image),
                                                          "onUpdate:modelValue": ($event) => isRef(image) ? image.value = $event : null,
                                                          max: "10",
                                                          label: _ctx.$t("admin.photo"),
                                                          "hide-details": "",
                                                          variant: "solo",
                                                          color: "primary",
                                                          "prepend-icon": ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  disabled: unref(save_loading),
                                                  loading: unref(save_loading),
                                                  color: "primary",
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
                                                  createTextVNode(toDisplayString(_ctx.$t("products.title")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VTextField, {
                                                modelValue: unref(editedItem).name,
                                                "onUpdate:modelValue": ($event) => unref(editedItem).name = $event,
                                                rules: nameRule,
                                                placeholder: _ctx.$t("products.title"),
                                                "hide-details": "",
                                                density: "compact",
                                                "bg-color": "surface",
                                                color: "primary",
                                                variant: "outlined",
                                                required: "",
                                                flat: "",
                                                class: "border rounded"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
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
                                                    cols: "4",
                                                    sm: "2",
                                                    class: "pr-0"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VAvatar, {
                                                        rounded: "",
                                                        size: "40"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VImg, {
                                                            cover: "",
                                                            src: unref(imageSrc)
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "8",
                                                    sm: "10",
                                                    class: "pl-0"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VFileInput, {
                                                        flat: "",
                                                        class: "border rounded",
                                                        density: "compact",
                                                        "bg-color": "surface",
                                                        modelValue: unref(image),
                                                        "onUpdate:modelValue": ($event) => isRef(image) ? image.value = $event : null,
                                                        max: "10",
                                                        label: _ctx.$t("admin.photo"),
                                                        "hide-details": "",
                                                        variant: "solo",
                                                        color: "primary",
                                                        "prepend-icon": ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                disabled: unref(save_loading),
                                                loading: unref(save_loading),
                                                color: "primary",
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
                                                createTextVNode(toDisplayString(_ctx.$t("products.title")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VTextField, {
                                              modelValue: unref(editedItem).name,
                                              "onUpdate:modelValue": ($event) => unref(editedItem).name = $event,
                                              rules: nameRule,
                                              placeholder: _ctx.$t("products.title"),
                                              "hide-details": "",
                                              density: "compact",
                                              "bg-color": "surface",
                                              color: "primary",
                                              variant: "outlined",
                                              required: "",
                                              flat: "",
                                              class: "border rounded"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
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
                                                  cols: "4",
                                                  sm: "2",
                                                  class: "pr-0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VAvatar, {
                                                      rounded: "",
                                                      size: "40"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VImg, {
                                                          cover: "",
                                                          src: unref(imageSrc)
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "8",
                                                  sm: "10",
                                                  class: "pl-0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VFileInput, {
                                                      flat: "",
                                                      class: "border rounded",
                                                      density: "compact",
                                                      "bg-color": "surface",
                                                      modelValue: unref(image),
                                                      "onUpdate:modelValue": ($event) => isRef(image) ? image.value = $event : null,
                                                      max: "10",
                                                      label: _ctx.$t("admin.photo"),
                                                      "hide-details": "",
                                                      variant: "solo",
                                                      color: "primary",
                                                      "prepend-icon": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              disabled: unref(save_loading),
                                              loading: unref(save_loading),
                                              color: "primary",
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
                              createVNode("span", { class: "font-weight-light" }, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_brands" : "admin.add_brands")), 1),
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
                          createVNode(VCardText, { class: "px-4 pt-2 pb-3" }, {
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
                                              createTextVNode(toDisplayString(_ctx.$t("products.title")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VTextField, {
                                            modelValue: unref(editedItem).name,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).name = $event,
                                            rules: nameRule,
                                            placeholder: _ctx.$t("products.title"),
                                            "hide-details": "",
                                            density: "compact",
                                            "bg-color": "surface",
                                            color: "primary",
                                            variant: "outlined",
                                            required: "",
                                            flat: "",
                                            class: "border rounded"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
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
                                                cols: "4",
                                                sm: "2",
                                                class: "pr-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VAvatar, {
                                                    rounded: "",
                                                    size: "40"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        cover: "",
                                                        src: unref(imageSrc)
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "8",
                                                sm: "10",
                                                class: "pl-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VFileInput, {
                                                    flat: "",
                                                    class: "border rounded",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    modelValue: unref(image),
                                                    "onUpdate:modelValue": ($event) => isRef(image) ? image.value = $event : null,
                                                    max: "10",
                                                    label: _ctx.$t("admin.photo"),
                                                    "hide-details": "",
                                                    variant: "solo",
                                                    color: "primary",
                                                    "prepend-icon": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            disabled: unref(save_loading),
                                            loading: unref(save_loading),
                                            color: "primary",
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
                      flat: "",
                      border: "",
                      color: "background"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "px-4 py-3 d-flex justify-space-between align-center" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "font-weight-light" }, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_brands" : "admin.add_brands")), 1),
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
                        createVNode(VCardText, { class: "px-4 pt-2 pb-3" }, {
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
                                            createTextVNode(toDisplayString(_ctx.$t("products.title")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTextField, {
                                          modelValue: unref(editedItem).name,
                                          "onUpdate:modelValue": ($event) => unref(editedItem).name = $event,
                                          rules: nameRule,
                                          placeholder: _ctx.$t("products.title"),
                                          "hide-details": "",
                                          density: "compact",
                                          "bg-color": "surface",
                                          color: "primary",
                                          variant: "outlined",
                                          required: "",
                                          flat: "",
                                          class: "border rounded"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
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
                                              cols: "4",
                                              sm: "2",
                                              class: "pr-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VAvatar, {
                                                  rounded: "",
                                                  size: "40"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      cover: "",
                                                      src: unref(imageSrc)
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "8",
                                              sm: "10",
                                              class: "pl-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VFileInput, {
                                                  flat: "",
                                                  class: "border rounded",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  modelValue: unref(image),
                                                  "onUpdate:modelValue": ($event) => isRef(image) ? image.value = $event : null,
                                                  max: "10",
                                                  label: _ctx.$t("admin.photo"),
                                                  "hide-details": "",
                                                  variant: "solo",
                                                  color: "primary",
                                                  "prepend-icon": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          disabled: unref(save_loading),
                                          loading: unref(save_loading),
                                          color: "primary",
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
                        flat: "",
                        density: "compact",
                        variant: "solo",
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
                          createVNode(VCardTitle, { class: "px-4 pt-3 font-weight-light" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("products.brands")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "px-0" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "responsive-datatable" }, [
                                createVNode(VDataTable, {
                                  page: unref(page),
                                  "item-value": "id",
                                  search: unref(search),
                                  loading: unref(loading),
                                  hover: "",
                                  items: unref(items),
                                  "items-per-page": unref(perpage),
                                  "no-data-text": _ctx.$t("no_data"),
                                  "loading-text": _ctx.$t("loading") + "...",
                                  headers: unref(localizedHeaders),
                                  density: "comfortable"
                                }, {
                                  bottom: withCtx(() => []),
                                  "item.actions": withCtx(({ item, index, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title,
                                      class: "d-flex justify-space-between align-center"
                                    }, [
                                      createVNode("span"),
                                      createVNode("div", null, [
                                        createVNode(VBtn, {
                                          onClick: ($event) => editItem(item, index),
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
                                          onClick: ($event) => deleteItemConfirm(item.id, index),
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
                                  "item.photo": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, [
                                      createVNode(VAvatar, {
                                        size: "40",
                                        rounded: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: item.thumbnail || "/images/nophoto.jpg",
                                            cover: ""
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ], 8, ["data-label"])
                                  ]),
                                  "item.name": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, toDisplayString(item.name), 9, ["data-label"])
                                  ]),
                                  "item.country": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, [
                                      createVNode(VListItem, {
                                        nav: "",
                                        density: "compact"
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VAvatar, { size: "30" }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createVNode(VImg, {
                                                  cover: "",
                                                  src: (_a = unref(countries)[item.country]) == null ? void 0 : _a.flag
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
                                                createTextVNode(toDisplayString((_a = unref(countries)[item.country]) == null ? void 0 : _a.name), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ], 8, ["data-label"])
                                  ]),
                                  _: 1
                                }, 8, ["page", "search", "loading", "items", "items-per-page", "no-data-text", "loading-text", "headers"])
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
                    sm: "4",
                    class: "pt-0 pb-1 d-flex align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        "bg-color": "surface",
                        modelValue: unref(perpage),
                        "onUpdate:modelValue": ($event) => isRef(perpage) ? perpage.value = $event : null,
                        transition: "fade-transition",
                        "hide-details": "",
                        flat: "",
                        density: "compact",
                        variant: "solo",
                        class: "border rounded",
                        items: [10, 25, 50, 100, 150]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextField, {
                        "bg-color": "surface",
                        variant: "solo",
                        class: "border rounded ml-3",
                        "hide-details": "",
                        flat: "",
                        density: "compact",
                        "model-value": unref(perpagetext),
                        readonly: ""
                      }, null, 8, ["model-value"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "4",
                    md: "4",
                    class: "pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VPagination, {
                        "bg-color": "surface",
                        modelValue: unref(page),
                        "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, loadItems],
                        length: Math.floor(unref(totalCount) / unref(perpage)),
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
                "max-width": "500px",
                transition: "fade-transition"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    flat: "",
                    border: "",
                    color: "background"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "px-4 py-3 d-flex justify-space-between align-center" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "font-weight-light" }, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_brands" : "admin.add_brands")), 1),
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
                      createVNode(VCardText, { class: "px-4 pt-2 pb-3" }, {
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
                                          createTextVNode(toDisplayString(_ctx.$t("products.title")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTextField, {
                                        modelValue: unref(editedItem).name,
                                        "onUpdate:modelValue": ($event) => unref(editedItem).name = $event,
                                        rules: nameRule,
                                        placeholder: _ctx.$t("products.title"),
                                        "hide-details": "",
                                        density: "compact",
                                        "bg-color": "surface",
                                        color: "primary",
                                        variant: "outlined",
                                        required: "",
                                        flat: "",
                                        class: "border rounded"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
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
                                            cols: "4",
                                            sm: "2",
                                            class: "pr-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VAvatar, {
                                                rounded: "",
                                                size: "40"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    cover: "",
                                                    src: unref(imageSrc)
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "8",
                                            sm: "10",
                                            class: "pl-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VFileInput, {
                                                flat: "",
                                                class: "border rounded",
                                                density: "compact",
                                                "bg-color": "surface",
                                                modelValue: unref(image),
                                                "onUpdate:modelValue": ($event) => isRef(image) ? image.value = $event : null,
                                                max: "10",
                                                label: _ctx.$t("admin.photo"),
                                                "hide-details": "",
                                                variant: "solo",
                                                color: "primary",
                                                "prepend-icon": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        disabled: unref(save_loading),
                                        loading: unref(save_loading),
                                        color: "primary",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/brands.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
