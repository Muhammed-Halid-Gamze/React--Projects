
const name = "Mesut";
const nameMyFriend = "Halid";
const isLoggedIn = true
function Header() {
    return(
        <div>
            <h1>
                Ben h1 başlığıyım <br />
            </h1>
            <p>
                ismim {name} <br /> 
                { isLoggedIn 
                ? `Arkadaşımın adı ${nameMyFriend}` 
                : "Giriş yapmadınız"}

            </p>
        </div>
    )
}

export default Header;