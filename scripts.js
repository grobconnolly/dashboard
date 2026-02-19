function showTab(tab) {
    const myInv = document.getElementById('myInvestments');
    const opp = document.getElementById('opportunities');
    const btnMy = document.getElementById('btnMyInvestments');
    const btnOpp = document.getElementById('btnOpportunities');

    if (tab === 'myInvestments') {
      myInv.style.display = 'block';
      opp.style.display = 'none';
      btnMy.classList.add('active');
      btnOpp.classList.remove('active');
    } else {
      myInv.style.display = 'none';
      opp.style.display = 'block';
      btnOpp.classList.add('active');
      btnMy.classList.remove('active');
    }
  }