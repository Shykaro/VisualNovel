namespace Template {
    export async function ReIntroduction(): ƒS.SceneReturn {
      console.log("1 Pre Intro Scene starting");
      //diese Szene wird nur angezeigt wenn man bereits einmal gestorben ist und von vorne spielt.

      if (y > 0 && y != 7) {
        //ganzes Re:intro szenario hier.
      }


      //ggf. bei zeit auf i schleife mit array abfrage für tode abändern.
      if (EndingA > 0 && EndingB > 0 && EndingC > 0 && EndingD > 0 && EndingE > 0 && EndingF > 0 && EndingG > 0) {
        //Die todsünden abgeschlossen, aufpassen, selber tod zählt auch den todwert hoch. Hier also maybe für jeden tod verschiedene werte festlegen und alle einzelon abfragen
        //Real ending.
        return "9TrueEnding"; //jumps to scene 9
      }


    }
}