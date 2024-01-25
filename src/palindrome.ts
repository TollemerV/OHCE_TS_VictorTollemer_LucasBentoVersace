import * as os from "os";

export class AnalyseurPalindrome {

    public static ExaminerPalindrome(texte: string): string {
        let inverse = texte.split('').reverse().join('');

        if (inverse === texte)
            return `${inverse}${os.EOL}Palindrome !`;

        return inverse;
    }
}