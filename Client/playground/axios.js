const axios = require('axios')

let data = {
    email: 'test@testingome.com',
    username: 'user1',
    password: '123456'
}
// axios.post('http://localhost:3000/user/register', data)
// .then((response) => {
//     console.log(response.status)
// })
// .catch((err) => {
//     console.log(err, 'user is not in the correct format')
// })


// axios.post('http://localhost:3000/user/login', data)
// .then(response => {
//     console.log(response.headers['x-auth'])
// })
// .catch(err => {
//     console.log('Wrong username or password')
// })

axios.get('http://localhost:3000/private/private', {
    'headers': {
        'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjYzYzdhYTU5NzVhNzFhZTgzZDJlNTAiLCJpYXQiOjE1MzMyNjY0MTJ9.HmmzEDaCbTiPmLXwtu-6mqkFjYfZj6oO2erMIFqVhm8'
    }
})
.then(response => {
    console.log(response.data)
})
.catch(err => {
    console.log('err', err)
})