namespace Template {
  export async function Intro(): ƒS.SceneReturn {
    console.log("2 Intro Scene starting");
//Texte
    let text = {
      narrator: {
          T0000: "You died.",
          T0001: "You will be judged infront of the Eternities of the everliving Astral World.",
          T0002: ".....",
          T0003: "You were found guilty by the ten commandments.",
          T1003: "You shall be judged and tested in a trial.",
          T0004: "Suffer in Hell",
          T0005: "Suffer...",
          T0006: "..."

      }
  };

//Actual timeline
  
    await ƒS.Location.show(locations.keys);
    await ƒS.update(1);
    await delay_5sec;

    await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
    await delay_5sec;
    
    await ƒS.Location.show(locations.blackscreen);
    await ƒS.update(1);

    await ƒS.Location.show(locations.introduction);

    await ƒS.update(transition.cut.duration, transition.cut.alpha, transition.cut.edge);
    await ƒS.Sound.play(sound.backgroundtheme, 0.1, true);


    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);

    //dataForSave.scoreRyu += 50; OBSOLET
    //dataForSave.scoreForRyu = "You earned 50 points on Ryus bar",

    //document.getElementsByName("scoreRyu").forEach(meterStuff => meterStuff.hidden = true);
    //document.getElementsByName("scoreForRyu").forEach(meterStuff => meterStuff.hidden = true);

    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);

    //document.getElementsByName("scoreRyu").forEach(meterStuff => meterStuff.hidden = false);
    //document.getElementsByName("scoreForRyu").forEach(meterStuff => meterStuff.hidden = false);

    await ƒS.Speech.tell(characters.narrator, text.narrator.T0002 + ".....");
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T1003); //added als hinweis.
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
    await ƒS.Sound.fade(sound.backgroundtheme, 0, 1);



    let firstDialogueElementOptions = {
      iSayDot1: "...",
      iSayDot2: "...",
      iSayDot3: "..."
    };

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");


    switch (firstDialogueElement) {
      case firstDialogueElementOptions.iSayDot1:
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        break;
    
      case firstDialogueElementOptions.iSayDot2:
        //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.center);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        break;
      case firstDialogueElementOptions.iSayDot3:
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        break;
    }

  }
}