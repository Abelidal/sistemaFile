<template>
    <div class="pa-2">
        <v-card>
            <div class="pa-2 headline grey lighten-2  text-center">
                <h5>Simple -- Elección de Planes y Datos Personales</h5>
            </div>
                <v-container>
                    <form>
                        <v-row no-gutters>
                            <v-col>
                                <v-select :items="items" v-model="simple.plan_id" label="Elige tu Plan"></v-select>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>    
                            <v-col>
                                <v-select :items="items" v-model="simple.genero_id" label="Género"></v-select>
                            </v-col>
                            <v-col>
                                <v-select :items="items" v-model="simple.estadoCivil_id" label="Estado Civil"></v-select>
                            </v-col>
                        </v-row>
                        
                        <v-col>
                            <v-text-field label="Nombre (s)" :rules="nombres" v-model="simple.nombres" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Apellido Paterno" :rules="apellidoPaterno" v-model="simple.apellidoPaterno" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Apellido Materno" :rules="apellidoMaterno" v-model="simple.apellidoMaterno" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Apellido Marital" :rules="apellidoMarital" v-model="simple.apellidoMarital" hide-details="auto"></v-text-field>
                        </v-col>
                        <v-row no-gutters>
                            <v-select :items="items" v-model="simple.tipoDocumento_id" label="Tipo de Documento"></v-select>        
                        </v-row>

                        <v-row no-gutters>
                            <v-col>
                                <v-text-field label="Número de Documento" :rules="nroDocumento" v-model="simple.nroDocumento" hide-details="auto"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select :items="items" v-model="simple.lugarExpedicion_id" label="Lugar de Expedición"></v-select>
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
                                    v-model="simple.date_id"
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
                            <v-text-field :items="items" v-model="simple.correo" label="Correo Electrónico"></v-text-field>
                        </v-col>
                        
                        <div class="pa-2 headline grey lighten-2  text-center">
                            <h6>Dirección</h6>
                        </div>
                        <v-row>
                            <v-col>
                                <v-select :items="items" label="Departamento - Ciudad" v-model="simple.ciudad_id" hide-details="auto"></v-select>
                            </v-col>

                            <v-col>
                                <v-select :items="items" label="Provincia" v-model="simple.provincia_id" hide-details="auto"></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field :items="items" v-model="simple.zona" label="Zona / Barrio"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field :items="items" v-model="simple.calleAvenida" label="Calle o Avenida"  hide-details="auto"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-select :items="items" label="Tipo de Vivienda" v-model="simple.tipoVivienda_id" hide-details="auto"></v-select>
                            </v-col>
                            <v-col>
                                <v-text-field :items="items" v-model="simple.nroVivienda" label="Número de Vivienda"  hide-details="auto"></v-text-field>    
                            </v-col>
                        </v-row>                
                        <v-col>
                                <v-text-field :items="items" v-model="simple.referencias" label="Referencias de la Dirección" hide-details="auto"></v-text-field>    
                        </v-col>   
                        
                       <v-row>
                            <v-col>
                                <v-text-field label="Numero de Celular de referencia" :items="items" v-model="simple.celularRef" hide-details="auto"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field label="Numero de Teléfono de referencia" :items="items" v-model="simple.telefonoRef" hide-details="auto"></v-text-field>
                            </v-col>
                        </v-row>

                        <div class="pa-2 headline grey lighten-2  text-center">
                            <h6>Elección de nuevo número o migración a Pospago</h6>
                        </div>
                        <v-row>
                            <v-col>
                                <v-select :items="items" label="Para que Ciudad requiere su Línea" v-model="simple.ciudad_id" hide-details="auto"></v-select>
                            </v-col>

                            <v-col>
                                <v-select :items="items" label="Provincia" v-model="simple.provincia_id" hide-details="auto"></v-select>
                            </v-col>
                        </v-row>
                        <v-col>
                            <v-checkbox v-model="simple.checkboxPospagoIlimitado" label="¿Tiene una línea Entel que pasará a pospago Simple?"></v-checkbox>
                                
                            <v-text-field label="Numero de Teléfono que pasa a Pospago" :items="items" v-model="simple.numeroPospago" hide-details="auto"></v-text-field>
                        </v-col>
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
                                v-model="simple.fotoCI"
                            ></v-file-input>
                        </v-col>
                        <v-col>
                            <v-file-input
                                :rules="rules"
                                accept="image/png, image/jpeg, image/bmp"
                                placeholder="Pick an avatar"
                                prepend-icon="mdi-camera"
                                label="Envíe la foto de Factura se servicio básico"
                                v-model="simple.fotoFactura"
                            ></v-file-input>
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
                                    v-model="simple.referenciaFinanciera"
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
        simple:{},
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