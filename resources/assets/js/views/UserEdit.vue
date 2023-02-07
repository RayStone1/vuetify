<template>
    <div>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <v-container style="max-width:1074px">
            <v-row
                justify="space-between"
            >

                <v-col
                    cols="12"
                    md="5"
                >
                    <!--=====Профиль пользователя=====-->
                    <v-card class="form">
                        <v-card-title class="text-h5">
                            Профиль пользователя
                        </v-card-title>
                        <v-card-text>

                            <v-select
                                class=""
                                v-model="value"
                                :items="role"
                                outlined
                                label="Роль"
                                hide-details
                            />
                           <div>
                               <h6>Профиль активен</h6>
                               <v-switch
                                inset

                                on-icon="mdi-theme-light-dark"
                               >
                               </v-switch>
                           </div>


                        </v-card-text>
                    </v-card>
                    <!--=====Аватар профиля=====-->
                    <v-card class="my-shadow form">
                        <v-card-title class="text-h5">
                            Аватар профиля
                        </v-card-title>
                        <v-card-text class="text-center">
                            <v-avatar
                                class="my-6"
                                color="indigo"
                                size="216"
                            >
                                <span class="white--text text-h5">А.А</span>
                            </v-avatar>
                            <file-upload/>
                        </v-card-text>
                    </v-card>
                </v-col>
                <!--=====Личные данные=====-->
                <v-col
                    cols="12"
                    md="7"
                >
                    <v-card class=" my-shadow py-md-6 px-md-8 form">
                        <v-card-title class="">
                            <span class="text-h5" >Личные данные</span>
                        </v-card-title>
                        <v-card-text class="">
                            <!--Фамилия-->
                                <v-text-field
                                    class=""
                                    label="Фамилия"
                                    clearable
                                    name="login"
                                    outlined
                                    hide-details
                                />
                            <!--Имя-->
                                <v-text-field
                                    class=""
                                    label="Имя"
                                    clearable
                                    name="login"
                                    outlined
                                    hide-details
                                />
                            <!--Отчество-->
                            <v-text-field
                                class=""
                                label="Отчество"
                                clearable
                                name="login"
                                outlined
                                hide-details
                            />
                            <div class="d-flex align-center align-items-start my-6" style="height: 56px">
                                <v-btn-toggle

                                    class="mr-4"
                                >
                                    <v-btn
                                        color="primary"
                                    >
                                        М
                                    </v-btn>
                                    <v-btn
                                        color="primary"
                                    >
                                        Ж
                                    </v-btn>

                                </v-btn-toggle>
                                <!--Дата рождения-->
                                <v-dialog
                                    ref="dialog"
                                    v-model="modal"
                                    :return-value.sync="date"
                                    persistent
                                    width="290px"

                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            class="date-birth"
                                            v-model="date"
                                            outlined
                                            label="Дата рождения"
                                            prepend-inner-icon="mdi-calendar"
                                            hide-details
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="date"
                                        scrollable
                                        :first-day-of-week="1"
                                        :show-current="false"
                                        no-title
                                        :max="new Date().toISOString().slice(0,10)"
                                        hint="MM/DD/YYYY format"
                                        color="primary"
                                        :active-picker.sync="activePicker"
                                        locale="ru"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="modal = false"
                                        >
                                            Отменить
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.dialog.save(date)"
                                        >
                                            Сохранить
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </div>

                            <!--Город-->
                            <v-text-field
                                class=""
                                label="Город"
                                clearable
                                name="city"
                                outlined
                                hide-details
                            />
                            <!--Часовой пояс-->
                            <v-text-field
                                class=""
                                label="Часовой пояс"
                                clearable
                                name="login"
                                outlined
                                hide-details
                            />
                        </v-card-text>
                        <v-card-title class="">
                            <span class="text-h5">Контактная информация</span>
                        </v-card-title>
                       <v-card-text class="">
                           <!--Телефон-->
                           <v-text-field
                               class=""
                               label="Телефон"
                               clearable
                               outlined
                               hide-details
                           />
                           <!--Email-->
                           <v-text-field
                               class=""
                               label="Email"
                               clearable
                               name="login"
                               outlined
                               hide-details
                           />
                       </v-card-text>

                    </v-card>

                </v-col>
                <!--=====Безопасность=====-->
                <v-col
                    cols="12"
                >
                    <v-card class="my-shadow form">
                        <v-card-title class="text-h5">
                            Безопасность
                        </v-card-title>
                        <v-card-text class="text-center">
                            <v-text-field
                                class=""
                                label="Новый пароль"
                                clearable
                                name="login"
                                outlined
                                hide-details
                            />
                            <v-text-field
                                class=""
                                label="Повтор пароля"
                                clearable
                                name="login"
                                outlined
                                hide-details
                            />
                        </v-card-text>
                    </v-card>

                </v-col>
                <!--=====Компетенции=====-->
                <v-col
                    cols="12"
                >
                    <v-card class="my-shadow form">
                        <v-card-title class="text-h5">
                            Мои компетенции
                        </v-card-title>
                        <v-card-text class="text-center">
                            <v-select
                                :items="specialties"
                                chips
                                label="Специализация"
                                multiple
                                outlined
                                clearable
                                hide-details
                            />
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </div>

</template>

<script>
export default {
    name: "UserEdit",
    components:{
        FileUpload:()=>import('../components/FileUpload')
    },

    data:()=>({
        items: [
            {
                text: 'Пользователи',
                disabled: false,
                href: '/',
            },
            {
                text: 'Сотрудники',
                disabled: false,
                href: '/',
            },
            {
                text: 'Профиль пользователя',
                disabled: true,
                href: '/',
            },
        ],
        specialties: [
            'Гражданское законодательство1',
            'Гражданское законодательство2',
            'Гражданское законодательство3',
            'Гражданское законодательство4',
            'Гражданское законодательство5',
            'Гражданское законодательство6',
            'Гражданское законодательство7',
            'Гражданское законодательство8',
            'Гражданское законодательство9'
        ],
        role: ['Аккаунт–менеджер', 'Эксперт'],
        value: null,
        date: null,
        activePicker:'YEAR',
        modal: false,
    }),
    watch:{
        modal (val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
        },
    }
}
</script>

<style scoped lang="scss">
.v-text-field input {
    font-size: 1em;
}
.v-card {
    &.form{
        margin: 20px 0;
        padding: 24px;
        border: 1px solid #84AAD9;
        .v-card__title{
            padding: 0px;
        }

        .v-card__text{
            padding: 0;
        }
        .v-text-field{
            margin: 24px 0;
        }

    }
}
.date-birth{
    input{
        background-color: red !important;
    }

}
</style>
