export type GameScene =
  | "START"
  | "INTRO_DIALOGUE"
  | "RECRUITING"
  | "PRE_ENCOUNTER_DIALOGUE"
  | "ENCOUNTER"
  | "POST_ENCOUNTER_DIALOGUE"
  | "RESULT";

export interface BrawlerClass {
  name: string;
  name_ptbr?: string;
  iconUrl: string;
}

export type ChaosLevel = "good" | "neutral" | "bad";

export interface EncounterAction {
  floor: number;
  label: string;
  label_ptbr: string;
  effect: string;
  effect_ptbr: string;
  consequence: string;
  consequence_ptbr: string;
  chaos: ChaosLevel;
  chaosLevel: ChaosLevel;
  chaosValue: number;
}
export interface RawEncounterAction {
  floor: number;
  label: string;
  label_ptbr: string;
  effect: string;
  effect_ptbr: string;
  consequence: string;
  consequence_ptbr: string;
  chaos: ChaosLevel;
}

export interface RawBrawler {
  id: number;
  name: string;
  link: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  class: BrawlerClass;
  description?: string;
  description_ptbr?: string;
  encounters: RawEncounterAction[];
}

export interface Brawler {
  id: number;
  name: string;
  link: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  class: BrawlerClass;
  encounters: EncounterAction[];
  isUsed?: boolean;
  description?: string;
  description_ptbr?: string;
  className?: string;
  classColor?: string;
  iconUrl?: string;
}

export interface ChoiceResult {
  chaos: number;
  chaosLevel: ChaosLevel;
  consequence: string;
  brawlerName: string;
}
