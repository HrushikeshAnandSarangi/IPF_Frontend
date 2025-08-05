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
    name: "Owaiz Aslam",
    designation: "Founder",
    intro:
      "Owaiz Aslam is an Interfaith Activist, Ethics Educator, and Jewish-Muslim Peacebuilder with the Foundation for Ethnic Understanding (FFEU), and the Founder of the Indian Pluralism Foundation. Based in Kolkata, he is widely recognized for his leadership in fostering interfaith harmony and promoting pluralistic values. Through the Indian Pluralism Foundation, Owaiz works to create shared spaces where people of diverse backgrounds can engage in meaningful dialogue and cultural exchange. He emphasizes the importance of finding common ground to build mutual respect, admiration, and appreciation among different faiths. His initiatives focus on expanding understanding of religious and cultural diversity, and nurturing a generation that values coexistence. With a strong commitment to peacebuilding and education, Owaiz empowers youth and communities to rise above prejudice and polarization, creating bridges of empathy and shared values in an increasingly divided world. His work continues to inspire efforts towards inclusive and respectful coexistence.",
    image: "/core/Founder.jpg",
  },
  {
    id: "2",
    name: "Fatma Aslam",
    designation: "President",
    intro:
      "Fatima Aslam is the President and founding force behind the Indian Pluralism Foundation, a dynamic organization committed to promoting interfaith harmony and cultural understanding in Kolkata. Her vision and tireless efforts have been instrumental in shaping the Foundation’s growth and impact. As an entrepreneur and mother, Fatima balances her family life with an extraordinary commitment to social change, embodying grace, resilience, and leadership in every sphere. She is deeply respected for her quiet strength and ability to bring people together across divides. Fatima is also the author of the heartfelt book Little Fatima, a reflection of her values, experiences, and hope for a more compassionate world. Her story is one of dedication, not only to her family but to a larger mission of unity and peace. A deeply inspiring mother and changemaker, Fatima Aslam stands as a beacon of strength and empathy, showing that powerful leadership often begins in everyday life.",
    image: "/core/President.jpg",
  },
  {
    id: "3",
    name: "Sajar Firdous",
    designation: "Youth President",
    intro:
      "Sajar Firdous is the Youth President of the Indian Pluralism Foundation, where she champions interfaith harmony and youth empowerment with dedication and vision. As a psychologist, Sajar is actively involved in various research publications, focusing on mental health, emotional resilience, and social well-being. Her academic and community work reflects a deep commitment to fostering understanding and compassion in a diverse society. In addition to her psychological pursuits, Sajar is also a black belt Nidan and a state level medalist  in Karate, exemplifying discipline, strength, and focus. She trains children in martial arts, using it as a tool not just for self-defense but for building confidence, respect, and emotional regulation. Her unique combination of psychological insight and martial arts expertise allows her to empower young minds both mentally and physically. Sajar embodies a rare blend of intellect, strength, and compassion, making her a role model for youth and a rising voice in both peacebuilding and personal development.",
    image: "/core/YouthPresident.jpg",
  },
  {
    id: "4",
    name: "Yuvraj Singh",
    designation: "Youth Vice President & Research Analyst",
    intro:
      "Mr. Yuvraj Singh serves as the Youth Vice President of the Indian Pluralism Foundation and also contributes as a Research Analyst. With a strong academic background in Finance and Marketing, he brings strategic insight and analytical skills to the Foundation’s mission of promoting interfaith harmony and inclusive dialogue. Beyond his professional expertise, Yuvraj is also a dedicated Karate athlete and a National medalist, inspiring young people to pursue discipline, resilience, and personal growth through martial arts. His unique combination of financial acumen, research proficiency, and athletic commitment makes him a multifaceted leader within the organization. Yuvraj plays a key role in building bridges between communities, cultures, and generations—helping to foster mutual respect and understanding across diverse groups. His efforts reflect the spirit of the Indian Pluralism Foundation: inclusive, youth-driven, and future-focused. As a role model and changemaker, Yuvraj Singh continues to inspire young minds to lead with purpose, strength, and empathy.",
    image: "/core/YouthVicePresident.jpg",
  },
  {
    id: "5",
    name: "Oruj Sabah Ahmed",
    designation: "Treasurer",
    intro:
      "Oruj Sabah Ahmed is the Treasurer and a founding figure of the Indian Pluralism Foundation, playing a pivotal role in laying the foundation and vision of the organization. As one of the earliest architects of IPF, she has been instrumental in shaping its structure, operations, and mission of promoting interfaith harmony and cultural inclusion. Her strong leadership and deep commitment have made her an eminent figure within the organization. Professionally, Oruj works as an Banker, where she brings her financial expertise and strategic insight to both her corporate role and her responsibilities at IPF. Her ability to balance a demanding career with a passionate dedication to community service reflects her exceptional work ethic and commitment to social change. Oruj’s contributions have been foundational in establishing IPF as a respected platform for dialogue, understanding, and unity across diverse communities.",
    image: "/core/Treasurer.jpg",
  },
  {
    id: "6",
    name: "Saptak Chandra Bose",
    designation: "Multimedia Manager",
    intro:
      "Saptak Chandra Bose is the Multimedia Manager of the Indian Pluralism Foundation, where he oversees the organization’s social media presence, photography, and videography. His creative vision and technical expertise play a vital role in capturing and communicating the Foundation’s mission of interfaith harmony and cultural unity. Saptak brings a cinematic touch to every visual narrative, ensuring that the Foundation’s work reaches diverse audiences with impact and authenticity. Professionally, he works as a location director in Bengali films and has also appeared in side roles, including in the Bollywood film Laal Singh Chaddha. His experience in the film industry enriches his storytelling abilities, allowing him to blend artistic expression with social purpose. Saptak’s work behind the camera not only documents the journey of the Indian Pluralism Foundation but also helps amplify its message of peace, inclusion, and shared humanity. He is a creative force driving the visual voice of the Foundation forward.",
    image: "/core/MultimediaManager.jpg",
  },
]

export const executiveMembers: TeamMember[] = [
  { id: "1", name: "Rev. Martin Pakhre" },
  { id: "2", name: "Sunil Rosario" },
  { id: "3", name: "Tarsem Singh" },
  { id: "4", name: "Pallab Guha" },
  { id: "5", name: "A.M Cohen" },
  { id: "6", name: "Dipankar Basu" },
  { id: "7", name: "Divakar Chaitanya Maharaj" },
  { id: "8", name: "Abdul Aziz" },
  { id: "9", name: "Tangra" },
  { id: "10", name: "Fawad Halim" },
  { id: "11", name: "Imam Nabeel Kausar" },
]

export const advisoryBoard: TeamMember[] = [
  { id: "1", name: "O.P Shah " },
  { id: "2", name: "Jamil Sagar" },
  { id: "3", name: "Margaret Foster" },
  { id: "4", name: "Madhumita" },
  { id: "5", name: "Urmi Chanda" },
  { id: "6", name: "Mrinalini Martin" },
  { id: "7", name: "Dr. Rev. Sunil Caleb" },
  { id: "8", name: "Sankhadeep Shome" },
  {id:"9",name:"Rev. Suresh Mohanty "},
  {id:"10",name:"Dr. N. Saha "},
  {id:"11",name:"Zeba Ahmed"},
]
