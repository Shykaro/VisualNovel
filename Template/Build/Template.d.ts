declare namespace Template {
    function Introduction(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wipe: {};
    };
    let sound: {
        backgroundTheme: string;
        introtheme: string;
        click: string;
    };
    let locations: {
        introduction: {
            name: string;
            background: string;
        };
        bedroom: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        aisaka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let items: {
        pen: {
            name: string;
            description: string;
            image: string;
        };
    };
    let dataForSave: {};
    function fromLeftToRight(): ƒS.AnimationDefinition;
}
