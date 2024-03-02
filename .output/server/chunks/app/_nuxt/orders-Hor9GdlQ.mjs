import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { u as useOrders } from './useOrders-UsK5sm1c.mjs';
import { u as useI18n, V as VContainer, a as VRow, b as VCol, d as VTextField, g as VCard, h as VCardTitle, i as VCardText, v as VDataTableServer, w as VChip, f as VIcon, o as VSelect, p as VPagination } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
    const { checkOrder, getOrders } = useOrders();
    const { debounce } = lodash;
    const { t } = useI18n();
    const search = ref("");
    const items = ref([]);
    const page = ref(1);
    const perpage = ref(25);
    const totalCount = ref(0);
    const loading = ref(false);
    const headers = [
      { title: "products.first_name", key: "name", sortable: false },
      { title: "admin.product", key: "product", sortable: false },
      { title: "products.phone", key: "phone", sortable: false },
      { title: "admin.order_message", key: "message", sortable: false },
      { title: "admin.date", key: "date", sortable: false },
      { title: "admin.status", key: "status", sortable: false }
    ];
    const qs = computed(() => {
      const params = new URLSearchParams();
      if (page.value)
        params.append("page", String(page.value));
      if (perpage.value)
        params.append("limit", String(perpage.value));
      if (search.value.trim())
        params.append("search", search.value);
      return params.toString();
    });
    const localizedHeaders = computed(() => {
      return headers.map((h) => ({ ...h, title: t(h.title) }));
    });
    const perpagetext = computed(() => {
      const page_1 = (page.value - 1) * perpage.value;
      return `${page_1 + 1}-${page_1 + items.value.length} / ${totalCount.value}`;
    });
    const debounceSearch = debounce((e) => {
      search.value = e;
      page.value = 1;
    }, 500);
    const check = async (id, i) => {
      const data = await checkOrder(id, {
        country: items.value[i].country,
        first_name: items.value[i].first_name,
        last_name: items.value[i].last_name,
        message: items.value[i].message,
        phone: items.value[i].phone,
        checked: true,
        product: items.value[i].product.id
      });
      if (!data)
        return;
      items.value[i].checked = true;
      alert("Successfully checked order");
    };
    const loadItems = async () => {
      loading.value = true;
      const data = await getOrders(qs.value);
      items.value = data.results;
      totalCount.value = data.count;
      loading.value = false;
    };
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
                    cols: "12",
                    sm: "6",
                    md: "4",
                    class: "pb-0"
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
                                    _push6(`${ssrInterpolate(_ctx.$t("admin.orders"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("admin.orders")), 1)
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
                                      "items-per-page": unref(perpage),
                                      "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                      search: unref(search),
                                      "items-length": unref(totalCount),
                                      loading: unref(loading),
                                      "loading-text": _ctx.$t("loading") + "...",
                                      "no-data-text": _ctx.$t("no_data"),
                                      hover: "",
                                      items: unref(items),
                                      "item-value": "id",
                                      "onUpdate:options": loadItems,
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
                                      "item.name": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate(item.first_name)} ${ssrInterpolate(item.last_name)}</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.first_name) + " " + toDisplayString(item.last_name), 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.message": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate(item.message)}</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.message), 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.product": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        var _a, _b;
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate((_a = item.product) == null ? void 0 : _a[`title_${_ctx.$i18n.locale}`])}</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString((_b = item.product) == null ? void 0 : _b[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.phone": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate(item.phone)}</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.phone), 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.date": withCtx(({ item, column }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>${ssrInterpolate(new Date(item.created_at).toLocaleString())}</td>`);
                                        } else {
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(new Date(item.created_at).toLocaleString()), 9, ["data-label"])
                                          ];
                                        }
                                      }),
                                      "item.status": withCtx(({ item, column, index }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<td${ssrRenderAttr("data-label", column.title)}${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VChip, {
                                            variant: "flat",
                                            disabled: item.checked,
                                            color: item.checked ? "green" : "red",
                                            onClick: ($event) => check(item.id, index)
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-check${ssrInterpolate(item.checked ? "-all" : "")}`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-check" + toDisplayString(item.checked ? "-all" : ""), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VIcon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-check" + toDisplayString(item.checked ? "-all" : ""), 1)
                                                    ]),
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
                                              createVNode(VChip, {
                                                variant: "flat",
                                                disabled: item.checked,
                                                color: item.checked ? "green" : "red",
                                                onClick: ($event) => check(item.id, index)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-check" + toDisplayString(item.checked ? "-all" : ""), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["disabled", "color", "onClick"])
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
                                          "items-per-page": unref(perpage),
                                          "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                          search: unref(search),
                                          "items-length": unref(totalCount),
                                          loading: unref(loading),
                                          "loading-text": _ctx.$t("loading") + "...",
                                          "no-data-text": _ctx.$t("no_data"),
                                          hover: "",
                                          items: unref(items),
                                          "item-value": "id",
                                          "onUpdate:options": loadItems,
                                          headers: unref(localizedHeaders),
                                          density: "comfortable"
                                        }, {
                                          bottom: withCtx(() => []),
                                          "item.name": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.first_name) + " " + toDisplayString(item.last_name), 9, ["data-label"])
                                          ]),
                                          "item.message": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.message), 9, ["data-label"])
                                          ]),
                                          "item.product": withCtx(({ item, column }) => {
                                            var _a;
                                            return [
                                              createVNode("td", {
                                                "data-label": column.title
                                              }, toDisplayString((_a = item.product) == null ? void 0 : _a[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                            ];
                                          }),
                                          "item.phone": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(item.phone), 9, ["data-label"])
                                          ]),
                                          "item.date": withCtx(({ item, column }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString(new Date(item.created_at).toLocaleString()), 9, ["data-label"])
                                          ]),
                                          "item.status": withCtx(({ item, column, index }) => [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, [
                                              createVNode(VChip, {
                                                variant: "flat",
                                                disabled: item.checked,
                                                color: item.checked ? "green" : "red",
                                                onClick: ($event) => check(item.id, index)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-check" + toDisplayString(item.checked ? "-all" : ""), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["disabled", "color", "onClick"])
                                            ], 8, ["data-label"])
                                          ]),
                                          _: 2
                                        }, 1032, ["items-per-page", "onUpdate:itemsPerPage", "search", "items-length", "loading", "loading-text", "no-data-text", "items", "headers"])
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
                                    createTextVNode(toDisplayString(_ctx.$t("admin.orders")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "px-0" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "responsive-datatable" }, [
                                      createVNode(VDataTableServer, {
                                        "items-per-page": unref(perpage),
                                        "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                        search: unref(search),
                                        "items-length": unref(totalCount),
                                        loading: unref(loading),
                                        "loading-text": _ctx.$t("loading") + "...",
                                        "no-data-text": _ctx.$t("no_data"),
                                        hover: "",
                                        items: unref(items),
                                        "item-value": "id",
                                        "onUpdate:options": loadItems,
                                        headers: unref(localizedHeaders),
                                        density: "comfortable"
                                      }, {
                                        bottom: withCtx(() => []),
                                        "item.name": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString(item.first_name) + " " + toDisplayString(item.last_name), 9, ["data-label"])
                                        ]),
                                        "item.message": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString(item.message), 9, ["data-label"])
                                        ]),
                                        "item.product": withCtx(({ item, column }) => {
                                          var _a;
                                          return [
                                            createVNode("td", {
                                              "data-label": column.title
                                            }, toDisplayString((_a = item.product) == null ? void 0 : _a[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                          ];
                                        }),
                                        "item.phone": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString(item.phone), 9, ["data-label"])
                                        ]),
                                        "item.date": withCtx(({ item, column }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString(new Date(item.created_at).toLocaleString()), 9, ["data-label"])
                                        ]),
                                        "item.status": withCtx(({ item, column, index }) => [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, [
                                            createVNode(VChip, {
                                              variant: "flat",
                                              disabled: item.checked,
                                              color: item.checked ? "green" : "red",
                                              onClick: ($event) => check(item.id, index)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-check" + toDisplayString(item.checked ? "-all" : ""), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["disabled", "color", "onClick"])
                                          ], 8, ["data-label"])
                                        ]),
                                        _: 2
                                      }, 1032, ["items-per-page", "onUpdate:itemsPerPage", "search", "items-length", "loading", "loading-text", "no-data-text", "items", "headers"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
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
                                  createTextVNode(toDisplayString(_ctx.$t("admin.orders")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "px-0" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "responsive-datatable" }, [
                                    createVNode(VDataTableServer, {
                                      "items-per-page": unref(perpage),
                                      "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                      search: unref(search),
                                      "items-length": unref(totalCount),
                                      loading: unref(loading),
                                      "loading-text": _ctx.$t("loading") + "...",
                                      "no-data-text": _ctx.$t("no_data"),
                                      hover: "",
                                      items: unref(items),
                                      "item-value": "id",
                                      "onUpdate:options": loadItems,
                                      headers: unref(localizedHeaders),
                                      density: "comfortable"
                                    }, {
                                      bottom: withCtx(() => []),
                                      "item.name": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString(item.first_name) + " " + toDisplayString(item.last_name), 9, ["data-label"])
                                      ]),
                                      "item.message": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString(item.message), 9, ["data-label"])
                                      ]),
                                      "item.product": withCtx(({ item, column }) => {
                                        var _a;
                                        return [
                                          createVNode("td", {
                                            "data-label": column.title
                                          }, toDisplayString((_a = item.product) == null ? void 0 : _a[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                        ];
                                      }),
                                      "item.phone": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString(item.phone), 9, ["data-label"])
                                      ]),
                                      "item.date": withCtx(({ item, column }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString(new Date(item.created_at).toLocaleString()), 9, ["data-label"])
                                      ]),
                                      "item.status": withCtx(({ item, column, index }) => [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, [
                                          createVNode(VChip, {
                                            variant: "flat",
                                            disabled: item.checked,
                                            color: item.checked ? "green" : "red",
                                            onClick: ($event) => check(item.id, index)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-check" + toDisplayString(item.checked ? "-all" : ""), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["disabled", "color", "onClick"])
                                        ], 8, ["data-label"])
                                      ]),
                                      _: 2
                                    }, 1032, ["items-per-page", "onUpdate:itemsPerPage", "search", "items-length", "loading", "loading-text", "no-data-text", "items", "headers"])
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
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
                          flat: "",
                          density: "compact",
                          variant: "solo",
                          class: "border rounded",
                          items: [10, 25, 50, 100, 150]
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextField, {
                          "bg-color": "surface",
                          "hide-details": "",
                          flat: "",
                          density: "compact",
                          variant: "solo",
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
                            flat: "",
                            density: "compact",
                            variant: "solo",
                            class: "border rounded",
                            items: [10, 25, 50, 100, 150]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            "bg-color": "surface",
                            "hide-details": "",
                            flat: "",
                            density: "compact",
                            variant: "solo",
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
                      cols: "12",
                      sm: "6",
                      md: "4",
                      class: "pb-0"
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          flat: "",
                          border: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "px-4 pt-3 font-weight-light" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("admin.orders")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "px-0" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "responsive-datatable" }, [
                                  createVNode(VDataTableServer, {
                                    "items-per-page": unref(perpage),
                                    "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                    search: unref(search),
                                    "items-length": unref(totalCount),
                                    loading: unref(loading),
                                    "loading-text": _ctx.$t("loading") + "...",
                                    "no-data-text": _ctx.$t("no_data"),
                                    hover: "",
                                    items: unref(items),
                                    "item-value": "id",
                                    "onUpdate:options": loadItems,
                                    headers: unref(localizedHeaders),
                                    density: "comfortable"
                                  }, {
                                    bottom: withCtx(() => []),
                                    "item.name": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString(item.first_name) + " " + toDisplayString(item.last_name), 9, ["data-label"])
                                    ]),
                                    "item.message": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString(item.message), 9, ["data-label"])
                                    ]),
                                    "item.product": withCtx(({ item, column }) => {
                                      var _a;
                                      return [
                                        createVNode("td", {
                                          "data-label": column.title
                                        }, toDisplayString((_a = item.product) == null ? void 0 : _a[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                      ];
                                    }),
                                    "item.phone": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString(item.phone), 9, ["data-label"])
                                    ]),
                                    "item.date": withCtx(({ item, column }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString(new Date(item.created_at).toLocaleString()), 9, ["data-label"])
                                    ]),
                                    "item.status": withCtx(({ item, column, index }) => [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, [
                                        createVNode(VChip, {
                                          variant: "flat",
                                          disabled: item.checked,
                                          color: item.checked ? "green" : "red",
                                          onClick: ($event) => check(item.id, index)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check" + toDisplayString(item.checked ? "-all" : ""), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["disabled", "color", "onClick"])
                                      ], 8, ["data-label"])
                                    ]),
                                    _: 2
                                  }, 1032, ["items-per-page", "onUpdate:itemsPerPage", "search", "items-length", "loading", "loading-text", "no-data-text", "items", "headers"])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
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
                          flat: "",
                          density: "compact",
                          variant: "solo",
                          class: "border rounded",
                          items: [10, 25, 50, 100, 150]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextField, {
                          "bg-color": "surface",
                          "hide-details": "",
                          flat: "",
                          density: "compact",
                          variant: "solo",
                          class: "border rounded ml-3",
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
          } else {
            return [
              createVNode(VRow, {
                justify: "space-between",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6",
                    md: "4",
                    class: "pb-0"
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        flat: "",
                        border: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "px-4 pt-3 font-weight-light" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("admin.orders")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "px-0" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "responsive-datatable" }, [
                                createVNode(VDataTableServer, {
                                  "items-per-page": unref(perpage),
                                  "onUpdate:itemsPerPage": ($event) => isRef(perpage) ? perpage.value = $event : null,
                                  search: unref(search),
                                  "items-length": unref(totalCount),
                                  loading: unref(loading),
                                  "loading-text": _ctx.$t("loading") + "...",
                                  "no-data-text": _ctx.$t("no_data"),
                                  hover: "",
                                  items: unref(items),
                                  "item-value": "id",
                                  "onUpdate:options": loadItems,
                                  headers: unref(localizedHeaders),
                                  density: "comfortable"
                                }, {
                                  bottom: withCtx(() => []),
                                  "item.name": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, toDisplayString(item.first_name) + " " + toDisplayString(item.last_name), 9, ["data-label"])
                                  ]),
                                  "item.message": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, toDisplayString(item.message), 9, ["data-label"])
                                  ]),
                                  "item.product": withCtx(({ item, column }) => {
                                    var _a;
                                    return [
                                      createVNode("td", {
                                        "data-label": column.title
                                      }, toDisplayString((_a = item.product) == null ? void 0 : _a[`title_${_ctx.$i18n.locale}`]), 9, ["data-label"])
                                    ];
                                  }),
                                  "item.phone": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, toDisplayString(item.phone), 9, ["data-label"])
                                  ]),
                                  "item.date": withCtx(({ item, column }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, toDisplayString(new Date(item.created_at).toLocaleString()), 9, ["data-label"])
                                  ]),
                                  "item.status": withCtx(({ item, column, index }) => [
                                    createVNode("td", {
                                      "data-label": column.title
                                    }, [
                                      createVNode(VChip, {
                                        variant: "flat",
                                        disabled: item.checked,
                                        color: item.checked ? "green" : "red",
                                        onClick: ($event) => check(item.id, index)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check" + toDisplayString(item.checked ? "-all" : ""), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "color", "onClick"])
                                    ], 8, ["data-label"])
                                  ]),
                                  _: 2
                                }, 1032, ["items-per-page", "onUpdate:itemsPerPage", "search", "items-length", "loading", "loading-text", "no-data-text", "items", "headers"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
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
                        flat: "",
                        density: "compact",
                        variant: "solo",
                        class: "border rounded",
                        items: [10, 25, 50, 100, 150]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextField, {
                        "bg-color": "surface",
                        "hide-details": "",
                        flat: "",
                        density: "compact",
                        variant: "solo",
                        class: "border rounded ml-3",
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
                _: 2
              }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
