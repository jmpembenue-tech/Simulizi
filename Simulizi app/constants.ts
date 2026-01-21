
export const PRICING = {
  EPISODE_COST_TZS: 200,
  SERVICE_FEE_TZS: 50,
  WRITER_NET_TZS: 150,
  FREE_EPISODES_LIMIT: 5,
};

export const MOCK_USER_ID = "writer_123";
export const MOCK_READER_ID = "reader_456";
export const MOCK_ADMIN_ID = "admin_789";

export const INITIAL_STORIES: any[] = [
  {
    id: "s1",
    title: "The Silent Forest",
    authorId: "writer_123",
    authorName: "John Doe",
    description: "A mysterious journey into the heart of a whispering woods.",
    coverImage: "https://picsum.photos/seed/forest/400/600",
    isPaid: true,
    status: 'approved',
    type: 'text',
    createdAt: Date.now(),
    episodes: Array.from({ length: 10 }, (_, i) => ({
      id: `e1_${i}`,
      storyId: "s1",
      title: `Chapter ${i + 1}: The Awakening`,
      content: `This is the detailed content for chapter ${i + 1}. In this world, the trees speak in riddles and the shadows have memories.`,
      order: i + 1,
    })),
  },
  {
    id: "s2",
    title: "Urban Echoes",
    authorId: "writer_444",
    authorName: "Jane Smith",
    description: "Jazz, neon lights, and a city that never sleeps.",
    coverImage: "https://picsum.photos/seed/city/400/600",
    isPaid: false,
    status: 'approved',
    type: 'audio',
    createdAt: Date.now() - 86400000,
    episodes: [
      { id: "e2_1", storyId: "s2", title: "Part 1: The First Note", content: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", order: 1 }
    ],
  }
];
