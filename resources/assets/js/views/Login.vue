<template>
    <v-app>
        <v-container fluid fill-height id="login-page">
            <v-layout align-center justify-center>
                <v-flex :style="{ 'max-width': '448px' }">
                    <div class="rounded-xl"></div>
                        <v-card class="pa-sm-11 rounded-xl my-shadow">
                            <v-card-text>
                                <div class="text-center mb-4">
                                    <v-img src="image/umarket-logo.svg" class="mx-auto" max-width="250"/>
                                </div>
                                <div v-if="errors" class="errors">
                                    <v-alert
                                        type="error"

                                        v-for="(val,name) in errors"
                                        :key="name"
                                        transition="scale-transition"
                                    >
                                        {{ val }}
                                    </v-alert>
                                </div>
                                    <v-text-field
                                        class="my-6"
                                        label="Электронная почта"
                                        name="login"
                                        outlined
                                        hide-details
                                    />
                                <v-text-field
                                    class="my-6"

                                    @click:append="passwordConfig.showPassword = !passwordConfig.showPassword"
                                    :append-icon="passwordConfig.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="passwordConfig.showPassword ? 'text' : 'password'"
                                    name="password"
                                    label="Пароль"
                                    outlined

                                    hide-details
                                ></v-text-field>
                                <v-btn
                                    class="rounded-lg"
                                    @click.prevent="login" dark x-large color="primary" block>Войти
                                </v-btn>
                            </v-card-text>
                        </v-card>

                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
<script>
export default {
    name: "Login",
    metaInfo: {
        title: 'Авторизация',
    },
    data :()=>({
        user:{
            login:null,
            password:null,
        },
        passwordConfig:{
            showPassword:false,
        },
        errors:null,
    }),
    methods:{
        login(){
            this.errors={
                'user':'Пользователь не найден',
            }
            // this.$router.push({name:"index"}).catch(err => {})
        }
    }
}
</script>

<style scoped>
.v-sheet.v-card:not(.v-sheet--outlined){
    box-shadow: 0px 12px 28px rgba(3, 21, 40, 0.12), 0px 8px 8px rgba(3, 21, 40, 0.04);
}
</style>
