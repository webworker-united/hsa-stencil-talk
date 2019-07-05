import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ww-switch",
  styleUrl: "ww-switch.scss",
  shadow: true
})
export class WwSwitch {
  @Prop() selectedSlot: string;

  render() {
    return (
      <div class="ww-switch">
        <slot name={this.selectedSlot} />
      </div>
    );
  }
}
