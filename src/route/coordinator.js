export const goToLogin = (history) => {
    history.push("/login")
}

export const goToFeed = (history) => {
    history.push("/feed")
}

export const goToSignUp = (history) => {
    history.push("/signup")
}

export const goToRestaurant = (history, id) => {
    history.push(`/restaurant/${id}`)
}

export const goToCart = (history) => {
  history.push("/cart");
};

export const goToProfile = (history) => {
  history.push("/perfil");
};

export const goToSearch = (history) => {
  history.push("/search");
};