const getLocationBtn = document.querySelector("#getLocationBtn");
const loadingSpinner = document.querySelector("#loadingSpinner");
const locationResult = document.querySelector("#locationResult");

getLocationBtn.addEventListener("click", () =>{
    loadingSpinner.style.display = 'block';
    loadingSpinner.innerHTML = '';

    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                //success handler
                loadingSpinner.style.display = 'none';
                showlocation(position);
            },
            (error) => {
                loadingSpinner.style.display = 'none';
                handleError(error);
            }
        );
    }else{
        loadingSpinner.style.display = 'none';
        locationResult.innerHTML = '<p class="error">Geoloaction is not supported by your browser.</p>';
    }
});

function showlocation(position){
    locationResult.innerHTML = 
        `<h3>Your Location Coordinates</h3>
        <p><strong>Latitude:</strong> ${position.coords.latitude}</p>
        <p><strong>Longitude:</strong> ${position.coords.longitude}</p>
        <p><strong>Accuracy:</strong> ${position.coords.accuracy} meters</p>`;
}

function handleError(error){
    let errorMessage = '';

    switch(error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "You denied the location request. Enable permissions in your browser settings.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable. Check your network connection.";
            break;
        case error.TIMEOUT:
            errorMessage = "The request to get location timed out. Please try again.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage = "An unknown error occurred.";
            break;
    }
    
    locationResult.innerHTML = `<p class="error">${errorMessage}</p>`;
}