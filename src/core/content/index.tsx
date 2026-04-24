import { UI_TEXT } from './ui';
import { DIALOGUES } from './dialogues';
//import { ENCOUNTER } from './encounter';

export const APP_CONTENT = {
  en: {
    ui: UI_TEXT.en,
    dialogues: DIALOGUES.en,
  //  encounter: ENCOUNTER.en,
  },
  pt: {
    ui: UI_TEXT.pt,
    dialogues: DIALOGUES.pt,
    //encounter: ENCOUNTER.en,
  }
};

export type AppContent = typeof APP_CONTENT.en;