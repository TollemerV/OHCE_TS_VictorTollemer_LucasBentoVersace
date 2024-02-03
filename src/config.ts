import { Anglais } from "./langue.anglais";
import { Francais } from "./langue.français";
import { LangueInterface } from "./langue.interface";
import { DayTime } from "./momentdelajournee";



export function getSystemLanguage(): LangueInterface {
    const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    if (systemLocale.startsWith('fr')) {
        return new Francais();
    } else {
        return new Anglais();
    }
}

export function getCurrentDayTime(): DayTime {
    const hours = new Date().getHours();
    if (hours < 6) {
        return DayTime.Night;
    } else if (hours < 12) {
        return DayTime.Morning;
    } else if (hours < 18) {
        return DayTime.Afternoon;
    } else {
        return DayTime.Evening;
    }
}