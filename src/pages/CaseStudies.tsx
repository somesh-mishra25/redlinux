import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const caseStudies = [
  {
    id: 1,
    title: "FinTech Startup: 10x Deployment Speed",
    industry: "Financial Services",
    challenge: "Manual deployments taking days, frequent production issues",
    solution: "Implemented GitOps with ArgoCD, Kubernetes migration, full CI/CD pipeline",
    results: [
      { icon: TrendingUp, label: "Deployment Speed", value: "10x faster" },
      { icon: Clock, label: "Downtime", value: "99.99% uptime" },
      { icon: DollarSign, label: "Cost Savings", value: "40% reduced" },
    ],
    tags: ["Kubernetes", "GitOps", "CI/CD", "AWS"],
  },
  {
    id: 2,
    title: "E-Commerce Platform: Zero-Downtime Migration",
    industry: "Retail",
    challenge: "Legacy monolith on outdated infrastructure, scaling issues during sales",
    solution: "Migrated to microservices on AWS, implemented auto-scaling and caching",
    results: [
      { icon: TrendingUp, label: "Performance", value: "3x faster" },
      { icon: Clock, label: "Migration Time", value: "8 weeks" },
      { icon: DollarSign, label: "Revenue Impact", value: "$2M saved" },
    ],
    tags: ["AWS", "Microservices", "Docker", "Redis"],
  },
  {
    id: 3,
    title: "Healthcare SaaS: HIPAA-Compliant Cloud",
    industry: "Healthcare",
    challenge: "Needed HIPAA compliance while modernizing infrastructure",
    solution: "Designed compliant multi-region architecture with encrypted data pipelines",
    results: [
      { icon: TrendingUp, label: "Compliance", value: "100% HIPAA" },
      { icon: Clock, label: "Time to Market", value: "50% faster" },
      { icon: DollarSign, label: "Audit Savings", value: "$500K/year" },
    ],
    tags: ["GCP", "Security", "Terraform", "Compliance"],
  },
  {
    id: 4,
    title: "Media Company: Global CDN Implementation",
    industry: "Media & Entertainment",
    challenge: "Slow content delivery, high bandwidth costs, poor global performance",
    solution: "Implemented multi-CDN strategy with intelligent routing and edge caching",
    results: [
      { icon: TrendingUp, label: "Load Time", value: "60% faster" },
      { icon: Clock, label: "Global Reach", value: "40+ regions" },
      { icon: DollarSign, label: "Bandwidth Cost", value: "45% reduced" },
    ],
    tags: ["CDN", "CloudFlare", "AWS", "Performance"],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function CaseStudies() {
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
            <span className="text-primary font-medium mb-4 block">Case Studies</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Real Results for{" "}
              <span className="text-primary">Real Businesses</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Discover how we've helped companies across industries transform their 
              infrastructure and achieve measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden card-hover"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Content */}
                  <div className="lg:col-span-2 p-8">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
                      {study.industry}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{study.title}</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="cta" asChild>
                      <Link to="/contact">
                        Get Similar Results
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Results */}
                  <div className="bg-foreground text-background p-8 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold mb-6 text-center">Results</h3>
                    <div className="space-y-6">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center">
                          <result.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                          <div className="text-2xl font-bold">{result.value}</div>
                          <div className="text-background/70 text-sm">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
              Your Success Story Starts Here
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Button 
              size="xl" 
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
