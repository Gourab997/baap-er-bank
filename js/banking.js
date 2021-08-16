document.getElementById('diposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input')
    const newdepositAmountText = depositInput.value
    const newdepositAmount = parseFloat(newdepositAmountText)


    const depositTotal = document.getElementById('deposit-total')

    const previousDepositAmount = depositTotal.innerText
    const newDepositTotal = parseFloat(previousDepositAmount) + newdepositAmount

    depositTotal.innerText = newDepositTotal;

    //clear the deposit input
    depositInput.value = ''


    //update account
    const balanceTotal = document.getElementById('balance-total')

    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = previousBalanceTotal + newdepositAmount;
    balanceTotal.innerText = newBalanceTotal
})



//handle withdraw handle
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value
    const newWithdrawAmount = parseFloat(withdrawAmountText)
    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawText)
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal

    withdrawInput.value = ''


    //update account
    const balanceTotal = document.getElementById('balance-total')

    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal
})
