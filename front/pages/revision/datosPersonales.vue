<template>
  <div class="pa-2">
    <v-card>
      <div class="pa-2 headline grey lighten-2 text-center">
        <h5>Revisión de Datos Personales</h5>
      </div>
      <v-container>
        <form action="">
          <v-row no-gutters>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="revision.generoId"
                  label="Género"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="revision.estadoCivil_id"
                  label="Estado Civil"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="revision.Nombres"
                  label="Nombre (s)"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="revision.apellidoPaterno"
                  label="Apellido Paterno"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="revision.apellidoMaterno"
                  label="Apellido Materno"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="revision.apellidoMarital"
                  label="ApellidoMarital"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="revision.tipoDocumento_id"
                  label="Tipo de Documento"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="revision.nroDocumento"
                  label="Número de Documento"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="revision.lugarExpedicion_id"
                  label="Lugar de Expedición"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="revision.fechaNacimiento"
                  label="Fecha de Nacimiento"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="revision.correo"
                  label="Correo Electrónico"
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-row>
        </form>
      </v-container>
      <div cols="1" sm="1" class="pa-2 headline grey lighten-2 text-center">
        <h5>Revisión de Información Domiciliaria</h5>
      </div>

      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="revision.ciudad_id"
              label="Ciudad / Departamento"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="revision.provincia_id"
              label="Provincia"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="revision.zona"
              label="Zona / Barrio"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="revision.calleAvenida"
              label="Calle o Avenida"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="revision.tipoVivienda_id"
              label="Tipo de Vivienda"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="revision.nroVivienda"
              label="Número de Vivienda"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="revision.referencia"
              label="Referencias"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
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