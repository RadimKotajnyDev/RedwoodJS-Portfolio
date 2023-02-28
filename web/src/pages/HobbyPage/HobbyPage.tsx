import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HobbyPage = () => {
  return (
    <>
      <MetaTags title="Hobby" description="Hobby page" />

      <h1>HobbyPage</h1>
      <p>
        Find me in <code>./web/src/pages/HobbyPage/HobbyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>hobby</code>, link to me with `
        <Link to={routes.hobby()}>Hobby</Link>`
      </p>
    </>
  )
}

export default HobbyPage
