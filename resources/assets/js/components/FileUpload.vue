<template>
    <div
        class="form-file active pa-6"
        :class="{ 'form-file__active':isDragover}"
        @drop.prevent="dropHandler($event)"
        @dragover.prevent="setIsDragOver(true)"
        @dragleave.prevent="setIsDragOver(false)"
    >
        <div class="subtitle-1 black--text" >Перетащите файлы или загрузите</div>
        <div class="subtitle-1 grey--text" >Поддерживаемые форматы: png, jpg</div>
        <v-btn
            color="primary"
            class="my-2"
            outlined
        >
            <label for="avatar"/>
            <input type="file" name="" id="avatar" class="" v-show="">
            <v-icon>mdi-plus</v-icon>
            Загрузить фото
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "FileUpload",
    data:()=>({
        isDragover:false,
    }),
    methods:{
        setIsDragOver(isDragover) {
            this.isDragover = isDragover;
        }
    }
}
</script>

<style scoped lang="scss">
.form-file{
    border: 1px dashed #4D5762;
    transition: 0.1s;
    &__active{
        border: 1px dashed red;
    }
    background-image: repeating-linear-gradient(0deg, #333333, #333333 10px, transparent 10px, transparent 20px, #333333 20px), repeating-linear-gradient(90deg, #333333, #333333 10px, transparent 10px, transparent 20px, #333333 20px), repeating-linear-gradient(180deg, #333333, #333333 10px, transparent 10px, transparent 20px, #333333 20px), repeating-linear-gradient(270deg, #333333, #333333 10px, transparent 10px, transparent 20px, #333333 20px);
    background-size: 3px 100%, 100% 3px, 3px 100% , 100% 3px;
    background-position: 0 0, 0 0, 100% 0, 0 100%;
    background-repeat: no-repeat;
}

</style>
