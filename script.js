let rangeCount = 1;
const skills1 = ["호걸", "일기", "신속", "수련", "원사", "공성", "병기", "냉정", "군사", "귀모"];
const skills2 = ["상재", "경작", "명사", "병심", "연병", "수집", "인맥", "감시", "보수", "변설"];

document.addEventListener("DOMContentLoaded", () => {
    displaySkills1();
    displaySkills2();
});

function addRange() {
    rangeCount++;
    const rangesDiv = document.getElementById('ranges');
    const newRangeDiv = document.createElement('div');
    newRangeDiv.className = 'range';
    newRangeDiv.innerHTML = `
        <label for="subject${rangeCount}">종목:</label>
        <input type="text" id="subject${rangeCount}" name="subject${rangeCount}">
        <label for="a${rangeCount}">최소값:</label>
        <input type="number" id="a${rangeCount}" name="a${rangeCount}">
        <label for="b${rangeCount}">최대값:</label>
        <input type="number" id="b${rangeCount}" name="b${rangeCount}"><br><br>
    `;
    rangesDiv.appendChild(newRangeDiv);
}

function generateRandomNumbers() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>특성 뽑기 결과</h2>';

    for (let i = 1; i <= rangeCount; i++) {
        const subject = document.getElementById(`subject${i}`).value;
        const a = parseInt(document.getElementById(`a${i}`).value);
        const b = parseInt(document.getElementById(`b${i}`).value);

        // Check if subject, a and b are valid
        if (!subject || isNaN(a) || isNaN(b)) {
            alert(`Please enter valid values for subject, minimum, and maximum in range ${i}.`);
            return;
        }

        // Ensure a is less than b
        const min = Math.min(a, b);
        const max = Math.max(a, b);

        // Generate a random number between a and b (inclusive)
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // Display the result
        const p = document.createElement('p');
        p.textContent = `${subject}: ${randomNumber}`;
        resultDiv.appendChild(p);
    }
}

function displaySkills1() {
    const skillButtonsDiv1 = document.getElementById('skillButtons1');
    skillButtonsDiv1.innerHTML = '';

    skills1.forEach(skill => {
        const button = document.createElement('div');
        button.className = 'skill-button';
        button.textContent = skill;
        skillButtonsDiv1.appendChild(button);
    });
}

function displaySkills2() {
    const skillButtonsDiv2 = document.getElementById('skillButtons2');
    skillButtonsDiv2.innerHTML = '';

    skills2.forEach(skill => {
        const button = document.createElement('div');
        button.className = 'skill-button';
        button.textContent = skill;
        skillButtonsDiv2.appendChild(button);
    });
}

function selectRandomSkills1() {
    const numSkills1 = parseInt(document.getElementById('numSkills1').value);
    
    if (isNaN(numSkills1) || numSkills1 <= 0) {
        alert('Please enter a valid number of skills to select.');
        return;
    }

    if (numSkills1 > skills1.length) {
        alert(`You can select up to ${skills1.length} skills.`);
        return;
    }

    const selectedSkills1 = [];
    while (selectedSkills1.length < numSkills1) {
        const randomIndex = Math.floor(Math.random() * skills1.length);
        const skill = skills1[randomIndex];
        if (!selectedSkills1.includes(skill)) {
            selectedSkills1.push(skill);
        }
    }

    const skillButtonsDiv1 = document.getElementById('skillButtons1');
    skillButtonsDiv1.childNodes.forEach(button => {
        if (selectedSkills1.includes(button.textContent)) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });

    const selectedSkillsDiv1 = document.getElementById('selectedSkills1');
    selectedSkillsDiv1.innerHTML = '<h2>특기 뽑기 결과:</h2>';
    selectedSkills1.forEach(skill => {
        const p = document.createElement('p');
        p.textContent = skill;
        selectedSkillsDiv1.appendChild(p);
    });
}

function selectRandomSkills2() {
    const numSkills2 = parseInt(document.getElementById('numSkills2').value);
    
    if (isNaN(numSkills2) || numSkills2 <= 0) {
        alert('Please enter a valid number of skills to select.');
        return;
    }

    if (numSkills2 > skills2.length) {
        alert(`You can select up to ${skills2.length} skills.`);
        return;
    }

    const selectedSkills2 = [];
    while (selectedSkills2.length < numSkills2) {
        const randomIndex = Math.floor(Math.random() * skills2.length);
        const skill = skills2[randomIndex];
        if (!selectedSkills2.includes(skill)) {
            selectedSkills2.push(skill);
        }
    }

    const skillButtonsDiv2 = document.getElementById('skillButtons2');
    skillButtonsDiv2.childNodes.forEach(button => {
        if (selectedSkills2.includes(button.textContent)) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });

    const selectedSkillsDiv2 = document.getElementById('selectedSkills2');
    selectedSkillsDiv2.innerHTML = '<h2>특기 뽑기 결과:</h2>';
    selectedSkills2.forEach(skill => {
        const p = document.createElement('p');
        p.textContent = skill;
        selectedSkillsDiv2.appendChild(p);
    });
}

function selectRandomTactics() {
    const numTactics = parseInt(document.getElementById('numTactics').value);
    const selectTactics = parseInt(document.getElementById('selectTactics').value);

    if (isNaN(numTactics) || isNaN(selectTactics) || numTactics <= 0 || selectTactics <= 0) {
        alert('Please enter valid numbers for total tactics and number of tactics to select.');
        return;
    }

    if (selectTactics > numTactics) {
        alert('Number of tactics to select cannot be greater than total number of tactics.');
        return;
    }

    const tactics = Array.from({ length: numTactics }, (_, i) => i + 1);
    const selectedTactics = [];

    while (selectedTactics.length < selectTactics) {
        const randomIndex = Math.floor(Math.random() * tactics.length);
        const tactic = tactics[randomIndex];
        if (!selectedTactics.includes(tactic)) {
            selectedTactics.push(tactic);
        }
    }

    const selectedTacticsDiv = document.getElementById('selectedTactics');
    selectedTacticsDiv.innerHTML = '<h2>전법 뽑기 결과:</h2>';
    selectedTactics.forEach(tactic => {
        const p = document.createElement('p');
        p.textContent = `전법 ${tactic}`;
        selectedTacticsDiv.appendChild(p);
    });
}
