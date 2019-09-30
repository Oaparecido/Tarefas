// //  REQUISIÇÕES AJAX
// var xhr = new XMLHttpRequest();

// xhr.open('GET','https://api.github.com/users/diego3g');
// xhr.send(null);

// xhr.onreadystatechange = function() { 
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText));
//     } else {
        
//     }
// }


// PROMISSES 
// var minhaPromise = function() {
//     return new Promise(function(resolve, reject)  {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET','https://api.github.com/users/diego3g');
//         xhr.send(null);

//         xhr.onreadystatechange = function() { 
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else { 
//                     reject('Erro na requisiçao')
//                 }
//             }
//         }
//     })
// }


// // AXIOS
// // o axios é um XMLHttpRequest por debaixo do pano

// axios.get('https://api.github.com/users/diego3g')
//     .then(function(response){
//         console.log(response);
        
//     })
//     .catch(function(error){
//         console.warn(error);
//     });    