export interface CoreTeamMember {
  id: string
  name: string
  designation: string
  intro: string
  image: string
}

export interface TeamMember {
  id: string
  name: string
}

export const coreTeamData: CoreTeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    designation: "Chief Executive Officer",
    intro:
      "Sarah brings over 15 years of experience in technology leadership and strategic planning. She has successfully led multiple startups from inception to acquisition, with a focus on sustainable growth and innovation.",
    image: "/placeholder.svg?height=300&width=300&text=Sarah Johnson",
  },
  {
    id: "2",
    name: "Michael Chen",
    designation: "Chief Technology Officer",
    intro:
      "Michael is a seasoned technologist with expertise in scalable architecture and emerging technologies. He has built and managed engineering teams at Fortune 500 companies and holds multiple patents in AI and machine learning.",
    image: "/placeholder.svg?height=300&width=300&text=Michael Chen",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    designation: "Chief Operating Officer",
    intro:
      "Emily specializes in operational excellence and process optimization. With her background in consulting and operations management, she ensures our organization runs efficiently while maintaining high standards of quality.",
    image: "/placeholder.svg?height=300&width=300&text=Emily Rodriguez",
  },
  {
    id: "4",
    name: "David Thompson",
    designation: "Chief Financial Officer",
    intro:
      "David brings extensive financial expertise from his tenure at leading investment firms. He oversees our financial strategy, investor relations, and ensures sustainable growth through strategic financial planning.",
    image: "/placeholder.svg?height=300&width=300&text=David Thompson",
  },
]

export const executiveMembers: TeamMember[] = [
  { id: "1", name: "Jennifer Walsh" },
  { id: "2", name: "Robert Kim" },
  { id: "3", name: "Lisa Anderson" },
  { id: "4", name: "James Wilson" },
  { id: "5", name: "Maria Garcia" },
  { id: "6", name: "Thomas Brown" },
  { id: "7", name: "Amanda Davis" },
  { id: "8", name: "Christopher Lee" },
  { id: "9", name: "Rachel Martinez" },
  { id: "10", name: "Kevin Taylor" },
  { id: "11", name: "Nicole White" },
  { id: "12", name: "Daniel Harris" },
]

export const advisoryBoard: TeamMember[] = [
  { id: "1", name: "Dr. Patricia Moore" },
  { id: "2", name: "Prof. Alan Stewart" },
  { id: "3", name: "Margaret Foster" },
  { id: "4", name: "Dr. Richard Clark" },
  { id: "5", name: "Susan Mitchell" },
  { id: "6", name: "Dr. Jonathan Wright" },
  { id: "7", name: "Catherine Turner" },
  { id: "8", name: "Prof. Mark Phillips" },
]
