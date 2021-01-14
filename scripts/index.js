MuseumHeist = {
  
  container: document.getElementById("circle_container"),
  animation: undefined,
  people: [],
  squares: null,
  beginGame: document.getElementById("begin"),
  hasBegun: false,
  timerId: null,
  time:10,
  mazeWidth: 10,
  mazeHeight:10,
  
  
    init: function() {
   // let squares_container = document.getElementById("grid");
    //for(let i = 0; i <336; i++) {
     //   let square = document.createElement("div");
      //  square.className = "square";
       // squares_container.appendChild(square);
  //  }
       // this.squares = squares_container.children;

      for(let i = 0; i < 1; i++ ) {
        this.people.push(this.createPerson());
      }

      this.beginGame.onclick = function() {
        MuseumHeist.start();
      }

      window.onkeydown = function(event) {
        console.log(event.keyCode);
        if(this.hasBegun == true) {
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
      }
        
      }.bind(MuseumHeist)

      window.onkeyup = function(event) {
        for(let i = 0; i < this.people.length; i++) {
          this.stopMoving(this.people[i]);
        }
      }.bind(MuseumHeist)
      this.createMaze();
      this.startAnimation();
      this.render();
    },

    start: function() {
      if(this.hasBegun == false) {
        this.hasBegun = true;
        this.timerId = window.setTimeout(this.alarm.bind(MuseumHeist), this.time * 1000);
        document.getElementById("timer_countdown").textContent = "Time is running out. Hurry!";
      } 
    },

    alarm: function() {   
      document.getElementById("timer_countdown").textContent = "Press Begin to start the 10 second timer";
      this.hasBegun = false;
      this.restart();
    },

    restart: function() {
      if(this.hasBegun == false) {
        alert("Game Over! Thank you for playing! We hope you enjoyed! You will be redirected to the Home page!");
        window.location.href = "index.html";
      //  for(let i = 0; i < this.people.length; i++) {
      //    this.people[i].x_pos = 26;
      //    this.people[i].y_pos = 15;
      //  }
      }
    },

    createPerson: function() {
      let persondiv = document.createElement("div");
      persondiv.className = "person";
      this.container.append(persondiv);
      let person = {
        x_pos: 26,
        y_pos: 15,
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
      //this.removeWalls();
      this.movePerson();
      this.render();
    },

    createMaze: function(){
        let rowIndex, colIndex;

        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
    
        for (rowIndex = 1; rowIndex <= this.mazeHeight; rowIndex++) {
    
            let row = document.createElement("tr");
    
            for (colIndex = 1; colIndex <= this.mazeWidth; colIndex++) {
    
                let col = document.createElement("td");
                if (rowIndex == 1 && colIndex == 1 ) {
    
                    col.style.backgroundColor = "rgb(244,0,0)";
                    col.setAttribute("type", "start");
    
                } else if (rowIndex == this.mazeHeight && colIndex == this.mazeWidth) {
                    
                    col.style.backgroundColor = "rgb(0,244,0)";
                    col.setAttribute("type", "finish");
    
                } else {
    
                    col.style.backgroundColor = "rgb(255,255,255)";
    
                }
                col.setAttribute("id", "cell_" + rowIndex + "_" + colIndex);
    
                row.appendChild(col);
    
            }
    
            tbody.appendChild(row);
    
        }
        
        table.appendChild(tbody);
    
        document.getElementById("Heist_container").appendChild(table);
    
    
    },

    removeWalls: function() {
        var exits = ["right", "bottom"]
        var currentCell;

        var rowIndex = 1;
        var colIndex = 1;
        
        for (exitIndex = 0; exitIndex < exits.length; exitIndex++) {
        
            switch(exits[exitIndex]) {
        
                case "right":
        
                    colIndex = colIndex + 1;
                    break;
        
                case "bottom":
        
                    rowIndex = rowIndex + 1;
                    break;
        
            }
        
            currentCell = document.getElementById("cell_" + rowIndex + "_" + colIndex);
            
            currentCell.style.backgroundColor = "#f00000";
        
        }
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
    },

    GameOver: function() {
      
    }
  
  }
  
  MuseumHeist.init();