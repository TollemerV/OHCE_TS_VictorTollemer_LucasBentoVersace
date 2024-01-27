import { LangueInterface } from "./langue.interface";
import { Formules } from "./expressions";

export class Francais implements LangueInterface {
    public DireAuRevoir(): string {
        return Formules.AU_REVOIR;
    }

    public DireBonjour(): string {
        return Formules.BONJOUR;
    }

    public Feliciter(): string {
        return Formules.BIEN_DIT;
    }

    public toString(): string {
        return "Langue Française";
    }
}