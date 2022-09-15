// alias 별칭
type Name = string;
type Age = number;

// optional
type Player = {
    name: Name,
    age?: Age
};

// 인자 타입 선언
const playerMaker = (name:string) : Player => ({ name });
const sungsu = playerMaker("sungsu")
sungsu.age = 29;

// tuple
const person: [string, number, boolean] = ["a", 1, true];

// tuple + readonly
const a : readonly [string, number] = ["a", 3];

// 화살표 함수
function add1(a:number, b:number) {
    return a + b;
};
const add2 = (a:number, b:number) => a + b

// call signatures
type Add = (a:number, b:number) => number;

const add:Add = (a, b) => a + b

// overloading
type Config = {
    path:string,
    state:object
}
type Push = {
    (path:string):void
    (config:Config):void
}

const push:Push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    } else {
        console.log(config.path, config.state);
    }
}

// call signatures - 파라미터 갯수가 다를 때
type Q = {
    (a:number, b:number) : number
    (a:number, b:number, c:number) : number
}

const q:Q = (a, b, c?:number) => {
    if (c) return a + b + c 
    return a+ b
}

q(1,2); // return a + b
q(1,3,4); // return a + b + c

// polymorphism - generic
type SuperPrint1 = <T>(arr:T[]) => T


const superPrint:SuperPrint1 = (arr) => arr[0];

superPrint([1, 2, 3]);
superPrint([true, false, false]);
superPrint(['abc', 2, true, "a", "def"]);

// generic - agrument 2개 일때
type SuperPrint2 = <T,V>(a:T[], b:V) => T

const superPrint2:SuperPrint2 = (arr) => arr[0];

superPrint2(["a"], 3);
superPrint2([1,2,3], "fsd");

// 복습
type Man<E> = {
    name:string
    extraInfo:E
}
type NicoExtra = { favFood:string }
type NicoMan = Man<NicoExtra>

const nico:NicoMan = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}

const messi:Man<null> = {
    name: "messi",
    extraInfo: null
}
