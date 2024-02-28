export const useAuth = () => {
    const token = useAuthData()
    
    const setToken = (tk: string | null) => {
        token.value = tk
    }
    
    const login = async (body: any) => {
        const data = await $fetch<{access: string}>(`/auth/jwt/create/`, {
            method: 'post',
            body
        })
        if(data.access) {
            setToken(data.access)
            navigateTo('/admin')
        }
    }

    const logout = () => {
        setToken(null)
        navigateTo('/login')
    }

    return {
        token,
        login,
        logout,
    }
}