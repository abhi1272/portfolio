export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhishek Kumar",
    jobTitle: "Full-Stack & AI Engineer",
    url: "https://abhishekkumar.dev",
    email: "abhishek.omex@gmail.com",
    sameAs: [
      "https://github.com/abhi1272",
      "https://www.linkedin.com/in/abhishek-kumar-b19a4ba1/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "IN",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "MongoDB",
      "AWS",
      "Azure",
      "Terraform",
      "LLM",
      "LiteLLM",
      "Langfuse",
      "AI Engineering",
      "System Design",
      "DevOps",
    ],
    description:
      "Full-Stack & AI Engineer with 11 years of experience building scalable products, LLM-powered systems, and cloud infrastructure.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
