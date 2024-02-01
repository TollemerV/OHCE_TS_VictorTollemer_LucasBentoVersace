import {LangueInterface} from "../../src/langue.interface";
import { DayTime } from "../../src/momentdelajournee";

export class LangueFake implements LangueInterface {
    Feliciter(): string {
        return "Félicitations Fake";
    }
    DireBonjour(time: DayTime): string {
        return "Bonjour Fake" + time.toString();
    }
    DireAuRevoir(): string {
        return "Au Revoir Fake";
    }

}