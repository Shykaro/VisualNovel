namespace Template {
    export async function ReIntroduction(): ƒS.SceneReturn {
      console.log("1 Pre Intro Scene starting");
      //diese Szene wird nur angezeigt wenn man bereits einmal gestorben ist und von vorne spielt.

      /* Checkblock.
      EndingACheck = 0;
      EndingBCheck = 0;
      EndingCCheck = 0;
      EndingDCheck = 0;
      EndingECheck = 0;
      EndingFCheck = 0;
      EndingGCheck = 0;
      */

      endingACheck = localStorage.getItem("EndingACheck");
      endingA = localStorage.getItem("EndingA");

      if (endingACheck == "1") {
        //ganzes Re:intro szenario hier. Hochmuts Todsünde.
        await ƒS.Speech.tell(characters.narrator, "The Sin of Pride let's people think higher of themselves as they should.");
        await ƒS.Speech.tell(characters.narrator, "Never overestimate yourself.");
      }

      if (endingBCheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      if (endingCCheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      if (endingDCheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      if (endingECheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      if (endingFCheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      if (endingGCheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      



      //ggf. bei zeit auf i schleife mit array abfrage für tode abändern.
      if (endingA == "1" && endingB == "1" && endingC == "1" && endingD == "1" && endingE == "1" && endingF == "1" && endingG == "1") {
        //Die todsünden abgeschlossen, aufpassen, selber tod zählt auch den todwert hoch. Hier also maybe für jeden tod verschiedene werte festlegen und alle einzelon abfragen
        //Real ending.
        return "9TrueEnding"; //jumps to scene 9
      }


    }
}