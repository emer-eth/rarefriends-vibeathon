# Rare Friend Spotlight: Becoming

> "You're not playing as yourself. You're playing for your Friend. Every decision you make changes who they become."

A character-driven adventure and identity progression game built for the **Rare Friends Vibe-a-thon** (Category: **Character Spotlight**).

Instead of a generic NFT viewer or clicker, **Friend Spotlight: Becoming** transforms the player's Rare Friend into an evolving, living identity. Through dilemmas, alliances, dangers, and moral choices, the player guides their Friend. The Friend's personality traits (Courage, Caution, Loyalty, Ruthlessness, Compassion, Cunning, Cooperation, Independence), skills, reputation archetype, and personal chronicle emerge directly from actual gameplay.

---

## 🎮 How to Play

1. **Connect & Select**: Connect your browser wallet on Robinhood mainnet (chain 4663) and select your hardwired Rare Friends Generations NFT (Gen ≥ 1).
2. **Frontier Hub**: Explore the isometric sanctuary with your Rare Friend (WASD, Arrow keys, or tap to walk).
3. **Embark on Encounters**: Step into the **Frontier Portal** to face multi-stage moral, tactical, and survival scenarios.
4. **Choose With Care**:
   - Risk life and limb to protect comrades (fostering *Courage* and *Loyalty*).
   - Make cold tactical trade-offs (developing *Ruthlessness* and *Cunning*).
   - Solve situations through ingenious diversions or alliances (building *Compassion*, *Cooperation*, or *Independence*).
5. **Emergent Progression**:
   - Gain XP and level up your Friend.
   - Watch personality tiers advance from *Undeveloped* → *Emerging* → *Recognizable* → *Established* → *Strong* → *Defining*.
   - Uncover your Friend's emergent reputation archetype (e.g., *"Shield of the Vulnerable"*, *"Dread Whisperer"*, *"The Undaunted Maverick"*).
6. **Chronicle & Memories**: Read your Friend's persistent Journal and inspect how NPCs remember your Friend's past deeds.
7. **Persistent Identity**: Leave anytime and return later. Your Friend's progression, chronicle, and traits are saved per-Friend ID.

---

## 🛠️ Stack & FriendSDK Integration

- **Framework**: FriendSDK v0.1.2
- **Wallet & Ownership**: Native SDK runtime verification with Robinhood mainnet Generations NFT verification.
- **Rendering**: Canonical on-chain Generations sprite frame decoder + isometric world view.
- **Persistence**: Application-layer localStorage engine isolated strictly per-Friend ID.
- **Audio**: Procedural FriendSDK WebAudio sound kit with 10 custom cues and mute controls.
- **Viewport**: Responsive 960 × 640 standard sandbox container.

---

## 🚀 Running Locally

```bash
# Clone the repository
git clone https://github.com/spokesz/friendsdk.git
cd friendsdk
npm ci

# Start the game dev server
npm run dev:game -- games/spotlight
```

Then open `http://localhost:4173` in your browser.
