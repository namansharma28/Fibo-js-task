//To get Random color for the message
function getRandomColor() { 
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#9B59B6'];
    return colors[Math.floor(Math.random() * colors.length)];
}
//to get random position for the message display
function getRandomPosition() { 
    const board = document.getElementById('messageBoard');
    const maxX = board.offsetWidth - 150;
    const maxY = board.offsetHeight - 50;
    return {
        x: Math.random() * maxX,
        y: Math.random() * maxY
    };
}
//gets message input from user and puts it in the message box
function addMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        const messageBoard = document.getElementById('messageBoard');
        const bubble = document.createElement('div');
        const position = getRandomPosition();
        
        bubble.className = 'message-bubble';
        bubble.textContent = message;
        bubble.style.backgroundColor = getRandomColor();
        bubble.style.left = position.x + 'px';
        bubble.style.top = position.y + 'px';
        
        // Add random animation delay
        bubble.style.animationDelay = `-${Math.random() * 10}s`;
        
        // Add click effect
        bubble.addEventListener('click', () => {
            bubble.style.transform = 'scale(1.2)';
            setTimeout(() => {
                bubble.style.transform = 'scale(1)';
            }, 200);
        });
        
        messageBoard.appendChild(bubble);
        input.value = '';
    }
}

// Add keyboard support
document.getElementById('messageInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addMessage();
    }
});
