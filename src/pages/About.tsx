import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  ArrowRight,
  Users,
  Globe,
  Award,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of the curve, constantly exploring new technologies to deliver cutting-edge solutions."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We don't just serve clients—we partner with them. Your success is our success."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do, from code quality to client communication."
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "Based in India, serving the world. We understand diverse business needs and cultural nuances."
  }
];

const leadership = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "15+ years in enterprise IT, former AWS Solutions Architect. Passionate about helping businesses scale through technology.",
  },
  {
    name: "Anita Patel",
    role: "CTO",
    bio: "Ex-Google SRE, Kubernetes expert. Leading our technical vision and ensuring we deliver world-class solutions.",
  },
  {
    name: "Vikram Singh",
    role: "VP of Engineering",
    bio: "DevOps pioneer with experience at multiple Fortune 500 companies. Building high-performing engineering teams.",
  },
  {
    name: "Priya Menon",
    role: "Head of Client Success",
    bio: "10+ years in IT consulting. Ensuring every client achieves their infrastructure goals.",
  }
];

const timeline = [
  { year: "2012", event: "Founded in Bangalore as a small DevOps consultancy" },
  { year: "2015", event: "Expanded to cloud services, became AWS Partner" },
  { year: "2018", event: "Reached 50+ enterprise clients globally" },
  { year: "2020", event: "Launched 24/7 Managed Services division" },
  { year: "2023", event: "150+ clients, 25+ countries, 80+ team members" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-accent/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary font-medium mb-4 block">About RedLinux</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Businesses Through{" "}
              <span className="text-primary">Technology Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Since 2012, we've been helping businesses transform their infrastructure, 
              accelerate delivery, and achieve operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To democratize enterprise-grade DevOps and cloud solutions, making them accessible 
                to businesses of all sizes. We bridge the gap between complex infrastructure needs 
                and practical, scalable solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To become the most trusted DevOps and cloud partner for businesses worldwide, 
                known for our technical excellence, client-first approach, and relentless 
                pursuit of innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold">12+ Years of Excellence</h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                  <div className="bg-card border border-border rounded-xl p-6 inline-block">
                    <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                    <p className="text-muted-foreground">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 z-10" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold">What Drives Us</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Meet Our Team</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center card-hover"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-primary text-sm mb-3">{person.role}</p>
                <p className="text-muted-foreground text-sm">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join 150+ companies that trust RedLinux for their infrastructure needs.
            </p>
            <Button 
              size="xl" 
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
