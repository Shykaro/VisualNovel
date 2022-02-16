declare namespace Template {
    function ReIntroduction(): ƒS.SceneReturn;
}
declare namespace Template {
    function Intro(): ƒS.SceneReturn;
}
declare namespace Template {
    function WiderstandsVersteck(): ƒS.SceneReturn;
}
declare namespace Template {
    function HauptVersteck(): ƒS.SceneReturn;
}
declare namespace Template {
    function TrueEnding(): ƒS.SceneReturn;
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
        wvthemeBad: string;
        click: string;
        boom: string;
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
        rose: {
            name: string;
            description: string;
            image: string;
        };
    };
    let x: number;
    let y: number;
    let z: number;
    let dataForSave: {
        PName: string;
    };
    function fromLeftToRight(): ƒS.AnimationDefinition;
    function start(_event: Event): void;
}
