//import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import GearSelectionWidget from "./widget/GearSelectionWidget";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  //<StrictMode>
  <GearSelectionWidget />
  //</StrictMode>
);
