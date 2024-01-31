export class DayTime {
    private readonly _representation: string;

    public static Unknown: DayTime = new DayTime("Inconnu");
    public static Morning: DayTime = new DayTime("Matin");
    public static Afternoon: DayTime = new DayTime("Après-Midi");
    public static Evening: DayTime = new DayTime("Soirée");
    public static Night: DayTime = new DayTime("Nuit");

    private constructor(representation: string) {
        this._representation = representation;
    }

    public toString(){
        return this._representation;
    }
}