import { PostPreview } from '@/types/PostPreview';

const INNERGARDEN_API = process.env.NEXT_PUBLIC_INNERGARDEN_API;

export default async function fetchPostPreviews(
  sections: string[]
): Promise<PostPreview[]> {
  try {
    const response = await fetch(INNERGARDEN_API + `/posts/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch post previews: ${response.statusText}`);
    }

    const allPosts: PostPreview[] = await response.json();

    const filteredAndSortedPosts = allPosts
      .filter((post) => sections.includes(post.section))
      .sort(
        (a, b) =>
          new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
      );

    return filteredAndSortedPosts;
  } catch (error) {
    console.error('Error fetching post previews:', error);
    throw error;
  }
}
