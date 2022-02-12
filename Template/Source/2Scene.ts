namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("2 Intro Scene starting");
//Texte
    let text = {
      narrator: {
          T0000: "You Died.",
          T0001: "You will be judged infront of the Eternities of the everliving astral World.",
          T0002: ".....",
          T0003: "You were found guilty by the ten commandments.",
          T0004: "You will suffer in Hell",
          T0005: "You will suffer...",
          T0006: "You will..."

      }
  };

//Actual timeline
    
    await ƒS.Location.show(locations.introduction);
    
    await ƒS.update(transition.cut.duration, transition.cut.alpha, transition.cut.edge);
    await ƒS.Sound.play(sound.backgroundTheme, 0.1, true);
    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0002 + ".....");
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
    //await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromLeftToRight());
    //await ƒS.Character.hide(characters.aisaka);


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


    //await ƒS.Speech.tell(characters.aisaka, text.aisaka.T0001);

    //Inventory Befehle
    //ƒS.Inventory.add(items.pen);
    //await ƒS.Inventory.open();
    //await ƒS.Inventory.close();


    // Menü



  }
}