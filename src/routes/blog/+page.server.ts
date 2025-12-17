import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// از import.meta.glob برای پیدا کردن تمام فایل‌های .md در پوشه posts استفاده می‌کنیم
	const modules = import.meta.glob('/src/lib/posts/*.md');

	const posts = await Promise.all(
		Object.entries(modules).map(async ([path, resolve]) => {
			const { metadata } = (await resolve()) as { metadata: any };
			// نام فایل را از مسیر استخراج می‌کنیم (بدون پسوند .md)
			const slug = path.split('/').pop()?.slice(0, -3);

			return {
				slug,
				title: metadata.title || slug,
				date: metadata.date || 'تاریخ نامشخص'
			};
		})
	);

	// مقالات را بر اساس تاریخ، از جدید به قدیم مرتب می‌کنیم
	const sortedPosts = posts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return { posts: sortedPosts };
};
