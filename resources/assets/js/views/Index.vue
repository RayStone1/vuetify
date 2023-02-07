<template>
    <div>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <div class="d-flex">
            <h4>Специалисты</h4>
            <v-spacer></v-spacer>
            <v-btn
                depressed
                color="primary"
            >
                <v-icon>
                    mdi-plus-box
                </v-icon>
                Добавить сотрудника
            </v-btn>
        </div>
        <user-table/>
    </div>
</template>

<script>
export default {
    name: "Index",
    components:{
        UserTable:()=>import('../components/UserTable')
    },
    data:()=>({
        items: [
            {
                text: 'Пользователи',
                disabled: false,
                href: '/',
            },
            {
                text: 'Специалисты',
                disabled: false,
                href: '/',
            },
        ],
    })
}
</script>

<style scoped>

</style>
