import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const blogPosts = [
  {
    id: 1,
    title: "Kubernetes Best Practices for Production Workloads",
    excerpt: "Learn the essential best practices for running Kubernetes in production, from resource management to security hardening.",
    author: "Vikram Singh",
    date: "Jan 10, 2026",
    readTime: "8 min read",
    category: "Kubernetes",
    featured: true,
  },
  {
    id: 2,
    title: "GitOps vs Traditional CI/CD: A Complete Comparison",
    excerpt: "Understand the differences between GitOps and traditional CI/CD approaches, and when to use each methodology.",
    author: "Anita Patel",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    category: "DevOps",
    featured: false,
  },
  {
    id: 3,
    title: "Implementing Zero Trust Security in Cloud Environments",
    excerpt: "A comprehensive guide to implementing zero trust architecture in AWS, Azure, and GCP environments.",
    author: "Rajesh Kumar",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    category: "Security",
    featured: false,
  },
  {
    id: 4,
    title: "Observability Stack: Prometheus vs DataDog vs New Relic",
    excerpt: "Comparing popular observability solutions to help you choose the right monitoring stack for your needs.",
    author: "Priya Menon",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    category: "Monitoring",
    featured: false,
  },
  {
    id: 5,
    title: "Cost Optimization Strategies for AWS Infrastructure",
    excerpt: "Practical tips and strategies to reduce your AWS bill by up to 40% without sacrificing performance.",
    author: "Vikram Singh",
    date: "Dec 15, 2025",
    readTime: "9 min read",
    category: "Cloud",
    featured: false,
  },
  {
    id: 6,
    title: "Building Resilient Microservices with Service Mesh",
    excerpt: "How to use Istio and Linkerd to build fault-tolerant, observable microservices architectures.",
    author: "Anita Patel",
    date: "Dec 10, 2025",
    readTime: "11 min read",
    category: "Architecture",
    featured: false,
  },
];

const categories = ["All", "DevOps", "Kubernetes", "Cloud", "Security", "Monitoring", "Architecture"];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
            <span className="text-primary font-medium mb-4 block">Blog</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Insights & Best Practices from{" "}
              <span className="text-primary">DevOps Experts</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Stay updated with the latest trends, tutorials, and best practices 
              in DevOps, cloud computing, and infrastructure management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border bg-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-background">
          <div className="container-wide mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl overflow-hidden card-hover"
            >
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/10 to-accent p-8 lg:p-12 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-4">
                      Featured Article
                    </span>
                    <div className="text-6xl font-bold text-primary/20">K8s</div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4 w-fit">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button variant="cta" className="w-fit">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden card-hover"
              >
                <div className="bg-gradient-to-br from-accent to-muted p-8 text-center">
                  <span className="text-3xl font-bold text-primary/30">
                    {post.category.slice(0, 3).toUpperCase()}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-background/70 mb-8">
              Subscribe to our newsletter for the latest DevOps insights, 
              tutorials, and industry news delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button 
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
