<template>
    <router-view/>
</template>

<script>
export default {
    name: "App"
}
</script>


<style lang="scss">
a{
    color: black !important;
    text-decoration: none;
}
h1,.text-h1{
    font-weight: 300 !important;
    font-size: 96px;
    line-height: 120% !important;
}
h2,.text-h2{
    font-weight: 300 !important;
    font-size: 60px;
    line-height: 120% !important;
}
h3,.text-h3{
    font-weight: 400 !important;
    font-size: 48px;
    line-height: 120% !important;
}
h4,.text-h4{
    font-weight: 400 !important;
    font-size: 34px;
    line-height: 120% !important;
}
h5,.text-h5{
    font-weight: 400 !important;
    font-size: 24px;
    line-height: 120% !important;
}
h6,.text-h6{
    font-weight: 500 !important;
    font-size: 20px;
    line-height: 120% !important;
}
.v-button.v-size--default{
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
}
.v-button.v-size--large{
    font-weight: 500;
    font-size: 15px;
    line-height: 120%;
}
.v-button.v-size--small{
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
}
.v-button.v-size--x-large{
    font-weight: 500;
    font-size: 17px;
    line-height: 120%;
}
input{
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
}
.base--text{
    color: #0055A3;
}
.v-input{
    border-radius: 8px!important;
}
.v-input .mdi-close{
    font-size:16px;
    padding: 8px;
    border-radius: 8px!important;

}
.v-input .mdi-close:hover{
    color:white !important;;
    background-color: #7AA0CF;
}
.cursor-pointer{
    cursor:pointer;
}
.v-btn:hover{
    transform: translateY(-2px);
}
.my-shadow{
    box-shadow: 0px 12px 28px rgba(3, 21, 40, 0.12), 0px 8px 8px rgba(3, 21, 40, 0.04) !important;
}
.v-date-picker-table{
    .v-btn{
        &.v-btn-active{
            border-radius: 8px !important;
        }
    }
}
.v-date-picker-table .v-btn.v-btn--active{
    border-radius: 8px !important;
}
.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{
    transition:0.2s;
}

</style>
