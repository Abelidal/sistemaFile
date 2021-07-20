<template>
    <div class="pa-2">
        <v-card>
            <div class="pa-2 headline grey lighten-2  text-center">
                <h5>Plan Duo -- Elección de Planes y Datos Personales</h5>
            </div>
                <v-container>
                    <form>
                        <v-row no-gutters>
                            <v-col>
                                <v-select :items="items" v-model="duo.plan_id" label="Elige tu Plan"></v-select>
                            </v-col>
                            <v-col>
                                <v-select :items="items" v-model="duo.nros_beneficio_id" label="Líneas Beneficiaras"></v-select>
                            </v-col>
                        </v-row>
                        <v-col no-gutters>
                            <v-row>
                                <v-text-field label="Línea Beneficiaria 1" :rules="lineaBeneficio1" v-model="duo.lineaBeneficio1" hide-details="auto"></v-text-field>
                            </v-row>
                            <v-row>
                                <v-checkbox v-model="duo.checkboxMb_l1" label="Mb"></v-checkbox>
                            </v-row>
                            <v-row>
                                <v-checkbox v-model="duo.checkboxWhastapp_l1" label="Whatsapp"></v-checkbox>
                            </v-row>
                            <v-row>
                                <v-checkbox v-model="duo.checkboxMinutos_l1" label="Minutos"></v-checkbox>
                            </v-row>
                            <v-row>
                                <v-checkbox v-model="duo.checkboxSms_l1" label="Minutos"></v-checkbox>
                            </v-row>                        
                        </v-col>
                        <v-col no-gutters>
                            <v-col>
                                <v-text-field label="Línea Beneficiaria 2" :rules="lineaBeneficio2" v-model="duo.lineaBeneficio2" hide-details="auto"></v-text-field>
                            </v-col>
                            <v-row>
                                <v-checkbox v-model="duo.checkboxMb_l2" label="Mb"></v-checkbox>
                            </v-row>
                            <v-row>
                                <v-checkbox v-model="duo.checkboxWhastapp_l2" label="Whatsapp"></v-checkbox>
                            </v-row>
                            <v-row>
                                <v-checkbox v-model="duo.checkboxMinutos_l2" label="Minutos"></v-checkbox>
                            </v-row>
                            <v-row>
                                <v-checkbox v-model="duo.checkboxSms_l2" label="Minutos"></v-checkbox>
                            </v-row>      
                        </v-col>
                        <v-row no-gutters>    
                            <v-col>
                                <v-select :items="items" v-model="duo.genero_id" label="Género"></v-select>
                            </v-col>
                            <v-col>
                                <v-select :items="items" v-model="duo.estadoCivil_id" label="Estado Civil"></v-select>
                            </v-col>
                        </v-row>
                        
                        <v-col>
                            <v-text-field label="Nombre (s)" :rules="nombres" v-model="duo.nombres" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Apellido Paterno" :rules="apellidoPaterno" v-model="duo.apellidoPaterno" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Apellido Materno" :rules="apellidoMaterno" v-model="duo.apellidoMaterno" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Apellido Marital" :rules="apellidoMarital" v-model="duo.apellidoMarital" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-row no-gutters>
                            <v-select :items="items" v-model="duo.tipoDocumento_id" label="Tipo de Documento"></v-select>        
                        </v-row>

                        <v-row no-gutters>
                            <v-col>
                                <v-text-field label="Número de Documento" :rules="nroDocumento" v-model="duo.nroDocumento" hide-details="auto"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select :items="items" v-model="duo.lugarExpedicion_id" label="Lugar de Expedición"></v-select>
                            </v-col>
                        </v-row>
                       
                        <v-col>
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
                                    v-model="duo.date_id"
                                    label="Fecha de Nacimiento"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="date"
                                @input="menu2 = false"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>

                        <v-col>
                            <v-text-field :items="items" v-model="duo.correo" label="Correo Electrónico"></v-text-field>
                        </v-col>
                        
                        <div class="pa-2 headline grey lighten-2  text-center">
                            <h6>Dirección</h6>
                        </div>
                        <v-row>
                            <v-col>
                                <v-select :items="items" label="Departamento - Ciudad" v-model="duo.ciudad_id" hide-details="auto"></v-select>
                            </v-col>

                            <v-col>
                                <v-select :items="items" label="Provincia" v-model="duo.provincia_id" hide-details="auto"></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field :items="items" v-model="duo.zona" label="Zona / Barrio"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field :items="items" v-model="duo.calleAvenida" label="Calle o Avenida"  hide-details="auto"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-select :items="items" label="Tipo de Vivienda" v-model="duo.tipoVivienda_id" hide-details="auto"></v-select>
                            </v-col>
                            <v-col>
                                <v-text-field :items="items" v-model="duo.nroVivienda" label="Número de Vivienda"  hide-details="auto"></v-text-field>    
                            </v-col>
                        </v-row>                
                        <v-col>
                                <v-text-field :items="items" v-model="duo.referencias" label="Referencias de la Dirección" hide-details="auto"></v-text-field>    
                        </v-col>   
                        
                       <v-row>
                            <v-col>
                                <v-text-field label="Numero de Celular de referencia" :items="items" v-model="duo.celularRef" hide-details="auto"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field label="Numero de Teléfono de referencia" :items="items" v-model="duo.telefonoRef" hide-details="auto"></v-text-field>
                            </v-col>
                        </v-row>

                        <div class="pa-2 headline grey lighten-2  text-center">
                            <h6>Envío de Documentos</h6>
                        </div>
                        <v-col>
                            <v-file-input
                                :rules="rules"
                                accept="image/png, image/jpeg, image/bmp"
                                placeholder="Pick an avatar"
                                prepend-icon="mdi-camera"
                                label="Envíe la foto de su documento de identidad"
                                v-model="duo.fotoCI"
                            ></v-file-input>
                        </v-col>
                        <v-col>
                            <v-file-input
                                :rules="rules"
                                accept="image/png, image/jpeg, image/bmp"
                                placeholder="Pick an avatar"
                                prepend-icon="mdi-camera"
                                label="Envíe la foto de Factura se servicio básico"
                                v-model="duo.fotoFactura"
                            ></v-file-input>
                        </v-col>
                         <v-col>
                            <v-row>
                                <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Presione en el mapa"
                                    prepend-icon="mdi-camera"
                                    label="Seleccione en el mapa su Ubicación"
                                    v-model="duo.ubicación"
                                ></v-file-input>
                        </v-row>
                            
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-checkbox v-model="checkbox"></v-checkbox>
                                <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Pick an avatar"
                                    prepend-icon="mdi-camera"
                                    label="Envíe la foto de su referencia financiera"
                                    v-model="duo.referenciaFinanciera"
                                ></v-file-input>
                            </v-row>
                            
                        </v-col>
                    </form>

                </v-container>

            <v-divider></v-divider>
            <div class="text-center pa-2">
                <nuxt-link to="/publico/categoriaServ">
                    <v-btn outlined color="indigo">SERVICIOS</v-btn>
                </nuxt-link>
            </div>
        </v-card>
    </div>
</template>
<script>
    
    
export default {
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu2: false,
        duo:{},
        checkbox: true,
        rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
    }),
    auth: false,
    prefetchLinks: false,
    computed: {
    }
}
  
  
</script>