namespace Template {
    export async function Artifact(): ƒS.SceneReturn {
      console.log("5 Artifact Scene starting");

        //Texte bzw. used characters in this scene.
      let text = {
        narrator: {
            T0001: ""
        },
        smage: {
            T0001: ""
        },
        general: {
            T0001: ""
        },
        assassin: {
            T0001: ""
        }
    };


      await ƒS.Location.show(locations.openfield);
      await ƒS.update(transition.donner1.duration, transition.donner1.alpha, transition.donner1.edge);
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.narrator, "Light shines in your face as you leave the small cave through which you just escaped the horror from.");
      await ƒS.Character.animate(characters.mara, characters.mara.pose.base, BackToNormal());
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.mara, "We will have to visit someone I didn't really want to visit yet.");
      await ƒS.Speech.tell(characters.mara, "Well, let's go.");
      await ƒS.Character.hide(characters.mara);
      await ƒS.update(1);
      await ƒS.Sound.fade(sound.hvtheme, 0, 1);

      await ƒS.Location.show(locations.blackscreen);
      await ƒS.update(transition.steps.duration, transition.steps.alpha, transition.steps.edge);
      await ƒS.update(1);
      await ƒS.Sound.play(sound.arttheme, 0.1, true);
      await ƒS.Location.show(locations.openfield);
      await ƒS.update(transition.donner2.duration, transition.donner2.alpha, transition.donner2.edge);
      await ƒS.update(1);

      
      
      await ƒS.Speech.tell(characters.narrator, "After a long journey on foot, you and the remaining survivors arrive at an old ruined mansion.");
      await ƒS.Speech.tell(characters.narrator, "No lifesigns hint of someone living in this ruin...");
      await ƒS.Character.show(characters.mara, characters.mara.pose.base, ƒS.positionPercent(30, 70));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.mara, "This should be the place, now where is that old hag.");
      await ƒS.Character.show(characters.bmage, characters.bmage.pose.base, ƒS.positionPercent(70, 70));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.bmage, "Excuse you, what did you just call me?");
      await ƒS.Speech.tell(characters.narrator, "A tall woman in white garment appears from the shadows of the abandoned mansion.");
      await ƒS.Speech.tell(characters.bmage, "It's not easy being 200 years old to you know.");
      await ƒS.Speech.tell(characters.bmage, "Mhhhh? you're quite a few less than I remember, did something happen?");
      await ƒS.Speech.tell(characters.mara, "Eh- Sure. We had quite the Rumble.");
      await ƒS.Speech.tell(characters.consciousness, "This conversation seems rather awkward.");
      await ƒS.Speech.tell(characters.bmage, "So how can I be of service to you?");
      await ƒS.Speech.tell(characters.mara, "We're here to claim the Dogma.");
      await ƒS.Speech.tell(characters.bmage, "Oh, the dusty old book is of interest to you? I am curious, what for?");
      await ƒS.Speech.tell(characters.mara, "Non of your business witch. I gave it to you in a trade of knowledge and here I am resolving that contract.");
      await ƒS.Speech.tell(characters.bmage, "Ahhh dont worry I don't have a problem with that contract.");
      await ƒS.Speech.tell(characters.bmage, "You do have to get it yourself however, it's in the hut in my Garden. I am kind of busy at the moment.");
      await ƒS.Speech.tell(characters.narrator, "The tall woman points towards an old wooden shag on the other side of her estate.");
      await ƒS.Speech.tell(characters.mara, "Ugh. Alright guys, let's move.");
      await ƒS.Speech.tell(characters.bmage, "Good luck!~");
      await ƒS.Speech.tell(characters.consciousness, "Somehow that good luck in combination with the smile on her face makes you uncomfortable.");
      await ƒS.Speech.tell(characters.narrator, "The woman gives you a sharp last look before you move along with the rest of the convoy.");
      await ƒS.Character.animate(characters.bmage, characters.bmage.pose.base, fromRightToRight());
      await ƒS.Character.hide(characters.bmage);
      await ƒS.Character.hide(characters.mara);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.narrator, "...");
      await ƒS.Location.show(locations.blackscreen);
      await ƒS.update(transition.steps.duration, transition.steps.alpha, transition.steps.edge);
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.narrator, "To be continued...");
      await ƒS.Speech.tell(characters.narrator, "################## Credits ################");
      await ƒS.Speech.tell(characters.narrator, "Music by Ivan Duch - https://ivanduch.itch.io/");
      await ƒS.Speech.tell(characters.narrator, "Explosion from https://pixabay.com/de/sound-effects/big-impact-7054/");
      await ƒS.Speech.tell(characters.narrator, "Some Pictures used from https://pixabay.com/");
      await ƒS.Speech.tell(characters.narrator, "Characters modified from https://oceansdream.itch.io/");
      await ƒS.Speech.tell(characters.narrator, "Backgrounds modified from https://ansimuz.itch.io/");
      await ƒS.Speech.tell(characters.narrator, "Thank you for playing! Have a wonderful day!");
      await delay_5sec;

    }
}