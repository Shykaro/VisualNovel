namespace Template {
    export async function WiderstandsVersteck(): ƒS.SceneReturn {
      console.log("3 WV Scene starting");

      //Texte
      let text = {
      narrator: {
          T0001: ".....",
          T0002: "",
          T0003: "",
          T0004: "",
      },
      smage: {
        T0001: "Boss I did it!!",
        T0002: "I intercepted the beam and got him out of there!",
        T0003: "My name is Pia, this will be a bit much but we have to-",
        T0010: "I intercepted your soul from the beam of death in the Sky and therefore saved you from the hands of Satan hehe.",
        T0011: "I am Pia as I already said, and we call our little organization the forth Magi.",
        T0012: "Quite literally in Hell.",
        T0013: "It's hell, a lot to explain but we should really go!",
        T0014: "Finally, please grab your sword and let's go!",
    },
      general: {
        T0001: "Thats wonderful, love but we have really got to get the fuck out of here!",
        T0002: "There's no time!!",
        T0003: "We have to fucking move!",
        T0000: "",
        T0010: "Is he asking questions? We have to MOVE goddamnit!!",
        T0011: "Save your hospitality for later Pia.",
        T0012: "",

      },
  };
      // für Platzhalter für komisches Zeug
      //let x: number = 0;
      let askAgain: boolean = true;
      let mageDead: boolean = false; //smage dead?


  /* would like multiple transitions for gewitter effekt :( look discord for ref by jirka 12.02*/
      await ƒS.Location.show(locations.openfield);
      await ƒS.update(transition.donner1.duration, transition.donner1.alpha, transition.donner1.edge);
      await ƒS.update(1);

      await ƒS.Location.show(locations.blackscreen);
      await ƒS.update(transition.arcane.duration, transition.arcane.alpha, transition.arcane.edge);
      await ƒS.update(1);

      await ƒS.Location.show(locations.openfield);
      await ƒS.update(transition.donner2.duration, transition.donner2.alpha, transition.donner2.edge);
      await ƒS.update(1);
      //await ƒS.update(transition.donner2.duration, transition.donner2.alpha, transition.donner2.edge);
      //await ƒS.update(transition.donner3.duration, transition.donner3.alpha, transition.donner3.edge);
      //await ƒS.update(transition.arcane.duration, transition.arcane.alpha, transition.arcane.edge);
      await ƒS.Sound.play(sound.wvtheme, 0.1, true);
      //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(30, 100));

      // 70 für rechten Char, 30 für linken Char
      await ƒS.Character.show(characters.smage, characters.smage.pose.base, ƒS.positionPercent(70, 70));
      await ƒS.update();

      //Introduction von smage und general
      await ƒS.Speech.tell(characters.smage, text.smage.T0001);
      await ƒS.Speech.tell(characters.smage, text.smage.T0002);
      
      await ƒS.Character.show(characters.general, characters.general.pose.base, ƒS.positionPercent(30, 70));
      await ƒS.update();

      await ƒS.Speech.tell(characters.general, text.general.T0001);
      await ƒS.Speech.tell(characters.smage, text.smage.T0003);
      await ƒS.Speech.tell(characters.general, text.general.T0002);
      await ƒS.Speech.tell(characters.general, text.general.T0003);
      



      //first dialogue option to ask questions
      let firstDialogueElementOptions = {
        iSayDot1: "What the fuk happened?",
        iSayDot2: "Who are all of you??",
        iSayDot3: "Where the hell am I?",
        iSayDot4: "What in Godsname is all of this??",
        iSayDot5: "Ugh okay let's get outta here!"
      };
      
      //you can ask all questions if u want to
      while (askAgain) {
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "NormalButtonDialogue");
  
      switch (firstDialogueElement) {
        case firstDialogueElementOptions.iSayDot1:
          await ƒS.Speech.tell(characters.smage, text.smage.T0010);
          x++;

          break;
        case firstDialogueElementOptions.iSayDot2:
          //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.center);
          await ƒS.Speech.tell(characters.smage, text.smage.T0011);
          x++;
          await ƒS.Speech.tell(characters.general, text.general.T0011);

          break;
        case firstDialogueElementOptions.iSayDot3:
          await ƒS.Speech.tell(characters.smage, text.smage.T0012);
          x++;
          await ƒS.Speech.tell(characters.general, text.general.T0010);

          break;
        case firstDialogueElementOptions.iSayDot4:
          await ƒS.Speech.tell(characters.smage, text.smage.T0013);
          x++;

          break;
        case firstDialogueElementOptions.iSayDot5:
          await ƒS.Speech.tell(characters.smage, text.smage.T0014);
          askAgain = false;
          break;
      }
    }

    //asking all will cost you tho, lol

      if (x == 4 || x > 4) {
        mageDead = true;
      }

      if (mageDead) {                  //she dead - tree
        console.log("Mage died");   
        
        await ƒS.Speech.tell(characters.general, "Pia, we have to go NOW, this is not a joke!");
        await ƒS.Speech.tell(characters.pia, "Alrighty boss! Come to think of it, what's your Name?");
        dataForSave.PName = await ƒS.Speech.getInput();
        //change smages name to new Name Pia

        await ƒS.Speech.tell(characters.general, "One scout is missing and that brings up the question, what the fuck is already out there.");
        await ƒS.Speech.tell(characters.pia, "Thats not good...");

        await ƒS.Speech.tell(characters.pia, "Before we have to go, I have a small gift for you, take this.");
        await ƒS.Speech.tell(characters.pia, "It took a lot of work so please don't lose it okay?");
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);

        await ƒS.Speech.tell(characters.consciousness, "A rose from the small mage. This is a bit much to process, what is going on here?");

        await ƒS.Speech.tell(characters.consciousness, "Is this really Hell?");
        await ƒS.Speech.tell(characters.consciousness, "This seems so unreal, but the air is heavy and it's way too warm.");
        await ƒS.Sound.fade(sound.wvtheme, 0, 1);
        await ƒS.Speech.tell(characters.narrator, "Suddenly you see a drop of what seems to be acid fall to the ground next to you, burning the dirt beneath it.");
        await ƒS.Sound.play(sound.wvthemeBad, 0.1, true);
        await ƒS.Speech.tell(characters.narrator, "Above you, an absolute monstrosity of what seems to be a misformed Dog is looking with one of it's big Eyeballs.");
        await ƒS.Speech.tell(characters.narrator, "Terrible fear strikes you, what is this creature? How can something look so disgusting?!");

        await ƒS.Speech.tell(characters.pia, "Maraaaaaa theres one already hereeeee!!");
        await ƒS.Speech.tell(characters.narrator, "The small Mage grabs her staff and points it towards the hellish creature and whispers something you don't seem to understand.");
        await ƒS.Speech.tell(characters.narrator, "Out of nowhere a beam of ice shoots out of the tip from the little mages staff.");
        await ƒS.Speech.tell(characters.narrator, "The creature gets hit and falls to the ground, whimpering in agony until finally breathing it's last breath.");

        await ƒS.Speech.tell(characters.mara, "Fuck, it's already too late, Pia cover us! We have to run!!");
        await ƒS.Speech.tell(characters.narrator, "The red-haired girl grabs your arm and nearly rips it off as she seems to drag your unwilling body behind her.");
        
        await ƒS.Character.animate(characters.smage, characters.pia.pose.base, fromRightToRight()); //muss noch smage sein da char davor dieser war.
        await ƒS.Character.hide(characters.smage);
        await ƒS.update(1);
        

        await ƒS.Speech.tell(characters.mara, "All because you wouldn't fucking listen... GO! We need to move!!");

        await ƒS.Speech.tell(characters.pia, "Captain watch out!!"); 
        await ƒS.Character.show(characters.pia, characters.smage.pose.base, ƒS.positionPercent(70, 70));
        //await ƒS.Character.animate(characters.pia, characters.smage.pose.base, BackToNormal());
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pia);
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.narrator, "As you try to escape, one of these hell dogs seems to appear out of nowhere.");

        await ƒS.Speech.tell(characters.narrator, "While spotting the first, another one is already running alongside you, in matter of seconds you are surrounded.");
        await ƒS.Speech.tell(characters.pia, "Shields up!!");
        await ƒS.Character.show(characters.pia, characters.pia.pose.base, ƒS.positionPercent(70, 70));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pia);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.mara, "God fucking damnit!");
        await ƒS.Speech.tell(characters.narrator, "The red-haired girl grabs you tight, raises her shield towards the sky.");
        await ƒS.Character.hide(characters.general);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, "You can't move, but you glance at the small mage that has been left behind to cover us.");
        await ƒS.Speech.tell(characters.narrator, "A bright light shines from her staff, attracting the attention of every single helldog around her.");
        await ƒS.Speech.tell(characters.narrator, "In a big cracking thunder sound she smashes the staff into the ground!");
        await ƒS.Sound.play(sound.boom, 0.3, true);
        await ƒS.Speech.tell(characters.narrator, "Bitter freezing cold surrounds you in a matter of seconds, you seem to hear a sound of rain... rain in hell?!");
        await ƒS.Speech.tell(characters.narrator, "As you come to realise, a huge storm of ice spikes is raining with enormous speed from the sky.");
        await ƒS.Speech.tell(characters.narrator, "Whining after whining, you hear the countless Helldogs around you fall to the ground...");

        await ƒS.Speech.tell(characters.mara, "You dumb idiot...");
        await ƒS.Speech.tell(characters.narrator, "The red-haired girl lowers her shield, takes a quick look around and grabs your arm with sheer strength.");
        await ƒS.Speech.tell(characters.mara, "Now is our time to run.");
        await ƒS.Speech.tell(characters.narrator, "Finally catching your breath, you understand and run, following the redhaired girls path.");
        await ƒS.Speech.tell(characters.narrator, "One last time you turn around, daring a glance at the powerful little mage who seemed to have saved you twice.");
        await ƒS.Speech.tell(characters.narrator, "Only to notice a girl laying on the ground, seemingly unconscious.");
        await ƒS.Speech.tell(characters.narrator, "There are Helldogs surrounding her slowly as you scream for the redhaired girl.");
        await ƒS.Speech.tell(characters.narrator, "While noticing she is already looking towards your direction, tears running down her determined Eyes.");
        await ƒS.Speech.tell(characters.consciousness, "She knew. You should've known. It's your fault...");

        let secondDialogueElementOptions = {
          iSayDot1: "Run back and help her.",
          iSayDot2: "Stick to the plan",
        };
        let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueElementOptions, "NormalButtonDialogue");

        switch (secondDialogueElement) {
          case secondDialogueElementOptions.iSayDot1:
            await ƒS.Speech.tell(characters.narrator, "With full determination you run back, trying to save the girl that saved you.");
            await ƒS.Speech.tell(characters.narrator, "Yet when you arrived, a horde of helldogs stare at you.");
            await ƒS.Speech.tell(characters.narrator, "Terrified by the view of severed bodyparts spreading across the ground.");
            await ƒS.Speech.tell(characters.narrator, "Having a look at the monster appearing right in front of you, chewing on what seems to be an arm, you collapse to the ground.");
            await ƒS.Speech.tell(characters.consciousness, "This isn't fair. A pointless Trial.");
            await ƒS.Speech.tell(characters.narrator, "Broken.");

            await ƒS.Speech.tell(characters.narrator, "YOU DIED");

            //Checkblock for deathcounter and ending checks.
            //localStorage.setItem('Deathcounter');
            localStorage.setItem("EndingACheck", "1");
            localStorage.setItem("EndingA", "1");
            window.location.reload(); //Force reload
            /*
            y++;
            EndingACheck = 1;
            EndingBCheck = 0;
            EndingCCheck = 0;
            EndingDCheck = 0;
            EndingECheck = 0;
            EndingFCheck = 0;
            EndingGCheck = 0;
            */

            //window.addEventListener("load", start); //does this work?? bruh this works. Genius... NVM IT DOES NOT, BIG MISTAKE
            console.log("!!!!!!!!!!!!!!!!! THIS SHOULD NOT STAND HERE !!!!!!!!!!!!!!!!!!!! CHECK 3WV.ts RESTART !!!!!!!!!!!!!!!!!!!!!!!!!")

            break;
          case secondDialogueElementOptions.iSayDot2:
            await ƒS.Speech.tell(characters.narrator, "Emptyheaded and overwhelmed you do what you've been told.");
            await ƒS.Speech.tell(characters.narrator, "You run...");
            await ƒS.Sound.fade(sound.wvthemeBad, 0, 1);
            break;
        }



      }

      if (!mageDead) {                 //she aint dead - tree
        console.log("Mage diedn't"); 

        await ƒS.Speech.tell(characters.narrator, "The Air is thick and hard to breath, as you look around you notice the intense heat around you.");
        await ƒS.Speech.tell(characters.consciousness, "Is this really Hell?");
        
        await ƒS.Speech.tell(characters.general, "Okay newbie, let's go, follow the route of those sticks in the ground.");
        await ƒS.Speech.tell(characters.general, "We have to escape quietly, the scouts already saw some minor Demons coming close to us.");
        await ƒS.Character.animate(characters.general, characters.general.pose.base, fromLeftToLeft());

        await ƒS.Speech.tell(characters.smage, "Minor demons are still pretty scary if I might add that. They're smaller but way faster.");
        await ƒS.Speech.tell(characters.smage, "Aaaaand that's why we have to escape quietly, we cant outrun them.");

        await ƒS.Speech.tell(characters.smage, "By the way, what's your name?");
        dataForSave.PName = await ƒS.Speech.getInput();

        await ƒS.Speech.tell(characters.smage, "Ohhh " + dataForSave.PName + " is a cute name");
        await ƒS.Speech.tell(characters.pia, "My Name is Pia and the boss over there is Mara");

        

        await ƒS.Speech.tell(characters.narrator, "Quietly under the orders of Mara the whole group sneaks towards the headquarters...");
        await ƒS.Character.animate(characters.smage, characters.smage.pose.base, fromRightToRight());

      }


      await ƒS.Character.hide(characters.smage);
      await ƒS.Character.hide(characters.pia);
      await ƒS.Character.hide(characters.general);
      await ƒS.Character.hide(characters.mara);
      await ƒS.update(1);
      //await ƒS.Character.show(characters.general, characters.general.pose.base, ƒS.positionPercent(30, 90));
      //await ƒS.update();

    }
}