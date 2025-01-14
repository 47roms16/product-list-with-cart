import "./styles/style.css";
import "./styles/components/main.css";
import "./styles/components/cart.css";

import "./ts/api/fetch-desserts";
import initUi from "./ts/ui/components/products/init-ui";

document.addEventListener("DOMContentLoaded", initUi);
