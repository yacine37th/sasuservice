import { auth, db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const spinnerOverlay = document.getElementById('spinnerOverlay');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

document.querySelector('form').addEventListener('submit', async function (event) {
    event.preventDefault();
    spinnerOverlay.style.display = 'block';


    const fullName = document.getElementById('name').value;
    const familyName = document.getElementById('family-name').value;
    const serviceType = document.getElementById('service-type').value;
    const serviceDescription = document.getElementById('service-description').value;
    const email = document.getElementById('email').value;
    const documents = document.getElementById('documents').files; 
    const payment = document.getElementById('payment').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    try {
        const docRef = await addDoc(collection(db, "serviceRequestsWorker"), {
            fullName: fullName,
            familyName: familyName,
            serviceType: serviceType,
            serviceDescription: serviceDescription,
            email: email,
            payment: payment,
            address: address,
            timestamp: serverTimestamp(),
            serviceType: serviceType,
            serviceFor: "worker",
            phone: phone
        });
        alert("تم إرسال الطلب بنجاح! رقم معرف الطلب الخاص بك هو: " + docRef.id);
        document.querySelector('form').reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.");
    } finally {
        spinnerOverlay.style.display = 'none';
    }
});
