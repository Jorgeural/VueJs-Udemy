<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has Id: {{ id }}</p>
        <router-link tag="button" :to="{name: 'userEdit', params: {id: id}}">Edit User</router-link>
    </div>
</template>
<script>
export default {
    data () {
        return {
            id: this.$route.params.id
        }
    }
}
</script>
