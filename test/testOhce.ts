import { AnalyseurPalindrome } from "../src/palindrome";
import * as os from "os";
import { Formules } from "../src/expressions";

const symetrique = 'kayak';
const nonSymetriques = ['exemple', 'test'];

describe("tests de symétrie", () => {
    test.each([...nonSymetriques])("QUAND on saisit un non-palindrome ALORS elle est renvoyée en miroir",
        (texte: string) => {
            let resultat = AnalyseurPalindrome.ExaminerPalindrome(texte);

            let attendu = texte.split('').reverse().join('');
            expect(resultat).toContain(attendu);
    });

    test("QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET 'Bien dit !' est envoyé ensuite", () => {
        let resultat = AnalyseurPalindrome.ExaminerPalindrome(symetrique);

        expect(resultat).toContain(symetrique + os.EOL + Formules.BIEN_DIT);
    });

    test.each([...nonSymetriques, symetrique])('Pour un message, "Bonjour" est envoyé en premier',
        (texte: string) => {
            let resultat = AnalyseurPalindrome.ExaminerPalindrome(texte);

            let premiereLigne = resultat.split(os.EOL)[0];
            expect(premiereLigne).toEqual(Formules.BONJOUR);
    });

    test.each([...nonSymetriques, symetrique])('Pour un message, "Au Revoir" est envoyé en dernier',
        (texte: string) => {
            let resultat = AnalyseurPalindrome.ExaminerPalindrome(texte);

            let lignes = resultat.split(os.EOL);
            let derniereLigne = lignes[lignes.length - 1];
            expect(derniereLigne).toEqual(Formules.AU_REVOIR);
    });
});