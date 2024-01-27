import { LangueInterface } from "./langue.interface";
import { Formules } from "./expressions";

export class Anglais implements LangueInterface {
    public DireAuRevoir(): string {
        return Formules.GOODBYE;
    }

    public DireBonjour(): string {
        return Formules.HELLO;
    }

    public Feliciter(): string {
        return Formules.WELL_SAID;
    }

    public toString(): string {
        return "Langue Anglaise";
    }
}
