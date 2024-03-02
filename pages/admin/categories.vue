<template>
    <v-container fluid class="py-0">
      <v-row justify="space-between" align="center">
          <!-- <v-col cols="9" sm="6" md="4" class="pb-0 pr-0">
              <v-text-field bg-color="surface" v-model="search" :placeholder="t('admin.search')" append-inner-icon="mdi-magnify" hide-details flat density="compact" variant="solo" class="border rounded"></v-text-field>
          </v-col> -->
          <v-col cols="12" class="pb-0 d-flex justify-end" style="margin-top:1px;">
              <v-btn @click="dialog=true" color="primary" size="40" width="100%">
                  <v-icon icon="mdi-plus" />
              </v-btn>
          </v-col>
          <v-col cols="12">
              <v-card flat border="">
                  <v-card-title class="px-4 pt-3 font-weight-light">{{ $t('products.categories') }}</v-card-title>
                  <v-card-text>
                    <span v-show="items.length === 0 && !loading">{{ $t('no_data') }}</span>
                    <span v-show="loading">{{ $t('loading') }}...</span>
                    <Tree @addItem="addItem" @editItem="editItem" @deleteItem="deleteItem" :items="items" :locale="($i18n.locale as 'uz')" />
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
      <v-dialog persistent v-model="dialog" max-width="500px" transition="fade-transition">
        <v-card flat border="" color="background">
          <v-card-title class="px-4 py-3 d-flex justify-space-between align-center">
            <span class="font-weight-light">{{ $t(editedId?'admin.edit_categories':'admin.add_categories') }}</span>
            <v-btn flat @click="dialog=false" size="32" color="primary"><v-icon size="small" icon="mdi-close" /></v-btn>
          </v-card-title>
  
          <v-card-text class="px-4 pt-2 pb-3">
            <v-row class="pa-2">
              <v-col cols="12" class="pa-2">
                  <v-label>Nomi (uz)</v-label>
                  <v-text-field v-model="editedItem.name_uz" :rules="nameRule"
                      placeholder="Nomi (uz)" hide-details density="compact" bg-color="surface"
                      color="primary" variant="solo" flat class="border rounded"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-2">
                  <v-label>Название (ru)</v-label>
                  <v-text-field v-model="editedItem.name_ru" :rules="nameRule"
                      placeholder="Название (ru)" hide-details density="compact" bg-color="surface"
                      color="primary" variant="solo" flat class="border rounded"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-2">
                  <v-label>Title (en)</v-label>
                  <v-text-field v-model="editedItem.name_en" :rules="nameRule"
                      placeholder="Title (en)" hide-details density="compact" bg-color="surface"
                      color="primary" variant="solo" flat class="border rounded"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-2">
                  <v-label>{{ $t('admin.parent_category') }}</v-label>
                  <v-select v-model="editedItem.parent"
                    :items="all" :item-title="`name_${$i18n.locale}`" item-value="id"
                    :placeholder="$t('admin.parent_category')" hide-details density="compact" bg-color="surface"
                    color="primary" variant="solo" flat class="border rounded"
                  />
              </v-col>
              <v-col cols="12" class="pa-2">
                <v-btn color="primary" :disabled="save_loading"
                  :loading="save_loading"
                  block @click="save" height="45">
                  {{ $t('admin.save') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
</template>

<script setup lang="ts">
import type { ICategory } from '@/types'

definePageMeta({
  layout: 'admin-layout',
  middleware: process.client ? 'auth' : undefined,
})

const { getAllCategories, getTree, createCategory, deleteCategory, updateCategory } = useCategories()

const loading = ref(false)
const save_loading = ref(false)
const editedId: Ref<any> = ref(null)
// const search: Ref<string> = ref("")
const dialog: Ref<boolean> = ref(false)
const items: Ref<ICategory[]> = ref([])
const all: Ref<ICategory[]> = ref([])
const indexes: Ref<number[]> = ref([])
const nameRule = [(v: any) => !!v || 'asdf']
const editedItem = ref<ICategory>({
  parent: null,
  name_uz: "",
  name_ru: "",
  name_en: "",
  children: [],
});
const defaultItem = {
  parent: null,
  name_uz: "",
  name_ru: "",
  name_en: "",  
}

watch(dialog, (v)=>v||close())

const addItem = (index: number[], parent: number) => {
  editedItem.value.parent = parent
  indexes.value = index
  dialog.value = true
}

const editItem = (item: ICategory, index: number[]) => {
  indexes.value = index
  editedId.value = item.id!
  editedItem.value = Object.assign({}, item)
  dialog.value = true
}

const deleteItem = async (item: ICategory, index: number[]) => {
  if(!confirm('Do you delete this item?')) return
  if(index.length === 1)
    items.value.splice(index[0], 1)

  if(index.length === 2)
    items.value[index[0]].children.splice(index[1], 1)
      
  if(index.length === 3)
    items.value[index[0]].children[index[1]].children.splice(index[2], 1)

  await deleteCategory(item.id)
}

const close = () => {
  dialog.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem) as any
    editedId.value = null
    indexes.value = []
  })
}

const save = async () => {
  try {
    
    save_loading.value = true
    if (editedId.value !== null) {
      const data: any = await updateCategory(editedItem.value.id, editedItem.value)
      
      if(data.children) delete data.children
      // let data: any
      if(indexes.value.length === 1)
        Object.assign(items.value[indexes.value[0]], data)
        
      if(indexes.value.length === 2)
        Object.assign(items.value[indexes.value[0]].children[indexes.value[1]], data)
        
      if(indexes.value.length === 3)
        Object.assign(items.value[indexes.value[0]].children[indexes.value[1]].children[indexes.value[2]], data)
    
    } else {
      // let data: any
  
      const data: any = await createCategory(editedItem.value)
      console.log(data);
      all.value.push(data)
  
      if(indexes.value.length === 0)
        items.value.push({...data, children: []})
      
      if(indexes.value.length === 1)
        items.value[indexes.value[0]].children.push({...data, children: []})
        
      if(indexes.value.length === 2)
        items.value[indexes.value[0]].children[indexes.value[1]].children.push({...data, children: []})
  
      if(indexes.value.length === 3)
        items.value[indexes.value[0]].children[indexes.value[1]].children[indexes.value[2]].children.push({...data, children: []})
    }
    close()
  } catch (error) {
    console.log(error);
  } finally {
    save_loading.value = false
  }
}

const loadItems = async () => {
  loading.value = true
  const data: any = await getTree()
  if(!data) return
  items.value = data
  loading.value = false
}

const init = async () => {
  const [tree,_]: any[] = await Promise.all([
    getAllCategories(''),
    loadItems()
  ])
  all.value = tree.results
}


init()
</script>