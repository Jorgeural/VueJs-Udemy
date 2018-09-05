<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="addQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
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
import Header from './components/Header.vue'

export default {
    components: {
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote,
        appHeader: Header
    },
    data () {
        return {
            quotes: ['Just a quote', 'anotherone'],
            maxQuotes: 10
        }
    },
    methods: {
        addQuote (data) {
            if(this.quotes.length < 10) {
                this.quotes.push(data);
            } else {
                alert('Delete a quote before adding another one')
            }
        },
        deleteQuote (data) {
            this.quotes.splice(data, 1);
        }
    }
}
</script>

<style>
</style>
