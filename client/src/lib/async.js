
// const first = () => second()
// const second = () => third()
// const third = () => {
//   setTimeout(() => console.trace(), 4000)
//   console.trace()
// }
// const fourth = () => console.trace()
// first()

// const createUser = (user) => {
//   checkAccess('create.user', (err, result) => {
//       if (err) {
//         sendMessage('user has no access')
//         return
//       }
//       findUserbyEmail(user.email, (err, foundUser) => {
//         if (err) {
//           sendMessage('unknown database error')
//           return
//         }
//         if (foundUser) {
//           // do something
//         }
//         saveUser(user, (err, savedUser) => {
//           if (err) {
//             sendMessage('saved user')
//             return
//           }
//         })
//     })
//   })
// }
//
// const createUserAsync = (user) => {
//   return checkAccess('create.user')
//     .then(() => findUserByEmail(user.email))
//     .then(() => foundUser => {
//       if (foundUser) {
//         throw new Error('duplicate user')
//       }
//       return saveUser(user)
//     })
//     catch(err => {
//       // handle errors here
//     })
// }
//
// try {
//   // do stuff that might throw
// } catch (err) {
//   // handle errors
// }
const saveToDb = (value) => {
const callback = (resolve, reject) => {
  const runAfterTimeout = () => {
    const divByFive = Date.now() % 5 === 0
    if (divByFive) {
      reject('Database save failed')
    } else {
      resolve('Save Successful: ' + value)
    }
  }
  setTimeout(runAfterTimeout, 3000)
}
  return new Promise(callback)
}
saveToDb('foo')
  .then(msg => {
    return saveToDb('bademail.com')
  })
  .then(msg => {
    console.log(msg)
    return saveToDb('anotheremail.com')
  })
  .then(msg => {
    console.log(msg)
    return saveToDb('yetanother.com')
  })
  .then(msg => {
    console.log(msg)
  })
  .catch(err => console.log(err))
