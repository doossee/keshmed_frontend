<template>
<v-app-bar theme="light" flat color="background">
    <v-container class="d-flex align-center justify-space-between">
        <div class="d-flex ga-2" v-if="mobile">
            <v-btn v-if="route.path!=='/'" height="28" color="primary" class="text-none text-body-2 font-weight-light" variant="outlined" to="/" exact>
                {{ $t('links.home') }}
            </v-btn>
            <v-btn v-else height="28" color="primary" class="text-none text-body-2 font-weight-light" variant="outlined" to="/products" exact>
                {{ $t('links.products') }}
            </v-btn>
        </div>
        <div class="d-flex ga-2" v-else>
            <v-btn height="28" color="primary" class="text-none text-body-2 font-weight-light" variant="text" to="/" exact>
                {{ $t('links.home') }}
            </v-btn>
            <v-btn height="28" color="primary" class="text-none text-body-2 font-weight-light" variant="text" to="/products" exact>
                {{ $t('links.products') }}
            </v-btn>
        </div>
        <nuxt-link to="/" class="text-h6 text-primary text-decoration-none py-1">
            <img src="/keshmed-logo.png" width="100" height="45" alt="site-logo">
        </nuxt-link>

        <div class="d-flex align-center gap-1">
            <v-btn v-show="!mobile" href="tel:+998908893700" color="primary" height="28" prepend-icon="mdi-phone" variant="text" class="text-none text-body-2 font-weight-light mr-1">
                <span>+998 (90) 889 37 00</span>
            </v-btn>
            <v-menu location="bottom center" transition="fade-transition">
                <template #activator="{props}">
                    <v-btn color="primary" height="28" v-bind="props" variant="outlined" class="text-none text-body-2 font-weight-light">
                        <template #prepend>
                            <v-avatar rounded size="20" v-show="!mobile">
                                <v-img :src="currentLang?.img" alt="sile-languages-choice"></v-img>
                            </v-avatar>
                        </template>
                        <span>{{ currentLang?.title }}</span>
                    </v-btn>
                </template>
                <v-list density="compact" nav>
                    <v-list-item link v-for="lang, i in languages" :key="i" @click="changeLang(lang.lang)">
                        <template #prepend>
                            <v-avatar rounded size="30">
                                <v-img :src="lang.img" alt="sile-languages-choice"></v-img>
                            </v-avatar>
                        </template>
                        <v-list-item-title>{{ lang.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-container>
</v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { languages } from '~/constants'

const route = useRoute()
const { locale } = useI18n()

const currentLang = computed(() => languages.find((l) => l.lang === locale.value))
const changeLang = (l: string) => {
  localStorage.setItem('language', l)
  locale.value = l
}

const { mobile } = useDisplay()
</script>