const myQRCode = document.getElementById('QrCode');

const qr = new QRCode(myQRCode, 
  {
      text: 'https://qr.me-qr.com/3PDAZRIA',
      width: 150,
      height: 150,
      colorDark: '#ffffff',
      colorLight:'#077FFF',
      correctLevel : QRCode.CorrectLevel.H
  });;
