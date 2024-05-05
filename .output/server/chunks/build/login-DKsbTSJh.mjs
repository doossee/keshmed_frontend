import { a4 as useAuth, a5 as VApp, a6 as VMain, V as VContainer, a as VRow, f as VCard, g as VCardTitle, h as VCardText, q as VForm, b as VCol, c as VTextField, d as VBtn } from './server.mjs';
import { defineComponent, ref, reactive, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-CaqMT2j5.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { login } = useAuth();
    const nameRule = [(v) => !!v || "asdf"];
    const show = ref(false);
    const err = ref(false);
    const loading = ref(false);
    const form = ref(false);
    const user_login = reactive({
      username: "",
      password: ""
    });
    const handleLogin = async () => {
      var _a;
      err.value = false;
      loading.value = true;
      const { valid } = await ((_a = form.value) == null ? void 0 : _a.validate());
      if (!valid)
        return;
      try {
        await login(user_login);
        Object.assign(user_login, {
          username: "",
          password: ""
        });
      } catch (error) {
        err.value = true;
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { class: "h-screen" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          justify: "center",
                          align: "center",
                          class: "h-100"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                border: "",
                                flat: "",
                                "max-width": "400",
                                width: "100%"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex justify-center align-center py-4"${_scopeId5}><img${ssrRenderAttr("src", _imports_0)} width="130" height="60" alt=""${_scopeId5}></div>`);
                                    _push6(ssrRenderComponent(VCardTitle, { class: "text-primary text-center mb-4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430`);
                                        } else {
                                          return [
                                            createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    if (unref(err)) {
                                      _push6(ssrRenderComponent(VCardText, { class: "text-red text-center py-0" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C`);
                                          } else {
                                            return [
                                              createTextVNode("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VForm, {
                                            ref_key: "form",
                                            ref: form
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, { class: "pa-2" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        class: "pa-2"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(user_login).username,
                                                              "onUpdate:modelValue": ($event) => unref(user_login).username = $event,
                                                              rules: nameRule,
                                                              placeholder: "\u041B\u043E\u0433\u0438\u043D",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              color: "primary",
                                                              variant: "solo",
                                                              flat: "",
                                                              class: "border rounded"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(user_login).username,
                                                                "onUpdate:modelValue": ($event) => unref(user_login).username = $event,
                                                                rules: nameRule,
                                                                placeholder: "\u041B\u043E\u0433\u0438\u043D",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                "bg-color": "surface",
                                                                color: "primary",
                                                                variant: "solo",
                                                                flat: "",
                                                                class: "border rounded"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        class: "pa-2"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(user_login).password,
                                                              "onUpdate:modelValue": ($event) => unref(user_login).password = $event,
                                                              rules: nameRule,
                                                              "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                                                              "onClick:appendInner": ($event) => show.value = !unref(show),
                                                              type: unref(show) ? "text" : "password",
                                                              placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              color: "primary",
                                                              variant: "solo",
                                                              flat: "",
                                                              class: "border rounded"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(user_login).password,
                                                                "onUpdate:modelValue": ($event) => unref(user_login).password = $event,
                                                                rules: nameRule,
                                                                "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                                                                "onClick:appendInner": ($event) => show.value = !unref(show),
                                                                type: unref(show) ? "text" : "password",
                                                                placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                "bg-color": "surface",
                                                                color: "primary",
                                                                variant: "solo",
                                                                flat: "",
                                                                class: "border rounded"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "onClick:appendInner", "type"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        class: "pa-2"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VBtn, {
                                                              disabled: unref(loading),
                                                              onClick: handleLogin,
                                                              block: "",
                                                              color: "primary",
                                                              flat: ""
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VBtn, {
                                                                disabled: unref(loading),
                                                                onClick: handleLogin,
                                                                block: "",
                                                                color: "primary",
                                                                flat: ""
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["disabled"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          class: "pa-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(user_login).username,
                                                              "onUpdate:modelValue": ($event) => unref(user_login).username = $event,
                                                              rules: nameRule,
                                                              placeholder: "\u041B\u043E\u0433\u0438\u043D",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              color: "primary",
                                                              variant: "solo",
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
                                                            createVNode(VTextField, {
                                                              modelValue: unref(user_login).password,
                                                              "onUpdate:modelValue": ($event) => unref(user_login).password = $event,
                                                              rules: nameRule,
                                                              "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                                                              "onClick:appendInner": ($event) => show.value = !unref(show),
                                                              type: unref(show) ? "text" : "password",
                                                              placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              "bg-color": "surface",
                                                              color: "primary",
                                                              variant: "solo",
                                                              flat: "",
                                                              class: "border rounded"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "onClick:appendInner", "type"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          class: "pa-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VBtn, {
                                                              disabled: unref(loading),
                                                              onClick: handleLogin,
                                                              block: "",
                                                              color: "primary",
                                                              flat: ""
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["disabled"])
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
                                                  createVNode(VRow, { class: "pa-2" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        class: "pa-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(user_login).username,
                                                            "onUpdate:modelValue": ($event) => unref(user_login).username = $event,
                                                            rules: nameRule,
                                                            placeholder: "\u041B\u043E\u0433\u0438\u043D",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            "bg-color": "surface",
                                                            color: "primary",
                                                            variant: "solo",
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
                                                          createVNode(VTextField, {
                                                            modelValue: unref(user_login).password,
                                                            "onUpdate:modelValue": ($event) => unref(user_login).password = $event,
                                                            rules: nameRule,
                                                            "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                                                            "onClick:appendInner": ($event) => show.value = !unref(show),
                                                            type: unref(show) ? "text" : "password",
                                                            placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            "bg-color": "surface",
                                                            color: "primary",
                                                            variant: "solo",
                                                            flat: "",
                                                            class: "border rounded"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "onClick:appendInner", "type"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        class: "pa-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VBtn, {
                                                            disabled: unref(loading),
                                                            onClick: handleLogin,
                                                            block: "",
                                                            color: "primary",
                                                            flat: ""
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["disabled"])
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
                                                        createVNode(VTextField, {
                                                          modelValue: unref(user_login).username,
                                                          "onUpdate:modelValue": ($event) => unref(user_login).username = $event,
                                                          rules: nameRule,
                                                          placeholder: "\u041B\u043E\u0433\u0438\u043D",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "solo",
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
                                                        createVNode(VTextField, {
                                                          modelValue: unref(user_login).password,
                                                          "onUpdate:modelValue": ($event) => unref(user_login).password = $event,
                                                          rules: nameRule,
                                                          "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                                                          "onClick:appendInner": ($event) => show.value = !unref(show),
                                                          type: unref(show) ? "text" : "password",
                                                          placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          "bg-color": "surface",
                                                          color: "primary",
                                                          variant: "solo",
                                                          flat: "",
                                                          class: "border rounded"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "onClick:appendInner", "type"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      class: "pa-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, {
                                                          disabled: unref(loading),
                                                          onClick: handleLogin,
                                                          block: "",
                                                          color: "primary",
                                                          flat: ""
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["disabled"])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex justify-center align-center py-4" }, [
                                        createVNode("img", {
                                          src: _imports_0,
                                          width: "130",
                                          height: "60",
                                          alt: ""
                                        })
                                      ]),
                                      createVNode(VCardTitle, { class: "text-primary text-center mb-4" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      unref(err) ? (openBlock(), createBlock(VCardText, {
                                        key: 0,
                                        class: "text-red text-center py-0"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createVNode(VCardText, null, {
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
                                                      createVNode(VTextField, {
                                                        modelValue: unref(user_login).username,
                                                        "onUpdate:modelValue": ($event) => unref(user_login).username = $event,
                                                        rules: nameRule,
                                                        placeholder: "\u041B\u043E\u0433\u0438\u043D",
                                                        "hide-details": "",
                                                        density: "compact",
                                                        "bg-color": "surface",
                                                        color: "primary",
                                                        variant: "solo",
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
                                                      createVNode(VTextField, {
                                                        modelValue: unref(user_login).password,
                                                        "onUpdate:modelValue": ($event) => unref(user_login).password = $event,
                                                        rules: nameRule,
                                                        "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                                                        "onClick:appendInner": ($event) => show.value = !unref(show),
                                                        type: unref(show) ? "text" : "password",
                                                        placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                                                        "hide-details": "",
                                                        density: "compact",
                                                        "bg-color": "surface",
                                                        color: "primary",
                                                        variant: "solo",
                                                        flat: "",
                                                        class: "border rounded"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "onClick:appendInner", "type"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    class: "pa-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        disabled: unref(loading),
                                                        onClick: handleLogin,
                                                        block: "",
                                                        color: "primary",
                                                        flat: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["disabled"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, {
                                  border: "",
                                  flat: "",
                                  "max-width": "400",
                                  width: "100%"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-center align-center py-4" }, [
                                      createVNode("img", {
                                        src: _imports_0,
                                        width: "130",
                                        height: "60",
                                        alt: ""
                                      })
                                    ]),
                                    createVNode(VCardTitle, { class: "text-primary text-center mb-4" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    unref(err) ? (openBlock(), createBlock(VCardText, {
                                      key: 0,
                                      class: "text-red text-center py-0"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(VCardText, null, {
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
                                                    createVNode(VTextField, {
                                                      modelValue: unref(user_login).username,
                                                      "onUpdate:modelValue": ($event) => unref(user_login).username = $event,
                                                      rules: nameRule,
                                                      placeholder: "\u041B\u043E\u0433\u0438\u043D",
                                                      "hide-details": "",
                                                      density: "compact",
                                                      "bg-color": "surface",
                                                      color: "primary",
                                                      variant: "solo",
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
                                                    createVNode(VTextField, {
                                                      modelValue: unref(user_login).password,
                                                      "onUpdate:modelValue": ($event) => unref(user_login).password = $event,
                                                      rules: nameRule,
                                                      "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                                                      "onClick:appendInner": ($event) => show.value = !unref(show),
                                                      type: unref(show) ? "text" : "password",
                                                      placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                                                      "hide-details": "",
                                                      density: "compact",
                                                      "bg-color": "surface",
                                                      color: "primary",
                                                      variant: "solo",
                                                      flat: "",
                                                      class: "border rounded"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "onClick:appendInner", "type"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  class: "pa-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      disabled: unref(loading),
                                                      onClick: handleLogin,
                                                      block: "",
                                                      color: "primary",
                                                      flat: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["disabled"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, {
                            justify: "center",
                            align: "center",
                            class: "h-100"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                border: "",
                                flat: "",
                                "max-width": "400",
                                width: "100%"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-center align-center py-4" }, [
                                    createVNode("img", {
                                      src: _imports_0,
                                      width: "130",
                                      height: "60",
                                      alt: ""
                                    })
                                  ]),
                                  createVNode(VCardTitle, { class: "text-primary text-center mb-4" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  unref(err) ? (openBlock(), createBlock(VCardText, {
                                    key: 0,
                                    class: "text-red text-center py-0"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(VCardText, null, {
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
                                                  createVNode(VTextField, {
                                                    modelValue: unref(user_login).username,
                                                    "onUpdate:modelValue": ($event) => unref(user_login).username = $event,
                                                    rules: nameRule,
                                                    placeholder: "\u041B\u043E\u0433\u0438\u043D",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "solo",
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
                                                  createVNode(VTextField, {
                                                    modelValue: unref(user_login).password,
                                                    "onUpdate:modelValue": ($event) => unref(user_login).password = $event,
                                                    rules: nameRule,
                                                    "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                                                    "onClick:appendInner": ($event) => show.value = !unref(show),
                                                    type: unref(show) ? "text" : "password",
                                                    placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                                                    "hide-details": "",
                                                    density: "compact",
                                                    "bg-color": "surface",
                                                    color: "primary",
                                                    variant: "solo",
                                                    flat: "",
                                                    class: "border rounded"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "onClick:appendInner", "type"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                class: "pa-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    disabled: unref(loading),
                                                    onClick: handleLogin,
                                                    block: "",
                                                    color: "primary",
                                                    flat: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["disabled"])
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
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, { class: "h-screen" }, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          justify: "center",
                          align: "center",
                          class: "h-100"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              border: "",
                              flat: "",
                              "max-width": "400",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex justify-center align-center py-4" }, [
                                  createVNode("img", {
                                    src: _imports_0,
                                    width: "130",
                                    height: "60",
                                    alt: ""
                                  })
                                ]),
                                createVNode(VCardTitle, { class: "text-primary text-center mb-4" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430")
                                  ]),
                                  _: 1
                                }),
                                unref(err) ? (openBlock(), createBlock(VCardText, {
                                  key: 0,
                                  class: "text-red text-center py-0"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(VCardText, null, {
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
                                                createVNode(VTextField, {
                                                  modelValue: unref(user_login).username,
                                                  "onUpdate:modelValue": ($event) => unref(user_login).username = $event,
                                                  rules: nameRule,
                                                  placeholder: "\u041B\u043E\u0433\u0438\u043D",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "solo",
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
                                                createVNode(VTextField, {
                                                  modelValue: unref(user_login).password,
                                                  "onUpdate:modelValue": ($event) => unref(user_login).password = $event,
                                                  rules: nameRule,
                                                  "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                                                  "onClick:appendInner": ($event) => show.value = !unref(show),
                                                  type: unref(show) ? "text" : "password",
                                                  placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                                                  "hide-details": "",
                                                  density: "compact",
                                                  "bg-color": "surface",
                                                  color: "primary",
                                                  variant: "solo",
                                                  flat: "",
                                                  class: "border rounded"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "onClick:appendInner", "type"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  disabled: unref(loading),
                                                  onClick: handleLogin,
                                                  block: "",
                                                  color: "primary",
                                                  flat: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")
                                                  ]),
                                                  _: 1
                                                }, 8, ["disabled"])
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
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, { class: "h-screen" }, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        justify: "center",
                        align: "center",
                        class: "h-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            border: "",
                            flat: "",
                            "max-width": "400",
                            width: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-center align-center py-4" }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  width: "130",
                                  height: "60",
                                  alt: ""
                                })
                              ]),
                              createVNode(VCardTitle, { class: "text-primary text-center mb-4" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430")
                                ]),
                                _: 1
                              }),
                              unref(err) ? (openBlock(), createBlock(VCardText, {
                                key: 0,
                                class: "text-red text-center py-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(VCardText, null, {
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
                                              createVNode(VTextField, {
                                                modelValue: unref(user_login).username,
                                                "onUpdate:modelValue": ($event) => unref(user_login).username = $event,
                                                rules: nameRule,
                                                placeholder: "\u041B\u043E\u0433\u0438\u043D",
                                                "hide-details": "",
                                                density: "compact",
                                                "bg-color": "surface",
                                                color: "primary",
                                                variant: "solo",
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
                                              createVNode(VTextField, {
                                                modelValue: unref(user_login).password,
                                                "onUpdate:modelValue": ($event) => unref(user_login).password = $event,
                                                rules: nameRule,
                                                "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                                                "onClick:appendInner": ($event) => show.value = !unref(show),
                                                type: unref(show) ? "text" : "password",
                                                placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
                                                "hide-details": "",
                                                density: "compact",
                                                "bg-color": "surface",
                                                color: "primary",
                                                variant: "solo",
                                                flat: "",
                                                class: "border rounded"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "onClick:appendInner", "type"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "pa-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                disabled: unref(loading),
                                                onClick: handleLogin,
                                                block: "",
                                                color: "primary",
                                                flat: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")
                                                ]),
                                                _: 1
                                              }, 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
