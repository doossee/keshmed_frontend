<template>
    <v-app>
        <ClientOnly>
            <AppBar />
        </ClientOnly>
        <v-main class="min-h-screen">
            <slot />
        </v-main>
        <ClientOnly>
            <v-btn v-show="mobile" href="tel:+998908893700" target="_blank" size="60" rounded="circle" color="primary" style="border: 2px solid #fff; position: fixed; right: 20px; bottom: 20px; z-index: 444;">
                <v-icon size="30">mdi-phone</v-icon>
            </v-btn>
        </ClientOnly>
        <AppFooter />
    </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>