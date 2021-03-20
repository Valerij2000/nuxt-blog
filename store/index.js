import axios from 'axios'


export const state = () => ({
    postsLoaded: [],
    commentsLoaded: [],
    mailLoaded: [],
    token: '',
})

export const mutations = {

    setPosts (state, posts) {
        state.postsLoaded = posts;
    },


    addPost (state, post) {
        // console.log(post);
        state.postsLoaded.unshift(post);
    },


    editPost (state, postEdit) {
        const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id);
        state.postsLoaded[postIndex] = postEdit;
    },

    addComment (state, comment) {
        console.log(comment);
        state.commentsLoaded.push(comments);
    },

    addMail (state, mail) {
        state.mailLoaded.push(mail);
    },

    setToken (state, token) {
        state.token = token;
    },

    destroyToken (state) {
        state.token = null;
    },
    

}


export const actions = {

    nuxtServerInit ({commit}, contex) {
        return axios.get('https://blog-nuxt-55ce5-default-rtdb.firebaseio.com/posts.json')
        .then((res) => {
            // console.log(res);
            const postsArray = [];
                for(let key in res.data) { 
                    postsArray.unshift({ ...res.data[key], id: key })
                }
                commit('setPosts', postsArray);
        })
            .catch((error) => {
                console.log(error);
        })
    },

    authUser ({commit}, authData) {
        const key = 'AIzaSyCr37vGqiSdI68Vk_I4UMD_g0NGOvE_swI'
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {  
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
         })
            .then((res) => {
                commit('setToken', res.data.idToken)
            })
    },


    logoutUser ({commit}) {
        commit('destroyToken')
    },



    addPost ({commit, state}, post) { 
    // console.log(post);
    return axios.post(`https://blog-nuxt-55ce5-default-rtdb.firebaseio.com/posts.json?auth${state.token}`, post)
        .then((res) => {
            // console.log(res);
            commit('addPost', { ...post, id: res.data.name });
        })
            .catch((error) => {
                console.log(error);
            })
    },
    
    
    editPost ({commit, state}, post) {
        return axios.put(`https://blog-nuxt-55ce5-default-rtdb.firebaseio.com/posts/${post.id}.json?auth${state.token}`, post)
            .then((res) => {
                commit('editPost', post);
            })
                .catch((error) => {
                    console.log(error);
                })
    },


    addComment ({commit}, comment) {
        return axios.post('https://blog-nuxt-55ce5-default-rtdb.firebaseio.com/comments.json', comment)
        .then((res) => {
            // console.log(res);
            commit('addComment', { ...comment, id: res.data.name });
        })
            .catch((error) => {
                console.log(error);
            })
    },


    addMail ({commit}, mail) {
        return axios.post('https://blog-nuxt-55ce5-default-rtdb.firebaseio.com/mailes.json', mail)
            .then((res) => {
                // console.log(res);
                commit('addMail', mail);
            })
                .catch((error) => {
                    console.log(error);
                })
    },


}


export const getters = {
    getPostsLoaded (state) {
        return state.postsLoaded;
    },

    getToken (state) {
        return state.token;
    },

}