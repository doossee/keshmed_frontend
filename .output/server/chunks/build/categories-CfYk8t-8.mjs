import { useSSRContext, defineComponent, ref, watch, nextTick, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, withDirectives, vShow, isRef, toRefs } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { V as VContainer, a as VRow, b as VCol, d as VBtn, e as VIcon, f as VCard, g as VCardTitle, h as VCardText, p as VDialog, q as VForm, r as VLabel, c as VTextField, n as VSelect } from './server.mjs';
import { u as useCategories } from './useCategories-DHwYENQn.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "tree",
  __ssrInlineRender: true,
  props: {
    items: {},
    locale: {}
  },
  emits: ["addItem", "editItem", "deleteItem"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { items, locale } = toRefs(props);
    const level1 = ref(0);
    const level2 = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(items), (item, j) => {
        var _a, _b;
        _push(`<div><div class="w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1"><span>${ssrInterpolate(item[`name_${unref(locale)}`])} (${ssrInterpolate((_a = item.children) == null ? void 0 : _a.length)})</span><div class="d-flex ga-2">`);
        _push(ssrRenderComponent(VBtn, {
          onClick: ($event) => _ctx.$emit("addItem", [j], item.id),
          color: "light-blue-accent-4",
          size: "30",
          flat: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, { icon: "mdi-plus" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, { icon: "mdi-plus" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(VBtn, {
          onClick: ($event) => _ctx.$emit("editItem", item, [j]),
          color: "light-blue-accent-4",
          size: "30",
          flat: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, { icon: "mdi-pencil" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, { icon: "mdi-pencil" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(VBtn, {
          onClick: ($event) => _ctx.$emit("deleteItem", item, [j]),
          color: "red",
          size: "30",
          flat: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, { icon: "mdi-delete" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, { icon: "mdi-delete" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(VBtn, {
          style: ((_b = item.children) == null ? void 0 : _b.length) !== 0 ? null : { display: "none" },
          onClick: ($event) => level1.value = level1.value === j ? null : j,
          color: "light-blue-accent-4",
          size: "30",
          flat: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, {
                icon: level1.value === j ? "mdi-chevron-up" : "mdi-chevron-down"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, {
                  icon: level1.value === j ? "mdi-chevron-up" : "mdi-chevron-down"
                }, null, 8, ["icon"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
        if (level1.value === j) {
          _push(`<!--[-->`);
          ssrRenderList(item.children, (item1, i) => {
            var _a2, _b2;
            _push(`<div class="pl-4"><div class="w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1"><span>${ssrInterpolate(item1[`name_${unref(locale)}`])} (${ssrInterpolate((_a2 = item1 == null ? void 0 : item1.children) == null ? void 0 : _a2.length)})</span><div class="d-flex ga-2">`);
            _push(ssrRenderComponent(VBtn, {
              onClick: ($event) => _ctx.$emit("addItem", [j, i], item1.id),
              color: "light-blue-accent-4",
              size: "30",
              flat: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VIcon, { icon: "mdi-plus" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(VIcon, { icon: "mdi-plus" })
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(VBtn, {
              onClick: ($event) => _ctx.$emit("editItem", item1, [j, i]),
              color: "light-blue-accent-4",
              size: "30",
              flat: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VIcon, { icon: "mdi-pencil" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(VIcon, { icon: "mdi-pencil" })
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(VBtn, {
              onClick: ($event) => _ctx.$emit("deleteItem", item1, [j, i]),
              color: "red",
              size: "30",
              flat: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VIcon, { icon: "mdi-delete" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(VIcon, { icon: "mdi-delete" })
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(VBtn, {
              style: ((_b2 = item1.children) == null ? void 0 : _b2.length) !== 0 ? null : { display: "none" },
              onClick: ($event) => level2.value = level2.value === i ? null : i,
              color: "light-blue-accent-4",
              size: "30",
              flat: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VIcon, {
                    icon: level2.value === i ? "mdi-chevron-up" : "mdi-chevron-down"
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: level2.value === i ? "mdi-chevron-up" : "mdi-chevron-down"
                    }, null, 8, ["icon"])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div>`);
            if (level2.value === i) {
              _push(`<!--[-->`);
              ssrRenderList(item1.children, (item2, l) => {
                _push(`<div class="pl-4"><div class="w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1"><span>${ssrInterpolate(item2[`name_${unref(locale)}`])}</span><div class="d-flex ga-2">`);
                _push(ssrRenderComponent(VBtn, {
                  onClick: ($event) => _ctx.$emit("editItem", item2, [j, i, l]),
                  color: "light-blue-accent-4",
                  size: "30",
                  flat: ""
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(ssrRenderComponent(VIcon, { icon: "mdi-pencil" }, null, _parent2, _scopeId));
                    } else {
                      return [
                        createVNode(VIcon, { icon: "mdi-pencil" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(ssrRenderComponent(VBtn, {
                  onClick: ($event) => _ctx.$emit("deleteItem", item2, [j, i, l]),
                  color: "red",
                  size: "30",
                  flat: ""
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(ssrRenderComponent(VIcon, { icon: "mdi-delete" }, null, _parent2, _scopeId));
                    } else {
                      return [
                        createVNode(VIcon, { icon: "mdi-delete" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(`</div></div></div>`);
              });
              _push(`<!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tree.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "categories",
  __ssrInlineRender: true,
  setup(__props) {
    const { getAllCategories, getTree, createCategory, deleteCategory, updateCategory } = useCategories();
    const loading = ref(false);
    const save_loading = ref(false);
    const editedId = ref(null);
    const dialog = ref(false);
    const items = ref([]);
    const all = ref([]);
    const form = ref(null);
    const indexes = ref([]);
    const nameRule = [(v) => !!v || "asdf"];
    const editedItem = ref({
      parent: null,
      name_uz: "",
      name_ru: "",
      name_en: "",
      children: []
    });
    const defaultItem = {
      parent: null,
      name_uz: "",
      name_ru: "",
      name_en: ""
    };
    watch(dialog, (v) => v || close());
    const addItem = (index, parent) => {
      editedItem.value.parent = parent;
      indexes.value = index;
      dialog.value = true;
    };
    const editItem = (item, index) => {
      indexes.value = index;
      editedId.value = item.id;
      editedItem.value = Object.assign({}, item);
      dialog.value = true;
    };
    const deleteItem = async (item, index) => {
      if (!confirm("Do you delete this item?"))
        return;
      if (index.length === 1)
        items.value.splice(index[0], 1);
      if (index.length === 2)
        items.value[index[0]].children.splice(index[1], 1);
      if (index.length === 3)
        items.value[index[0]].children[index[1]].children.splice(index[2], 1);
      await deleteCategory(item.id);
    };
    const close = () => {
      dialog.value = false;
      nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem);
        editedId.value = null;
        indexes.value = [];
      });
    };
    const save = async () => {
      var _a;
      const { valid } = await ((_a = form.value) == null ? void 0 : _a.validate());
      if (!valid)
        return;
      try {
        save_loading.value = true;
        if (editedId.value !== null) {
          const data = await updateCategory(editedItem.value.id, editedItem.value);
          if (data.children)
            delete data.children;
          if (indexes.value.length === 1)
            Object.assign(items.value[indexes.value[0]], data);
          if (indexes.value.length === 2)
            Object.assign(items.value[indexes.value[0]].children[indexes.value[1]], data);
          if (indexes.value.length === 3)
            Object.assign(items.value[indexes.value[0]].children[indexes.value[1]].children[indexes.value[2]], data);
        } else {
          const data = await createCategory(editedItem.value);
          console.log(data);
          all.value.push(data);
          if (indexes.value.length === 0)
            items.value.push({ ...data, children: [] });
          if (indexes.value.length === 1)
            items.value[indexes.value[0]].children.push({ ...data, children: [] });
          if (indexes.value.length === 2)
            items.value[indexes.value[0]].children[indexes.value[1]].children.push({ ...data, children: [] });
          if (indexes.value.length === 3)
            items.value[indexes.value[0]].children[indexes.value[1]].children[indexes.value[2]].children.push({ ...data, children: [] });
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
      const data = await getTree();
      if (!data)
        return;
      items.value = data;
      loading.value = false;
    };
    const init = async () => {
      const [tree, _] = await Promise.all([
        getAllCategories(""),
        loadItems()
      ]);
      all.value = tree.results;
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tree = _sfc_main$1;
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
                    class: "pb-0 d-flex justify-end",
                    style: { "margin-top": "1px" }
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
                                    _push6(`${ssrInterpolate(_ctx.$t("products.categories"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("products.categories")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span style="${ssrRenderStyle(unref(items).length === 0 && !unref(loading) ? null : { display: "none" })}"${_scopeId5}>${ssrInterpolate(_ctx.$t("no_data"))}</span><span style="${ssrRenderStyle(unref(loading) ? null : { display: "none" })}"${_scopeId5}>${ssrInterpolate(_ctx.$t("loading"))}...</span>`);
                                    _push6(ssrRenderComponent(_component_Tree, {
                                      onAddItem: addItem,
                                      onEditItem: editItem,
                                      onDeleteItem: deleteItem,
                                      items: unref(items),
                                      locale: _ctx.$i18n.locale
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("no_data")), 513), [
                                        [vShow, unref(items).length === 0 && !unref(loading)]
                                      ]),
                                      withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("loading")) + "...", 513), [
                                        [vShow, unref(loading)]
                                      ]),
                                      createVNode(_component_Tree, {
                                        onAddItem: addItem,
                                        onEditItem: editItem,
                                        onDeleteItem: deleteItem,
                                        items: unref(items),
                                        locale: _ctx.$i18n.locale
                                      }, null, 8, ["items", "locale"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, { class: "px-4 pt-3 font-weight-light" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("products.categories")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("no_data")), 513), [
                                      [vShow, unref(items).length === 0 && !unref(loading)]
                                    ]),
                                    withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("loading")) + "...", 513), [
                                      [vShow, unref(loading)]
                                    ]),
                                    createVNode(_component_Tree, {
                                      onAddItem: addItem,
                                      onEditItem: editItem,
                                      onDeleteItem: deleteItem,
                                      items: unref(items),
                                      locale: _ctx.$i18n.locale
                                    }, null, 8, ["items", "locale"])
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
                                  createTextVNode(toDisplayString(_ctx.$t("products.categories")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("no_data")), 513), [
                                    [vShow, unref(items).length === 0 && !unref(loading)]
                                  ]),
                                  withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("loading")) + "...", 513), [
                                    [vShow, unref(loading)]
                                  ]),
                                  createVNode(_component_Tree, {
                                    onAddItem: addItem,
                                    onEditItem: editItem,
                                    onDeleteItem: deleteItem,
                                    items: unref(items),
                                    locale: _ctx.$i18n.locale
                                  }, null, 8, ["items", "locale"])
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
                      class: "pb-0 d-flex justify-end",
                      style: { "margin-top": "1px" }
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
                                createTextVNode(toDisplayString(_ctx.$t("products.categories")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("no_data")), 513), [
                                  [vShow, unref(items).length === 0 && !unref(loading)]
                                ]),
                                withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("loading")) + "...", 513), [
                                  [vShow, unref(loading)]
                                ]),
                                createVNode(_component_Tree, {
                                  onAddItem: addItem,
                                  onEditItem: editItem,
                                  onDeleteItem: deleteItem,
                                  items: unref(items),
                                  locale: _ctx.$i18n.locale
                                }, null, 8, ["items", "locale"])
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
                              _push5(`<span class="font-weight-light"${_scopeId4}>${ssrInterpolate(_ctx.$t(unref(editedId) ? "admin.edit_categories" : "admin.add_categories"))}</span>`);
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
                                createVNode("span", { class: "font-weight-light" }, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_categories" : "admin.add_categories")), 1),
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
                                                  modelValue: unref(editedItem).name_uz,
                                                  "onUpdate:modelValue": ($event) => unref(editedItem).name_uz = $event,
                                                  rules: nameRule,
                                                  placeholder: "Nomi (uz)",
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
                                                      createTextVNode("Nomi (uz)")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(editedItem).name_uz,
                                                    "onUpdate:modelValue": ($event) => unref(editedItem).name_uz = $event,
                                                    rules: nameRule,
                                                    placeholder: "Nomi (uz)",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    required: "",
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
                                                  modelValue: unref(editedItem).name_ru,
                                                  "onUpdate:modelValue": ($event) => unref(editedItem).name_ru = $event,
                                                  rules: nameRule,
                                                  placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
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
                                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(editedItem).name_ru,
                                                    "onUpdate:modelValue": ($event) => unref(editedItem).name_ru = $event,
                                                    rules: nameRule,
                                                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    required: "",
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
                                                  modelValue: unref(editedItem).name_en,
                                                  "onUpdate:modelValue": ($event) => unref(editedItem).name_en = $event,
                                                  rules: nameRule,
                                                  placeholder: "Title (en)",
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
                                                      createTextVNode("Title (en)")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(editedItem).name_en,
                                                    "onUpdate:modelValue": ($event) => unref(editedItem).name_en = $event,
                                                    rules: nameRule,
                                                    placeholder: "Title (en)",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    required: "",
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
                                                      _push9(`${ssrInterpolate(_ctx.$t("admin.parent_category"))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(_ctx.$t("admin.parent_category")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(editedItem).parent,
                                                  "onUpdate:modelValue": ($event) => unref(editedItem).parent = $event,
                                                  items: unref(all),
                                                  "item-title": `name_${_ctx.$i18n.locale}`,
                                                  "item-value": "id",
                                                  placeholder: _ctx.$t("admin.parent_category"),
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
                                                      createTextVNode(toDisplayString(_ctx.$t("admin.parent_category")), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VSelect, {
                                                    modelValue: unref(editedItem).parent,
                                                    "onUpdate:modelValue": ($event) => unref(editedItem).parent = $event,
                                                    items: unref(all),
                                                    "item-title": `name_${_ctx.$i18n.locale}`,
                                                    "item-value": "id",
                                                    placeholder: _ctx.$t("admin.parent_category"),
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "outlined",
                                                    required: "",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "item-title", "placeholder"])
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
                                                  color: "primary",
                                                  disabled: unref(save_loading),
                                                  loading: unref(save_loading),
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
                                                    color: "primary",
                                                    disabled: unref(save_loading),
                                                    loading: unref(save_loading),
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
                                                  modelValue: unref(editedItem).name_uz,
                                                  "onUpdate:modelValue": ($event) => unref(editedItem).name_uz = $event,
                                                  rules: nameRule,
                                                  placeholder: "Nomi (uz)",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  required: "",
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
                                                  modelValue: unref(editedItem).name_ru,
                                                  "onUpdate:modelValue": ($event) => unref(editedItem).name_ru = $event,
                                                  rules: nameRule,
                                                  placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  required: "",
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
                                                  modelValue: unref(editedItem).name_en,
                                                  "onUpdate:modelValue": ($event) => unref(editedItem).name_en = $event,
                                                  rules: nameRule,
                                                  placeholder: "Title (en)",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  required: "",
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
                                                    createTextVNode(toDisplayString(_ctx.$t("admin.parent_category")), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VSelect, {
                                                  modelValue: unref(editedItem).parent,
                                                  "onUpdate:modelValue": ($event) => unref(editedItem).parent = $event,
                                                  items: unref(all),
                                                  "item-title": `name_${_ctx.$i18n.locale}`,
                                                  "item-value": "id",
                                                  placeholder: _ctx.$t("admin.parent_category"),
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "outlined",
                                                  required: "",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "item-title", "placeholder"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  color: "primary",
                                                  disabled: unref(save_loading),
                                                  loading: unref(save_loading),
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
                                                modelValue: unref(editedItem).name_uz,
                                                "onUpdate:modelValue": ($event) => unref(editedItem).name_uz = $event,
                                                rules: nameRule,
                                                placeholder: "Nomi (uz)",
                                                "hide-details": "",
                                                density: "compact",
                                                "bg-color": "surface",
                                                color: "primary",
                                                variant: "outlined",
                                                required: "",
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
                                                modelValue: unref(editedItem).name_ru,
                                                "onUpdate:modelValue": ($event) => unref(editedItem).name_ru = $event,
                                                rules: nameRule,
                                                placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                                "hide-details": "",
                                                density: "compact",
                                                "bg-color": "surface",
                                                color: "primary",
                                                variant: "outlined",
                                                required: "",
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
                                                modelValue: unref(editedItem).name_en,
                                                "onUpdate:modelValue": ($event) => unref(editedItem).name_en = $event,
                                                rules: nameRule,
                                                placeholder: "Title (en)",
                                                "hide-details": "",
                                                density: "compact",
                                                "bg-color": "surface",
                                                color: "primary",
                                                variant: "outlined",
                                                required: "",
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
                                                  createTextVNode(toDisplayString(_ctx.$t("admin.parent_category")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VSelect, {
                                                modelValue: unref(editedItem).parent,
                                                "onUpdate:modelValue": ($event) => unref(editedItem).parent = $event,
                                                items: unref(all),
                                                "item-title": `name_${_ctx.$i18n.locale}`,
                                                "item-value": "id",
                                                placeholder: _ctx.$t("admin.parent_category"),
                                                "hide-details": "",
                                                density: "compact",
                                                "bg-color": "surface",
                                                color: "primary",
                                                variant: "outlined",
                                                required: "",
                                                flat: "",
                                                class: "border rounded"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "item-title", "placeholder"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                color: "primary",
                                                disabled: unref(save_loading),
                                                loading: unref(save_loading),
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
                                              modelValue: unref(editedItem).name_uz,
                                              "onUpdate:modelValue": ($event) => unref(editedItem).name_uz = $event,
                                              rules: nameRule,
                                              placeholder: "Nomi (uz)",
                                              "hide-details": "",
                                              density: "compact",
                                              "bg-color": "surface",
                                              color: "primary",
                                              variant: "outlined",
                                              required: "",
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
                                              modelValue: unref(editedItem).name_ru,
                                              "onUpdate:modelValue": ($event) => unref(editedItem).name_ru = $event,
                                              rules: nameRule,
                                              placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                              "hide-details": "",
                                              density: "compact",
                                              "bg-color": "surface",
                                              color: "primary",
                                              variant: "outlined",
                                              required: "",
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
                                              modelValue: unref(editedItem).name_en,
                                              "onUpdate:modelValue": ($event) => unref(editedItem).name_en = $event,
                                              rules: nameRule,
                                              placeholder: "Title (en)",
                                              "hide-details": "",
                                              density: "compact",
                                              "bg-color": "surface",
                                              color: "primary",
                                              variant: "outlined",
                                              required: "",
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
                                                createTextVNode(toDisplayString(_ctx.$t("admin.parent_category")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VSelect, {
                                              modelValue: unref(editedItem).parent,
                                              "onUpdate:modelValue": ($event) => unref(editedItem).parent = $event,
                                              items: unref(all),
                                              "item-title": `name_${_ctx.$i18n.locale}`,
                                              "item-value": "id",
                                              placeholder: _ctx.$t("admin.parent_category"),
                                              "hide-details": "",
                                              density: "compact",
                                              "bg-color": "surface",
                                              color: "primary",
                                              variant: "outlined",
                                              required: "",
                                              flat: "",
                                              class: "border rounded"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "item-title", "placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              color: "primary",
                                              disabled: unref(save_loading),
                                              loading: unref(save_loading),
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
                              createVNode("span", { class: "font-weight-light" }, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_categories" : "admin.add_categories")), 1),
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
                                            modelValue: unref(editedItem).name_uz,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).name_uz = $event,
                                            rules: nameRule,
                                            placeholder: "Nomi (uz)",
                                            "hide-details": "",
                                            density: "compact",
                                            "bg-color": "surface",
                                            color: "primary",
                                            variant: "outlined",
                                            required: "",
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
                                            modelValue: unref(editedItem).name_ru,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).name_ru = $event,
                                            rules: nameRule,
                                            placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                            "hide-details": "",
                                            density: "compact",
                                            "bg-color": "surface",
                                            color: "primary",
                                            variant: "outlined",
                                            required: "",
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
                                            modelValue: unref(editedItem).name_en,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).name_en = $event,
                                            rules: nameRule,
                                            placeholder: "Title (en)",
                                            "hide-details": "",
                                            density: "compact",
                                            "bg-color": "surface",
                                            color: "primary",
                                            variant: "outlined",
                                            required: "",
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
                                              createTextVNode(toDisplayString(_ctx.$t("admin.parent_category")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VSelect, {
                                            modelValue: unref(editedItem).parent,
                                            "onUpdate:modelValue": ($event) => unref(editedItem).parent = $event,
                                            items: unref(all),
                                            "item-title": `name_${_ctx.$i18n.locale}`,
                                            "item-value": "id",
                                            placeholder: _ctx.$t("admin.parent_category"),
                                            "hide-details": "",
                                            density: "compact",
                                            "bg-color": "surface",
                                            color: "primary",
                                            variant: "outlined",
                                            required: "",
                                            flat: "",
                                            class: "border rounded"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "item-title", "placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            color: "primary",
                                            disabled: unref(save_loading),
                                            loading: unref(save_loading),
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
                            createVNode("span", { class: "font-weight-light" }, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_categories" : "admin.add_categories")), 1),
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
                                          modelValue: unref(editedItem).name_uz,
                                          "onUpdate:modelValue": ($event) => unref(editedItem).name_uz = $event,
                                          rules: nameRule,
                                          placeholder: "Nomi (uz)",
                                          "hide-details": "",
                                          density: "compact",
                                          "bg-color": "surface",
                                          color: "primary",
                                          variant: "outlined",
                                          required: "",
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
                                          modelValue: unref(editedItem).name_ru,
                                          "onUpdate:modelValue": ($event) => unref(editedItem).name_ru = $event,
                                          rules: nameRule,
                                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                          "hide-details": "",
                                          density: "compact",
                                          "bg-color": "surface",
                                          color: "primary",
                                          variant: "outlined",
                                          required: "",
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
                                          modelValue: unref(editedItem).name_en,
                                          "onUpdate:modelValue": ($event) => unref(editedItem).name_en = $event,
                                          rules: nameRule,
                                          placeholder: "Title (en)",
                                          "hide-details": "",
                                          density: "compact",
                                          "bg-color": "surface",
                                          color: "primary",
                                          variant: "outlined",
                                          required: "",
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
                                            createTextVNode(toDisplayString(_ctx.$t("admin.parent_category")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VSelect, {
                                          modelValue: unref(editedItem).parent,
                                          "onUpdate:modelValue": ($event) => unref(editedItem).parent = $event,
                                          items: unref(all),
                                          "item-title": `name_${_ctx.$i18n.locale}`,
                                          "item-value": "id",
                                          placeholder: _ctx.$t("admin.parent_category"),
                                          "hide-details": "",
                                          density: "compact",
                                          "bg-color": "surface",
                                          color: "primary",
                                          variant: "outlined",
                                          required: "",
                                          flat: "",
                                          class: "border rounded"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "item-title", "placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          color: "primary",
                                          disabled: unref(save_loading),
                                          loading: unref(save_loading),
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
                    cols: "12",
                    class: "pb-0 d-flex justify-end",
                    style: { "margin-top": "1px" }
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
                              createTextVNode(toDisplayString(_ctx.$t("products.categories")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("no_data")), 513), [
                                [vShow, unref(items).length === 0 && !unref(loading)]
                              ]),
                              withDirectives(createVNode("span", null, toDisplayString(_ctx.$t("loading")) + "...", 513), [
                                [vShow, unref(loading)]
                              ]),
                              createVNode(_component_Tree, {
                                onAddItem: addItem,
                                onEditItem: editItem,
                                onDeleteItem: deleteItem,
                                items: unref(items),
                                locale: _ctx.$i18n.locale
                              }, null, 8, ["items", "locale"])
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
                          createVNode("span", { class: "font-weight-light" }, toDisplayString(_ctx.$t(unref(editedId) ? "admin.edit_categories" : "admin.add_categories")), 1),
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
                                        modelValue: unref(editedItem).name_uz,
                                        "onUpdate:modelValue": ($event) => unref(editedItem).name_uz = $event,
                                        rules: nameRule,
                                        placeholder: "Nomi (uz)",
                                        "hide-details": "",
                                        density: "compact",
                                        "bg-color": "surface",
                                        color: "primary",
                                        variant: "outlined",
                                        required: "",
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
                                        modelValue: unref(editedItem).name_ru,
                                        "onUpdate:modelValue": ($event) => unref(editedItem).name_ru = $event,
                                        rules: nameRule,
                                        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (ru)",
                                        "hide-details": "",
                                        density: "compact",
                                        "bg-color": "surface",
                                        color: "primary",
                                        variant: "outlined",
                                        required: "",
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
                                        modelValue: unref(editedItem).name_en,
                                        "onUpdate:modelValue": ($event) => unref(editedItem).name_en = $event,
                                        rules: nameRule,
                                        placeholder: "Title (en)",
                                        "hide-details": "",
                                        density: "compact",
                                        "bg-color": "surface",
                                        color: "primary",
                                        variant: "outlined",
                                        required: "",
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
                                          createTextVNode(toDisplayString(_ctx.$t("admin.parent_category")), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VSelect, {
                                        modelValue: unref(editedItem).parent,
                                        "onUpdate:modelValue": ($event) => unref(editedItem).parent = $event,
                                        items: unref(all),
                                        "item-title": `name_${_ctx.$i18n.locale}`,
                                        "item-value": "id",
                                        placeholder: _ctx.$t("admin.parent_category"),
                                        "hide-details": "",
                                        density: "compact",
                                        "bg-color": "surface",
                                        color: "primary",
                                        variant: "outlined",
                                        required: "",
                                        flat: "",
                                        class: "border rounded"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "item-title", "placeholder"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        disabled: unref(save_loading),
                                        loading: unref(save_loading),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
