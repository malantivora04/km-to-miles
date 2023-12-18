function convert(){
    let km = parseFloat(document.getElementById("t1").value);
    let milesInKm = 0.621371;
    let miles = km * milesInKm;

    document.getElementById("p1").innerHTML = km + " km = " + miles + " miles";
}