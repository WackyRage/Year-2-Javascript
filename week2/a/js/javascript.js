$(document).ready(function() {
  class Type {
    constructor(type) {
      this.type = type;
    }

    get showType() {
      return this.type;
    }
  }

  class Actor {
    constructor(actor) {
      this.actor = actor;
    }

    get showActor() {
      return this.actor;
    }
  }

  class Name {
    constructor(name) {
      this.name = name;
    }

    get showName() {
      return this.name;
    }
  }

  class Movie {
    constructor() {
      this.name = [];
      this.type = [];
      this.actor =[];
    }

    set newActor(newActor){
      this.actor.push(new Actor(newActor));
    }

    set newType(newType){
      this.type.push(new Type(newType));
    }

    set newName(newName){
      this.name.push(new Name(newName));
    }

    get showInformation() {
      return this.name[0].showName + "<br>" + this.type[0].showType + "<br>"+ this.actor[0].showActor;
    }

  }
  

  let movie = new Movie();
  movie.newActor = "Matthew McConaughey";
  movie.newActor = "Tom Hardy";
  movie.newType = "Action";
  movie.newName = "Desert with bears";


  document.getElementById("print").innerHTML = movie.showInformation;
});