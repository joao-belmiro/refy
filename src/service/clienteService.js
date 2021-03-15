import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

export default {
  salvar: (cliente) => axios.post(BASE_URL + '/cliente/salvar', cliente),
  alterar: (cliente) => axios.put(BASE_URL + '/cliente/alterar/' + cliente.id, cliente),
  buscarId: (id) => axios.get(BASE_URL + '/cliente/buscar-por-id/' + id),
  buscarFiltro: (nome, tipo) => axios.get(BASE_URL + '/cliente/buscar-filtro/', {
    params: {
      nome: nome,
      tipo: tipo
    }
  })

}
