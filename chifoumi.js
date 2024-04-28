//--------------------------------------------------
//         ELEMENT DU DOM
//---------------------------------------------------
// TITRE
const divTitresDOM = document.querySelector(".center-title")
const titreBlancDOM = document.querySelector(".title1")
const titreChifoumiDOM = document.querySelector(".title2")
const titreRulesDOM = document.querySelector(".rules")

// BOUTON CONTINUER/RECOMMENCER/REESAYER
const btnStartDOM = document.querySelector(".div-button-start>button")

// CONTENDER SCORE
const divContenderScoreDOM = document.querySelector(".flex-contender")
const scoreSkynetDOM = document.querySelector(".scoreSkynet")
const scoreUserDOM = document.querySelector(".scoreToi")

// 
const divResultDOM = document.querySelector(".flex-result")

// USER CHOICE
const userChoiceScissorDOM = document.querySelector(".resultCiseaux")
const userChoicePaperDOM = document.querySelector(".resultFeuille")
const userChoiceRockDOM = document.querySelector(".resultPierre")

// SKYNET CHOICE
const skynetChoiceScissorDOM = document.querySelector(".resultCiseaux2")
const skynetChoicePaperDOM = document.querySelector(".resultFeuille2")
const skynetChoiceRockDOM = document.querySelector(".resultPierre2")

// BOUTON CHOIX UTILISATEUR
const divButtonUserChoiceDOM = document.querySelector(".flex-icon")
const btnCiseauxDOM = document.querySelector(".btnCiseaux")
const btnPierreDOM = document.querySelector(".btnPierre")
const btnFeuilleDOM = document.querySelector(".btnFeuille")


//--------------------------------------------------
//         VARIABLES
//--------------------------------------------------
// CHOIX POSSIBLE DE SKYNET
let computerChoice = ["pierre", "feuille", "ciseaux"]

// BOUTON CLIQUER PAR L'UTILISATEUR
let userChoice;

// COMPTEUR DE POINT
let userScoreCounter = 0;
let skynetScoreCounter = 0;

// SORTI DE BOUCLE - PAS OBLIGATOIRE SANS BOUCLE WHILE A VERIFIER
let round;

// COMPTEUR DE ROUND
let roundCounter = 1


//---------------------------------------------------
//         FONCTIONS
//---------------------------------------------------
// FONCTION DEBUT DU JEU ET CONTINUER LE JEU
const gameStart = () => {
    
    divResultDOM.classList.add("display-none")
    divButtonUserChoiceDOM.classList.remove("display-none")
    btnStartDOM.classList.add("display-none")
    // titreChifoumiDOM.classList.add("display-none")
    titreChifoumiDOM.innerText = `ROUND ${roundCounter}` 
    titreBlancDOM.innerText = "Fais ton choix entre pierre, papier ou ciseaux"
    titreBlancDOM.style.color = "white"
    divContenderScoreDOM.classList.remove("display-none")
    userChoicePaperDOM.classList.remove("display-none")
    
    userChoicePaperDOM.classList.add("display-none")
    skynetChoicePaperDOM.classList.add("display-none")
    userChoiceRockDOM.classList.add("display-none")
    skynetChoiceRockDOM.classList.add("display-none")
    userChoiceScissorDOM.classList.add("display-none")
    skynetChoiceScissorDOM.classList.add("display-none")
    titreRulesDOM.classList.add("display-none")
    round = true;
    roundCounter++
    
    btnCiseauxDOM.addEventListener("click", () => {
        userChoice = "ciseaux"
        // userChoiceAffichageDOM.innerText = "ciseaux"
        conditionsWinner()
    })
    
    btnPierreDOM.addEventListener("click", () => {
        userChoice = "pierre"
        // userChoiceAffichageDOM.innerText = "pierre"
        conditionsWinner()
    })
    
    btnFeuilleDOM.addEventListener("click", () => {
        userChoice = "feuille"
        // userChoiceAffichageDOM.innerText = "feuille"
        conditionsWinner()
    })
}

// FONCTION CONDITIONS VAINQUEUR ROUND ET VAINQUEUR DE LA PARTIE
const conditionsWinner = () => {
        let random = Math.floor(Math.random() * computerChoice.length)
        let computerAleatoireChoice = computerChoice[random]
        
    if (round === true && userScoreCounter < 3 && skynetScoreCounter < 3) {
        
        if (userChoice === computerAleatoireChoice) {
            round = false;
            if (computerAleatoireChoice === "ciseaux" && userChoice === "ciseaux") {
                divResultDOM.classList.remove("display-none")
                userChoiceScissorDOM.classList.remove("display-none")
                skynetChoiceScissorDOM.classList.remove("display-none")
            } else if (computerAleatoireChoice === "pierre" && userChoice === "pierre") {
                divResultDOM.classList.remove("display-none")
                userChoiceRockDOM.classList.remove("display-none")
                skynetChoiceRockDOM.classList.remove("display-none")
            } else if (computerAleatoireChoice === "feuille" && userChoice === "feuille") {
                divResultDOM.classList.remove("display-none")
                userChoicePaperDOM.classList.remove("display-none")
                skynetChoicePaperDOM.classList.remove("display-none")
            }
            divButtonUserChoiceDOM.classList.add("display-none")
            btnStartDOM.classList.remove("display-none")
            btnStartDOM.innerText = "CONTINUER"
            titreBlancDOM.innerText = "Egalité"
            // computerChoiceAffichageDOM.innerText = computerAleatoireChoice
            
        } else if (userChoice === "ciseaux" && computerAleatoireChoice === "pierre") {
            divResultDOM.classList.remove("display-none")
            userChoiceScissorDOM.classList.remove("display-none")
            skynetChoiceRockDOM.classList.remove("display-none")
            divButtonUserChoiceDOM.classList.add("display-none")
            btnStartDOM.classList.remove("display-none")
            btnStartDOM.innerText = "CONTINUER"
            titreBlancDOM.style.color = "red"
            titreBlancDOM.innerText = "Tu as perdu cette manche"
            skynetScoreCounter++
            scoreSkynetDOM.innerText = skynetScoreCounter
            round = false;
            // computerChoiceAffichageDOM.innerText = computerAleatoireChoice
        }  else if (userChoice === "feuille" && computerAleatoireChoice === "ciseaux") {
            divResultDOM.classList.remove("display-none")
            userChoicePaperDOM.classList.remove("display-none")
            skynetChoiceScissorDOM.classList.remove("display-none")
            divButtonUserChoiceDOM.classList.add("display-none")
            btnStartDOM.classList.remove("display-none")
            btnStartDOM.innerText = "CONTINUER"
            titreBlancDOM.style.color = "red"
            titreBlancDOM.innerText = "Tu as perdu cette manche"
            skynetScoreCounter++
            scoreSkynetDOM.innerText = skynetScoreCounter
            round = false;
            // computerChoiceAffichageDOM.innerText = computerAleatoireChoice
        }  else if (userChoice === "pierre" && computerAleatoireChoice === "feuille") {
            divResultDOM.classList.remove("display-none")
            userChoiceRockDOM.classList.remove("display-none")
            skynetChoicePaperDOM.classList.remove("display-none")
            divButtonUserChoiceDOM.classList.add("display-none")
            btnStartDOM.classList.remove("display-none")
            btnStartDOM.innerText = "CONTINUER"
            titreBlancDOM.style.color = "red"
            titreBlancDOM.innerText = "Tu as perdu cette manche"
            skynetScoreCounter++
            scoreSkynetDOM.innerText = skynetScoreCounter
            round = false;
            // computerChoiceAffichageDOM.innerText = computerAleatoireChoice
            
        } else if (userChoice === "pierre" && computerAleatoireChoice === "ciseaux") {
            divResultDOM.classList.remove("display-none")
            userChoiceRockDOM.classList.remove("display-none")
            skynetChoiceScissorDOM.classList.remove("display-none")
            divButtonUserChoiceDOM.classList.add("display-none")
            btnStartDOM.classList.remove("display-none")
            btnStartDOM.innerText = "CONTINUER"
            titreBlancDOM.style.color = "green"
            titreBlancDOM.innerText = "Tu as gagné cette manche"
            userScoreCounter++
            scoreUserDOM.innerText = userScoreCounter
            round = false;
            // computerChoiceAffichageDOM.innerText = computerAleatoireChoice
        } else if (userChoice === "ciseaux" && computerAleatoireChoice === "feuille") {
            divResultDOM.classList.remove("display-none")
            userChoiceScissorDOM.classList.remove("display-none")
            skynetChoicePaperDOM.classList.remove("display-none")
            divButtonUserChoiceDOM.classList.add("display-none")
            btnStartDOM.classList.remove("display-none")
            btnStartDOM.innerText = "CONTINUER"
            titreBlancDOM.style.color = "green"
            titreBlancDOM.innerText = "Tu as gagné cette manche"
            userScoreCounter++
            scoreUserDOM.innerText = userScoreCounter
            round = false;
            // computerChoiceAffichageDOM.innerText = computerAleatoireChoice
        } else if (userChoice === "feuille" && computerAleatoireChoice === "pierre") {
            divResultDOM.classList.remove("display-none")
            userChoicePaperDOM.classList.remove("display-none")
            skynetChoiceRockDOM.classList.remove("display-none")
            divButtonUserChoiceDOM.classList.add("display-none")
            btnStartDOM.classList.remove("display-none")
            btnStartDOM.innerText = "CONTINUER"
            titreBlancDOM.style.color = "green"
            titreBlancDOM.innerText = "Tu as gagné cette manche"
            userScoreCounter++
            scoreUserDOM.innerText = userScoreCounter
            round = false;
            // computerChoiceAffichageDOM.innerText = computerAleatoireChoice
        } 
    }
    if (userScoreCounter === 3 && skynetScoreCounter < 3) {
            divResultDOM.classList.remove("display-none")
            divButtonUserChoiceDOM.classList.add("display-none")
            btnStartDOM.classList.remove("display-none")
            btnStartDOM.innerText = "RECOMMENCER"
            btnStartDOM.removeEventListener("click", gameStart)
            btnStartDOM.addEventListener("click",resetGame)
            titreBlancDOM.style.color = "green"
            titreBlancDOM.innerText = "Félicitation, Tu as gagné la partie"
            scoreUserDOM.innerText = userScoreCounter
            scoreSkynetDOM.innerText = skynetScoreCounter
            
    } else if (skynetScoreCounter === 3 && userScoreCounter < 3) {
            divResultDOM.classList.remove("display-none")
            divButtonUserChoiceDOM.classList.add("display-none")
            btnStartDOM.classList.remove("display-none")
            btnStartDOM.innerText = "REESAYER"
            btnStartDOM.removeEventListener("click", gameStart)
            btnStartDOM.addEventListener("click", resetGame)
            titreBlancDOM.style.color = "red"
            titreBlancDOM.innerText = "Dommage, Tu as perdu la partie"
            scoreUserDOM.innerText = userScoreCounter
            scoreSkynetDOM.innerText = skynetScoreCounter
    }
}

// FONCTION RECOMMENCER/REESAYER UNE PARTIE
const resetGame = () => {
        userScoreCounter = 0
        skynetScoreCounter = 0
        roundCounter = 1
        titreChifoumiDOM.innerText = 'CHIFOUMI'
        scoreUserDOM.innerText = userScoreCounter
        scoreSkynetDOM.innerText = skynetScoreCounter
        divContenderScoreDOM.classList.add("display-none")
        
        userChoicePaperDOM.classList.add("display-none")
        skynetChoicePaperDOM.classList.add("display-none")
        userChoiceRockDOM.classList.add("display-none")
        skynetChoiceRockDOM.classList.add("display-none")
        userChoiceScissorDOM.classList.add("display-none")
        skynetChoiceScissorDOM.classList.add("display-none")
        
        // divResultDOM.classList.toggle("display-none")
        divButtonUserChoiceDOM.classList.add("display-none")
        
        btnStartDOM.innerText = "COMMENCER"
        
        btnStartDOM.removeEventListener("click", resetGame)
        btnStartDOM.addEventListener("click", gameStart)
        
        titreBlancDOM.style.color = "white"
        titreBlancDOM.innerText = "Nouvelle partie de"
        titreChifoumiDOM.classList.remove("display-none")
}


//---------------------------------------------------
//         EVENT
//---------------------------------------------------
// PREMIER EVENT BOUTON COMMENCER
btnStartDOM.addEventListener("click", gameStart)





