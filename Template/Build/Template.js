"use strict";
var Template;
(function (Template) {
    async function ReIntroduction() {
        console.log("1 Pre Intro Scene starting");
        if (Template.y > 0 && Template.y != 7) {
            //ganzes Re:intro szenario hier.
        }
        if (Template.y == 7) {
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
                T0000: "You Died.",
                T0001: "You will be judged infront of the Eternities of the everliving astral World.",
                T0002: ".....",
                T0003: "You were found guilty by the ten commandments.",
                T1003: "You shall be judged and tested in a trial.",
                T0004: "Suffer in Hell",
                T0005: "Suffer...",
                T0006: "..."
            }
        };
        //Actual timeline
        await Template.ƒS.Location.show(Template.locations.introduction);
        await Template.ƒS.update(Template.transition.cut.duration, Template.transition.cut.alpha, Template.transition.cut.edge);
        await Template.ƒS.Sound.play(Template.sound.backgroundtheme, 0.1, true);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
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
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
            },
            smage: {
                T0001: "Boss i did it!!",
                T0002: "I intercepted the beam and got him out of there!",
                T0003: "My name is ??? this will be a bit much but we have to-",
                T0010: "I intercepted your soul from the beam of death in the Sky and therefore saved you from the Hands of Satan hehe.",
                T0011: "Iam ??? as i already said, and the rest and I call ourselves the ???.",
                T0012: "Quite literally in Hell.",
                T0013: "It's hell, alot to explain but we should really go!",
                T0014: "Finally, Please grab your sword and lets go!",
            },
            general: {
                T0001: "Thats wonderful love, but we really got to get the fuck out of here!",
                T0002: "There's no time!!",
                T0003: "We have to fucking move!",
                T0000: "",
                T0010: "Is he asking Questions? We have to MOVE goddamnit!!",
                T0011: "Save your hospitality for later ???",
                T0012: "",
            },
        };
        // für Platzhalter für komisches Zeug
        //let x: number = 0;
        let askAgain = true;
        let mageDead = false; //smage dead?
        /* would like multiple transitions for gewitter effekt :( look discord for ref by jirka 12.03*/
        await Template.ƒS.Location.show(Template.locations.bedroom);
        await Template.ƒS.update(Template.transition.donner1.duration, Template.transition.donner1.alpha, Template.transition.donner1.edge);
        await Template.ƒS.update();
        //await ƒS.update(transition.donner2.duration, transition.donner2.alpha, transition.donner2.edge);
        //await ƒS.update(transition.donner3.duration, transition.donner3.alpha, transition.donner3.edge);
        //await ƒS.update(transition.arcane.duration, transition.arcane.alpha, transition.arcane.edge);
        await Template.ƒS.Sound.play(Template.sound.wvtheme, 0.1, true);
        //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(30, 100));
        // 70 für rechten Char, 30 für linken Char
        await Template.ƒS.Character.show(Template.characters.smage, Template.characters.smage.pose.base, Template.ƒS.positionPercent(70, 90));
        await Template.ƒS.update();
        //Introduction von smage und general
        await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0001);
        await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0002);
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
            iSayDot5: "Ugh okay lets get outta here!"
        };
        //you can ask all questions if u want to
        while (askAgain) {
            let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "WVDialogueOption");
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
            await Template.ƒS.Speech.tell(Template.characters.general, "???, we have to go NOW, this is not a joke!");
            //change smages name to new Name???
            await Template.ƒS.Speech.tell(Template.characters.general, "One scout is missing and that brings up the topic, what the fuck is already out there");
            await Template.ƒS.Speech.tell(Template.characters.smage, "Thats not good...");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Is this really Hell?");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "This seems so unreal, but the Air is heavy and its way too warm");
            await Template.ƒS.Sound.fade(Template.sound.wvtheme, 0, 1);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Suddenly you see a drop of what seems to be acid fall to the ground and burn the dirt beneath it.");
            await Template.ƒS.Sound.play(Template.sound.wvthemeBad, 0.1, true);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Above you an absolute monstrosity of what seems to be a misformed Dog is looking with one of it's big Eyeballs");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Terrible fear strikes you, what is this creature? How can something look so disgusting?!");
            await Template.ƒS.Speech.tell(Template.characters.smage, "??? Ahhhhhh theres one already hereeeee!!");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The small Mage grabs her Staff and points it towards the hellish Creature and whispers something you don't seem to understand.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Out of nowhere a Beam of ice shoots out of the Tip from the little mages Staff.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The creature gets hit and falls to the ground, whimpering in sounds of agony until finally breathing its last breath.");
            await Template.ƒS.Speech.tell(Template.characters.general, "Fuck, it's already to late, ??? cover us, we have to run!!");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The redhaired girl grabs your arm and nearly rips it off as she seems to drag your unwilling body behind her.");
            await Template.ƒS.Speech.tell(Template.characters.general, "All because you wouldn't fucking listen... GO! We need to move!!");
            await Template.ƒS.Speech.tell(Template.characters.smage, "Captain watchout!!");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "As you try to escape, one of these hell dogs seems to appear out of nowhere.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "while spotting the first, another one is already running alongside you, in matter of seconds you are surrounded");
            await Template.ƒS.Speech.tell(Template.characters.smage, "Shields up!!");
            await Template.ƒS.Speech.tell(Template.characters.general, "God fucking damnit!");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The redhaired girl grabs you tight, draws her shield and points it towards the sky.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "You can't move, but you glance at the small mage that has been left behind to cover us.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "A bright light shines from her staff, attracting the attention of every single helldog around her.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "In a big cracking thunder sound she smashes the staff into the ground!");
            await Template.ƒS.Sound.play(Template.sound.boom, 0.3, true);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Bitterfreezing cold surrounds you in a matter of seconds, you seem to hear a sound of rain... rain in hell?!");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "As you come to realise, a huge storm of icespikes is raining with enourmes speed from the sky.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Whining after whining you hear the countless Helldogs around you fall to the ground...");
            await Template.ƒS.Speech.tell(Template.characters.general, "You dumb idiot...");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The redhaired girl lowers her shield, takes a quick look around and grabs tight.");
            await Template.ƒS.Speech.tell(Template.characters.general, "Now is our time to run.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Finally catching your breath, you understand and run, following the redhaired girls path.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "One last time you turn around, daring a glance at the powerful little mage who seemed to have saved you twice.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Only to notice a girl laying on ground, seemingly unconscious.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "There are Helldogs surrounding her slowly as you scream for the redhaired girl.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "While noticing she is already looking towards your direction, tears running down her determined Eyes.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "She knew. You should've known. It's your fault...");
            let secondDialogueElementOptions = {
                iSayDot1: "Run back and help her.",
                iSayDot2: "Stick to the plan",
            };
            let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementOptions, "WVDialogueOption");
            switch (secondDialogueElement) {
                case secondDialogueElementOptions.iSayDot1:
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "With full determination you run back, trying to save the girl that saved you.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Yet when you arrived, a horde of helldogs stare at you.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Terrified by the view of severed bodyparts spreading across the ground");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Having a look at the monster appearing right in front of you, chewing on what seems to be an arm, you collapse to the ground.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "This isn't fair. A pointless Trial.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Broken.");
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "YOU DIED");
                    Template.y++;
                    window.addEventListener("load", Template.start); //does this work?? bruh this works. Genius.
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
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The Air is thick and hard to breath, as you look around yourself you notice the intense heat around you.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Is this really Hell?");
            await Template.ƒS.Speech.tell(Template.characters.general, "Okay ???, let's go, follow the route of those sticks in the ground.");
            await Template.ƒS.Speech.tell(Template.characters.general, "We have to escape quietly, the scouts already saw some minor Demons coming close to us.");
            //change smages name to new Name???
            await Template.ƒS.Speech.tell(Template.characters.smage, "Minor demons are still pretty scary if I might add that. They're smaller but way faster.");
            await Template.ƒS.Speech.tell(Template.characters.smage, "Aaaaand that's why we have to escape quietly, we cant outrun them.");
            await Template.ƒS.Speech.tell(Template.characters.smage, "By the way, what's your name?");
            //inputfield for PName here, how?
            Template.dataForSave.PName = await Template.ƒS.Speech.getInput();
            await Template.ƒS.Speech.tell(Template.characters.smage, "Ohhh " + Template.dataForSave.PName + " is a cute name");
            await Template.ƒS.Speech.tell(Template.characters.smage, "My Name is ???");
            await Template.ƒS.Speech.tell(Template.characters.smage, "Before we go, I have a small gift for you, take this.");
            await Template.ƒS.Speech.tell(Template.characters.smage, "It took alot of work so please don't lose it okay?");
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            Template.ƒS.Inventory.add(Template.items.rose);
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Quietly under the orders of ??? the whole group sneaks towards the headquarters...");
        }
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
        };
        // für Platzhalter für komisches Zeug
        let mageDead; //mage dead?
        await Template.ƒS.Speech.tell(Template.characters.narrator, "After a quite long time you arrive at what seems to be an hidden entrance.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Mara moves a stone aside you waves you to go ahead.");
        await Template.ƒS.Speech.tell(Template.characters.general, "We have arrived. Go ahead.");
        //inbetween fehlen kommentare von small mage, if shes not dead.
        await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "After a rather long and difficult small cave you stand before a lively place.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "People talking and enjoying themselves, sounds of metal clinging, a lively bazaar, this doesn't look like hell.");
        await Template.ƒS.Speech.tell(Template.characters.general, "You will need some proper training, go to the barracks to learn something useful.");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Mara leaves you behind and seems to walk to a tent reserved for her.");
        //first dialogue option to ask questions
        let firstDialogueElementOptions = {
            iSayDot1: "Talk to Mara",
            iSayDot2: "Go check out the barracks",
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "WVDialogueOption");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayDot1:
                break;
            case firstDialogueElementOptions.iSayDot2:
                //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.center);
                break;
        }
        //asking all will cost you tho, lol
        if (Template.x == 4 || Template.x > 4) {
            mageDead = true;
        }
        if (mageDead) { //she dead - tree
            console.log("Mage still dead");
        }
        if (!mageDead) { //she aint dead - tree
            console.log("Mage still did diedn't");
        }
        await Template.ƒS.Character.show(Template.characters.general, Template.characters.general.pose.base, Template.ƒS.positionPercent(30, 90));
        await Template.ƒS.update();
    }
    Template.HauptVersteck = HauptVersteck;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function TrueEnding() {
        console.log("9 TrueEnding Scene starting");
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
            alpha: "./Transitions/Arcane.jpg",
            edge: 1
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
        boom: "",
    };
    Template.locations = {
        introduction: {
            name: "Intro",
            background: "./Assets/Background/Intro.jpg"
        },
        bedroom: {
            name: "Bedroom",
            background: "./Assets/Background/MountainCastle.png"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        general: {
            name: "General",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                base: "./Assets/Character/HumanChars/General.gif",
            }
        },
        smage: {
            name: "SmallMage",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                base: "./Assets/Character/HumanChars/General.gif",
            }
        }
    };
    Template.items = {
        rose: {
            name: "Rose",
            description: "Eine seltsam leuchtende Rose",
            image: "./Assets/Items/rose.jpg"
        }
    };
    //Platzhalter für global use
    Template.x = 0; //counter für gestellte fragen in 3wv.ts == smage dead? x>3 means dead.
    Template.y = 0; //Deathcounter
    Template.z = 0;
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
    Template.dataForSave = {
        PName: "",
    };
    function fromLeftToRight() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("white", 0) },
            end: { translation: Template.ƒS.positions.bottomleft, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.fromLeftToRight = fromLeftToRight;
    window.addEventListener("load", start);
    function start(_event) {
        console.log("Sequenzreihe startet jetzt. Splish Splash your opinion is trash");
        if (Template.y == 1) {
            console.log("######### Second run. #########");
        }
        //Menü
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        //Szenenreihenfolge
        let scenes = [
            { id: "Re:Intro", scene: Template.ReIntroduction, name: "1Re:Intro" },
            { scene: Template.Intro, name: "2Intro" },
            { scene: Template.WiderstandsVersteck, name: "3WV" },
            { scene: Template.HauptVersteck, name: "4HV" },
            { scene: Template.TrueEnding, name: "9TrueEnding" },
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