import { MINA_IMAGES } from "../../assets/images/imagesLinks";

export const DIALOGUES = {
  en: {
    intro: [
      {
        name: "Mina",
        role: "Starr Corp HR",
        text: "Welcome to the Starr Corp Brazil Branch! Ignore the flickering lights and the smell of burnt coffee. It's just... corporate charm.",
        image: MINA_IMAGES.regular,
      },
      {
        name: "Mina",
        role: "Starr Corp HR",
        text: "We have to deliver the Q1 Report to the CEO at the top floor, and you need to recruit 3 Brawlers for it.",
        image: MINA_IMAGES.happy,
      },
      {
        name: "Mina",
        role: "Starr Corp HR",
        text: "We have 3 floors of pure bureaucratic chaos to navigate. If we fail, we're stuck in Overtime FOREVER.",
        image: MINA_IMAGES.facePalm,
      },
      {
        name: "Mina",
        role: "Starr Corp HR",
        text: "Try to pick the Brawlers that won't cry when they see a 50-page contract. Ready? Let's go!",
        image: MINA_IMAGES.angry,
      },
    ],
    elevator_crisis: [
      {
        name: "Mina",
        role: "Starr Corp HR",
        text: "Great team! Now... BAD NEWS. The elevator is possessed by a 1990s printer demon.",
        image: MINA_IMAGES.facePalm,
      },
      {
        name: "Mina",
        role: "Starr Corp HR",
        text: "We have to surpass this challenge so we can reach the CEO. What do we do?",
        image: MINA_IMAGES.angry,
      },
    ],
    performance_review: [
      {
        name: "Mina",
        role: "Starr Corp HR",
        text: "Not bad! You guys actually survived the first floor. I'm impressed... and $50 richer from a bet.",
        image: MINA_IMAGES.gg,
      },
    ],
    boss_incident: [
      {
        name: "Mina",
        role: "Starr Corp HR",
        text: "Okay, this is awkward. The boss's coffee mug has been accidentally thrown into the shredder.",
        image: MINA_IMAGES.facePalm,
      },
      {
        name: "Mina",
        role: "Starr Corp HR",
        text: "We need to retrieve it before it's too late! The boss is very particular about that mug.",
        image: MINA_IMAGES.angry,
      },
    ],
  },
  pt: {
    intro: [
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "Achei você, finalmente!",
        image: MINA_IMAGES.happy,
      },
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "Saca só. O Starr Park inteiro está em São Paulo para a inauguração da filial brasileira da Starr Corp, e adivinha quem está na comunicação? O Spike!",
        image: MINA_IMAGES.regular,
      },
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "O problema é que ninguém entende o que ele fala. (Ele fala?) Enfim, o escritório está um caos.",
        image: MINA_IMAGES.sad,
      },
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "Você pode levar esse relatório para o CEO no terceiro andar? Ele precisa desses dados para resolver a crise.",
        image: MINA_IMAGES.regular,
      },
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "Leve três Brawlers com você para o caso de imprevistos e tente não causar mais confusão pelo caminho.",
        image: MINA_IMAGES.gg,
      },
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "Que tal levar um de cada classe? “Não coloque todos os ovos na mesma cesta”, e todo o blá blá blá corporativo.",
        image: MINA_IMAGES.regular,
      },
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "Enfim, é você quem manda. Foi mal pela recepção apressada, mas estou indo nessa. Obrigada e boa sorte!",
        image: MINA_IMAGES.gg,
      },
    ],
    elevator_crisis: [
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "Ótima equipe! Agora... MÁS NOTÍCIAS. O elevador foi possuído por um demônio de uma impressora dos anos 90.",
        image: MINA_IMAGES.facePalm,
      },
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "Precisamos superar esse desafio para chegar ao CEO. O que faremos?",
        image: MINA_IMAGES.angry,
      },
    ],
    performance_review: [
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "Nada mal! Vocês sobreviveram ao primeiro andar. Estou impressionada... e 50 dólares mais rica por causa de uma aposta.",
        image: MINA_IMAGES.gg,
      },
    ],
    boss_incident: [
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "Ok, isso é constrangedor. A caneca de café do chefe caiu sem querer no triturador de papel.",
        image: MINA_IMAGES.facePalm,
      },
      {
        name: "Mina",
        role: "RH da Starr Corp",
        text: "Precisamos recuperá-la antes que seja tarde demais! O chefe é muito exigente com aquela caneca.",
        image: MINA_IMAGES.angry,
      },
    ],
  },
};

export type DialogueKey = keyof typeof DIALOGUES;
