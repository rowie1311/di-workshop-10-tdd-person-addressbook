const chai = require('chai')
const expect = chai.expect


// Your Person test goes here!
const Person = require('../models/person.js')

describe('Person',() => {
    it('should initialize properly', () => {
        var person = new Person('Joe', 'Bloggs','1 Jan 1990')
        expect(person.firstName).to.equal('Joe')
        expect(person.surname).to.equal('Bloggs')
        expect(person.dob).to.equal('1 Jan 1990')
        expect(person.email).to.deep.equal([])

    })

    it('should capitalize first name', () => {
        var person = new Person('amy', 'nother','1 Jan 1990')
        expect(person.firstName).to.equal('Amy')
        
        
})

it('should return a full name', () => {
    var person = new Person('Joe', 'Bloggs','1 Jan 1990')
    expect(person.fullname()).to.equal('Joe Bloggs')
    
    
})
it ('should accept new emails and add email to email array', () => {
    var person = new Person('Joe', 'Bloggs','1 Jan 1990')
    person.addEmail('joe@example.com')
    person.addEmail('joeagain@example.com')

    expect (person.email).to.deep.equal(['joe@example.com', 'joeagain@example.com'])
})
it ('should accept new phone numbers into phone number array', () => {
    var person = new Person('Joe', 'Bloggs','1 Jan 1990')
    person.addphoneNumber('07715833815')
    person.addphoneNumber('01536401372')

    expect (person.phoneNumber).to.deep.equal(['07715833815', '01536401372'])
})

})