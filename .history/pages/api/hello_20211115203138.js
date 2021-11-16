// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function hello({ }) {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default function helloAPI(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export default hello()