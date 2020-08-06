//instancia de objeto vuejs
var app = new Vue({

    //vue puede controlar al objeto con etiqueta app
    el: '#app',
    data: {
        //mensaje : 'Hola vue.js!'
        //arreglo
        lista: [
            { nombre: 'Juan Carlos', promedio: '10', estado: false },
            { nombre: 'Liliana Nataly', promedio: '17', estado: true },
            { nombre: 'Luis Alberto', promedio: '18', estado: true }

        ],
    }

})