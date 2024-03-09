import { a7 as defineNuxtRouteMiddleware, a8 as useAuthData, Z as navigateTo } from '../server.mjs';
import 'vue';
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
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware((to, from) => {
  const token = useAuthData();
  if (!token.value) {
    navigateTo("/login", { external: true });
  }
});

export { auth as default };
