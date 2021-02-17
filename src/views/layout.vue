<template>
  <q-layout class="bg-grey-1">
    <q-header elevated class="text-white" style="background: #24292e">
      <q-toolbar class="q-py-sm ">
        <div
          class="q-col-gutter-sm text-body2 text-weight-regular row items-center"
        >
          <q-item
            clickable
            v-ripple
            tag="a"
            to="/home"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="fas fa-home" size="18px" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item>
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
              <q-item-label class="text-white" caption>Gerenciamento de Cartões</q-item-label>
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
            </q-item-section>
          </q-item>
        </div>
        <q-space />
        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
           <q-btn-dropdown flat dense icon="fa fa-user" color="white" size="10px">
          <div class="row no-wrap q-pa-md">
        <div class="column items-center">
          <q-avatar size="72px">
            <q-icon name="fas fa-user-alt"/>
          </q-avatar>
          <div class="text-subtitle1 q-mt-md q-mb-xs">{{'joao'}}</div>
          <div class="text-subtitle1 q-mb-xs">{{'admin'}}</div>
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style>
.my-menu-link {
  color: #26a69a !important;
}
</style>
