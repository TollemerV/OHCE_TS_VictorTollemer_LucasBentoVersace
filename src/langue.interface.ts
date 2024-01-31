import { DayTime } from "./momentdelajournee";
export interface LangueInterface {
    Feliciter(): string;
    DireBonjour(time:DayTime): string;
    DireAuRevoir(): string;
}
