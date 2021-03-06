class Customer {
    
    constructor(private _firstName: string, private _lastName: string) {
    }
 
    public get firstName() : string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }
    
    public get lastName() : string {
        return this._lastName;
    }

    public set lastName(v : string) {
        this._lastName = v;
    }
    
}

// instanciar
let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);