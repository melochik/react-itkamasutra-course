let grundState = {
    users: [
        //     { name: "Ivan", followed: false, id: "1", describe: "hi, ich habe diese Site gemacht", img: "https://images.genius.com/fc08c1044e257dc664ca6ffbd0393476.1000x1000x1.jpg", location: { city: "München", country: "Deutschland" } },
        //     { name: "Mary", followed: true, id: "2", describe: "holla, yo soy Mary", img: "https://images.genius.com/fc08c1044e257dc664ca6ffbd0393476.1000x1000x1.jpg", location: { city: "Rio", country: "Brazile" } },
        //     { name: "Mark", followed: false, id: "3", describe: "hey, i like football", img: "https://images.genius.com/fc08c1044e257dc664ca6ffbd0393476.1000x1000x1.jpg", location: { city: "London", country: "UK" } },
        //     { name: "Vendi", followed: true, id: "4", describe: "u cute, <3 ", img: "https://images.genius.com/fc08c1044e257dc664ca6ffbd0393476.1000x1000x1.jpg", location: { city: "Kiev", country: "Ukraine" } },
    ]
}
export let usersReducer = (state = grundState, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const follow = (id) => ({ type: "FOLLOW", id })
export const unFollow = (id) => ({ type: "UNFOLLOW", id })
export const setUsers = (users) => ({ type: "SET_USERS", users })