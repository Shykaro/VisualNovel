namespace Template {
    export async function WiderstandsVersteck(): ƒS.SceneReturn {
      console.log("3 WV Scene starting");

      //Texte
      let text = {
      narrator: {
          T0001: "",
          T0002: "",
          T0003: "",
          T0004: "",
      },
      smage: {
        T0001: "Boss i did it!!",
        T0002: "I intercepted the beam and got him out of there!",
        T0003: "My name is ??? this will be a bit much but we have to-",
        T0010: "I intercepted your soul from the beam of death in the Sky and therefore saved you from the Hands of Satan hehe.",
        T0011: "Iam ??? as i already said, and the rest and I call ourselves the ???.",
        T0012: "Quite literally in Hell.",
        T0013: "It's hell, alot to explain but we should really go!",
        T0014: "Finally, Please grab your sword and lets go!",
    },
      general: {
        T0001: "Thats wonderful love, but we really got to get the fuck out of here!",
        T0002: "There's no time!!",
        T0003: "We have to fucking move!",
        T0000: "",
        T0010: "Is he asking Questions? We have to MOVE goddamnit!!",
        T0011: "Save your hospitality for later ???",
        T0012: "",

      },
  };
      // für Platzhalter für komisches Zeug
      let x: number = 0;
      let askAgain: boolean = true;
      let mageDead: boolean = false; //smage dead?


  /* would like multiple transitions for gewitter effekt :( look discord for ref by jirka 12.03*/
      await ƒS.Location.show(locations.bedroom);
      await ƒS.update(transition.donner1.duration, transition.donner1.alpha, transition.donner1.edge);
      await ƒS.update();
      //await ƒS.update(transition.donner2.duration, transition.donner2.alpha, transition.donner2.edge);
      //await ƒS.update(transition.donner3.duration, transition.donner3.alpha, transition.donner3.edge);
      //await ƒS.update(transition.arcane.duration, transition.arcane.alpha, transition.arcane.edge);
      await ƒS.Sound.play(sound.wvtheme, 0.1, true);
      //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(30, 100));

      // 70 für rechten Char, 30 für linken Char
      await ƒS.Character.show(characters.smage, characters.smage.pose.base, ƒS.positionPercent(70, 90));
      await ƒS.update();

      //Introduction von smage und general
      await ƒS.Speech.tell(characters.smage, text.smage.T0001);
      await ƒS.Speech.tell(characters.smage, text.smage.T0002);
      await ƒS.Speech.tell(characters.general, text.general.T0001);
      await ƒS.Speech.tell(characters.smage, text.smage.T0003);
      await ƒS.Speech.tell(characters.general, text.general.T0002);
      await ƒS.Speech.tell(characters.general, text.general.T0003);
      



      //first dialogue option to ask questions
      let firstDialogueElementOptions = {
        iSayDot1: "What the fuk happened?",
        iSayDot2: "Who are all of you??",
        iSayDot3: "Where the hell am I?",
        iSayDot4: "What in Godsname is all of this??",
        iSayDot5: "Ugh okay lets get outta here!"
      };
      
      //you can ask all questions if u want to
      while (askAgain) {
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "WVDialogueOption");
  
      switch (firstDialogueElement) {
        case firstDialogueElementOptions.iSayDot1:
          await ƒS.Speech.tell(characters.smage, text.smage.T0010);
          x++;

          break;
        case firstDialogueElementOptions.iSayDot2:
          //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.center);
          await ƒS.Speech.tell(characters.smage, text.smage.T0011);
          x++;
          await ƒS.Speech.tell(characters.general, text.general.T0011);

          break;
        case firstDialogueElementOptions.iSayDot3:
          await ƒS.Speech.tell(characters.smage, text.smage.T0012);
          x++;
          await ƒS.Speech.tell(characters.general, text.general.T0010);

          break;
        case firstDialogueElementOptions.iSayDot4:
          await ƒS.Speech.tell(characters.smage, text.smage.T0013);
          x++;

          break;
        case firstDialogueElementOptions.iSayDot5:
          await ƒS.Speech.tell(characters.smage, text.smage.T0014);
          askAgain = false;
          break;
      }
    }

    //asking all will cost you tho, lol

      if (x == 4 || x > 4) {
        mageDead = true;
        x = 0; //reset x because why not
      }

      if (mageDead) {                  //she dead - tree
        console.log("Mage died");   
        
        await ƒS.Speech.tell(characters.general, "We have to go NOW, this is not a joke!");
        await ƒS.Speech.tell(characters.general, "One scout is missing and that brings up the topic, what the fuck is already out there");
        await ƒS.Speech.tell(characters.smage, "Thats not good...");

        await ƒS.Speech.tell(characters.narrator, "Is this really Hell?");
        await ƒS.Speech.tell(characters.narrator, "This seems so unreal, but the Air is heavy and its way too warm");


      }

      if (!mageDead) {                 //she aint dead - tree
        console.log("Mage diedn't"); 

        await ƒS.Speech.tell(characters.narrator, "The Air is thick and hard to breath, as you look around yourself you notice the intense heat around you.");
        await ƒS.Speech.tell(characters.narrator, "Is this really Hell?");
        
        await ƒS.Speech.tell(characters.general, "Okay let's go, follow the route of those sticks in the ground.");
        await ƒS.Speech.tell(characters.general, "We have to escape quietly, the scouts already saw some minor Demons coming close to us.");
        await ƒS.Speech.tell(characters.smage, "Minor demons are still pretty scary if I might add that. They're smaller but way faster.");
        await ƒS.Speech.tell(characters.smage, "Aaaaand that's why we have to escape quietly, we cant outrun them.");

      }


      await ƒS.Character.show(characters.general, characters.general.pose.base, ƒS.positionPercent(30, 90));
      await ƒS.update();

      



    }
}