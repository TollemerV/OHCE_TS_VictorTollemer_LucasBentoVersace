import { AnalyseurPalindrome } from "../src/palindrome";
import * as os from "os";

describe("Tests palindrome", () => {
    test("Vérification de base",
        () => expect(true).toBe(true))
    test.each([
        ['exemple'],
        ['test']
    ])("QUAND on saisit un non-palindrome ALORS elle est renvoyée en miroir",
        (texte: string) => {
            let result = AnalyseurPalindrome.ExaminerPalindrome(texte);
            let expected = texte.split('').reverse().join('');
            expect(result).toEqual(expected);
        })

    test("QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET 'Bien dit !' est envoyé ensuite",
     () => {
        const palindrome = "kayak";

        let result = AnalyseurPalindrome.ExaminerPalindrome(palindrome);

        expect(result).toEqual(palindrome + os.EOL + "Bien dit !");
    })
});
