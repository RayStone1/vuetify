<template>
    <v-app>
        <main-header/>
        <v-main style="background-color: #F9FAFB" >
            <v-container fluid>
                <router-view/>
            </v-container>

        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "Main",
    components:{
        MainHeader:()=>import('../../components/MainHeader'),
    }
}
</script>

<style scoped>

</style>
