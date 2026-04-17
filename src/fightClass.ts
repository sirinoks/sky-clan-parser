type Location = "Периферия"|"Поющий Риф"|"Бастион"|"Осколки"

class Fight {
    location: Location = "Периферия";
    island: string = "none";
    builder: string= "none";
    attacker: string = "none";
    date: string = "00.00.00";
    time: string = "00:00";

  constructor(location:Location, island:string, builder:string, attacker:string, date:string, time:string) {
    this.location = location;
    this.island = island;
    this.builder = builder;
    this.attacker = attacker;
    this.date = date;
    this.time = time;
  }
}

export type { Location };
export default Fight;