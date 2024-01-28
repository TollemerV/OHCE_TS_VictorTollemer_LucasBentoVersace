import {LangueInterface} from "../../src/langue.interface";

export class LangueFake implements LangueInterface {
    Feliciter(): string {
        return "Félicitations Fake";
    }
    DireBonjour(): string {
        return "Bonjour Fake";
    }
    DireAuRevoir(): string {
        return "Au Revoir Fake";
    }

}