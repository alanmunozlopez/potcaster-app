import { unEscape } from './utils';

describe('utils', () => {
  describe('unEscape', () => {
    it('should return the same input string when "replace" it is not necessary', () => {
      const inputText =
        'A Strong Man Does not Need To Read The Future. He Makes His Own.';

      const returnedString = unEscape(inputText);

      expect(returnedString).toEqual(inputText);
    });

    it('should return the correct string when "replace" is necessary', () => {
      const inputText = `&lt;p&gt;&quot;It&#39;s me Mario! &amp; me Luigi!&quot;&lt;/p&gt;`;
      const expectedString = `<p>"It's me Mario! & me Luigi!"</p>`;

      const returnedString = unEscape(inputText);

      expect(returnedString).toEqual(expectedString);
    });
  });
});
