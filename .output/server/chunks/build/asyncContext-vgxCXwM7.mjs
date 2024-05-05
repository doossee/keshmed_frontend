import { ref, watchEffect, watch, getCurrentInstance, withAsyncContext as withAsyncContext$1 } from 'vue';
import { N as injectHead, O as resolveUnrefHeadInput } from './server.mjs';
import { composableNames, unpackMeta } from '@unhead/shared';

function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
function useSeoMeta(input, options) {
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t) {
      const meta2 = unpackMeta({ ...t._flatMeta });
      delete t._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t,
        meta: meta2
      };
    }
  });
}
function withAsyncContext(fn) {
  return withAsyncContext$1(() => {
    var _a;
    const nuxtApp = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
    return nuxtApp ? nuxtApp.runWithContext(fn) : fn();
  });
}

export { useSeoMeta as a, useHead as u, withAsyncContext as w };
