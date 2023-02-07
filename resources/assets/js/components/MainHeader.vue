<template>
    <v-app-bar
        app
        color="white"
        flat
    >
            <v-btn
                v-for="link in links"
                :key="link.name"
                text
            >
                {{ link.name }}
            </v-btn>

            <v-spacer></v-spacer>

            <v-responsive max-width="260">
                <v-text-field
                    dense
                    flat
                    hide-details
                    rounded
                    solo-inverted
                ></v-text-field>
            </v-responsive>
    </v-app-bar>
</template>

<script>
export default {
    name: "MainHeader",
    data:()=>({
        links: [
            {name:'Главная',route:'/',icon:"mdi-home"},
        ],
        drawer: false,
        group:null
    }),
}
</script>

<style scoped>

</style>
