<template>
  <v-app-bar color="background" flat height="60">
    <div class="w-100 d-flex justify-start pl-4">
      <!-- <v-avatar size="100">
        <v-img src="/keshmed-logo.png"></v-img>  
      </v-avatar> -->
      <img src="/keshmed-logo.png" height="50" width="110" />  
    </div>
    <v-spacer></v-spacer>
    <template v-slot:append>
      <v-menu transition="fade-transition">
        <template v-slot:activator="{props}">
          <v-btn style="margin-right: 6px;" v-bind="props" flat size="40" variant="flat" color="primary" elevation="1">
            {{currentLang?.lang}}
          </v-btn>
        </template>

        <v-list elevation="2" density="compact">
          <v-list-item v-for="(item, i) in languages" link :key="i" @click="changeLang(item.lang)">
            <v-list-item-title class="text-caption" v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { languages } from '../constants'

const { locale } = useI18n()

const currentLang = computed(() => languages.find((l) => l.lang === locale.value))
const changeLang = (l: string) => {
  localStorage.setItem('language', l)
  locale.value = l
}
</script>