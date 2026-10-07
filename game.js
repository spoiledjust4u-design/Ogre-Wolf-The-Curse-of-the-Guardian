let clues = 0;
let childrenFound = 0;

// ==========================================
// LEVEL 1 - THE DARK FOREST
// ==========================================

function startGame() {
    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>The Dark Forest</h2>

            <p>
                You have entered the Dark Forest.
                Six children are missing, and something is watching you.
            </p>

            <p>
                You discover two paths ahead.
            </p>

            <h3>What will you investigate?</h3>

            <button onclick="followFootprints()">
                Follow the Footprints
            </button>

            <button onclick="investigateClawMarks()">
                Investigate the Claw Marks
            </button>
        </div>
    `;
}

function followFootprints() {
    clues++;

    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>The Child's Toy</h2>

            <p>
                You follow the footprints deeper into the forest.
                Beneath an old tree, you discover a small child's toy.
            </p>

            <p>
                There are footprints around the toy, but none belong
                to the Ogre-Wolf.
            </p>

            <p><strong>You found a clue!</strong></p>

            <p>Clues discovered: ${clues}</p>

            <button onclick="continueInvestigation()">
                Continue Searching
            </button>
        </div>
    `;
}

function investigateClawMarks() {
    clues++;

    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>The Ancient Claw Marks</h2>

            <p>
                You examine the strange marks carved into the trees.
                They appear to have been made by something enormous.
            </p>

            <p>
                You notice something unusual.
                The marks are several years old.
            </p>

            <p><strong>You found a clue!</strong></p>

            <p>Clues discovered: ${clues}</p>

            <button onclick="continueInvestigation()">
                Continue Searching
            </button>
        </div>
    `;
}

function continueInvestigation() {
    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>A Strange Discovery</h2>

            <p>
                You continue deeper into the forest.
                Suddenly, you hear a child's voice in the distance.
            </p>

            <p>
                <strong>"Help us..."</strong>
            </p>

            <h3>What will you do?</h3>

            <button onclick="searchForChild()">
                Search for the Child
            </button>

            <button onclick="stayHidden()">
                Stay Hidden
            </button>
        </div>
    `;
}

function searchForChild() {
    childrenFound++;

    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>The First Child</h2>

            <p>
                You carefully follow the voice and discover one of the
                missing children hiding beneath a fallen tree.
            </p>

            <p>
                You rescued your first child!
            </p>

            <p>
                <strong>Children rescued: ${childrenFound} / 6</strong>
            </p>

            <p>
                Before you can leave, you hear a deep growl
                coming from somewhere in the forest.
            </p>

            <button onclick="meetKingsley()">
                Investigate the Growl
            </button>
        </div>
    `;
}

function stayHidden() {
    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>Something Is Watching</h2>

            <p>
                You remain hidden behind the trees.
            </p>

            <p>
                A massive shadow moves through the forest.
                You catch a glimpse of glowing eyes.
            </p>

            <p>
                The creature disappears without attacking.
            </p>

            <p>
                <strong>Maybe the Ogre-Wolf isn't hunting you.</strong>
            </p>

            <button onclick="meetKingsley()">
                Follow the Creature
            </button>
        </div>
    `;
}

function meetKingsley() {
    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>The Ogre-Wolf</h2>

            <p>
                You step into a clearing and finally see him.
            </p>

            <p>
                The enormous creature known as the Ogre-Wolf
                stands beneath the trees.
            </p>

            <p>
                But instead of attacking, Kingsley looks toward
                the darkness behind you.
            </p>

            <p>
                <strong>
                    For the first time, you wonder if Kingsley is
                    actually protecting the children.
                </strong>
            </p>

            <button onclick="endFirstMission()">
                Continue the Mission
            </button>
        </div>
    `;
}

function endFirstMission() {
    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>Mission Update</h2>

            <p>
                Your investigation uncovered ${clues} clue(s).
            </p>

            <p>
                You rescued ${childrenFound} of the 6 missing children.
            </p>

            <p>
                The mystery of Kingsley has only just begun.
            </p>

            <a href="levels.html" class="button">
                Continue to Level 2
            </a>
        </div>
    `;
}


// ==========================================
// LEVEL 2 - THE DARK FOREST
// ==========================================

function startLevel2() {
    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>Level 2: The Dark Forest</h2>

            <p>
                You enter the deepest part of the forest.
                The trees block out most of the sunlight,
                and the path ahead is almost impossible to see.
            </p>

            <p>
                You notice small footprints in the mud.
                They appear to belong to one of the missing children.
            </p>

            <h3>What will you do?</h3>

            <button onclick="followChildFootprints()">
                Follow the Footprints
            </button>

            <button onclick="searchTheTrees()">
                Search the Trees
            </button>
        </div>
    `;
}

function followChildFootprints() {
    clues++;
    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>The Footprints</h2>

            <p>
                You carefully follow the child's footprints
                deeper into the forest.
            </p>

            <p>
                Suddenly, you find a torn piece of cloth
                caught on a thorn bush.
            </p>

            <p>
                The cloth has the same symbol carved into it
                that you saw near the ancient claw marks.
            </p>

            <p>
                <strong>You discovered another clue!</strong>
            </p>

            <p>
                Total clues discovered: ${clues}
            </p>

            <h3>What will you do?</h3>

            <button onclick="footprintChoice('search')">
                Search the Area
            </button>

            <button onclick="footprintChoice('continue')">
                Continue Following the Footprints
            </button>
        </div>
    `;
}
function footprintChoice(choice) {
    const gameArea = document.getElementById("game-area");

    if (choice === "search") {
        clues++;

        gameArea.innerHTML = `
            <div class="game-panel">
                <h2>The Hidden Backpack</h2>

                <p>
                    You search the area around the thorn bush.
                </p>

                <p>
                    Beneath some leaves, you discover a small
                    backpack belonging to one of the missing children.
                </p>

                <p>
                    <strong>You discovered another clue!</strong>
                </p>

                <p>
                    Total clues discovered: ${clues}
                </p>

                <button onclick="meetMara()">
                    Continue
                </button>
            </div>
        `;

    } else {
        gameArea.innerHTML = `
            <div class="game-panel">
                <h2>Deeper Into the Forest</h2>

                <p>
                    You decide to continue following the footprints.
                </p>

                <p>
                    The footprints lead deeper into the Dark Forest.
                </p>

                <p>
                    Suddenly, you hear a branch snap behind you.
                </p>

                <p>
                    <strong>
                        Something is following you.
                    </strong>
                </p>

                <button onclick="meetMara()">
                    Continue Carefully
                </button>
            </div>
        `;
    }
}


function searchTheTrees() {
    clues++;

    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>A Strange Symbol</h2>

            <p>
                You search the trees surrounding the path.
                Hidden beneath some old vines, you discover
                a strange symbol carved into the bark.
            </p>

            <p>
                The symbol looks ancient.
                It appears to be connected to the creature
                known as the Ogre-Wolf.
            </p>

            <p>
                <strong>You discovered another clue!</strong>
            </p>

            <p>
                Total clues discovered: ${clues}
            </p>

            <button onclick="meetMara()">
                Continue
            </button>
        </div>
    `;
}

function meetMara() {
    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>The Mysterious Woman</h2>

            <p>
                As you continue through the forest,
                a woman suddenly appears between the trees.
            </p>

            <p>
                She wears a dark cloak and carries an old wooden staff.
            </p>

            <p>
                <strong>
                    "You should not be here."
                </strong>
            </p>

            <p>
                The woman introduces herself as Mara.
            </p>

            <p>
                She tells you that the Ogre-Wolf was once
                a human Guardian who protected Ravenwood.
            </p>

            <p>
                But before she can explain more,
                a loud growl echoes through the forest.
            </p>

            <button onclick="hearKingsleyWarning()">
                Listen to Mara
            </button>
        </div>
    `;
}

function hearKingsleyWarning() {
    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>Kingsley's Warning</h2>

            <p>
                A powerful roar shakes the forest.
            </p>

            <p>
                Mara looks toward the darkness.
            </p>

            <p>
                <strong>
                    "Kingsley is warning us."
                </strong>
            </p>

            <p>
                She explains that something far more dangerous
                is searching for the missing children.
            </p>

            <p>
                She calls this enemy the <strong>Hollow King</strong>.
            </p>

            <p>
                The truth about Kingsley is beginning to emerge.
            </p>

            <button onclick="finishLevel2()">
                Continue the Investigation
            </button>
        </div>
    `;
}

function finishLevel2() {
    const gameArea = document.getElementById("game-area");

    gameArea.innerHTML = `
        <div class="game-panel">
            <h2>Level 2 Complete</h2>

            <p>
                You have discovered that the Ogre-Wolf may not
                be the enemy you believed him to be.
            </p>

            <p>
                Mara has revealed the existence of the Hollow King,
                but many questions remain unanswered.
            </p>

            <p>
                <strong>
                    Clues discovered: ${clues}
                </strong>
            </p>

            <p>
                Your next destination is Kingsley's Den.
            </p>

            <a href="levels.html" class="button">
                Continue to Level 3
            </a>
        </div>
    `;
}