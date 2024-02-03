import * as readline from 'readline';
import { AnalyseurPalindrome } from './palindrome';
import { getSystemLanguage, getCurrentDayTime } from "./config";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const langue = getSystemLanguage();
const dayTime = getCurrentDayTime();
const analyseur = new AnalyseurPalindrome(langue, dayTime);

function demanderTexte() {
    rl.question('Entrez un texte : ', (texte) => {
        if (texte.toLowerCase() === 'exit') {
            rl.close();
        } else {
            console.log(analyseur.ExaminerPalindrome(texte));
            demanderTexte();
        }
    });
}

demanderTexte();