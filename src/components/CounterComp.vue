<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct Access: {{ $store.state.counter.count }} </h2>
    <h2>Computer Access: {{ countComputed }} </h2>

    <button @click="increment" >+1</button>
    <button @click="incrementBy" >+5</button>
    <button @click="randomInt" :disabled="isLoading" >+Random</button>
    <button @click="incrementRandomInt" :disabled="isLoading">+Random2</button>

    <h2>MapState Count: {{ count }} </h2>
    <!-- <h2>MapState Counter: {{ counter }} </h2> -->
    <h2>MapState lastMutation: {{ lastMutation }} </h2>

    <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script lang="ts">
import { mapState, mapActions, mapGetters } from 'vuex'

export default {

    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count', 'lastMutation', 'isLoading']),
        // ...mapState(counter, {
        //     counter: (state: { count: any; }) => state.count,
        //     lastMutation: (state: { lastMutation: any; }) => state.lastMutation,
        // })
    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy', 5)
        },
        ...mapActions('counter', ['incrementRandomInt']),
        ...mapActions('counter', {
            randomInt: 'incrementRandomInt'
        })
        // incrementRandom() {
        //     this.$store.dispatch('incrementRandomInt')
        // }
    },
}

</script>

<style lang="scss" scoped>


</style>