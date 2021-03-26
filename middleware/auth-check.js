export default function (contex) {
    contex.store.dispatch('initAuth', contex.req)
}