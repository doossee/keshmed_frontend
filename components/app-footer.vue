<template>
  <v-footer class="bg-grey-darken-4 d-flex flex-column pb-15 pb-md-5" absolute>
    <v-container class="py-0">
      <div class="mt-2 mb-4">
        <!-- <v-avatar size="100" rounded> -->
          <v-img width="150" src="/logo-white.png" alt="Footer logo"></v-img>
        <!-- </v-avatar> -->
      </div>
      <v-row class="mb-3">
        <v-col cols="6" sm="4" md="3">
          <app-footer-link :title="$t('footer.social_links')" :links="social_links" />
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <app-footer-link :title="$t('footer.site_links')" :links="navigation_links" />
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <div class="d-flex flex-column h-100 w-100 rounded overflow-hidden">
            <iframe title="geolocation" width="100%" height="240px" id="gmap_canvas"
              src="https://maps.google.com/maps?q=39.084234,66.838668&t=&z=18&ie=UTF8&iwloc=&output=embed"
              frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div class="text-center mt-2">{{ new Date().getFullYear() }} — <strong>Kesh Med</strong></div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { social_links, navigation_links } from '~/constants'
</script>