import '../../stencil.core';
import { IVector2d } from "../../models/vector-2d";
export declare class ClientFacingImage {
    private element;
    url: string;
    width: string;
    height: string;
    round: boolean;
    clientOffset: IVector2d;
    readonly imgStyle: {
        backgroundImage: string;
        width: string;
        height: string;
        transform: string;
    };
    readonly imgClass: {
        cfi__projector: boolean;
        "cfi__projector--round": boolean;
    };
    readonly backdropStyle: {
        width: string;
        height: string;
        transform: string;
    };
    readonly backdropClass: {
        cfi__backdrop: boolean;
        "cfi__backdrop--round": boolean;
    };
    handleMouseMove($event: MouseEvent): void;
    render(): JSX.Element;
}
