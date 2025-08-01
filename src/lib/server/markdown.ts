import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export async function getMarkdownFilePath(fileName: string): Promise<{ html: string }> {
	const filePath = path.join(process.cwd(), 'src/lib/writeups', fileName);
	console.log(`Looking for file: ${filePath}`);
	if (!fs.existsSync(filePath)) {
		throw new Error(`File not found: ${filePath}`);
	}
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const htmlContent = await marked.parse(fileContent);
	return { html: htmlContent };
}
