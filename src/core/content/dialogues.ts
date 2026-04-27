import { MINA_IMAGES } from "../../assets/images/imagesLinks";

export const DIALOGUES = {
  en:{

  intro: [
    { 
      name: "Mina", 
      role: "Starr Corp HR",
      text: "Welcome to the Starr Corp Brazil Branch! Ignore the flickering lights and the smell of burnt coffee. It's just... corporate charm.", 
      image: MINA_IMAGES.regular 
    },
    { 
      name: "Mina", 
      role: "Starr Corp HR",
      text: "We have to deliver the Q1 Report to the CEO at the top floor, and you need to recruit 3 Brawlers for it.", 
      image: MINA_IMAGES.happy 
    },
    { 
      name: "Mina", 
      role: "Starr Corp HR",
      text: "We have 3 floors of pure bureaucratic chaos to navigate. If we fail, we're stuck in Overtime FOREVER.", 
      image: MINA_IMAGES.facePalm 
    },
    { 
      name: "Mina", 
      role: "Starr Corp HR",
      text: "Try to pick the Brawlers that won't cry when they see a 50-page contract. Ready? Let's go!", 
      image: MINA_IMAGES.angry 
    }
  ],
  elevator_crisis: [
    { name: "Mina", 
      role: "Starr Corp HR",
      text: "Great team! Now... BAD NEWS. The elevator is possessed by a 1990s printer demon.", image: MINA_IMAGES.facePalm },
    { name: "Mina", 
      role: "Starr Corp HR",
      text: "We have to surpass this challenge so we can reach the CEO. What do we do?", image: MINA_IMAGES.angry }
  ],
  performance_review: [
    { name: "Mina", 
      role: "Starr Corp HR",
      text: "Not bad! You guys actually survived the first floor. I'm impressed... and $50 richer from a bet.", image: MINA_IMAGES.gg },

  ],
  boss_incident: [
    { name: "Mina", 
      role: "Starr Corp HR",
      text: "Okay, this is awkward. The boss's coffee mug has been accidentally thrown into the shredder.", image: MINA_IMAGES.facePalm },
    { name: "Mina", 
      role: "Starr Corp HR",
      text: "We need to retrieve it before it's too late! The boss is very particular about that mug.", image: MINA_IMAGES.angry }
  ]
  },
 pt: {
    intro: [
      { 
        name: "Mina", 
        role: "RH da Starr Corp",
        text: "Boas-vindas! Esta é a filial brasileira da Starr Corp! Ignore as luzes piscando e o cheiro de café queimado. É só... o charme corporativo.", 
        image: MINA_IMAGES.regular 
      },
      { 
        name: "Mina", 
        role: "RH da Starr Corp",
        text: "Temos que entregar o Relatório do 1º Trimestre para o CEO lá no último andar, e você precisa recrutar 3 Brawlers para isso.", 
        image: MINA_IMAGES.happy 
      },
      { 
        name: "Mina", 
        role: "RH da Starr Corp",
        text: "Temos 3 andares de burocracia caótica pela frente. Se falharmos, faremos hora extra para SEMPRE.", 
        image: MINA_IMAGES.facePalm 
      },
      { 
        name: "Mina", 
        role: "RH da Starr Corp",
        text: "Tente escolher os Brawlers que não vão chorar ao ver um contrato de 50 páginas. Tudo pronto? Vamos nessa!", 
        image: MINA_IMAGES.angry 
      }
    ],
    elevator_crisis: [
      { name: "Mina", role: "RH da Starr Corp", text: "Ótima equipe! Agora... MÁS NOTÍCIAS. O elevador foi possuído por um demônio de uma impressora dos anos 90.", image: MINA_IMAGES.facePalm },
      { name: "Mina", role: "RH da Starr Corp", text: "Precisamos superar esse desafio para chegar ao CEO. O que faremos?", image: MINA_IMAGES.angry }
    ],
    performance_review: [
      { name: "Mina", role: "RH da Starr Corp", text: "Nada mal! Vocês sobreviveram ao primeiro andar. Estou impressionada... e 50 dólares mais rica por causa de uma aposta.", image: MINA_IMAGES.gg },
    ],
    boss_incident: [
      { name: "Mina", role: "RH da Starr Corp", text: "Ok, isso é constrangedor. A caneca de café do chefe caiu sem querer no triturador de papel.", image: MINA_IMAGES.facePalm },
      { name: "Mina", role: "RH da Starr Corp", text: "Precisamos recuperá-la antes que seja tarde demais! O chefe é muito exigente com aquela caneca.", image: MINA_IMAGES.angry }
    ]
  }

};


export type DialogueKey = keyof typeof DIALOGUES;