<template>
    <v-container>
        <v-row>
            <v-col cols="12" v-if="!loading">
                <v-card border flat>
                    <v-card-text class="d-flex gap-1 align-center">
                        <router-link class="text-decoration-none text-black text-hover-link" v-if="product?.category?.parent?.parent" :to="`/products?category=${product.category.parent.parent.id}`">{{ product.category.parent.parent[`name_${$i18n.locale as 'uz'}`] }} /</router-link>
                        <router-link class="text-decoration-none text-black text-hover-link" v-if="product?.category?.parent" :to="`/products?category=${product.category.parent?.id}`">{{ product.category.parent[`name_${$i18n.locale as 'uz'}`] }} /</router-link>
                        <router-link class="text-decoration-none text-black text-hover-link" v-if="product?.category?.id" :to="`/products?category=${product.category.id}`">{{ product.category[`name_${$i18n.locale as 'uz'}`] }}</router-link>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-skeleton-loader :loading="loading" type="image,image,button,button,button,button">
                    <v-card flat width="100%" border>
                        <v-avatar rounded size="100%">
                            <v-img :alt="product?.title_ru" height="400" width="100%" :src="product?.images?.[currentImage]?.image || '/img/nophoto.jpg'"></v-img>
                        </v-avatar>
                        <v-divider></v-divider>
                        <v-card-actions class="pa-0 d-flex justify-center" v-if="product?.images.length!==0">
                            <ClientOnly>
                                <v-slide-group v-model="currentImage" class="pa-2" mandatory selected-class="bg-primary" show-arrows>
                                    <v-slide-group-item v-slot="{ isSelected, toggle }" v-for="image, i in product?.images" :key="i">
                                        <v-avatar size="50" rounded @click="toggle" :color="!isSelected ? 'grey-lighten-3' : 'primary'" class="mx-1 pa-1">
                                            <v-img alt="thumb" :src="image?.thumbnail || '/img/nophoto.jpg'" cover></v-img>
                                        </v-avatar>
                                    </v-slide-group-item>
                                </v-slide-group>
                            </ClientOnly>
                        </v-card-actions>
                    </v-card>
                </v-skeleton-loader>
            </v-col>
            <v-col cols="12" sm="6">
                <v-skeleton-loader :loading="loading" type="article, avatar, text, paragraph" min-height="100%"
                    color="transparent" width="100%">
                    <v-card variant="text" width="100%">
                        <v-card-title class="px-0 pt-0">{{ product?.[`title_${$i18n.locale as 'uz'}`] }}</v-card-title> <!-- title_${locale as "uz"|"ru"|"en"} -->
                        <v-card-text class="pb-0 pt-2 px-0 d-flex justify-space-between align-center">
                            <div>
                                <span class="text-h5 text-primary font-weight-medium">{{ product?.price }} $</span>
                                <!-- <v-rating readonly color="amber" density="compact" half-increments :length="5" size="small"
                                    :model-value="0" active-color="amber" class="ml-2" /> -->
                            </div>
                            <!-- <v-btn @click="save(product!)" size="35" color="primary" variant="flat" class="text-none">
                                <v-icon>mdi-heart{{ saved_item(product?._id!) ? '' : '-outline' }}</v-icon>
                            </v-btn> -->
                        </v-card-text>
                        <v-card-text class="px-0 pb-0">
                            <span>{{ $t('products.information') }}</span>
                            <v-table density="compact" hover class="rounded mt-3 border">
                                <tbody>
                                    <tr>
                                        <td>{{ $t('products.category') }}</td>
                                        <td class="text-right">{{ product?.category[`name_${$i18n.locale as 'uz'}`] }}</td>
                                    </tr>
                                    <tr>
                                        <td>{{ $t('products.condition') }}</td><td class="text-right">{{ $t('condition.'+product?.condition) }}</td>
                                    </tr>
                                    <tr>
                                        <td>{{ $t('products.year') }}</td><td class="text-right">{{ product?.year }}</td>
                                    </tr>
                                    <tr>
                                        <td>{{ $t('products.shipping') }}</td>
                                        <td class="text-right">
                                            <div class="d-flex align-center gap-1 justify-end">
                                                <v-avatar size="30">
                                                    <v-img alt="flag" cover :src="countries[product?.shipping_from!]?.flag"></v-img>
                                                </v-avatar>
                                                <span>{{ countries[product?.shipping_from!]?.name }}</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{{ $t('products.sales_area') }}</td><td class="text-right">
                                            <v-menu transition="fade-transition" :open-on-hover="true">
                                                <template #activator="{props}">
                                                    <span v-bind="props">{{ product?.sales_areas?.length }} стран</span>
                                                </template>
                                                <v-list nav density="compact">
                                                    <v-list-item v-for="cn,i in product?.sales_areas" :key="i">
                                                        <template #prepend>
                                                            <v-avatar rounded>
                                                                <v-img alt="flag" :src="countries[cn]?.flag"></v-img>
                                                            </v-avatar>
                                                        </template>
                                                        <template #title>{{ countries[cn]?.name }}</template>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{{ $t('products.brand') }}</td><td class="text-primary text-right">{{ product?.brand?.name }}</td>
                                    </tr>
                                    <tr>
                                        <td>{{ $t('products.model') }}</td><td class="text-right">{{ product?.model }}</td>
                                    </tr>
                                    <tr>
                                        <td>{{ $t('products.warranty') }}</td><td class="text-right">{{ product?.warranty }}</td>
                                    </tr>
                                    <tr>
                                        <td>{{ $t('products.created') }}</td><td class="text-right">{{ new Date(product?.created_at!).toLocaleDateString() }}</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-card-text>
                        <v-card-text class="px-0">
                            <span>{{ $t('products.contact_us') }}</span>
                            <v-row class="pa-2 mt-0">
                                <v-col cols="6" md="4" class="pa-1">
                                    <v-btn href="https://t.me/Keshmed37" height="35" prepend-icon="mdi-send" block color="#0088cc" variant="flat" class="text-none">
                                        {{ $t('products.telegram') }}
                                    </v-btn>
                                </v-col>
                                <v-col cols="6" md="4" class="pa-1">
                                    <v-btn href="tel:+998908893700" height="35" prepend-icon="mdi-phone" block color="green" variant="flat" class="text-none">
                                        {{ $t('products.call') }}
                                    </v-btn>
                                </v-col>
                                <v-col cols="12" md="4" class="pa-1">
                                    <v-btn @click="dialog=true" height="35" prepend-icon="mdi-cart" block color="primary" variant="flat" class="text-none">
                                        {{ $t('products.order') }}
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-skeleton-loader>
            </v-col>
            <v-col cols="12" sm="6">
                <v-skeleton-loader :loading="loading" type="sentences,avatar, paragraph" min-height="100%">
                    <v-card flat border width="100%">
                        <v-card-text class="text-primary pb-0 text-body-1">{{ $t('products.characteristics') }}</v-card-text>
                        <v-card-text class="pt-2 px-0">
                            <v-table density="compact" hover>
                                <tbody>
                                    <tr v-for="c,i in product?.characteristics" :key="i">
                                        <td>{{ c.title[$i18n.locale as 'uz'] }}</td><td class="text-right">{{ c.value[$i18n.locale as 'uz'] }}</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-card-text>
                    </v-card>
                </v-skeleton-loader>
            </v-col>
            <v-col cols="12" sm="6">
                <v-skeleton-loader :loading="loading" type="sentences,avatar, paragraph" min-height="100%">
                    <v-card flat border width="100%">
                        <v-card-text class="text-primary pb-0 text-body-1">{{ $t('products.description') }}</v-card-text>
                        <v-card-text class="pt-2">
                            <span style="white-space: pre-line;">
                                {{ product?.[`description_${$i18n.locale as 'uz'}`] }}
                            </span>
                        </v-card-text>
                    </v-card>
                </v-skeleton-loader>
            </v-col>
            <v-col cols="12" v-if="!loading">
                <div class="w-100 d-flex pb-5 justify-space-between align-center">
                    <span class="text-primary">{{ $t('products.similar') }}</span>
                </div>
                
                <!-- <Splide :options="slideOptions">
                    <SplideSlide v-for="item,i in similarProduct" :key="i">
                        <AppProductCard :item="item" />
                    </SplideSlide>
                </Splide> -->
                <v-row>
                    <v-col cols="12" sm="6" md="4" lg="3" v-for="item,i in similarProduct" :key="i">
                        <AppProductCard :item="item" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-width="450" width="100%">
            <v-card>
                <v-card-title class="text-primary">{{ $t('products.send_order') }}</v-card-title>
                <v-card-text class="py-3 px-4">
                    <v-form ref="form">
                        <v-row>
                            <v-col cols="12" class="py-2">
                                <v-text-field v-model="review.first_name" class="border rounded" flat no-resize hide-details
                                    :rules="nameRule" density="comfortable" variant="solo" :placeholder="$t('products.first_name')" />
                            </v-col>
                            <v-col cols="12" class="py-2">
                                <v-text-field v-model="review.last_name" class="border rounded" flat no-resize hide-details
                                    :rules="nameRule" density="comfortable" variant="solo" :placeholder="$t('products.last_name')" />
                            </v-col>
                            <v-col cols="12" class="py-2">
                                <v-text-field v-model="review.phone" class="border rounded" flat no-resize hide-details
                                    :rules="nameRule" density="comfortable" variant="solo" :placeholder="$t('products.phone')" />
                            </v-col>
                            <v-col cols="12" class="py-2">
                                <v-textarea v-model="review.message" class="border rounded" flat no-resize hide-details
                                    :rules="nameRule" density="comfortable" variant="solo" :placeholder="$t('products.message')" />
                            </v-col>
                            <v-col cols="12" class="py-2">
                                <v-select :item-props="itemProps" :rules="nameRule" flat class="border rounded" density="compact" bg-color="surface" v-model="review.country" :items="countries" :placeholder="$t('products.country')" item-title="name" hide-details item-value="id" variant="solo" color="primary" />
                            </v-col>
                            <v-col cols="12" class="d-flex justify-end pt-1">
                                <v-btn :loading="save_loading" flat @click="handleReview" color="primary">{{ $t('products.send') }}</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>
    
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { countries } from '~/constants'
import type { IProduct } from '~/types'

const nameRule = [(v: any) => !!v || 'asdf']
const { lang } = useLang()
const { createOrder } = useOrders()
const { getProductById, getAllProducts } = useProducts()
const save_loading = ref(false)

const route = useRoute()
const dialog = ref(false)
const loading = ref(false)
const currentImage = ref(0)
const product = ref<IProduct|null>(null)
const similarProduct = ref<IProduct[]>([])
const form = ref<HTMLFormElement|null>(null)

const review = reactive<any>({
    checked: false,
    first_name: "",
    last_name: "",
    message: "",
    country: 232,
    phone: "",
})

definePageMeta({
    layout: 'index-layout',
})

const init = async () => {
    loading.value = true
    try {
        if(!route.params?.id) return
        const data: any = await getProductById(route.params.id as any, 'expand=images,category,brand')
        product.value = data
        // console.log(data);
        
        
        getSimilar(data.category.id, data.brand.id)
    } catch (error) {
        alert({'uz':"Bunday Qurilma topilmadi!", 'ru': "Данное оборудование не найдено!", en: "This Equipment not found!"}[lang.value])
        // navigateTo('/products', { external: true })
        console.log(error);
        
    } finally {
        loading.value = false
    }
}

const getSimilar = async (c: number, b: number) => {
    const data: any = await getAllProducts(`?category=${c}&brand=${b}&page=1&limit=10&expand=images,brand`)
    similarProduct.value = data.results
    // console.log(data.results);
}

const itemProps = (item: any) => {
    return {
        title: item.name,
        'append-avatar': item.flag,
    }
}
const handleReview = async () => {
    save_loading.value = true
    const { valid } = await form.value?.validate()
    if (!valid) return
    
    await createOrder({...review, product: product.value?.id})
    dialog.value = false
    alert({'uz':"Muvaffaqiyatli yuborildi!", 'ru': "Успешно отправлено!", en: 'Succesfully sended!'}[lang.value])
    Object.assign(review, {
        checked: false,
        first_name: "",
        last_name: "",
        message: "",
        country: 232,
        phone: "",
        product: null,
    })
    save_loading.value = false
}

await init()

useSeoMeta({
    title: product.value?.title_ru,
    ogTitle: () => product.value?.title_ru,
    ogDescription: product.value?.description_ru,
    ogImage: product.value?.images[0].image,
    description: product.value?.description_ru
})
</script>