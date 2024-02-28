<template>
    <v-container fluid class="py-0">
        <v-row justify="space-between" align="center">
            <v-col cols="9" sm="6" md="4" class="pb-0 pr-0">
                <v-text-field bg-color="surface" @update:modelValue="debounceSearch" :placeholder="$t('admin.search')" append-inner-icon="mdi-magnify" hide-details flat density="compact" variant="solo" class="border rounded"></v-text-field>
            </v-col>
            <v-col cols="3" sm="4" md="2" class="pb-0 d-flex justify-end">
                <v-btn @click="dialog=true" color="primary" size="40" width="100%">
                    <v-icon icon="mdi-plus" />
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-card flat border="">
                    <v-card-title class="px-4 pt-3 font-weight-light">{{ $t('products.brands') }}</v-card-title>
                    <v-card-text class="px-0">
                        <div class="responsive-datatable">
                            <v-data-table 
                            :page="page"
                            item-value="id"
                            :search="search"
                            :loading="loading"
                            hover :items="items" 
                            :items-per-page="perpage"
                            :no-data-text="$t('no_data')"
                            :loading-text="$t('loading')+'...'"
                            :headers="localizedHeaders" 
                            density="comfortable">
                            <template #bottom></template>
                            <template #item.actions="{ item, index, column }">
                                <td :data-label="column.title" class="d-flex justify-space-between align-center">
                                    <span></span>
                                    <div>
                                        <v-btn @click="editItem(item, index)" color="light-blue-accent-4" size="30" flat class="mr-1"><v-icon icon="mdi-pencil" /></v-btn>
                                        <v-btn @click="deleteItemConfirm(item.id!, index)" color="red" size="30" flat><v-icon icon="mdi-delete" /></v-btn>
                                    </div>
                                </td>
                            </template>
                            <template #item.photo="{item, column}">
                                <td :data-label="column.title">
                                <v-avatar size="40" rounded>
                                    <v-img :src="item.thumbnail||'/images/nophoto.jpg'" cover></v-img>
                                </v-avatar>
                                </td>
                            </template>
                            <template #item.name="{ item, column }">
                                <td :data-label="column.title">{{ item.name }}</td>
                            </template>
                            <template #item.country="{item, column}">
                                <td :data-label="column.title">
                                <v-list-item nav density="compact">
                                    <template #prepend>
                                        <v-avatar size="30">
                                            <v-img cover :src="countries[item.country!]?.flag"></v-img>
                                        </v-avatar>
                                    </template>
                                    <v-list-item-title>{{ countries[item.country!]?.name }}</v-list-item-title>
                                </v-list-item>
                                </td>
                            </template>
                            </v-data-table>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4" class="pt-0 pb-1 d-flex align-center">
                <v-select bg-color="surface" v-model="perpage" transition="fade-transition" hide-details flat density="compact" variant="solo" class="border rounded" :items="[10,25,50,100,150]"></v-select>
                <v-text-field bg-color="surface" variant="solo" class="border rounded ml-3" hide-details flat density="compact" :model-value="perpagetext" readonly></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="4" class="pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center">
                <v-pagination bg-color="surface" v-model="page" :length="Math.floor(totalCount / perpage)" @update:modelValue="loadItems" active-color="primary" size="40" total-visible="3" variant="flat"></v-pagination>
            </v-col>
        </v-row>
        <v-dialog persistent v-model="dialog" max-width="500px" transition="fade-transition">
            <v-card flat border="" color="background">
                <v-card-title class="px-4 py-3 d-flex justify-space-between align-center">
                <span class="font-weight-light">{{ $t(editedId?'admin.edit_brands':'admin.add_brands') }}</span>
                <v-btn flat @click="dialog=false" size="32" color="primary"><v-icon size="small" icon="mdi-close" /></v-btn>
                </v-card-title>

                <v-card-text class="px-4 pt-2 pb-3">
                <v-form class="w-100 form-card" ref="form">
                    <v-row class="pa-2">
                    <v-col cols="12" class="pa-2">
                        <v-text-field v-model="editedItem.name" :rules="nameRule"
                            :placeholder="$t('products.title')" hide-details density="compact" bg-color="surface"
                            color="primary" variant="solo" flat class="border rounded"
                        ></v-text-field>
                    </v-col>
                    <!-- <v-col cols="12" class="pa-2">
                        <v-select :item-props="itemProps" :rules="nameRule" flat class="border rounded" density="compact" bg-color="surface" v-model="editedItem.country" :items="countries" :placeholder="$t('products.country')" item-title="name" hide-details item-value="id" variant="solo" color="primary" />
                    </v-col> -->
                    <v-col cols="12" class="pa-2">
                        <v-row>
                            <v-col cols="4" sm="2" class="pr-0">
                                <v-avatar rounded size="40">
                                    <v-img cover :src="imageSrc"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col cols="8" sm="10" class="pl-0">
                                <v-file-input flat class="border rounded" density="compact" bg-color="surface" v-model="image" max="10" :label="$t('admin.photo')" hide-details variant="solo" color="primary" prepend-icon="" >
                                </v-file-input>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" class="pa-2">
                        <v-btn :disabled="save_loading" :loading="save_loading" color="primary" block @click="save" height="45">
                        {{ $t('admin.save') }}
                        </v-btn>
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
import type { IBrand } from '@/types'
import { countries } from '@/constants'

definePageMeta({
  layout: 'admin-layout',
  middleware: ['auth'],
})

const itemProps = (item: any) => ({ title: item.name, 'append-avatar': item?.flag })
const { createBrand, deleteBrand, getAllBrands, updateBrand } = useBrands()
const { debounce } = lodash

const { t } = useI18n()
const nameRule = [(v: any) => !!v || 'asdf']
const page = ref(1)
const perpage = ref(25)
const totalCount = ref(0)
const loading = ref(false)
const image = ref<any|null>(null)
const search: Ref<string> = ref("")
const items: Ref<IBrand[]> = ref([])
const editedId: Ref<any> = ref(null)
const editedIndex: Ref<any> = ref(-1)
const dialog: Ref<boolean> = ref(false)
const save_loading = ref(false)
const form = ref<HTMLFormElement|null>(null)

const headers = [
  { title: "admin.photo", key: "photo", sortable: false },
  { title: "products.title", key: "name" },
  { title: "admin.actions", align: 'end', key: "actions", sortable: false },
]
const editedItem = ref<any>({
  name: '',
//   country: null,
})
const imageSrc = computed(() => {
  if(image.value?.length > 0) return URL.createObjectURL(image.value[0])
  return '/images/nophoto.jpg'
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

watch(dialog, (v)=>v||close())

const editItem =  (item: IBrand, index: number) => {
  editedIndex.value = index
  editedId.value = item.id!
  editedItem.value = Object.assign({}, item)
  dialog.value = true
}
const deleteItemConfirm = async (id: number, index: number) => {
  if(!confirm('Do you delete this item?')) return
  await deleteBrand(id)
  items.value.splice(index, 1)
}
const close = () => {
    dialog.value = false
    nextTick(() => {
      editedItem.value = Object.assign({}, {
        name: '',
        country: null,
        description_uz: "",
        description_ru: "",
        description_en: "",
      })
      image.value = null
      editedId.value = null
      editedIndex.value = -1
    })
}
const save = async () => {
  save_loading.value = true
  const { valid } = await form.value?.validate();
  if (!valid) return

  var form_data = new FormData()

  Object.keys(editedItem.value).map((key: any) => {
    form_data.append(key, editedItem.value[key])
  })
  if(image.value) form_data.append('image', image.value[0])

  try {
    // TODO: cors from back end
    if (editedIndex.value > -1) {
    const data: any = await updateBrand(editedId.value as any, form_data)
    Object.assign(items.value[editedIndex.value], data)
    } else {
    const data: any = await createBrand(form_data)
    items.value.push(data)
    }
    close()
  } catch (error) {
    console.log(error)
  } finally {
    save_loading.value = false
  }
}
const loadItems = async () => {
  loading.value = true
  const data: any = await getAllBrands('')
  items.value = data.results
  totalCount.value = data.results.length
  loading.value = false
}

loadItems()
</script>