<template>
    <v-app>
        <ClientOnly>
            <AppBar />
        </ClientOnly>
        <v-main class="min-h-screen">
            <slot />
        </v-main>
        <v-btn href="tel:+998908893700" target="_blank" size="60" rounded="circle" color="primary" style="border: 2px solid #fff; position: fixed; right: 50px; bottom: 50px; z-index: 444;">
            <v-icon size="30">mdi-phone</v-icon>
        </v-btn>
        <AppFooter />
    </v-app>
</template>