namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      narrator: {
          T0000: "",
          T0001: ""

      },
      aisaka: {
          T0000: "",
          T0001: ""
      }
  };


    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.aisaka, text.aisaka.T0000);
    await ƒS.Speech.tell(characters.aisaka, "Hi2");
    await ƒS.Character.hide(characters.aisaka);


    let firstDialogueElementOptions = {
      iSayOk: "OK.",
      iSayYes: "ja",
      iSayNo: "no"
    };

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");


    switch (firstDialogueElement){
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