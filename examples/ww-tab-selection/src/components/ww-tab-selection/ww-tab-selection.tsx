import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";
import { IConfig } from "../models/config.interface";
import { ITab } from "../models/tab.interface";

@Component({
  tag: "ww-tab-selection",
  styleUrl: "ww-tab-selection.scss",
  shadow: true
})
export class WwTabSelection {
  @Prop() config: IConfig;
  @Prop() initiallySelectedTab: string;
  @State() selectedTab: string;
  @Event() tabClicked: EventEmitter;

  componentWillLoad() {
    this.selectedTab = this.initiallySelectedTab;
    this.tabClicked.emit(
      this.config.tabs.find(tab => tab.key === this.initiallySelectedTab)
    );
  }

  private getTabClass(tab: ITab) {
    return {
      "ww-tab-selection__tab": true,
      selected: tab.key === this.selectedTab
    };
  }

  private tabSelected(tab: ITab) {
    this.selectedTab = tab.key;
    this.tabClicked.emit(tab);
  }

  render() {
    return (
      <div class="ww-tab-selection">
        {this.config.tabs.map(tab => (
          <span
            class={this.getTabClass(tab)}
            onClick={() => this.tabSelected(tab)}
          >
            {tab.title}
          </span>
        ))}
      </div>
    );
  }
}
