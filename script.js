const questions = [
  { question: "Enter weight (lbs.)?", type: "number", id: "weight" },
  { question: "Enter fighting value:", type: "number", id: "fighting" },
  { question: "Enter agility value:", type: "number", id: "agility" },
  { question: "Enter strength value:", type: "number", id: "strength" },
  { question: "Enter endurance value:", type: "number", id: "endurance" },
  { question: "Enter reason value:", type: "number", id: "reason" },
  { question: "Enter intuition value:", type: "number", id: "intuition" },
  { question: "Enter psyche value:", type: "number", id: "psyche" },
  { question: "Enter HP value:", type: "number", id: "hp" },
  { question: "Have mental, magic, energy, matter powers? (yes/no)", type: "text", id: "powers" },
  { question: "Enter highest power rank value:", type: "number", id: "valorpw", conditional: "powers" },
  { question: "Have natural resistances? (yes/no)", type: "text", id: "resistances" },
  { question: "Have regeneration? (yes/no)", type: "text", id: "regeneration" },
  { question: "Enter regeneration value:", type: "number", id: "valoreg", conditional: "regeneration" },
  { question: "Have superspeed? (yes/no)", type: "text", id: "superspeed" },
  { question: "Enter superspeed value:", type: "number", id: "valorsv", conditional: "superspeed" },
  { question: "Can fly? (yes/no)", type: "text", id: "flight" },
  { question: "Enter flight value:", type: "number", id: "valorvl", conditional: "flight" },
  { question: "Have acrobat talent? (yes/no)", type: "text", id: "acrobat" },
  { question: "Have martial arts talent? (yes/no)", type: "text", id: "artmar" },
  { question: "Have weapon talent? (yes/no)", type: "text", id: "arma" }
];

let currentQuestionIndex = 0;
const answers = {};

document.getElementById('convert-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const inputValue = document.getElementById('input-value').value.toLowerCase();
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion.type === "number" || inputValue === "yes" || inputValue === "no") {
    answers[currentQuestion.id] = inputValue;

    // Verifica si la pregunta condicional debe ser saltada
    if (inputValue === "no" && questions[currentQuestionIndex + 1] && questions[currentQuestionIndex + 1].conditional === currentQuestion.id) {
      currentQuestionIndex += 2;  // Salta la pregunta condicional
    } else {
      currentQuestionIndex++;
    }

    if (currentQuestionIndex < questions.length) {
      showNextQuestion();
    } else {
      showResults();
    }

    document.getElementById('input-value').value = '';
  } else {
    alert("Please enter a valid response.");
  }
});

function showNextQuestion() {
  const nextQuestion = questions[currentQuestionIndex];
  document.getElementById('question-label').textContent = nextQuestion.question;
  document.getElementById('input-value').type = nextQuestion.type;
}

function showResults() {
  const weight = parseInt(answers.weight);
  const fighting = parseInt(answers.fighting);
  const agility = parseInt(answers.agility);
  const strength = parseInt(answers.strength);
  const endurance = parseInt(answers.endurance);
  const reason = parseInt(answers.reason);
  const intuition = parseInt(answers.intuition);
  const psyche = parseInt(answers.psyche);
  const hp = parseInt(answers.hp);
  const powers = answers.powers;
  const valorpw = powers === "yes" ? parseInt(answers.valorpw) : 0;
  const resistances = answers.resistances;
  const regeneration = answers.regeneration;
  const valoreg = regeneration === "yes" ? parseInt(answers.valoreg) : 0;
  const superspeed = answers.superspeed;
  const valorsv = superspeed === "yes" ? parseInt(answers.valorsv) : 0;
  const flight = answers.flight;
  const valorvl = flight === "yes" ? parseInt(answers.valorvl) : 0;
  const acrobat = answers.acrobat;
  const artmar = answers.artmar;
  const arma = answers.arma;

  let resultadod1, resultadov, resultadoe, resultadof, resultadoa, resultadod, valorvl2, resultadop, resultadops;
  let valorpes, valorpw2, valoreg2, valorac, valorarm, valorartm, resultadovl;

  // Strength Calculation
  if (strength <= 2) {
    resultadof = "1, Melee Magnitude: Very Low";
  } else if (strength == 4) {
    resultadof = "2, Melee Magnitude: Very Low";
  } else if (strength == 6) {
    resultadof = "2, Melee Magnitude: Very Low";
  } else if (strength == 10) {
    resultadof = "3, Melee Magnitude: Low";
  } else if (strength == 20) {
    resultadof = "3, Melee Magnitude: Low";
  } else if (strength == 30) {
    resultadof = "4, Melee Magnitude: Medium, Knockback Bonus: +1(low)";
  } else if (strength == 40) {
    resultadof = "5, Melee Magnitude: Medium, Knockback Bonus: +1(low)";
  } else if (strength == 50) {
    resultadof = "6, Melee Magnitude: High, Knockback Bonus: +2(medium)";
  } else if (strength == 75) {
    resultadof = "7, Melee Magnitude: High, Knockback Bonus: +2(medium)";
  } else if (strength == 100) {
    resultadof = "8, Melee Magnitude: High, Knockback Bonus: +3(high)";
  } else if (strength == 150) {
    resultadof = "9, Melee Magnitude: High, Knockback Bonus: +3(high)";
  } else if (strength == 200) {
    resultadof = "9, Melee Magnitude: High, Knockback Bonus: +3(high)";
  } else if (strength == 500) {
    resultadof = "10, Melee Magnitude: High, Knockback Bonus: +4(extreme)";
  } else if (strength >= 1000) {
    resultadof = "10, Melee Magnitude: Very High, Knockback Bonus: +4(extreme)";
  }

  // Agility Calculation
  if (agility <= 2) {
    resultadoa = "1, Ranged Accuracy: Very Low";
  } else if (agility == 4) {
    resultadoa = "2, Ranged Accuracy: Very Low";
  } else if (agility == 6) {
    resultadoa = "3, Ranged Accuracy: Low";
  } else if (agility == 10) {
    resultadoa = "3, Ranged Accuracy: Low";
  } else if (agility == 20) {
    resultadoa = "4, Ranged Accuracy: Low";
  } else if (agility == 30) {
    resultadoa = "5, Ranged Accuracy: Medium";
  } else if (agility == 40) {
    resultadoa = superspeed === "no" ? "6, Ranged Accuracy: Medium, Speed Bonus: +1" : "6, Ranged Accuracy: Medium";
  } else if (agility == 50) {
    resultadoa = superspeed === "no" ? "7, Ranged Accuracy: High, Speed Bonus: +1" : "7, Ranged Accuracy: High";
  } else if (agility == 75) {
    resultadoa = superspeed === "no" ? "8, Ranged Accuracy: High, Speed Bonus: +2" : "8, Ranged Accuracy: High";
  } else if (agility == 100) {
    resultadoa = superspeed === "no" ? "9, Ranged Accuracy: Very High, Speed Bonus: +2" : "9, Ranged Accuracy: Very High";
  } else if (agility >= 150) {
    resultadoa = superspeed === "no" ? "10, Ranged Accuracy: Very High, Speed Bonus: +3" : "10, Ranged Accuracy: Very High";
  }

  // Endurance Calculation
  if (endurance <= 2) {
    resultadod1 = 1;
  } else if (endurance == 4) {
    resultadod1 = 2;
  } else if (endurance == 6) {
    resultadod1 = 3;
  } else if (endurance == 10) {
    resultadod1 = 3;
  } else if (endurance == 20) {
    resultadod1 = 4;
  } else if (endurance == 30) {
    resultadod1 = 4;
  } else if (endurance == 40) {
    resultadod1 = 5;
  } else if (endurance == 50) {
    resultadod1 = 6;
  } else if (endurance == 75) {
    resultadod1 = 7;
  } else if (endurance == 100) {
    resultadod1 = 8;
  } else if (endurance == 150) {
    resultadod1 = 9;
  } else if (endurance == 200) {
    resultadod1 = 9;
  } else if (endurance >= 500) {
    resultadod1 = 10;
  }

  // HP Calculation
  if (hp >= 1 && hp <= 10) {
    resultadod = 1;
  } else if (hp >= 11 && hp <= 25) {
    resultadod = 2;
  } else if (hp >= 26 && hp <= 40) {
    resultadod = 3;
  } else if (hp >= 41 && hp <= 49) {
    resultadod = endurance > Math.max(strength, agility, fighting) && resistances === "yes" ? resultadod1 : 3;
  } else if (hp >= 50 && hp <= 55) {
    resultadod = endurance > Math.max(strength, agility, fighting) && strength >= 10 ? resultadod1 : 3;
  } else if (hp == 56) {
    resultadod = endurance > Math.max(strength, agility, fighting) && strength >= 10 ? resultadod1 : 4;
  } else if (hp >= 57 && hp <= 69) {
    resultadod = endurance > Math.max(strength, agility, fighting) ? resultadod1 : 4;
  } else if (hp >= 70 && hp <= 90) {
    resultadod = 4;
  } else if (hp >= 91 && hp <= 105) {
    resultadod = endurance > Math.max(strength, agility, fighting) ? resultadod1 : 4;
  } else if (hp >= 106 && hp <= 109) {
    resultadod = strength <= 20 && (resistances === "no" || regeneration === "no") ? 4 : 4;
  } else if (hp == 110) {
    resultadod = strength <= 20 && (resistances === "no" || regeneration === "no") ? 4 : 5;
  } else if (hp >= 111 && hp <= 120) {
    resultadod = endurance > Math.max(strength, agility, fighting) ? resultadod1 : 5;
  } else if (hp >= 121 && hp <= 130) {
    resultadod = 5;
  } else if (hp >= 131 && hp <= 140) {
    if (endurance > Math.max(strength, agility, fighting)) {
      resultadod = resultadod1;
    } else if (endurance <= Math.max(strength, agility, fighting) && resistances === "yes") {
      resultadod = 5;
    } else {
      resultadod = 4;
    }
  } else if (hp >= 141 && hp <= 160) {
    resultadod = endurance > Math.max(strength, agility, fighting) ? resultadod1 : 5;
  } else if (hp >= 161 && hp <= 190) {
    resultadod = endurance > Math.max(strength, agility, fighting) ? resultadod1 : 6;
  } else if (hp >= 191 && hp <= 280) {
    resultadod = endurance > Math.max(strength, agility, fighting) ? resultadod1 : 7;
  } else if (hp >= 281 && hp <= 400) {
    resultadod = endurance > Math.max(strength, agility, fighting) ? resultadod1 : 8;
  } else if (hp >= 401 && hp <= 1000) {
    resultadod = endurance > Math.max(strength, agility, fighting) ? resultadod1 : 9;
  } else if (hp >= 1001) {
    resultadod = endurance > Math.max(strength, agility, fighting) ? resultadod1 : 10;
  }

  // Energy Calculation
  const maxRIP = Math.max(reason, intuition, psyche);
  const resultadoe2 = table_1_5_conversion(maxRIP);

  if (endurance == 2) {
    resultadoe = 1;
  } else if (endurance == 4) {
    resultadoe = 2;
  } else if (endurance == 6) {
    resultadoe = 3;
  } else if (endurance == 10) {
    resultadoe = 3;
  } else if (endurance == 20) {
    resultadoe = 4;
  } else if (endurance == 30) {
    resultadoe = 4;
  } else if (endurance == 40) {
    resultadoe = 5;
  } else if (endurance == 50) {
    resultadoe = 6;
  } else if (endurance == 75) {
    resultadoe = 7;
  } else if (endurance == 100) {
    resultadoe = 8;
  } else if (endurance == 150) {
    resultadoe = 9;
  } else if (endurance == 200) {
    resultadoe = 9;
  } else if (endurance >= 500) {
    resultadoe = 10;
  }

  if (powers == "yes") {
    valorpw2 = table_1_5_conversion(valorpw);
    energy_score = (resultadoe + valorpw2) / 2;
  } else {
    energy_score = resultadoe;
  }

  // Superspeed Calculation
  if (superspeed == "yes") {
    if (valorsv <= 1) {
      resultadov = 1;
    } else if (valorsv == 2) {
      resultadov = 2;
    } else if (valorsv == 4) {
      resultadov = 3;
    } else if (valorsv == 6) {
      resultadov = 4;
    } else if (valorsv >= 10 && valorsv <= 20) {
      resultadov = 5;
    } else if (valorsv == 30) {
      resultadov = 6;
    } else if (valorsv == 40) {
      resultadov = 7;
    } else if (valorsv >= 50 && valorsv <= 75) {
      resultadov = 8;
    } else if (valorsv == 100) {
      resultadov = 9;
    } else if (valorsv >= 150) {
      resultadov = 10;
    }
  } else {
    if (endurance < 20) {
      resultadov = 3;
    } else {
      resultadov = 4;
    }
  }

  // Flight Calculation
  if (flight == "yes") {
    if (valorvl == 0) {
      valorvl2 = 1;
    } else if (valorvl == 1) {
      valorvl2 = 1;
    } else if (valorvl == 4) {
      valorvl2 = 3;
    } else if (valorvl == 6) {
      valorvl2 = 4;
    } else if (valorvl >= 10 && valorvl <= 20) {
      valorvl2 = 5;
    } else if (valorvl == 30) {
      valorvl2 = 6;
    } else if (valorvl == 40) {
      valorvl2 = 7;
    } else if (valorvl >= 50 && valorvl <= 75) {
      valorvl2 = 8;
    } else if (valorvl == 100) {
      valorvl2 = 9;
    } else if (valorvl >= 150) {
      valorvl2 = 10;
    }
  } else {
    valorvl2 = 0;
  }

  if (flight == "yes") {
    if (valorvl2 < resultadov) {
      resultadovl = "Levitate";
    } else if (resultadov <= valorvl2 && valorvl2 <= resultadov + 2) {
      resultadovl = "Flier";
    } else if (valorvl2 >= resultadov + 3) {
      resultadovl = "Flier + Fast Flier";
    }
  } else {
    resultadovl = "None";
  }

  // Fighting Calculation
  if (fighting <= 2) {
    resultadop = "0";
  } else if (fighting == 4) {
    resultadop = "Melee Powers: 1, Swiftness: Very Slow";
  } else if (fighting == 6) {
    resultadop = "Melee Powers: 1, Swiftness: Very Slow";
  } else if (fighting == 10) {
    resultadop = "Melee Powers: 1, Swiftness: Slow";
  } else if (fighting == 20) {
    resultadop = "Melee Powers: 2, Swiftness: Slow";
  } else if (fighting == 30) {
    resultadop = "Melee Powers: 2, Swiftness: Normal, Contacts: 2, Cost: +1 Energy Cost";
  } else if (fighting == 40) {
    resultadop = "Melee Powers: 3, Swiftness: Normal, Contacts: 2-3, Cost: None - Normal Cost";
  } else if (fighting == 50) {
    resultadop = "Melee Powers: 3, Swiftness: Fast, Contacts: 2-3-4+, Cost: None - +1 Cost - Normal Cost";
  } else if (fighting == 75) {
    resultadop = "Melee Powers: 3, Swiftness: Fast, Contacts: 2-3-4+, Cost: None - None - +1 Cost";
  } else if (fighting == 100) {
    resultadop = "Melee Powers: 3, Swiftness: Very Fast, Contacts: 2-3-4+, Cost: None - None - +1 Cost";
  } else if (fighting >= 150) {
    resultadop = "Melee Powers: 4, Swiftness: Very Fast, Contacts: 2-3-4+, Cost: None - None - +1 Cost";
  }

  // Martial Arts Bonus
  if (artmar == "yes") {
    valorartm = "A: Stun/KB, B: Swiftness/Stun/KB/Magnitude, C:Grapple Swap & Wrestler Att, D:Stun/KB/Magnitude, E:Swiftness";
  } else {
    valorartm = "None";
  }

  // Weapon Talent Bonus
  if (arma == "yes") {
    valorarm = "Melee Weapons: Swiftness/Contacts/Arc/KB/Stun, Ranged Weapons: Accuracy/Stun";
  } else {
    valorarm = "None";
  }

  // Regeneration Calculation
  if (valoreg >= 2 && valoreg <= 10) {
    valoreg2 = "Fast Healing";
  } else if (valoreg >= 20 && valoreg <= 40) {
    valoreg2 = "Lesser Regeneration";
  } else if (valoreg >= 50 && valoreg <= 75) {
    valoreg2 = "Lesser Regeneration Plus";
  } else if (valoreg >= 100 && valoreg <= 500) {
    valoreg2 = "Regenerative";
  } else if (valoreg >= 1000) {
    valoreg2 = "Regenerative plus";
  } else {
    valoreg2 = "None";
  }

  // Acrobatics Talent Bonus
  if (acrobat == "yes") {
    valorac = "+ 1 Bonus to AGILITY";
  } else {
    valorac = "None";
  }

  // Psyche Calculation
  if (psyche < 40) {
    resultadops = "None";
  } else if (psyche == 40) {
    resultadops = "Unbeliever or Disciplined";
  } else if (psyche == 50) {
    resultadops = "Unbeliever or Disciplined";
  } else if (psyche == 75) {
    resultadops = "Level Headed+Unbeliever or Level Headed+Disciplined or Level Headed";
  } else if (psyche == 100) {
    resultadops = "Level Headed+Unbeliever or Level Headed+Disciplined or Level Headed";
  } else if (psyche >= 150) {
    resultadops = "Level Headed+Unbeliever+Disciplined";
  }

  // Weight Calculation
  if (weight == 0) {
    valorpes = "No weight";
  } else if (weight >= 1 && weight <= 20) {
    valorpes = "50 LBS";
  } else if (weight >= 21 && weight <= 30) {
    valorpes = "60 LBS";
  } else if (weight >= 31 && weight <= 40) {
    valorpes = "70 LBS";
  } else if (weight >= 41 && weight <= 50) {
    valorpes = "80 LBS";
  } else if (weight >= 51 && weight <= 60) {
    valorpes = "90 LBS";
  } else if (weight >= 61 && weight <= 70) {
    valorpes = "100 LBS";
  } else if (weight >= 71 && weight <= 80) {
    valorpes = "110 LBS";
  } else if (weight >= 81 && weight <= 90) {
    valorpes = "120 LBS";
  } else if (weight >= 91 && weight <= 100) {
    valorpes = "130 LBS";
  } else if (weight >= 101 && weight <= 125) {
    valorpes = "140 LBS";
  } else if (weight >= 126 && weight <= 150) {
    valorpes = "150 LBS";
  } else if (weight >= 151 && weight <= 200) {
    valorpes = "170 LBS";
  } else if (weight >= 201 && weight <= 250) {
    valorpes = "190 LBS";
  } else if (weight >= 251 && weight <= 350) {
    valorpes = "220 LBS";
  } else if (weight >= 351 && weight <= 450) {
    valorpes = "240 LBS";
  } else if (weight >= 451 && weight <= 550) {
    valorpes = "260 LBS";
  } else if (weight >= 551 && weight <= 650) {
    valorpes = "280 LBS";
  } else if (weight >= 651 && weight <= 750) {
    valorpes = "300 LBS";
  } else if (weight >= 751 && weight <= 850) {
    valorpes = "330 LBS";
  } else if (weight >= 851 && weight <= 1000) {
    valorpes = "350 LBS";
  } else if (weight >= 1001 && weight <= 1500) {
    valorpes = "390 LBS";
  } else if (weight >= 1501 && weight <= 2000) {
    valorpes = "440 LBS";
  } else if (weight >= 2001 && weight <= 5000) {
    valorpes = "480 LBS";
  } else if (weight >= 5001 && weight <= 11000) {
    valorpes = "520 LBS";
  } else if (weight >= 11001) {
    valorpes = "520 LBS + density control";
  } else {
    valorpes = "0";
  }

  // Mostrar los resultados
  document.getElementById('strength-result').textContent = resultadof;
  document.getElementById('speed-result').textContent = resultadov;
  document.getElementById('agility-result').textContent = resultadoa;
  document.getElementById('endurance-result').textContent = resultadod;
  document.getElementById('energy-result').textContent = `${Math.round(energy_score)} (Max RIP:${resultadoe2})`;
  document.getElementById('fighting-result').textContent = resultadop;
  document.getElementById('melee-result').textContent = valorartm;
  document.getElementById('weapon-result').textContent = valorarm;
  document.getElementById('flier-result').textContent = resultadovl;
  document.getElementById('acrobatics-result').textContent = valorac;
  document.getElementById('psyche-result').textContent = resultadops;
  document.getElementById('regeneration-result').textContent = valoreg2;
  document.getElementById('weight-result').textContent = valorpes;

  document.getElementById('results').style.display = 'block';
}

function table_1_5_conversion(value) {
  if (value <= 2) {
    return 1;
  } else if (value == 4) {
    return 2;
  } else if (value == 6) {
    return 3;
  } else if (value == 10) {
    return 3;
  } else if (value == 20) {
    return 4;
  } else if (value == 30) {
    return 4;
  } else if (value == 40) {
    return 5;
  } else if (value == 50) {
    return 6;
  } else if (value == 75) {
    return 7;
  } else if (value == 100) {
    return 8;
  } else if (value == 150) {
    return 9;
  } else if (value == 200) {
    return 9;
  } else if (value >= 500) {
    return 10;
  } else {
    return 1;
  }
}

showNextQuestion();