export interface Project {
  id: string
  title: string
  sdg?: string
  description: string
  image?: string
  hasImage: boolean
  category: "interfaith" | "community" | "health" | "education" | "environment"
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Interfaith Youth Leadership Programmes",
    sdg: "SDGs 16: Peace Justice & Strong Institution",
    description:
      "Interfaith Youth Leadership Programmes are designed to educate and empower young individuals by fostering understanding and respect among diverse religious communities. The core aim of this initiative is to nurture a generation of youth who are not only aware of the different faiths that shape our society—such as Hinduism, Islam, Christianity, Sikhism, Buddhism, Jainism, and others—but are also capable of leading conversations that challenge prejudice and promote unity. Through interactive workshops, school visits, and experiential learning sessions, the programme introduces participants to the beliefs, practices, and values of various religions. This engagement helps break down stereotypes and builds empathy, encouraging youth to move beyond narrow identities and see the world through a lens of inclusion and mutual respect. The leadership aspect of the programme equips participants with the skills to become ambassadors of peace and understanding in their communities. They learn to communicate effectively, lead interfaith discussions, and inspire others to embrace diversity. By creating safe spaces for dialogue and shared learning, the programme lays the foundation for a more cohesive and compassionate society. In a world often divided by misunderstanding and fear, this initiative offers hope—cultivating leaders who can bridge divides and help others excel through cooperation and shared humanity.",
    image: "/placeholder.svg?height=400&width=600&text=Youth Leadership",
    hasImage: true,
    category: "interfaith",
  },
  {
    id: "2",
    title: "Twinning Season - Jewish Muslim Interfaith Dialogue",
    sdg: "SDGs 16: Peace Justice & Strong Institution",
    description:
      "Twinning Season – Jewish-Muslim Interfaith Dialogue is a unique initiative aimed at fostering harmony, mutual respect, and collaboration between Jewish and Muslim communities. Through open dialogue, shared experiences, and cultural exchange, the project encourages participants to explore common values, address misconceptions, and build lasting relationships rooted in trust. The programme includes joint workshops, storytelling sessions, community visits, and discussions that highlight shared histories and ethical teachings in both faiths. By creating spaces for honest and respectful conversations, the initiative helps break down stereotypes and combat rising intolerance. Twinning Season also focuses on empowering youth and community leaders to take forward the spirit of coexistence. It promotes empathy, critical thinking, and a sense of shared responsibility in addressing global and local challenges. In times of increasing polarization, this project stands as a hopeful example of how dialogue can heal divisions and lay the foundation for long-term Jewish-Muslim solidarity.",
    image: "/placeholder.svg?height=400&width=600&text=Jewish Muslim Dialogue",
    hasImage: true,
    category: "interfaith",
  },
  {
    id: "3",
    title: "Youth Interfaith Essay Contest",
    sdg: "SDGs 16: Peace Justice & Strong Institution",
    description:
      "Youth Interfaith Essay Contest is an engaging initiative aimed at promoting interfaith understanding and dialogue among students. We visit various schools, colleges, and educational institutions to organize essay competitions on themes related to religious harmony, unity in diversity, and peaceful coexistence. These contests encourage young minds to think critically, express their ideas creatively, and reflect on the importance of interfaith respect in today's world. Winning students are recognized and awarded with prizes to celebrate their insight and effort. Through this platform, we inspire youth to become thoughtful ambassadors of peace, empathy, and inclusiveness in their communities and beyond.",
    hasImage: false,
    category: "education",
  },
  {
    id: "4",
    title: "Building Bridges Fostering Harmony",
    sdg: "SDGs 16: Peace Justice & Strong Institution",
    description:
      "Building Bridges, Fostering Harmony is a flagship initiative of the Indian Pluralism Foundation that focuses on addressing the growing challenges of religious intolerance. The project brings together interfaith leaders, scholars, and community representatives to engage in meaningful dialogue and collaborative problem-solving. Through structured conversations, community forums, and joint initiatives, it works to break down barriers, challenge misconceptions, and promote mutual respect among diverse religious groups. The goal is to create sustainable pathways to peace and understanding by nurturing trust, empathy, and cooperation. This initiative plays a vital role in strengthening social harmony and reinforcing India's deep-rooted values of unity in diversity.",
    image: "/placeholder.svg?height=400&width=600&text=Building Bridges",
    hasImage: true,
    category: "interfaith",
  },
  {
    id: "5",
    title: "Cleanliness Drive",
    sdg: "SDGs 6: Clean Water and Sanitation",
    description:
      "Cleanliness Drive is a community-focused initiative that actively contributes to the United Nations Sustainable Development Goal 6: Clean Water and Sanitation. This project emphasizes the importance of cleanliness, hygiene, and environmental responsibility in building healthier communities. As part of the drive, we visit various houses of worship—including temples, mosques, churches, and gurudwaras—and collaborate with volunteers to clean and maintain these sacred spaces, promoting respect for shared community environments. In addition to the cleaning efforts, we also conduct health and hygiene camps for underprivileged children. These camps focus on educating them about personal hygiene practices, the importance of sanitation, handwashing, and disease prevention. Interactive workshops, demonstrations, and distribution of hygiene kits help reinforce these lessons and empower children to lead healthier lives. By combining environmental care with community health education, the Cleanliness Drive not only fosters cleaner surroundings but also instills lifelong values of responsibility, dignity, and collective well-being.",
    hasImage: false,
    category: "environment",
  },
  {
    id: "6",
    title: "Documentary on Raja Ram Mohan Roy",
    description:
      "The Indian Pluralism Foundation along with Heather House produced and directed a short film on the life and legacy of Raja Ram Mohan Roy, one of India's earliest social reformers and a pioneer of interfaith harmony. This documentary highlights his visionary role in promoting religious tolerance, rational thinking, and social justice. Through compelling storytelling and historical insights, the film showcases how Roy brought together values from Hinduism, Islam, Christianity, and other traditions to advocate for a more inclusive and progressive society.",
    image: "/placeholder.svg?height=400&width=600&text=Raja Ram Mohan Roy Documentary",
    hasImage: true,
    category: "education",
  },
  {
    id: "7",
    title: "Interfaith Blood Donation Drive",
    sdg: "SDGs 3: Good Health and Well-being",
    description:
      "Interfaith Blood Donation Drive supports the United Nations Sustainable Development Goal 3: Good Health and Well-being. This initiative promotes universal access to healthcare by encouraging voluntary blood donation, a vital resource in saving lives. As part of the drive, we collaborate with various houses of worship—temples, mosques, churches, and gurudwaras—to host blood donation camps within their premises. These sacred spaces become symbols of unity, where individuals from diverse faiths come together for a shared humanitarian cause. The drive not only meets critical medical needs but also fosters interfaith harmony, showing how collective action can bridge communities and support public health.",
    hasImage: false,
    category: "health",
  },
  {
    id: "8",
    title: "Interfaith Yoga",
    description:
      "Interfaith Yoga Sessions is a project by the Indian Pluralism Foundation in collaboration with StudyGita.in, designed to promote holistic well-being and interfaith harmony through the integrated practice of yoga. The core concept of the project is 'Yoga on and off the mat,' meaning it goes beyond physical postures to include mental and spiritual growth. Through these sessions, participants from different religious and cultural backgrounds come together to engage in yoga practices combined with insightful discussions on the teachings of the Bhagavad Gita. The project explores key concepts such as karma yoga (selfless action), bhakti yoga (devotion), and jnana yoga (wisdom), encouraging reflection on how these universal values can be applied in everyday life, regardless of faith. By blending physical wellness with interfaith dialogue and ancient wisdom, the Interfaith Yoga Sessions project aims to build a space for shared learning, inner peace, and cross-cultural connection, contributing to a more inclusive and spiritually aware society.",
    image: "/placeholder.svg?height=400&width=600&text=Interfaith Yoga",
    hasImage: true,
    category: "health",
  },
  {
    id: "9",
    title: "Charitable Services",
    description:
      "Charity is a heartfelt initiative that brings together people of all faiths to serve those in need. We organize charitable programs during major festivals of various religions—such as Diwali, Eid, Christmas, Gurpurab, and others—to collect and distribute food, clothes, and daily essentials to the underprivileged. By holding these drives at temples, mosques, churches, and gurudwaras, we create a spirit of shared service and unity. These events not only provide material support but also promote interfaith harmony and compassion. Through this effort, we celebrate the true essence of all faiths—kindness, generosity, and humanity.",
    hasImage: false,
    category: "community",
  },
]
