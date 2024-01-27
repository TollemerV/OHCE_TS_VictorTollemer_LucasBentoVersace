import { Francais } from "../src/langue.français";
import { Anglais } from "../src/langue.anglais";
import { Formules } from "../src/expressions";
import { LangueInterface } from "../src/langue.interface";

describe("Localisation des interactions", () => {
    test.each([
        [new Francais(), Formules.BONJOUR],
        [new Anglais(), Formules.HELLO],
    ])("En %s on commence par '%s'",
        (langue: LangueInterface, attendu: string) => {
            expect(langue.DireBonjour()).toBe(attendu)
    })
});
