MuseumHeist = {
  
  container: document.getElementById("circle_container"),
  animation: undefined,
  people: [],
  squares: null,
  beginGame: document.getElementById("begin"),
  hasBegun: false,
  timerId: null,
  
  
    init: function() {
    let squares_container = document.getElementById("grid");
    for(let i = 0; i <336; i++) {
        let square = document.createElement("div");
        square.className = "square";
        squares_container.appendChild(square);
    }
        this. squares = squares_container.children;

      for(let i = 0; i < 1; i++ ) {
        this.people.push(this.createPerson());
      }

      this.beginGame.onclick = function() {
        this.startGame();
      }

      window.onkeydown = function(event) {
        console.log(event.keyCode);
      //  if(this.hasBegun == true) {
        if(event.keyCode == 87) {
          //press w
        for(let i = 0; i < this.people.length; i++) {
          this.moveUp(this.people[i]);
        }
        } else if(event.keyCode == 65) {
          //press a
          for(let i = 0; i < this.people.length; i++) {
            this.moveLeft(this.people[i]);
          }
        } else if(event.keyCode == 68) {
          //press d
          for(let i = 0; i < this.people.length; i++) {
            this.moveRight(this.people[i]);
          }
        } else if(event.keyCode == 83) {
          //press s
          for(let i = 0; i < this.people.length; i++) {
            this.moveDown(this.people[i]); 
          }
        }
      //}
        
      }.bind(MuseumHeist)

      window.onkeyup = function(event) {
        for(let i = 0; i < this.people.length; i++) {
          this.stopMoving(this.people[i]);
        }
      }.bind(MuseumHeist)

      this.startAnimation();
      this.render();
    },

    startGame: function() {
      if(this.hasBegun == false) {
        this.hasBegun = true;
        this.timerId = window.setTimeout(this.alarm.bind(MuseumHeist), 30 * 1000);
        document.getElementById("timer_countdown").textContent = this.countdown();
      } 
    },

    countdown: function() {

    },

    createPerson: function() {
      let persondiv = document.createElement("div");
      persondiv.className = "person";
      this.container.append(persondiv);
      let person = {
        x_pos: Math.random()*695,
        y_pos: Math.random()*500,
        x_velocity: 0,
        y_velocity: 0, 
        radius: 10,
        color: "black",
        element: persondiv,
      }
      return person;
    },

    startAnimation: function() {
      this.animation = window.setInterval(this.animatePerson.bind(MuseumHeist), 30);
    },

    animatePerson: function() {
      this.movePerson();
      this.render();
    },

    createWalls: function() {
       
    },


    render: function() {
      for(let i = 0; i < this.people.length; i++) {
      this.people[i].element.style.top = this.people[i].y_pos + "px";
      this.people[i].element.style.left = this.people[i].x_pos + "px";
      }
    },

    movePerson: function(event) {
      for(let i = 0; i < this.people.length; i++) {
      this.people[i].x_pos = this.people[i].x_pos + this.people[i].x_velocity;
      this.people[i].y_pos = this.people[i].y_pos + this.people[i].y_velocity;
      }
    },

    moveUp: function(people) {
      if(people.y_velocity == 1) {
          people.y_velocity = people.y_velocity * -1;
        } else if(people.y_velocity == 0) {
          people.y_velocity = people.y_velocity - 1;
        }
    },

    moveLeft: function(people) {
      if(people.x_velocity == 1) {
          people.x_velocity = people.x_velocity * -1;
        } else if(people.x_velocity == 0) {
          people.x_velocity = people.x_velocity - 1;
        }
    },

    moveRight: function(people) {
      if(people.x_velocity == -1) {
          people.x_velocity = people.x_velocity * -1;
        } else if(people.y_velocity == 0) {
          people.x_velocity = people.x_velocity + 1;
        }
    },

    moveDown: function(people) {
      if(people.y_velocity == -1) {
          people.y_velocity = people.y_velocity * -1;
        } else if(people.y_velocity == 0) {
          people.y_velocity = people.y_velocity + 1;
        }
    },

    stopMoving: function(people) {
      people.x_velocity = 0;
      people.y_velocity = 0;
    }
  
  }
  
  MuseumHeist.init();