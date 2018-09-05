<template>
    <div class="container">
        <app-new-quote @quoteAdded="addQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to delete it.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'

    export default {
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        },
        data () {
            return {
                quotes: [
                    'Just a quote'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            addQuote (data) {
                this.quotes.push(data);
            }
        }
    }
</script>

<style>
</style>
