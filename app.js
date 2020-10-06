e/////ALERT BOX ///////////////


 var alerted = sessionStorage.getItem('alerted') || '';
     if (alerted != 'yes') {
      alert("Welcome to my site :)");
      sessionStorage.setItem('alerted','yes');
    }
