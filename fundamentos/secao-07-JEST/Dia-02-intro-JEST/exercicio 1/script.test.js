const myRemove = require('./script')

test('Removido valor de ', ()=>{
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})
test('Removido valor de ', ()=>{
    expect(myRemove([1, 2, 3, 4], 5)).not.toEqual([1, 2, 4])
})