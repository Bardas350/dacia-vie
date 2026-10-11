const progressKey = "dacia-vie-read-topics";

export function getReadTopics() {
  if (typeof window === "undefined") return [];
  try {
    const stored = JSON.parse(window.localStorage.getItem(progressKey) ?? "[]");
    return Array.isArray(stored) ? stored.filter((slug): slug is string => typeof slug === "string") : [];
  } catch {
    return [];
  }
}

export function markTopicRead(slug: string) {
  const readTopics = getReadTopics();
  if (!readTopics.includes(slug)) {
    window.localStorage.setItem(progressKey, JSON.stringify([...readTopics, slug]));
  }
}

export function clearReadTopics() {
  window.localStorage.removeItem(progressKey);
}
