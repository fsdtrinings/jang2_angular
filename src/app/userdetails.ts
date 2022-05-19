export class UserDetails {
    firstName:string;
    lastname:string;
    houseAddress:string;
    city:string;
    panNumber:string;
    mobileNumber:number;

    constructor(
        firstName:string,
        lastname:string,
        houseAddress:string,
        city:string,
        panNumber:string,
        mobileNumber:number
    )
    {
        this.firstName = firstName;
        this.lastname = lastname;
        this.houseAddress = houseAddress;
        this.city = city;
        this.panNumber = panNumber;
        this.mobileNumber = mobileNumber;
    }
}
