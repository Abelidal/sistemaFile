<template>
  <div class="pa-2">
    <v-card>
      <div class="pa-2 headline grey lighten-2 text-center">
        <h5>Simple Ilimitado Elección de Planes y Datos Personales</h5>
      </div>
      <v-container>
        <form>
          <v-row no-gutters>
            <v-col>
              <v-select
                :items="items"
                v-model="simpleIlimitado.plan_id"
                label="Elige tu Plan"
              ></v-select>
            </v-col>
            <v-col>
              <v-btn outlined color="indigo">Nro. Favorito</v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-select
                :items="items"
                v-model="simpleIlimitado.genero_id"
                label="Género"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                :items="items"
                v-model="simpleIlimitado.estadoCivil_id"
                label="Estado Civil"
              ></v-select>
            </v-col>
          </v-row>

          <v-col>
            <v-text-field
              label="Nombre (s)"
              :rules="nombres"
              v-model="simpleIlimitado.nombres"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Apellido Paterno"
              :rules="apellidoPaterno"
              v-model="simpleIlimitado.apellidoPaterno"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Apellido Materno"
              :rules="apellidoMaterno"
              v-model="simpleIlimitado.apellidoMaterno"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Apellido Marital"
              :rules="apellidoMarital"
              v-model="simpleIlimitado.apellidoMarital"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-row no-gutters>
            <v-select
              :items="items"
              v-model="simpleIlimitado.tipoDocumento_id"
              label="Tipo de Documento"
            ></v-select>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <v-text-field
                label="Número de Documento"
                :rules="nroDocumento"
                v-model="simpleIlimitado.nroDocumento"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                :items="items"
                v-model="simpleIlimitado.lugarExpedicion_id"
                label="Lugar de Expedición"
              ></v-select>
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
                  v-model="simpleIlimitado.date_id"
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
            <v-text-field
              :items="items"
              v-model="simpleIlimitado.correo"
              label="Correo Electrónico"
            ></v-text-field>
          </v-col>

          <div class="pa-2 headline grey lighten-2 text-center">
            <h6>Dirección</h6>
          </div>
          <v-row>
            <v-col>
              <v-select
                :items="items"
                label="Departamento - Ciudad"
                v-model="simpleIlimitado.ciudad_id"
                hide-details="auto"
              ></v-select>
            </v-col>

            <v-col>
              <v-select
                :items="items"
                label="Provincia"
                v-model="simpleIlimitado.provincia_id"
                hide-details="auto"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                :items="items"
                v-model="simpleIlimitado.zona"
                label="Zona / Barrio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                :items="items"
                v-model="simpleIlimitado.calleAvenida"
                label="Calle o Avenida"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                :items="items"
                label="Tipo de Vivienda"
                v-model="simpleIlimitado.tipoVivienda_id"
                hide-details="auto"
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                :items="items"
                v-model="simpleIlimitado.nroVivienda"
                label="Número de Vivienda"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-col>
            <v-text-field
              :items="items"
              v-model="simpleIlimitado.referencias"
              label="Referencias de la Dirección"
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-row>
            <v-col>
              <v-text-field
                label="Numero de Celular de referencia"
                :items="items"
                v-model="simpleIlimitado.celularRef"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Numero de Teléfono de referencia"
                :items="items"
                v-model="simpleIlimitado.telefonoRef"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>

          <div class="pa-2 headline grey lighten-2 text-center">
            <h6>Elección de nuevo número o migración a Pospago</h6>
          </div>
          <v-row>
            <v-col>
              <v-select
                :items="items"
                label="Para que Ciudad requiere su Línea"
                v-model="simpleIlimitado.ciudad_id"
                hide-details="auto"
              ></v-select>
            </v-col>

            <v-col>
              <v-select
                :items="items"
                label="Provincia"
                v-model="simpleIlimitado.provincia_id"
                hide-details="auto"
              ></v-select>
            </v-col>
          </v-row>
          <v-col>
            <v-checkbox
              v-model="simpleIlimitado.checkboxPospagoIlimitado"
              label="¿Tiene una línea Entel que pasará a pospago Simple Ilimitado?"
            ></v-checkbox>

            <v-text-field
              label="Numero de Teléfono que pasa a Pospago"
              :items="items"
              v-model="simpleIlimitado.numeroPospago"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <div class="pa-2 headline grey lighten-2 text-center">
            <h6>Envío de Documentos</h6>
          </div>
          <v-col>
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              label="Envíe la foto de su documento de identidad"
              v-model="simpleIlimitado.fotoCI"
            ></v-file-input>
          </v-col>
          <v-col>
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              label="Envíe la foto de Factura se servicio básico"
              v-model="simpleIlimitado.fotoFactura"
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
                v-model="simpleIlimitado.referenciaFinanciera"
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
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu2: false,
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