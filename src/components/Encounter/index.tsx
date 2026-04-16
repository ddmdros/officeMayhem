export const Encounter = [
  {
    id: 'elevator',
    title: 'PROBLEM 01: STUCK ELEVATOR',
    description: "The elevator is jammed! The HR Director is screaming inside and corporate property is at risk. How do we open it?",
    options: {
      Tank: {
        label: 'Manual Override',
        effect: 'Use raw power to rip the doors apart. It’s instant, but the elevator is totaled.',
        result: { overtime: 0, chaos: 40 } // Caos alto, Bruto e rápido
      },

      "Damage Dealer": {
        label: 'Aggressive Maintenance',
        effect: 'Unleash a flurry of strikes on the hinges. Fast, but loud and messy.',
        result: { overtime: 10, chaos: 35 } 
      },

      Marksman: {
        label: 'Precision Reboot',
        effect: 'Snipe the external fuse box from across the lobby. Clean, but takes time to aim.',
        result: { overtime: 30, chaos: 10 } 
      },

      Controller: {
        label: 'Logic Reroute',
        effect: 'Establish a control zone to stabilize the power grid and organize the area.',
        result: { overtime: 25, chaos: 0 } 
      },

      Support: {
        label: 'IT Ticket Escalation',
        effect: 'Hack the mainframe to bypass safety protocols. Slow, but keeps morale high.',
        result: { overtime: 45, chaos: -10 } // Reduz o caos, mas custa MUITO tempo
      },

      Assassin: {
        label: 'Vent Infiltration',
        effect: 'Sneak through the air ducts to unlock the latch from the inside.',
        result: { overtime: 10, chaos: 15 } 
      },

      Artillery: {
        label: 'Ballistic Entry',
        effect: 'Launch a projectile over the crowd to blow the lock. Total office carnage!',
        result: { overtime: 5, chaos: 65 } // "ALL-IN": Quase acaba o jogo no primeiro turno
      },

      Default: {
        label: 'Standard Procedure',
        effect: 'Fill out the 40-page incident report and wait for a licensed technician.',
        result: { overtime: 60, chaos: 10 } 
      }
    }
  },
  {
    id: 'intern',
    title: 'PROBLEM 02: THE INTERN INCIDENT',
    description: "A panicking intern got their tie (and the Q1 Reports) stuck in the high-speed shredder. Stop the machine!",
    options: {
      Tank: { 
        label: 'Grip and Rip', 
        effect: 'Manually halt the gears with your bare hands. The machine is dead, but the intern is safe.', 
        result: { overtime: 5, chaos: 35 } 
      },

      "Damage Dealer": {
        label: 'Emergency Sabotage', 
        effect: 'Demolish the shredder with a quick combo. It stops, but now there’s scrap metal everywhere.', 
        result: { overtime: 15, chaos: 30 } 
      },

      Marksman: {
        label: 'Cable Sniping', 
        effect: 'Shoot the power cord from across the room. Clean shutdown, but finding the plug takes a moment.', 
        result: { overtime: 35, chaos: 10 } 
      },

      Controller: {
        label: 'Debris Containment', 
        effect: 'Deploy a field to trap the flying paper and organize the mess while the machine jams.', 
        result: { overtime: 25, chaos: -30 } // Especialista em limpar bagunça
      },

      Support: { 
        label: 'Crisis Counseling', 
        effect: 'Calm the intern down so they can safely untangle themselves. Paper keeps shredding.', 
        result: { overtime: 40, chaos: -25 } 
      },

      Assassin: { 
        label: 'Internal Intervention', 
        effect: 'Blink inside the machinery to pull the tie out before it hits the blades.', 
        result: { overtime: 10, chaos: 15 } 
      },

      Artillery: {
        label: 'Controlled Explosion',
        effect: 'Blow up the shredder. The Q1 reports are now dust. HR will hear about this.',
        result: { overtime: 5, chaos: 75 } // Risco altíssimo
      },

      Default: { 
        label: 'Call Maintenance', 
        effect: 'Wait for the specialized team. By the time they arrive, the office looks like a snow globe.', 
        result: { overtime: 55, chaos: 20} 
      }
    }
  }
];