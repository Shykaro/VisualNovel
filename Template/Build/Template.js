"use strict";
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
            background: "./Images/Backgrounds/Bedroom.png"
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
                angry: "PFAD",
                happy: "PFAD",
                upset: "PFAD"
            }
        }
    };
    Template.dataForSave = {};
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            narrator: {
                T0000: "",
                T0001: ""
            },
            aisaka: {
                T0000: "",
                T0001: ""
            }
        };
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.angry, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.aisaka.T0000);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, "Hi2");
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
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map