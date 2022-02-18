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
    function Artifact(): ƒS.SceneReturn;
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
        openfield: {
            name: string;
            background: string;
        };
        blackscreen: {
            name: string;
            background: string;
        };
        tempel: {
            name: string;
            background: string;
        };
        cave: {
            name: string;
            background: string;
        };
        keys: {
            name: string;
            background: string;
        };
        Lava: {
            name: string;
            background: string;
        };
    };
    let characters: {
        unknown: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        narrator: {
            name: string;
        };
        consciousness: {
            name: string;
        };
        general: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                base: string;
            };
        };
        mara: {
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
        pia: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                base: string;
            };
        };
        bmage: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                base: string;
            };
        };
        assassin: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                base: string;
            };
        };
        jessy: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                base: string;
            };
        };
        scout: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                base: string;
            };
        };
        trainer: {
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
    let EndingACheck: String;
    let EndingBCheck: String;
    let EndingCCheck: String;
    let EndingDCheck: String;
    let EndingECheck: String;
    let EndingFCheck: String;
    let EndingGCheck: String;
    let EndingA: String;
    let EndingB: String;
    let EndingC: String;
    let EndingD: String;
    let EndingE: String;
    let EndingF: String;
    let EndingG: String;
    const delay_5sec: ƒS.Signal;
    let dataForSave: {
        PName: string;
        scoreRyu: number;
        scoreForRyu: string;
    };
    function fromLeftToLeft(): ƒS.AnimationDefinition;
    function fromRightToRight(): ƒS.AnimationDefinition;
    function BackToNormal(): ƒS.AnimationDefinition;
    function start(_event: Event): void;
}
