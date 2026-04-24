export type BrawlerClass = "Damage Dealer" | "Tank" | "Assassin" | "Marksman" | "Artillery" | "Support" | "Controller";

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

