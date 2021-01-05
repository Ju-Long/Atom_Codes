import uc from 'upper-case';

class Player {
  constructor(name, team, experience) {
    this.name = name;
    this.team = team;
    this.experience = experience;
  }

  get_info() {
    return `${this.name} (Player) from ${this.team}`;
  }
}

class Coach extends Player {
  constructor(name, team, experience, player_list) {
    super(name, team, experience);
    this.player_list = player_list;
  }

  get_player_list() {
    return this.player_list;
  }

  prior_experience(years) {
    return `${this.team} Coach ${this.name} actual experience: ${this.experience + years}`;
  }
}

var liv_p1 = new Player("Owen", "Liv", 4);
var liv_p2 = new Player("Homer", "Liv", 3);
var liv_coach = new Coach("Pierre", "Liv", 7, [liv_p1.get_info(), liv_p2.get_info()]);
var che_p1 = new Player("Darnell", "Che", 5);
var che_p2 = new Player("Brandy", "Che", 5);
var che_coach = new Coach("Kobe", "Che", 8, [che_p1.get_info(), che_p2.get_info()]);

console.log(liv_coach.prior_experience(8));
var all_players = liv_coach.get_player_list().push(...che_coach.get_player_list());
console.log(all_players);
