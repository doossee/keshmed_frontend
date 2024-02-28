<template>
    <v-container fluid class="py-0">
      <v-row justify="space-between" align="center">
          <v-col cols="12" sm="6" md="4" class="pb-0">
              <v-text-field bg-color="surface" @update:modelValue="debounceSearch" :placeholder="$t('admin.search')" append-inner-icon="mdi-magnify" hide-details flat density="compact" variant="solo" class="border rounded"></v-text-field>
          </v-col>
          <v-col cols="12">
              <v-card flat border="">
                  <v-card-title class="px-4 pt-3 font-weight-light">{{ $t('admin.orders') }}</v-card-title>
                  <v-card-text class="px-0">
                      <div class="responsive-datatable">
                          <v-data-table-server v-model:items-per-page="perpage"
                              :search="search" :items-length="totalCount"
                              :loading="loading" :loading-text="$t('loading')+'...'" :no-data-text="$t('no_data')" hover
                              :items="items" item-value="id"
                              @update:options="loadItems"
                              :headers="localizedHeaders" density="comfortable">
                              <!--  -->
                              <template #bottom></template>
                              <template #item.name="{item, column}">
                                <td :data-label="column.title">{{ item.first_name }} {{ item.last_name }}</td>
                              </template>
                              <template #item.message="{item, column}">
                                <td :data-label="column.title">{{ item.message }}</td>
                              </template>
                              <template #item.product="{item, column}">
                                <td :data-label="column.title">{{ item.product?.[`title_${$i18n.locale as "uz"|"en"|"ru"}`] }}</td>
                              </template>
                              <template #item.phone="{item, column}">
                                <td :data-label="column.title">{{ item.phone }}</td>
                              </template>
                              <template #item.date="{item, column}">
                                <td :data-label="column.title">
                                  {{ (new Date(item.created_at!)).toLocaleString() }}
                                </td>
                              </template>
                              <template #item.status="{item, column, index}">
                                <td :data-label="column.title">
                                  <v-chip variant="flat" :disabled="item.checked" :color="item.checked?'green':'red'" @click="check(item.id!, index)">
                                    <v-icon>mdi-check{{ item.checked?"-all":"" }}</v-icon>
                                  </v-chip>
                                </td>
                              </template>
                          </v-data-table-server>
                      </div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="12" sm="5" class="pt-0 pb-1 d-flex align-center">
              <v-select bg-color="surface" v-model="perpage" transition="fade-transition" hide-details flat density="compact" variant="solo" class="border rounded" :items="[10,25,50,100,150]"></v-select>
              <v-text-field bg-color="surface" hide-details flat density="compact" variant="solo" class="border rounded ml-3" :model-value="perpagetext" readonly></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="4" class="pt-0 pl-0 pb-1 pr-2 d-flex justify-end align-center">
              <v-pagination bg-color="surface" v-model="page" :length="Math.ceil(totalCount / perpage)" @update:modelValue="loadItems" active-color="primary" size="40" total-visible="3" variant="flat"></v-pagination>
          </v-col>
      </v-row>
    </v-container>
</template>

<script setup lang="ts">
import lodash from 'lodash'
import type { IOrder } from '@/types'

definePageMeta({
  layout: 'admin-layout',
  middleware: ['auth'],
})

const { checkOrder, getOrders } = useOrders()
const { debounce } = lodash

const { t } = useI18n()
const search: Ref<string> = ref("")
const items: Ref<IOrder[]> = ref([])

const page = ref(1)
const perpage = ref(25)
const totalCount = ref(0)
const loading = ref(false)
const headers = [
  { title: "products.first_name", key: "name", sortable: false },
  { title: "admin.product", key: "product", sortable: false },
  { title: "products.phone", key: "phone", sortable: false },
  { title: "admin.order_message", key: "message", sortable: false },
  { title: "admin.date", key: "date", sortable: false },
  { title: "admin.status", key: "status", sortable: false },
]

const qs = computed(() => {
  const params = new URLSearchParams();

  if (page.value) 
      params.append('page', String(page.value))

  if (perpage.value) 
      params.append('limit', String(perpage.value))

  if (search.value.trim())
      params.append('search', search.value)

  return params.toString()
})
const localizedHeaders = computed(() => {
  return headers.map(h => ({...h, title: t(h.title)}))
})
const perpagetext = computed(() => {
  const page_1 = (page.value - 1) * perpage.value;
  return `${page_1 + 1}-${page_1 + items.value.length} / ${totalCount.value}`
})
const debounceSearch = debounce((e: string) => {
  search.value = e
  page.value = 1
}, 500)

const check = async (id: number, i: number) => {
  const data: any = await checkOrder(id, {
    country: items.value[i].country, 
    first_name: items.value[i].first_name,
    last_name: items.value[i].last_name,
    message: items.value[i].message,
    phone: items.value[i].phone,
    checked: true,
    product: items.value[i].product.id,
  })
  if(!data) return
  items.value[i].checked = true
  alert('Successfully checked order')
}

const loadItems = async () => {
  loading.value = true
  const data: any = await getOrders(qs.value)
  items.value = data.results
  totalCount.value = data.count
  loading.value = false
}
</script>