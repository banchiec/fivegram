// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function hello({ }) {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default async function helloAPI(req, res) {
  res.rend()
  //res.status(200).json({ name: 'John Doe' })
}

export default hello()