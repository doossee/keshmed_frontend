<template>
    <v-app>
        <ClientOnly>
            <AppNavbar :drawer="drawer" @close-nav="drawer=false" />
            <AppBar @open-nav="drawer=true" />
        </ClientOnly>
        <v-main class="min-h-screen">
            <slot />
        </v-main>
        <AppFooter />
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { useStore } from 'vuex'
// import { getTree } from '../../api/categories'
// import { getAllBrands } from '../../api/brands'

const drawer = ref(false)
// const { commit } = useStore()

const init = async () => {
    // const [c, b] = await Promise.all([
    //     getTree(),
    //     getAllBrands('')
    // ])
    
    // commit('SET_CATEGORIES', c.data)
    // commit('SET_BRANDS', b.data.results)
}

init()
</script>