export class Product {
    productId:number;
    productName:string;
    cost:number;
    unitsInHand:number;
    category:string;

    constructor(
        productId:number,
        productName:string,
        cost:number,
        unitsInHand:number,
        category:string
    )
    {
        this.productId = productId;
        this.productName = productName;
        this.cost = cost;
        this.unitsInHand = unitsInHand;
        this.category = category;
    }
}// class end
