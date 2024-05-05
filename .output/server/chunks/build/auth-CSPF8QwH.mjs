import { a7 as defineNuxtRouteMiddleware, a8 as useAuthData, Y as navigateTo } from './server.mjs';
import 'vue';
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
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const auth = defineNuxtRouteMiddleware((to, from) => {
  const token = useAuthData();
  if (!token.value) {
    navigateTo("/login", { external: true });
  }
});

export { auth as default };
