export const getFinalEvaluation = (totalChaos: number, isPt: boolean) => {
  if (totalChaos <= 10) {
    return {
      title: isPt ? "Funcionário do Mês" : "Employee of the Month",
      description: isPt
        ? "O CEO nem percebeu que o prédio quase explodiu. O relatório está perfeito!"
        : "The CEO didn't even notice the building almost exploded. The report is perfect!",
      rank: "S",
      color: "#ffcc00",
    };
  } else if (totalChaos <= 30) {
    return {
      title: isPt ? "Sobrevivente Corporativo" : "Corporate Survivor",
      description: isPt
        ? "O relatório foi entregue, mas a Mina teve que usar muita fita adesiva."
        : "The report was delivered, but Mina had to use a lot of duct tape.",
      rank: "B",
      color: "#00d2ff",
    };
  } else {
    return {
      title: isPt ? "Demitido por Justa Causa" : "Terminated for Cause",
      description: isPt
        ? "O relatório é um monte de cinzas e o estagiário ainda está preso no elevador."
        : "The report is a pile of ashes and the intern is still stuck in the elevator.",
      rank: "F",
      color: "#ff4b4b",
    };
  }
};
