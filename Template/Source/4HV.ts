namespace Template {
    export async function HauptVersteck(): ƒS.SceneReturn {
      console.log("4 HV Scene starting");

      //Texte
      let text = {
      narrator: {
          T0001: "",
          T0002: "",
          T0003: "",
          T0004: "",
      },
      smage: {
          T0001: "",
          T0002: "",
          T0003: "",
          T0004: "",
    },
      general: {
          T0001: "",
          T0002: "",
          T0003: "",
          T0004: "",

      },
  };

      // für Platzhalter für komisches Zeug
      let mageDead: boolean; //mage dead?


      await ƒS.Speech.tell(characters.narrator, "After a quite long time you arrive at what seems to be an hidden entrance.");
      await ƒS.Speech.tell(characters.narrator, "Mara moves a stone aside you waves you to go ahead.");
      await ƒS.Speech.tell(characters.general, "We have arrived. Go ahead.");
      //inbetween fehlen kommentare von small mage, if shes not dead.

      await ƒS.Speech.tell(characters.narrator, "...");
      await ƒS.Speech.tell(characters.narrator, "After a rather long and difficult small cave you stand before a lively place.");
      await ƒS.Speech.tell(characters.narrator, "People talking and enjoying themselves, sounds of metal clinging, a lively bazaar, this doesn't look like hell.");
      await ƒS.Speech.tell(characters.general, "You will need some proper training, go to the barracks to learn something useful.");
      await ƒS.Speech.tell(characters.narrator, "Mara leaves you behind and seems to walk to a tent reserved for her.");


      //first dialogue option to ask questions
      let firstDialogueElementOptions = {
        iSayDot1: "Talk to Mara",
        iSayDot2: "Go check out the barracks",
      };
      
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "WVDialogueOption");
  
      switch (firstDialogueElement) {
        case firstDialogueElementOptions.iSayDot1:




          break;
        case firstDialogueElementOptions.iSayDot2:
          //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.center);
          



          break;
      }


    //asking all will cost you tho, lol

      if (x == 4 || x > 4) {
        mageDead = true;
      }

      if (mageDead) {                  //she dead - tree
        console.log("Mage still dead");   
        
      }

      if (!mageDead) {                 //she aint dead - tree
        console.log("Mage still did diedn't"); 

      }


      await ƒS.Character.show(characters.general, characters.general.pose.base, ƒS.positionPercent(30, 90));
      await ƒS.update();

      



    }
}