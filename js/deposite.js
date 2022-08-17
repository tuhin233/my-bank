document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositeField = document.getElementById('deposit-amount');
    const newDepositAmountstring = depositeField.value;
    const newDepositAmount = parseFloat(newDepositAmountstring);


    const totaldepositElement = document.getElementById('deposit-data');
    let previousDeposiTotalString = totaldepositElement.innerText;
    const previousDeposiTotal = parseFloat(previousDeposiTotalString);
    // console.log(typeof (deposiTotal));
    const currentDepositTotal = previousDeposiTotal + newDepositAmount;
    totaldepositElement.innerText = currentDepositTotal;
    const balanceTotalElement = document.getElementById('balance-data');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousDeposiTotalString);


    const currentBalancetotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalancetotal;





    depositeField.value = '';


})