console.log("vue cargado");

var app = new Vue({
  el: '#curso',
  data: {
    curso: [
      { nombre: ""},
      { descripcion: ""},
      { fechain: ""},
      { fechain: ""},
    ]
  },
    methods:{
        addCurso: function (){
            app.curso.nombre ='hola'
            app.curso.descripcion=''
            app.curso.fechain=''
            app.curso.fechafin=''
        }
    }
});







