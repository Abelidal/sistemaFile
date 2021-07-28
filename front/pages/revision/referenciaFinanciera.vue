<template>
  <div class="pa-2">
    <v-card>
      <div class="pa-2 headline grey lighten-2 text-center">
        <h5>Referencia Financiera</h5>
      </div>
      <v-container>
        <form>
          <v-row no-gutters>
            <v-row>
              <v-carousel v-model="model">
                <v-carousel-item v-for="(color, i) in colors" :key="color">
                  <v-sheet :color="color" height="100%" tile>
                    <v-row class="fill-height" align="center" justify="center">
                      <div class="text-h2">Cara {{ i + 1 }}</div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>

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
    model: 0,
    colors: ["primary", "yellow darken-2"],
  }),
  auth: false,
  prefetchLinks: false,
  computed: {},
};
</script>
