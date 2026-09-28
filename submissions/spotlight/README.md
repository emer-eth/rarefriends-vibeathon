# Submission: Rare Friend Spotlight — Becoming

## Project Name
**Rare Friend Spotlight: Becoming**

## Builder / Contact
* Rare Friends Builder · Community Entry
* Category: **Character Spotlight**

---

## One-Sentence Summary
A decision-driven character development adventure where you play on behalf of your Rare Friend, shaping their persistent personality traits, reputation, relationships, and journal through emergent gameplay.

---

## What did you build?
Rather than creating another static NFT viewer, collectible clicker, or token farming dashboard, **Spotlight: Becoming** is built around one central premise:

> **"You're not playing as yourself. You're playing for your Friend. Every decision you make changes who they become."**

The player navigates an isometric frontier hub controlling their verified Generations Rare Friend. At the Frontier Portal, they embark on multi-stage expeditions where they encounter moral, tactical, and ethical dilemmas:
- An ally pinned under a collapsing pylon: do you risk serious injury to rescue them, create a cunning harmonic distraction, or seize the cargo and flee?
- A sealed ancient vault surrounded by starving scavengers: do you share the spoils equally, monopolize everything for survival, or negotiate a strict barter deal?
- A hostile syndicate enforcer offering bribes for rebel frequencies: do you defend the station with honor, take the coins, or pull off a daring algorithmic double-cross?

### Core Design Principles Implemented:
1. **Emergent Personality, Not Trait Menus**: The player never chooses a trait from a dropdown. Instead, actions internally feed into 8 balanced behavioral dimensions:
   - `Courage` vs `Caution`
   - `Loyalty` vs `Ruthlessness`
   - `Compassion` vs `Independence`
   - `Cunning` vs `Cooperation`
2. **Dynamic Trait Tiers & Titles**: Traits evolve from *Tier 0 (Undeveloped)* through *Tier 1 (Emerging)*, *Tier 2 (Recognizable)*, *Tier 3 (Established)*, *Tier 4 (Strong)*, to *Tier 5 (Defining)*. Emergent titles (e.g. *"Shield of the Vulnerable"*, *"Dread Whisperer"*, *"The Undaunted Maverick"*) dynamically reflect accumulated actions.
3. **Persistent Chronicle & NPC Memory**: The Friend maintains an evolving chronicle/journal recording significant events and consequences. NPCs remember past encounters (e.g. Courier Mara remembers whether you saved her or abandoned her).
4. **Isolated Strict Persistence**: Progression is saved per-Friend ID. Switching wallets or Friends never cross-contaminates state.

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

Open `http://localhost:4173` on your computer or mobile browser.

### Controls:
- **Movement**: WASD, Arrow keys, or click/tap anywhere on the isometric terrain to walk.
- **Interactions**: Press `E` or tap an interaction marker when near stations.
- **Audio**: Toggle procedural WebAudio effects on/off from HUD or Settings.
