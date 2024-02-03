import { AnalyseurPalindrome } from "../src/palindrome";
import * as os from "os";
import { Francais } from "../src/langue.français";
import { Anglais } from "../src/langue.anglais";
import { LangueFake } from "./utilities/fake.ts"; 
import { DayTime } from "../src/momentdelajournee";
import { AnalyseurPalindromeBuilder } from "./utilities/palindromebuilder";
import { Formules } from "../src/expressions";
import { LangueInterface } from "../src/langue.interface";

const symetrique = 'kayak';
const nonSymetriques = ['exemple', 'test'];
const langueFrancaise = new Francais();
const langueAnglaise = new Anglais();
const langueFake = new LangueFake();
const DayTimes = [
    DayTime.Unknown,
    DayTime.Morning,
    DayTime.Afternoon,
    DayTime.Evening,
    DayTime.Night
];

describe("Tests de symétrie", () => {
    test.each([...nonSymetriques])(
        "QUAND on saisit un non-palindrome ALORS elle est renvoyée en miroir",
        (texte: string) => {
            let resultat = AnalyseurPalindromeBuilder.Default().ExaminerPalindrome(texte);
            let attendu = texte.split('').reverse().join('');
            expect(resultat).toContain(attendu);
        }
    );

    test.each([
        [new Francais(), Formules.BIEN_DIT],
        [new Anglais(), Formules.WELL_SAID],
    ])(
        "QUAND on saisit un palindrome EN LANGUE %s ALORS celui-ci est renvoyé ET '%s' est envoyé ensuite",
        (langue: LangueInterface, value: string) => {
            let test = new AnalyseurPalindromeBuilder()
                .DefineLangue(langue)
                .Build();

            let result = test.ExaminerPalindrome(symetrique);
            expect(result).toContain(symetrique + os.EOL + value);
        }
    );

    test.each([...nonSymetriques, symetrique])(
        'ETANT DONNE un utilisateur parlant français QUAND on saisit une chaîne %s ALORS "AU REVOIR" est envoyé en dernier.',
        (texte: string) => {
            let test = new AnalyseurPalindromeBuilder()
                .DefineLangue(langueFrancaise)
                .Build();

            let result = test.ExaminerPalindrome(texte);
            let lines = result.split(os.EOL);
            let lastLine = lines[lines.length - 1];
            expect(lastLine).toEqual(Formules.AU_REVOIR);
        }
    );

    test.each([...nonSymetriques, symetrique])(
        'ETANT DONNE un utilisateur parlant anglais ' + 'QUAND on saisit une chaîne %s ' + 'ALORS "GOOD BYE" est envoyé en dernier.',
        (texte: string) => {
            const langue = new Anglais();
            let test =
                new AnalyseurPalindromeBuilder()
                    .DefineLangue(langue)
                    .Build();

            let result = test.ExaminerPalindrome(texte);

            let lines = result.split(os.EOL);
            let lastLine = lines[lines.length - 1];
            expect(lastLine).toEqual(Formules.GOODBYE)
        });

    function casesFormules() {
        let textes = [...nonSymetriques, symetrique];
        let cases: [DayTime, string][] = [];

        for (let dayTime of DayTimes)
            for (let texte of textes)
                cases.push([dayTime, texte]);

        return cases;
    }

    test.each(casesFormules())(
        'ETANT DONNE un utilisateur parlant une langue ET que nous sommes le %s QUAND on saisit une chaîne %s ALORS les formules, dans cette langue et à ce moment de la journée sont envoyées avant toute réponse',
        (dayTime: DayTime, texte: string) => {
            let test = new AnalyseurPalindromeBuilder()
                .DefineLangue(langueFake)
                .ThisTime(dayTime)
                .Build();

            let result = test.ExaminerPalindrome(texte);
            let firstLine = result.split(os.EOL)[0];
            let value = langueFake.DireBonjour(dayTime);
            expect(firstLine).toEqual(value);
        }
    );
})


// Gestion des entrées inattendues : Chaine vide, caractères spéciaux, entrée null, etc.
describe("Gestion des entrées inattendues", () => {
    const langue = new LangueFake();
    const analyseur = new AnalyseurPalindromeBuilder()
                        .DefineLangue(langue)
                        .ThisTime(DayTime.Unknown) 
                        .Build();

    test("Chaîne vide", () => {
        const resultat = analyseur.ExaminerPalindrome("");
        expect(resultat).toContain(langue.DireBonjour(DayTime.Unknown));
        expect(resultat).not.toContain("Félicitations Fake"); 
    });


    test("Caractères spéciaux", () => {
        const texte = "!@#$%^&*()";
        const resultat = analyseur.ExaminerPalindrome(texte);
        expect(resultat).toContain(texte.split('').reverse().join(''));
    });

    test("Entrée null", () => {
        const resultat = analyseur.ExaminerPalindrome(null as unknown as string);
        expect(resultat).toContain(langue.DireAuRevoir());
    });

    test("Entrée undefined", () => {
        const resultat = analyseur.ExaminerPalindrome(undefined as unknown as string);
        expect(resultat).toContain(langue.DireAuRevoir());
    }
    );
});



        
   /*  test("QUAND on saisit un palindrome en français ALORS celui-ci est renvoyé ET 'Bien dit !' est envoyé ensuite", () => {
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

        test.each([...nonSymetriques, symetrique])(
            'LangueFake :  "Bonjour Fake" est envoyé en premier et "Au Revoir Fake" en dernier',
            (texte: string) => {
                let resultat = AnalyseurPalindrome.ExaminerPalindrome(texte, langueFake);
    
                let premiereLigne = resultat.split(os.EOL)[0];
                expect(premiereLigne).toEqual(langueFake.DireBonjour());
    
                let lignes = resultat.split(os.EOL);
                let derniereLigne = lignes[lignes.length - 1];
                expect(derniereLigne).toEqual(langueFake.DireAuRevoir());
            });
});
 */