<template>
    <v-app>
        <v-main>
            <v-container class="h-screen">
                <v-row justify="center" align="center" class="h-100">
                    <v-card border flat max-width="400" width="100%">
                        <div class="d-flex justify-center align-center py-4">
                            <img src="/keshmed-logo.png" width="130" height="60" alt="">
                            <!-- <v-avatar size="150" rounded>
                                <v-img  cover></v-img>
                            </v-avatar> -->
                        </div>
                        <v-card-title class="text-primary text-center mb-4">Войти в панель администратора</v-card-title>
                        <v-card-text class="text-red text-center py-0" v-if="err">Неправильный логин или пароль</v-card-text>
                        <v-card-text>
                            <v-form ref="form">
                                <v-row class="pa-2">
                                    <v-col cols="12" class="pa-2">
                                        <v-text-field v-model="user_login.username" :rules="nameRule"
                                            placeholder="Логин" hide-details density="compact" bg-color="surface"
                                            color="primary" variant="solo" flat class="border rounded"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" class="pa-2">
                                        <v-text-field v-model="user_login.password" :rules="nameRule"
                                            :append-inner-icon="show?'mdi-eye':'mdi-eye-off'"
                                            @click:append-inner="show=!show" :type="show?'text':'password'"
                                            placeholder="Пароль" hide-details density="compact" bg-color="surface"
                                            color="primary" variant="solo" flat class="border rounded"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" class="pa-2">
                                        <v-btn :disabled="loading" @click="handleLogin" block color="primary" flat>Войти в систему</v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
    
<script setup lang="ts">
const { login } = useAuth()
const nameRule = [(v: any) => !!v || 'asdf']

const show = ref(false)
const err = ref(false)
const loading = ref(false)
const form = ref<any>(false)
const user_login = reactive({
    username: "",
    password: ""
})

const handleLogin = async () => {
    err.value = false
    loading.value = true
    const { valid } = await form.value?.validate();
    if (!valid) return
    try {
        await login(user_login)
        Object.assign(user_login, {
            username: '',
            password: ''
        })
    } catch (error) {
        err.value = true
    } finally {
        loading.value = false
    }
}
</script>