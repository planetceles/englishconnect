const descUrl = "https://planetceles.github.io/englishconnect/data/enlgish_description.json";
const intro = document.querySelector("#intro");
const languages = document.querySelector("#languages");
const purposes = document.querySelector("#purpose");
const allGoals = document.querySelector("#goals");
const highlights = document.querySelector("#highlight");

async function getDescriptionData() {
    try {
        const response = await fetch(descUrl);
        const data = await response.json();

        displayDescription(data.teacher);
    }
    catch (error) {
        console.error("Description fetch error:", error);
    }
}
getDescriptionData();

const displayDescription = (teacher) => {
    teacher.forEach((teach) => {
        let introText = document.createElement("p");
        let languagesText = document.createElement("p");
        let purposeText = document.createElement("p");
        let goalsText = document.createElement("ul");
        let highlightText = document.createElement("p");

        introText.textContent = `${teach.intro}`;
        languagesText.textContent = `${teach.languages}`;
        purposeText.textContent = `${teach.purpose}`;
        // goalsText.textContent = `${teach.purpose1}`;
        highlightText.textContent = `${teach.highlight}`;

        teach.goals.forEach(goal => {
            let goalList = document.createElement("li");
            goalList.textContent = goal;
            goalsText.appendChild(goalList);
        });

        intro.appendChild(introText);
        languages.appendChild(languagesText);
        purposes.appendChild(purposeText);
        allGoals.appendChild(goalsText);
        highlights.appendChild(highlightText);
        
    });
}