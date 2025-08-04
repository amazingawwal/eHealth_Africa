// PART 1
// function fetchDataWithCallback(callback) {
//     setTimeout(function() {
//     callback()
//   }, 2000);
// }

// fetchDataWithCallback(()=>console.log("Data fetched"))



// PART 2
let error = false;

function fetchDataWithCallback(callback) {
    setTimeout(function() {
        try {
            if(error){
                throw new Error("Error: Fetch failed")
            }
            callback()
        } catch (error) {
            console.error(error)
        }
  }, 2000);
}
fetchDataWithCallback(()=>console.log("Data fetched"))