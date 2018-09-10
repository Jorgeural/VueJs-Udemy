<template>
    <div>
        <h1>The User Page</h1>
        <button @click="goHome" class="btn btn-primary">Go Home</button>
        <button @click="goUsers" class="btn btn-primary">Users list</button>

        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        goHome () {
            this.$router.push({path: '/'})
        },
        goUsers () {
            this.$router.push({path: '/user'})
        }
    }
}
</script>
