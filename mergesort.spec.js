describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([2, 4])).toEqual( [[2],[4]] )
      expect(split([2, 4, 5, 7, 1]).length).toEqual(2)
    });
  });