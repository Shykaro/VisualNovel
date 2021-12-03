namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //define Transitions
  export let transition = {
    clock: {
      duration: 1, //länge der Transition
      alpha: "./Transitions/puzzle.png",  //Pfad zur greyscaled alpha map
      edge: 1  //härte verlauf der transition, 
    },
    wipe: {

    }
  };

  export let sound = {
    //music
    backgroundTheme: "",

    //sound
    click: ""
  };


  export let locations = {
    bedroom: {
      name: "Bedroom",
      background: "./Images/Backgrounds/Bedroom.png"
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "PFAD",
        happy: "PFAD",
        upset: "PFAD"
      }
    }
  };


  export let dataForSave = {
    
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}