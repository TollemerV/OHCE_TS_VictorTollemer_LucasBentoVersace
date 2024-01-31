import { LangueInterface } from "./langue.interface";
import { Formules } from "./expressions";
import { DayTime } from "./momentdelajournee";

export class Francais implements LangueInterface {
    public DireAuRevoir(): string {
        return Formules.AU_REVOIR;
    }

    public DireBonjour(time: DayTime): string {
        if(time == DayTime.Evening || time == DayTime.Night)
            return Formules.BONSOIR;
        return Formules.BONJOUR;
    }

    public Feliciter(): string {
        return Formules.BIEN_DIT;
    }

    public toString(): string {
        return "Langue Française";
    }
}