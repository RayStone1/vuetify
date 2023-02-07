const state= {
    users:[
        {
            id:1,
            name:'Руслан',
            surname:'Чупанов',
            patronymic:'Русланович',
            email:'AlexandrinaAleksandriiskaya@garant.ru',
            role:'Аккаунт–менеджер',
            specialties:['МЧП','ГП','СП','УП','АП','УК','СП','АП']
        },
        {
            id:2,
            name:'Руслан',
            surname:'Чупанов',
            patronymic:'Русланович',
            email:'AlexandrinaAleksandriiskaya@garant.ru',
            role:'Аккаунт–менеджер',
            specialties:['МЧП','ГП','СП','АП']
        },
    ],
    edited_user:null,
}
const getters= {
    users (state) {
        return state.users
    },
}
const mutations= {
    SET_USER (state, value) {
        state.users = value
    }
}
const actions= {

}
export default  {
    state,mutations,getters,actions
}
