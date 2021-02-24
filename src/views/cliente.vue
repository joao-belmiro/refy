<template>
  <div class="q-pa-md q-gutter-md">
     <q-breadcrumbs class="text-dark" active-color="secondary">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="secondary"
        />
      </template>
      <q-breadcrumbs-el active-class="tezt-dark" label="Home" icon="home" to="home" />
      <q-breadcrumbs-el label="pesquisar Cliente" icon="search" />
    </q-breadcrumbs>
    <q-card>
      <q-card-section >
        <div class=" row items-center text-h6 text-white bg-secondary q-px-md rounded-borders">
          <q-icon class="q-pr-sm" name="search" />
          Pesquisar Cliente</div>
      </q-card-section>
      <q-card-section>
        <div class="column  ">
            <q-input dense  label="Nome" color="secondary">
            </q-input>
           <div class=" q-pt-sm">
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
          <q-btn dense label="Novo " icon="add" color="blue" no-caps @click="formCliente = !formCliente" />
        </div>
      </q-card-section>
    </q-card>
    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Close icon</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="formCliente" persistent>
      <q-card>
        <div class="row q-pa-md">
        <div class="text-h6 text-grey-7">
          Cadastrar Cliente
        </div>
          <q-space />
          <q-btn dense round flat icon="close" v-close-popup>
            <q-tooltip>Fechar</q-tooltip>
          </q-btn>
        </div>
        <q-card-section>
           <div class="row items-start  q-col-gutter-md">
          <div class="col-12 col-md-12 col-xs-12">
            <q-input dense outlined v-model="cliente.nome" label="Nome" color="secondary">
            </q-input>
          </div>
          <div class="col-12 col-md-12 col-xs-12">
            <q-input dense outlined label="E-mail" v-model="cliente.email"  type="email" color="secondary">
            </q-input>
          </div>
          <div class="col-12 col-md-12 col-xs-12">
            <q-input dense outlined label="Telefone" mask="(##) #####-####" v-model="cliente.telefone" unmasked-value color="secondary">
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
          <q-btn label="Salvar" color="positive" text-color="white" icon="save" no-caps></q-btn>
          <q-btn label="Cancelar" color="negative" text-color="white" icon="close" no-caps></q-btn>
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
      formCliente: false,
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
        nome: null,
        email: null,
        telefone: null,
        tipo: null
      }
    }
  }
}
</script>
