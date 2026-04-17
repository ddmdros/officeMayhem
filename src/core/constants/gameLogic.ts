export type BrawlerClass = "Damage Dealer" | "Tank" | "Assassin" | "Marksman" | "Artillery" | "Support" | "Controller";

interface ClassStat {
    baseEfficiency: number;
    baseResilience: number;
    advantageVs: BrawlerClass[];
    weaknessVs: BrawlerClass[];
    specialAbility: string;
}

export const CLASS_BALANCING: Record<BrawlerClass, ClassStat> = {
    "Damage Dealer": {
        baseEfficiency: 8,
        baseResilience: 10,
        advantageVs: ["Tank", "Assassin"],
        weaknessVs: ["Marksman", "Artillery"],
        specialAbility: "Heat: +25% de dano constante."
    },
    "Tank": {
        baseEfficiency: 5,
        baseResilience: 18,
        advantageVs: ["Assassin"],
        weaknessVs: ["Damage Dealer"],
        specialAbility: "Vanguard: Bloqueia 2 de dano de cada ataque."
    },
    "Assassin": {
        baseEfficiency: 10,
        baseResilience: 6,
        advantageVs: ["Marksman", "Artillery"],
        weaknessVs: ["Tank", "Damage Dealer"],
        specialAbility: "Blitz: Sempre ataca primeiro na rodada."
    },
    "Marksman": {
        baseEfficiency: 9,
        baseResilience: 7,
        advantageVs: ["Damage Dealer", "Support"],
        weaknessVs: ["Assassin", "Artillery"],
        specialAbility: "Eagle Eye: Ignora escudos e barreiras."
    },
    "Artillery": {
        baseEfficiency: 7,
        baseResilience: 7,
        advantageVs: ["Controller", "Marksman"],
        weaknessVs: ["Tank", "Assassin"],
        specialAbility: "Indirect: Dano em área (atinge o obstáculo e o andar)."
    },
    "Support": {
        baseEfficiency: 4,
        baseResilience: 8,
        advantageVs: [],
        weaknessVs: ["Damage Dealer", "Assassin"],
        specialAbility: "Cura: Restaura 4 de HP ao time todo por turno."
    },
    "Controller": {
        baseEfficiency: 6,
        baseResilience: 9,
        advantageVs: ["Support"],
        weaknessVs: ["Marksman"],
        specialAbility: "Stun: Chance de pular o turno do obstáculo."
    }
};

export const CLASS_CONTENT = {
  "Damage Dealer": {
    slogan: "The Productivity Engines",
    flavor: "The office is a furnace, and they bring the fuel. High output, zero patience for bureaucracy.",
    abilityName: "Overtime Heat",
    abilityDesc: "Increases raw damage by 25% against high-HP obstacles."
  },
  "Tank": {
    slogan: "Human Resource Shields",
    flavor: "Human shields for the quarterly budget. They take the hits so the CEO doesn't have to.",
    abilityName: "Iron Contract",
    abilityDesc: "Reduces all incoming damage from obstacles by 2 points."
  },
  "Assassin": {
    slogan: "The Promotion Seekers",
    flavor: "Blink and you're fired. They close the gap faster than a leaked confidential memo.",
    abilityName: "Blitz Strike",
    abilityDesc: "Always attacks first in the turn, ignoring obstacle counter-attacks."
  },
  "Marksman": {
    slogan: "Long-Range Analysts",
    flavor: "Precision is key. If you can see the CEO from your window, you can hit him.",
    abilityName: "Data Snipe",
    abilityDesc: "Ignores 'Cover' and 'Shield' buffs on any office obstacle."
  },
  "Artillery": {
    slogan: "Deadly Delivery Specs",
    flavor: "Projectiles over cubicle walls. No obstacle can hide your incompetence from them.",
    abilityName: "Indirect Feedback",
    abilityDesc: "Deals damage to the main obstacle and 10% splash damage to the Floor's HP."
  },
  "Support": {
    slogan: "The Morale Boosters",
    flavor: "The HR of the team. They keep everyone alive, even when the team has clearly given up.",
    abilityName: "Corporate Perk",
    abilityDesc: "Restores 4 HP to all active Brawlers at the end of every turn."
  },
  "Controller": {
    slogan: "Floor Managers",
    flavor: "They don't just work in the office; they own the floor. Mind your step around their desk.",
    abilityName: "Area Denial",
    abilityDesc: "Has a 30% chance to 'Stun' the obstacle, forcing it to skip its next attack."
  }
};

export const LEVEL_CONTENT = [
  {
    level: 1,
    title: "Floor 1: The Lobby Chaos",
    boss: "Broken Turnstile (The Gatekeeper)",
    description: "Your mission starts at the ground floor. If your badge doesn't scan, your career ends here.",
    flavor: "Entry denied. Please contact an administrator who hasn't been hired yet.",
    objective: "Bypass the security glitch."
  },
  {
    level: 2,
    title: "Floor 2: The HR Labyrinth",
    boss: "Passive-Aggressive Email",
    description: "Navigate through cubicles filled with radioactive coffee and forced group-bonding activities.",
    flavor: "As per our previous conversation, your survival is not a priority for this department.",
    objective: "Survive the dynamic group interview."
  },
  {
    level: 3,
    title: "Floor 3: CEO's Penthouse",
    boss: "The Q1 Performance Report",
    description: "The air is thin, the carpet is expensive, and the pressure is lethal. Deliver the report.",
    flavor: "The numbers don't lie, but they sure can kill. Welcome to the top floor.",
    objective: "Deliver the report to the CEO's desk."
  }
];