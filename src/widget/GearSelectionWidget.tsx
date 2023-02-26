import "../styles.css";

import React from "react";

import GearSelectionComponent from "./GearSelectionComponent";

export class GearSelectionWidget extends React.Component {
  render(): JSX.Element {
    return (
      <div id="webds_gear_selection_widget_content" className="jp-webds-widget">
        <div className="jp-webds-widget-outer-pseudo">
          <div className="jp-webds-widget-inner-pseudo">
            <GearSelectionComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default GearSelectionWidget;
