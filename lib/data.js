/* ────────────────────────────────────────────────────────────────
   FRONTIER ONE TECHNOLOGY — Site content
   All CLIENT-APPROVED copy is verbatim from the Full Content
   Document v1.0. Do not reword approved strings.
──────────────────────────────────────────────────────────────── */

/* Primary navigation. Insights (/blog) is deliberately absent — the client
   asked for it in the footer only, so it lives in FOOTER_LINKS instead.
   Order here drives the desktop rail; Navbar filters out Home and Contact
   (Contact is promoted to the CTA button). */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Career", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* Footer Company column — same as the primary nav, plus the Blog link
   (kept out of the navbar per client request). */
export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Career", href: "/careers" },
  { label: "Blog", href: "/blog" },
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

/* ────────────────────────────────────────────────────────────────
   Per-service detail — every /services/<slug> page runs the same
   sequence: Overview → Business Challenges → Our Solution →
   How We Work → Technologies → Business Benefits → Industries →
   FAQs → Related Services → Contact. Keyed by the SERVICES slug.
   `industries` holds INDUSTRIES slugs so the two datasets stay in sync.
──────────────────────────────────────────────────────────────── */
export const SERVICE_DETAIL = {
  "cloud-solutions": {
    challenges: [
      { title: "Cloud spend that outgrows its value", body: "Idle instances, oversized storage tiers, and environments nobody switched off inflate the monthly invoice without improving performance." },
      { title: "Migrations that relocate old problems", body: "Lifting an unexamined estate onto new infrastructure carries every fragile dependency and manual workaround along with it." },
      { title: "Access that was never revoked", body: "Permissions granted for a project and left in place quietly become the widest part of the attack surface." },
      { title: "An unproven recovery position", body: "Backups run on schedule, but nobody can say how long a full restore takes or what the downtime would cost." },
    ],
    solutionLede:
      "We treat the cloud as an operating decision rather than a hosting decision — what moves, in what order, at what cost, and who runs it afterwards.",
    solution: [
      { title: "Assessment before architecture", body: "Every workload is inventoried, costed, and scored for migration readiness before anything moves." },
      { title: "Right-sized, secure architecture", body: "Networks, identity, and data boundaries designed around your compliance position instead of copied from a reference diagram." },
      { title: "Phased migration", body: "Workloads move in waves with a rollback path defined for each one, so continuity is never traded for schedule." },
      { title: "Managed operations", body: "Cost review, patching, monitoring, and recovery testing continue after go-live under an agreed support model." },
    ],
    tech: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker", "Microsoft Entra ID", "Microsoft 365"],
    benefits: [
      { title: "Predictable infrastructure spend", body: "Right-sized environments and per-workload cost visibility replace an invoice nobody can explain." },
      { title: "Capacity that follows demand", body: "Environments scale with real load instead of being provisioned for a peak that rarely arrives." },
      { title: "A recovery position you can prove", body: "Documented recovery targets, tested on a schedule rather than assumed." },
      { title: "Less operational overhead", body: "Automation and managed services absorb the patching and provisioning work that consumes internal engineering time." },
    ],
    industries: ["financial-services", "healthcare", "retail-ecommerce", "manufacturing", "technology", "professional-services"],
    faqs: [
      { q: "How long does a cloud migration take?", a: "It depends on the size and complexity of the estate. A single application usually moves in weeks; a multi-system enterprise migration runs in phases across several months. You get a phased schedule after the readiness assessment, not before it." },
      { q: "Will our systems be offline during the migration?", a: "Migrations are planned in waves, each with its own rollback path. Most workloads move with little or no user-visible downtime, and anything that needs a cutover window is scheduled with you well in advance." },
      { q: "Can you work with our existing AWS or Azure environment?", a: "Yes. A large share of our cloud work is improving environments that already exist — tightening access, reducing spend, adding resilience, and cleaning up architecture that grew organically." },
      { q: "Do you help reduce cloud costs?", a: "Cost optimization is part of every engagement. We review instance sizing, storage tiers, reserved capacity, and idle resources, then set up reporting so spend stays visible long after we hand over." },
      { q: "What happens once the migration is complete?", a: "You can take full ownership with documentation and knowledge transfer, or keep us on for ongoing cloud management, monitoring, and optimization under a managed service agreement." },
    ],
  },

  "software-engineering": {
    challenges: [
      { title: "Software that no longer fits the business", body: "Teams work around the product with spreadsheets and manual steps because the system was never shaped to how they actually operate." },
      { title: "Legacy code nobody wants to touch", body: "Undocumented, untested code makes every change slow to estimate and risky to release." },
      { title: "Disconnected systems", body: "The same data is re-keyed between tools because the platforms were never integrated properly." },
      { title: "Delivery that stalls after launch", body: "The original build team moves on, and no one clearly owns the roadmap, the backlog, or the fixes." },
    ],
    solutionLede:
      "We start with the business problem and the workflow around it, then build software your team can keep extending long after the engagement ends.",
    solution: [
      { title: "Problem framing first", body: "The outcome and the workflow are defined with your stakeholders before any framework or platform is chosen." },
      { title: "Maintainable architecture", body: "Clear service boundaries, documented interfaces, and automated tests, so future change stays cheap." },
      { title: "Clean integration", body: "APIs and data flows that connect to the systems you already run instead of replacing them wholesale." },
      { title: "Disciplined delivery", body: "Code review, continuous integration, and release notes on every iteration — you always know exactly what shipped." },
    ],
    tech: ["Python", "Java", ".NET", "Node.js", "React", "Angular", "PostgreSQL", "MongoDB", "REST & GraphQL APIs", "Docker"],
    benefits: [
      { title: "Software that matches the workflow", body: "Fewer manual workarounds and less shadow process running alongside the system." },
      { title: "A lower cost of change", body: "Tested, documented code keeps future changes measured in days rather than quarters." },
      { title: "No lock-in", body: "You own the source, the pipeline, and the documentation from the first commit." },
      { title: "A platform that scales", body: "Architecture that absorbs more users, more data, and more integrations without a rewrite." },
    ],
    industries: ["financial-services", "healthcare", "retail-ecommerce", "technology", "professional-services", "logistics"],
    faqs: [
      { q: "Do you build from scratch or improve existing applications?", a: "Both. Roughly half of our engineering work is new development and half is modernizing, extending, or stabilizing systems that are already in production." },
      { q: "Who owns the code you write?", a: "You do. Source, infrastructure definitions, pipelines, and documentation are yours and are handed over in your own repositories throughout the engagement, not at the end of it." },
      { q: "How do you keep a project on schedule?", a: "Work is delivered in short iterations against an agreed scope, with a demo and a written status at the end of each one. Slippage becomes visible in the first iteration it happens, not in the last month of the project." },
      { q: "Can you work alongside our internal engineering team?", a: "Yes. We regularly work as an embedded part of a client team, using your repositories, your ceremonies, and your definition of done — see our dedicated team and staff augmentation models." },
      { q: "What happens after the application goes live?", a: "We provide warranty support, documentation, and knowledge transfer as standard, and can continue with a support and enhancement agreement if you would rather not carry it internally." },
    ],
  },

  cybersecurity: {
    challenges: [
      { title: "Identity sprawl", body: "Employee, contractor, and service accounts accumulate across systems with no single view of who can reach what." },
      { title: "Compliance held together with documents", body: "Policies exist on paper, but the technical controls behind them were never fully implemented or tested." },
      { title: "Alerts nobody triages", body: "Monitoring tools produce volume rather than signal, so genuine incidents surface late — often from outside the business." },
      { title: "Security added at the end", body: "Reviews happen days before launch, when changing the architecture is at its most expensive." },
    ],
    solutionLede:
      "Security work should reduce real risk in a measurable order, starting with the exposure most likely to cost you something.",
    solution: [
      { title: "Risk-based assessment", body: "Exposure is mapped across identity, data, endpoints, and cloud, then remediation is ranked by business impact rather than scanner severity." },
      { title: "Modern identity & access", body: "SSO, MFA, least-privilege roles, and joiner–mover–leaver processes that stay accurate as people and projects change." },
      { title: "Controls auditors accept", body: "Compliance requirements translated into working, evidenced technical controls instead of policy documents." },
      { title: "Continuous monitoring", body: "Detection tuned to your environment with a defined response path, so an alert reliably leads to an action." },
    ],
    tech: ["Okta", "Microsoft Entra ID", "Microsoft Defender", "Splunk", "CrowdStrike", "Zero Trust Architecture", "SIEM", "MFA & SSO"],
    benefits: [
      { title: "A smaller attack surface", body: "Standing privilege, orphaned accounts, and unnecessary public exposure removed and kept removed." },
      { title: "Audit evidence on demand", body: "Controls, logs, and access reviews organized so a compliance request takes hours rather than weeks." },
      { title: "Faster, calmer incident response", body: "A documented, rehearsed response path replaces an improvised one under pressure." },
      { title: "Security that doesn't slow delivery", body: "Controls built into the pipeline and the architecture, so teams ship without waiting on a final security gate." },
    ],
    industries: ["financial-services", "healthcare", "professional-services", "education", "technology", "retail-ecommerce"],
    faqs: [
      { q: "Where should we start if we've never had a security review?", a: "With an assessment. We establish what you run, who can reach it, and where the real exposure sits, then hand you a prioritized remediation plan with effort and impact against each item." },
      { q: "Do you help with compliance frameworks?", a: "Yes. We translate framework requirements into technical controls, implement them, and assemble the evidence so audits are supported by working systems rather than documentation alone." },
      { q: "Can you improve security without disrupting our users?", a: "Identity changes are the ones users feel, so they are rolled out in stages with communication and a fallback at each step. Most other hardening is invisible to day-to-day work." },
      { q: "Do you provide ongoing monitoring?", a: "We do — either by tuning and running monitoring in your existing tools, or by standing up detection and response with an agreed escalation path and response standard." },
      { q: "How often should security controls be reviewed?", a: "Access reviews quarterly, a full posture review annually, and a targeted review after any major architecture change, acquisition, or significant staffing change." },
    ],
  },

  "data-analytics": {
    challenges: [
      { title: "Data spread across disconnected systems", body: "The CRM, the finance platform, and the operational tools each hold part of the answer and none of them agree." },
      { title: "Reporting built by hand", body: "Analysts spend days assembling spreadsheets that are outdated by the time they reach the meeting." },
      { title: "No agreed source of truth", body: "Two teams present two different revenue numbers, and the meeting turns into a discussion about the data instead of the decision." },
      { title: "Dashboards nobody opens", body: "Reports were designed around available metrics rather than around the decisions the business actually makes." },
    ],
    solutionLede:
      "We work backwards from the decisions you need to make, then build the pipeline and the reporting layer that support them reliably.",
    solution: [
      { title: "Map the data landscape", body: "Where data originates, how it moves, where it breaks, and which system should own each definition." },
      { title: "Governed pipelines", body: "Automated, monitored ETL/ELT into a single, well-modeled reporting layer with data quality checks in the flow." },
      { title: "Decision-first dashboards", body: "Reporting designed around the questions leadership and operations actually ask, with definitions documented on the page." },
      { title: "Automated distribution", body: "Scheduled refreshes, alerting on thresholds, and reports that arrive without anyone assembling them." },
    ],
    tech: ["Snowflake", "Power BI", "Tableau", "SQL Server", "PostgreSQL", "Python", "ETL & ELT Pipelines", "Data Warehousing"],
    benefits: [
      { title: "Reporting hours returned to the team", body: "Manual spreadsheet assembly is replaced by refreshes that run on their own." },
      { title: "One number everyone trusts", body: "Shared definitions and a single reporting layer end the meeting-time debate about whose figure is right." },
      { title: "Faster decisions", body: "Current data available when the decision is made, not a fortnight afterwards." },
      { title: "Analytics that scale", body: "A modeled warehouse absorbs new sources and new questions without a rebuild each time." },
    ],
    industries: ["financial-services", "healthcare", "retail-ecommerce", "manufacturing", "logistics", "education"],
    faqs: [
      { q: "Do we need a data warehouse to get started?", a: "Not always. Smaller estates can be served by well-built pipelines directly into a reporting tool. A warehouse earns its place once several systems, several teams, or historical trend analysis are involved." },
      { q: "Which reporting tools do you work with?", a: "Most often Power BI and Tableau, alongside cloud-native reporting on Snowflake and the major cloud data platforms. Where you already have a licensed tool, we build in it rather than adding another." },
      { q: "How do you handle sensitive data?", a: "Access is modeled before anything moves — row-level security, masking for restricted fields, and audited access. Data protection is designed into the pipeline, not applied to the dashboard afterwards." },
      { q: "Can you fix the reports we already have?", a: "Yes. Rebuilding the model and the definitions behind an existing dashboard is often faster and less disruptive than starting the reporting layer again." },
      { q: "How do you make sure the dashboards get used?", a: "We design them with the people who will make the decisions, then run adoption sessions after launch and review usage so reporting that is being ignored gets fixed or retired." },
    ],
  },

  "devops-automation": {
    challenges: [
      { title: "Releases that need a weekend", body: "Manual deployment steps and hand-written checklists mean shipping is scheduled around risk rather than readiness." },
      { title: "Environments that drift apart", body: "Staging stops resembling production, so bugs appear for the first time in front of customers." },
      { title: "No visibility when something breaks", body: "Diagnosing an incident starts with finding the logs instead of reading them." },
      { title: "Fear of deploying", body: "Without automated tests and a rollback path, every release is a judgement call rather than a routine event." },
    ],
    solutionLede:
      "Delivery should be routine. We automate the path from commit to production so releasing becomes a decision about business timing, not engineering nerve.",
    solution: [
      { title: "CI/CD pipelines", body: "Build, test, security scan, and deploy automated end to end, with promotion gates you control." },
      { title: "Infrastructure as Code", body: "Environments defined in version control, so they are reproducible, reviewable, and identical from dev to production." },
      { title: "Containerized delivery", body: "Consistent runtime packaging with orchestration sized to your actual scale, not to a conference talk." },
      { title: "Observability built in", body: "Metrics, logs, traces, and alerting wired up at deployment rather than after the first outage." },
    ],
    tech: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "AWS", "Azure DevOps", "Prometheus & Grafana"],
    benefits: [
      { title: "Release when the business is ready", body: "Deployments become routine and low-drama, so features reach customers on a business schedule." },
      { title: "Fewer failed deployments", body: "Automated testing and identical environments remove the surprises that make releases fail." },
      { title: "Faster recovery", body: "A defined rollback and real observability shorten incidents from hours to minutes." },
      { title: "Engineering time returned", body: "Automation absorbs the manual release and provisioning work that quietly consumes senior engineers." },
    ],
    industries: ["technology", "financial-services", "retail-ecommerce", "healthcare", "manufacturing", "logistics"],
    faqs: [
      { q: "Do we have to move to Kubernetes?", a: "No. Kubernetes suits some workloads and is unnecessary overhead for others. We size the platform to your actual scale, team, and operating model — managed services and simpler container hosting are often the better answer." },
      { q: "Can you improve our existing pipeline instead of replacing it?", a: "Usually, yes. Most pipelines need reliability, test coverage, and clear promotion gates rather than a new tool, and improving what your team already knows is faster and safer." },
      { q: "How disruptive is this to the development team?", a: "The change is incremental. We automate one path to production first, prove it, and then migrate the remaining services, so the team keeps shipping throughout." },
      { q: "Do you handle security within the pipeline?", a: "Yes — dependency and image scanning, secrets management, and policy checks run inside the pipeline so problems surface at commit time rather than at a pre-launch review." },
      { q: "Who runs the platform afterwards?", a: "Your team, with documentation and training, or ours under a managed service. Either way the pipeline is built to be operated by an internal team rather than only by its authors." },
    ],
  },

  "artificial-intelligence": {
    challenges: [
      { title: "Pilots that never reach production", body: "Promising demonstrations stall because the data, the integration, or the ownership was never planned past the prototype." },
      { title: "High-volume manual document handling", body: "Skilled staff spend their week reading, classifying, and re-keying documents that follow a predictable pattern." },
      { title: "Unclear return on investment", body: "Nobody has quantified what the automation is worth, so the initiative competes badly against work with a hard number attached." },
      { title: "Unanswered data and governance questions", body: "Teams hesitate because it is unclear where data travels, who can see model output, and how decisions are recorded." },
    ],
    solutionLede:
      "AI earns its place when it is aimed at a specific, measurable task. We start from the process and the number attached to it, then build the smallest reliable thing that moves it.",
    solution: [
      { title: "Use-case selection", body: "Candidate processes scored on volume, error cost, and data readiness, so the first build is the one most likely to pay." },
      { title: "Data readiness", body: "The inputs the model depends on are sourced, cleaned, and access-controlled before any development starts." },
      { title: "Integrated deployment", body: "Output lands inside the systems people already use — the CRM, the ticket queue, the back-office platform — not in a separate tool." },
      { title: "Guardrails and measurement", body: "Human review where it matters, logged decisions, and a measured baseline so the improvement is provable." },
    ],
    tech: ["Python", "LLM APIs", "Azure AI", "AWS Bedrock", "Vector Databases", "Document AI & OCR", "MLOps Pipelines", "Predictive Models"],
    benefits: [
      { title: "Manual hours removed", body: "Repetitive classification, extraction, and routing work handled automatically, with exceptions escalated to people." },
      { title: "Faster customer response", body: "Assisted and automated responses shorten the wait without removing a human from the cases that need one." },
      { title: "Decisions supported by evidence", body: "Predictive and analytical output surfaced where the decision is made, with the reasoning available." },
      { title: "Controlled adoption", body: "Scope, data boundaries, and review steps defined up front, so AI enters the business deliberately." },
    ],
    industries: ["financial-services", "healthcare", "retail-ecommerce", "professional-services", "technology", "logistics"],
    faqs: [
      { q: "Is our business ready for AI?", a: "If you have a repetitive, high-volume process with reasonably consistent data, you are ready to automate part of it. Readiness is about the process and the data, not about company size." },
      { q: "Will our data be used to train public models?", a: "No. We design engagements so your data stays within your tenancy and contractual boundary, and we choose providers and deployment patterns that support that requirement." },
      { q: "How do you measure whether it worked?", a: "We record a baseline before launch — handling time, error rate, cost per case — and report against it afterwards. If the number does not move, the approach changes." },
      { q: "Does AI replace our team?", a: "In the engagements we run, it removes the repetitive portion of a role and escalates exceptions to people. The measurable gain is almost always capacity, not headcount reduction." },
      { q: "How long does a first AI implementation take?", a: "A focused, well-scoped automation typically reaches production in weeks. Broader initiatives are delivered in stages so value arrives before the whole programme is finished." },
    ],
  },
};

export const WHY_CARDS = [
  {
    title: "Business-First Approach",
    body: "Every solution begins with understanding your business—not just your technology. We map the objective, the constraints, and the cost before a single platform is recommended.",
    icon: "compass",
  },
  {
    title: "Security-First Engineering",
    body: "Security is designed in from the first architecture review—identity, access, and compliance handled before deployment rather than patched after an incident.",
    icon: "shield",
  },
  {
    title: "Transparent Communication",
    body: "Clear timelines, honest status updates, and a named point of contact who answers. You always know what is being built, what it costs, and what happens next.",
    icon: "chat",
  },
  {
    title: "Scalable Solutions",
    body: "We design scalable solutions that continue supporting your business as it grows—more users, more data, and new markets absorbed without a rebuild.",
    icon: "trend",
  },
  {
    title: "Long-Term Partnership",
    body: "We don't simply deliver projects. We become an extension of your technology team, staying accountable for the systems we put into production.",
    icon: "handshake",
  },
  {
    title: "Continuous Support",
    body: "Monitoring, optimization, and responsive technical support after go-live, so your platforms keep performing as your business and your workload change.",
    icon: "pulse",
  },
];

/* How a client can engage us — four commercial models, shown on the home
   page between the service index and the delivery process. */
export const ENGAGEMENT_MODELS = [
  {
    n: "01",
    title: "Project-Based Delivery",
    icon: "briefcase",
    body: "A defined scope, an agreed timeline, and a delivery team that owns the outcome from discovery through handover. You receive a finished, documented solution — not a headcount.",
    bestFor: "Best for a clearly defined build, migration, or modernization",
    points: ["Fixed scope & milestones", "Single accountable team", "Documented handover"],
  },
  {
    n: "02",
    title: "Dedicated Development Team",
    icon: "layers",
    body: "A complete squad — engineers, QA, and a delivery lead — working exclusively on your roadmap, in your tools and your rituals, with capacity that scales as the product does.",
    bestFor: "Best for long-running product and platform work",
    points: ["Exclusive capacity", "Your process & tooling", "Scales up or down"],
  },
  {
    n: "03",
    title: "Staff Augmentation",
    icon: "plus",
    body: "Specific expertise added to your existing team for as long as you need it — cloud, security, data, or DevOps engineers who integrate with your leadership and reporting lines.",
    bestFor: "Best for closing a skills gap without a permanent hire",
    points: ["Vetted specialists", "You keep direction", "Fast onboarding"],
  },
  {
    n: "04",
    title: "Managed IT Services",
    icon: "pipeline",
    body: "Ongoing operations, monitoring, patching, and technical support against an agreed response standard, so your infrastructure and applications stay healthy while your team stays on the roadmap.",
    bestFor: "Best for continuous operations and support coverage",
    points: ["Proactive monitoring", "Agreed response times", "Continuous optimization"],
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
