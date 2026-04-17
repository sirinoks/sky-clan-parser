"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLocation = exports.LOCATIONS = void 0;
const LOCATIONS = [
    "\u041f\u0435\u0440\u0438\u0444\u0435\u0440\u0438\u044f",
    "\u041f\u043e\u044e\u0449\u0438\u0439 \u0420\u0438\u0444",
    "\u0411\u0430\u0441\u0442\u0438\u043e\u043d",
    "\u041e\u0441\u043a\u043e\u043b\u043a\u0438",
];
exports.LOCATIONS = LOCATIONS;
function isLocation(value) {
    return LOCATIONS.includes(value);
}
exports.isLocation = isLocation;
class Fight {
    location = "\u041f\u0435\u0440\u0438\u0444\u0435\u0440\u0438\u044f";
    island = "none";
    builder = "none";
    attacker = "none";
    date = "00.00.00";
    time = "00:00";
    constructor(location, island, builder, attacker, date, time) {
        this.location = location;
        this.island = island;
        this.builder = builder;
        this.attacker = attacker;
        this.date = date;
        this.time = time;
    }
}
exports.default = Fight;
