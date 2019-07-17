
var app = new Vue({
  el: '#app',
  data: {
    userSrc: '../public/images/kirstin-sprite.jpg',
    opponentSrc: '../public/images/annoying-dog.jpg',
    userName: 'PhD Candidate Kirstin',
    opponentName: 'Soy boi',
    userHP: 200,
    opponentHP: 200,
    opponentFill: 100,
    userLevel: 1,
    opponentLevel: 1,
    fightOn: false,
    itemOn: false,
    optionsOn: true, 
    battleText: 'Kirstin is flicking through a genomics book',
    battleOptions: ['Fight', 'Item', 'Check', 'Run'],
    fightOptions:  ['Eyebrow', 'Dep Met', 'Stats, Pollinate'],
    userAttackDamage: [15,40,50,25],
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
          // handle fight
            this.optionsOn = false
            this.fightOn = true
            this.battleText = "If only they were a chili plant...guess I'll have to fight"
            break
        case 2: 
        // handle item
            this.optionsOn = false
            this.itemOn = true
            this.battleText = "You have fuckall in your bag."
            break
          case 3:
          // handle check
          this.battleText = "If only they were a chili plant...guess I'll have to fight"
          break
          case 4:
        //handle run
         this.battleText = "Joberg ladies don't run"
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
    },
    processAttack: function(attack) {
      switch(attack){
        case 1:
          //handle eyebrow
          this.opponentHP -= this.userAttackDamage[attack-1]
        break;
        case 2:
          //handle depressing metaphor
          
        break;
        case 3:
          //handle statistics
        break;
        case 4:
          //handle pollinate
        break;
      }
    }
  }
  
})

// this.battleText = "Life is like telomares...people bore you until they get shorter and you die..."
// this.battleText =`Kirstin raises her eyebrow. ${this.opponentName} feels a wave of shame...`