// src/lib/api.ts
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export async function fetchRandomStory(): Promise<string> {
  const res = await fetch(`${API_BASE}/api/kidbot/stories/generate/random`);
  if (!res.ok) throw new Error('Failed to load story');
  const payload = await res.json() as { story: string };
  return payload.story;
}

export async function fetchAllStories(): Promise<{id: string; title: string; content: string}[]> {
  const res = await fetch(`${API_BASE}/api/kidbot/stories`);
  if (!res.ok) throw new Error('Failed to load stories');
  return res.json();
}
