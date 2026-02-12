const stripe = Stripe('pk_test_51SyAkLRrVJK1Qk2xinhcyv0qZUY6rWGGeo64Jt8DcXIkQhVflTAapNty1F7qaEDAKgqN2k8sNFvhWSRSUwwMo3Lz001aviTJ6D');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});