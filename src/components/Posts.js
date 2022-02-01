import { useState, useEffect } from 'react'
import classes from './Post.module.css'

function Post() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<>
			<div className={classes.container}>
				{users.map((users) => (
					<div className={classes.users}>
						<h5>{users.id}</h5>
						<h3>{users.title}</h3>
						<img src={users.thumbnailUrl} />
					</div>
				))}
			</div>
		</>
	)
}
export default Post
