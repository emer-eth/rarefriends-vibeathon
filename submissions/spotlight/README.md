# Submission: Rare Friend Spotlight — Becoming

## Project Name
**Rare Friend Spotlight: Becoming**

## Builder / Contact
* Rare Friends Builder · Community Entry
* Category: **Character Spotlight**

---

## One-Sentence Summary
A hybrid world-exploration and real-time combat action adventure where you play on behalf of your Rare Friend, shaping their persistent personality traits, reputation, relationships, and journal through emergent gameplay.

---

## What did you build?
Rather than creating another static NFT viewer, collectible clicker, or token farming dashboard, **Spotlight: Becoming** is built around one central premise:

> **"You're not playing as yourself. You're playing for your Friend. Every decision you make changes who they become."**

The experience features **Hybrid World Exploration + Real-Time Combat Action Encounters**:
- **Isometric World Exploration**: Move freely across an isometric frontier garden/hub controlling your verified Generations Rare Friend (WASD, Arrow keys, or click-to-move).
- **Real-Time Combat Arena**: Enter tactical live-action combat against dangerous frontier hostiles (Razor Stalkers, Syndicate Enforcers). Dodge incoming enemy projectiles, time plasma strikes, and shield vulnerable allies in fast-paced 60 FPS combat.
- **In-Skirmish Moral Judgments**: When hostiles are staggered, make decisive narrative choices (mercy vs execution vs extortion) that permanently steer your Friend's moral compass.
- **Narrative Expeditions**: Embark on multi-stage frontier expeditions facing moral, tactical, and ethical dilemmas.

### Core Design Principles Implemented:
1. **Emergent Personality, Not Trait Menus**: The player never chooses a trait from a dropdown. Instead, actions internally feed into 8 balanced behavioral dimensions:
   - `Courage` vs `Caution`
   - `Loyalty` vs `Ruthlessness`
   - `Compassion` vs `Independence`
   - `Cunning` vs `Cooperation`
2. **Dynamic Trait Tiers & Titles**: Traits evolve from *Tier 0 (Undeveloped)* through *Tier 1 (Emerging)*, *Tier 2 (Recognizable)*, *Tier 3 (Established)*, *Tier 4 (Strong)*, to *Tier 5 (Defining)*. Emergent titles (e.g. *"Shield of the Vulnerable"*, *"Dread Whisperer"*, *"The Undaunted Maverick"*) dynamically reflect accumulated actions.
3. **Real-Time Action Mechanics**: Responsive keyboard and touch controls with dashing, directional projectiles, particle effects, and combat HUD.
4. **Persistent Chronicle & NPC Memory**: The Friend maintains an evolving chronicle/journal recording significant events and consequences. NPCs remember past encounters (e.g. Courier Mara remembers whether you saved her or abandoned her).
5. **Isolated Strict Persistence**: Progression is saved per-Friend ID. Switching wallets or Friends never cross-contaminates state.

---

## How does it use Rare Friends?
- Connects using **FriendSDK v0.1.2** with Robinhood mainnet (chain 4663) wallet verification.
- Renders the player's actual Generations NFT using canonical on-chain pixel sprite frames.
- Replaces generic avatars with your genuine Rare Friend identity as the star of the entire journey.

---

## Source Code
- **Repository Location**: `games/spotlight` (built with FriendSDK v0.1.2)
- Tested and verified with `node scripts/dev-game.mjs check games/spotlight`.

---

## Playable Demo & How to Run
With Node.js 22+ installed:

```bash
# Clone the repository
git clone https://github.com/spokesz/friendsdk.git
cd friendsdk
npm ci

# Launch dev server
npm run dev:game -- games/spotlight
```

Open `http://localhost:4173` on your computer or mobile browser (or port `4180` for standalone sample testing).

### Controls:
- **World Movement**: WASD, Arrow keys, or click/tap anywhere on the isometric terrain to walk.
- **Combat Movement**: WASD / Arrow keys or on-screen directional controls.
- **Combat Attack**: Spacebar or Click/Tap screen to shoot plasma projectile.
- **Combat Dash / Dodge**: Shift key or Q (quick tactical burst with temporary invulnerability).
- **Interactions**: Press `E` or tap an interaction marker when near stations.
- **Audio**: Toggle procedural WebAudio effects on/off from HUD or Settings.
