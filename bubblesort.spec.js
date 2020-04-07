describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array with single element', function(){
        expect(bubbleSort([7]) ).toEqual( [7] );
    })
    it('handles an array with multiple elements', function(){
        expect(bubbleSort([4,2,1,6,5,3])).toEqual([1,2,3,4,5,6])
    })
  });

