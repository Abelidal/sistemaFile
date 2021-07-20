<template>
  <div class="pa-2">
        <v-card>
            <div class="pa-2 headline grey lighten-2  text-center">
                LO QUE NECESITAS ESTÁ AQUI
            </div>
            <v-card-text>
                <v-container>
                    <div class="text-center">
                        <img src="~/assets/logo.png" alt="DATACOM" width="250" class="right VuetifyLogo">
                    </div>
                    
                    <v-row>
                        <v-btn text>
                            <v-icon left x-large>{{ rowServicio.categoria.logo }}</v-icon> {{ rowServicio.categoria.nombre }}
                        </v-btn>
                        <v-col cols="12" sm="12" md="12">
                            <h3 class="text-center"><v-btn class="text" text>{{rowServicio.servicio }}</v-btn></h3>
                            <div><RenderString v-html="html" /></div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <h3>REQUISITOS:</h3>
                    </v-row>
                    <v-row>
                        <v-list>
                            <v-list-item-group>
                                <a href="javascript:void(0)" v-for="row in listRequisitos" :key="row.id">
                                    - {{ row.descripcion }}<br/>
                                </a>
                            </v-list-item-group>
                        </v-list>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <nuxt-link :to="rutaFormulario">
                    <v-btn outlined color="indigo">Realiza tu Contrato</v-btn>
                </nuxt-link>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
import compCreate from '@/components/admin/modulo/CompCreate'
import compEdit from '@/components/admin/modulo/CompEdit.vue'
export default {
    head() {
      return {
        title: this.title,
      }
    },
    components:{
        'comp-create':compCreate,
        'comp-edit':compEdit
    },
    auth: false,
    prefetchLinks: false,
    data () {
        return {
            title:'Datos Personales',
            rowServicio:{},
            rutaFormulario:'./',
            listRequisitos:[],
            desserts: [],
            html:'...',
            modulo:{
                nombre:this.param
            },
            param:0
        }
    },
    async asyncData({$axios}) {
        var URLactual = window.location;
        var arrayUri = (URLactual.href).split("?");
        const q = {query: `{
            servicioById(id:"${arrayUri[1]}"){id servicio promocion categoria:categoriaServicioByCategoriaId{nombre, logo}}
            allRequisitosServicios(condition:{servicioId:"${arrayUri[1]}" estado:"C"}){nodes{id requerido descripcion}}
        }`};
        const datos = await $axios.$post(`${process.env.BASE_URL}/graphql`, q)
        var newRowServicio = datos.data.servicioById;
        //const newHtml = await fetch('..'+newRowServicio.descripcion).then(res => res.text());
        //console.log("-------", newHtml)
        try {
            return {
                rowServicio: newRowServicio,
                listRequisitos: datos.data.allRequisitosServicios.nodes
                //,html: newHtml
            };
        } catch (error) {
            console.log('Error', error)
        }
    },
    async created(){
        var URLactual = window.location;
        var arrayUri = (URLactual.href).split("?");
        const q = {query: `{
            servicioById(id:"${arrayUri[1]}"){id servicio formulario promocion categoria:categoriaServicioByCategoriaId{nombre, logo}}
            allRequisitosServicios(condition:{servicioId:"${arrayUri[1]}" estado:"C"}){nodes{id requerido descripcion}}
        }`};
        const datos = await this.$axios.$post(`${process.env.BASE_URL}/graphql`, q)
        try {
            this.rowServicio = datos.data.servicioById;
            this.rutaFormulario = datos.data.servicioById.formulario;
            this.listRequisitos = datos.data.allRequisitosServicios.nodes;
        } catch (error) {
            console.log('Error', error)
        }
    }
}
</script>