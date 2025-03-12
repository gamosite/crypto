const spinGame = document.getElementById('spin-game');

spinGame.innerHTML = `
    <h2>Spin Game</h2>
    <button onclick="spin()">Spin</button>
    <p id="result"></p>
`;

function spin() {
    const rewards = ["10 Diamonds", "20 Diamonds", "50 Diamonds", "100 Diamonds"];
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
    document.getElementById('result').innerText = `You won: ${randomReward}`;
}