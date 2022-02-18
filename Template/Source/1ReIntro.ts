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

      EndingACheck = localStorage.getItem("EndingACheck");
      EndingA = localStorage.getItem("EndingA");

      if (EndingACheck == "1") {
        //ganzes Re:intro szenario hier. Hochmuts Todsünde.
        await ƒS.Speech.tell(characters.narrator, "The Sin of Pride let's people think higher of themselves as they should.");
        await ƒS.Speech.tell(characters.narrator, "Never overestimate yourself.");
      }

      if (EndingBCheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      if (EndingCCheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      if (EndingDCheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      if (EndingECheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      if (EndingFCheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      if (EndingGCheck == "1") {
        //ganzes Re:intro szenario hier.
      }

      



      //ggf. bei zeit auf i schleife mit array abfrage für tode abändern.
      if (EndingA == "1" && EndingB == "1" && EndingC == "1" && EndingD == "1" && EndingE == "1" && EndingF == "1" && EndingG == "1") {
        //Die todsünden abgeschlossen, aufpassen, selber tod zählt auch den todwert hoch. Hier also maybe für jeden tod verschiedene werte festlegen und alle einzelon abfragen
        //Real ending.
        return "9TrueEnding"; //jumps to scene 9
      }


    }
}