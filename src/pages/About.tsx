
import { Users, Award, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "10+ years in digital strategy and business development."
    },
    {
      name: "Sarah Martinez",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1b4?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer with a passion for user experience."
    },
    {
      name: "Mike Johnson",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer specializing in modern web technologies."
    },
    {
      name: "Emily Chen",
      role: "Marketing Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Digital marketing expert with expertise in growth strategies."
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering results that exceed expectations."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their vision becomes reality."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Innovation",
      description: "We stay ahead of trends and use cutting-edge technologies to solve complex problems."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Passion",
      description: "We love what we do, and it shows in the quality and creativity of our work."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Works
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're a passionate team of designers, developers, and strategists who believe 
              in the power of great digital experiences to transform businesses and create 
              meaningful connections.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">2015</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2015, Works began as a small team with a big vision: to help 
                businesses succeed in the digital world through exceptional design and development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a passion project has grown into a full-service digital agency 
                that's helped hundreds of companies build their online presence, engage their 
                audiences, and achieve their business goals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to work with startups, established businesses, and everything 
                in between, always maintaining our commitment to quality, creativity, and results.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                alt="Team working together" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals who make the magic happen every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
