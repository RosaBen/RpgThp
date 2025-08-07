# 🗡️ RPG Battle Game

## 👋 Welcome to the **RPG Battle Game**!

🎮 A simple **turn-based RPG simulation** written in JavaScript, playable directly in your terminal.

---

## 🧙 Game Description

🧝 Five unique characters — **Fighter**, **Paladin**, **Monk**, **Berzerker**, and **Assassin** — battle each other until only one survives.

⚔️ Each character has:

- Health points (**HP**)
- Mana 💧
- Damage 💥
- A **special ability**

🕒 The game runs for **10 turns max**, or until **1 character is left alive**.

---

## ▶️ How to Play

### 1. 🛠️ Install Node.js

Make sure [Node.js](https://nodejs.org) is installed on your machine.

### 2. 📦 Clone or Download the Project

Place all files in the same folder:

```

game.js, character.js, characters.js

````

### 3. 🚀 Run the Game

Open your terminal, navigate to the folder, and run:

```bash
node game.js
````

### 4. 🎲 Gameplay

* The game **starts automatically**
* Each turn:

  * Two living characters are randomly selected: **one attacks the other**
  * Characters use **special abilities** if they have enough mana
* After every turn, character stats are shown
* Ends when:

  * There's only **one survivor**
  * Or when **10 turns** have passed

### 5. 🏁 End of Game

* The game announces the **winner** (or multiple survivors)
* Final stats for all characters are displayed

---

## 🧾 Example Output

```bash
The game begins! Select a character:
1. Grace - balanced fighter
2. Ulder - powerful and defensive knight
3. Moana - priest who can heal
4. Draven - brute with high attack
5. Carl - cunning and sneaky

You have 10 turns to eliminate all opponents.

Turn number: 10
Grace attacks Carl

===== Character Stats =====
| Grace    | HP: 12  | Mana: 4   | Status: playing |
| Ulder    | HP: 16  | Mana: 3   | Status: playing |
...
================================
Turns left: 9
================================
```

---

## 🧪 Customization

⚙️ You can modify the game easily:

* Change **character abilities** in `characters.js`
* Adjust **max number of turns** in `Game.js` constructor

---

## 🏗️ Built With

* JavaScript 🟨
* Node.js 🟩

---

## 🧠 Tip

> Want to make it interactive?
> Add `prompt()` to let the player choose characters or attacks!

---

## 📂 File Structure

```
📁 /your-folder
├── game.js         # main logic
├── character.js    # base Character class
└── characters.js   # all subclasses (Fighter, Paladin...)
```

---

👾 Now go **crush some skulls**.


