import Form from '../components/Form/Form'

const Home = ({ loggedIn, setLoggedIn, user, token }) => {
    return <Form loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} token={token} />
}

export default Home