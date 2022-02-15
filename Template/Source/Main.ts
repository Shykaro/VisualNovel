namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //define Transitions
  export let transition = {
    cut: {
      duration: 3, //länge der Transition
      alpha: "./Transitions/Cut1.jpg",  //Pfad zur greyscaled alpha map
      edge: 0.1  //härte verlauf der transition, 
    },
    donner1: {
      duration: 3, //länge der Transition
      alpha: "./Transitions/Gewitter1.jpg",  //Pfad zur greyscaled alpha map
      edge: 1
    },
    donner2: {
      duration: 3, //länge der Transition
      alpha: "./Transitions/Gewitter2.jpg",  //Pfad zur greyscaled alpha map
      edge: 1
    },
    donner3: {
      duration: 3, //länge der Transition
      alpha: "./Transitions/Gewitter3.jpg",  //Pfad zur greyscaled alpha map
      edge: 1
    },
    arcane: {
      duration: 3, //länge der Transition
      alpha: "./Transitions/Arcane.jpg",  //Pfad zur greyscaled alpha map
      edge: 1
    }
  };

  export let sound = {
    //music
    backgroundtheme: "./Assets/Music/Vampires/WastedBlood.mp3",
    introtheme: "./Assets/Music/Vampires/WastedBlood.mp3",
    wvtheme: "./Assets/Music/Vampires/Persian Battle.mp3",

    //sound
    click: ""
  };

  export let locations = {
    introduction: {
      name: "Intro",
      background: "./Assets/Background/Intro.jpg"
    },
    bedroom: {
      name: "Bedroom",
      background: "./Assets/Background/MountainCastle.png"
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    general: {
      name: "General",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        base: "./Assets/Character/HumanChars/General.gif",
      }
    },
      smage: {
        name: "SmallMage",
        origin: ƒS.ORIGIN.BOTTOMCENTER,
        pose: {
          base: "./Assets/Character/HumanChars/General.gif",
        }
    }
  };

  export let items = {
    pen: {
      name: "Roter Buntstift",
      description: "Ein Bunter Stift der Rot ist.",
      image: ""
    }
  };



  // Menü Zusatz
  let inGameMenu  = {
    //buttons, die man angezeigt haben möchte & strings dienen zur css-gestaltung
    save: "Save",
    load: "Load",
    close: "Close"
    //open: "Open" Useless
  };

  let gameMenu: ƒS.Menu;

  // true ist offenes Menü, false ist zu.
  let menu: boolean = true;

  async function buttonFunctionalities(_option:string): Promise<void> {
    console.log(_option);

    switch (_option){
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        menu = false;
        break;
      //case inGameMenu.open:
      //  gameMenu.open();
      //  menu = true;
      // break;

    }
  }
  

  // Unterscheidung zwischen Open Menu und Closed Menu
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event:KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menu) {
          console.log("Close");
          await gameMenu.close();
          menu = false;
        }
        else {
          console.log("Open");
          await gameMenu.open();
          menu = true;
        }
        break;

    }
    
  }





  

  export let dataForSave = {
    
  };


  export function fromLeftToRight(): ƒS.AnimationDefinition {
    return{
      start: {translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0)},
      end: {translation: ƒS.positions.bottomleft, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
  };
}




  


  window.addEventListener("load", start);
  function start(_event: Event): void {

    console.log("FudgeStory template starting NOW");

    //Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

    //Szenenreihenfolge
    let scenes: ƒS.Scenes = [
      { id: "Einfuehrung", scene: Introduction, name: "1Introduction"},
      //{ scene: Scene, name: "2Scene" },
      { scene: WiderstandsVersteck, name: "3WV" }
      //{ id: "Ende", scene: End, name: "Introduction to FS"},
    
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

     // start the sequence
    ƒS.Progress.go(scenes);
  }
  
}