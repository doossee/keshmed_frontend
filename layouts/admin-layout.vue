<template>
    <v-app>
        <ClientOnly>
            <app-admin-nav />
            <app-admin-bar />
        </ClientOnly>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>