/* import React from 'react';
import './Game.scss';
import './GameLogic';

function Game() {

  return (
    <canvas id="gameCanvas" width="800" height="600"></canvas>
  );
};

export default Game; */

import React, { useEffect } from 'react';
import './Game.scss';

function Game() {
  useEffect(() => {
    let debugMode = false;
let currentTime = Date.now();
let score = 0; // Initialize the score
let highScore = 0; // Initialize the high score

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const spriteSheet = new Image();
spriteSheet.src = "data:image/png;base64,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";

const gravity = 0.25; // Gravity force (adjust as needed)
const airResistance = 0.14; // Air resistance to slow down the cat in mid-air
const scale = 3; // Scale factor for the cat
const catWidth = 32; // Width of each frame
const catHeight = 32; // Height of each frame
const initialObstacleSpeed = 2;

let currentObstacleSpeed = initialObstacleSpeed; // Variable to track the current obstacle speed
let isGameOver = false;

const cat = {
    x: 16 * scale, // Initial x position (just off the left-hand side)
    y: canvas.height - canvas.height * 0.1 - catHeight * scale, // Initial y position (10% from the bottom)
    width: catWidth, // Width of each frame
    height: catHeight, // Height of each frame
    frameX: 0, // Current frame X coordinate
    frameY: 0, // Current frame Y coordinate
    speed: 5, // Cat movement speed
    jumpPower: -9, // Jump power (initial upward velocity)
    isJumping: false, // Is the cat currently jumping
    canDoubleJump: true, // Flag to indicate if the cat can double jump
    velocityY: 0, // Vertical velocity for jump
    jumpCount: 0, // Number of jumps in the air
    maxJumpCount: 2, // Maximum number of jumps allowed in the air (2 for double jump)
    onGround: true, // Flag to indicate whether the cat is on the ground
};

let animationId;
let lastFrameUpdateTime = 0;
const frameDuration = 100; // Duration in milliseconds for each frame (moved to global scope)

const jumpCooldown = 300; // Milliseconds
let lastJumpTime = 0;
let lastCatX = cat.x;

ctx.imageSmoothingEnabled = false;

const obstacles = [];
let obstacleSpeed = 2; // Adjust the speed as needed
let gameStarted = false; // Flag to indicate if the game has started

function generateObstacle() {
    const minObstacleHeight = 32; // Minimum obstacle height
    const maxObstacleHeight = 128; // Maximum obstacle height
    const minDistanceBetweenObstacles = 100; // Minimum distance between obstacles
    const maxDistanceBetweenObstacles = 300; // Maximum distance between obstacles

    const obstacleWidth = 32; // Adjust the width as needed
    const obstacleHeight = Math.floor(
        Math.random() * (maxObstacleHeight - minObstacleHeight + 1) + minObstacleHeight
    );

    const obstacleX = canvas.width + Math.floor(
        Math.random() * (maxDistanceBetweenObstacles - minDistanceBetweenObstacles + 1) + minDistanceBetweenObstacles
    );

    obstacles.push({
        x: obstacleX,
        y: canvas.height - obstacleHeight, // Position on the floor
        width: obstacleWidth,
        height: obstacleHeight,
    });
}

function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "20px monospace";

    // Display the score in the top right corner
    ctx.textAlign = "right";
    ctx.fillText("Score: " + score, canvas.width - 10, 30);

    // Display the high score if it's higher than 0
    if (highScore > 0) {
        ctx.textAlign = "left";
        ctx.fillText("High Score: " + highScore, 10, 30);
    }
}

// Inside the updateObstacles function, update the score
function updateObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= currentObstacleSpeed; // Move obstacles from right to left

        // Check if the cat has successfully passed an obstacle
        if (cat.x > obstacles[i].x + obstacles[i].width && !obstacles[i].passed) {
            obstacles[i].passed = true;
            score++; // Increase the score when an obstacle is passed
        }

        // Remove obstacles that are out of the canvas
        if (obstacles[i].x + obstacles[i].width < 0) {
            obstacles.splice(i, 1);
            i--;
        }
    }

    // Generate a new obstacle if there's enough distance from the last one
    if (obstacles.length === 0 || canvas.width - obstacles[obstacles.length - 1].x >= 200) {
        generateObstacle();
    }
}

// Inside the checkCollisions function
function checkCollisions() {
    if (isGameOver) {
        return;
    }

    const catRight = cat.x + cat.width * scale;
    const catBottom = cat.y + cat.height * scale;

    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];

        const obstacleRight = obstacle.x + obstacle.width;
        const obstacleBottom = obstacle.y + obstacle.height;

        // Check if the cat collides with an obstacle
        if (cat.x < obstacleRight && catRight > obstacle.x && cat.y < obstacleBottom && catBottom > obstacle.y) {
            // Handle collision (e.g., end the game)
            console.log("Game Over");
            isGameOver = true;
            pauseGame();
            return;
        }

        // Check if the cat has successfully passed an obstacle
        if (cat.x > obstacleRight && !obstacle.passed) {
            obstacle.passed = true;
            score++; // Increase the score when an obstacle is passed
        }

        // Remove obstacles that are out of the canvas
        if (obstacleRight < 0) {
            obstacles.splice(i, 1);
            i--;
        }
    }

    if (cat.y >= canvas.height - cat.height * scale) {
        cat.y = canvas.height - cat.height * scale;
        cat.isJumping = false; // Reset the isJumping flag when landing
        cat.canDoubleJump = true; // Reset double jump ability when landing
        cat.velocityY = 0; // Reset vertical velocity
        cat.jumpCount = 0; // Reset jump count when landing
        cat.onGround = true; // Reset onGround flag when landing
    }
}

// Function to pause the game
function pauseGame() {
    cancelAnimationFrame(animationId);
}

// Function to restart the game
function restartGame() {
    isGameOver = false;
    obstacles.length = 0; // Clear obstacles
    cat.x = 16 * scale;
    cat.y = canvas.height - canvas.height * 0.1 - catHeight * scale;
    cat.jumpCount = 0;
    lastFrameUpdateTime = performance.now(); // Reset frame update time using performance.now()
    lastCatX = cat.x; // Reset lastCatX
    obstacleSpeed = initialObstacleSpeed; // Reset obstacle speed to its initial value
    score = 0; // Reset the score
    currentTime = Date.now();
    resumeGame();
}

// Function to resume the game
function resumeGame() {
    animationId = requestAnimationFrame(draw);
}

// Function to draw the game over screen
function drawGameOverScreen() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "36px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Game Over", canvas.width / 2, (canvas.height - 20) / 2);
    ctx.font = "18px Arial";
    ctx.fillText("Press Space to Restart", canvas.width / 2, (canvas.height + 50) / 2);

    // Display the score and update the high score
    if (score > highScore) {
        highScore = score; // Update the high score
    }
    ctx.font = "20px monospace";
    ctx.textAlign = "right";
    ctx.fillText("Score: " + score, canvas.width - 10, 30);
    ctx.textAlign = "left";
    ctx.fillText("High Score: " + highScore, 10, 30);
}

function draw(currentTime) {
    if (isGameOver) {
        drawGameOverScreen();
        return;
    }

    console.log("Frame update. Current time: " + currentTime);

    // Clear the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply gravity to the vertical velocity
    cat.velocityY += gravity;

    // Apply air resistance to slow down the cat in mid-air
    if (cat.velocityY > 0) {
        cat.velocityY -= airResistance;
    }

    // Update cat's position based on velocity
    cat.y += cat.velocityY;

    // Prevent the cat from falling through the floor
    if (cat.y >= canvas.height - catHeight * scale) {
        cat.y = canvas.height - catHeight * scale;
        cat.isJumping = false; // Reset the isJumping flag when landing
        cat.canDoubleJump = true; // Reset double jump ability when landing
        cat.velocityY = 0; // Reset vertical velocity
    }

    // Draw the cat with scaling
    ctx.drawImage(
        spriteSheet,
        cat.frameX * cat.width,
        cat.frameY * cat.height,
        cat.width,
        cat.height,
        cat.x,
        cat.y,
        catWidth * scale, // Scaled width
        catHeight * scale // Scaled height
    );

    // Draw obstacles
    for (const obstacle of obstacles) {
        ctx.fillStyle = 'red'; // You can change the color as needed
        ctx.fillRect(
            obstacle.x,
            obstacle.y,
            obstacle.width,
            obstacle.height
        );
    }

    // Update the cat's frame for the idle animation
    if (!cat.isJumping && currentTime - lastFrameUpdateTime >= frameDuration) {
        cat.frameY = 0; // Idle animation (row 1)
        cat.frameX = (cat.frameX + 1) % 8;
        lastFrameUpdateTime = currentTime;
    }

    updateObstacles();
    checkCollisions();

    // Update lastCatX
    lastCatX = cat.x;

    // Draw the score
    drawScore();

    // Use requestAnimationFrame to manage the frame timing
    animationId = requestAnimationFrame(draw);

    if (debugMode) {
        for (const obstacle of obstacles) {
            // Draw bounding box for the right half of the obstacle
            ctx.strokeStyle = 'blue';
            ctx.strokeRect(obstacle.x + obstacle.width / 2, obstacle.y, obstacle.width / 2, obstacle.height);

            // Draw bounding box for the left half of the obstacle
            ctx.strokeStyle = 'green';
            ctx.strokeRect(obstacle.x, obstacle.y, obstacle.width / 2, obstacle.height);
        }

        // Draw bounding box for the cat
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.strokeRect(cat.x, cat.y, cat.width * scale, cat.height * scale);
    }
}

function jump() {
    if (!gameStarted) {
        gameStarted = true;
        requestAnimationFrame(draw);
    }

    // Allow jumping only if the cat is on the ground or hasn't exceeded the maximum jump count
    if (cat.onGround || cat.jumpCount < cat.maxJumpCount) {
        lastJumpTime = currentTime;
        cat.isJumping = true;
        cat.velocityY = cat.jumpPower; // Set the initial upward velocity
        cat.jumpCount++;

        // Reset the "onGround" flag
        cat.onGround = false;

        // Check if the cat is in the idle animation (row 1)
        if (cat.frameY === 0) {
            // Set the cat's frame for the run animation
            cat.frameY = 1; // Row 2 (run animation)
            cat.frameX = 0; // Start from the first frame
        }
    }
}

canvas.addEventListener("click", (event) => {
    const canvasRect = canvas.getBoundingClientRect();
    const clickX = event.clientX - canvasRect.left;
    const clickY = event.clientY - canvasRect.top;

    if (clickX >= 0 && clickX <= canvas.width && clickY >= 0 && clickY <= canvas.height) {
        // Le clic a eu lieu à l'intérieur de la toile
        if (isGameOver) {
            restartGame();
        } else {
            jump();
        }
    }
});

canvas.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        if (isGameOver) {
            restartGame();
        } else {
            jump();
        }
    }

    if (event.key === "d") {
        debugMode = !debugMode;
        console.log('debug mode: ' + (debugMode ? 'on' : 'off'));
    }
});

// Don't start the game immediately; wait for the first jump
spriteSheet.onload = () => {
    // Show instructions until the first jump
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Press Spacebar or Click to Jump", canvas.width / 2, canvas.height / 2);
};


  }, []); // Le tableau vide [] signifie que cette fonction useEffect est exécutée une seule fois après le premier rendu

  return (
    <div className='gameDiv'>
    <canvas id="gameCanvas"></canvas>
    </div>
  );
};

export default Game;