var vm = new Vue ({
  el: "#app",
  data: {
    good: "success",
    notgood: "danger",
    yesornot: true,
    message: "hello Vue !",
  },
  methods: {
    red: function() {
      this.yesornot = false
    },
    green:function() {
      this.yesornot = true
    },
  }
})
