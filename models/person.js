// Your Person class goes here!
class Person {

        constructor(firstName, surname, dob) {
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        this.surname = surname
        this.dob = dob
        this.email = []
        this.phoneNumber = []
        }

        fullname() {
            return this.firstName + ' ' + this.surname
        }

        addEmail(email) {
            this.email.push(email)
        }
        addphoneNumber(phoneNumber) {
            this.phoneNumber.push(phoneNumber)
        }
        returnFormattedDetails() {
 const emailList = "- " + this.email.join("\n - ")
 const phoneList = "- " + this.phoneNumber.join("\n - ")
 return `${this.fullname()}
 ----------
 DOB: ${this.dob}

 Email Addresses:
 ${emailList}

 Phone Numbers:
 ${phoneList}` 
 }
         
}

module.exports = Person