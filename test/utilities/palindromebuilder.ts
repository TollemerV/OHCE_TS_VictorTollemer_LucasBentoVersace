import { AnalyseurPalindrome} from "../../src/palindrome.ts";
import { Francais } from "../../src/langue.français.ts";
import { LangueInterface } from "../../src/langue.interface.ts";

export class AnalyseurPalindromeBuilder {
    private _langue: LangueInterface;

    public constructor(langue: LangueInterface) {
        this._langue = langue;
    }

    public static Build(langue: LangueInterface) {
        return new AnalyseurPalindromeBuilder(langue).Construire();
    }

    public Construire(): AnalyseurPalindrome {
        return new AnalyseurPalindrome(this._langue);
    }

    public DefinirLangue(langue: LangueInterface): AnalyseurPalindromeBuilder {
        this._langue = this._langue;
        return this;
    }
}