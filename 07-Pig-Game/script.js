"use strict";

// Selecting elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score_player0 = document.querySelector("#score--0");
const current_player0 = document.querySelector("#current--0");
const score_player1 = document.getElementById("score--1");
const current_player1 = document.getElementById("current--1");
score_player0.textContent = 0;
score_player1.textContent = 0;

const dice = document.querySelector(".dice");
const btn_new = document.querySelector(".btn--new");
const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");

function pass_turn_to_player0() {
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  dice.classList.add("hidden");
}

function pass_turn_to_player1() {
  player1.classList.add("player--active");
  player0.classList.remove("player--active");
  dice.classList.add("hidden");
}

function new_game() {
  score_player0.textContent = 0;
  score_player1.textContent = 0;
  current_player0.textContent = 0;
  current_player1.textContent = 0;
  dice.classList.add("hidden");
  if (!player0.classList.contains("player--active")) {
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
  }
}

const hold_score = () => {
  if (player1.classList.contains("player--active")) {
    score_player1.textContent =
      Number(score_player1.textContent) + Number(current_player1.textContent);
    current_player1.textContent = 0;
    if (score_player1.textContent >= 100) {
      alert("Player 2 is the Victor!! ");
      new_game();
    } else {
      pass_turn_to_player0();
    }
  } else {
    score_player0.textContent =
      Number(score_player0.textContent) + Number(current_player0.textContent);
    current_player0.textContent = 0;
    if (score_player0.textContent >= 100) {
      alert("Player 1 is the Victor!! ");
      new_game();
    } else {
      pass_turn_to_player1();
    }
  }
};

const roll_dice = () => {
  let x = Math.floor(Math.random() * 6 + 1);
  dice.classList.remove("hidden");
  dice.src = `dice-${x}.png`;

  if (player1.classList.contains("player--active")) {
    if (x == 1) {
      current_player1.textContent = 0;
      pass_turn_to_player0();
    } else {
      current_player1.textContent = Number(current_player1.textContent) + x;
    }
  } else {
    if (x == 1) {
      current_player0.textContent = 0;
      pass_turn_to_player1();
    } else {
      current_player0.textContent = Number(current_player0.textContent) + x;
    }
  }
};

btn_new.addEventListener("click", new_game);
btn_hold.addEventListener("click", hold_score);
btn_roll.addEventListener("click", roll_dice);
