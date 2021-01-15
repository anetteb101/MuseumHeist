MuseumHeist = {
  
  container: document.getElementById("circle_container"),
  animation: undefined,
  people: [],
  squares: null,
  beginGame: document.getElementById("begin"),
  hasBegun: false,
  timerId: null,
  time:30,
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
      document.getElementById("timer_countdown").textContent = "Press Begin to start the 30 second timer";
      this.hasBegun = false;
    //  this.restart();
    },

    restart: function() {
      for(let i = 0; i < this.people.length; i++) {
      if(this.hasBegun == false && this.people[i].x_pos < 629 && this.people[i].y_pos < 460) {
        alert("Game Over! Thank you for playing! We hope you enjoyed! You will be redirected to the Home page!");
        window.location.href = "index.html";
      } else if(this.hasBegun == true && this.people[i].x_pos > 630 && this.people[i].y_pos > 461){
        alert("CONGRATS!!! You have won! Thank you so much for playing! You will be redirected to the Home page");
        window.location.href = "index.html";
      }
    }
    },

    createPerson: function() {
      let persondiv = document.createElement("div");
      persondiv.className = "person";
      this.container.append(persondiv);
      let person = {
        x_pos: 26,
        //for box location is >630 for x, >461 for y 
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
    
        
      this.mazePath();

      this.CollisionDetection();
      
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
    
                    col.style.backgroundColor = "pink";
    
                }
                col.setAttribute("id", "cell_" + rowIndex + "_" + colIndex);
    
                row.appendChild(col);
    
            }
            
    
            tbody.appendChild(row);
    
        }
        
        table.appendChild(tbody);
    
        document.getElementById("Heist_container").appendChild(table);
        
    },

    mazePath: function() {
        var exits = ["bottom", "bottom", "right", "right", "bottom", "bottom", "left", "left", "bottom", "bottom", "right", "bottom", "bottom", "right", "right", "up", "up", "right","right", "up", "up", "right","right","up", "up", "left", "left", "up", "up", "right", "right", "right", "right", "bottom", "bottom","bottom", "bottom", "bottom", "bottom", "left", "left", "bottom", "bottom", "right", "bottom"];
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

            case "up":

            rowIndex = rowIndex - 1;
            break;
          
            case "left":

                colIndex = colIndex - 1;
                break;


    }

    currentCell = document.getElementById("cell_" + rowIndex + "_" + colIndex);
    
    currentCell.style.backgroundColor = "pink";

    let a = document.getElementById("cell_1_1")
    a.style.borderBottomStyle = "none" ;  
    let b = document.getElementById("cell_2_1")
    b.style.borderTopStyle = "none";
    b.style.borderBottomStyle ="none"
    let c = document.getElementById("cell_3_1")
    c.style.borderTopStyle = "none";
    c.style.borderRightStyle = "none";
    let d = document.getElementById("cell_3_2")
    d.style.borderLeftStyle = "none";
    d.style.borderRightStyle = "none";
    let e = document.getElementById("cell_3_3")
    e.style.borderLeftStyle = "none";
    e.style.borderBottomStyle = "none";
    let f= document.getElementById("cell_4_3")
    f.style.borderTopStyle = "none";
    f.style.borderBottomStyle = "none";
    let g= document.getElementById("cell_5_3")
    g.style.borderTopStyle = "none";
    g.style.borderLeftStyle = "none";
    let h= document.getElementById("cell_5_2")
    h.style.borderLeftStyle = "none";
    h.style.borderRightStyle = "none";
    let j= document.getElementById("cell_5_1")
    j.style.borderRightStyle = "none";
    j.style.borderBottomStyle = "none";
    let k= document.getElementById("cell_6_1")
    k.style.borderTopStyle = "none";
    k.style.borderBottomStyle = "none";
    let l= document.getElementById("cell_7_1")
    l.style.borderTopStyle = "none";
    l.style.borderRightStyle = "none";
    let m= document.getElementById("cell_7_2")
    m.style.borderLeftStyle = "none";
    m.style.borderBottomStyle = "none";
    let n= document.getElementById("cell_8_2")
    n.style.borderTopStyle = "none";
    n.style.borderBottomStyle = "none";
    let o= document.getElementById("cell_9_2")
    o.style.borderTopStyle = "none";
    o.style.borderRightStyle = "none";
    let p= document.getElementById("cell_9_3")
    p.style.borderRightStyle = "none";
    p.style.borderLeftStyle = "none";
    let q= document.getElementById("cell_9_4")
    q.style.borderTopStyle = "none";
    q.style.borderLeftStyle = "none";
    let r= document.getElementById("cell_8_4")
    r.style.borderTopStyle = "none";
    r.style.borderBottomStyle = "none";
    let s= document.getElementById("cell_7_4")
    s.style.borderRightStyle = "none";
    s.style.borderBottomStyle = "none";
    let t= document.getElementById("cell_7_5")
    t.style.borderRightStyle = "none";
    t.style.borderLeftStyle = "none";
    let u= document.getElementById("cell_7_6")
    u.style.borderTopStyle = "none";
    u.style.borderLeftStyle = "none";
    let v= document.getElementById("cell_6_6")
    v.style.borderTopStyle = "none";
    v.style.borderBottomStyle = "none";
    let w= document.getElementById("cell_5_6")
    w.style.borderRightStyle = "none";
    w.style.borderBottomStyle = "none";
    let x= document.getElementById("cell_5_7")
    x.style.borderRightStyle = "none";
    x.style.borderLeftStyle = "none";
    let y= document.getElementById("cell_5_8")
    y.style.borderTopStyle = "none";
    y.style.borderLeftStyle = "none";
    let z= document.getElementById("cell_4_8")
    z.style.borderBottomStyle = "none";
    z.style.borderTopStyle = "none";
    let a1= document.getElementById("cell_3_8")
    a1.style.borderBottomStyle = "none";
    a1.style.borderLeftStyle = "none";
    let b2= document.getElementById("cell_3_7")
    b2.style.borderRightStyle = "none";
    b2.style.borderLeftStyle = "none";
    let c2= document.getElementById("cell_3_6")
    c2.style.borderRightStyle = "none";
    c2.style.borderTopStyle = "none";
    let d2= document.getElementById("cell_2_6")
    d2.style.borderBottomStyle = "none";
    d2.style.borderTopStyle = "none";
    let e2= document.getElementById("cell_1_6")
    e2.style.borderBottomStyle = "none";
    e2.style.borderRightStyle = "none";
    let f2= document.getElementById("cell_1_7")
    f2.style.borderLeftStyle = "none";
    f2.style.borderRightStyle = "none";
    let g2= document.getElementById("cell_1_8")
    g2.style.borderLeftStyle = "none";
    g2.style.borderRightStyle = "none";
    let h2= document.getElementById("cell_1_9")
    h2.style.borderLeftStyle = "none";
    h2.style.borderRightStyle = "none";
    let i2= document.getElementById("cell_1_10")
    i2.style.borderLeftStyle = "none";
    i2.style.borderBottomStyle = "none";
    let j2= document.getElementById("cell_2_10")
    j2.style.borderTopStyle = "none";
    j2.style.borderBottomStyle = "none";
    let k2= document.getElementById("cell_3_10")
    k2.style.borderTopStyle = "none";
    k2.style.borderBottomStyle = "none";
    let l2= document.getElementById("cell_4_10")
    l2.style.borderTopStyle = "none";
    l2.style.borderBottomStyle = "none";
    let m2= document.getElementById("cell_5_10")
    m2.style.borderTopStyle = "none";
    m2.style.borderBottomStyle = "none";
    let n2= document.getElementById("cell_6_10")
    n2.style.borderTopStyle = "none";
    n2.style.borderBottomStyle = "none";
    let o2= document.getElementById("cell_7_10")
    o2.style.borderTopStyle = "none";
    o2.style.borderLeftStyle = "none";
    let p2= document.getElementById("cell_7_9")
    p2.style.borderLeftStyle = "none";
    p2.style.borderRightStyle = "none";
    let q2= document.getElementById("cell_7_8")
    q2.style.borderRightStyle = "none";
    q2.style.borderBottomStyle = "none";
    let r2= document.getElementById("cell_8_8")
    r2.style.borderTopStyle = "none";
    r2.style.borderBottomStyle = "none";
    let s2= document.getElementById("cell_9_8")
    s2.style.borderTopStyle = "none";
    s2.style.borderRightStyle = "none";
    let t2= document.getElementById("cell_9_9")
    t2.style.borderLeftStyle = "none";
    t2.style.borderBottomStyle = "none";
    let u2= document.getElementById("cell_10_9")
    u2.style.borderTopStyle = "none";
    u2.style.borderRightStyle = "none";
    let v2= document.getElementById("cell_10_10")
    v2.style.borderLeftStyle = "none";
    









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
          people.y_velocity = people.y_velocity * -3;
        } else if(people.y_velocity == 0) {
          people.y_velocity = people.y_velocity - 3;
        }
    },

    moveLeft: function(people) {
      if(people.x_velocity == 1) {
          people.x_velocity = people.x_velocity * -3;
        } else if(people.x_velocity == 0) {
          people.x_velocity = people.x_velocity - 3;
        }
    },

    moveRight: function(people) {
      if(people.x_velocity == -1) {
          people.x_velocity = people.x_velocity * -3;
        } else if(people.y_velocity == 0) {
          people.x_velocity = people.x_velocity + 3;
        }
    },

    moveDown: function(people) {
      if(people.y_velocity == -1) {
          people.y_velocity = people.y_velocity * -3;
        } else if(people.y_velocity == 0) {
          people.y_velocity = people.y_velocity + 3;
        }
    },

    stopMoving: function(people) {
      people.x_velocity = 0;
      people.y_velocity = 0;
    },


    CollisionDetection: function() {
      for(let i = 0; i < this.people.length; i++) {
        //720 width, 530 height 
        if(this.people[i].x_pos + this.people[i].radius * 2 > 720) {
          this.people[i].x_pos = 720 - this.people[i].radius * 2;
          this.people[i].x_velocity = 0;
        } else if (this.people[i].x_pos < 0) {
          this.people[i].x_pos = 0;
          this.people[i].x_velocity = 0;
        } 
        if(this.people[i].y_pos + this.people[i].radius * 2 > 530) {
          this.people[i].y_pos = 530 - this.people[i].radius * 2;
          this.people[i].y_velocity = 0;
        } else if (this.people[i].y_pos < 0) {
          this.people[i].y_pos = 0;
          this.people[i].y_velocity = 0;
        }
      }
    },
  
  }
  
  MuseumHeist.init();