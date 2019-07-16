
var app = new Vue({
  el: '#app',
  data: {
    userSrc: '../public/images/kirstin-sprite.jpg',
    opponentSrc: '../public/images/annoying-dog.jpg',
    userName: 'PhD Candidate Kirstin',
    opponentName: 'Soy boi',
    userHP: 200,
    opponentHP: 200,
    userLevel: 1,
    opponentLevel: 1,
    fightOn: false,
    optionsOn: true, 
    battleText: 'Kirstin is flicking through a genomics book',
    battleOptions: ['Fight', 'Party', 'Item', 'Run'],
    fightOptions:  ['Eyebrow', 'Dep Met', 'Statistics'],
    userHpBar: {
      width: "100%"
    },
    opponentHpBar: {
      width: "100%"
    }
  },
  
  methods:{
    processOption: function(option) {
      switch(option) {
        case 1:
            this.optionsOn = false
            this.fightOn = true
          setTimeout(() => {this.battleText=`Kirstin thinks about whiskey and grins.`}, 4000)
          this.battleText =`Kirstin raises her eyebrow. ${this.opponentName} feels a wave of shame...`
          break
        case 2: 
          setTimeout(() => { this.battleText=`Kirstin thinks about whiskey and grins.`}, 4000)
          this.battleText = "Life is like telomares...people bore you until they get shorter and you die..."
          break
          case 3:
          // handle statistics
          break
          case 4:
        //handle run
      }

    },
    typeText: function(text) {
      var i = 0;

var speed = 50;
     if (0 < text.length) {
       document.getElementsByClassName("battle-text text-box-left").innerHTML += text.charAt(i)
       i++
       setTimeout(typeText, 50)
     }
    }
  }
  
})