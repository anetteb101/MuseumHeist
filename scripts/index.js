MuseumHeist = {
  
  container: document.getElementById("circle_container"),

  action: document.getElementById("change_color").value,

  people: [],
  
    init: function() {

      for(let i = 0; i < 1; i++ ) {
        this.people.push(this.createPerson());``
      }
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

    createWalls: function() {
       
    },

    timer: function() {

    },

    render: function() {
      for(let i = 0; i < 1; i++) {
      this.people[i].element.style.top = this.people[i].y_pos + "px";
      this.people[i].element.style.left = this.people[i].x_pos + "px";
      }
    },

    changeColor: function() {
      if (MuseumHeist.action === "Black") {
        this.color = "black";
         this.person.element.color = this.color;
      } else if (MuseumHeist.action === "Red") {
        person.color = "red";
         this.person.element.color = this.color;
      }
    },
    
  
  }
  
  MuseumHeist.init();