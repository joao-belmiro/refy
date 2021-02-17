export default {
  methods: {
    formatDataExtenso (data) {
      return new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }).format(data)
    },
    formatPhone (cel) {
      cel = cel.replace(/\D/g, '')
      cel = cel.replace(/(\d{0})(\d)/, '$1($2')
      cel = cel.replace(/(\d{2})(\d)/, '$1) $2')
      cel = cel.replace(/(\d{5})(\d)/, '$1-$2')
      return cel
    }
  }
}
