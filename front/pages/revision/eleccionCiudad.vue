<template>
    <div class="pa-2">
        <v-card>
            <div class="pa-2 headline grey lighten-2  text-center">
                <h5> Estimado colaborador de Datacom: Elige la ciudad para la revisión de Documentos</h5>
            </div>
            <v-container>
                <form action="">
                    <v-row no-gutters>
                            <v-col>
                                <v-select :items="items" v-model="revision.ciudad_id" label="Elige la Ciudad"></v-select>
                            </v-col>
                            <v-col>
                                <v-btn outlined color="indigo">Buscar</v-btn>            
                            </v-col>
                    </v-row>
                    <v-row>
                        <select size="10" name="">
                            <option>persona 11111</option>
                            <option>persona 11111</option>
                            <option>persona 11111</option>
                            <option>persona 11111</option>
                            <option>persona 11111</option>
                            <option>persona 11111</option>
                            <option>persona 11111</option>
                            <option>persona 11111</option>
                            <option>persona 11111</option>
                            <option>persona 11111</option>
                            <option>persona 11111</option>
                        </select>
                    </v-row>
                </form>
            </v-container>
            <!--<v-divider></v-divider>
            <div class="text-center pa-2">
                <nuxt-link to="/publico/categoriaServ">
                    <v-btn outlined color="indigo">Buscar1</v-btn>
                </nuxt-link>
            </div>-->
        </v-card>
    </div>
</template>
<script>
    
    
export default {
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu2: false,
        revision:{},
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