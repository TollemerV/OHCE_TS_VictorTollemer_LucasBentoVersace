import * as os from "os";
import { LangueInterface } from "./langue.interface";
import { DayTime } from "./momentdelajournee";


export class AnalyseurPalindrome {
    private readonly _langue: LangueInterface;
    private readonly _dayTime : DayTime;

    constructor(langue: LangueInterface, dayTime: DayTime) {
        this._langue = langue;
        this._dayTime = dayTime;
    }

    public ExaminerPalindrome(texte: string): string {

        let inverse = texte.split('').reverse().join('');

        let response = `${this._langue.DireBonjour(this._dayTime)}${os.EOL}${inverse}${os.EOL}`;

        if (inverse === texte)
            response += `${this._langue.Feliciter()}${os.EOL}`;

        return response + this._langue.DireAuRevoir();
    }
}
