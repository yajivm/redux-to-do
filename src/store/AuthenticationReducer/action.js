// export function AC_LOGIN(email, password) {
//     return async dispatch => {
//         let result = await fetch(Config.loginUrl, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 email,
//                 password
//             })
//         });
//         console.log('result', result);
//         if (result.status === 200) {
//             const response = await result.json();
//             if (response) {
//                 console.log("Result of the login request", response.user);
//                 sessionStorage.setItem("user", JSON.stringify(response.user));
//                 dispatch({
//                     type: "LOGIN RESPONSE",
//                     userDetails: response
//                 });
//             }
//         } else if (result.status === 400) {
//             return result.json().then(res => {
//                 dispatch({
//                     type: "LOGIN ERROR",
//                     loginError: res.error
//                 });
//             });
//         } else {
//             dispatch({
//                 type: "LOGIN ERROR",
//                 loginError: "Something went wrong"
//             });
//         }
//     };
// }