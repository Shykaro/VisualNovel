namespace Template {
    export async function HauptVersteck(): ƒS.SceneReturn {
      console.log("4 HV Scene starting");

      //Texte
      let text = {
      narrator: {
          T0001: "",
          T0002: "",
          T0003: "",
          T0004: "",
      },
      smage: {
          T0001: "",
          T0002: "",
          T0003: "",
          T0004: "",
      },
      general: {
          T0001: "",
          T0002: "",
          T0003: "",
          T0004: "",
      },
      scout: {
          T0001: ""
      }
  };

      // für Platzhalter für komisches Zeug
      let mageDead: boolean; //mage dead?
      let askAgain: boolean = true;
      if (x == 4 || x > 4) {
        mageDead = true;
      }


      await ƒS.Speech.tell(characters.narrator, "After a quite long time you arrive at what seems to be an hidden entrance.");
      await ƒS.Speech.tell(characters.narrator, "Mara moves a stone aside you waves you to go ahead.");
      await ƒS.Speech.tell(characters.general, "We have arrived. Go ahead.");
      //inbetween fehlen kommentare von small mage, if shes not dead.

      await ƒS.Speech.tell(characters.narrator, "...");
      await ƒS.Speech.tell(characters.narrator, "After a rather long and difficult small cave you stand before a lively place.");
      await ƒS.Speech.tell(characters.narrator, "People talking and enjoying themselves, sounds of metal clinging, a lively bazaar, this doesn't look like hell.");
      await ƒS.Speech.tell(characters.general, "You will need some proper training, go to the barracks to learn something useful.");
      await ƒS.Speech.tell(characters.narrator, "Mara leaves you behind and seems to walk to a tent reserved for her.");

      //first dialogue option to ask questions
      let firstDialogueElementOptions = {
        iSayDot1: "Talk to Mara",
        iSayDot2: "Go check out the barracks",
      };

      let secondDialogueElementOptions = {
        iSayDot1: "Talk to the Scout",
        iSayDot2: "Go check out the barracks",
      };

      let thirdDialogueElementOptions = {
        iSayDot1: "Who are you?",
        iSayDot2: "What kind of creatures were those things back then?",
        iSayDot3: "Do you think she will be okay?",
        iSayDot4: "Leave to the barracks.",
        iSayDot5: "Get some rest...",

      };

      let forthDialogueElementOptions = {
        iSayDot1: "",
        iSayDot2: "",
        iSayDot3: "",
      };

      let fifthDialogueElementOptions = {
        iSayDot1: "",
        iSayDot2: "",
      };


      
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "WVDialogueOption");
      let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueElementOptions, "WVDialogueOption");
      let thirdDialogueElement = await ƒS.Menu.getInput(thirdDialogueElementOptions, "WVDialogueOption");
      let forthDialogueElement = await ƒS.Menu.getInput(thirdDialogueElementOptions, "WVDialogueOption");
      let fifthDialogueElement = await ƒS.Menu.getInput(thirdDialogueElementOptions, "WVDialogueOption");
  
      switch (firstDialogueElement) { 
        case firstDialogueElementOptions.iSayDot1: //talk to Mara
          await ƒS.Speech.tell(characters.narrator, "You follow Mara to her tent, maybe you can get some more info on what is going on here.");
          
          
          if (mageDead) {                  //smage dead - talking to Mara tree
            console.log("Mage still dead");   
            await ƒS.Speech.tell(characters.narrator, "As you enter the tent, you're met by a fierce and unwelcomed look.");
            await ƒS.Speech.tell(characters.general, "Please leave, I dont have the nerves or time for you at the moment.");

            await ƒS.Speech.tell(characters.consciousness, "Seems like you should go do something else. Infront of the tent was the scout, maybe I should talk to her or go to the barracks...");
            //choose for second person to talk to, or go to barracks
            switch (secondDialogueElement) {
              case secondDialogueElementOptions.iSayDot1: //talk to scout
                await ƒS.Speech.tell(characters.narrator, "The Scout infront of the tent looks somewhat relaxed.");
                await ƒS.Speech.tell(characters.scout, "Wassup?");
                while (askAgain) { //talk to scout
                  switch (thirdDialogueElement) {
                    case thirdDialogueElementOptions.iSayDot1: //Who are you
                      await ƒS.Speech.tell(characters.scout, "So... I am the Scout and my Name is ???. Generally speaking I try to warn you guys when some of those Hellpuppies show up.");
                      await ƒS.Speech.tell(characters.scout, "I also know the terrain pretty well, so if you want to smuggle something. I am your Guy. Didn't hear that from me of course.");
                      await ƒS.Speech.tell(characters.scout, "If you dont want to lose a tongue, if you know what I mean. Haha- just kidding. Unless?...");
                      await ƒS.Speech.tell(characters.consciousness, "ok...");
                      break;
                    case thirdDialogueElementOptions.iSayDot2: //What creatures were those
                      await ƒS.Speech.tell(characters.scout, "You mean the Demons that teared up ??? ? We call 'em minor Demons, since they and dogs look kind of similar, we sometimes refer to them as Hellhounds.");
                      await ƒS.Speech.tell(characters.scout, "They are pretty fast so keep that in mind, usually you won't be able to outrun them. What ??? did really saved our asses today.");
                      await ƒS.Speech.tell(characters.scout, "If you think those are scary, oh man, wait for the Demonwalker, those things are a whole other class for themselves.");
                      await ƒS.Speech.tell(characters.consciousness, "It gets worse than those Hellhounds?... Oh god....");
                      break;
                    case thirdDialogueElementOptions.iSayDot3: //Will Mara be okay?
                      await ƒS.Speech.tell(characters.scout, "Who? Mara? Oh yea she's gonna be fine. She went through way worse.");
                      await ƒS.Speech.tell(characters.scout, "Though I do have to say that ??? was a great loss. Sure hope you were worth it.");
                      await ƒS.Speech.tell(characters.consciousness, "oh... am I special?");
                      await ƒS.Speech.tell(characters.scout, "You have that empty look in your eyes, yes you're special. There's a reason we seperated you from your way down to the depths of hell.");
                      await ƒS.Speech.tell(characters.scout, "Your entry performance just wasn't really, optimal I'd say.");
                      await ƒS.Speech.tell(characters.scout, "Listen here, Hell is Hell, people die but we fight for the greater cause. We are all ready to die the second we joined this organization.");
                      break;
                    case thirdDialogueElementOptions.iSayDot4: //go to barracks
                      await ƒS.Speech.tell(characters.consciousness, "Maybe I get some more info at the barracks.");
                      await ƒS.Speech.tell(characters.consciousness, "A bit of sparing wouldn't hurt either...");

                      await ƒS.Speech.tell(characters.unknown, "Hey there! I didn't see you here before, up for some training?");
                      await ƒS.Speech.tell(characters.narrator, "The soldier looking guy hands you a shortsword.");
                      await ƒS.Speech.tell(characters.unknown, "Let's see what you can do!");
                      //timeskip clash effect here
                      await ƒS.Speech.tell(characters.unknown, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                      //timeskip clash effect here
                      await ƒS.Speech.tell(characters.unknown, "Seems like you were some kind of fighter in your past life, very good foodwork. Nice!");
                      await ƒS.Speech.tell(characters.unknown, "Lets end it here for now, rest a bit, I will get us some tea.");
                      askAgain = false;
                      break;
                    case thirdDialogueElementOptions.iSayDot5: //Chill around
                      await ƒS.Speech.tell(characters.consciousness, "I need some rest after all of this geez...");
                      await ƒS.Speech.tell(characters.consciousness, "I am sure Mara will wake me up if she needs something.");
                      await ƒS.Speech.tell(characters.narrator, "You lean yourself against a big boulder around the corner and doze off...");
                      await ƒS.Speech.tell(characters.narrator, ".....");
                      askAgain = false;
                      break;
                  }

                }
                // ############################### end of dead mage choice tree ###############################
                break;
              case secondDialogueElementOptions.iSayDot2: //go to barracks
                await ƒS.Speech.tell(characters.consciousness, "Maybe I get some more info at the barracks.");
                await ƒS.Speech.tell(characters.consciousness, "A bit of sparing wouldn't hurt either...");

                await ƒS.Speech.tell(characters.unknown, "Hey there! I didn't see you here before, up for some training?");
                await ƒS.Speech.tell(characters.narrator, "The soldier looking guy hands you a shortsword.");
                await ƒS.Speech.tell(characters.unknown, "Let's see what you can do!");
                //timeskip clash effect here
                await ƒS.Speech.tell(characters.unknown, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                //timeskip clash effect here
                await ƒS.Speech.tell(characters.unknown, "Seems like you were some kind of fighter in your past life, very good foodwork. Nice!");
                await ƒS.Speech.tell(characters.unknown, "Lets end it here for now, rest a bit, I will get us some tea.");
                break;
            
            }

          }

          if (!mageDead) {                 //smage aint dead - mara talk tree
            console.log("Mage still did diedn't"); 

            await ƒS.Speech.tell(characters.narrator, "As you enter the tent, you're met by a serious yet friendly smile.");
            await ƒS.Speech.tell(characters.general, "You did quite well wunderkind, we have a lot to do.");
            await ƒS.Speech.tell(characters.narrator, characters.smage + " is standing next to her with a huge proud look on her face.");
            await ƒS.Speech.tell(characters.consciousness, "This could've gone terribly wrong.");

            switch (forthDialogueElement) { 
              case forthDialogueElementOptions.iSayDot1: //go to smage

              break;
              case forthDialogueElementOptions.iSayDot2: //go to scout

              break;
              case forthDialogueElementOptions.iSayDot3: //go to barracks

              break;
            }






          }
          break;

        case firstDialogueElementOptions.iSayDot2: // go to barracks
          await ƒS.Speech.tell(characters.consciousness, "Maybe I get some more info at the barracks.");
          await ƒS.Speech.tell(characters.consciousness, "A bit of sparing wouldn't hurt either...");

          await ƒS.Speech.tell(characters.unknown, "Hey there! I didn't see you here before, up for some training?");
          await ƒS.Speech.tell(characters.narrator, "The soldier looking guy hands you a shortsword.");
          await ƒS.Speech.tell(characters.unknown, "Let's see what you can do!");
          //timeskip clash effect here
          await ƒS.Speech.tell(characters.unknown, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
          //timeskip clash effect here
          await ƒS.Speech.tell(characters.unknown, "Seems like you were some kind of fighter in your past life, very good foodwork. Nice!");
          await ƒS.Speech.tell(characters.unknown, "Lets end it here for now, rest a bit, I will get us some tea.");
          break;
      }








      await ƒS.Character.show(characters.general, characters.general.pose.base, ƒS.positionPercent(30, 90));
      await ƒS.update();

      



    }
}