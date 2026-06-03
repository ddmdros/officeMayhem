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
  color: string;
  iconUrl: string;
}

export interface EncounterAction {
  floor: number;
  label: string;
  label_ptbr: string;
  effect: string;
  effect_ptbr: string;
  consequence: string;
  consequence_ptbr: string;
  chaos: number;
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

  // temporary properties for game state management, not part of original data
  description?: string;
  description_ptbr?: string;
}

export interface ChoiceResult {
  chaos: number;
  consequence: string;
  brawlerName: string;
}
