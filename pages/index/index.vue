<template>
    <v-container theme="light">
        <v-row justify="center">
            <v-col cols="12" style="height: 70vh; position: relative;"
                class="d-flex rounded flex-column align-center justify-center mt-1">
                <div class="w-100 h-100 px-2" style="position: absolute;">
                    <v-carousel cycle height="100%" hide-delimiter-background :show-arrows="false" :delimiter-icon="AkCircleFill">
                        <v-carousel-item v-for="i in 4" :key="i">
                            <v-avatar class="w-100 h-100" rounded>
                                <v-img alt="medical" gradient="to top left, rgba(104, 59, 181, 1), rgba(104, 59, 181, .4)"
                                    cover :src="`/carousel/image-${i}.jpg`"></v-img>
                            </v-avatar>
                        </v-carousel-item>
                    </v-carousel>
                </div>
                <div style="position: relative; z-index: 1;" class="px-4">
                    <div class="text-center">
                        <span class="text-white text-h5 text-md-h4 font-weight-light">{{ $t('home.title') }}</span>
                    </div>
                    <v-sheet max-width="650" color="transparent" class="w-100 mt-4 text-center">
                        <p class="text-grey-lighten-2 font-weight-light text-body-2">{{ $t('home.desc') }}</p>
                        <v-menu offset="12" transition="fade-transition" :model-value="searchedProducts.length > 0"
                            :close-on-content-click="false">
                            <template #activator="{ props }">
                                <v-text-field v-bind="props" class="mt-4" color="primary" rounded="lg" hide-details
                                    type="search" @update:model-value="searchProducts" bg-color="white"
                                    density="comfortable" autofocus variant="outlined" base-color="primary"
                                    aria-label="search products" role="text" :prepend-inner-icon="ClSearchMagnifyingGlass"
                                    :placeholder="$t('home.search')">
                                </v-text-field>
                            </template>
                            <v-list elevation="0" width="100%" nav lines="two" density="compact">
                                <v-list-item height="65" class="py-1" v-for="item, i in searchedProducts" :key="i" link
                                    :to="`/product/${item.slug}`">
                                    <template v-slot:prepend>
                                        <v-avatar rounded>
                                            <v-img alt="searched images" cover
                                                :src="item.images?.[0]?.image || '/images/nophoto.jpg'"></v-img>
                                        </v-avatar>
                                    </template>
                                    <v-list-item-title class="text-body-2">{{ item[`title_${$i18n.locale as 'uz'}`]
                                    }}</v-list-item-title>
                                    <v-list-item-subtitle class="text-caption mt-1 d-flex align-center gap-1">
                                        <div class="d-flex align-center gap-1 font-weight-bold">
                                            <v-img alt="flag" width="20" height="20"
                                                :src="countries[item.shipping_from].flag"></v-img>
                                            {{ countries[item.shipping_from].name }}
                                        </div>
                                        {{ item.model }}
                                        <span class="font-weight-bold">{{ item.price }} $</span>
                                    </v-list-item-subtitle>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-sheet>
                </div>
            </v-col>

            <v-col cols="12" class="px-2">
                <v-sheet width="100%" color="surface" class="mt-8 py-4 pl-4 rounded border">
                    <v-row>
                        <v-col cols="12" sm="6" md="3" v-for="item, i in index_card_items" :key="i">
                            <v-list-item nav lines="three">
                                <template #prepend>
                                    <v-icon size="35" color="primary" :icon="item.icon"></v-icon>
                                </template>
                                <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
                                <v-list-item-subtitle>{{ $t(item.description) }}</v-list-item-subtitle>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>

            <v-col cols="12">
                <div class="w-100 py-4 d-flex justify-start align-center">
                    <span class="text-primary">{{ $t('home.all_categories') }}</span>
                </div>
                <v-row>
                    <!-- <v-col class="pa-2" cols="12" sm="6" md="4" v-for="c, i in getters.categories" :key="i">
                        <AppHomeCategory :category="c" />
                    </v-col> -->
                </v-row>
            </v-col>

            <v-col cols="12">
                <div class="w-100 py-4 d-flex justify-space-between align-center">
                    <span class="text-primary">{{ $t('home.recomended') }}</span>
                    <v-btn to="/products" :append-icon="AkArrowRight" color="primary" variant="text"
                        class="text-none font-weight-light">
                        <span>{{ $t('home.see_all') }}</span>
                    </v-btn>
                </div>
                <v-row>
                    <v-col v-for="item, i in products" :key="i" cols="12" sm="6" md="4">
                        <AppProductCard :item="item" />
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12">
                <div class="w-100 py-4 d-flex justify-start align-center">
                    <span class="text-primary">{{ $t('home.faqs') }}</span>
                </div>
                <v-sheet width="100%" border rounded>
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel elevation="0" v-for="f, i in faqs" :key="i">
                            <v-expansion-panel-title class="font-weight-normal text-subtitle-2">
                                {{ i + 1 }}. {{ f.question[$i18n.locale as 'uz'] }}
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="text-body-2">
                                {{ f.answer[$i18n.locale as 'uz'] }}
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script setup lang="ts">
import { ref } from 'vue'
import lodash from 'lodash'
import type { IProduct } from '~/types'
import { index_card_items, faqs, countries } from '~/constants'
import { ClSearchMagnifyingGlass, AkArrowRight, AkCircleFill } from '@kalimahapps/vue-icons'

useHead({
    title: "Медицинское Оборудование в Узбекистане",
    meta: [
        { name: "description", content: "Современное и надежное медицинское оборудование в Узбекистане. Диагностика, лечение, реабилитация — мы предоставляем передовые решения для вашей клиники. Партнеры лучших мировых производителей обеспечивают качество и эффективность. Получите консультацию и поддержку от наших экспертов. Обеспечьте вашу клинику современным оборудованием для заботы о здоровье пациентов." },
        { name: "keywords", content: "Медицинское Оборудование в Узбекистане, медицинское оборудование, медицинское оборудование в кашкадарйе, медицинское оборудование в азии, медицинское, оборудование, tibbiy uskunalar, o'zbekistondagi tibbiy uskunalar, tibbiy, uskunalar, osiyodagi tibbiy uskunalar, qashqadaryo tibbiy uskunalar, Medical Equipment in Uzbekistan, medical equipment, medical equipment in Kashkadarya, medical equipment in Asia, medical equipment" },
    ]
})
definePageMeta({
    layout: 'index-layout',
})
const { debounce } = lodash
const { getAllProducts } = useProducts()
const products = ref([])
// const { getters } = useStore()
// const { locale, t } = useI18n()
const searchedProducts = ref<IProduct[]>([])

const init = async () => {
    const data: any = await getAllProducts('?expand=images,brand&limit=12')
    products.value = data.results
}

const searchProducts = debounce(async (e: string | null) => {
    // if (!e?.trim()) return searchedProducts.value = []
    // const { data } = await getAllProducts(`?search=${e}&limit=50`)
    // searchedProducts.value = data.results
}, 500)

init()
</script>