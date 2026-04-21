"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
const fightClass_1 = __importStar(require("./fightClass"));
const clanLogs = `
21:10:00 База (Осколки, [Лабиринт икаров Д 71:48]) Остров "В 1 /Добывающий остров [3]", построенный кланом "Небесная_КанЦеляриЯ", будет атакован кланом "Небесная_КанЦеляриЯ" 20.02.24 22:30 по мск.
`;
const warLogs1 = `
08:50:44 База (Поющий Риф) Разработаны планы атаки на клан "Небесная_КанЦеляриЯ" (1 шт.), нападение возможно до 22 фев. 08:50
09:07:08 База (Бастион) Разработаны планы атаки на клан "Guard Heaven" (1 шт.), нападение возможно до 22 фев. 09:07
09:07:18 База (Бастион) Разработаны планы атаки на клан "Guard Heaven" (1 шт.), нападение возможно до 22 фев. 09:07
09:07:27 База (Бастион) Разработаны планы атаки на клан "Guard Heaven" (1 шт.), нападение возможно до 22 фев. 09:07
09:07:47 База (Бастион) Разработаны планы атаки на клан "Guard Heaven" (1 шт.), нападение возможно до 22 фев. 09:07
09:07:56 База (Бастион) Разработаны планы атаки на клан "Небесная_КанЦеляриЯ" (1 шт.), нападение возможно до 22 фев. 09:07
09:08:06 База (Бастион) Разработаны планы атаки на клан "Небесная_КанЦеляриЯ" (1 шт.), нападение возможно до 22 фев. 09:08
09:08:19 База (Бастион) Разработаны планы атаки на клан "Небесная_КанЦеляриЯ" (1 шт.), нападение возможно до 22 фев. 09:08
09:08:28 База (Бастион) Разработаны планы атаки на клан "Небесная_КанЦеляриЯ" (1 шт.), нападение возможно до 22 фев. 09:08
09:25:24 База (Поющий Риф) Разработаны планы атаки на клан "Небесная_КанЦеляриЯ" (1 шт.), нападение возможно до 22 фев. 09:25
09:25:33 База (Поющий Риф) Разработаны планы атаки на клан "Небесная_КанЦеляриЯ" (1 шт.), нападение возможно до 22 фев. 09:25
09:25:43 База (Поющий Риф) Разработаны планы атаки на клан "Небесная_КанЦеляриЯ" (1 шт.), нападение возможно до 22 фев. 09:25
09:26:25 База (Осколки) Разработаны планы атаки на клан "Guard Heaven" (1 шт.), нападение возможно до 22 фев. 09:26
09:26:48 База (Осколки) Разработаны планы атаки на клан "Guard Heaven" (1 шт.), нападение возможно до 22 фев. 09:26
09:27:07 База (Осколки) Разработаны планы атаки на клан "Guard Heaven" (1 шт.), нападение возможно до 22 фев. 09:27
09:30:35 База (Осколки) Разработаны планы атаки на клан "Guard Heaven" (1 шт.), нападение возможно до 22 фев. 09:30
`;
//work with these
const warLogs2 = `
13:10:00 База (Поющий Риф, [Лабиринт Ф 10:82]) Подтверждена наша заявка на атаку острова "производим Метамфетамин /Добывающий остров [3]", построенного кланом "небесные алхимики", 22.02.24 21:30 по мск., находящегося под контролем клана "Guard Heaven"
13:10:00 База (Поющий Риф, [Лабиринт Ф 33:81]) Подтверждена наша заявка на атаку острова "ДК им.У.Уайта и Дж.Пинкмана /Добывающий остров [3]", построенного кланом "небесные алхимики", 22.02.24 21:00 по мск., находящегося под контролем клана "Guard Heaven"
13:10:00 База (Поющий Риф, [Остров свёрнут]) Подтверждена наша заявка на атаку острова "ЛОГОВО НЕ БИТЬ! /Генератор тоннелей ветра [3]" 22.02.24 22:30 по мск., находящийся под контролем клана "Небесная_КанЦеляриЯ"
13:10:00 База (Поющий Риф, [Остров свёрнут]) Подтверждена наша заявка на атаку острова "КИМ не смог поменять права, бебе /Остров-склад [3]" 22.02.24 23:00 по мск., находящийся под контролем клана "Небесная_КанЦеляриЯ"
13:10:00 База (Поющий Риф, [Остров свёрнут]) Подтверждена наша заявка на атаку острова "ФАРМ /Генератор тоннелей ветра [3]" 22.02.24 23:30 по мск., находящийся под контролем клана "Небесная_КанЦеляриЯ"
13:10:00 База (Поющий Риф, [Лабиринт П 64:77]) Подтверждена наша заявка на атаку острова "ЖАРА /Генератор тоннелей ветра [3]", построенного кланом "Guard Heaven", 22.02.24 22:00 по мск., находящегося под контролем клана "Небесная_КанЦеляриЯ"
13:10:01 База (Поющий Риф, [Лабиринт Р 14:36]) Остров "Пелотас /Генератор тоннелей ветра [1]", построенный кланом "Истина", будет атакован кланом "Omega Rising" 24.02.24 21:30 по мск.
13:10:01 База (Поющий Риф, [Лабиринт Ф 79:10]) Остров "ДОБЫВАЮЩИЙ ОСТРОВ "БезлапаяМуха" /Добывающий остров [3]", построенный кланом "Wizards of the Sky", будет атакован кланом "Omega Rising" 24.02.24 22:30 по мск.
13:10:01 База (Поющий Риф, [Лабиринт Т 81:20]) Остров "Склад - реплоиды /Остров-склад [3]", построенный кланом "Wizards of the Sky", будет атакован кланом "Omega Rising" 24.02.24 22:00 по мск.
`;
const chatLogs = `
13:10 (Периферия) остров "Мама куба села и база утонула" завтра будет атакован кланом "Guard Heaven" в 21:30 по мск.
13:10 (Периферия) остров "СЕЛА МАМА РОБИНА НА АЙФОН право [3]" завтра будет атакован кланом "Guard Heaven" в 21:00 по мск.
13:10 (Поющий Риф) Заявка на атаку "Все дороги ведут в Гварды" клана "Guard Heaven" отклонена. Ставка была перебита.
13:10 (Поющий Риф) Заявка на атаку "Шавуха из Арии [3]" клана "Guard Heaven" отклонена. Ставка была перебита.
13:10 (Поющий Риф) Заявка на атаку "Доширак для душенуба [3]" клана "Guard Heaven" отклонена. Ставка была перебита.
13:10 (Поющий Риф) Заявка на атаку "Машины цветники [3]" клана "Guard Heaven" отклонена. Ставка была перебита.
13:10 (Поющий Риф) остров "Прачечная им. Густаво Фринга [3]" завтра будет атакован кланом "Guard Heaven" в 21:00 по мск.
13:10 (Поющий Риф) остров "Империя питания "Братья цыплята" [3]" завтра будет атакован кланом "Guard Heaven" в 21:30 по мск.
13:10 (Поющий Риф) остров "НЕ СНИМАТЬ [3]" завтра будет атакован кланом "Guard Heaven" в 22:00 по мск.
13:10 (Поющий Риф) остров "ЗАНЯТО ХИМАМИ [3]" завтра будет атакован кланом "Guard Heaven" в 22:30 по мск.
13:10 (Поющий Риф) Атака на "Остров-склад [3]" клана "Небесная_КанЦеляриЯ" состоится завтра в 12:00 по мск..
13:10 (Поющий Риф) Атака на "The Iron Throne" клана "Yakuza" состоится завтра в 12:30 по мск..
13:10 (Бастион) остров "Алое Восстание" завтра будет атакован кланом "ЕВРОПА" в 21:00 по мск.
13:10 (Бастион) остров "хэви проджект [3]" завтра будет атакован кланом "ЕВРОПА" в 21:30 по мск.
13:10 (Бастион) остров "металл корпорейшн [3]" завтра будет атакован кланом "ЕВРОПА" в 22:00 по мск.
13:10 (Бастион) остров "Не снимать !!! [3]" завтра будет атакован кланом "ЕВРОПА" в 22:30 по мск.
`;
console.log("start");
let regex = `База \(*`;
//Splits text into lines
function lines(text) {
  return text.split("\n");
}
function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}
// oneLine = oneLine.substring(oneLine.indexOf(", ")+", ".length, oneLine.length);
//Take the data string, remove the part with the data collected, leave the rest and return it back
function removeCollectedFromData(dataString, matchString) {
  return dataString.substring(
    dataString.indexOf(matchString) + matchString.length,
    dataString.length,
  );
}
let logs = [];
function parseDataLine(line) {
  let oneLine = line;
  let location;
  let stringLocation = oneLine.slice(
    oneLine.indexOf("База (") + "База (".length,
    oneLine.indexOf(","),
  );
  if ((0, fightClass_1.isLocation)(stringLocation)) {
    location = stringLocation;
    oneLine = removeCollectedFromData(oneLine, ", ");
  } else {
    throw new Error("Invalid location: " + stringLocation + ". Line: " + line);
  }
  let island = oneLine.slice(
    oneLine.indexOf('Остров "') + 'Остров "'.length,
    oneLine.indexOf(",") - ",".length,
  );
  oneLine = removeCollectedFromData(oneLine, ", ");
  let builder = oneLine.slice(
    oneLine.indexOf('построенный кланом "') + 'построенный кланом "'.length,
    oneLine.indexOf(",") - ",".length,
  );
  oneLine = removeCollectedFromData(oneLine, ", ");
  let attackerClan = oneLine.slice(
    oneLine.indexOf('атакован кланом "') + 'атакован кланом "'.length,
    oneLine.indexOf('" '),
  );
  oneLine = removeCollectedFromData(oneLine, '" ');
  //Date is always XX.XX.XX
  let date = oneLine.slice(0, "XX.XX.XX".length);
  //Time is always XX:XX
  let time = oneLine.slice(
    "XX.XX.XX ".length,
    "XX.XX.XX ".length + "YY:YY".length,
  );
  // return {
  //   location: location,
  //   island: island,
  //   builder: builder,
  //   attacker: attackerClan,
  //   date: date,
  //   time: time,
  // };
  return new fightClass_1.default(
    location,
    island,
    builder,
    attackerClan,
    date,
    time,
  );
}
function parseDataFull(lines) {
  console.log(lines.length);
  var fights = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length > 1) {
      fights.push(parseDataLine(lines[i]));
    }
  }
  return fights;
}
//Only leave confirmed attacks in logs
function filterDefinedAttacks(unsortedLogs) {
  let sortedLogs = [];
  for (let i = 0; i < unsortedLogs.length; i++) {
    if (unsortedLogs[i].includes("будет атакован кланом")) {
      sortedLogs.push(unsortedLogs[i]);
    }
  }
  return sortedLogs;
}
let warLines = lines(warLogs2);
let filtered = filterDefinedAttacks(warLines);
let parsed = parseDataFull(filtered);
console.log(parsed);
exports.default = { parsed };
