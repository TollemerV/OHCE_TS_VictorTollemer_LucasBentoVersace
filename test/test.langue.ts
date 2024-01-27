import { Francais } from "../src/langue.français";
import { Formules } from "../src/expressions";
import { LangueInterface } from "../src/langue.interface";

describe("Localisation des interactions", () => {
    test.each([
        [new Francais(), Formules.BONJOUR]
    ])("En %s on commence par '%s'",
        (langue: LangueInterface, attendu: string) => {
            expect(langue.DireBonjour()).toBe(attendu)
    })
});
