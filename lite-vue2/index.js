const app = new Iue({
  data: {
    msg: 'hello',
  },
  computed: {
    capitalMsg() {
      return 
    }
  },
  watch: {
    msg(newValue, oldValue) {
      console.log(`监听到msg从${oldValue}设为${newValue}`)
    },
  },
  methods: {
    setMs (value) {
      this.msg = value
    }
  },
})

app.setMs('world')
