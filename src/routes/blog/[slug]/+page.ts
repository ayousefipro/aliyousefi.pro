    import { error } from '@sveltejs/kit';
    import type { PageLoad } from './$types';

    export const load: PageLoad = async ({ params }) => {
    	try {
    		// به صورت داینامیک ماژول Markdown مربوط به slug را import می‌کنیم
    		const post = await import(`../../../lib/posts/${params.slug}.md`);

    		return {
    			// محتوای رندر شده HTML توسط mdsvex
    			content: post.default,
    			// متادیتای frontmatter
    			meta: post.metadata
    		};
    	} catch (e) {
    		// اگر فایلی با آن slug پیدا نشد، خطای 404 را برمی‌گردانیم
    		throw error(404, `پستی با آدرس ${params.slug} پیدا نشد.`);
    	}
    };
