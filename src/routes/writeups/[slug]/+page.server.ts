import { getMarkdownFilePath } from "$lib/server/markdown";
import type { PageServerLoad } from "./$types";
import { writeups } from "../../../data/writeups";
import { error } from "@sveltejs/kit";

export const prerender = true;

export async function entries() {
	return writeups.map(writeup => ({
		slug: writeup.slug,
		title: writeup.title,
		description: writeup.summary,
		file: writeup.file,
	}));
}

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;
	const writeup = writeups.find(w => w.slug === slug);

	if (!writeup) {
		error(404, `Writeup not found: ${slug}`);
	}

	console.log(writeup.title)
	try {
		const { html } = await getMarkdownFilePath(writeup.file);
		return {

			html: html,
			slug: slug,
			title: writeup.title,
			date: writeup.date,
			summary: writeup.summary,
			url: writeup.url,
			nextUrl: writeups[writeups.indexOf(writeup) + 1]?.url || null,
			prevUrl: writeups[writeups.indexOf(writeup) - 1]?.url || null,

		}

	} catch (err) {

		throw error(500, `Error loading writeup: ${err instanceof Error ? err.message : 'Unknown error'}`);
	}


}
