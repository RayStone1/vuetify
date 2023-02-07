<template>
    <v-data-table
        :headers="headers"
        :items="users"
        sort-by="calories"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar
                flat
            >
                <v-text-field
                    class="main--input"
                    prepend-inner-icon="mdi-magnify"
                    label="Поиск"
                    outlined
                    hide-details
                    clearable
                ></v-text-field>
                <v-spacer/>
                <v-btn
                    color="primary"
                    class="mt-6"
                >
                    <v-icon left>
                        mdi-filter-variant
                    </v-icon>
                    Фильтры
                </v-btn>
            </v-toolbar>
        </template>
        <template
            v-slot:item.specialties="{item}"
        >
            <v-chip
                class="ma-1 rounded-lg"
                color="secondary"
                text-color="primary"
                v-for="speciality in item.specialties"
                :key="speciality.name"
            >
                {{speciality}}
            </v-chip>

        </template>
        <template
            v-slot:item.role="{item}"
        >
            <v-chip
                class="ma-2 rounded-lg"
                color="violet"
                dark
            >
                {{item.role}}
            </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
            <router-link :to="{name:'user.edit',params:{id:item.id}}">
                <v-icon
                    small
                    class="mr-2"

                >
                    mdi-pencil
                </v-icon>
            </router-link>

        </template>
        <template v-slot:no-data>
            <v-btn
                color="primary"
                @click=""
            >
                Reset
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "UserTable",
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'ФИО Сотрудника',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            { text: 'Логин/E–mail', value: 'email' },
            { text: 'Роль', value: 'role' },
            { text: 'Специализация', value: 'specialties',width: "15%" },
            { text: '', value: 'actions', sortable: false },
        ],

    }),

    computed: {
        ...mapGetters(['users']),
    },

    watch: {

    },

    created () {

    },
    methods: {

    },
}
</script>

<style scoped>

</style>
