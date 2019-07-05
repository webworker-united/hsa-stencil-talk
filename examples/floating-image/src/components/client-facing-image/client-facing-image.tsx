import { Component, Prop, Listen, State, Element } from "@stencil/core";
import * as OrientationUtils from "../../utils/orientation.utils";
import { IVector2d } from "../../models/vector-2d";

@Component({
  tag: "client-facing-image",
  styleUrl: "client-facing-image.scss",
  shadow: true
})
export class ClientFacingImage {
  @Element() private element: HTMLElement;
  @Prop() url: string = "";
  @Prop() width: string = "200px";
  @Prop() height: string = "200px";
  @Prop() round: boolean = true;
  @Prop() intensity: number = 1;
  @State() clientOffset: IVector2d = { x: 0, y: 0 };

  get imgStyle() {
    return {
      backgroundImage: `url(${this.url})`,
      width: this.width,
      height: this.height,
      transform: OrientationUtils.getRotation(this.clientOffset, this.intensity)
    };
  }

  get imgClass() {
    return {
      cfi__projector: true,
      "cfi__projector--round": this.round
    };
  }

  get backdropStyle() {
    return {
      width: this.width,
      height: this.height,
      transform:
        OrientationUtils.getTranslation(this.clientOffset, this.intensity) +
        OrientationUtils.getRotation(this.clientOffset, this.intensity)
    };
  }

  get backdropClass() {
    return {
      cfi__backdrop: true,
      "cfi__backdrop--round": this.round
    };
  }

  @Listen("window:mousemove")
  handleMouseMove($event: MouseEvent) {
    const clientPosition: IVector2d = { x: $event.clientX, y: $event.clientY };
    this.clientOffset = OrientationUtils.getClientOffset(
      this.element,
      clientPosition
    );
  }

  render() {
    return (
      <div class="cfi">
        <div class={this.backdropClass} style={this.backdropStyle} />
        <div class={this.imgClass} style={this.imgStyle} />
      </div>
    );
  }
}
