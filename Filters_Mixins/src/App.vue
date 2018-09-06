<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{ text }} No filter</p>
                <p>{{ text | toLower }} to lower locally registered</p>
                <p>{{ text | toUpper }} to upper globally registered</p>
                <hr>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="(fruit, index) in filteredFruits" :key="index"> {{ fruit }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
               text: 'Hello world!',
               fruits: ['Apple', 'Pear', 'Melon', 'Mango'],
               filterText: ''
            }
        },
        filters: {
            'toLower'(value) {
                return value.toLowerCase();
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                })
            }
        }   
    }
</script>

<style>

</style>
