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

    public static ExaminerPalindrome(texte: string,langue:LangueInterface, dayTime:DayTime): string {

        let inverse = texte.split('').reverse().join('');

        let response = `${langue.DireBonjour(dayTime)}${os.EOL}${inverse}${os.EOL}`;

        if (inverse === texte)
            response += `${langue.Feliciter()}${os.EOL}`;

        return response + langue.DireAuRevoir();
    }
}
