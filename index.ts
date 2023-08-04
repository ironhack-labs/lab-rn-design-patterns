import { facade } from "./facade";
import { singleton } from "./logger";
import { factory } from "./productFactory";
import { observer } from "./observer";

singleton();
factory();
observer();
facade();
