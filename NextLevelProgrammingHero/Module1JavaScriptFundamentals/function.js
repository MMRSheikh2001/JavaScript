

function total( price =10, quantity ){

    let cost=price*quantity;
    console.log(cost);
    return cost;
}
const spend=total(16,12);

total(null,60);

console.log(spend);