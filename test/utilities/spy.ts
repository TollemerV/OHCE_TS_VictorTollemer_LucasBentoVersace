import {LangueInterface} from "../../src/langue.interface";
import { DayTime } from "../../src/momentdelajournee";

export class LangueSpy implements LangueInterface {
    Feliciter(): string {
        return "Félicitations Spy";
    }
    DireBonjour(time: DayTime): string {
        return "Bonjour Spy" + time.toString();
    }
    DireAuRevoir(): string {
        return "Au Revoir Spy";
    }

}