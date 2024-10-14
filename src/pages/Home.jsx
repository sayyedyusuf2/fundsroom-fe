import Form from '../components/Form/Form'

const Home = ({ loggedIn, setLoggedIn, user, token }) => {
    return <Form user={user} />
}

export default Home