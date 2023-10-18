import {Point} from './Sence'
//Block class
export class Block {
    public point: Point;
    constructor(point: Point, blockType: BlockType) {
        this.point = point;
    }
}

export enum BlockType {
    Wall,
    Road,
    Grass,
    Water,
    House,
    Tree,
}