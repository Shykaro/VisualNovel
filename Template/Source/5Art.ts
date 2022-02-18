namespace Template {
    export async function Artifact(): ƒS.SceneReturn {
      console.log("5 Artifact Scene starting");

        //Texte bzw. used characters in this scene.
      let text = {
        narrator: {
            T0001: "",
        },
        smage: {
            T0001: "",
        },
        general: {
            T0001: "",
        },
        assassin: {
            T0001: ""
        }
    };

    await ƒS.Location.show(locations.openfield);
      await ƒS.update(transition.donner3.duration, transition.donner3.alpha, transition.donner3.edge);
      await ƒS.update(1);

    await ƒS.Speech.tell(characters.narrator, "As you enter the tent, you're met by a fierce and unwelcomed look.");
    await ƒS.Character.show(characters.mara, characters.mara.pose.base, ƒS.positionPercent(30, 70));



    }
}