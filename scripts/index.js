MuseumHeist = {
  
  container: document.getElementById("circle_container"),

    init: function() {

      this.createCircle();
      this.render();
    },

    createCircle: function() {
      let circlediv = document.createElement("div");
      circlediv.className = "circle";
      this.container.append(circlediv);
      let circle = {
        x_pos: Math.random()*200,
        y_pos: Math.random()*200,
        x_velocity: 1,
        y_velocity: 1, 
        radius: 10,
        color: "black",
        element: circlediv,
      }
      return circle;
    },

    createWalls: function() {

    },

    timer: function() {

    },

    render: function() {
      this.circle.element.style.top= this.circle.y_pos + "px";
      this.circle.element.style.top = this.circle.x_pos + "px";
    },

    changeColor: function() {

    },
    
  
  }
  
  MuseumHeist.init();