<template>
    <v-menu :open-on-hover="false" close-on-back transition="fade-transition" open-delay="0" close-delay="0"
        :close-on-content-click="false">
        <template #activator="menu">
            <v-list-item class="text-body-2" base-color="primary" height="50" variant="flat" rounded link v-bind="menu.props"
                color="primary" append-icon="mdi-chevron-down">
                <router-link :to="`/products?category=${category.id}`" class="text-white text-decoration-none">{{ category[`name_${$i18n.locale as 'uz'}`] }}</router-link>
            </v-list-item>
        </template>
        <v-list density="compact" elevation="1" max-height="400">
            <v-list-item link v-for="ct1, j in category.children" :key="j">
                <router-link :to="`/products?category=${ct1.id}`" class="text-black text-decoration-none">{{ ct1[`name_${$i18n.locale as 'uz'}`] }}</router-link>
                <template #append>
                    <v-menu :close-on-content-click="true" location="right" offset="30" transition="fade-transition">
                        <template #activator="{ isActive, props }" v-if="ct1.children?.length">
                            <v-btn v-bind="props" rounded="circle" size="30" variant="tonal">
                                <v-icon>mdi-chevron-{{ !isActive ? 'right' : 'down' }}</v-icon>
                            </v-btn>
                        </template>

                        <v-list elevation="1" density="compact">
                            <v-list-item link v-for="ct2, o in ct1.children" :key="o" min-width="150">
                                <router-link :to="`/products?category=${ct2.id}`" class="text-black text-decoration-none">{{ ct2[`name_${$i18n.locale as 'uz'}`] }}</router-link>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
        </v-list-item>
        </v-list>
    </v-menu>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { ICategory } from '~/types'

const { category } = defineProps<{ category: ICategory }>()
</script>