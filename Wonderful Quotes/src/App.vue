<template>
    <div class="container">
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
    export default {
        components: {
            appQuoteGrid: QuoteGrid
        },
        data () {
            return {
                quotes: [
                    'Just a quote'
                ],
                maxQuotes: 10
            }
        }
    }
</script>

<style>
</style>
