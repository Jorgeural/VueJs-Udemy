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
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import List from './List.vue'
import {fruitMixin} from './fruitMixin.js'

    export default {
        mixins: [fruitMixin],
        components: {
            appList: List
        },
        data () {
            return {
               text: 'Hello world!'
            }
        },
        filters: {
            'toLower'(value) {
                return value.toLowerCase();
            }
        }  
    }
</script>

<style>

</style>
