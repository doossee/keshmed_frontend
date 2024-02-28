import { defineStore } from 'pinia'

const adminToken = useCookie<string|null>('admin-token', {
    expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
    default: () => null,
})

export const useAppStore = defineStore('app', {
    state: () => ({
        token: adminToken.value
    }),
    getters: {
        isLogged: state => !!state.token
    },
    actions: {
        set_token(token: string | null){
            adminToken.value = token
            this.$patch({ token })
        },

    }
})