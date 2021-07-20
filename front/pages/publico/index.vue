<template>
    <div class="pa-2">
        <v-card>
            <div class="pa-2 headline grey lighten-2  text-center">
                <img src="~/assets/logo1.png" alt="DATACOM" class="">
                <h5>SOLICITA TUS SERVICIOS</h5>
            </div>
            <v-card-text>
                <v-container>
                    <div class="text-center">
                        <img src="~/assets/logoentel.png" alt="DATACOM" width="250" class="right VuetifyLogo">
                    </div>
                    <v-row>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <div class="text-center pa-2">
                <nuxt-link to="/publico/categoriaServ">
                    <v-btn outlined color="indigo">SERVICIOS</v-btn>
                </nuxt-link>
                <nuxt-link to="/publico/categoria">
                    <v-btn outlined color="indigo">CONSULTAS</v-btn>
                </nuxt-link>
            </div>
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
            listCategoria:[],
            desserts: [],
            modulo:{
                nombre:this.param
            },
            param:0
        }
    },
    async asyncData({$axios}) {
        const q = {query: `{allCategoriaServicios {
                                nodes {
                                    fechaInicio
                                    fechaVigencia
                                    id
                                    logo
                                    nombre
                                }
                            }}`};
        const datos = await $axios.$post(`${process.env.BASE_URL}/graphql`, q)
        try {
            //this.listCategoria = datos.data.allCategoriaServicios.nodes;
            return {listCategoria: datos.data.allCategoriaServicios.nodes};
        } catch (error) {
            console.log('Error', error)
        }
        /*const datos = await $axios.$post(`${process.env.BASE_URL}/modulos`,{headers: {'Ypfb-App-Access-Token' : process.env.API_KEY}})
        console.log(datos)
        try {
            return {desserts:datos.data};
        } catch (error) {
            console.log('Error', error)
        }*/
    }
}
</script>