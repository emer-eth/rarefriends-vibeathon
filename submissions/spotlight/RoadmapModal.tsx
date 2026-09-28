/**
 * Roadmap Modal Component for Rare Friend Spotlight: Becoming
 * Displays both:
 * 1. Campaign Sector & Trait Mastery Roadmap (in-game 4 sectors, requirements, rewards, trait evolution)
 * 2. Ecosystem & Release Roadmap (Phase 1 Vibe-a-thon, Phase 2 On-Chain Sync, Phase 3 Frontier Raids)
 */

import React, { useState } from "react";
import { GameMenu } from "@rarefriends/friendsdk/frame";
import { FriendPersistentState } from "./types.js";
import { COMBAT_SCENARIOS } from "./RealTimeCombatArena.js";

export function RoadmapModal({
  friendState,
  onClose,
  onLaunchSector,
}: {
  friendState: FriendPersistentState;
  onClose: () => void;
  onLaunchSector: (sectorIndex: number) => void;
}) {
  const [activeTab, setActiveTab] = useState<"campaign" | "ecosystem">("campaign");

  // Determine which sectors the user has beaten / can access based on level/encounters
  const sectors = [
    {
      index: 0,
      title: "Sector 1: Crimson Ridge Ambush",
      location: "Crimson Gorge",
      boss: "Razor Stalker Alpha",
      threatLevel: "Standard",
      recommendedLevel: 1,
      mechanic: "Fast needle lunges, courier rescue",
      reward: "+45 XP · Compassion or Ruthlessness Trait Shift",
      completed: friendState.totalEncountersResolved >= 1 || friendState.level > 1,
      unlocked: true,
      lore: "A treacherous crimson ravine plagued by feral bio-mechanical stalkers hunting frontier supply couriers.",
    },
    {
      index: 1,
      title: "Sector 2: Rust Syndicate Outpost",
      location: "Rust Syndicate Outpost",
      boss: "Enforcer Kaelen",
      threatLevel: "Advanced",
      recommendedLevel: 2,
      mechanic: "Kinetic shield turret with ricochet wall bounces",
      reward: "+55 XP · Cunning or Honor Trait Shift",
      completed: friendState.totalEncountersResolved >= 2 || friendState.level >= 3,
      unlocked: friendState.level >= 1,
      lore: "A fortified perimeter held by cybernetic debt enforcers broadcasting syndicate extortion frequencies.",
    },
    {
      index: 2,
      title: "Sector 3: Ancient Monolith Overload",
      location: "Verdant Core Ruins",
      boss: "Gorgon Core Construct",
      threatLevel: "Extreme",
      recommendedLevel: 3,
      mechanic: "Rotating octagram radial lasers & bullet-hell barrages",
      reward: "+65 XP · Cooperation or Sovereign Independence Shift",
      completed: friendState.totalEncountersResolved >= 3 || friendState.level >= 4,
      unlocked: friendState.level >= 2,
      lore: "A pulsating precursor antimatter power matrix on the verge of catastrophic meltdown.",
    },
    {
      index: 3,
      title: "Sector 4: The Mirror of Becoming",
      location: "Chamber of Echoes",
      boss: "Shadow Reflection",
      threatLevel: "Legendary",
      recommendedLevel: 5,
      mechanic: "Doppelgänger mirroring your Friend's traits and speed with flanking fire",
      reward: "+100 XP · Permanent Archetype Transcendent Mastery",
      completed: friendState.totalEncountersResolved >= 4 || friendState.level >= 5,
      unlocked: friendState.level >= 3,
      lore: "The sacred inner sanctum where the Void reflects all moral choices back into physical manifestation.",
    },
  ];

  const milestones = [
    {
      phase: "Phase 1: Genesis Spotlight (Current)",
      status: "Live & Playable",
      tagColor: "active",
      timeline: "Q3 2026 · Vibe-a-thon",
      features: [
        "Real-Time 60 FPS Combat Arena with WASD movement, plasma pulses & dash dodging",
        "4 Sector Bosses with unique AI: Needle Stalker, Ricochet Mech, Radial Monolith, Shadow Doppelgänger",
        "Destructible tactical cover pillars absorbing live kinetic and plasma fire",
        "8-Dimensional Persistent Behavioral Trait Engine (Courage, Caution, Compassion, Ruthlessness, etc.)",
        "Persistent Chronicle Journal, NPC Memories, and Character Dossier",
      ],
    },
    {
      phase: "Phase 2: On-Chain Trait Attestation",
      status: "In Development",
      tagColor: "upcoming",
      timeline: "Q4 2026",
      features: [
        "Cryptographic soulbound trait signatures anchored directly to Rare Friend NFT token IDs",
        "Exportable Character Dossiers & Verifiable Moral Alignments for cross-game passporting",
        "Ecosystem Reward Pools: RF token claims triggered on sector conquest",
        "Dynamic Rare Friend Sprite Aura Evolution based on dominant moral alignment",
      ],
    },
    {
      phase: "Phase 3: Frontier Co-Op & Raids",
      status: "Planned",
      tagColor: "future",
      timeline: "Q1 2027",
      features: [
        "2-Player Synchronized Co-Op: Pair your Friend with a comrade's Friend against Titan-class World Bosses",
        "Community Frontier War: Collective sector defense influenced by player moral decisions",
        "Community-Authored Encounters & Map Builder using FriendSDK World Presets",
      ],
    },
  ];

  return (
    <GameMenu title="Game Roadmap & Campaign Progression" onClose={onClose}>
      <div className="spotlight-modal-body roadmap-layout">
        {/* Navigation Tabs */}
        <nav className="dossier-nav-tabs" style={{ marginBottom: 16 }}>
          <button
            type="button"
            className={`dossier-tab ${activeTab === "campaign" ? "active" : ""}`}
            onClick={() => setActiveTab("campaign")}
          >
            🗺️ Campaign Sector Roadmap
          </button>
          <button
            type="button"
            className={`dossier-tab ${activeTab === "ecosystem" ? "active" : ""}`}
            onClick={() => setActiveTab("ecosystem")}
          >
            🚀 Project & Ecosystem Roadmap
          </button>
        </nav>

        {/* TAB 1: CAMPAIGN SECTORS */}
        {activeTab === "campaign" && (
          <div className="roadmap-campaign-view">
            <div className="roadmap-intro-banner">
              <div>
                <h4>Frontier Sector Campaign Path</h4>
                <p>
                  Every sector challenges your Friend with a unique mechanical encounter and moral crossroad.
                  Defeating a boss unlocks permanent behavioral evolutions.
                </p>
              </div>
              <div className="roadmap-progress-badge">
                <span>Friend Level</span>
                <strong>Lv.{friendState.level}</strong>
              </div>
            </div>

            <div className="roadmap-timeline">
              {sectors.map((sec, idx) => (
                <div
                  key={sec.index}
                  className={`roadmap-node ${sec.completed ? "node-completed" : sec.unlocked ? "node-unlocked" : "node-locked"}`}
                >
                  <div className="roadmap-node-marker">
                    <span className="node-num">{idx + 1}</span>
                    <div className="node-line" />
                  </div>

                  <div className="roadmap-card">
                    <div className="roadmap-card-head">
                      <div>
                        <span className="roadmap-location">{sec.location}</span>
                        <h5>{sec.title}</h5>
                      </div>
                      <div className="roadmap-tags">
                        <span className={`threat-tag threat-${sec.threatLevel.toLowerCase()}`}>
                          {sec.threatLevel} Threat
                        </span>
                        {sec.completed && <span className="status-tag completed">✓ Conquered</span>}
                        {!sec.completed && sec.unlocked && <span className="status-tag active">Ready</span>}
                        {!sec.unlocked && <span className="status-tag locked">🔒 Lv.{sec.recommendedLevel}</span>}
                      </div>
                    </div>

                    <p className="roadmap-lore">{sec.lore}</p>

                    <div className="roadmap-meta-grid">
                      <div className="roadmap-meta-item">
                        <span className="meta-label">Boss Target:</span>
                        <strong className="meta-val">{sec.boss}</strong>
                      </div>
                      <div className="roadmap-meta-item">
                        <span className="meta-label">Combat Mechanic:</span>
                        <span className="meta-val">{sec.mechanic}</span>
                      </div>
                      <div className="roadmap-meta-item full">
                        <span className="meta-label">Moral Evolution:</span>
                        <span className="meta-val highlight">{sec.reward}</span>
                      </div>
                    </div>

                    <div className="roadmap-card-actions">
                      <button
                        type="button"
                        className="spotlight-btn primary small"
                        onClick={() => {
                          onClose();
                          onLaunchSector(sec.index);
                        }}
                      >
                        ⚔️ Battle {sec.boss}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: ECOSYSTEM & PROJECT ROADMAP */}
        {activeTab === "ecosystem" && (
          <div className="roadmap-ecosystem-view">
            <div className="roadmap-intro-banner">
              <div>
                <h4>Rare Friends Spotlight: Project Evolution</h4>
                <p>
                  Built with FriendSDK v0.1.2. The long-term journey from interactive solo chronicle to
                  verifiable on-chain soulbound traits and frontier multiplayer raids.
                </p>
              </div>
            </div>

            <div className="ecosystem-cards-list">
              {milestones.map((m, idx) => (
                <div key={idx} className={`ecosystem-card card-${m.tagColor}`}>
                  <div className="eco-header">
                    <div>
                      <span className="eco-timeline">{m.timeline}</span>
                      <h5>{m.phase}</h5>
                    </div>
                    <span className={`eco-badge badge-${m.tagColor}`}>{m.status}</span>
                  </div>
                  <ul className="eco-feature-list">
                    {m.features.map((f, fIdx) => (
                      <li key={fIdx}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="dossier-footer-btns" style={{ marginTop: 14 }}>
          <button type="button" className="spotlight-btn secondary" onClick={onClose}>
            Close Roadmap
          </button>
        </div>
      </div>
    </GameMenu>
  );
}
