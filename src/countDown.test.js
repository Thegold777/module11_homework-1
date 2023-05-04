import { countDown } from './countDown.js'

describe('test for countDown function', () => {
   it('should count down with numbers not equal 0', () => {
      expect(countDown(5)).toBe('54321'); // pass
   }),
      it('should count down with numbers equal 0', () => {
         expect(countDown(0)).toBe("0"); // fail, for correct shoul be ""
      });
})