<template>
    <div class="pa-2">
        <v-card>
            <div class="pa-2 headline grey lighten-2  text-center">
                <h5>Fibra Hogar-- Elección de Planes y Datos Personales</h5>
            </div>
                <v-container>
                    <form>
                        <v-row no-gutters>
                            <v-col>
                                <v-select :items="items" v-model="fibraHogar.plan_id" label="Elige tu Plan"></v-select>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>    
                            <v-col>
                                <v-select :items="items" v-model="fibraHogar.genero_id" label="Género"></v-select>
                            </v-col>
                            <v-col>
                                <v-select :items="items" v-model="fibraHogar.estadoCivil_id" label="Estado Civil"></v-select>
                            </v-col>
                        </v-row>
                        
                        <v-col>
                            <v-text-field label="Nombre (s)" :rules="nombres" v-model="fibraHogar.nombres" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Apellido Paterno" :rules="apellidoPaterno" v-model="fibraHogar.apellidoPaterno" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Apellido Materno" :rules="apellidoMaterno" v-model="fibraHogar.apellidoMaterno" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Apellido Marital" :rules="apellidoMarital" v-model="fibraHogar.apellidoMarital" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-row no-gutters>
                            <v-select :items="items" v-model="fibraHogar.tipoDocumento_id" label="Tipo de Documento"></v-select>        
                        </v-row>

                        <v-row no-gutters>
                            <v-col>
                                <v-text-field label="Número de Documento" :rules="nroDocumento" v-model="fibraHogar.nroDocumento" hide-details="auto"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select :items="items" v-model="fibraHogar.lugarExpedicion_id" label="Lugar de Expedición"></v-select>
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
                                    v-model="fibraHogar.date_id"
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
                            <v-text-field :items="items" v-model="fibraHogar.correo" label="Correo Electrónico"></v-text-field>
                        </v-col>
                        
                        <div class="pa-2 headline grey lighten-2  text-center">
                            <h6>Dirección</h6>
                        </div>
                        <v-row>
                            <v-col>
                                <v-select :items="items" label="Departamento - Ciudad" v-model="fibraHogar.ciudad_id" hide-details="auto"></v-select>
                            </v-col>

                            <v-col>
                                <v-select :items="items" label="Provincia" v-model="fibraHogar.provincia_id" hide-details="auto"></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field :items="items" v-model="fibraHogar.zona" label="Zona / Barrio"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field :items="items" v-model="fibraHogar.calleAvenida" label="Calle o Avenida"  hide-details="auto"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-select :items="items" label="Tipo de Vivienda" v-model="fibraHogar.tipoVivienda_id" hide-details="auto"></v-select>
                            </v-col>
                            <v-col>
                                <v-text-field :items="items" v-model="fibraHogar.nroVivienda" label="Número de Vivienda"  hide-details="auto"></v-text-field>    
                            </v-col>
                        </v-row>                
                        <v-col>
                                <v-text-field :items="items" v-model="fibraHogar.referencias" label="Referencias de la Dirección" hide-details="auto"></v-text-field>    
                        </v-col>   
                        
                       <v-row>
                            <v-col>
                                <v-text-field label="Numero de Celular de referencia" :items="items" v-model="fibraHogar.celularRef" hide-details="auto"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field label="Numero de Teléfono de referencia" :items="items" v-model="fibraHogar.telefonoRef" hide-details="auto"></v-text-field>
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
                                v-model="fibraHogar.fotoCI"
                            ></v-file-input>
                        </v-col>
                        <v-col>
                            <v-file-input
                                :rules="rules"
                                accept="image/png, image/jpeg, image/bmp"
                                placeholder="Pick an avatar"
                                prepend-icon="mdi-camera"
                                label="Envíe la foto de Factura se servicio básico"
                                v-model="fibraHogar.fotoFactura"
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
                                    v-model="fibraHogar.ubicación"
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
                                    v-model="fibraHogar.referenciaFinanciera"
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
        fibraHogar:{},
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