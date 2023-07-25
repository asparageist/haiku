import Haiku from './../src/haiku.js';

describe('Haiku', () => {
    let haiku;
    beforeEach(() => {
        haiku = new Haiku();
    });
    test('It should correctly make a haiku object three line properties', () => {
        haiku = new Haiku("line1", "line2", "line3");
        expect(haiku.line1).toEqual("line1");
        expect(haiku.line2).toEqual("line2");
        expect(haiku.line3).toEqual("line3");
    });
    test('It should split each line into an array of words', () => {
        haiku = new Haiku("line one", "line two", "line three");
        haiku.makeArray();
        expect(haiku.words1).toEqual(["line", "one"]);
        expect(haiku.words2).toEqual(["line", "two"]);
        expect(haiku.words3).toEqual(["line", "three"]);
    });

    test('It should count one vowel words and add it to syllable counter', () => {
        haiku = new Haiku("a the plant", "ton cat", "dog rat sat tin");
        haiku.makeArray();
        expect(haiku.countSyllables(haiku.words1)).toEqual(3);
        expect(haiku.countSyllables(haiku.words2)).toEqual(2);
        expect(haiku.countSyllables(haiku.words3)).toEqual(4);

    });
    test('It should count two vowel words as one syllable if the "e" at the end is silent', () => {
        haiku = new Haiku("a bone plant", "tone cat", "dog rate sat tin");
        haiku.makeArray();
        expect(haiku.countSyllables(haiku.words1)).toEqual(3);
        expect(haiku.countSyllables(haiku.words2)).toEqual(2);
        expect(haiku.countSyllables(haiku.words3)).toEqual(4);
    });
    test('It should check to see if the word contains a diphthong.' , () => {
        haiku = new Haiku("a bone bread", "coin cat", "dog rate loud tin");
        haiku.makeArray();
        expect(haiku.countSyllables(haiku.words1)).toEqual(3);
        expect(haiku.countSyllables(haiku.words2)).toEqual(2);
        expect(haiku.countSyllables(haiku.words3)).toEqual(4);
    });
    test('It should count y as a vowel when there is no other vowel' , () => {
        haiku = new Haiku("a bone bread gym", "coin breathe my", "dog rate loud tin dry cry by spy");
        haiku.makeArray();
        expect(haiku.countSyllables(haiku.words1)).toEqual(4);
        expect(haiku.countSyllables(haiku.words2)).toEqual(3);
        expect(haiku.countSyllables(haiku.words3)).toEqual(8);
    });
    test('It should count words ending in "es" and "ed" as one syllable' , () => {
        haiku = new Haiku("a bone bread gym fixed", "coin breathe my grazed", "dog rate loud tin dry bork by spy rakes");
        haiku.makeArray();
        expect(haiku.countSyllables(haiku.words1)).toEqual(5);
        expect(haiku.countSyllables(haiku.words2)).toEqual(4);
        expect(haiku.countSyllables(haiku.words3)).toEqual(9);
    });
});