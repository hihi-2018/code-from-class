import {increment} from "../client/actions"

test("increment actions", ()=> {
    //Arrange
    const expected = {
        type:'INCREMENT',
        count:5
    }
    //Act
    const actual = increment(5)
    //Assert
    expect(actual).toEqual(expected)
})