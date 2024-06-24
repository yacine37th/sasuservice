// import { auth, db } from './firebase-config.js';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { collection, addDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";


// const navbarToggle = document.querySelector('.navbar-toggle');
// const navbarMenu = document.querySelector('.navbar-menu');

// navbarToggle.addEventListener('click', () => {
//     navbarMenu.classList.toggle('active');
// });


// document.getElementById('serviceForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     var fullName = document.getElementById('fullName').value;
//     var email = document.getElementById('email').value;
//     var phoneNumber = document.getElementById('phoneNumber').value;
//     var serviceType = document.getElementById('serviceType').value;
//     var details = document.getElementById('details').value;

//     db.collection("serviceRequests").add({
//         fullName: fullName,
//         email: email,
//         phoneNumber: phoneNumber,
//         serviceType: serviceType,
//         details: details,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp()
//     })
//         .then(function (docRef) {
//             alert("تم إرسال الطلب بنجاح! رقم معرف الطلب الخاص بك هو: " + docRef.id);
//             document.getElementById('serviceForm').reset();
//         })
//         .catch(function (error) {
//             alert("حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.");
//             console.error("Error adding document: ", error);
//         });
// });
import { auth, db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

document.querySelector('form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const fullName = document.getElementById('name').value;
    const familyName = document.getElementById('family-name').value;
    const serviceType = document.getElementById('service-type').value;
    const serviceDescription = document.getElementById('service-description').value;
    const email = document.getElementById('email').value;
    const documents = document.getElementById('documents').files; // handle files appropriately
    const payment = document.getElementById('payment').value;
    const address = document.getElementById('address').value;

    try {
        const docRef = await addDoc(collection(db, "serviceRequests"), {
            fullName: fullName,
            familyName: familyName,
            serviceType: serviceType,
            serviceDescription: serviceDescription,
            email: email,
            payment: payment,
            address: address,
            timestamp: serverTimestamp(),
            serviceType : "Client"
        });
        alert("تم إرسال الطلب بنجاح! رقم معرف الطلب الخاص بك هو: " + docRef.id);
        document.querySelector('form').reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.");
    }
});
