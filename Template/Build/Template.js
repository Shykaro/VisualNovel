"use strict";
var Template;
(function (Template) {
    async function Introduction() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            narrator: {
                T0000: "You Died.",
                T0001: "You will be judged infront of the Eternities of the everliving astral World."
            },
            aisaka: {
                T0000: "No",
                T0001: "NoNo"
            }
        };
        await Template.ƒS.Location.show(Template.locations.bedroom);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.angry, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.aisaka.T0000);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, "Hi2");
        await Template.ƒS.Character.animate(Template.characters.aisaka, Template.characters.aisaka.pose.happy, Template.fromLeftToRight());
        await Template.ƒS.Character.hide(Template.characters.aisaka);
        let firstDialogueElementOptions = {
            iSayOk: "OK.",
            iSayYes: "ja",
            iSayNo: "no"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await Template.ƒS.Speech.tell(Template.characters.aisaka, "Hi2.");
                break;
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.angry, Template.ƒS.positions.center);
                break;
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.aisaka, text.aisaka.T0001);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.aisaka.T0001);
        //Inventory Befehle
        Template.ƒS.Inventory.add(Template.items.pen);
        await Template.ƒS.Inventory.open();
        await Template.ƒS.Inventory.close();
        // Menü
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //define Transitions
    Template.transition = {
        clock: {
            duration: 1,
            alpha: "./Transitions/puzzle.png",
            edge: 1 //härte verlauf der transition, 
        },
        wipe: {}
    };
    Template.sound = {
        //music
        backgroundTheme: "",
        //sound
        click: ""
    };
    Template.locations = {
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
            { id: "Einfuehrung", scene: Template.Introduction, name: "Introduction to FS" },
            { scene: Template.Scene, name: "Scene" }
            //{ id: "Ende", scene: End, name: "Introduction to FS"},
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map