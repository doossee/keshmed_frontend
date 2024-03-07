<template>
    <v-container fluid class="py-0">
        <v-row justify="space-between" align="center">
            <v-col cols="9" sm="6" md="4" class="pb-0 pr-0">
                <v-text-field bg-color="surface" @update:modelValue="debounceSearch" :placeholder="$t('admin.search')"
                    append-inner-icon="mdi-magnify" hide-details density="compact" variant="solo" flat
                    class="border rounded"></v-text-field>
            </v-col>
            <v-col cols="3" sm="4" md="2" class="pb-0 d-flex justify-end">
                <v-btn @click="dialog = true" elevation="2" color="primary" size="40" width="100%">
                    <v-icon icon="mdi-plus" />
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-card flat border="">
                    <v-card-title class="px-4 pt-3">{{ $t('admin.products') }}</v-card-title>
                    <v-card-text class="px-0">
                        <div class="responsive-datatable">
                            <v-data-table-server :search="search" density="comfortable" :loading="loading" hover
                                :items-length="totalCount" :headers="localizedHeaders" :no-data-text="$t('no_data')"
                                :loading-text="$t('loading') + '...'" :items="items" item-value="id"
                                v-model:items-per-page="perpage" @update:options="loadItems">
                                <template #bottom></template>
                                <template #item.actions="{ item, index, column }">
                                    <td :data-label="column.title">
                                        <div class="d-flex w-100 justify-space-end align-center">
                                            <v-btn @click="editItem(index, item)" color="light-blue-accent-4" size="30" flat
                                                class="mr-1"><v-icon icon="mdi-pencil" /></v-btn>
                                            <v-btn @click="deleteItem(index, item.id!)" color="red" size="30"
                                                flat><v-icon icon="mdi-delete" /></v-btn>
                                        </div>
                                    </td>
                                </template>
                                <template #item.title="{ item, column }">
                                    <td :data-label="column.title">{{ item[`title_${$i18n.locale as "uz" | "en" | "ru"}`] }}
                                    </td>
                                </template>
                                <template #item.price="{ item, column }">
                                    <td :data-label="column.title">{{ item.price }} $</td>
                                </template>
                                <template #item.category="{ item, column }">
                                    <td :data-label="column.title">
                                        <v-chip class="text-caption" label density="compact" color="primary"
                                            v-if="item.category.id">{{ item.category[`name_${$i18n.locale as "uz"}`] || ''
                                            }}</v-chip>
                                    </td>
                                </template>
                                <template #item.brand="{ item, column }">
                                    <td :data-label="column.title">{{ item.brand.name }}</td>
                                </template>
                                <template #item.model="{ item, column }">
                                    <td :data-label="column.title">{{ item.model }}</td>
                                </template>
                                <template #item.warranty="{ item, column }">
                                    <td :data-label="column.title">{{ item.warranty }}</td>
                                </template>
                                <template #item.year="{ item, column }">
                                    <td :data-label="column.title">{{ item.year }}</td>
                                </template>
                                <template #item.shipping_from="{ item, column }">
                                    <td :data-label="column.title">
                                        <v-list-item nav density="compact">
                                            <template #prepend>
                                                <v-avatar size="30">
                                                    <v-img cover :src="countries[item.shipping_from]?.flag"></v-img>
                                                </v-avatar>
                                            </template>
                                            <v-list-item-title>{{ countries[item.shipping_from]?.name }}</v-list-item-title>
                                        </v-list-item>
                                    </td>
                                </template>
                                <template #item.condition="{ item, column }">
                                    <td :data-label="column.title">
                                        <v-chip density="compact" label
                                            :color="{ 'new': 'green', 'openbox': 'blue', 'refurbished': 'amber', 'used': 'red', }[item.condition as 'used']">{{
                                                $t('condition.' + item.condition) }}</v-chip>
                                    </td>
                                </template>
                                <template #item.for_sale="{ item, column }">
                                    <td :data-label="column.title">
                                        <v-chip density="compact" label :color="item.for_sale ? 'green' : 'red'">{{
                                            item.for_sale }}</v-chip>
                                    </td>
                                </template>
                            </v-data-table-server>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="5" class="pt-0 pb-1 d-flex align-center">
                <v-select bg-color="surface" v-model="perpage" transition="fade-transition" hide-details density="compact"
                    variant="solo" flat class="border rounded" :items="[10, 25, 50, 100, 150]"></v-select>
                <v-text-field bg-color="surface" hide-details density="compact" variant="solo" flat
                    class="border rounded ml-3" :model-value="perpagetext" readonly></v-text-field>
            </v-col>
            <v-col cols="12" sm="7" md="4" class="pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center">
                <v-pagination bg-color="surface" v-model="page" :length="Math.ceil(totalCount / perpage)"
                    @update:modelValue="loadItems" active-color="primary" size="40" total-visible="3"
                    variant="flat"></v-pagination>
            </v-col>
        </v-row>
        <v-dialog persistent v-model="dialog" width="500" transition="fade-transition">
            <v-card elevation="1" border color="background">
                <v-card-title class="px-4 py-3 d-flex justify-space-between align-center">
                    <span>{{ $t(editedId ? 'admin.edit_product' : 'admin.add_product') }}</span>
                    <v-btn flat @click="dialog = false" size="32" color="primary"><v-icon
                            size="small" icon="mdi-close" /></v-btn>
                </v-card-title>
                <v-card-text class="px-4 py-4">
                    <v-form class="w-100 form-card" ref="form">
                        <v-row class="pa-2">
                            <v-col cols="12" class="pa-2">
                                <v-label>Nomi (uz)</v-label>
                                <v-text-field v-model="product.title_uz" :rules="nameRule" placeholder="Nomi (uz)"
                                    hide-details density="compact" bg-color="surface" color="primary" variant="solo" flat
                                    class="border rounded"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="pa-2">
                                <v-label>Название (ru)</v-label>
                                <v-text-field v-model="product.title_ru" :rules="nameRule" placeholder="Название (ru)"
                                    hide-details density="compact" bg-color="surface" color="primary" variant="solo" flat
                                    class="border rounded"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="pa-2">
                                <v-label>Title (en)</v-label>
                                <v-text-field v-model="product.title_en" :rules="nameRule" placeholder="Title (en)"
                                    hide-details density="compact" bg-color="surface" color="primary" variant="solo" flat
                                    class="border rounded"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="pa-2">
                                <v-label>{{ $t('products.model') }}</v-label>
                                <v-text-field v-model="product.model" :rules="nameRule" :placeholder="$t('products.model')"
                                    hide-details density="compact" bg-color="surface" color="primary" variant="solo" flat
                                    class="border rounded"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" class="pa-2">
                                <v-label>{{ $t('products.price') }}</v-label>
                                <v-text-field density="compact" bg-color="surface" v-model="product.price" :rules="nameRule"
                                    flat class="border rounded" :placeholder="$t('products.price')" type="number"
                                    hide-details variant="solo" color="primary"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" class="pa-2">
                                <v-label>{{$t('products.condition')}}</v-label>
                                <v-select :rules="nameRule" flat class="border rounded" density="compact" bg-color="surface"
                                    v-model="product.condition" :items="conditions" :placeholder="$t('products.condition')"
                                    :item-title="'title_' + $i18n.locale" hide-details item-value="value" variant="solo"
                                    color="primary"></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" class="pa-2">
                                <v-label>{{$t('products.warranty')}}</v-label>
                                <v-text-field density="compact" bg-color="surface" v-model="product.warranty"
                                    :rules="nameRule" min="0" flat class="border rounded"
                                    :placeholder="$t('products.warranty')" type="number" hide-details variant="solo"
                                    color="primary"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" class="pa-2">
                                <v-label>{{ $t('products.year') }}</v-label>
                                <v-text-field density="compact" bg-color="surface" v-model="product.year" :rules="nameRule"
                                    min="1000" flat class="border rounded" :placeholder="$t('products.year')" type="number"
                                    hide-details variant="solo" color="primary"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="pa-2">
                                <v-label>{{ $t('products.category') }}</v-label>
                                <v-select flat class="border rounded" density="compact" bg-color="surface"
                                    v-model="product.category" :items="categories" :placeholder="$t('products.category')"
                                    :item-title="`name_${$i18n.locale}`" hide-details item-value="id" variant="solo"
                                    color="primary"></v-select>
                            </v-col>

                            <v-col cols="12" class="pa-2">
                                <v-label>{{ $t('products.brand') }}</v-label>
                                <v-select :rules="nameRule" flat class="border rounded" density="compact" bg-color="surface"
                                    v-model="product.brand" :items="brands" :placeholder="$t('products.brand')"
                                    item-title="name" hide-details item-value="id" variant="solo"
                                    color="primary"></v-select>
                            </v-col>
                            <v-col cols="12" class="pa-2">
                                <v-label>{{ $t('products.shipping') }}</v-label>
                                <v-select :item-props="itemProps" flat class="border rounded" density="compact"
                                    bg-color="surface" v-model="product.shipping_from" :items="countries"
                                    :placeholder="$t('products.shipping')" item-title="name" hide-details item-value="id"
                                    variant="solo" color="primary" />
                            </v-col>
                            <v-col cols="12" class="pa-2">
                                <v-label>{{ $t('products.sales_area') }}</v-label>
                                <v-autocomplete :item-props="itemProps" flat class="border rounded" density="compact"
                                    bg-color="surface" multiple chips v-model="product.sales_areas" :items="countries"
                                    :placeholder="$t('products.sales_area')" item-title="name" hide-details item-value="id"
                                    variant="solo" color="primary" />
                            </v-col>
                            <v-col cols="12" class="pa-2">
                                <v-label>Ma'lumot (uz)</v-label>
                                <v-textarea :rules="nameRule" no-resize flat class="border rounded" density="compact"
                                    bg-color="surface" v-model="product.description_uz" placeholder="Ma'lumot (uz)"
                                    hide-details color="primary" variant="solo"></v-textarea>
                            </v-col>
                            <v-col cols="12" class="pa-2">
                                <v-label>Описание (ru)</v-label>
                                <v-textarea :rules="nameRule" no-resize flat class="border rounded" density="compact"
                                    bg-color="surface" v-model="product.description_ru" placeholder="Описание (ru)"
                                    hide-details color="primary" variant="solo"></v-textarea>
                            </v-col>
                            <v-col cols="12" class="pa-2">
                                <v-label>Description (en)</v-label>
                                <v-textarea :rules="nameRule" no-resize flat class="border rounded" density="compact"
                                    bg-color="surface" v-model="product.description_en" placeholder="Description (en)"
                                    hide-details color="primary" variant="solo"></v-textarea>
                            </v-col>
                            <v-col cols="12" class="pa-2" v-for="c, i in product.characteristics" :key="i">
                                <v-table density="compact" class="border rounded pb-2">
                                    <thead>
                                        <tr>
                                            <td class="px-2">{{ $t('products.characteristics') }}</td>
                                            <td class="px-2 d-flex align-center justify-space-between">{{
                                                { 'uz': 'Qiymat', 'ru': 'Значение', 'en': 'Value' }[$i18n.locale] }} <v-btn
                                                    size="20" color="red" flat
                                                    @click="removeValue(i, 'characteristics')"><v-icon icon="mdi-delete" /></v-btn>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="px-2">
                                                <v-text-field v-model="c.title.uz" :rules="nameRule" placeholder="uz"
                                                    hide-details density="compact" bg-color="surface" color="primary"
                                                    variant="solo" flat class="border rounded"></v-text-field>
                                            </td>
                                            <td class="px-2">
                                                <v-text-field v-model="c.value.uz" :rules="nameRule" placeholder="uz"
                                                    hide-details density="compact" bg-color="surface" color="primary"
                                                    variant="solo" flat class="border rounded"></v-text-field>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="px-2">
                                                <v-text-field v-model="c.title.ru" :rules="nameRule" placeholder="ru"
                                                    hide-details density="compact" bg-color="surface" color="primary"
                                                    variant="solo" flat class="border rounded"></v-text-field>
                                            </td>
                                            <td class="px-2">
                                                <v-text-field v-model="c.value.ru" :rules="nameRule" placeholder="ru"
                                                    hide-details density="compact" bg-color="surface" color="primary"
                                                    variant="solo" flat class="border rounded"></v-text-field>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="px-2">
                                                <v-text-field v-model="c.title.en" :rules="nameRule" placeholder="en"
                                                    hide-details density="compact" bg-color="surface" color="primary"
                                                    variant="solo" flat class="border rounded"></v-text-field>
                                            </td>
                                            <td class="px-2">
                                                <v-text-field v-model="c.value.en" :rules="nameRule" placeholder="en"
                                                    hide-details density="compact" bg-color="surface" color="primary"
                                                    variant="solo" flat class="border rounded"></v-text-field>
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-col>
                            <v-col cols="12">
                                <v-btn @click="addCharasteristic" block color="primary" class="text-none" flat>{{
                                    $t('admin.add_charac') }}</v-btn>
                            </v-col>
                            <v-col cols="12" class="pa-2">
                                <v-row>
                                    <v-col cols="12" class="px-4">
                                        <label for="image-files"
                                            class="w-100 py-2 rounded bg-primary d-flex justify-center align-center"
                                            v-ripple>
                                            {{ $t('admin.add_image') }}
                                        </label>
                                        <v-file-input v-show="false" id="image-files" flat class="border rounded"
                                            density="compact" bg-color="surface" @change="pushImages" max="10"
                                            label="Фотография" multiple counter hide-details variant="solo" color="primary"
                                            prepend-icon=""></v-file-input>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-slide-group show-arrows>
                                            <v-slide-group-item v-for="image, n in images" :key="n">
                                                <div class="d-flex flex-column align-center mr-4 gap-1">
                                                    <v-avatar rounded size="80">
                                                        <v-img cover :src="getBlobImage(image)"></v-img>
                                                    </v-avatar>
                                                    <div class="d-flex align-center justify-space-between w-100">
                                                        <span class="text-caption">{{ image.name.slice(0, 8) }}...</span>
                                                        <v-btn size="20" color="red" flat @click="images.splice(n, 1)">
                                                            <v-icon size="small" icon="mdi-delete" />
                                                        </v-btn>
                                                    </div>
                                                </div>
                                            </v-slide-group-item>
                                        </v-slide-group>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12">
                                <v-slide-group show-arrows>
                                    <v-slide-group-item v-for="image, n in product.images" :key="n">
                                        <div class="d-flex flex-column align-center mr-4 gap-1">
                                            <v-avatar rounded size="80" color="grey-lighten-2">
                                                <v-img cover :src="image?.thumbnail"></v-img>
                                            </v-avatar>
                                            <div class="d-flex align-center justify-space-between w-100">
                                                <span>{{ n }}</span>
                                                <v-btn size="20" color="red" flat @click="removeValue(n, 'images')">
                                                    <v-icon size="small" icon="mdi-delete" />
                                                </v-btn>
                                            </div>
                                        </div>
                                    </v-slide-group-item>
                                </v-slide-group>
                            </v-col>
                            <v-col cols="4" class="pa-2">
                                <v-switch v-model="product.for_sale" hide-details density="compact" color="primary" inset
                                    :label="$t('admin.show')"></v-switch>
                            </v-col>
                            <v-col cols="4" class="pa-2">
                                <v-btn :disabled="save_loading" :loading="save_loading" color="primary" flat block @click="save" height="45">{{
                                    $t('admin.save') }}</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script setup lang="ts">
import lodash from 'lodash'
import { countries, conditions } from '@/constants'
import type { IProduct, ICategory, IBrand, IProductForm } from '@/types'

definePageMeta({
    layout: 'admin-layout',
    middleware: ['auth'],
})

const { t } = useI18n()
const { getAllProducts, createProduct, deleteProduct, sendImage, updateProduct } = useProducts()
const { getAllCategories } = useCategories()
const { getAllBrands } = useBrands()

const nameRule = [(v: any) => !!v || 'asdf']
const { debounce } = lodash
const page = ref(1)
const search = ref("")
const perpage = ref(25)
const totalCount = ref(0)
const loading = ref(false)
const images = ref<File[]>([])
const save_loading = ref(false)
const brands = ref<IBrand[]>([])
const items = ref<IProduct[]>([])
const dialog = ref<boolean>(false)
const categories = ref<ICategory[]>([])
const editedId = ref<any | null>(null)
const editedIndex = ref<number | null>(null)
const form = ref<HTMLFormElement | null>(null)

const itemProps = (item: any) => ({ title: item.name, 'append-avatar': item.flag })
const headers = [
    { title: "products.title", key: "title", sortable: false },
    { title: "products.price", key: "price", sortable: false },
    { title: "products.category", key: "category", sortable: false },
    { title: "products.brand", key: "brand", sortable: false },
    { title: "products.model", key: "model", sortable: false },
    { title: "products.condition", key: "condition", sortable: false },
    { title: "products.shipping", key: "shipping_from", sortable: false },
    { title: "products.warranty", key: "warranty", sortable: false },
    { title: "products.year", key: "year", sortable: false },
    { title: "admin.show", key: "for_sale", sortable: false },
    { title: "admin.actions", align: "end", key: "actions", sortable: false },
]
const product = ref<IProductForm | any>({
    brand: null,
    category: null,
    condition: 'new',
    for_sale: true,
    characteristics: [],
    model: '',
    price: null,
    sales_areas: [232,222,112,212,],
    shipping_from: null,
    warranty: null,
    year: 2000,
    description_en: '',
    description_ru: '',
    description_uz: '',
    title_en: '',
    title_ru: '',
    title_uz: '',
})
const addCharasteristic = () => {
    product.value.characteristics.push({
        title: { uz: "", ru: "", en: "" },
        value: { uz: "", ru: "", en: "" }
    })
}
const removeValue = (i: number, key: keyof IProductForm) => product.value[key].splice(i, 1)
const qs = computed(() => {
    const params = new URLSearchParams();

    if (page.value)
        params.append('page', String(page.value))

    if (perpage.value)
        params.append('limit', String(perpage.value))

    if (search.value.trim())
        params.append('search', search.value)

    return '?expand=category,images,brand&' + params.toString()
})
const perpagetext = computed(() => {
    const page_1 = (page.value - 1) * perpage.value;
    return `${page_1 + 1}-${page_1 + items.value.length} / ${totalCount.value}`
})
const localizedHeaders = computed(() => {
  return headers.map(h => ({...h, title: t(h.title)}))
})
const debounceSearch = debounce((e: string) => {
    search.value = e
    page.value = 1
}, 500)

const loadItems = async () => {
    loading.value = true
    const data: any = await getAllProducts(qs.value)
    items.value = data.results
    totalCount.value = data.count
    loading.value = false
}

const getBlobImage = (image: any) => {
    return URL.createObjectURL(image)
}

const pushImages = (e: any) => {
    images.value.push(...e.target.files)
}

const save = async () => {
    const { valid } = await form.value?.validate();
    if (!valid) return
    save_loading.value = true

    try {
        if (editedId.value) {
            if (typeof product.value.brand === "object") product.value.brand = (product.value.brand as any).id
            if (typeof product.value.category === "object") product.value.category = (product.value.category as any).id
            product.value.images?.map((im: any) => im.id)
            const data: any = await updateProduct(editedId.value, product.value)
            // console.log(data);
            
            Object.assign(items.value[editedIndex.value!], {
                ...data,
                category: categories.value.find(c => c.id === data.category),
                brand: brands.value.find(b => b.id === data.brand),
            })
        } else {
            const data: any = await createProduct(product.value)
            editedId.value = data.slug
            items.value.push({
                ...data,
                category: categories.value.find(c => c.id === data.category),
                brand: brands.value.find(b => b.id === data.brand),
            })
        }

        images.value && images.value.forEach(async (image) => {
            var form_data = new FormData()
            form_data.append('image', image)
            const d: any = await sendImage(editedId.value as any, form_data)
            Object.assign(items.value.find(p => p.id === d.product)!, {
                images: [...items.value.find(p => p.id === d.product)?.images || [],
                    d]
            })
        })
        close()
    } catch (error) {
        console.log(error);
    } finally {
        save_loading.value = false
    }


}

const editItem = (index: number, item: IProduct) => {
    editedId.value = item.slug!;
    editedIndex.value = index
    product.value = Object.assign({}, item) as any;
    dialog.value = true;
}

const deleteItem = async (i: number, id: number) => {
    if (!confirm("Ushbu malumotni o'chirmoqchimisiz?")) return

    await deleteProduct(id)

    items.value.splice(i, 1)
}

const close = () => {
    dialog.value = false;
    nextTick(() => {
        product.value = Object.assign({}, {
            brand: null,
            category: null,
            condition: 'new',
            for_sale: true,
            characteristics: [],
            model: '',
            price: null,
            sales_areas: [],
            shipping_from: null,
            warranty: null,
            year: 2000,
            description_en: '',
            description_ru: '',
            description_uz: '',
            title_en: '',
            title_ru: '',
            title_uz: '',
        }) as any;
        editedId.value = null;
        editedIndex.value = null
        images.value = []
        form.value?.reset()
    });
}

const init = async () => {
    const [c,b]: [any, any] = await Promise.all([getAllCategories(''),getAllBrands('')])
    categories.value = c.results
    brands.value = b.results
    // console.log(c, b);
    
}

init()
// COMPLETED product/id/ ?.image
// COMPLETED fix height of product:id of main big image
// COMPLETED remove navigation bar and add products button in app bar
// COMPLETED add phone circle button fixed
watch(dialog, (v) => v || close())
</script>