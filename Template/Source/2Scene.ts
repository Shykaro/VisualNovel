namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");
//Texte
    let text = {
      narrator: {
          T0000: "You Died.",
          T0001: "You will be judged infront of the Eternities of the everliving astral World.",
          T0002: "...",
          T0003: "You were found guilty by the ten commandments.",
          T0004: "You will suffer in Hell",
          T0005: "You will suffer in Hell",
          T0006: "You will suffer in Hell",

      },
      aisaka: {
          T0000: "No",
          T0001: "NoNo"
      }
  };

//Actual timeline
    await ƒS.Location.show(locations.introduction);
    await ƒS.Sound.play(sound.backgroundTheme, 0.1, true);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
    //await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromLeftToRight());
    //await ƒS.Character.hide(characters.aisaka);


    let firstDialogueElementOptions = {
      iSayOk: "OK.",
      iSayYes: "ja",
      iSayNo: "no"
    };

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");


    switch (firstDialogueElement) {
      case firstDialogueElementOptions.iSayOk:
        await ƒS.Speech.tell(characters.aisaka, "Hi2.");
        break;
    
      case firstDialogueElementOptions.iSayYes:
        await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.center);
        break;
      case firstDialogueElementOptions.iSayNo:
        await ƒS.Speech.tell(characters.aisaka, text.aisaka.T0001);
        break;
    }


    await ƒS.Speech.tell(characters.aisaka, text.aisaka.T0001);

    //Inventory Befehle
    ƒS.Inventory.add(items.pen);
    await ƒS.Inventory.open();
    await ƒS.Inventory.close();


    // Menü



  }
}