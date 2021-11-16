import { getProviders, signIn } from "next-auth/react"

// Browser

function signIn({ providers }) {
    return (
        <div>
            <h1>I am the signin page</h1>
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
