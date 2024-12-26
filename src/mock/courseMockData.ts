import { CourseTypeCard } from "@/types"
// mock/courseMockData.ts  
export const mockCourses: CourseTypeCard[] = [  
  {  
    _id: "course1",  
    _createdAt: new Date().toISOString(),  
    views: 124,  
    title: "React Zero to Hero: Practical Web Development",  
    category: "Web Development",  
    description: "Start from scratch and master modern front-end development skills, effortlessly building complex applications with React",  
    image: "/images/courses/uiux-course.jpg"
  },  
  {  
    _id: "course2",   
    _createdAt: new Date().toISOString(),  
    views: 58,  
    title: "Node.js Full-Stack Development Masterclass",  
    category: "Backend",  
    description: "Deep dive into Node.js, building high-performance server-side applications and microservice architectures",  
    image: "/images/courses/cloud-course1.jpg "
  },  
  {  
    _id: "course3",  
    _createdAt: new Date().toISOString(),  
    views: 12,  
    title: "Python for Data Science and Machine Learning",  
    category: "Data Science",  
    description: "Comprehensive journey from Python basics to advanced data analysis, machine learning, and AI techniques",  
    image: "/images/courses/nodejs-course.jpg"
  },  
  {  
    _id: "course4",  
    _createdAt: new Date().toISOString(),  
    views: 34,  
    title: "UI/UX Design: From Concept to Professional Interface",  
    category: "Design",  
    description: "Learn cutting-edge design principles, user experience strategies, and professional design tool workflows",  
    image: "/images/courses/react-course.jpg"
  },  
  {  
    _id: "course5",  
    _createdAt: new Date().toISOString(),  
    views: 78,  
    title: "Cloud Native Technologies and Kubernetes Deployment",  
    category: "Cloud Computing",  
    description: "Master containerization, orchestration, and scalable cloud-native application architectures using Docker and Kubernetes",  
    image: "/images/courses/python-course.jpg"
  },
  {  
    _id: "course6",  
    _createdAt: new Date().toISOString(),  
    views: 90,  
    title: "Next.js 15 coming ",  
    category: "Cloud Computing",  
    description: "Master containerization, orchestration, and scalable cloud-native application architectures using Docker and Kubernetes",  
    image: "/images/courses/cloud-course2.jpg"
  }   
];  