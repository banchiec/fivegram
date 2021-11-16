import React from 'react'
import Link from 'next/link'

export default function Proyects() {
    return (
        <div>
            <Link href={`/proflle/${encodeURIComponent(proyects.slug)}`} >
                <a>
                    producto 1

                </a>
            </Link>
        </div>
    )
}
