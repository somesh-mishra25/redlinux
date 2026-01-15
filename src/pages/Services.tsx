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
  Zap,
  Shield,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const services = [
  {
    id: "devops",
    icon: Cloud,
    title: "DevOps & Cloud Services",
    description: "Streamline your software delivery with modern DevOps practices and cloud-native solutions.",
    features: [
      "CI/CD Pipeline Design & Implementation",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Kubernetes Orchestration & Management",
      "Container Strategy & Docker Implementation",
      "GitOps & ArgoCD Deployment",
      "Cloud Cost Optimization"
    ],
    benefits: [
      { icon: Zap, text: "10x faster deployments" },
      { icon: Shield, text: "Zero-downtime releases" },
      { icon: Clock, text: "24/7 automated operations" }
    ]
  },
  {
    id: "monitoring",
    icon: Activity,
    title: "Monitoring & SRE",
    description: "Achieve maximum uptime and reliability with our comprehensive observability and SRE practices.",
    features: [
      "Full-Stack Observability Setup",
      "Prometheus, Grafana, ELK Stack",
      "Incident Management & On-Call",
      "SLA/SLO Definition & Tracking",
      "Chaos Engineering & Testing",
      "Performance Optimization"
    ],
    benefits: [
      { icon: Zap, text: "99.99% uptime guarantee" },
      { icon: Shield, text: "Proactive incident detection" },
      { icon: Clock, text: "< 5 min MTTR" }
    ]
  },
  {
    id: "development",
    icon: Code2,
    title: "Web & Mobile Development",
    description: "Custom applications built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "React, Vue, Angular Frontend",
      "Node.js, Python, Go Backend",
      "React Native & Flutter Mobile Apps",
      "API Design & Development",
      "Microservices Architecture",
      "Performance Optimization"
    ],
    benefits: [
      { icon: Zap, text: "Modern tech stack" },
      { icon: Shield, text: "Security-first development" },
      { icon: Clock, text: "Agile delivery" }
    ]
  },
  {
    id: "architecture",
    icon: Server,
    title: "Cloud Architecture",
    description: "Design and implement scalable, secure, and cost-effective cloud infrastructure.",
    features: [
      "Multi-Cloud Strategy (AWS, Azure, GCP)",
      "Cloud Migration & Modernization",
      "Serverless Architecture Design",
      "Database Design & Optimization",
      "Network & Security Architecture",
      "Disaster Recovery Planning"
    ],
    benefits: [
      { icon: Zap, text: "40% cost reduction" },
      { icon: Shield, text: "Enterprise-grade security" },
      { icon: Clock, text: "Infinite scalability" }
    ]
  },
  {
    id: "support",
    icon: Headphones,
    title: "Support Services",
    description: "Round-the-clock technical support and managed services to keep your infrastructure running smoothly.",
    features: [
      "24/7 Technical Support",
      "Managed Infrastructure Services",
      "Security Patching & Updates",
      "Backup & Recovery Management",
      "Performance Monitoring",
      "Capacity Planning"
    ],
    benefits: [
      { icon: Zap, text: "24/7 availability" },
      { icon: Shield, text: "Expert team" },
      { icon: Clock, text: "< 15 min response" }
    ]
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Services() {
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
            <span className="text-primary font-medium mb-4 block">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise-Grade Solutions for{" "}
              <span className="text-primary">Modern Infrastructure</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              From DevOps automation to 24/7 managed services, we provide end-to-end solutions 
              that help businesses scale with confidence.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6">Key Benefits</h3>
                  <div className="space-y-6">
                    {service.benefits.map((benefit) => (
                      <div key={benefit.text} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-lg font-medium">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-background/70 mb-8">
              Every business is unique. Let's discuss your specific requirements 
              and design a solution that fits your needs perfectly.
            </p>
            <Button 
              size="xl" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link to="/contact">
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
