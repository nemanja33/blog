import Link from "next/link"

const navItem = [
	{
		href: "/",
		text: "Home"
	},
	{
		href: "/blog",
		text: "Blog"
	}
]

export default function Navigation() {
  return(
		<header className="header">
			<div className="wrap">
				<nav className="nav">
					<ul className="nav__list">
						{navItem.map(({ href, text }) => 
							<li className="nav__item" key={href}>
								<Link className="nav__link" href={href}>{text}</Link>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	)
}