"use strict";
const chalk = require("chalk");

console.log(chalk.hex('#FF6B8B')("╔═══════════════════════════════════════╗"));
console.log(chalk.hex('#FF6B8B')("║") + chalk.hex('#FFD700')("       MODIFIED BAILEYS EDITION       ") + chalk.hex('#FF6B8B')("║"));
console.log(chalk.hex('#FF6B8B')("╠═══════════════════════════════════════╣"));
console.log(chalk.hex('#FF6B8B')("║") + chalk.cyan(" ✦ Developer: ") + chalk.whiteBright("Habibi Haxor") + " ".repeat(21) + chalk.hex('#FF6B8B')("║"));
console.log(chalk.hex('#FF6B8B')("║") + chalk.cyan(" ✦ Thanks To:  ") + chalk.greenBright("Habibi Haxor") + " ".repeat(22) + chalk.hex('#FF6B8B')("║"));
console.log(chalk.hex('#FF6B8B')("║") + chalk.cyan(" ✦ Version:   ") + chalk.yellow("Premium") + " ".repeat(24) + chalk.hex('#FF6B8B')("║"));
console.log(chalk.hex('#FF6B8B')("╚═══════════════════════════════════════╝\n"));

// Atau dengan gaya yang lebih modern:
console.log(chalk.hex('#00D4FF').bold("┌───────────────────────────────────────┐"));
console.log(chalk.hex('#00D4FF').bold("│ ") + chalk.hex('#FF00FF')("🔥 ") + chalk.whiteBright.bold("MODIFIED BAILEYS") + chalk.hex('#FFA500')(" PRO ") + chalk.hex('#00D4FF').bold(" │"));
console.log(chalk.hex('#00D4FF').bold("├───────────────────────────────────────┤"));
console.log(chalk.hex('#00D4FF').bold("│ ") + chalk.hex('#00FFAA')("📌 Developer ") + chalk.white("➜ ") + chalk.bold("Habibi Haxor") + " ".repeat(9) + chalk.hex('#00D4FF').bold("│"));
console.log(chalk.hex('#00D4FF').bold("│ ") + chalk.hex('#00FFAA')("Thanks To  ") + chalk.white("➜ ") + chalk.greenBright.underline("Habibi Haxor ") + " ".repeat(8) + chalk.hex('#00D4FF').bold("│"));
console.log(chalk.hex('#00D4FF').bold("│ ") + chalk.hex('#00FFAA')("⚡ Version   ") + chalk.white("➜ ") + chalk.yellow.bold("V2.0") + " ".repeat(15) + chalk.hex('#00D4FF').bold("│"));
console.log(chalk.hex('#00D4FF').bold("└───────────────────────────────────────┘\n"));

// Opsi dengan animasi ASCII:
console.log(chalk.hex('#FF3366')("╭━╮╭━╮╱╱╭╮"));
console.log(chalk.hex('#FF3366')("┃┃╰╯┃┃╱╱┃┃") + chalk.hex('#33FFCC')("   Modified Baileys"));
console.log(chalk.hex('#FF3366')("┃╭╮╭╮┣━━┫┃╭━━╮") + chalk.hex('#FFCC00')(" ✦ Habibi Haxor"));
console.log(chalk.hex('#FF3366')("┃┃┃┃┃┃┃━┫┃┃╭╮┃") + chalk.cyan("  Developer"));
console.log(chalk.hex('#FF3366')("┃┃┃┃┃┃┃━┫╰┫╰╯┃") + chalk.greenBright("   @Habibi Haxor"));
console.log(chalk.hex('#FF3366')("╰╯╰╯╰┻━━┻━┻━━╯\n"));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
