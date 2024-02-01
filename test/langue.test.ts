import { Francais } from "../src/langue.français";
import { Anglais } from "../src/langue.anglais";
import { Formules } from "../src/expressions";
import { LangueInterface } from "../src/langue.interface";
import { DayTime } from "../src/momentdelajournee";

describe("Localisation des interactions", () => {
    test.each([
        // Français
        [new Francais(), DayTime.Unknown, Formules.BONJOUR],
        [new Francais(), DayTime.Morning, Formules.BONJOUR],
        [new Francais(), DayTime.Afternoon, Formules.BONJOUR],
        [new Francais(), DayTime.Evening, Formules.BONSOIR],
        [new Francais(), DayTime.Night, Formules.BONSOIR],
        // Anglais
        [new Anglais(), DayTime.Unknown,Formules.HELLO],
        [new Anglais(), DayTime.Morning,Formules.GOOD_MORNING],
        [new Anglais(), DayTime.Afternoon,Formules.GOOD_AFTERNOON],
        [new Anglais(), DayTime.Evening,Formules.GOOD_EVENING],
        [new Anglais(), DayTime.Night,Formules.GOOD_NIGHT],
    ])("En %s on commence par '%s'",
        (langue: LangueInterface,time: DayTime, attendu: string) => {
            expect(langue.DireBonjour(time)).toBe(attendu)
    })
});
