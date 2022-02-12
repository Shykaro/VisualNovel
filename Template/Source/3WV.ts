namespace Template {
    export async function WiderstandsVersteck(): ƒS.SceneReturn {
      console.log("3 WV Scene starting");

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
      await ƒS.Location.show(locations.bedroom);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
      await ƒS.update(transition.donner1.duration, transition.donner1.alpha, transition.donner1.edge);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
      await ƒS.update(transition.donner2.duration, transition.donner2.alpha, transition.donner2.edge);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
      await ƒS.update(transition.donner3.duration, transition.donner3.alpha, transition.donner3.edge);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
      await ƒS.update(transition.arcane.duration, transition.arcane.alpha, transition.arcane.edge);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
      await ƒS.Sound.play(sound.backgroundTheme, 0.1, true);
    //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(30, 100));
      await ƒS.update();



    }
}