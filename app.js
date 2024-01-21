"use strict";
const totalPrice = ({ price, discount = 0, isInstallment, months }) => {
    if (discount > 1) {
        discount = discount / 100;
    }
    if (isInstallment && months) {
        return Math.round(((price - (price * discount)) / months));
    }
    return price - (price * discount);
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);
