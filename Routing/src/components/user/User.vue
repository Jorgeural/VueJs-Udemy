<template>
    <div>
        <h1>The User Page</h1>
        <button @click="goHome" class="btn btn-primary">Go Home</button>
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
        }
    }
}
</script>
