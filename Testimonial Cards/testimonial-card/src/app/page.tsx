import TestimonialCard from "../components/TestimonialCard";

export default function Home() {
  const data = {
    name: "Sarah Doleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    userName: "@sarahdole",
    bio: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    avatar: "/img/profile-thumbnail.png",
  };

  return (
    <TestimonialCard 
      name={data.name}
      userName={data.userName}
      bio={data.bio}
      avatar={data.avatar}
    />
  );
}
