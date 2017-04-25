const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);    
    
    expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(2);
    
    expect(res).toBe(4).toBeA('number');
});

it('should async square a number', (done) => {
    utils.asyncSquare(6, (product) => {
        expect(product).toBe(36).toBeA('number');
        done();
    })
});

it('should set first and last name', () => {
    var user = {
        age: 25,
        location: 'Lehi'
    }
    
    var res = utils.setName(user, 'Braxton Ward');
    expect(res).toInclude({
        firstName: 'Braxton',
        lastName: 'Ward'
    }).toBeA('object');
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Braxton'}).toEqual({name: 'Braxton'});
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Braxton',
//         age: 25,
//         location: 'Lehi'
//     }).toExclude({
//         age: 23
//     })
// });
