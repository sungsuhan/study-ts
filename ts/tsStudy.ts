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