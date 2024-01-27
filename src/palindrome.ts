import * as os from "os";
import { Formules } from "./expressions";
import { LangueInterface } from "./langue.interface";

export class AnalyseurPalindrome {
    private readonly _langue: LangueInterface;

    constructor(langue: LangueInterface) {
        this._langue = langue;
    }

    public static ExaminerPalindrome(texte: string,langue:LangueInterface): string {

        let inverse = texte.split('').reverse().join('');

        let response = `${langue.DireBonjour()}${os.EOL}${inverse}${os.EOL}`;

        if (inverse === texte)
            response += `${langue.Feliciter()}${os.EOL}`;

        return response + langue.DireAuRevoir();
    }
}
