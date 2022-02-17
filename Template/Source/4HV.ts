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
      assassin: {
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
        iSayDot1: "Talk to the Assassin",
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
        iSayDot1: "Go talk to ???",
        iSayDot2: "Go talk to the Assassin",
        iSayDot3: "Go to the barracks",
      };

      let fifthDialogueElementOptions = {
        iSayDot1: "",
        iSayDot2: "",
      };

      let thirdALTDialogueElementOptions = {
        iSayDot1: "Who are you?",
        iSayDot2: "What kind of creatures were those things back then?",
        iSayDot3: "Leave to the barracks.",
        iSayDot4: "Get some rest...",
      };

      let sixthDialogueElementOptions = {
        iSayDot1: "",
        iSayDot2: "",
      };


      
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "MaraORBarracks");                           
      
      //let fifthDialogueElement = await ƒS.Menu.getInput(fifthDialogueElementOptions, "WVDialogueOption");
      
      //let sixthDialogueElement = await ƒS.Menu.getInput(sixthDialogueElementOptions, "WVDialogueOption");
  
      switch (firstDialogueElement) { 
        case firstDialogueElementOptions.iSayDot1: //talk to Mara
          await ƒS.Speech.tell(characters.narrator, "You follow Mara to her tent, maybe you can get some more info on what is going on here.");
          
          
          if (mageDead) {                  //smage dead - talking to Mara tree
            console.log("Mage still dead");   
            await ƒS.Speech.tell(characters.narrator, "As you enter the tent, you're met by a fierce and unwelcomed look.");
            await ƒS.Speech.tell(characters.general, "Please leave, I dont have the nerves or time for you at the moment.");

            await ƒS.Speech.tell(characters.consciousness, "Seems like you should go do something else. Infront of the tent was the Assassin, maybe I should talk to her or go to the barracks...");
            //choose for second person to talk to, or go to barracks
            let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueElementOptions, "AfterMaraAssassinORBarracks");          //after Mara talk, mage is dead
            switch (secondDialogueElement) {
              case secondDialogueElementOptions.iSayDot1: //talk to assassin
                await ƒS.Speech.tell(characters.narrator, "The Assassin infront of the tent looks somewhat relaxed.");
                await ƒS.Speech.tell(characters.assassin, "Wassup?");
                askAgain = true;
                while (askAgain) { //talk to assassin repeat
                  let thirdDialogueElement = await ƒS.Menu.getInput(thirdDialogueElementOptions, "TalkToAssassinRepeat");
                  switch (thirdDialogueElement) {
                    case thirdDialogueElementOptions.iSayDot1: //Who are you
                      await ƒS.Speech.tell(characters.assassin, "So... I am the Assassin and my Name is ???. Generally speaking I try to warn you guys when some of those Hellpuppies show up.");
                      await ƒS.Speech.tell(characters.assassin, "I also know the terrain pretty well, so if you want to smuggle something. I am your Guy. Didn't hear that from me of course.");
                      await ƒS.Speech.tell(characters.assassin, "If you dont want to lose a tongue, if you know what I mean. Haha- just kidding. Unless?...");
                      await ƒS.Speech.tell(characters.consciousness, "ok...");
                      break;
                    case thirdDialogueElementOptions.iSayDot2: //What creatures were those
                      await ƒS.Speech.tell(characters.assassin, "You mean the Demons that teared up ??? ? We call 'em minor Demons, since they and dogs look kind of similar, we sometimes refer to them as Hellhounds.");
                      await ƒS.Speech.tell(characters.assassin, "They are pretty fast so keep that in mind, usually you won't be able to outrun them. What ??? did really saved our asses today.");
                      await ƒS.Speech.tell(characters.assassin, "If you think those are scary, oh man, wait for the Demonwalkers, those things are a whole other class for themselves.");
                      await ƒS.Speech.tell(characters.consciousness, "It gets worse than those Hellhounds?... Oh god....");
                      break;
                    case thirdDialogueElementOptions.iSayDot3: //Will Mara be okay?
                      await ƒS.Speech.tell(characters.assassin, "Who? Mara? Oh yea she's gonna be fine. She went through way worse.");
                      await ƒS.Speech.tell(characters.assassin, "Though I do have to say that ??? was a great loss. Sure hope you were worth it.");
                      await ƒS.Speech.tell(characters.consciousness, "oh... am I special?");
                      await ƒS.Speech.tell(characters.assassin, "You have that empty look in your eyes, yes you're special. There's a reason we seperated you from your way down to the depths of hell.");
                      await ƒS.Speech.tell(characters.assassin, "Your entry performance just wasn't really, optimal I'd say.");
                      await ƒS.Speech.tell(characters.assassin, "Listen here, Hell is Hell, people die but we fight for the greater cause. We are all ready to die the second we joined this organization.");
                      break;
                    case thirdDialogueElementOptions.iSayDot4: //go to barracks
                      await ƒS.Speech.tell(characters.consciousness, "Maybe I get some more info at the barracks.");
                      await ƒS.Speech.tell(characters.consciousness, "A bit of sparing wouldn't hurt either...");

                      await ƒS.Speech.tell(characters.trainer, "Hey there! I didn't see you here before, up for some training?");
                      await ƒS.Speech.tell(characters.narrator, "The soldier looking guy hands you a shortsword.");
                      await ƒS.Speech.tell(characters.trainer, "Let's see what you can do!");
                      //timeskip clash effect here
                      await ƒS.Speech.tell(characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                      //timeskip clash effect here
                      await ƒS.Speech.tell(characters.trainer, "Seems like you were some kind of fighter in your past life, very good foodwork. Nice!");
                      await ƒS.Speech.tell(characters.trainer, "Lets end it here for now, rest a bit, I will get us some tea.");
                      //Skill++
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

                await ƒS.Speech.tell(characters.trainer, "Hey there! I didn't see you here before, up for some training?");
                await ƒS.Speech.tell(characters.narrator, "The soldier looking guy hands you a shortsword.");
                await ƒS.Speech.tell(characters.trainer, "Let's see what you can do!");
                //timeskip clash effect here
                await ƒS.Speech.tell(characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                //timeskip clash effect here
                await ƒS.Speech.tell(characters.trainer, "Seems like you were some kind of fighter in your past life, very good foodwork. Nice!");
                await ƒS.Speech.tell(characters.trainer, "Lets end it here for now, rest a bit, I will get us some tea.");
                //Skill++
                break;
            
            }

          }

          if (!mageDead) {                 //smage aint dead - mara talk tree
            console.log("Mage still did diedn't"); 

            await ƒS.Speech.tell(characters.narrator, "As you enter the tent, you're met by a serious yet friendly smile.");
            await ƒS.Speech.tell(characters.general, "You did quite well wunderkind, we have a lot to do.");
            await ƒS.Speech.tell(characters.narrator, characters.smage + " is standing next to her with a huge proud look on her face.");
            await ƒS.Speech.tell(characters.consciousness, "This could've gone terribly wrong.");

              //need more Mara talk, how
            let forthDialogueElement = await ƒS.Menu.getInput(forthDialogueElementOptions, "TalkToMageORAssassinOrBarracks,AfterMara"); //after mara talk mage not dead tree
            switch (forthDialogueElement) { 
              case forthDialogueElementOptions.iSayDot1: //go to smage
                //++ Einfluss, via meter??
                await ƒS.Speech.tell(characters.smage, "Hi there! Hope you're doing good, must've been quite a bit much for you.");
                await ƒS.Speech.tell(characters.smage, "So basically let me tell you a bit about our organization and goals.");
                await ƒS.Speech.tell(characters.smage, "We're currently located in Labeb, the safetown for all stranded souls in this Hell.");
                await ƒS.Speech.tell(characters.smage, "And if you didn't already catch it, yes we're indeed in Hell. Quite lovely isn't it?");
                await ƒS.Speech.tell(characters.consciousness, "Not really no.");
                await ƒS.Speech.tell(characters.smage, "We're currently trying to secure a very important artifact called the Dogma.");
                await ƒS.Speech.tell(characters.smage, "And this is where you come into play.");
                await ƒS.Speech.tell(characters.smage, "You are what most of us call, a Boundsoul. That means you're special. In a way.");
                await ƒS.Speech.tell(characters.smage, "You see, none of us can hold on to an artifact too long without going insane. So we need super important guys like you.");
                await ƒS.Speech.tell(characters.smage, "We're all after the same goal here, salvation. So just stick to us and this horror will be of short notice.");
                await ƒS.Speech.tell(characters.smage, "And whatever happens, I will protect you! You can always count on me ok? We got this!");
                await ƒS.Speech.tell(characters.smage, "Though I'd advise you to look by at the barracks, train a bit so you get used to fighting if the situation will go not as planned.");
                await ƒS.Speech.tell(characters.smage, "But under Boss' management, everything should go smoooooth. Boss has some kind of meeting which I have to attend. See you later!");
                await ƒS.Speech.tell(characters.consciousness, "Wow, that was quite a lot to process...");
                await ƒS.Speech.tell(characters.narrator, "Everyone seems busy, you make your way to the barracks as " + characters.smage + " has adviced you.");
                await ƒS.Speech.tell(characters.consciousness, "Training is not a bad idea after all.");

                //Going to barracks, cut jump
                await ƒS.Speech.tell(characters.trainer, "Hey there! I didn't see you here before, up for some training?");
                await ƒS.Speech.tell(characters.narrator, "The soldier looking guy hands you a shortsword.");
                await ƒS.Speech.tell(characters.trainer, "Let's see what you can do!");
                  //timeskip clash effect here
                await ƒS.Speech.tell(characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                  //timeskip clash effect here
                await ƒS.Speech.tell(characters.trainer, "Seems like you were some kind of fighter in your past life, very good foodwork. Nice!");
                await ƒS.Speech.tell(characters.trainer, "Lets end it here for now, rest a bit, I will get us some tea.");
                //Skill++
                break;
              case forthDialogueElementOptions.iSayDot2: //go to assassin
                askAgain = true;
                while (askAgain) { //Talk to assassing repeat
                  let thirdALTDialogueElement = await ƒS.Menu.getInput(thirdALTDialogueElementOptions, "TalkToAssassinRepeatSmageAlive");
                  switch (thirdALTDialogueElement) {
                    case thirdALTDialogueElementOptions.iSayDot1: //Who are you
                      await ƒS.Speech.tell(characters.assassin, "So... I am the Assassin and my Name is ???. Generally speaking I try to warn you guys when some of those Hellpuppies show up.");
                      await ƒS.Speech.tell(characters.assassin, "I also know the terrain pretty well, so if you want to smuggle something. I am your Guy. Didn't hear that from me of course.");
                      await ƒS.Speech.tell(characters.assassin, "If you dont want to lose a tongue, if you know what I mean. Haha- just kidding. Unless?...");
                      await ƒS.Speech.tell(characters.consciousness, "ok...");
                      break;
                    case thirdALTDialogueElementOptions.iSayDot2: //What creatures were those
                      await ƒS.Speech.tell(characters.assassin, "You mean some of the creatures I've seen? Most of 'em are minor Demons, since they and dogs look kind of similar, we sometimes refer to them as Hellhounds.");
                      await ƒS.Speech.tell(characters.assassin, "They are pretty fast so keep that in mind, usually you won't be able to outrun them.");
                      await ƒS.Speech.tell(characters.assassin, "If you think those are scary, oh man, wait for the Demonwalkers, those things are a whole other class for themselves.");
                      await ƒS.Speech.tell(characters.consciousness, "Theres different beasts?!... Oh god....");
                      break;
                    case thirdALTDialogueElementOptions.iSayDot3: //go to barracks
                      await ƒS.Speech.tell(characters.consciousness, "Maybe I get to know some people at the barracks.");
                      await ƒS.Speech.tell(characters.consciousness, "A bit of sparing wouldn't hurt either...");

                      await ƒS.Speech.tell(characters.trainer, "Hey there! I didn't see you here before, up for some training?");
                      await ƒS.Speech.tell(characters.narrator, "The soldier looking guy hands you a shortsword.");
                      await ƒS.Speech.tell(characters.trainer, "Let's see what you can do!");
                      //timeskip clash effect here
                      await ƒS.Speech.tell(characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                      //timeskip clash effect here
                      await ƒS.Speech.tell(characters.trainer, "Seems like you were some kind of fighter in your past life, very good foodwork. Nice!");
                      await ƒS.Speech.tell(characters.trainer, "Lets end it here for now, rest a bit, I will get us some tea.");
                      //Skill++
                      askAgain = false;
                      break;
                    case thirdALTDialogueElementOptions.iSayDot4: //Chill around
                      await ƒS.Speech.tell(characters.consciousness, "I need some rest after all of this geez...");
                      await ƒS.Speech.tell(characters.consciousness, "I am sure Mara will wake me up if she needs something.");
                      await ƒS.Speech.tell(characters.narrator, "You lean yourself against a big boulder around the corner and doze off...");
                      await ƒS.Speech.tell(characters.narrator, ".....");
                      askAgain = false;
                      break;
                  }
                }
                break;
              case forthDialogueElementOptions.iSayDot3: //go to barracks
                await ƒS.Speech.tell(characters.consciousness, "Maybe I get some more info at the barracks.");
                await ƒS.Speech.tell(characters.consciousness, "A bit of sparing wouldn't hurt either...");

                await ƒS.Speech.tell(characters.trainer, "Hey there! I didn't see you here before, up for some training?");
                await ƒS.Speech.tell(characters.narrator, "The soldier looking guy hands you a shortsword.");
                await ƒS.Speech.tell(characters.trainer, "Let's see what you can do!");
                //timeskip clash effect here
                await ƒS.Speech.tell(characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                //timeskip clash effect here
                await ƒS.Speech.tell(characters.trainer, "Seems like you were some kind of fighter in your past life, very good foodwork. Nice!");
                await ƒS.Speech.tell(characters.trainer, "Lets end it here for now, rest a bit, I will get us some tea.");
                //Skill++
                break;
            }
          }
          break;

        case firstDialogueElementOptions.iSayDot2: // go to barracks
          await ƒS.Speech.tell(characters.consciousness, "Maybe I get some more info at the barracks.");
          await ƒS.Speech.tell(characters.consciousness, "A bit of sparing wouldn't hurt either...");

          await ƒS.Speech.tell(characters.trainer, "Hey there! I didn't see you here before, up for some training?");
          await ƒS.Speech.tell(characters.narrator, "The soldier looking guy hands you a shortsword.");
          await ƒS.Speech.tell(characters.trainer, "Let's see what you can do!");
          //timeskip clash effect here
          await ƒS.Speech.tell(characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
          //timeskip clash effect here
          await ƒS.Speech.tell(characters.trainer, "Seems like you were some kind of fighter in your past life, very good foodwork. Nice!");
          await ƒS.Speech.tell(characters.trainer, "Lets end it here for now, rest a bit, I will get us some tea.");
          break;
      }

      //bang sound insert here
      await ƒS.Speech.tell(characters.narrator, "A loud bang occurs");







      



    }
}