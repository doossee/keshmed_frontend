<template>
    <div class="d-flex flex-column justify-start" style="max-width: 200px;">
        <span>{{ props.title }}</span>
        <div class="d-flex flex-column mt-2">
            <a
                v-for="s,i in props.links"
                :key="i"
                :href="s.url"
                width="100%"
                class="mb-2 text-caption text-white text-decoration-none text-link text-left mt-1"
                >
                <v-icon class="mr-2" :icon="s.icon" />
                <span v-if="s.lang">{{ $t(s.title) }}</span>
                <span v-else>{{ s.title }}</span>
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: String,
    links: [Object]
})
</script>