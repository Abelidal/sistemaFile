<template>
  <div class="pa-2">
    <v-card>
      <div class="pa-2 headline grey lighten-2 text-center">
        <h5>Plan Suscrito</h5>
      </div>
      <v-container>
        <form action="">
          <v-row no-gutters>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="simpleIlimitado.Plan"
                  label="Nombre del Plan"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="simpleIlimitado.numeroPospago"
                  label="Número de Instancia"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="simpleIlimitado.nroFavorito"
                  label="Números Favoritos"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="simpleIlimitado.Fecha"
                  label="Fecha de Solicitud"
                  readonly
                ></v-text-field>
              </v-col>
              <v-row no-gutters>
        <v-col cols="12" sm="6">
          <div class="text-center pa-2">
            <nuxt-link to="/publico/categoriaServ">
              <v-btn outlined color="indigo">Aprobado</v-btn>
            </nuxt-link>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-center pa-2">
            <nuxt-link to="/publico/categoriaServ">
              <v-btn outlined color="indigo">Rechazado</v-btn>
            </nuxt-link>
          </div>
        </v-col>
      </v-row>
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
    solicitud: {},
    simpleIlimitado: {},
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