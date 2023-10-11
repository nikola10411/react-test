import { useAuth } from "../hooks/auth";

function Home() {
    const {logout} = useAuth()
    return (
        <div className="Home">
            <h1>Hi Marcus!</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    );
}

export default Home;