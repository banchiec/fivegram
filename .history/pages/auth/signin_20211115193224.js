import { getProviders, signOut, signIn as SingIntoProvider } from "next-auth/react"

// Browser
function signIn({ providers }) {
    return (
        <div>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => SingIntoProvider(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                    <button onClick={() => signOut(provider.id)}>
                        Sign out{provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

// server
export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }

}

export default signIn