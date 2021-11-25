import Alpine from "alpinejs/src";
import alpinePlugins from "./alpine";
import { priceFormatter } from "./utils";

alpinePlugins.forEach((x) => Alpine.plugin(x));

window.Alpine = Alpine;
window.priceFormatter = priceFormatter;
Alpine.start();
