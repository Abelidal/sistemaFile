<template>
  <div class="pa-2">
    <v-card>
      <div class="pa-2 headline grey lighten-2 text-center">
        <h5>SOLICITUD RECHAZADA</h5>
      </div>
      <v-container>
        <form action="">
          <v-row no-gutters>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Introduzca los motivos del Rechazo"
                  :rules="Rechazado"
                  v-model="revision.nombres"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="items"
                  v-model="revision.clienteContactado_id"
                  label="Cliente Contactado"
                ></v-select>
              </v-col>
              <v-col no-gutters>
                <div class="text-center pa-2">
                  <nuxt-link to="/publico/categoriaServ">
                    <v-btn outlined color="indigo"
                      >Rechazar y enviar a APP</v-btn
                    >
                  </nuxt-link>
                </div>
              </v-col>
            </v-row>
          </v-row>
        </form>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu2: false,
    revision: {},
    checkbox: true,
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
  auth: false,
  prefetchLinks: false,
  computed: {},
};
</script>