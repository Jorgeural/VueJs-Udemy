<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" :key="index">{{ quote }}</app-quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'
export default {
  props: ['quotes'],
  components: {
    appQuote: Quote
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
