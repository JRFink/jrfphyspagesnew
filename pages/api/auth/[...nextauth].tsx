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