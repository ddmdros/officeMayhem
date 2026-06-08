import { uiData, dialoguesData } from "../constants";

export const APP_CONTENT = {
  en: {
    ui: uiData.en,
    dialogues: dialoguesData.en,
  },
  pt: {
    ui: uiData.pt,
    dialogues: dialoguesData.pt,
  },
};

export type AppContent = typeof APP_CONTENT.en;
