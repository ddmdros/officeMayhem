import { ui, dialogues } from "../constants";

export const APP_CONTENT = {
  en: {
    ui: ui.en,
    dialogues: dialogues.en,
  },
  pt: {
    ui: ui.pt,
    dialogues: dialogues.pt,
  },
};

export type AppContent = typeof APP_CONTENT.en;
