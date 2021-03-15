<template>
  <q-layout view="lHh Lpr lff" class="bg-grey-1">
    <q-header elevated class="text-white" style="background: #24292e">
      <q-toolbar class="q-py-sm">
        <router-link to="/home/" tag="div" class="cursor-pointer">
          <div class="text-white row items-center text-h6">
            <div>Bem-Vindo ao Refy</div>
          </div>
        </router-link>
        <q-space />
        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn-dropdown
            flat
            dense
            icon="fa fa-user"
            color="white"
            size="10px"
          >
            <div class="row no-wrap q-pa-md">
              <div class="column items-center">
                <q-avatar size="72px">
                  <q-icon name="fas fa-user-alt" />
                </q-avatar>
                <div class="text-subtitle1 q-mt-md q-mb-xs">{{ "joao" }}</div>
                <div class="text-subtitle1 q-mb-xs">{{ "admin" }}</div>
                <q-btn
                  icon="fas fa-sign-out-alt"
                  color="positive"
                  label="Sair"
                  size="md"
                  v-close-popup
                  to="/"
                />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="400"
      content-class="bg-grey-3"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
          <q-separator/>
        <q-list >
          <q-item
            clickable
            v-ripple
            tag="a"
            to="/cliente"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="fas fa-user" size="18px" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Cliente</q-item-label>
              <q-item-label caption>Gerenciamento de Cartões</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            tag="a"
            to="/credenciais"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="fas fa-user-shield" size="18px" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Administrator</q-item-label>
              <q-item-label caption
                >Controle de Operadores do Sistema
              </q-item-label>
            </q-item-section>
          </q-item>
           <q-separator/>
        </q-list>
      </q-scroll-area>
      <div class="absolute-top" style="height: 150px">
        <div class="col-sm-12 col-md-12 col-xs-12 text-center q-pt-md">
          <q-icon color="grey-7" size="60px" name="fas fa-id-badge"></q-icon>
        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      drawer: true
    }
  },
  methods: {}
}
</script>
<style>
.my-menu-link {
  color: #26a69a !important;
}
</style>
