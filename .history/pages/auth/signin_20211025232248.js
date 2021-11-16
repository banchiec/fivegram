import { getProviders, signIn } from "next-auth/react"

function signin() {
    return (
        <div>
            <h1>I am the signin page</h1>
        </div>
    )
}
export async function getServerSideProps() {
    const providers = getProviders()
}

export default signIn
