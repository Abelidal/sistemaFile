<template>
    <div class="pa-2">
        <v-card>
            <div class="pa-2 headline grey lighten-2  text-center">
                AGENDAREMOS LA FIRMA DE TU CONTRATO
            </div>
            <v-card-text>
                <v-container>
                    <div class="text-center">
                        <img src="~/assets/LOGO ENTEL.png" alt="DATACOM" width="250" class="right VuetifyLogo">
                    </div>
                    <v-row>
                        <v-col class="pa-1" cols="12" sm="12" md="4">
                            <v-text-field label="CI" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col class="pa-1" cols="12" sm="12" md="4">
                            <v-text-field label="Nombres" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col class="pa-1" cols="12" sm="12" md="4">
                            <v-text-field label="Apellidos" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col class="pa-1" cols="12" sm="12" md="4">
                            <v-select :items="ciudades" label="Ciudad" solo></v-select>
                        </v-col>
                        <v-col class="pa-1" cols="12" sm="12" md="4">
                            <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="date"
                                    label="Picker without buttons"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="date"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col class="pa-1" cols="12" sm="12" md="4">
                            <v-text-field label="Dirección" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col class="pa-1" cols="12" sm="12" md="4">
                            <v-select :items="ciudades" label="¿En qué ciudad te encuentras?" solo></v-select>
                        </v-col>
                        <v-col class="pa-1" cols="12" sm="12" md="4">
                            <v-select :items="multicentros" label="¿Qué multicentro te queda cerca?" solo></v-select>
                        </v-col>
                        <v-col class="pa-1" cols="12" sm="12" md="4">
                            <v-menu
                                ref="menu"
                                v-model="menu3"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="time"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="time"
                                    label="¿En qué horario puedes asistir a Multicentro?"
                                    prepend-icon="mdi-clock-time-four-outline"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                v-if="menu3"
                                v-model="time"
                                full-width
                                @click:minute="$refs.menu.save(time)"
                                ></v-time-picker>
                            </v-menu>
                        </v-col>
                        <v-row>
                            <div class="pa-2 headline grey lighten-2  text-center">
                               <h5>¿Necesitas atención preferencial?</h5>
                            </div>
                             <v-col class="pa-1" cols="12" sm="12" md="4">
                                    <v-checkbox v-model="ex4"
                                    label="Tercera Edad"
                                    color="indigo"
                                    value="red"
                                    hide-details
                                    ></v-checkbox>
                                    <v-checkbox v-model="ex4"
                                    label="Persona con Discapacidad"
                                    color="indigo"
                                    value="red"
                                    hide-details
                                    ></v-checkbox>
                                    <v-checkbox v-model="ex4"
                                    label="Persona Embarazada"
                                    color="indigo"
                                    value="red"
                                    hide-details
                                    ></v-checkbox>
                                    <v-checkbox v-model="ex4"
                                    label="Ninguno"
                                    color="indigo"
                                    value="red"
                                    hide-details
                                    ></v-checkbox>
                                    <v-col  class="pa-1" cols="12" sm="12" md="4">
                                        Por favor ingresa 2 números de telefono o celular para contactarnos contigo
                                    <v-text-field label="Telefono" hide-details="auto"></v-text-field>
                                    </v-col>
                                        <v-col class="pa-1" cols="12" sm="12" md="4">
                                            <v-text-field label="Telefono" hide-details="auto"></v-text-field>
                                    </v-col>
                            </v-col>
                        </v-row>
                    </v-row>
                    <br>
                  

                </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click=" dialog = false; editModulo()">
                    Guardar
                </v-btn>
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
            listCategoria:[],
            desserts: [],
            modulo:{
                nombre:this.param
            },
            param:0,
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
            time: null,
            menu3: false,
            modal2: false,
            ciudades:["BENI","COCHABAMBA", "LA PAZ", "PANDO", "SANTA CRUZ", "TARIJA"],
            multicentros:["CENTRO", "SOPOCACHI"]
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