import { UI_TEXT } from "./ui";
import { DIALOGUES } from "./dialogues";

export const APP_CONTENT = {
  en: {
    ui: UI_TEXT.en,
    dialogues: DIALOGUES.en,
  },
  pt: {
    ui: UI_TEXT.pt,
    dialogues: DIALOGUES.pt,
  },
};

export type AppContent = typeof APP_CONTENT.en;
