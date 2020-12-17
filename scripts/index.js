MuseumHeist = {
  
  container: document.getElementById("circle_container"),

  action: document.getElementById("change_color"),

    init: function() {
   
      this.createPerson();
      this.render();
    },

    createPerson: function() {
      let persondiv = document.createElement("div");
      persondiv.className = "person";
      this.container.append(persondiv);
      let person = {
        x_pos: Math.random()*200,
        y_pos: Math.random()*200,
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
      this.person.element.style.top= this.person.y_pos + "px";
      this.person.element.style.top = this.person.x_pos + "px";
    },

    changeColor: function() {

    },
    
  
  }
  
  MuseumHeist.init();