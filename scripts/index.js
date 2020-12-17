MuseumHeist = {
  
  container: document.getElementById("circle_container"),

  people: [],
  
    init: function() {

      for(let i = 0; i < 1; i++ ) {
        this.people.push(this.createPerson());
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
  
  }
  
  MuseumHeist.init();