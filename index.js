import {foo} from "lib";
console.log(foo());
console.log(import.meta.env["VITE_CUSTOM"]);
console.log(import.meta.env.VITE_CUSTOM);
