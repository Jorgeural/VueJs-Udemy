<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label for="quote">Quote</label>
        <textarea class="form-control" name="quote" id="" cols="30" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quote: ''
    }
  },
  methods: {
    createNew () {
      this.$emit('quoteAdded', this.quote);
      this.quote = '';
    }
  }
}
</script>

<style>

</style>
