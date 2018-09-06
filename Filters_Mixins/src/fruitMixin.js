export const fruitMixin = {
  data () {
      return {
         fruits: ['Apple', 'Pear', 'Melon', 'Mango'],
         filterText: ''
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