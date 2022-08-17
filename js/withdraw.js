document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const previousWithdrawElement = document.getElementById('withdraw-data');
    const previousWithdrawTotalString = previousWithdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWhithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    previousWithdrawElement.innerText = currentWhithdrawTotal;


    const balanceTotalElement = document.getElementById('balance-data');
    const previousDeposiTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousDeposiTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    withdrawField.value = '';

})
