interface Topic {
	title: string
	slug: string
	description: string
	posts: any[]
}

const topics: Topic[] = [
	{
		slug: 'tech',
		title: 'Technology',
		description: 'I follow the progress of computers and computing, and also like take look into to the past.',
		posts: []
	},
	{
		slug: 'programming',
		title: 'Programming',
		description: 'All sorts of coding related that may touch on things about the web, HTML, CSS, JavaScript.',
		posts: [],
	},
	{ slug: 'games', title: 'Games', description: 'Writings about games, most likely old games.', posts: [] },
	{
		slug: 'modding',
		title: 'Modding',
		description: 'Modding games and reverse engineering is something I occasionally love to do!',
		posts: [],
	},
	{
		slug: 'autism',
		title: 'Autism',
		description:
			'In 2021 I realized the INTJ "Mastermind" result I always get in personality tests means I am probably autistic.',
		posts: [],
	},
]

export function getTopics(getPosts: (topic: Topic, pathname: string) => any[]): Topic[] {
	return topics.map((topic: Topic) => ({
		...topic,
		posts: getPosts(topic, `/topics/${topic.slug}/`),
	}))
}
