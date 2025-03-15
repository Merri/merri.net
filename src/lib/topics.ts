import type { MarkdownInstance } from 'astro'

import type { BlogPost } from '$/types/blogPost.ts'

interface Topic {
	title: string
	slug: string
	description: string
	posts: MarkdownInstance<BlogPost>[]
}

const topics: Topic[] = [
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
]

export function getTopics(getPosts: (topic: Topic, pathname: string) => MarkdownInstance<BlogPost>[]): Topic[] {
	return topics.map((topic: Topic) => ({
		...topic,
		posts: getPosts(topic, `/topics/${topic.slug}/`),
	}))
}
