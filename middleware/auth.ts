export default defineNuxtRouteMiddleware((to, from) => {
    const token = useAuthData()
    
    if(!token.value) {
        navigateTo('/login', { external: true })
    }
})