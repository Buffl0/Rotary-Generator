// output variables

let meetingDate = document.getElementById("meeting-date");
let meetingTime = document.getElementById("meeting-time");
let locationName = document.getElementById("location-name");
let streetName = document.getElementById("street-name");
let cityName = document.getElementById("city-name");
let guestFullname = document.getElementById("guest-fullname");
let guestPhoto = document.getElementById("guest-photo");
let guestDescription = document.getElementById("guest-description");

// input variables

let meetingDateInput = document.getElementById("meeting-date-input");
let meetingTimeInput = document.getElementById("meeting-time-input");
let locationNameInput = document.getElementById("location-name-input");
let streetNameInput = document.getElementById("street-name-input");
let cityNameInput = document.getElementById("city-name-input");
let guestFullnameInput = document.getElementById("guest-fullname-input");
let guestPhotoBtn = document.getElementById("guest-photo-btn");
let guestDescriptionInput = document.getElementById("guest-description-input");

// btn variables

let photoUpdateBtn = document.getElementById("photo-update-btn");
let changeTimeBtn = document.getElementById("change-time-btn");
let changeAddressBtn = document.getElementById("change-address-btn");
let submitBtn = document.getElementById("submit-btn");

// other variables 

let previewClip = document.getElementById("preview-clip");
let previewWrapper = document.getElementById("preview-wrapper");
let meetingPlaceWrapper = document.getElementById("meeting-place-wrapper");
let streetNameWrapper = document.getElementById("street-name-wrapper");
let cityNameWrapper = document.getElementById("city-name-wrapper");
let meetingTimeWrapper = document.getElementById("meeting-time-wrapper");

// event listeners


changeAddressBtn.addEventListener("click", () => {

    switch (changeAddressBtn.dataset.active) {
        case "false":
            meetingPlaceWrapper.style.display = "block";
            streetNameWrapper.style.display = "block";
            cityNameWrapper.style.display = "block";
            changeAddressBtn.dataset.active = "true";
            break;
        case "true":
            meetingPlaceWrapper.style.display = "none";
            streetNameWrapper.style.display = "none";
            cityNameWrapper.style.display = "none";
            changeAddressBtn.dataset.active = "false";
            break;
    }
});

changeTimeBtn.addEventListener("click", () => {
    switch (changeTimeBtn.dataset.active) {
        case "false":
            meetingTimeWrapper.style.display = "block";
            changeTimeBtn.dataset.active = "true";
            break;
        case "true":
            meetingTimeWrapper.style.display = "none";
            changeTimeBtn.dataset.active = "false";
            break;
    }
});

//functions

function updateInputValues() {
    meetingDate.innerHTML = meetingDateInput.value;
    meetingTime.innerHTML = meetingTimeInput.value;
    locationName.innerHTML = locationNameInput.value;
    streetName.innerHTML = streetNameInput.value;
    cityName.innerHTML = cityNameInput.value;
    guestFullname.innerHTML = guestFullnameInput.value;
    guestPhoto.style.backgroundImage = guestPhotoInput.value;
    guestDescription.innerHTML = guestDescriptionInput.value;
};


meetingDateInput.addEventListener("input", (e) => {
    meetingDate.innerHTML = e.target.value;
});
meetingTimeInput.addEventListener("input", (e) => {
    meetingTime.innerHTML = e.target.value;
});
locationNameInput.addEventListener("input", (e) => {
    locationName.innerHTML = e.target.value;
});
streetNameInput.addEventListener("input", (e) => {
    streetName.innerHTML = e.target.value;
});
cityNameInput.addEventListener("input", (e) => {
    cityName.innerHTML = e.target.value;
});
guestFullnameInput.addEventListener("input", (e) => {
    guestFullname.innerHTML = e.target.value;
});
// guestPhotoInput.addEventListener("input", (event) => {
//     guestPhoto.style.backgroundImage = `url(${event.target.value})`;
// });
guestDescriptionInput.addEventListener("input", (e) => {
    guestDescription.innerHTML = e.target.value;
});

guestPhotoBtn.addEventListener("input", (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
        guestPhoto.style.backgroundImage = "url('" + reader.result + "')";
    }
    reader.readAsDataURL(file);
    
});
submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Zapobiega domyślnemu przesyłaniu formularza

    const fileNameInput = document.getElementById("file-name-input");
    const fileName = fileNameInput.value.trim() || "ulotka";

    const previewWrapper = document.getElementById("preview-wrapper");
    if (!previewWrapper) {
        console.error("Nie znaleziono sekcji podglądu.");
        return;
    }

    html2canvas(previewWrapper, {
        backgroundColor: null, // Ustawienie tła przezroczystego
        height: 630,
        width: 555,
    }).then(canvas => {
        // Konwertuj canvas na obraz PNG
        const image = canvas.toDataURL("image/png");

        // Tworzenie linku do pobrania
        const link = document.createElement("a");
        link.href = image;
        link.download = `${fileName}.png`;

        // Automatyczne kliknięcie linku, aby pobrać obraz
        link.click();
    }).catch(error => {
        console.error("Wystąpił błąd podczas generowania obrazu:", error);
    });
});
