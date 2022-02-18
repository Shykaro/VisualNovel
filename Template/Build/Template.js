"use strict";
var Template;
(function (Template) {
    async function ReIntroduction() {
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
        Template.endingACheck = localStorage.getItem("EndingACheck");
        Template.endingA = localStorage.getItem("EndingA");
        if (Template.endingACheck == "1") {
            //ganzes Re:intro szenario hier. Hochmuts Todsünde.
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The Sin of Pride let's people think higher of themselves as they should.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Never overestimate yourself.");
        }
        if (Template.endingBCheck == "1") {
            //ganzes Re:intro szenario hier.
        }
        if (Template.endingCCheck == "1") {
            //ganzes Re:intro szenario hier.
        }
        if (Template.endingDCheck == "1") {
            //ganzes Re:intro szenario hier.
        }
        if (Template.endingECheck == "1") {
            //ganzes Re:intro szenario hier.
        }
        if (Template.endingFCheck == "1") {
            //ganzes Re:intro szenario hier.
        }
        if (Template.endingGCheck == "1") {
            //ganzes Re:intro szenario hier.
        }
        //ggf. bei zeit auf i schleife mit array abfrage für tode abändern.
        if (Template.endingA == "1" && Template.endingB == "1" && Template.endingC == "1" && Template.endingD == "1" && Template.endingE == "1" && Template.endingF == "1" && Template.endingG == "1") {
            //Die todsünden abgeschlossen, aufpassen, selber tod zählt auch den todwert hoch. Hier also maybe für jeden tod verschiedene werte festlegen und alle einzelon abfragen
            //Real ending.
            return "9TrueEnding"; //jumps to scene 9
        }
    }
    Template.ReIntroduction = ReIntroduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Intro() {
        console.log("2 Intro Scene starting");
        //Texte
        let text = {
            narrator: {
                T0000: "You died.",
                T0001: "You will be judged infront of the Eternities of the everliving Astral World.",
                T0002: ".....",
                T0003: "You were found guilty by the ten commandments.",
                T1003: "You shall be judged and tested in a trial.",
                T0004: "Suffer in Hell",
                T0005: "Suffer...",
                T0006: "..."
            }
        };
        //Actual timeline
        await Template.ƒS.Location.show(Template.locations.keys);
        await Template.ƒS.update(1);
        await Template.delay_5sec;
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.delay_5sec;
        await Template.ƒS.Location.show(Template.locations.blackscreen);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.introduction);
        await Template.ƒS.update(Template.transition.cut.duration, Template.transition.cut.alpha, Template.transition.cut.edge);
        await Template.ƒS.Sound.play(Template.sound.backgroundtheme, 0.1, true);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        //dataForSave.scoreRyu += 50; OBSOLET
        //dataForSave.scoreForRyu = "You earned 50 points on Ryus bar",
        //document.getElementsByName("scoreRyu").forEach(meterStuff => meterStuff.hidden = true);
        //document.getElementsByName("scoreForRyu").forEach(meterStuff => meterStuff.hidden = true);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        //document.getElementsByName("scoreRyu").forEach(meterStuff => meterStuff.hidden = false);
        //document.getElementsByName("scoreForRyu").forEach(meterStuff => meterStuff.hidden = false);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002 + ".....");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T1003); //added als hinweis.
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0006);
        await Template.ƒS.Sound.fade(Template.sound.backgroundtheme, 0, 1);
        let firstDialogueElementOptions = {
            iSayDot1: "...",
            iSayDot2: "...",
            iSayDot3: "..."
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayDot1:
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
                break;
            case firstDialogueElementOptions.iSayDot2:
                //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.center);
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
                break;
            case firstDialogueElementOptions.iSayDot3:
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
                break;
        }
    }
    Template.Intro = Intro;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function WiderstandsVersteck() {
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
        let askAgain = true;
        let mageDead = false; //smage dead?
        /* would like multiple transitions for gewitter effekt :( look discord for ref by jirka 12.02*/
        await Template.ƒS.Location.show(Template.locations.openfield);
        await Template.ƒS.update(Template.transition.donner1.duration, Template.transition.donner1.alpha, Template.transition.donner1.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.blackscreen);
        await Template.ƒS.update(Template.transition.arcane.duration, Template.transition.arcane.alpha, Template.transition.arcane.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.openfield);
        await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
        await Template.ƒS.update(1);
        //await ƒS.update(transition.donner2.duration, transition.donner2.alpha, transition.donner2.edge);
        //await ƒS.update(transition.donner3.duration, transition.donner3.alpha, transition.donner3.edge);
        //await ƒS.update(transition.arcane.duration, transition.arcane.alpha, transition.arcane.edge);
        await Template.ƒS.Sound.play(Template.sound.wvtheme, 0.1, true);
        //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(30, 100));
        // 70 für rechten Char, 30 für linken Char
        await Template.ƒS.Character.show(Template.characters.smage, Template.characters.smage.pose.base, Template.ƒS.positionPercent(70, 70));
        await Template.ƒS.update();
        //Introduction von smage und general
        await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0001);
        await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0002);
        await Template.ƒS.Character.show(Template.characters.general, Template.characters.general.pose.base, Template.ƒS.positionPercent(30, 70));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.general, text.general.T0001);
        await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0003);
        await Template.ƒS.Speech.tell(Template.characters.general, text.general.T0002);
        await Template.ƒS.Speech.tell(Template.characters.general, text.general.T0003);
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
            let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "NormalButtonDialogue");
            switch (firstDialogueElement) {
                case firstDialogueElementOptions.iSayDot1:
                    await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0010);
                    Template.x++;
                    break;
                case firstDialogueElementOptions.iSayDot2:
                    //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.center);
                    await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0011);
                    Template.x++;
                    await Template.ƒS.Speech.tell(Template.characters.general, text.general.T0011);
                    break;
                case firstDialogueElementOptions.iSayDot3:
                    await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0012);
                    Template.x++;
                    await Template.ƒS.Speech.tell(Template.characters.general, text.general.T0010);
                    break;
                case firstDialogueElementOptions.iSayDot4:
                    await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0013);
                    Template.x++;
                    break;
                case firstDialogueElementOptions.iSayDot5:
                    await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0014);
                    askAgain = false;
                    break;
            }
        }
        //asking all will cost you tho, lol
        if (Template.x == 4 || Template.x > 4) {
            mageDead = true;
        }
        if (mageDead) { //she dead - tree
            console.log("Mage died");
            await Template.ƒS.Speech.tell(Template.characters.general, "Pia, we have to go NOW, this is not a joke!");
            await Template.ƒS.Speech.tell(Template.characters.pia, "Alrighty boss! Come to think of it, what's your Name?");
            Template.dataForSave.PName = await Template.ƒS.Speech.getInput();
            //change smages name to new Name Pia
            await Template.ƒS.Speech.tell(Template.characters.general, "One scout is missing and that brings up the question, what the fuck is already out there.");
            await Template.ƒS.Speech.tell(Template.characters.pia, "Thats not good...");
            await Template.ƒS.Speech.tell(Template.characters.pia, "Before we have to go, I have a small gift for you, take this.");
            await Template.ƒS.Speech.tell(Template.characters.pia, "It took a lot of work so please don't lose it okay?");
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            await Template.ƒS.Speech.tell(Template.characters.consciousness, "A rose from the small mage. This is a bit much to process, what is going on here?");
            await Template.ƒS.Speech.tell(Template.characters.consciousness, "Is this really Hell?");
            await Template.ƒS.Speech.tell(Template.characters.consciousness, "This seems so unreal, but the air is heavy and it's way too warm.");
            await Template.ƒS.Sound.fade(Template.sound.wvtheme, 0, 1);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Suddenly you see a drop of what seems to be acid fall to the ground next to you, burning the dirt beneath it.");
            await Template.ƒS.Sound.play(Template.sound.wvthemeBad, 0.1, true);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Above you, an absolute monstrosity of what seems to be a misformed Dog is looking with one of it's big Eyeballs.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Terrible fear strikes you, what is this creature? How can something look so disgusting?!");
            await Template.ƒS.Speech.tell(Template.characters.pia, "Maraaaaaa theres one already hereeeee!!");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The small Mage grabs her staff and points it towards the hellish creature and whispers something you don't seem to understand.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Out of nowhere a beam of ice shoots out of the tip from the little mages staff.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The creature gets hit and falls to the ground, whimpering in agony until finally breathing it's last breath.");
            await Template.ƒS.Speech.tell(Template.characters.mara, "Fuck, it's already too late, Pia cover us! We have to run!!");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The red-haired girl grabs your arm and nearly rips it off as she seems to drag your unwilling body behind her.");
            await Template.ƒS.Character.animate(Template.characters.smage, Template.characters.pia.pose.base, Template.fromRightToRight()); //muss noch smage sein da char davor dieser war.
            await Template.ƒS.Character.hide(Template.characters.smage);
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.mara, "All because you wouldn't fucking listen... GO! We need to move!!");
            await Template.ƒS.Speech.tell(Template.characters.pia, "Captain watch out!!");
            await Template.ƒS.Character.show(Template.characters.pia, Template.characters.smage.pose.base, Template.ƒS.positionPercent(70, 70));
            //await ƒS.Character.animate(characters.pia, characters.smage.pose.base, BackToNormal());
            await Template.ƒS.update(1);
            await Template.ƒS.Character.hide(Template.characters.pia);
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "As you try to escape, one of these hell dogs seems to appear out of nowhere.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "While spotting the first, another one is already running alongside you, in matter of seconds you are surrounded.");
            await Template.ƒS.Speech.tell(Template.characters.pia, "Shields up!!");
            await Template.ƒS.Character.show(Template.characters.pia, Template.characters.pia.pose.base, Template.ƒS.positionPercent(70, 70));
            await Template.ƒS.update(1);
            await Template.ƒS.Character.hide(Template.characters.pia);
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.mara, "God fucking damnit!");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The red-haired girl grabs you tight, raises her shield towards the sky.");
            await Template.ƒS.Character.hide(Template.characters.general);
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "You can't move, but you glance at the small mage that has been left behind to cover us.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "A bright light shines from her staff, attracting the attention of every single helldog around her.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "In a big cracking thunder sound she smashes the staff into the ground!");
            await Template.ƒS.Sound.play(Template.sound.boom, 0.3, true);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Bitter freezing cold surrounds you in a matter of seconds, you seem to hear a sound of rain... rain in hell?!");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "As you come to realise, a huge storm of ice spikes is raining with enormous speed from the sky.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Whining after whining, you hear the countless Helldogs around you fall to the ground...");
            await Template.ƒS.Speech.tell(Template.characters.mara, "You dumb idiot...");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The red-haired girl lowers her shield, takes a quick look around and grabs your arm with sheer strength.");
            await Template.ƒS.Speech.tell(Template.characters.mara, "Now is our time to run.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Finally catching your breath, you understand and run, following the redhaired girls path.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "One last time you turn around, daring a glance at the powerful little mage who seemed to have saved you twice.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Only to notice a girl laying on the ground, seemingly unconscious.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "There are Helldogs surrounding her slowly as you scream for the redhaired girl.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "While noticing she is already looking towards your direction, tears running down her determined Eyes.");
            await Template.ƒS.Speech.tell(Template.characters.consciousness, "She knew. You should've known. It's your fault...");
            let secondDialogueElementOptions = {
                iSayDot1: "Run back and help her.",
                iSayDot2: "Stick to the plan",
            };
            let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementOptions, "NormalButtonDialogue");
            switch (secondDialogueElement) {
                case secondDialogueElementOptions.iSayDot1:
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "With full determination you run back, trying to save the girl that saved you.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Yet when you arrived, a horde of helldogs stare at you.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Terrified by the view of severed bodyparts spreading across the ground.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Having a look at the monster appearing right in front of you, chewing on what seems to be an arm, you collapse to the ground.");
                    await Template.ƒS.Speech.tell(Template.characters.consciousness, "This isn't fair. A pointless Trial.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Broken.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "YOU DIED");
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
                    console.log("!!!!!!!!!!!!!!!!! THIS SHOULD NOT STAND HERE !!!!!!!!!!!!!!!!!!!! CHECK 3WV.ts RESTART !!!!!!!!!!!!!!!!!!!!!!!!!");
                    break;
                case secondDialogueElementOptions.iSayDot2:
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Emptyheaded and overwhelmed you do what you've been told.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "You run...");
                    await Template.ƒS.Sound.fade(Template.sound.wvthemeBad, 0, 1);
                    break;
            }
        }
        if (!mageDead) { //she aint dead - tree
            console.log("Mage diedn't");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The Air is thick and hard to breath, as you look around you notice the intense heat around you.");
            await Template.ƒS.Speech.tell(Template.characters.consciousness, "Is this really Hell?");
            await Template.ƒS.Speech.tell(Template.characters.general, "Okay newbie, let's go, follow the route of those sticks in the ground.");
            await Template.ƒS.Speech.tell(Template.characters.general, "We have to escape quietly, the scouts already saw some minor Demons coming close to us.");
            await Template.ƒS.Character.animate(Template.characters.general, Template.characters.general.pose.base, Template.fromLeftToLeft());
            await Template.ƒS.Speech.tell(Template.characters.smage, "Minor demons are still pretty scary if I might add that. They're smaller but way faster.");
            await Template.ƒS.Speech.tell(Template.characters.smage, "Aaaaand that's why we have to escape quietly, we cant outrun them.");
            await Template.ƒS.Speech.tell(Template.characters.smage, "By the way, what's your name?");
            Template.dataForSave.PName = await Template.ƒS.Speech.getInput();
            await Template.ƒS.Speech.tell(Template.characters.smage, "Ohhh " + Template.dataForSave.PName + " is a cute name");
            await Template.ƒS.Speech.tell(Template.characters.pia, "My Name is Pia and the boss over there is Mara");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Quietly under the orders of Mara the whole group sneaks towards the headquarters...");
            await Template.ƒS.Character.animate(Template.characters.smage, Template.characters.smage.pose.base, Template.fromRightToRight());
        }
        await Template.ƒS.Character.hide(Template.characters.smage);
        await Template.ƒS.Character.hide(Template.characters.pia);
        await Template.ƒS.Character.hide(Template.characters.general);
        await Template.ƒS.Character.hide(Template.characters.mara);
        await Template.ƒS.update(1);
        //await ƒS.Character.show(characters.general, characters.general.pose.base, ƒS.positionPercent(30, 90));
        //await ƒS.update();
    }
    Template.WiderstandsVersteck = WiderstandsVersteck;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function HauptVersteck() {
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
        let mageDead; //mage dead?
        let askAgain = true;
        if (Template.x == 4 || Template.x > 4) {
            mageDead = true;
        }
        await Template.ƒS.Location.show(Template.locations.tempel);
        await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "After a quite long time you arrive at what seems to be an hidden entrance.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Mara moves a stone aside and waves at you to go ahead.");
        await Template.ƒS.Character.show(Template.characters.mara, Template.characters.mara.pose.base, Template.ƒS.positionPercent(30, 70));
        await Template.ƒS.Speech.tell(Template.characters.mara, "We have arrived. Go ahead.");
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.mara);
        await Template.ƒS.update(1);
        //inbetween fehlen kommentare von small mage, if shes not dead.
        await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "After a rather long and difficult journey through a small cave, you stand before a lively place.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "People talking and enjoying themselves, sounds of metal clinging, a lively bazaar, this doesn't look like hell.");
        await Template.ƒS.Character.show(Template.characters.mara, Template.characters.mara.pose.base, Template.ƒS.positionPercent(30, 70));
        await Template.ƒS.Speech.tell(Template.characters.mara, "You will need some proper training, go to the barracks to learn something useful.");
        await Template.ƒS.update(1);
        await Template.ƒS.Character.animate(Template.characters.mara, Template.characters.mara.pose.base, Template.fromLeftToLeft());
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Mara leaves you behind and seems to walk to a tent reserved for her.");
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
            iSayDot1: "Go talk to Pia",
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
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "NormalButtonDialogue"); //Mara or barracks                          
        //let fifthDialogueElement = await ƒS.Menu.getInput(fifthDialogueElementOptions, "WVDialogueOption");
        //let sixthDialogueElement = await ƒS.Menu.getInput(sixthDialogueElementOptions, "WVDialogueOption");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayDot1: //talk to Mara
                await Template.ƒS.Speech.tell(Template.characters.narrator, "You follow Mara to her tent, maybe you can get some more info on what is going on here.");
                if (mageDead) { //smage dead - talking to Mara tree
                    console.log("Mage still dead");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "As you enter the tent, you're met by a fierce and unwelcomed look.");
                    await Template.ƒS.Character.show(Template.characters.mara, Template.characters.mara.pose.base, Template.ƒS.positionPercent(30, 70));
                    await Template.ƒS.Character.animate(Template.characters.mara, Template.characters.mara.pose.base, Template.BackToNormal());
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.mara, "Please leave, I dont have the nerves or time for you at the moment.");
                    await Template.ƒS.Character.hide(Template.characters.mara);
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.consciousness, "Seems like you should go do something else. Infront of the tent was the Assassin, maybe I should talk to him or go to the barracks...");
                    //choose for second person to talk to, or go to barracks
                    let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementOptions, "NormalButtonDialogue"); //after Mara talk, mage is dead
                    switch (secondDialogueElement) {
                        case secondDialogueElementOptions.iSayDot1: //talk to assassin
                            await Template.ƒS.Speech.tell(Template.characters.narrator, "The Assassin infront of the tent looks somewhat relaxed.");
                            await Template.ƒS.Speech.tell(Template.characters.assassin, "Wassup?");
                            await Template.ƒS.Character.show(Template.characters.jessy, Template.characters.jessy.pose.base, Template.ƒS.positionPercent(70, 70));
                            await Template.ƒS.update(1);
                            askAgain = true;
                            while (askAgain) { //talk to assassin repeat
                                let thirdDialogueElement = await Template.ƒS.Menu.getInput(thirdDialogueElementOptions, "NormalButtonDialogue"); //talk to assassin repeat
                                switch (thirdDialogueElement) {
                                    case thirdDialogueElementOptions.iSayDot1: //Who are you
                                        await Template.ƒS.Speech.tell(Template.characters.assassin, "So... I am the Assassin and my Name is Jessy. Generally speaking I try to kill some of those Hellpuppies before you show up.");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "I also know the terrain pretty well, so if you want to smuggle something. I am your Guy. Didn't hear that from me of course.");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "If you dont want to lose a tongue, if you know what I mean. Haha- just kidding. Unless?...");
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "ok...");
                                        break;
                                    case thirdDialogueElementOptions.iSayDot2: //What creatures were those
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "You mean the Demons that teared up Pia ? We call 'em minor Demons, since they and dogs look kind of similar, we sometimes refer to them as Hellhounds.");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "They are pretty fast so keep that in mind, usually you won't be able to outrun them. What Pia did really saved our asses today.");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "If you think those are scary, oh man, wait for the Demonwalkers, those things are a whole other class for themselves.");
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "It gets worse than those Hellhounds?... Oh god....");
                                        break;
                                    case thirdDialogueElementOptions.iSayDot3: //Will Mara be okay?
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "Who? Mara? Oh yea she's gonna be fine. She went through way worse.");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "Though I do have to say that Pia was a terrible loss. Sure hope you were worth it.");
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "oh... am I special?");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "You have that empty look in your eyes, yes you're special. There's a reason we seperated you from your way down to the depths of hell.");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "Your entry performance just wasn't really, optimal I'd say.");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "Listen here, Hell is Hell, people die but we fight for the greater cause. We are all ready to die the second we joined this organization.");
                                        break;
                                    case thirdDialogueElementOptions.iSayDot4: //go to barracks
                                        await Template.ƒS.Character.hide(Template.characters.jessy);
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "Maybe I get some more info at the barracks.");
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "A bit of sparing wouldn't hurt either...");
                                        await Template.ƒS.Speech.tell(Template.characters.trainer, "Hey there! I didn't see you here before, up for some training?");
                                        await Template.ƒS.Character.show(Template.characters.trainer, Template.characters.trainer.pose.base, Template.ƒS.positionPercent(30, 70));
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Speech.tell(Template.characters.narrator, "The soldier looking guy hands you a shortsword.");
                                        await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's see what you can do!");
                                        //timeskip clash effect here
                                        await Template.ƒS.Location.show(Template.locations.blackscreen);
                                        await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Location.show(Template.locations.tempel);
                                        await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                                        await Template.ƒS.update(1);
                                        //this good timeskip?
                                        await Template.ƒS.Speech.tell(Template.characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                                        //timeskip clash effect here
                                        await Template.ƒS.Location.show(Template.locations.blackscreen);
                                        await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Location.show(Template.locations.tempel);
                                        await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Speech.tell(Template.characters.trainer, "Seems like you were some kind of fighter in your past life, very good footwork. Nice!");
                                        await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's end it here for now, rest a bit, I will get us some tea.");
                                        await Template.ƒS.Character.hide(Template.characters.trainer);
                                        await Template.ƒS.update(1);
                                        //Skill++
                                        askAgain = false;
                                        break;
                                    case thirdDialogueElementOptions.iSayDot5: //Chill around
                                        await Template.ƒS.Character.hide(Template.characters.jessy);
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "I need some rest after all of this geez...");
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "I am sure Mara will wake me up if she needs something.");
                                        await Template.ƒS.Speech.tell(Template.characters.narrator, "You lean yourself against a big boulder around the corner and doze off...");
                                        await Template.ƒS.Speech.tell(Template.characters.narrator, ".....");
                                        askAgain = false;
                                        break;
                                }
                            }
                            // ############################### end of dead mage choice tree ###############################
                            break;
                        case secondDialogueElementOptions.iSayDot2: //go to barracks
                            await Template.ƒS.Speech.tell(Template.characters.consciousness, "Maybe I get some more info at the barracks.");
                            await Template.ƒS.Speech.tell(Template.characters.consciousness, "A bit of sparing wouldn't hurt either...");
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Hey there! I didn't see you here before, up for some training?");
                            await Template.ƒS.Character.show(Template.characters.trainer, Template.characters.trainer.pose.base, Template.ƒS.positionPercent(30, 70));
                            await Template.ƒS.update(1);
                            await Template.ƒS.Speech.tell(Template.characters.narrator, "The soldier looking guy hands you a shortsword.");
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's see what you can do!");
                            //timeskip clash effect here
                            await Template.ƒS.Location.show(Template.locations.blackscreen);
                            await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Location.show(Template.locations.tempel);
                            await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                            //timeskip clash effect here
                            await Template.ƒS.Location.show(Template.locations.blackscreen);
                            await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Location.show(Template.locations.tempel);
                            await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Seems like you were some kind of fighter in your past life, very good footwork. Nice!");
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's end it here for now, rest a bit, I will get us some tea.");
                            await Template.ƒS.Character.hide(Template.characters.trainer);
                            await Template.ƒS.update(1);
                            //Skill++
                            break;
                    }
                }
                if (!mageDead) { //smage aint dead - mara talk tree
                    console.log("Mage still did diedn't");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "A serious yet friendly looking assassin in front of the tent seems to observe you.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "As you enter the tent, you're met by a serious yet friendly smile.");
                    await Template.ƒS.Character.show(Template.characters.mara, Template.characters.mara.pose.base, Template.ƒS.positionPercent(30, 70));
                    await Template.ƒS.Character.animate(Template.characters.mara, Template.characters.mara.pose.base, Template.BackToNormal());
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.mara, "You did quite well wunderkind, we have a lot to do.");
                    await Template.ƒS.Character.hide(Template.characters.mara);
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, Template.characters.pia.name + " is standing next to her with a huge proud look on her face.");
                    await Template.ƒS.Speech.tell(Template.characters.consciousness, "This whole ordeal from there could've gone terribly wrong...");
                    //need more Mara talk, how
                    let forthDialogueElement = await Template.ƒS.Menu.getInput(forthDialogueElementOptions, "NormalButtonDialogue"); //after mara talk mage not dead tree
                    switch (forthDialogueElement) {
                        case forthDialogueElementOptions.iSayDot1: //go to smage PIA
                            //++ Einfluss, via meter??
                            await Template.ƒS.Speech.tell(Template.characters.pia, "Hi there! Hope you're doing good, must've been quite a bit much for you.");
                            await Template.ƒS.Character.show(Template.characters.pia, Template.characters.pia.pose.base, Template.ƒS.positionPercent(70, 70));
                            await Template.ƒS.update(1);
                            await Template.ƒS.Speech.tell(Template.characters.pia, "So basically let me tell you a bit about our organization and goals.");
                            await Template.ƒS.Speech.tell(Template.characters.pia, "We're currently located in Labeb, the safetown for all stranded souls in this Hell.");
                            await Template.ƒS.Speech.tell(Template.characters.pia, "And if you didn't already catch it, yes we're indeed in Hell. Quite lovely isn't it?");
                            await Template.ƒS.Speech.tell(Template.characters.consciousness, "Not really no.");
                            await Template.ƒS.Speech.tell(Template.characters.pia, "We're currently trying to secure a very important artifact called the Dogma.");
                            await Template.ƒS.Speech.tell(Template.characters.pia, "And this is where you come into play.");
                            await Template.ƒS.Speech.tell(Template.characters.pia, "You are what most of us call, a Boundsoul. That means you're special. In a way.");
                            await Template.ƒS.Speech.tell(Template.characters.pia, "You see, none of us can hold on to an artifact too long without going insane. So we need super important guys like you.");
                            await Template.ƒS.Speech.tell(Template.characters.pia, "We're all after the same goal here, salvation. So just stick to us and this horror will be of short notice.");
                            await Template.ƒS.Speech.tell(Template.characters.pia, "And whatever happens, I will protect you! You can always count on me ok? We got this!");
                            await Template.ƒS.Speech.tell(Template.characters.pia, "Though I'd advise you to look by at the barracks, train a bit so you get used to fighting if the situation will not go as planned.");
                            await Template.ƒS.Speech.tell(Template.characters.pia, "But under Boss' management, everything should go smooooothly. Boss has some kind of meeting which I have to attend. See you later!");
                            await Template.ƒS.Character.animate(Template.characters.pia, Template.characters.pia.pose.base, Template.fromRightToRight());
                            await Template.ƒS.Character.hide(Template.characters.mara);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Speech.tell(Template.characters.consciousness, "Wow, that was quite a lot to process...");
                            await Template.ƒS.Speech.tell(Template.characters.narrator, "Everyone seems busy, you make your way to the barracks as " + Template.characters.pia.name + " has adviced you.");
                            await Template.ƒS.Speech.tell(Template.characters.consciousness, "Training is not a bad idea after all.");
                            //Going to barracks, cut jump
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Hey there! I didn't see you here before, up for some training?");
                            await Template.ƒS.Character.show(Template.characters.trainer, Template.characters.trainer.pose.base, Template.ƒS.positionPercent(30, 70));
                            await Template.ƒS.update(1);
                            await Template.ƒS.Speech.tell(Template.characters.narrator, "The soldier looking guy hands you a shortsword.");
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's see what you can do!");
                            //timeskip clash effect here
                            await Template.ƒS.Location.show(Template.locations.blackscreen);
                            await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Location.show(Template.locations.tempel);
                            await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                            //timeskip clash effect here
                            await Template.ƒS.Location.show(Template.locations.blackscreen);
                            await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Location.show(Template.locations.tempel);
                            await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Seems like you were some kind of fighter in your past life, very good footwork. Nice!");
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's end it here for now, rest a bit, I will get us some tea.");
                            await Template.ƒS.Character.hide(Template.characters.trainer);
                            await Template.ƒS.update(1);
                            //Skill++
                            break;
                        case forthDialogueElementOptions.iSayDot2: //go to assassin
                            askAgain = true;
                            while (askAgain) { //Talk to assassing repeat
                                let thirdALTDialogueElement = await Template.ƒS.Menu.getInput(thirdALTDialogueElementOptions, "NormalButtonDialogue");
                                await Template.ƒS.Character.show(Template.characters.jessy, Template.characters.jessy.pose.base, Template.ƒS.positionPercent(70, 70));
                                await Template.ƒS.update(1);
                                switch (thirdALTDialogueElement) {
                                    case thirdALTDialogueElementOptions.iSayDot1: //Who are you
                                        await Template.ƒS.Speech.tell(Template.characters.assassin, "So... I am the Assassin and my Name is Jessy. Generally speaking I try to kill some of those Hellpuppies before you show up.");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "I also know the terrain pretty well, so if you want to smuggle something. I am your Guy. Didn't hear that from me of course.");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "If you dont want to lose a tongue, if you know what I mean. Haha- just kidding. Unless?...");
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "ok...");
                                        break;
                                    case thirdALTDialogueElementOptions.iSayDot2: //What creatures were those
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "You mean some of the creatures I've seen? Most of 'em are minor Demons, since they and dogs look kind of similar, we sometimes refer to them as Hellhounds.");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "They are pretty fast so keep that in mind, usually you won't be able to outrun them.");
                                        await Template.ƒS.Speech.tell(Template.characters.jessy, "If you think those are scary, oh man, wait for the Demonwalkers, those things are a whole other class for themselves.");
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "Theres different beasts?!... Oh god....");
                                        break;
                                    case thirdALTDialogueElementOptions.iSayDot3: //go to barracks
                                        await Template.ƒS.Character.hide(Template.characters.jessy);
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "Maybe I get to know some people at the barracks.");
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "A bit of sparing wouldn't hurt either...");
                                        await Template.ƒS.Speech.tell(Template.characters.trainer, "Hey there! I didn't see you here before, up for some training?");
                                        await Template.ƒS.Character.show(Template.characters.trainer, Template.characters.trainer.pose.base, Template.ƒS.positionPercent(30, 70));
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Speech.tell(Template.characters.narrator, "The soldier looking guy hands you a shortsword.");
                                        await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's see what you can do!");
                                        //timeskip clash effect here
                                        await Template.ƒS.Location.show(Template.locations.blackscreen);
                                        await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Location.show(Template.locations.tempel);
                                        await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Speech.tell(Template.characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                                        //timeskip clash effect here
                                        await Template.ƒS.Location.show(Template.locations.blackscreen);
                                        await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Location.show(Template.locations.tempel);
                                        await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Speech.tell(Template.characters.trainer, "Seems like you were some kind of fighter in your past life, very good footwork. Nice!");
                                        await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's end it here for now, rest a bit, I will get us some tea.");
                                        await Template.ƒS.Character.hide(Template.characters.trainer);
                                        await Template.ƒS.update(1);
                                        //Skill++
                                        askAgain = false;
                                        break;
                                    case thirdALTDialogueElementOptions.iSayDot4: //Chill around
                                        await Template.ƒS.Character.hide(Template.characters.jessy);
                                        await Template.ƒS.update(1);
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "I need some rest after all of this geez...");
                                        await Template.ƒS.Speech.tell(Template.characters.consciousness, "I am sure Mara will wake me up if she needs something.");
                                        await Template.ƒS.Speech.tell(Template.characters.narrator, "You lean yourself against a big boulder around the corner and doze off...");
                                        await Template.ƒS.Speech.tell(Template.characters.narrator, ".....");
                                        askAgain = false;
                                        break;
                                }
                            }
                            break;
                        case forthDialogueElementOptions.iSayDot3: //go to barracks
                            await Template.ƒS.Speech.tell(Template.characters.consciousness, "Maybe I get some more info at the barracks.");
                            await Template.ƒS.Speech.tell(Template.characters.consciousness, "A bit of sparing wouldn't hurt either...");
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Hey there! I didn't see you here before, up for some training?");
                            await Template.ƒS.Character.show(Template.characters.trainer, Template.characters.trainer.pose.base, Template.ƒS.positionPercent(30, 70));
                            await Template.ƒS.update(1);
                            await Template.ƒS.Speech.tell(Template.characters.narrator, "The soldier looking guy hands you a shortsword.");
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's see what you can do!");
                            //timeskip clash effect here
                            await Template.ƒS.Location.show(Template.locations.blackscreen);
                            await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Location.show(Template.locations.tempel);
                            await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                            //timeskip clash effect here
                            await Template.ƒS.Location.show(Template.locations.blackscreen);
                            await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Location.show(Template.locations.tempel);
                            await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                            await Template.ƒS.update(1);
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Seems like you were some kind of fighter in your past life, very good footwork. Nice!");
                            await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's end it here for now, rest a bit, I will get us some tea.");
                            await Template.ƒS.Character.hide(Template.characters.trainer);
                            await Template.ƒS.update(1);
                            //Skill++
                            break;
                    }
                }
                break;
            case firstDialogueElementOptions.iSayDot2: // go to barracks
                await Template.ƒS.Speech.tell(Template.characters.consciousness, "Maybe I get some more info at the barracks.");
                await Template.ƒS.Speech.tell(Template.characters.consciousness, "A bit of sparing wouldn't hurt either...");
                await Template.ƒS.Speech.tell(Template.characters.trainer, "Hey there! I didn't see you here before, up for some training?");
                await Template.ƒS.Character.show(Template.characters.trainer, Template.characters.trainer.pose.base, Template.ƒS.positionPercent(30, 70));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.narrator, "The soldier looking guy hands you a shortsword.");
                await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's see what you can do!");
                //timeskip clash effect here
                await Template.ƒS.Location.show(Template.locations.blackscreen);
                await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                await Template.ƒS.update(1);
                await Template.ƒS.Location.show(Template.locations.tempel);
                await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.trainer, "Oh you're quite good with the sword, some nice agility. Let's do one more!");
                //timeskip clash effect here
                await Template.ƒS.Location.show(Template.locations.blackscreen);
                await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
                await Template.ƒS.update(1);
                await Template.ƒS.Location.show(Template.locations.tempel);
                await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.trainer, "Seems like you were some kind of fighter in your past life, very good footwork. Nice!");
                await Template.ƒS.Speech.tell(Template.characters.trainer, "Let's end it here for now, rest a bit, I will get us some tea.");
                await Template.ƒS.Character.hide(Template.characters.trainer);
                await Template.ƒS.update(1);
                //Skill++
                break;
        }
        //bang sound insert here
        await Template.ƒS.Speech.tell(Template.characters.narrator, "A loud bang occurs");
    }
    Template.HauptVersteck = HauptVersteck;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Artifact() {
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
        await Template.ƒS.Location.show(Template.locations.openfield);
        await Template.ƒS.update(Template.transition.donner1.duration, Template.transition.donner1.alpha, Template.transition.donner1.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "After a long journey on foot, you and the remaining survivors arrive at the old ruined house.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "No lifesigns hint of someone living in this ruin...");
        await Template.ƒS.Character.show(Template.characters.mara, Template.characters.mara.pose.base, Template.ƒS.positionPercent(30, 70));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.mara, "This should be the place, now where is that old hag.");
        await Template.ƒS.Character.show(Template.characters.bmage, Template.characters.bmage.pose.base, Template.ƒS.positionPercent(70, 70));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.bmage, "Excuse you, what did you just call me?");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "A tall woman in white garment appears from the shadows of the abandoned mansion.");
        await Template.ƒS.Speech.tell(Template.characters.bmage, "It's not easy being 200 years old to you know.");
        await Template.ƒS.Speech.tell(Template.characters.bmage, "Mhhhh? you're quite a few less than I remember, did something happen?");
        await Template.ƒS.Speech.tell(Template.characters.mara, "Eh- Sure. We had quite the Rumble.");
        await Template.ƒS.Speech.tell(Template.characters.consciousness, "This conversation seems rather awkward.");
        await Template.ƒS.Speech.tell(Template.characters.bmage, "So how can I be of service to you?");
        await Template.ƒS.Speech.tell(Template.characters.mara, "We're here to claim the Dogma.");
        await Template.ƒS.Speech.tell(Template.characters.bmage, "Oh, the dusty old book is of interest to you? I am curious, what for?");
        await Template.ƒS.Speech.tell(Template.characters.mara, "Non of your business witch. I gave it to you in a trade of knowledge and here I am resolving that contract.");
        await Template.ƒS.Speech.tell(Template.characters.bmage, "Ahhh dont worry I don't have a problem with that contract.");
        await Template.ƒS.Speech.tell(Template.characters.bmage, "You do have to get it yourself however, it's in the hut in my Garden. I am kind of busy at the moment.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "The tall woman points towards an old wooden shag on the other side of her estate.");
        await Template.ƒS.Speech.tell(Template.characters.mara, "Ugh. Alright guys, let's move.");
        await Template.ƒS.Speech.tell(Template.characters.bmage, "Good luck!~");
        await Template.ƒS.Speech.tell(Template.characters.consciousness, "Somehow that good luck in combination with the smile on her face makes you uncomfortable.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "The woman gives you a sharp last look before you move along with the rest of the convoy.");
        await Template.ƒS.Character.animate(Template.characters.bmage, Template.characters.bmage.pose.base, Template.fromRightToRight());
        await Template.ƒS.Character.hide(Template.characters.bmage);
        await Template.ƒS.Character.hide(Template.characters.mara);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
        await Template.ƒS.Location.show(Template.locations.blackscreen);
        await Template.ƒS.update(Template.transition.steps.duration, Template.transition.steps.alpha, Template.transition.steps.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "To be continued...");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "################## Press f5 for different run :) ################");
    }
    Template.Artifact = Artifact;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function TrueEnding() {
        console.log("9 TrueEnding Scene starting");
        //if EndingA to EndingG are 1, true ending will happen after restart.
    }
    Template.TrueEnding = TrueEnding;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //define Transitions
    Template.transition = {
        cut: {
            duration: 3,
            alpha: "./Transitions/Cut1.jpg",
            edge: 0.1 //härte verlauf der transition, 
        },
        donner1: {
            duration: 3,
            alpha: "./Transitions/Gewitter1.jpg",
            edge: 1
        },
        donner2: {
            duration: 3,
            alpha: "./Transitions/Gewitter2.jpg",
            edge: 1
        },
        donner3: {
            duration: 3,
            alpha: "./Transitions/Gewitter3.jpg",
            edge: 1
        },
        arcane: {
            duration: 3,
            alpha: "./Transitions/Arcane2.png",
            edge: 1
        },
        steps: {
            duration: 5,
            alpha: "./Transitions/Steps.png",
            edge: 0.5
        }
    };
    Template.sound = {
        //music
        backgroundtheme: "./Assets/Music/Vampires/WastedBlood.mp3",
        introtheme: "./Assets/Music/Vampires/WastedBlood.mp3",
        wvtheme: "./Assets/Music/Vampires/Haunted Mansion.mp3",
        wvthemeBad: "./Assets/Music/Vampires/GodzillaVsKong.mp3",
        //sound
        click: "",
        boom: ""
    };
    Template.locations = {
        introduction: {
            name: "Intro",
            background: "./Assets/Background/Intro.jpg"
        },
        openfield: {
            name: "Openfield",
            background: "./Assets/Background/Ruins.png"
        },
        blackscreen: {
            name: "Blackscreen",
            background: "./Assets/Background/Blackscreen.jpg"
        },
        tempel: {
            name: "Tempel",
            background: "./Assets/Background/TempelBG.png"
        },
        cave: {
            name: "Cave",
            background: "./Assets/Background/DarkCave.png"
        },
        keys: {
            name: "Keys",
            background: "./Assets/Extras/Explain.png"
        },
        Lava: {
            name: "FlowingLava",
            background: "./Assets/Background/FlowingLava.gif"
        }
    };
    Template.characters = {
        unknown: {
            name: "???",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER
        },
        narrator: {
            name: ""
        },
        consciousness: {
            name: "Consciousness"
        },
        general: {
            name: "General",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                base: "./Assets/Character/UsedChars/generalS.png"
            }
        },
        mara: {
            name: "Mara",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                base: "./Assets/Character/UsedChars/generalS.png"
            }
        },
        smage: {
            name: "Small Mage",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                base: "./Assets/Character/UsedChars/smageS.png"
            }
        },
        pia: {
            name: "Pia",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                base: "./Assets/Character/UsedChars/smageS.png"
            }
        },
        bmage: {
            name: "Big Mage",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                base: "./Assets/Character/UsedChars/bmageS.png"
            }
        },
        assassin: {
            name: "Assassin",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                base: "./Assets/Character/UsedChars/assassinS.png"
            }
        },
        jessy: {
            name: "Assassin",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                base: "./Assets/Character/UsedChars/assassinS.png"
            }
        },
        scout: {
            name: "Scout",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                base: "./Assets/Character/UsedChars/scoutS.png"
            }
        },
        trainer: {
            name: "Trainer",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                base: "./Assets/Character/UsedChars/trainerS.png"
            }
        }
    };
    Template.items = {
        rose: {
            name: "Rose",
            description: "Eine seltsam leuchtende Rose",
            image: "./Assets/Items/rose.png"
        }
    };
    //Platzhalter für global use
    Template.x = 0; //counter für gestellte fragen in 3wv.ts == smage dead? x>3 means dead.
    Template.y = 0; //Anzahl der Runs bzw Tode
    Template.z = 0;
    Template.endingACheck = "0"; //Maximal 1 sollte auf 1 stehen wenn Re:Intro ausgelöst wird. Wird via local storage benutzt um nach neustart das letzte abgeschlossene Ending zu bestimmen
    Template.endingBCheck = "0";
    Template.endingCCheck = "0";
    Template.endingDCheck = "0";
    Template.endingECheck = "0";
    Template.endingFCheck = "0";
    Template.endingGCheck = "0";
    // Menü Zusatz
    let inGameMenu = {
        //buttons, die man angezeigt haben möchte & strings dienen zur css-gestaltung
        save: "Save",
        load: "Load",
        close: "Close"
        //open: "Open" Useless
    };
    let gameMenu;
    // true ist offenes Menü, false ist zu.
    let menu = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenu.close:
                gameMenu.close();
                menu = false;
                break;
            //case inGameMenu.open:
            //  gameMenu.open();
            //  menu = true;
            // break;
        }
    }
    // shortcuts to open and close the inventory, kinda useless
    document.addEventListener("keydown", hndKeypressForInventory);
    async function hndKeypressForInventory(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.I:
                console.log("open inventory");
                await Template.ƒS.Inventory.open();
                break;
            case Template.ƒ.KEYBOARD_CODE.ESC:
                console.log("close inventory");
                await Template.ƒS.Inventory.open();
                let roseclick = await Template.ƒS.Inventory.open();
                if (roseclick[0] == "Rose") {
                    Template.ƒS.Inventory.add(Template.items.rose);
                }
                Template.ƒS.Inventory.close();
                break;
        }
    }
    // Unterscheidung zwischen Open Menu und Closed Menu
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menu) {
                    console.log("Close");
                    await gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Open");
                    await gameMenu.open();
                    menu = true;
                }
                break;
        }
    }
    //delay //await delay_5sec; in scene.ts
    Template.delay_5sec = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(5)]);
    Template.dataForSave = {
        PName: "",
        scoreRyu: 0,
        scoreForRyu: ""
    };
    //Animations
    function fromLeftToLeft() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 70), color: Template.ƒS.Color.CSS("white") },
            end: { translation: Template.ƒS.positionPercent(0, 70), color: Template.ƒS.Color.CSS("white", 0) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromLeftToLeft = fromLeftToLeft;
    function fromRightToRight() {
        return {
            start: { translation: Template.ƒS.positionPercent(70, 70), color: Template.ƒS.Color.CSS("white") },
            end: { translation: Template.ƒS.positionPercent(100, 70), color: Template.ƒS.Color.CSS("white", 0) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromRightToRight = fromRightToRight;
    function CharNotTalking() {
        return {
            start: { color: Template.ƒS.Color.CSS("white", 100) },
            end: { color: Template.ƒS.Color.CSS("white", 80) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.CharNotTalking = CharNotTalking;
    function BackToNormal() {
        return {
            start: { color: Template.ƒS.Color.CSS("white", 0) },
            end: { color: Template.ƒS.Color.CSS("white") },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.BackToNormal = BackToNormal;
    window.addEventListener("load", start);
    function start(_event) {
        console.log("Sequenzreihe startet jetzt. Splish Splash your opinion is trash");
        if (Template.y > 0) {
            console.log("######### " + Template.y + " time of run. #########");
        }
        //Menü
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        //Szenenreihenfolge
        let scenes = [
            { id: "Re:Intro", scene: Template.ReIntroduction, name: "1Re:Intro" },
            { scene: Template.Intro, name: "2Intro" },
            { scene: Template.WiderstandsVersteck, name: "3WV" },
            { scene: Template.HauptVersteck, name: "4HV" },
            { scene: Template.Artifact, name: "5Art" },
            { scene: Template.TrueEnding, name: "9TrueEnding" }
            //{ id: "Ende", scene: End, name: "Introduction to FS"},
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    Template.start = start;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map