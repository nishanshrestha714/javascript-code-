// Callback Hell in JavaScript
// Callback hell refers to a situation in JavaScript where multiple nested callback functions make the code difficult to read and maintain. This often occurs when asynchronous operations are chained together, leading to deeply nested structures that can be hard to follow.

// Example of Callback Hell































// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { id: 1, name: 'nishan' };
//         callback(data);
//     }, 2000);   
// }
// fetchData((data) => {
//     console.log('Data fetched:', data);     
//     fetchData((moreData) => {
//         console.log('More data fetched:', moreData);
//         fetchData((evenMoreData) => {
//             console.log('Even more data fetched:', evenMoreData);
//             // This nesting can continue, leading to "callback hell"
//         }
//         );
//     }
//     );
// });


