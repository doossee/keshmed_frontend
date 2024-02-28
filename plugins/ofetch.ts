import { ofetch } from 'ofetch'
export default defineNuxtPlugin(async (nuxtApp) => {
  globalThis.$fetch = await ofetch.create({
    onRequest({ request, options }) {
      const config = useRuntimeConfig();
      const token = useAuthData();

      if (!request.toString().startsWith('/_')) {

        options.baseURL = config.public.backUrl;

        const headers: any = {...options.headers,}
        if(token.value) {
          headers.Authorization = `Bearer ${token.value}`
        }

        options.headers = headers

      } else {
        options.baseURL = '';
      }
    },
    onResponseError({ response }) {
      console.log(response);
      
        if (response.status === 401 || response.status === 419) {
            const { logout } = useAuth();
            logout()
        }
    }
  })
})