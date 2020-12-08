export const goToLogin = (history) => {
    history.push("/login")
}

export const goToFeed = (history) => {
    history.push("/")
}

export const goToSignUp = (history) => {
    history.push("/signup")
}

export const goToRestaurant = (history, id) => {
    history.push(`/restaurant/${id}`)
}