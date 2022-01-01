const KEYS ={
    user:'user',
    userId:'userId'
}

export const getDepartmentCollection = ()=>([
    { id: '1', title: '😁❤️' },
    { id: '2', title: 'MAYBE🙄🙄' },
    { id: '3', title: 'HELL NAWW😒😡😡' },
    { id: '4', title: 'DID U EVEN APPLY FAM!!🤡🤡👿' },
])

export function insertUser(data) {
    let user=getAllUser();
    data['id'] = generateUserId()
    user.push(data)
    localStorage.setItem(KEYS.user,JSON.stringify(user))
}

export function generateUserId() {
    if (localStorage.getItem(KEYS.userId) == null)
        localStorage.setItem(KEYS.userId, '0')
    var id = parseInt(localStorage.getItem(KEYS.userId))
    localStorage.setItem(KEYS.userId, (++id).toString())
    return id;
}

export function getAllUser() {
    if (localStorage.getItem(KEYS.user) == null)
        localStorage.setItem(KEYS.user, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.user));
}
// export function getAudio(data){
//     let user=getAllUser();
//     data['id'] = generateUserId()
//     user.push(data)
//     localStorage.setItem(KEYS.user,JSON.stringify(user))
// }