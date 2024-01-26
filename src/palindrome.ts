import * as os from "os";
import { Formules } from "./expressions";

export class AnalyseurPalindrome {

    public static ExaminerPalindrome(texte: string): string {

        let inverse = texte.split('').reverse().join('');

        let reponse = `${Formules.BONJOUR}${os.EOL}${inverse}${os.EOL}`;

        if (inverse === texte)
            reponse += `${Formules.BIEN_DIT}${os.EOL}`;

        return reponse + Formules.AU_REVOIR;
    }
}
