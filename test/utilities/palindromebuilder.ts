import { AnalyseurPalindrome} from "../../src/palindrome.ts";
import { Francais } from "../../src/langue.français.ts";
import { LangueInterface } from "../../src/langue.interface.ts";
import { DayTime } from "../../src/momentdelajournee.ts";
import { LangueFake } from "./fake";

export class AnalyseurPalindromeBuilder {
    private _langue: LangueInterface = new LangueFake();
    private _time: DayTime = DayTime.Unknown;

    public static Default() {
        return new AnalyseurPalindromeBuilder().Build();
    }

    public Build(): AnalyseurPalindrome {
        return new AnalyseurPalindrome(this._langue,this._time);
    }

    public DefineLangue(langue: LangueInterface): AnalyseurPalindromeBuilder {
        this._langue = langue;
        return this;
    }

    public ThisTime(time:DayTime) {
        this._time = time;
        return this;
    }
}
