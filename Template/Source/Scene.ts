namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      narrator: {
          T0000: "You Died.",
          T0001: "You will be judged infront of the Eternities of the everliving astral World."

      },
      aisaka: {
          T0000: "No",
          T0001: "NoNo"
      }
  };


    await ƒS.Location.show(locations.bedroom);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.aisaka, text.aisaka.T0000);
    await ƒS.Speech.tell(characters.aisaka, "Hi2");
    await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromLeftToRight());
    await ƒS.Character.hide(characters.aisaka);


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



  }
}