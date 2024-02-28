<template>
    <v-list-item theme="light" variant="flat" color="surface" link :to="`/product/${product!.slug}`" border lines="three" rounded class="mb-3 pa-2">
        <template #prepend>
            <v-avatar size="150" rounded color="grey-lighten-3">
                <v-img :alt="product?.title_uz +' image'" :src="product?.images?.[0]?.image || '/img/nophoto.jpg'"></v-img>
            </v-avatar>
        </template>
        <v-list-item-title class="text-primary text-body-2">{{ product!.brand.name }}</v-list-item-title>
        <v-list-item-title>{{ product![`title_${$i18n.locale}`] }}</v-list-item-title>
        <v-list-item-subtitle class="text-caption">{{ product![`description_${$i18n.locale}`] }}</v-list-item-subtitle>
        <v-list-item-title class="text-body-1">{{ product!.price }} $</v-list-item-title>
    </v-list-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const { product } = defineProps({
    product: {
        type: Object,
    }
})
</script>