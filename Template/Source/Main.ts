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

  export function fromLeftToRight(): ƒS.AnimationDefinition{
    return{
      start: {translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0)},
      end: {translation: ƒS.positions.bottomleft, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
  };
}




  let uiElement: HTMLElement = document.querySelector("[type=interface]");
  dataForSave = ƒS.Progress.setData(dataForSave, uiElement);


  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];
     // start the sequence
    ƒS.Progress.go(scenes);
  }
  
}