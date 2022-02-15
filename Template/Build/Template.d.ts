declare namespace Template {
    function Introduction(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function WiderstandsVersteck(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        cut: {
            duration: number;
            alpha: string;
            edge: number;
        };
        donner1: {
            duration: number;
            alpha: string;
            edge: number;
        };
        donner2: {
            duration: number;
            alpha: string;
            edge: number;
        };
        donner3: {
            duration: number;
            alpha: string;
            edge: number;
        };
        arcane: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundtheme: string;
        introtheme: string;
        wvtheme: string;
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
        general: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                base: string;
            };
        };
        smage: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                base: string;
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
