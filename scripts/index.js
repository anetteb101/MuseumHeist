MuseumHeist = {
  
  container: document.getElementById("circle_container"),
  animation: undefined,
  people: [],
  squares: null,
  
  
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

      window.onkeydown = function(event) {
        if(event.keycode == 87) {
          //press w
          for(let i = 0; i < this.people.length; i++) {
          if(this.people[i].y_velocity == 1 || this.people[i].y_velocity == -1) {
            this.people[i].y_velocity *= 1;
            
          }
          }
        //  for(let i = 0; i < this.people.length; i++) {
        //  this.people[i].y_velocity = this.people[i].y_velocity * 1;
        //  }
        } else if(event.keycode == 65) {
          //press a
          for(let i = 0; i < this.people.length; i++) {
            this.people[i].x_velocity = this.people[i].x_velocity * -1;
            
          }
        } else if(event.keycode == 68) {
          //press d
          for(let i = 0; i < this.people.length; i++) {
          this.people[i].x_velocity = this.people[i].x_velocity * 1;
         
          }
        } else if(event.keycode == 83) {
          //press s
          for(let i = 0; i < this.people.length; i++) {
          this.people[i].y_velocity = this.people[i].y_velocity * 1;
          
          }
        }
        console.log("This works");
      }.bind(MuseumHeist)

      this.startAnimation();
      this.render();
    },

    createPerson: function() {
      let persondiv = document.createElement("div");
      persondiv.className = "person";
      this.container.append(persondiv);
      let person = {
        x_pos: Math.random()*695,
        y_pos: Math.random()*500,
        x_velocity: 1,
        y_velocity: 1, 
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

    timer: function() {
      
    },

    render: function() {
      for(let i = 0; i < this.people.length; i++) {
      this.people[i].element.style.top = this.people[i].y_pos + "px";
      this.people[i].element.style.left = this.people[i].x_pos + "px";
      }
    },

    movePerson: function() {
      for(let i = 0; i < this.people.length; i++) {
      this.people[i].x_pos = this.people[i].x_pos + this.people[i].x_velocity;
      this.people[i].y_pos = this.people[i].y_pos + this.people[i].y_velocity;
      }
    },
    bouncePeople: function () {
       
    },
  }
  
  MuseumHeist.init();