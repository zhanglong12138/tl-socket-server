import {UserInfo,Point} from './Sence';
import {Mission} from './Mission';

//Person class
export class Person {
    public userInfo: UserInfo;
    public point: Point;
    public life: number = 100;
    public level: number = 1;
    public exp: number = 0;
    
    constructor(userInfo: UserInfo,  point: Point) {
        this.userInfo = userInfo;
        this.point = point;
    }

    setPoint(point: Point) {
        this.point = point;
    }

    attack(person: Person) {
        console.log(`${this.userInfo.name} attack ${person.userInfo.name}`);
    }

    expAdd(exp: number) {
        this.exp += exp;
    }

    levelUp() {
        this.level++;
    }
}

export class NPC extends Person {
    mission: Array<Mission> = [];
    constructor(userInfo: UserInfo, point: Point) {
        super(userInfo, point);
    }
}

export class Monster extends Person {
    aim: Person;
    constructor(userInfo: UserInfo, point: Point) {
        super(userInfo, point);
    }
}

export class Skill {
    name: string;
    skillType: SkillType;
    isBuff: boolean;
    value: number;
    constructor(name: string) {
        this.name = name;
    }
}

export enum SkillType {
    Physical,
    Magic,
    Shadow,
    Holy,
    Fire,
    Ice,
    Poison,
    Lightning,
    Cure
}

