import { LangueInterface } from "./langue.interface";
import { Formules } from "./expressions";
import { DayTime } from "./momentdelajournee";

export class Anglais implements LangueInterface {
    public DireAuRevoir(): string {
        return Formules.GOODBYE;
    }

    public DireBonjour(time: DayTime): string {
         if(time == DayTime.Morning)
            return Formules.GOOD_MORNING;

        if(time == DayTime.Afternoon)
            return Formules.GOOD_AFTERNOON;

        if(time == DayTime.Evening)
            return Formules.GOOD_EVENING;

        if(time == DayTime.Night)
            return Formules.GOOD_NIGHT;

        return Formules.HELLO;
    }

    public Feliciter(): string {
        return Formules.WELL_SAID;
    }

    public toString(): string {
        return "Langue Anglaise";
    }
}
