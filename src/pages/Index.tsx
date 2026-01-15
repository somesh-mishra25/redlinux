import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Activity, 
  Code2, 
  Server, 
  Headphones, 
  ArrowRight, 
  CheckCircle2,
  Users,
  Globe,
  Award,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const services = [
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "CI/CD pipelines, infrastructure as code, Kubernetes orchestration, and cloud-native solutions.",
  },
  {
    icon: Activity,
    title: "Monitoring & SRE",
    description: "24/7 observability, incident management, and site reliability engineering for peak performance.",
  },
  {
    icon: Code2,
    title: "Web & Mobile Development",
    description: "Custom applications built with modern frameworks and best practices for scalability.",
  },
  {
    icon: Server,
    title: "Cloud Architecture",
    description: "Multi-cloud strategies, migration planning, and cost-optimized infrastructure design.",
  },
  {
    icon: Headphones,
    title: "Support Services",
    description: "Round-the-clock technical support, maintenance, and managed services for your infrastructure.",
  },
];

const stats = [
  { value: "150+", label: "Clients Served", icon: Users },
  { value: "12+", label: "Years Experience", icon: Award },
  { value: "25+", label: "Countries", icon: Globe },
  { value: "99.9%", label: "Uptime SLA", icon: TrendingUp },
];

const testimonials = [
  {
    quote: "RedLinux transformed our deployment pipeline. We went from weekly releases to multiple daily deployments with zero downtime.",
    author: "Priya Sharma",
    role: "CTO, FinTech Startup",
    company: "PayFlow Technologies",
  },
  {
    quote: "Their SRE team is exceptional. Our incident response time dropped by 80% and customer satisfaction increased significantly.",
    author: "Michael Chen",
    role: "VP Engineering",
    company: "E-Commerce Giant",
  },
  {
    quote: "The cloud migration was seamless. RedLinux's expertise saved us months of work and reduced our infrastructure costs by 40%.",
    author: "Sarah Johnson",
    role: "Director of IT",
    company: "Healthcare Solutions Inc.",
  },
];

const trustedLogos = [
  "AWS Partner", "Google Cloud", "Azure", "Kubernetes", "Docker", "Terraform"
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container-wide mx-auto section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Trusted by 150+ Global Enterprises
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Accelerate Your{" "}
                <span className="text-primary">Digital Transformation</span>{" "}
                with Expert DevOps
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Enterprise-grade DevOps, cloud architecture, and SRE services that scale with your business. 
                From startups to Fortune 500, we deliver infrastructure that just works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Animated background circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-6" />
                <div className="absolute inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl transform -rotate-3" />
                {/* Main visual */}
                <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-8 animate-float">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <div className="w-3 h-3 rounded-full bg-muted" />
                      <div className="w-3 h-3 rounded-full bg-muted" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-primary/20 rounded w-1/2" />
                      <div className="h-4 bg-muted rounded w-2/3" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="bg-accent rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">99.9%</div>
                        <div className="text-xs text-muted-foreground">Uptime</div>
                      </div>
                      <div className="bg-accent rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">2x</div>
                        <div className="text-xs text-muted-foreground">Faster Deploys</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            TRUSTED BY LEADING TECHNOLOGY COMPANIES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-muted-foreground font-semibold text-lg"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-background/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium mb-4 block">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              End-to-End DevOps & Cloud Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From infrastructure automation to 24/7 monitoring, we provide comprehensive 
              services to keep your systems running at peak performance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group bg-card border border-border rounded-xl p-6 card-hover"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium mb-4 block">Client Success Stories</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                variants={fadeInUp}
                className="bg-card border border-border rounded-xl p-8 card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-foreground mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Get a free 30-minute consultation with our DevOps experts. 
              No commitment, just actionable insights for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
