import {LangueInterface} from "../../src/langue.interface";
import { DayTime } from "../../src/momentdelajournee";

export class LangueStub implements LangueInterface {
    Feliciter(): string {
        return "Félicitations Stub";
    }
    DireBonjour(time: DayTime): string {
        return "Bonjour Stub" + time.toString();
    }
    DireAuRevoir(): string {
        return "Au Revoir Stub";
    }

}