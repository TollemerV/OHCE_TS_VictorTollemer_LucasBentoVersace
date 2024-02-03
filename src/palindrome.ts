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
        let response = "";
    

        response += `${this._langue.DireBonjour(this._dayTime)}${os.EOL}`;
    
        if (texte) { 
            // Si le texte n'est pas vide, null ou undefined
            let inverse = texte.split('').reverse().join('');
    
            response += `${inverse}${os.EOL}`;
    
            if (inverse === texte) {
                response += `${this._langue.Feliciter()}${os.EOL}`;
            }
        }
    
        response += this._langue.DireAuRevoir();
    
        return response;
    }
}


