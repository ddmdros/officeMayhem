export const Encounter = [
  {
    id: 'elevator',
    title: 'PROBLEM 01: STUCK ELEVATOR',
    description: 'The elevator is jammed! The HR Director is screaming inside. How do we open it?',
    options: {
      Tank: { 
        label: 'Brute Force', 
        effect: 'Force the doors open.', 
        result: { stress: 20, energy: 0 } 
      },
      Support: { 
        label: 'System Hack', 
        effect: 'Recalibrate the panel.', 
        result: { stress: -5, energy: 0 } 
      },
      Assassin: { 
        label: 'Duct Climb', 
        effect: 'Find a way through the vents.', 
        result: { stress: 0, energy: 2 } 
      },
      Artillery: {
        label: 'Deadly Delivery',
        effect: 'Shoots the safety brakes from a distance.',
        result: { stress: 10, energy: 1 }
      },
      Default: { 
        label: 'Wait for help', 
        effect: 'Wait for the technician to arrive.', 
        result: { stress: 25, energy: 0 } 
      }    }
  },
{
  id: 'intern',
  title: 'PROBLEM 02: THE ROGUE INTERN',
  description: 'An intern is throwing staplers! They claim the "Coffee God" spoke to them. They are blocking the server room!',
"Damage Dealer": { 
        label: 'Authority Check', 
        effect: 'Intimidates the intern with a strict performance review.', 
        result: { stress: 15, energy: 0 } 
      },
      Support: { 
        label: 'HR Counseling', 
        effect: 'Offers a donut and a mental health day.', 
        result: { stress: -20, energy: -1 } 
      },
      Marksman: { 
        label: 'Precision Toss', 
        effect: 'Knocks the stapler out of their hand from afar.', 
        result: { stress: 5, energy: 1 } 
      },
      Controller: {
        label: 'Area Isolation',
        effect: 'Creates a barrier to keep everyone safe.',
        result: { stress: -5, energy: 1 }
      },
      Default: { 
        label: 'Ignore Madness', 
        effect: 'Pretend this is a normal Tuesday.', 
        result: { stress: 30, energy: 0 } 
      }
}
];
