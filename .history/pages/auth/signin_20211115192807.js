import { getProviders, getSession, signIn as SingIntoProvider } from "next-auth/react"

// Browser
function signIn({ providers }) {
    return (
        <div>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => SingIntoProvider(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

// server
export async function getServerSideProps({ req, res }) {
    const providers = await getProviders()
    const session = await getSession({ req })
    if (session) {
        res.send({
            content: "Nice bro, you start session"
        })


    }

    return {
        props: {
            providers
        }
    }

}

export default signIn