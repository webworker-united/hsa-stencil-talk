import { IVector2d } from "../models/vector-2d";
export declare function getClientOffset(element: HTMLElement, clientPosition: IVector2d): IVector2d;
export declare function getRotation(clientOffset: IVector2d): string;
export declare function calcRotation(mousePos: number): number;
export declare function getTranslation(clientOffset: IVector2d): string;
export declare function calcOffset(mousePos: number): number;
