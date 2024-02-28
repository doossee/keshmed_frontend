<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent width="250" :expand-on-hover="mobile">
    <v-list :lines="false" nav variant="flat">
        <v-list-item link v-for="link, i in admin_links" :key="i" :to="link.url" color="primary" base-color="transparent" exact>
            <template v-slot:prepend>
              <v-icon :icon="link.icon"></v-icon>
            </template>
            <v-list-item-title>{{ $t(link.title) }}</v-list-item-title>
        </v-list-item>
    </v-list>
    <template #append>
      <v-list :lines="false" nav variant="flat">
        <v-list-item link color="primary" base-color="transparent" @click="handleLogout">
          <template v-slot:prepend>
            <v-icon :icon="IoOutlineLogOut"></v-icon>
          </template>
          <v-list-item-title>{{ $t('admin.logout') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
    <v-btn position="absolute" elevation="1" v-if="!mobile" :icon="!rail ? AkChevronLeft : AkChevronRight" size="x-small" @click="rail = !rail" style="right: -15px"></v-btn>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { useDisplay } from "vuetify"
import { admin_links } from '../constants'
import { IoOutlineLogOut, AkChevronLeft, AkChevronRight } from '@kalimahapps/vue-icons'

const { mobile } = useDisplay()
const { logout } = useAuth()

const rail = ref(true)
const drawer = ref(true)

const handleLogout = () => {
  if(!confirm('Log out?')) return
  logout()
}

watch(mobile, () => mobile && (rail.value = true))
</script>