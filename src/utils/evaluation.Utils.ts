export const getFinalEvaluation = (totalChaos: number, isPt: boolean) => {
  if (totalChaos <= 0) {
    return {
      title: isPt ? "Funcionário do Mês" : "Employee of the Month",
      description: isPt
        ? "Perfeito! O CEO nem percebeu a bagunça."
        : "Flawless! The CEO didn't even notice the mess.",
      rank: "S",
      color: "#ffcc00",
    };
  } else if (totalChaos <= 40) {
    return {
      title: isPt ? "Promissor" : "Promising Asset",
      description: isPt
        ? "Alguns tropeços, mas a missão foi um sucesso."
        : "A few stumbles, but the mission was a success.",
      rank: "A",
      color: "#4caf50",
    };
  } else if (totalChaos <= 80) {
    return {
      title: isPt ? "Sobrevivente Corporativo" : "Corporate Survivor",
      description: isPt
        ? "O relatório foi entregue, mas o RH está furioso."
        : "Report delivered, but HR is furious.",
      rank: "C",
      color: "#00d2ff",
    };
  } else {
    return {
      title: isPt ? "Demitido por Justa Causa" : "Terminated for Cause",
      description: isPt
        ? "O prédio é cinzas e você está no olho da rua."
        : "The building is ashes and you're fired.",
      rank: "F",
      color: "#ff4b4b",
    };
  }
};
