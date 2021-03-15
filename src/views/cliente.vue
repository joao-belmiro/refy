<template>
  <div class="q-pa-md q-gutter-md">
    <q-breadcrumbs class="text-dark" active-color="secondary">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="secondary" />
      </template>
      <q-breadcrumbs-el
        active-class="tezt-dark"
        label="Home"
        icon="home"
        to="home"
      />
      <q-breadcrumbs-el label="pesquisar Cliente" icon="search" />
    </q-breadcrumbs>
    <q-card>
      <q-card-section>
        <div
          class="row items-center text-h6 text-white bg-secondary q-px-md rounded-borders"
        >
          <q-icon class="q-pr-sm" name="search" />
          Pesquisar Cliente
        </div>
      </q-card-section>
      <q-card-section>
        <div class="column">
          <q-input dense label="Nome" color="secondary"> </q-input>
          <div class="q-pt-sm">
            <q-option-group
              v-model="tipo"
              :options="tipos"
              color="secondary"
              inline
            />
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row q-gutter-md">
          <q-btn
            dense
            label="Pesquisar"
            icon="search"
            color="positive"
            no-caps
          />
          <q-btn
            dense
            label="limpar"
            icon="fas fa-times"
            color="grey"
            no-caps
          />
          <q-btn
            dense
            label="Novo "
            icon="add"
            color="blue"
            no-caps
            @click="formCliente = !formCliente"
          />
        </div>
      </q-card-section>
    </q-card>
    <div class="q-py-md">
      <q-table
        title="Usuarios"
        title-class="text-weight-medium"
        table-header-class="bg-grey-7 text-white text-uppercase"
        dense
        :data="data"
        wrap-cells
        :filter="filter"
        :columns="columns"
        separator="cell"
        row-key="name"
      >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisa Rápida">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-opcoes="props">
        <q-td :props="props" >
          <q-btn size="sm" round dense flat color="positive" icon="fas fa-pen" @click="editar" >
            <q-tooltip content-class="bg-positive text-white text-body2">
              Editar
            </q-tooltip>
          </q-btn>
          <q-btn size="sm" round dense flat  color="negative" icon="fas fa-user-lock" @click="desativar" >
            <q-tooltip content-class="bg-negative text-white text-body2">
              Desativar Usuário
            </q-tooltip>
          </q-btn>
        </q-td>
      </template>
      </q-table>
    </div>
    <q-dialog v-model="excluirDialog">
      <q-card class="bg-">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-grey-7">Confirmar Ação</div>
          <q-space />
          <q-btn icon="close" color="grey-7" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
         <div class="row justify-center q-pb-xl">
            <q-icon name="fas fa-user-lock" color="negative" size="50px"/>
         </div>
         <div class="text-justify text-weight-bold text-grey-7  text-body1">
           Deseja desativar o Usuário,
           Uma vez Bloqueado o usuario não terá permissão para entrar no laboratório nem suas tentativas de autenticação serão salvas,
           deseja desativar mesmo assim ?
         </div>
        </q-card-section>
        <q-card-actions  align="right" class="q-pa-md">
          <div  class="q-gutter-md">
            <q-btn color="grey-7" icon="fas fa-times" label="Cancelar" v-close-popup />
            <q-btn color="negative" icon="fas fa-user-lock" label="Desativar" @click="confirmarDesativar" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="formCliente" persistent>
      <q-card>
        <div class="row q-pa-md">
          <div class="text-h6 text-grey-7">Cadastrar Cliente</div>
          <q-space />
          <q-btn dense round flat icon="close" v-close-popup>
            <q-tooltip>Fechar</q-tooltip>
          </q-btn>
        </div>
        <q-card-section>
          <div class="row items-start q-col-gutter-md">
            <div class="col-12 col-md-12 col-xs-12">
              <q-input
                dense
                outlined
                v-model="cliente.nome"
                label="Nome"
                color="secondary"
              >
              </q-input>
            </div>
            <div class="col-12 col-md-12 col-xs-12">
              <q-input
                dense
                outlined
                label="E-mail"
                v-model="cliente.email"
                type="email"
                color="secondary"
              >
              </q-input>
            </div>
            <div class="col-12 col-md-12 col-xs-12">
              <q-input
                dense
                outlined
                label="Telefone"
                mask="(##) #####-####"
                v-model="cliente.telefone"
                unmasked-value
                color="secondary"
              >
              </q-input>
            </div>
            <div class="q-pr-sm q-pt-sm">
              <q-option-group
                v-model="cliente.tipo"
                :options="tipos"
                color="secondary"
                inline
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="q-px-md q-pb-md">
          <div class="q-gutter-md">
            <q-btn
              label="Salvar"
              color="positive"
              text-color="white"
              icon="save"
              no-caps
            ></q-btn>
            <q-btn
              label="Cancelar"
              color="negative"
              text-color="white"
              icon="close"
              no-caps
            ></q-btn>
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      excluirDialog: false,
      formCliente: false,
      filter: null,
      tipo: null,
      tipos: [
        {
          label: 'Docente',
          value: 'DO'
        },
        {
          label: 'Discente',
          value: 'DI'
        }
      ],
      cliente: {
        id: null,
        nome: null,
        email: null,
        telefone: null,
        tipo: null
      },
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Nome',
          field: 'name',
          sortable: true,
          align: 'center'
        },
        {
          name: 'calories',
          align: 'center',
          label: 'Tipo',
          field: 'calories',
          sortable: true
        },
        { name: 'fat', label: 'e-mail', field: 'fat', sortable: true, align: 'center' },
        { name: 'carbs', label: 'Tag', field: 'carbs', align: 'center' },
        { name: 'status', label: 'Status', field: 'status', align: 'center' },
        { name: 'opcoes', label: 'Opções', field: 'opcoes', align: 'center' }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
  },
  methods: {
    salvar () {
      
    },
    desativar (cliente) {
      this.excluirDialog = true
    },
    editar (cliente) {},
    confirmarDesativar () {}
  }
}
</script>
