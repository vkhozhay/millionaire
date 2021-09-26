const shuffleArray = <T>(arr:T[]):T[] => [...arr].sort(() => Math.round(Math.random() * 100) - 50);

export default shuffleArray;
