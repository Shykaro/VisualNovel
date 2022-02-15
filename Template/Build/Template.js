"use strict";
var Template;
(function (Template) {
    async function Introduction() {
        console.log("1 Pre Intro Scene starting");
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("2 Intro Scene starting");
        //Texte
        let text = {
            narrator: {
                T0000: "You Died.",
                T0001: "You will be judged infront of the Eternities of the everliving astral World.",
                T0002: ".....",
                T0003: "You were found guilty by the ten commandments.",
                T0004: "You will suffer in Hell",
                T0005: "You will suffer...",
                T0006: "You will..."
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
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0006);
        await Template.ƒS.Sound.fade(Template.sound.backgroundtheme, 0, 1);
        //await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromLeftToRight());
        //await ƒS.Character.hide(characters.aisaka);
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
        //await ƒS.Speech.tell(characters.aisaka, text.aisaka.T0001);
        //Inventory Befehle
        //ƒS.Inventory.add(items.pen);
        //await ƒS.Inventory.open();
        //await ƒS.Inventory.close();
        // Menü
    }
    Template.Scene = Scene;
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
        let x = 0;
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
                    x++;
                    break;
                case firstDialogueElementOptions.iSayDot2:
                    //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.center);
                    await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0011);
                    x++;
                    await Template.ƒS.Speech.tell(Template.characters.general, text.general.T0011);
                    break;
                case firstDialogueElementOptions.iSayDot3:
                    await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0012);
                    x++;
                    await Template.ƒS.Speech.tell(Template.characters.general, text.general.T0010);
                    break;
                case firstDialogueElementOptions.iSayDot4:
                    await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0013);
                    x++;
                    break;
                case firstDialogueElementOptions.iSayDot5:
                    await Template.ƒS.Speech.tell(Template.characters.smage, text.smage.T0014);
                    askAgain = false;
                    break;
            }
        }
        //asking all will cost you tho, lol
        if (x == 4 || x > 4) {
            mageDead = true;
            x = 0; //reset x because why not
        }
        if (mageDead) { //she dead - tree
            console.log("Mage died");
            await Template.ƒS.Speech.tell(Template.characters.general, "We have to go NOW, this is not a joke!");
            await Template.ƒS.Speech.tell(Template.characters.general, "One scout is missing and that brings up the topic, what the fuck is already out there");
            await Template.ƒS.Speech.tell(Template.characters.smage, "Thats not good...");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Is this really Hell?");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "This seems so unreal, but the Air is heavy and its way too warm");
        }
        if (!mageDead) { //she aint dead - tree
            console.log("Mage diedn't");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "The Air is thick and hard to breath, as you look around yourself you notice the intense heat around you.");
            await Template.ƒS.Speech.tell(Template.characters.narrator, "Is this really Hell?");
            await Template.ƒS.Speech.tell(Template.characters.general, "Okay let's go, follow the route of those sticks in the ground.");
            await Template.ƒS.Speech.tell(Template.characters.general, "We have to escape quietly, the scouts already saw some minor Demons coming close to us.");
            await Template.ƒS.Speech.tell(Template.characters.smage, "Minor demons are still pretty scary if I might add that. They're smaller but way faster.");
            await Template.ƒS.Speech.tell(Template.characters.smage, "Aaaaand that's why we have to escape quietly, we cant outrun them.");
        }
        await Template.ƒS.Character.show(Template.characters.general, Template.characters.general.pose.base, Template.ƒS.positionPercent(30, 90));
        await Template.ƒS.update();
    }
    Template.WiderstandsVersteck = WiderstandsVersteck;
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
        wvtheme: "./Assets/Music/Vampires/Persian Battle.mp3",
        //sound
        click: ""
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
        pen: {
            name: "Roter Buntstift",
            description: "Ein Bunter Stift der Rot ist.",
            image: ""
        }
    };
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
    Template.dataForSave = {};
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
        console.log("FudgeStory template starting NOW");
        //Menü
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        //Szenenreihenfolge
        let scenes = [
            { id: "Einfuehrung", scene: Template.Introduction, name: "1Introduction" },
            //{ scene: Scene, name: "2Scene" },
            { scene: Template.WiderstandsVersteck, name: "3WV" }
            //{ id: "Ende", scene: End, name: "Introduction to FS"},
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map