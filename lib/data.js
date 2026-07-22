/* ────────────────────────────────────────────────────────────────
   FRONTIER ONE TECHNOLOGY — Site content
   All CLIENT-APPROVED copy is verbatim from the Full Content
   Document v1.0. Do not reword approved strings.
──────────────────────────────────────────────────────────────── */

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Career", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    icon: "cloud",
    short:
      "Move confidently to the cloud with secure architecture, migration planning, infrastructure optimization, and ongoing management.",
    narrative: [
      "Cloud adoption is no longer a question of if, but how — and how well it's planned determines whether it reduces cost and risk or simply relocates old problems onto new infrastructure.",
      "At Frontier One Technology, cloud engagements begin with a clear-eyed assessment of your current environment: what you're running, what it costs, what's fragile, and what's actually ready to move. From there, we design a secure, right-sized architecture — not a default, one-size-fits-all template — and plan the migration in phases that protect business continuity.",
      "Once you're in the cloud, our work continues. We optimize spend, tighten access controls, build in resilience and disaster recovery, and provide ongoing management so your infrastructure keeps pace with your business instead of becoming its own maintenance burden.",
    ],
    delivers: [
      "Cloud readiness assessment & migration planning",
      "Secure architecture design",
      "Infrastructure cost optimization",
      "Disaster recovery & resilience planning",
      "Ongoing cloud management & support",
    ],
    focus: ["AWS", "Microsoft Azure", "Google Cloud", "Hybrid Cloud", "Disaster Recovery", "Cloud-Native"],
  },
  {
    slug: "software-engineering",
    title: "Software Engineering",
    icon: "code",
    short:
      "Custom web applications, enterprise software, APIs, internal platforms, and scalable business applications built around your goals.",
    narrative: [
      "Off-the-shelf software works — until it doesn't fit how your business actually operates. Frontier One Technology builds custom applications and platforms designed around your real workflows, not the other way around.",
      "Our engineering team works closely with your stakeholders to understand the business problem before writing a single line of code. We design maintainable architectures, build with modern frameworks, and integrate cleanly with the systems you already rely on — whether that's a customer-facing web application, an internal operations platform, or the APIs that connect them.",
      "Every engagement follows disciplined engineering practices — code review, automated testing, and clear documentation — so what we build remains easy for your team (or ours) to extend for years, not just months.",
    ],
    delivers: [
      "Custom web & enterprise application development",
      "API design & integration",
      "Internal tools & operational platforms",
      "Legacy system modernization",
      "Scalable, maintainable architecture",
    ],
    focus: ["Web Applications", "Enterprise Software", "APIs", "Microservices", "Responsive Platforms"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    icon: "shield",
    short:
      "Protect your business through identity management, access controls, security assessments, compliance support, and proactive monitoring.",
    narrative: [
      "Security can't be an afterthought bolted on before launch — it has to be part of how a system is designed from day one. That's the principle behind every security engagement we run.",
      "Frontier One Technology helps organizations strengthen their security posture through practical, prioritized action: assessing where real risk exists, implementing modern identity and access management, and closing the gaps that matter most rather than chasing every theoretical vulnerability.",
      "For regulated industries, we help translate compliance requirements into working controls — not just documentation — and we support ongoing monitoring so new risks are caught early rather than discovered after an incident.",
    ],
    delivers: [
      "Security assessments & risk reviews",
      "Identity & Access Management (IAM)",
      "Access control & Zero Trust implementation",
      "Compliance support",
      "Proactive monitoring & threat detection",
    ],
    focus: ["IAM", "SSO", "MFA", "Zero Trust", "SIEM", "Compliance Frameworks"],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    icon: "chart",
    short:
      "Transform business data into meaningful insights with reporting, dashboards, automation, and modern analytics solutions.",
    narrative: [
      "Most organizations aren't short on data — they're short on usable insight. Frontier One Technology bridges that gap by turning scattered, siloed data into dashboards and reporting your team can actually act on.",
      "We start by mapping where your data lives and how it flows, then design pipelines and reporting layers that consolidate it into a single, reliable source of truth. From there, we build dashboards and automated reporting tailored to the decisions your business actually needs to make — not generic, one-size-fits-all metrics.",
      "The result is faster, more confident decision-making, with less manual reporting work for your team.",
    ],
    delivers: [
      "Data pipeline design & automation",
      "Reporting & dashboard development",
      "Business intelligence solutions",
      "Data integration across systems",
      "Analytics strategy & consulting",
    ],
    focus: ["Power BI", "Snowflake", "Data Warehousing", "ETL Pipelines", "Real-Time Analytics", "Governance"],
  },
  {
    slug: "devops-automation",
    title: "DevOps & Automation",
    icon: "pipeline",
    short:
      "Accelerate software delivery with CI/CD pipelines, infrastructure automation, containerization, and cloud-native deployment strategies.",
    narrative: [
      "Slow, manual releases create risk and drain engineering time that should be spent building. Frontier One Technology helps organizations modernize how software gets delivered — safely and quickly.",
      "We design CI/CD pipelines that automate testing and deployment, containerize applications for consistency across environments, and codify infrastructure so environments are reproducible and auditable rather than manually configured.",
      "The outcome is a delivery process your engineering team can trust: faster releases, fewer deployment surprises, and infrastructure that scales cleanly as your product grows.",
    ],
    delivers: [
      "CI/CD pipeline design & implementation",
      "Infrastructure as Code",
      "Containerization (Docker/Kubernetes)",
      "Cloud-native deployment strategy",
      "Release process automation",
    ],
    focus: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Monitoring"],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    icon: "sparks",
    short:
      "Leverage intelligent automation and AI-powered solutions to improve customer experiences, streamline operations, and support faster decision-making.",
    narrative: [
      "AI delivers real business value when it's applied to a specific, well-defined problem — not when it's added for its own sake. Frontier One Technology approaches AI the same way we approach every technology decision: starting with the business outcome, not the buzzword.",
      "We help organizations identify where intelligent automation can meaningfully reduce manual work, where AI-assisted tools can improve customer-facing experiences, and where predictive or analytical models can support faster, better-informed decisions.",
      "Every AI implementation we deliver is built with the same engineering discipline as the rest of our work — secure, explainable where it matters, and integrated cleanly into your existing systems and workflows.",
    ],
    delivers: [
      "Intelligent process automation",
      "AI-assisted customer experience tools",
      "Predictive analytics",
      "Workflow & document automation",
      "AI strategy & integration consulting",
    ],
    focus: ["AI Automation", "Conversational AI", "Document Processing", "Predictive Analytics", "Recommendations"],
  },
];

export const WHY_CARDS = [
  {
    title: "Business First",
    body: "Every solution begins with understanding your business—not just your technology.",
    icon: "compass",
  },
  {
    title: "Experienced Engineers",
    body: "Our specialists work across cloud platforms, enterprise applications, cybersecurity, and software development.",
    icon: "layers",
  },
  {
    title: "Long-Term Partnership",
    body: "We don't simply deliver projects. We become an extension of your technology team.",
    icon: "handshake",
  },
  {
    title: "Future Ready",
    body: "We design scalable solutions that continue supporting your business as it grows.",
    icon: "trend",
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "We begin by understanding your business, current technology landscape, challenges, and long-term goals. Every successful project starts with asking the right questions.",
  },
  {
    n: "02",
    title: "Assess",
    body: "Our team evaluates your existing infrastructure, applications, workflows, and security posture to identify opportunities for improvement and potential risks before development begins.",
  },
  {
    n: "03",
    title: "Strategize",
    body: "Based on our findings, we create a practical roadmap that outlines the recommended technologies, project milestones, timelines, and implementation strategy tailored to your organization.",
  },
  {
    n: "04",
    title: "Design",
    body: "We design scalable architectures, intuitive user experiences, and secure technical solutions that are built to support both your current operations and future growth.",
  },
  {
    n: "05",
    title: "Develop",
    body: "Our engineers build, integrate, and configure technology solutions using modern development practices while maintaining high standards for quality, performance, and security.",
  },
  {
    n: "06",
    title: "Validate",
    body: "Before deployment, every solution undergoes comprehensive testing, performance validation, security reviews, and quality assurance to ensure it meets business and technical expectations.",
  },
  {
    n: "07",
    title: "Deploy",
    body: "We carefully implement the solution with minimal disruption, ensuring a smooth transition through structured deployment, documentation, and knowledge transfer.",
  },
  {
    n: "08",
    title: "Support & Evolve",
    body: "Technology continues to evolve, and so do we. After deployment, we provide ongoing support, optimization, maintenance, and strategic guidance to help your business adapt and grow with confidence.",
  },
];

export const INDUSTRIES = [
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: "bank",
    description:
      "Banks, financial institutions, fintech companies, and investment firms rely on secure, compliant, and highly available technology. We help modernize financial platforms, strengthen identity and access management, improve data visibility, and support cloud adoption while maintaining regulatory standards.",
    solutions: [
      "Secure Cloud Infrastructure",
      "Identity & Access Management (IAM)",
      "Data Analytics & Reporting",
      "API Integration",
      "Process Automation",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "pulse",
    description:
      "Healthcare organizations depend on reliable and secure systems to support patient care and operational efficiency. We assist healthcare providers and healthcare technology companies with secure application development, cloud modernization, workflow automation, and analytics solutions.",
    solutions: [
      "Healthcare Application Development",
      "Data Integration",
      "Cloud Migration",
      "Security & Compliance Support",
      "Business Intelligence Dashboards",
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    icon: "cart",
    description:
      "Modern retailers require scalable digital platforms that deliver seamless customer experiences. We help businesses optimize online platforms, automate operations, improve inventory visibility, and analyze customer data for smarter decision-making.",
    solutions: [
      "E-Commerce Platforms",
      "Inventory Analytics",
      "Customer Data Solutions",
      "Cloud Infrastructure",
      "Performance Optimization",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "factory",
    description:
      "Manufacturing organizations rely on technology to improve operational efficiency and production visibility. We develop solutions that connect systems, automate workflows, and provide real-time insights for better operational performance.",
    solutions: [
      "ERP Integration",
      "Production Analytics",
      "Workflow Automation",
      "Cloud Infrastructure",
      "Operational Dashboards",
    ],
  },
  {
    slug: "technology",
    name: "Technology",
    icon: "cpu",
    description:
      "Growing technology companies need scalable systems that can evolve with their business. We support software companies, SaaS providers, and digital startups with cloud engineering, application development, DevOps, and modern infrastructure solutions.",
    solutions: ["SaaS Development", "API Development", "DevOps & CI/CD", "Cloud Architecture", "Platform Engineering"],
  },
  {
    slug: "education",
    name: "Education",
    icon: "book",
    description:
      "Educational institutions and EdTech organizations are embracing digital transformation to improve learning experiences and administrative operations. We help implement secure, scalable technology solutions that support both educators and students.",
    solutions: [
      "Learning Management Systems",
      "Cloud Solutions",
      "Identity Management",
      "Collaboration Platforms",
      "Analytics & Reporting",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "briefcase",
    description:
      "Consulting firms, legal practices, accounting firms, and other professional service organizations require dependable technology that supports collaboration, security, and operational efficiency. We help modernize business processes through cloud solutions and automation.",
    solutions: [
      "Business Process Automation",
      "Microsoft 365 Solutions",
      "Secure File Management",
      "Data Reporting",
      "Cloud Migration",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "truck",
    description:
      "Logistics companies require accurate data, system integration, and real-time visibility across operations. We build solutions that improve shipment tracking, reporting, warehouse operations, and supply chain decision-making.",
    solutions: [
      "Supply Chain Analytics",
      "Warehouse Dashboards",
      "Cloud Integration",
      "Data Automation",
      "Operational Reporting",
    ],
  },
];

export const STATS = [
  { value: 10, suffix: "+", label: "Technology Domains", body: "Delivering expertise across cloud, cybersecurity, software engineering, AI, DevOps, data, automation, and enterprise IT." },
  { value: 50, suffix: "+", label: "Enterprise Technologies", body: "Working with modern platforms, frameworks, cloud services, and development tools to build scalable business solutions." },
  { value: null, display: "24/7", label: "Technical Support", body: "Providing responsive assistance and continuous operational support whenever your business needs it." },
  { value: 100, suffix: "%", label: "Tailored Solutions", body: "Every solution is designed around your business objectives, infrastructure, and long-term growth strategy." },
  { value: 8, suffix: "-Step", label: "Delivery Framework", body: "A proven methodology covering discovery, strategy, design, development, testing, deployment, support, and optimization." },
  { value: null, display: "Security-First", label: "Engineering Approach", body: "Security, compliance, and reliability are embedded into every solution from day one." },
  { value: null, display: "End-to-End", label: "Technology Services", body: "Supporting organizations through every stage—from consulting and architecture to implementation and ongoing support." },
  { value: null, display: "One Partner", label: "Unlimited Possibilities", body: "A trusted technology partner focused on building lasting relationships and delivering measurable business value." },
];

export const CORE_VALUES = [
  { title: "Integrity Before Everything", body: "We communicate honestly, set realistic expectations, and always recommend what is best for our clients—even when it's not the easiest solution." },
  { title: "Technology with Purpose", body: "Every solution should solve a real business challenge. We never implement technology simply because it's trending." },
  { title: "Accountability at Every Step", body: "From planning to deployment and ongoing support, we take ownership of our work and remain committed to delivering results." },
  { title: "Continuous Learning", body: "Technology evolves every day. We invest in learning, improvement, and innovation so our clients always benefit from current best practices." },
  { title: "Security by Design", body: "Security is considered from the very beginning of every project rather than being added as an afterthought." },
  { title: "Stronger Together", body: "The best outcomes come from collaboration. We work closely with clients, partners, and one another to achieve shared success." },
];

export const JOURNEY = [
  { year: "2020", title: "The Idea Started", body: "The journey began with a simple observation: businesses were adopting technology faster than ever, but many still struggled with practical implementation, security, and long-term scalability." },
  { year: "2021", title: "Building Technical Direction", body: "We started shaping our focus around software development, cloud solutions, cybersecurity, and business technology support." },
  { year: "2022", title: "Expanding Knowledge & Capabilities", body: "Our expertise grew across modern platforms, automation, data solutions, and enterprise technology environments." },
  { year: "2023", title: "From Skills to Solutions", body: "We began turning technical knowledge into structured service offerings designed to solve real business problems." },
  { year: "2024", title: "Creating a Strong Service Model", body: "Our approach became more defined: understand the business first, design practical solutions, and provide support beyond deployment." },
  { year: "2025", title: "Preparing for Growth", body: "We expanded our vision into a full technology consulting model, focusing on cloud, AI, cybersecurity, data, DevOps, and enterprise IT services." },
  { year: "2026", title: "Frontier One Technology", body: "Frontier One Technology was built with a clear mission: to deliver secure, scalable, and business-focused technology solutions that create long-term value." },
];

export const TECH_MARQUEE = [
  "AWS", "Microsoft Azure", "Google Cloud", "Microsoft 365", "Okta", "Docker",
  "Kubernetes", "Python", "React", ".NET", "Java", "Snowflake", "Power BI",
];

export const TECH_STACK = [
  { category: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
  { category: "Programming", items: ["Python", "Java", ".NET", "Node.js", "React", "Angular"] },
  { category: "Data", items: ["SQL", "Snowflake", "PostgreSQL", "MongoDB", "Power BI", "Tableau"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins"] },
  { category: "Security", items: ["Okta", "Microsoft Entra ID", "Microsoft Defender", "Splunk", "CrowdStrike"] },
];

export const SERVICES_FAQ = [
  { q: "What technology services does Frontier One Technology offer?", a: "We provide end-to-end technology solutions, including cloud consulting, custom software development, cybersecurity, DevOps, data analytics, AI solutions, and managed IT services. Every solution is tailored to your business goals." },
  { q: "How do you determine the right solution for our business?", a: "Every engagement begins with understanding your business objectives, existing systems, and future plans. We then recommend practical, scalable solutions that align with your operational needs and long-term growth." },
  { q: "Can you work with our existing technology environment?", a: "Yes. We frequently integrate with existing systems, modernize legacy applications, and enhance current infrastructure without disrupting day-to-day business operations whenever possible." },
  { q: "How do you ensure project quality and security?", a: "Quality and security are built into every stage of our delivery process. From planning and development to testing and deployment, we follow proven engineering practices to deliver reliable, secure, and high-performing solutions." },
  { q: "Do you provide ongoing support after deployment?", a: "Absolutely. Our relationship doesn't end at launch. We offer continuous monitoring, maintenance, optimization, and technical support to ensure your solutions continue performing as your business evolves." },
  { q: "How do we get started with Frontier One Technology?", a: "Simply reach out through our contact form or schedule a consultation. We'll discuss your requirements, understand your objectives, and recommend the best path forward for your business." },
];

export const CAREERS_FAQ = [
  { q: "What kind of professionals are you looking for?", a: "We're always looking for talented individuals in software engineering, cloud computing, cybersecurity, DevOps, data engineering, AI, business analysis, and enterprise IT who are passionate about solving real business challenges." },
  { q: "What does the hiring process look like?", a: "Our hiring process typically includes an application review, an initial conversation with our recruitment team, a technical or role-specific assessment, and a final interview to ensure the right fit for both you and our team." },
  { q: "Do you offer opportunities for career growth?", a: "Yes. We believe learning never stops. Our team members are encouraged to expand their skills through mentorship, hands-on project experience, technical training, and continuous professional development." },
  { q: "Do you hire recent graduates or entry-level professionals?", a: "Absolutely. We welcome motivated graduates and early-career professionals who are eager to learn, grow, and contribute to meaningful technology projects alongside experienced teams." },
  { q: "What makes Frontier One Technology a great place to work?", a: "We foster a collaborative environment where innovation, accountability, and continuous learning are part of our culture. Every team member has the opportunity to contribute, grow professionally, and make a meaningful impact." },
  { q: "How can I apply for a position?", a: "Browse our current openings on the Careers page and submit your application online. If you don't see a role that matches your background, you can join our talent network to be considered for future opportunities." },
];

export const JOBS = [
  {
    slug: "software-engineer",
    title: "Software Engineer",
    type: "Full-Time",
    experience: "2–5 Years",
    salary: "$85,000 – $120,000/year",
    location: "United States (Hybrid/Remote)",
    summary: "Design, develop, and maintain scalable web applications and backend services while collaborating with cross-functional teams to deliver reliable software solutions.",
    skills: ["Python, Java, or .NET", "REST APIs", "SQL & NoSQL Databases", "Git", "Cloud Platforms"],
    responsibilities: [
      "Design, build, and maintain scalable web applications and backend services",
      "Write clean, well-tested, maintainable code and participate in code reviews",
      "Collaborate with product, design, and engineering peers to translate requirements into working software",
      "Integrate applications with internal and third-party APIs",
      "Support deployment and troubleshoot issues across the software lifecycle",
    ],
    requirements: [
      "2–5 years of professional software engineering experience",
      "Proficiency in Python, Java, or .NET",
      "Experience building and consuming REST APIs",
      "Working knowledge of SQL and NoSQL databases",
      "Comfortable with Git-based workflows and cloud-hosted environments",
    ],
  },
  {
    slug: "cloud-engineer",
    title: "Cloud Engineer",
    type: "Full-Time",
    experience: "2–6 Years",
    salary: "$95,000 – $135,000/year",
    location: "United States",
    summary: "Build and manage secure cloud environments, automate infrastructure, and support enterprise cloud migration initiatives.",
    skills: ["AWS or Azure", "Terraform", "Docker", "Kubernetes", "Networking"],
    responsibilities: [
      "Design and manage secure, scalable cloud environments",
      "Automate infrastructure provisioning using Infrastructure as Code",
      "Support enterprise cloud migration projects end-to-end",
      "Monitor cloud environments for performance, cost, and security",
      "Collaborate with engineering and security teams on architecture decisions",
    ],
    requirements: [
      "2–6 years of cloud engineering experience on AWS or Azure",
      "Hands-on experience with Terraform",
      "Practical experience with Docker and Kubernetes",
      "Solid understanding of networking fundamentals",
      "Comfortable working in client-facing migration engagements",
    ],
  },
  {
    slug: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    type: "Full-Time",
    experience: "2–5 Years",
    salary: "$90,000 – $130,000/year",
    location: "United States",
    summary: "Protect enterprise systems by monitoring security events, managing identity solutions, conducting risk assessments, and implementing security best practices.",
    skills: ["IAM", "Okta", "Microsoft Entra ID", "SIEM", "Security Monitoring"],
    responsibilities: [
      "Monitor security events and respond to potential incidents",
      "Manage identity and access solutions across client environments",
      "Conduct risk assessments and recommend remediation steps",
      "Support compliance initiatives with documentation and controls testing",
      "Implement and maintain security best practices across projects",
    ],
    requirements: [
      "2–5 years in a cybersecurity or IT security role",
      "Experience with IAM platforms such as Okta or Microsoft Entra ID",
      "Familiarity with SIEM tools and security monitoring workflows",
      "Understanding of common compliance frameworks",
      "Strong analytical and incident-response skills",
    ],
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    type: "Full-Time",
    experience: "2–5 Years",
    salary: "$100,000 – $145,000/year",
    location: "United States",
    summary: "Develop modern data pipelines, optimize databases, and support analytics initiatives that enable informed business decisions.",
    skills: ["SQL", "Python", "Snowflake", "ETL", "Power BI"],
    responsibilities: [
      "Design and build modern, reliable data pipelines",
      "Optimize databases and query performance",
      "Support analytics and reporting initiatives with clean, well-modeled data",
      "Partner with business stakeholders to understand data requirements",
      "Maintain data quality and documentation standards",
    ],
    requirements: [
      "2–5 years of data engineering experience",
      "Strong SQL and Python skills",
      "Experience with Snowflake or similar cloud data platforms",
      "Hands-on ETL/ELT pipeline experience",
      "Familiarity with Power BI or similar reporting tools",
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    type: "Full-Time",
    experience: "3–6 Years",
    salary: "$105,000 – $145,000/year",
    location: "United States",
    summary: "Automate software delivery, manage cloud infrastructure, and build CI/CD pipelines that improve deployment speed and reliability.",
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
    responsibilities: [
      "Build and maintain CI/CD pipelines for reliable, frequent releases",
      "Manage cloud infrastructure using automation and Infrastructure as Code",
      "Improve deployment speed, consistency, and observability",
      "Support containerized application delivery",
      "Collaborate with engineering teams to streamline development workflows",
    ],
    requirements: [
      "3–6 years of DevOps or infrastructure engineering experience",
      "Hands-on experience with Docker and Kubernetes",
      "Experience with Jenkins or similar CI/CD tooling",
      "Proficiency with Terraform",
      "Working knowledge of AWS",
    ],
  },
  {
    slug: "ai-ml-engineer",
    title: "AI / Machine Learning Engineer",
    type: "Full-Time",
    experience: "2–5 Years",
    salary: "$110,000 – $155,000/year",
    location: "United States",
    summary: "Build AI-powered applications, intelligent automation solutions, and machine learning models that solve real-world business challenges.",
    skills: ["Python", "Machine Learning", "LLMs", "APIs", "Cloud Platforms"],
    responsibilities: [
      "Design and build AI-powered applications and automation solutions",
      "Develop and evaluate machine learning models for real business use cases",
      "Integrate AI/LLM capabilities into existing products and workflows",
      "Work with cross-functional teams to identify high-value automation opportunities",
      "Ensure solutions are secure, explainable, and production-ready",
    ],
    requirements: [
      "2–5 years of experience in machine learning or AI engineering",
      "Strong Python skills",
      "Practical experience with LLMs and modern ML frameworks",
      "Experience integrating models via APIs",
      "Familiarity with cloud platforms for model deployment",
    ],
  },
  {
    slug: "business-analyst",
    title: "Business Analyst",
    type: "Full-Time",
    experience: "2–5 Years",
    salary: "$75,000 – $105,000/year",
    location: "United States",
    summary: "Work with clients and technical teams to gather requirements, improve business processes, and support successful project delivery.",
    skills: ["Requirements Gathering", "Agile", "SQL", "Jira", "Process Analysis"],
    responsibilities: [
      "Gather and document business and technical requirements",
      "Work directly with clients and engineering teams throughout project delivery",
      "Identify process improvement opportunities",
      "Support Agile ceremonies and project tracking",
      "Translate business needs into clear, actionable specifications",
    ],
    requirements: [
      "2–5 years of business analysis experience",
      "Strong requirements-gathering and documentation skills",
      "Experience working in Agile environments",
      "Working knowledge of SQL",
      "Familiarity with Jira or similar tools",
    ],
  },
  {
    slug: "it-support-engineer",
    title: "IT Support Engineer",
    type: "Full-Time",
    experience: "1–4 Years",
    salary: "$60,000 – $85,000/year",
    location: "United States",
    summary: "Provide technical support, troubleshoot hardware and software issues, manage user accounts, and maintain secure IT operations.",
    skills: ["Windows", "Microsoft 365", "Active Directory", "Networking", "Help Desk"],
    responsibilities: [
      "Provide responsive technical support to end users",
      "Troubleshoot hardware, software, and connectivity issues",
      "Manage user accounts and access within Active Directory",
      "Support and maintain Microsoft 365 environments",
      "Escalate and document recurring issues to improve long-term reliability",
    ],
    requirements: [
      "1–4 years of IT support or help desk experience",
      "Working knowledge of Windows environments",
      "Experience with Microsoft 365 administration",
      "Familiarity with Active Directory",
      "Basic networking troubleshooting skills",
    ],
  },
];

export const BENEFITS = [
  "Competitive Compensation",
  "Flexible Work Environment",
  "Career Growth Opportunities",
  "Hands-On Project Experience",
  "Technical Learning & Certification Support",
  "Collaborative Team Culture",
  "Paid Time Off",
  "Health & Wellness Benefits",
  "Performance-Based Recognition",
  "Modern Technology Stack",
];

/* Technologies rendered as real brand marks (public/tech/<slug>.svg).
   The handful without a freely-licensed mark fall back to a monogram. */
export const TECHNOLOGIES = [
  { name: "AWS", slug: "aws", category: "Cloud", wide: true },
  { name: "Microsoft Azure", slug: "azure", category: "Cloud" },
  { name: "Google Cloud", slug: "gcp", category: "Cloud" },
  { name: "Python", slug: "python", category: "Programming" },
  { name: "Java", slug: "java", category: "Programming" },
  { name: ".NET", slug: "dotnet", category: "Programming" },
  { name: "Node.js", slug: "nodejs", category: "Programming" },
  { name: "React", slug: "react", category: "Programming" },
  { name: "Angular", slug: "angular", category: "Programming" },
  { name: "SQL Server", slug: "sqlserver", category: "Data" },
  { name: "Snowflake", slug: "snowflake", category: "Data" },
  { name: "PostgreSQL", slug: "postgresql", category: "Data" },
  { name: "MongoDB", slug: "mongodb", category: "Data" },
  { name: "Power BI", mono: "BI", category: "Data" },
  { name: "Tableau", mono: "TB", category: "Data" },
  { name: "Docker", slug: "docker", category: "DevOps" },
  { name: "Kubernetes", slug: "kubernetes", category: "DevOps" },
  { name: "Terraform", slug: "terraform", category: "DevOps" },
  { name: "GitHub Actions", slug: "githubactions", category: "DevOps" },
  { name: "Jenkins", slug: "jenkins", category: "DevOps" },
  { name: "Okta", slug: "okta", category: "Security" },
  { name: "Microsoft Entra ID", mono: "EID", category: "Security" },
  { name: "Microsoft Defender", mono: "DEF", category: "Security" },
  { name: "Splunk", slug: "splunk", category: "Security" },
  { name: "CrowdStrike", mono: "CS", category: "Security" },
];

export const TECH_CATEGORIES = ["Cloud", "Programming", "Data", "DevOps", "Security"];
