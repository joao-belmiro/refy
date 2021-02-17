<template>
  <div class="q-pa-md">
    <div class="row items-start q-col-gutter-md">
      <div class="col-sm-4 col-md-4 col-xs-12">
        <q-card class="card-ativos" flat bordered>
          <q-card-section style="height: 114px" horizontal>
            <q-card-section class="borda-card bg-positive text-white">
              <q-icon name="fas fa-user" size="20px" />
              <div class="text-h6 text-weight-bold q-mt-md">95</div>
            </q-card-section>
            <q-card-section
              class="text-h6 text-weight-bold text-center text-positive"
            >
              Usuarios Desativados
            </q-card-section>
            <q-space/>
            <q-card-actions v-if="false" vertical class="justify-around">
              <q-btn
                flat
                dense
                size="10px"
                round
                color="positive"
                icon="fas fa-eye"
              >
               <q-tooltip content-class="bg-positive text-weight-bold text-white shadow-4" :offset="[10, 10]">
                    Visuzalizar
                </q-tooltip>
              </q-btn>
            </q-card-actions>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-sm-4 col-md-4  col-xs-12">
        <q-card class="card-desativados" flat bordered>
          <q-card-section style="height: 114px" horizontal>
            <q-card-section class="borda-card bg-orange-8 text-white">
              <q-icon name="fas fa-user" size="21px" />
              <div class="text-h6 text-weight-bold q-mt-md">95</div>
            </q-card-section>
            <q-card-section
              class="text-h6 text-weight-bold text-center text-orange-8"
            >
              Usuarios Desativados
            </q-card-section>
            <q-space/>
            <q-card-actions vertical  class="justify-around">
              <q-btn
                flat
                dense
                size="10px"
                round
                color="orange-8"
                icon="fas fa-eye"
              >
               <q-tooltip content-class="bg-orange-8 text-white shadow-4 text-weight-bold" :offset="[10, 10]">
                    Visualizar
                </q-tooltip>
              </q-btn>
              <q-btn
                flat
                dense
                size="10px"
                round
                color="orange-8"
                icon="fas fa-trash-alt"
              >
               <q-tooltip content-class="bg-orange-8 text-white shadow-4 text-weight-bold" :offset="[10, 10]">
                Remover Todos Inativos
                </q-tooltip>
              </q-btn>
            </q-card-actions>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="css">
.borda-card {
  border-radius: 3px !important;
}

.card-ativos {
  border-color: #21ba45 !important;
  max-height: 115px !important;

}

.card-desativados {
  border-color: #f57c00 !important;
  max-height: 115px !important;
}

</style>
