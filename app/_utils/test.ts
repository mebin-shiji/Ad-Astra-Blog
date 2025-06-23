import { Article, ArticleDetails, AuthorDetails, Category } from "./article";

export const articles: Article[] = [
    {
        id: 1,
        title: "Exploring the Cosmos and Beyond. A Journey Through Space and Time.",
        description: "A deep dive into the mysteries of the universe. What lies beyond our solar system?",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 1, name: "Jane Doe" },
        date: new Date("2025-10-01"),
        featured: true,
        categoryKey: "space"
    },
    {
        id: 2,
        title: "The Future of AI",
        description: "How artificial intelligence is shaping our world.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 2, name: "John Smith" },
        date: new Date("2023-10-02"),
        featured: false,
        categoryKey: "space"

    },
    {
        id: 3,
        title: "Climate Change and Its Impact",
        description: "Understanding the effects of climate change on our planet and the ways that we collectively can prevent it.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 3, name: "Alice Johnson" },
        date: new Date("2023-10-03"),
        featured: true,
        categoryKey: "space"

    },
    {
        id: 4,
        title: "Space Exploration Milestones",
        description: "Key achievements in space exploration history.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 4, name: "Bob Brown" },
        date: new Date("2023-10-04"),
        featured: true,
        categoryKey: "space"

    },
    {
        id: 5,
        title: "Quantum Computing Explained",
        description: "An introduction to the principles of quantum computing.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 5, name: "Charlie Davis" },
        date: new Date("2023-10-05"),
        featured: false,
        categoryKey: "space"

    },
    {
        id: 6,
        title: "The Wonders of the Deep Sea",
        description: "Discovering the mysteries of the ocean depths.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 6, name: "David Wilson" },
        date: new Date("2023-10-06"),
        featured: false,
        categoryKey: "space"

    },
    {
        id: 7,
        title: "The Evolution of Spacecraft",
        description: "A look at how spacecraft have evolved over the decades.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 7, name: "Emma Thompson" },
        date: new Date("2023-10-07"),
        featured: true,
        categoryKey: "space"

    },
    {
        id: 8,
        title: "The Science of Black Holes",
        description: "Understanding the enigmatic nature of black holes.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 8, name: "Frank Miller" },
        date: new Date("2023-10-08"),
        featured: true,
        categoryKey: "space"

    },
    {
        id: 9,
        title: "Advancements in Renewable Energy",
        description: "Exploring the latest innovations in renewable energy sources.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 9, name: "Grace Lee" },
        date: new Date("2023-10-09"),
        featured: false,
        categoryKey: "space"

    },
    {
        id: 10,
        title: "The Search for Extraterrestrial Life",
        description: "Examining the possibilities of life beyond Earth.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 10, name: "Hannah Brown" },
        date: new Date("2023-10-10"),
        featured: false,
        categoryKey: "space"

    },
    {
        id: 11,
        title: "The Evolution of Spacecraft",
        description: "A look at how spacecraft have evolved over the decades.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 7, name: "Emma Thompson" },
        date: new Date("2023-10-07"),
        featured: true,
        categoryKey: "space"

    },
    {
        id: 12,
        title: "The Science of Black Holes",
        description: "Understanding the enigmatic nature of black holes.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 8, name: "Frank Miller" },
        date: new Date("2023-10-08"),
        featured: true,
        categoryKey: "space"

    },
    {
        id: 13,
        title: "Advancements in Renewable Energy",
        description: "Exploring the latest innovations in renewable energy sources.",
        imageUrl: "https://picsum.photos/600/800",
        author: { id: 9, name: "Grace Lee" },
        date: new Date("2023-10-09"),
        featured: false,
        categoryKey: "space"

    }
];

export const articleDetails: ArticleDetails[] = [
    {
        id: 1,
        title: "Exploring the Cosmos and Beyond. A Journey Through Space and Time.",
        description: "A deep dive into the mysteries of the universe. What lies beyond our solar system?",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 1,
            name: "Jane Doe",
            bio: "Astrophysicist and science communicator.",
            imageUrl: "https://picsum.photos/500?random=1",
            title: "Software Engineer"
        },
        date: new Date("2025-10-01"),
        featured: true,
        content: "# Exploring the Cosmos and Beyond\n\n\n### A Journey Through Space and Time\n\n![Space Journey](https://picsum.photos/1280/720)\n\n## Introduction\n\nSince the dawn of humanity, we have gazed at the stars with wonder, curiosity, and ambition. The night sky has served as a canvas for myths, a clock for agricultural cycles, and ultimately a gateway to understanding our place in the universe. This article embarks on a journey through the vast cosmos, from the earliest human speculations about the stars to the cutting-edge scientific endeavors pushing the boundaries of time and space.\n\n---\n\n## 1. The Ancient Stargazers\n\n### 1.1 Astronomy Before Telescopes\n\nLong before telescopes or satellites, ancient civilizations charted the skies using only their eyes and primitive tools. The Babylonians tracked planetary movements, the Egyptians aligned pyramids with celestial bodies, and the Mayans developed complex calendars based on astronomical observations.\n\n### 1.2 Myths and Cosmology\n\nMany cultures wove stories around the stars—Greek legends turned constellations into gods and monsters; Hindu cosmology described a cyclic universe; and Chinese astronomy recorded supernovae centuries before modern science could explain them.\n\n> “The cosmos is within us. We are made of star-stuff.”\n> — Carl Sagan\n\n---\n\n## 2. The Scientific Revolution\n\n### 2.1 Copernicus and the Heliocentric Model\n\nIn the 16th century, Nicolaus Copernicus challenged the long-held geocentric model, proposing that the Sun, not Earth, was at the center of the solar system. This radical idea laid the groundwork for a revolution in astronomy.\n\n### 2.2 Galileo and the Telescope\n\nGalileo Galilei’s use of the telescope in the 17th century marked a pivotal moment. He discovered moons orbiting Jupiter, mountains on the Moon, and phases of Venus—evidence that supported the heliocentric model and changed our understanding of the universe.\n\n### 2.3 Newton’s Laws and Gravity\n\nIsaac Newton’s laws of motion and universal gravitation unified the mechanics of the heavens and Earth, allowing for accurate predictions of planetary motion.\n\n---\n\n## 3. The Expanding Universe\n\n### 3.1 Einstein’s Relativity\n\nAlbert Einstein's theory of general relativity, published in 1915, redefined gravity as the curvature of spacetime caused by mass and energy. It provided the theoretical foundation for black holes and the expanding universe.\n\n### 3.2 Hubble and the Redshift\n\nEdwin Hubble’s observations in the 1920s showed that galaxies are moving away from us, implying that the universe itself is expanding. This led to the formulation of the Big Bang theory—a model suggesting the universe began from an incredibly dense and hot state approximately 13.8 billion years ago.\n\n### 3.3 Cosmic Microwave Background\n\nIn 1965, scientists discovered the cosmic microwave background radiation—faint afterglow of the Big Bang. This finding solidified the Big Bang model and became a cornerstone of modern cosmology.\n\n---\n\n## 4. The Mysteries of Dark Matter and Dark Energy\n\nDespite the success of the Big Bang theory, much of the universe remains a mystery.\n\n* **Dark Matter**: This invisible substance makes up about 27% of the universe. Though it doesn’t emit light or energy, its gravitational effects are evident in galaxies and galaxy clusters.\n* **Dark Energy**: Comprising around 68% of the universe, dark energy is believed to be responsible for the accelerating expansion of the cosmos.\n\nWe only understand about 5% of the universe—the rest is dark and largely unknown.\n\n---\n\n## 5. Black Holes and Neutron Stars\n\nBlack holes are among the most fascinating cosmic phenomena. Formed from collapsed stars, their gravity is so intense that not even light can escape.\n\n### 5.1 Event Horizon and Singularity\n\nThe event horizon marks the boundary beyond which nothing can return. At the core lies the singularity—a point where density and gravity become infinite, and the laws of physics break down.\n\n### 5.2 Gravitational Waves\n\nThe detection of gravitational waves in 2015 confirmed a century-old prediction of Einstein’s and opened a new way to observe cosmic events like black hole mergers and neutron star collisions.\n\n---\n\n## 6. The Search for Life\n\n### 6.1 Exoplanets and the Habitable Zone\n\nThousands of exoplanets (planets outside our solar system) have been discovered, some lying in the \"Goldilocks zone\"—where conditions may be just right for liquid water and life.\n\n### 6.2 The Fermi Paradox\n\nIf life is common in the universe, where is everyone? The Fermi Paradox highlights the contradiction between the high probability of extraterrestrial life and the lack of evidence or contact.\n\n### 6.3 SETI and Beyond\n\nProjects like SETI (Search for Extraterrestrial Intelligence) and missions like the James Webb Space Telescope continue to search the stars for signs of life, biosignatures, and habitable environments.\n\n---\n\n## 7. Future of Space Exploration\n\n### 7.1 Mars and Human Colonization\n\nNASA, SpaceX, and other agencies are actively planning manned missions to Mars. The Red Planet may become humanity’s first interplanetary colony.\n\n### 7.2 Interstellar Travel\n\nConcepts like solar sails, nuclear propulsion, and wormholes stretch the imagination and scientific boundaries. While still theoretical, they offer visions of future voyages beyond our solar system.\n\n### 7.3 Time Travel and Wormholes\n\nAccording to general relativity, time travel via wormholes or near-light-speed travel is theoretically possible—but practically and ethically, it remains speculative.\n\n---\n\n## Conclusion\n\nOur journey through space and time is far from over. From ancient stargazers to space telescopes peering into the dawn of time, our quest to understand the cosmos continues to inspire awe and ambition. As we push further into the unknown, we not only uncover the secrets of the universe but also reflect on our origins, our place in the cosmos, and the infinite possibilities that lie ahead.\n\n---\n\n## Further Reading\n\n* *Cosmos* by Carl Sagan\n* *A Brief History of Time* by Stephen Hawking\n* NASA's [Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/)\n* [James Webb Space Telescope](https://webb.nasa.gov/)\n\n",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 2,
        title: "The Future of AI",
        description: "How artificial intelligence is shaping our world.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 2,
            name: "John Smith",
            bio: "AI researcher and tech writer.",
            imageUrl: "https://picsum.photos/500?random=2",
            title: "Manager"

        },
        date: new Date("2023-10-02"),
        featured: false,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 3,
        title: "Climate Change and Its Impact",
        description: "Understanding the effects of climate change on our planet and the ways that we collectively can prevent it.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 3,
            name: "Alice Johnson",
            bio: "Environmental journalist and activist.",
            imageUrl: "https://picsum.photos/500?random=3",
            title: "Software Engineer"

        },
        date: new Date("2023-10-03"),
        featured: true,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 4,
        title: "Space Exploration Milestones",
        description: "Key achievements in space exploration history.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 4,
            name: "Bob Brown",
            bio: "Historian of science and technology.",
            imageUrl: "https://picsum.photos/500?random=4",
            title: "Software Engineer"

        },
        date: new Date("2023-10-04"),
        featured: true,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 5,
        title: "Quantum Computing Explained",
        description: "An introduction to the principles of quantum computing.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 5,
            name: "Charlie Davis",
            bio: "Quantum physicist and lecturer.",
            imageUrl: "https://picsum.photos/500?random=5",
            title: "Software Engineer"

        },
        date: new Date("2023-10-05"),
        featured: false,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 6,
        title: "The Wonders of the Deep Sea",
        description: "Discovering the mysteries of the ocean depths.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 6,
            name: "David Wilson",
            bio: "Marine biologist and explorer.",
            imageUrl: "https://picsum.photos/500?random=6",
            title: "Software Engineer"

        },
        date: new Date("2023-10-06"),
        featured: false,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 7,
        title: "The Evolution of Spacecraft",
        description: "A look at how spacecraft have evolved over the decades.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 7,
            name: "Emma Thompson",
            bio: "Aerospace engineer and historian.",
            imageUrl: "https://picsum.photos/500?random=7",
            title: "Software Engineer"

        },
        date: new Date("2023-10-07"),
        featured: true,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 8,
        title: "The Science of Black Holes",
        description: "Understanding the enigmatic nature of black holes.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 8,
            name: "Frank Miller",
            bio: "Astrophysicist specializing in black holes.",
            imageUrl: "https://picsum.photos/500?random=8",
            title: "Software Engineer"

        },
        date: new Date("2023-10-08"),
        featured: true,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 9,
        title: "Advancements in Renewable Energy",
        description: "Exploring the latest innovations in renewable energy sources.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 9,
            name: "Grace Lee",
            bio: "Renewable energy expert and consultant.",
            imageUrl: "https://picsum.photos/500?random=9",
            title: "Software Engineer"
        },
        date: new Date("2023-10-09"),
        featured: false,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 10,
        title: "The Search for Extraterrestrial Life",
        description: "Examining the possibilities of life beyond Earth.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 10,
            name: "Hannah Brown",
            bio: "Astrobiologist and science writer.",
            imageUrl: "https://picsum.photos/500?random=10",
            title: "Software Engineer"

        },
        date: new Date("2023-10-10"),
        featured: false,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 11,
        title: "The Evolution of Spacecraft",
        description: "A look at how spacecraft have evolved over the decades.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 7,
            name: "Emma Thompson",
            bio: "Aerospace engineer and historian.",
            imageUrl: "https://picsum.photos/500?random=7",
            title: "Software Engineer"

        },
        date: new Date("2023-10-07"),
        featured: true,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 12,
        title: "The Science of Black Holes",
        description: "Understanding the enigmatic nature of black holes.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 8,
            name: "Frank Miller",
            bio: "Astrophysicist specializing in black holes.",
            imageUrl: "https://picsum.photos/500?random=8",
            title: "Software Engineer"

        },
        date: new Date("2023-10-08"),
        featured: true,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    },
    {
        id: 13,
        title: "Advancements in Renewable Energy",
        description: "Exploring the latest innovations in renewable energy sources.",
        imageUrl: "https://picsum.photos/600/800",
        author: {
            id: 9,
            name: "Grace Lee",
            bio: "Renewable energy expert and consultant.",
            imageUrl: "https://picsum.photos/500?random=9",
            title: "Software Engineer"

        },
        date: new Date("2023-10-09"),
        featured: false,
        content: "Full content of the article goes here...",
        categoryKey: "space",
        category: {
            key: "space",
            name: "Space",
            imageUrl: "https://picsum.photos/1920/1080",
            description: "All about space and space exploration."
        }
    }
];

export const authorDetails: AuthorDetails[] = [
    {
        id: 1,
        name: "Jane Doe",
        bio: "Astrophysicist and science communicator.",
        imageUrl: "https://picsum.photos/500?random=1",
        title: "Software Engineer"
    },
    {
        id: 2,
        name: "John Smith",
        bio: "AI researcher and tech writer.",
        imageUrl: "https://picsum.photos/500?random=2",
        title: "Manager"
    },
    {
        id: 3,
        name: "Alice Johnson",
        bio: "Environmental journalist and activist.",
        imageUrl: "https://picsum.photos/500?random=3",
        title: "Software Engineer"

    },
    {
        id: 4,
        name: "Bob Brown",
        bio: "Historian of science and technology.",
        imageUrl: "https://picsum.photos/500?random=4",
        title: "Software Engineer"

    },
    {
        id: 5,
        name: "Charlie Davis",
        bio: "Quantum physicist and lecturer.",
        imageUrl: "https://picsum.photos/500?random=5",
        title: "Software Engineer"

    },
    {
        id: 6,
        name: "David Wilson",
        bio: "Marine biologist and explorer.",
        imageUrl: "https://picsum.photos/500?random=6",
        title: "Software Engineer"

    },
    {
        id: 7,
        name: "Emma Thompson",
        bio: "Aerospace engineer and historian.",
        imageUrl: "https://picsum.photos/500?random=7",
        title: "Software Engineer"

    },
    {
        id: 8,
        name: "Frank Miller",
        bio: "Astrophysicist specializing in black holes.",
        imageUrl: "https://picsum.photos/500?random=8",
        title: "Software Engineer"

    },
    {
        id: 9,
        name: "Grace Lee",
        bio: "Renewable energy expert and consultant.",
        imageUrl: "https://picsum.photos/500?random=9",
        title: "Software Engineer"

    },
    {
        id: 10,
        name: "Hannah Brown",
        bio: "Astrobiologist and science writer.",
        imageUrl: "https://picsum.photos/500?random=10",
        title: "Software Engineer"

    }
];

export const categoryList: Category[] = [
    {
        key: "space",
        name: "Space",
        imageUrl: "https://picsum.photos/1920/1080",
        description: "All about space and space exploration."
    },
    {
        key: "politics",
        name: "Politics",
        imageUrl: "https://picsum.photos/1920/1080",
        description: "All about the worst in the world."
    }
]
