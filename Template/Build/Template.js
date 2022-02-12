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
        await Template.ƒS.Sound.play(Template.sound.backgroundTheme, 0.1, true);
        //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002 + ".....");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0006);
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
                T0000: "You Died.",
                T0001: "You will be judged infront of the Eternities of the everliving astral World.",
                T0002: ".....",
                T0003: "You were found guilty by the ten commandments.",
                T0004: "You will suffer in Hell",
                T0005: "You will suffer...",
                T0006: "You will..."
            }
        };
        await Template.ƒS.Location.show(Template.locations.bedroom);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.update(Template.transition.donner1.duration, Template.transition.donner1.alpha, Template.transition.donner1.edge);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.update(Template.transition.donner2.duration, Template.transition.donner2.alpha, Template.transition.donner2.edge);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.update(Template.transition.donner3.duration, Template.transition.donner3.alpha, Template.transition.donner3.edge);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.update(Template.transition.arcane.duration, Template.transition.arcane.alpha, Template.transition.arcane.edge);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.Sound.play(Template.sound.backgroundTheme, 0.1, true);
        //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(30, 100));
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
        backgroundTheme: "./Assets/Music/Vampires/WastedBlood.mp3",
        introtheme: "./Assets/Music/Vampires/WastedBlood.mp3",
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
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Assets/Character/Knight.png",
                happy: "./Assets/Character/Knight.png",
                upset: "./Assets/Character/Knight.png"
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
            { scene: Template.Scene, name: "2Scene" },
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