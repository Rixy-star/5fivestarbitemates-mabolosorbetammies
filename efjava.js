document.getElementById('paymentMode').addEventListener('change', function () {
    const gcashField = document.getElementById('gcashField');
    gcashField.classList.toggle('hidden', this.value !== 'E-wallet');
  });
  
  document.getElementById('submitButton').addEventListener('click', function () {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const address = document.getElementById('address').value.trim();
    const product = document.getElementById('product').value;
    const paymentMode = document.getElementById('paymentMode').value;
    const gcashNumber = document.getElementById('gcashNumber').value.trim();
    const deliveryService = document.getElementById('deliveryService').value;
    const voucher = document.getElementById('voucher').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (firstName && lastName && address && product && paymentMode && deliveryService) {
      document.getElementById('summaryName').textContent = `${firstName} ${lastName}`;
      document.getElementById('summaryAddress').textContent = address;
      document.getElementById('summaryProduct').textContent = product;
      document.getElementById('summaryPayment').textContent = paymentMode;
  
      if (paymentMode === 'E-wallet' && gcashNumber) {
        document.getElementById('summaryGcash').classList.remove('hidden');
        document.getElementById('summaryGcashNumber').textContent = gcashNumber;
      }
  
      document.getElementById('summaryDelivery').textContent = deliveryService;
  
      if (voucher) {
        document.getElementById('summaryVoucher').classList.remove('hidden');
        document.getElementById('summaryVoucherCode').textContent = voucher;
      }
  
      if (message) {
        document.getElementById('summaryMessage').classList.remove('hidden');
        document.getElementById('summaryOrderMessage').textContent = message;
      }
  
      document.getElementById('formContainer').classList.add('hidden');
      document.getElementById('orderSummary').classList.remove('hidden');
    } else {
      alert('Please fill in all required fields.');
    }
  });
  