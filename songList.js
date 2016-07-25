console.log("hello")
document.getElementById("listMusic").addEventListener("click", (e)=> {
  console.log("listmusic")
  document.getElementById("addMusicView").className = "hidden";
  document.getElementById("listMusic").className = "selected";
});

document.getElementById("addMusic").addEventListener("click", (e)=> {
  document.getElementById("listMusicView").className = "hidden";
  document.getElementById("addMusic").className = "selected";
  console.log("addmusic");
});

// <h2> Smooth </h2>
//       <ul class="songStats">
//         <li> FGL | </li>
//         <li> Dig Your Roots | </li>
//         <li> Country </li>
//       </ul>

// var songContainer = document.getElementById("songContainer");


// var removeChar = []
// for(i=0; i<songs.length; i++) {
//   removeChar.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""));
// }
// console.log(removeChar)

// var finalArray = [];
// for(i=0; i<removeChar.length; i++) {
//   finalArray.push(removeChar[i].replace(">", "-"))
//   songContainer.innerHTML +=
//     `<p> ${finalArray[i]} </p>`
// }



