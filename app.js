let bank = 100
// 20 Players Total
const players = [
  {
    name: "D'Marcus Williums",
    teamNumber: 0,
    emoji: '🏃‍♂️',
    skill: 10
  },
  {
    name: "Tyroil Smoochie-Wallace",
    teamNumber: 0,
    emoji: '🤾‍♂️',
    skill: 30
  },
  {
    name: "Jackmerius Tacktheratrix",
    teamNumber: 0,
    emoji: '🏇',
    skill: 88
  },
  {
    name: "Javaris Jamar Javarison-Lamar",
    teamNumber: 0,
    emoji: '🏌️‍♀️',
    skill: 15
  },
  {
    name: "D'Pez Poopsie",
    teamNumber: 0,
    emoji: '🏋️‍♂️',
    skill: 77
  },
  {
    name: "D'Jasper Probincrux III",
    teamNumber: 0,
    emoji: '🏌️‍♂️',
    skill: 21
  },
  {
    name: "Leoz Maxwell Jilliumz",
    teamNumber: 0,
    emoji: '🤾',
    skill: 5
  },
  {
    name: "Hingle McCringleberry",
    teamNumber: 0,
    emoji: '🏂',
    skill: 99
  },
  {
    name: "L'Carpetron Dookmarriot",
    teamNumber: 0,
    emoji: '🧘‍♀️',
    skill: 50
  },
  {
    name: "Xmus Jaxon Flaxon-Waxon",
    teamNumber: 0,
    emoji: '🚶‍♀️',
    skill: 1
  },
  {
    name: "Saggitariutt Jefferspin",
    teamNumber: 0,
    emoji: '🏋️‍♀️',
    skill: 61
  },
  {
    name: "Quatro Quatro",
    teamNumber: 0,
    emoji: '🤺',
    skill: 34
  },
  {
    name: "X-Wing @Aliciousness",
    teamNumber: 0,
    emoji: '🏄',
    skill: 71
  },
  {
    name: "Bisquiteen Trisket",
    teamNumber: 0,
    emoji: '🧜‍♂️',
    skill: 76
  },
  {
    name: "Scoish Velociraptor Maloish",
    teamNumber: 0,
    emoji: '🤸',
    skill: 47
  },
  {
    name: "Donkey Teeth",
    teamNumber: 0,
    emoji: '⛹️‍♀️',
    skill: 23
  },
  {
    name: "T.J. A.J. R.J. Backslashinfourth V",
    teamNumber: 0,
    emoji: '🕴️',
    skill: 58
  },
  {
    name: "Firstname Lastname",
    teamNumber: 0,
    emoji: '💃',
    skill: 99
  },
  {
    name: "Dan Smith",
    teamNumber: 0,
    emoji: '🙅‍♂️',
    skill: 3
  },
  {
    name: "Tiger",
    teamNumber: 0,
    emoji: '🐅',
    skill: 100
  },
]

function draftPlayers() {

  for(let i = 0; i < players.length; i++){
  players[i].teamNumber = Math.ceil(Math.random() * 2)
    }
    
    // const randomTeam = Math.ceil(Math.random() * 3)
  //   const update(players.teamNumber)
  


  // const randomTeam = Math.floor(Math.random() * players.length)

  // const draftDay = players[randomTeam]
  // draftDay.teamNumber = 1
console.log(players)
  console.log(draftPlayers)
  drawTeamA()
  drawTeamB()
}
// draw the a team
function drawTeamA(){
  let playerEmojis = ''

  const playersTeamA = players.filter(player => player.teamNumber == 1)

  playersTeamA.forEach(player => playerEmojis += player.emoji)

  const playerLineupElement = document.getElementById('teamA')
  playerLineupElement.innerText = playerEmojis
}
// draw the b team
function drawTeamB(){
  let playerEmojis = ''

  const playersTeamB = players.filter(player => player.teamNumber == 2)

  playersTeamB.forEach(player => playerEmojis += player.emoji)

  const playerLineupElement = document.getElementById('teamB')
  playerLineupElement.innerText = playerEmojis
}

function calculateTotalSkill(teamPlayers) {
  return teamPlayers.reduce((total, player) => total + player.skill, 0);
}

// Function to place a bet on a specified team for a specified amount
function placeBetTeam(betAmount) {
  // Separate players into two arrays based on teamNumber
  const teamPlayers = players.filter(player => player.teamNumber === teamNumber);

  // Calculate total skill for each team
  const teamTotalSkill = calculateTotalSkill(players.filter(player => player.teamNumber === teamNumber));
  const opposingTeamTotalSkill = calculateTotalSkill(players.filter(player => player.teamNumber !== teamNumber));

  // Compare total skills and update bank accordingly
  if (teamTotalSkill > opposingTeamTotalSkill) {
      bank += betAmount;
      alert(`Team ${teamNumber}'s total skill is higher. You won $${betAmount}!`);
  } else {
      bank -= betAmount;
      alert(` Opposing team's total skill is higher. You lost $${betAmount}.`);
  }

  console.log(`Bank balance: $${bank}`);
  updateBankUI();
}

// Functions for the specific bet amounts for both teams
function bet5Team2(betAmount) {
  placeBetTeam2(5);
}

function bet25Team2() {
  placeBetTeam2(teamNumber, betAmount);
}

function bet100Team2() {
  placeBetTeam2(teamNumber, betAmount);
}

function betTheHouseTeam2() {

  const maxBetAmount = 100;
  placeBetTeam2(teamNumber, maxBetAmount);
}

function updateBankUI() {
  // Update the bank UI element with the current bank balance
  document.getElementById("bank").textContent = `Bank: $${bank}`;
}


  drawTeamA()
  drawTeamB()
  updateBankUI()

draftPlayers()