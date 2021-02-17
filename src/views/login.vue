<template>
  <div class="absolute-center">
    <q-card bordered class="card-container">
      <q-card-section>
        <div class="col-sm-12 col-md-12 col-xs-12 text-center">
          <q-icon color="grey-7" size="60px" name="fas fa-id-badge"></q-icon>
        </div>
        <div>
          <div
            class="text-center text-weight-medium text-grey-7 text-h5 q-pt-md"
          >
            Seja Bem-vindo ao REFY
          </div>
          <div class="text-center text-body1 text-grey-7 text-weight-medium">
            Sistema para Gerênciamento de Credenciais
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="column q-gutter-lg">
          <div>
            <q-input dense outlined color="positive" label="Usuario">
              <template v-slot:prepend>
                <q-icon size="20px" name="far fa-user" />
              </template>
            </q-input>
          </div>
          <div>
            <q-input dense outlined color="positive" label="Senha">
              <template v-slot:prepend>
                <q-icon size="20px" name="fas fa-unlock-alt" />
              </template>
            </q-input>
          </div>
          <q-btn
            class="login-gradient"
            icon="fas fa-sign-in-alt"
            label="Login"
            text-color="white"
            no-caps
            to="/home"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'login',
  components: {}
}
</script>
<style lang="css">
.card-container {
  height: 500px;
  width: 100%;
  max-width: 400px;
  min-width: 300px;

}
.login-gradient {
  background: rgb(9, 117, 51) !important;
  background: linear-gradient(
    0deg,
    rgba(9, 117, 51, 1) 0%,
    rgba(66, 223, 79, 1) 100%
  ) !important;
}
</style>
