import { AnalyseurPalindrome } from "../src/palindrome";
import * as os from "os";
import { Francais } from "../src/langue.français";
import { Anglais } from "../src/langue.anglais";

const symetrique = 'kayak';
const nonSymetriques = ['exemple', 'test'];
const langueFrancaise = new Francais();
const langueAnglaise = new Anglais();

describe("Tests de symétrie", () => {
    test.each([...nonSymetriques])("QUAND on saisit un non-palindrome ALORS elle est renvoyée en miroir",
        (texte: string) => {
            let resultat = AnalyseurPalindrome.ExaminerPalindrome(texte, langueFrancaise);

            let attendu = texte.split('').reverse().join('');
            expect(resultat).toContain(attendu);
        });

    test("QUAND on saisit un palindrome en français ALORS celui-ci est renvoyé ET 'Bien dit !' est envoyé ensuite", () => {
        let resultat = AnalyseurPalindrome.ExaminerPalindrome(symetrique, langueFrancaise);

        expect(resultat).toContain(symetrique + os.EOL + langueFrancaise.Feliciter());
    });

    test("QUAND on saisit un palindrome en anglais ALORS celui-ci est renvoyé ET 'Well said!' est envoyé ensuite", () => {
        let resultat = AnalyseurPalindrome.ExaminerPalindrome(symetrique, langueAnglaise);

        expect(resultat).toContain(symetrique + os.EOL + langueAnglaise.Feliciter());
    });

    test.each([...nonSymetriques, symetrique])('Pour un message en français, "Bonjour" est envoyé en premier',
        (texte: string) => {
            let resultat = AnalyseurPalindrome.ExaminerPalindrome(texte, langueFrancaise);

            let premiereLigne = resultat.split(os.EOL)[0];
            expect(premiereLigne).toEqual(langueFrancaise.DireBonjour());
        });

    test.each([...nonSymetriques, symetrique])('Pour un message en anglais, "Hello" est envoyé en premier',
        (texte: string) => {
            let resultat = AnalyseurPalindrome.ExaminerPalindrome(texte, langueAnglaise);

            let premiereLigne = resultat.split(os.EOL)[0];
            expect(premiereLigne).toEqual(langueAnglaise.DireBonjour());
        });

    test.each([...nonSymetriques, symetrique])('Pour un message en français, "Au Revoir" est envoyé en dernier',
        (texte: string) => {
            let resultat = AnalyseurPalindrome.ExaminerPalindrome(texte, langueFrancaise);

            let lignes = resultat.split(os.EOL);
            let derniereLigne = lignes[lignes.length - 1];
            expect(derniereLigne).toEqual(langueFrancaise.DireAuRevoir());
        });

    test.each([...nonSymetriques, symetrique])('Pour un message en anglais, "Goodbye" est envoyé en dernier',
        (texte: string) => {
            let resultat = AnalyseurPalindrome.ExaminerPalindrome(texte, langueAnglaise);

            let lignes = resultat.split(os.EOL);
            let derniereLigne = lignes[lignes.length - 1];
            expect(derniereLigne).toEqual(langueAnglaise.DireAuRevoir());
        });
});