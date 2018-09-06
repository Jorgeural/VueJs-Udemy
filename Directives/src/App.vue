<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Global</h1>
                <p v-highlight:background="'lightblue'">Color this with args</p>
                <p v-highlight:background.delayed="'lightblue'">Color this with args and modifires</p>
                <p v-highlight="'green'">Color this</p>
                <hr>
                <h1>Directive registered locally</h1>
                <p v-local-highlight.blink="{mainColor: 'red', secondColor: 'green', delay: 2000}">Color this locally blinking</p>
                <p v-local-highlight.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 2000}">Color this locally delayed and blinking</p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind (el, binding, vnode) {
                    var delay = 0;

                    if (binding.modifiers['delayed']) {
                      delay = binding.value.delay;
                    }

                    if( binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor
                        let secondColor = binding.value.secondColor
                        let currentColor = mainColor
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
                                 if (binding.arg == 'background') {
                                   el.style.backgroundColor = currentColor
                                 } else {
                                   el.style.color = currentColor
                                }
                            },1000)
                         
                        } ,delay)
                    } else {
                         setTimeout(() => {
                          if (binding.arg == 'background') {
                            el.style.backgroundColor = binding.value.mainColor
                          } else {
                            el.style.color = binding.value.mainColor
                          }
                        } ,delay)
                    }
                }
            }
        }
    }
</script>

<style>

</style>
