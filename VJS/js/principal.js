//instancia de objeto vuejs
var app = new Vue({

    //vue puede controlar al objeto con etiqueta app
    el: '#app',
    data: {
        //mensaje : 'Hola vue.js!'
        //arreglo
        lista: [
            // { nombre: 'Juan Carlos', promedio: '10', estado: false },
            // { nombre: 'Liliana Nataly', promedio: '17', estado: true },
            // { nombre: 'Luis Alberto', promedio: '18', estado: true }

        ],
        nombre: '',
        promedio: ''
    },

    //metodos
    methods: {
        agregarNota: function () {
            estadoA = false;
            if (this.promedio >= 12.5) {
                estadoA = true;
            }
            if (this.nombre != "" && this.promedio != "") {
                this.lista.push({ nombre: this.nombre, promedio: this.promedio, estado: estadoA });
                this.nombre="";
                this.promedio="";
        
            } else {
                alert("Ingrese el nombre y promedio del estudiante");
            }
        }
    },

})