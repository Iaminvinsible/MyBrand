/////ALERT BOX ///////////////


 var alerted = sessionStorage.getItem('alerted') || '';
     if (alerted != 'yes') {
      alert("Stay Safe and Stay Happy \n ~Ashwin Uniyal");
      sessionStorage.setItem('alerted','yes');
    }
