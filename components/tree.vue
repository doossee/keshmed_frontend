<template>
    <div v-for="item,j in items">
        <div class="w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1">
            <span>{{ item[`name_${locale}`] }} ({{ item.children?.length }})</span>
            <div class="d-flex ga-2">
                <v-btn @click="$emit('addItem', [j], item.id)" color="light-blue-accent-4" size="30" flat><v-icon icon="mdi-plus" /></v-btn>
                <v-btn @click="$emit('editItem',item, [j])" color="light-blue-accent-4" size="30" flat><v-icon icon="mdi-pencil" /></v-btn>
                <v-btn @click="$emit('deleteItem',item, [j])" color="red" size="30" flat><v-icon icon="mdi-delete" /></v-btn>
                <v-btn v-show="item.children?.length!==0" @click="level1=(level1===j?null:j)" color="light-blue-accent-4" size="30" flat><v-icon :icon="level1===j?'mdi-chevron-up':'mdi-chevron-down'" /></v-btn>
            </div>
        </div>
        <template v-if="level1===j">
            <div v-for="item1,i in item.children" class="pl-4">
                <div class="w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1">
                    <span>{{ item1[`name_${locale}`] }} ({{ item1?.children?.length }})</span>
                    <div class="d-flex ga-2">
                        <v-btn @click="$emit('addItem', [j,i], item1.id)" color="light-blue-accent-4" size="30" flat><v-icon icon="mdi-plus" /></v-btn>
                        <v-btn @click="$emit('editItem',item1, [j,i])" color="light-blue-accent-4" size="30" flat><v-icon icon="mdi-pencil" /></v-btn>
                        <v-btn @click="$emit('deleteItem',item1, [j,i])" color="red" size="30" flat><v-icon icon="mdi-delete" /></v-btn>
                        <v-btn v-show="item1.children?.length!==0" @click="level2=(level2===i?null:i)" color="light-blue-accent-4" size="30" flat><v-icon :icon="level2===i?'mdi-chevron-up':'mdi-chevron-down'" /></v-btn>
                    </div>
                </div>
                <template v-if="level2===i">
                    <div v-for="item2,l in (item1.children as ICategory[])" class="pl-4">
                        <div class="w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1">
                            <span>{{ item2[`name_${locale}`] }}</span>
                            <div class="d-flex ga-2">
                                <v-btn @click="$emit('editItem',item2, [j,i,l])" color="light-blue-accent-4" size="30" flat><v-icon icon="mdi-pencil" /></v-btn>
                                <v-btn @click="$emit('deleteItem',item2, [j,i,l])" color="red" size="30" flat><v-icon icon="mdi-delete" /></v-btn>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { ICategory } from '~/types'
import { ref, toRefs, defineProps, defineEmits } from 'vue'

const emits = defineEmits(['addItem','editItem','deleteItem'])
const props = defineProps<{items: ICategory[], locale: 'uz'|'en'|'ru'}>()
const { items, locale } = toRefs(props)
const level1 = ref<number|null>(0)
const level2 = ref<number|null>(0)
</script>