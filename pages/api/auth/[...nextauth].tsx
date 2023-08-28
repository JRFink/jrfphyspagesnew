// callbacks: {
//     async signIn({ user, account, profile, email, credentials }) {
//         const isAllowedToSignIn = true 
//         if (isAllowedToSignIn) {
//             return true
//         }
//         else {
//             return false
//         }
//     }, 
//     async redirect({ url, baseUrl}) {
//         if (url.startsWith("/")) return `${baseUrl}${url}`
//         else if (new URL(url).origin === baseUrl) return url
//         return baseUrl
//     }, 
//     async session({ session, user, token }) {
//         session.accessToken = token.accessToken
//         return session
//     }, 
//     async isJSDocThrowsTag({ token, user, account, profile, isNewUser }) {
//         return token
//     },
//     async isJSDocThrowsTag({ token, account }) {
//         if (account) {
//             token.accessToken = account.access_token
//         }
//         return token
//     }
// }

/* 

come to page flow

1. user enters jrfink.net 

2. get ip address
3. get browser info 
4. get local, session, cookie storage 
5. if ip on block list 
    a. block 
6. based on browser 
    a. do something 
7. based on local, session, and cookie storage 
    a. check local storage 
    b. check session storage 
    c. check cookie storage 
8. if everything checks 


sign up flow 

1. get info 
    a. get first name 
    b. validate first name 
    c. save fname to local 
    d. get last name 
    e. validate last name 
    f. save l name to local 
    g. get email 
    h. validate email 
        i. reg exp 
        ii. escape all chars 
        iii. check if email exists in db 
            1. if so, say enter different email 
        iv. if not, save to local 
    i. get phone 
    j. validate phone 
        i. reg exp 
        ii. check if in db 
            1. if so, new phone 
            2. if no, save to db 
        iii. conf info saved 
2. mfa for email 
    a. issue random string 
    b. send random string 
    c. user enters random string 
        i. user enters incorrect string 
            1. try again, one more try 
            2. if fail, generate new code 
            3. if success, proceed to mfa phone 
3. mfa for phone number 
    a. issue random string 
    b. send random string 
    c. user enters random string 
        i. users enters incorrect string 
            1. one more try 
            2. if fail, new string 
            3. if succeed, save all local to db 
            4. confirm everything saved to db 
4. issue token for access 
    a. save token somewhere 
    b. set expiry time for token 
    c. will token be encrypted? what does that mean? 
5. have user set avatar 
6. set icon and name to user stuff 
    a. set icon 
    b. set name 
7. redirect user to home page w icon and name set 
8. user navigates around the site 
    a. check token on each page get 
    b. if token valid
        i. allow access
    c. if invalid 
        ii. deny access 
9. destroy token when sign out, close browser, or 45 min 


 login flow 

1. make sure has email format 
    a. @ symbol
    b. escape characters 
    c. make sure has .com 
2. make sure pw is min length 
3. escape all chars 
4. hash pw 
5. find the hash that corresponds to the email 
6. get the hash 
7. comparethe two hashes 
    a. if not eq 
        i. say try again 
    b. if eq 
        i. issue token 
        ii. reidrect to home page 
        iii. change avatar to acct name 


1. log in every time

  

*/
