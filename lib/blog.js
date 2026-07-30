/**
 * Insights — editorial content for /blog.
 *
 * Every post is written for a business decision-maker rather than an engineer:
 * the search intent behind each target keyword is "should we do this, and what
 * does it cost us", not "how do I configure it". Bodies are structured blocks
 * so the renderer can emit correct semantic HTML and the article schema can be
 * generated from the same source.
 */

export const BLOG_CATEGORIES = [
  "Cloud",
  "Security",
  "DevOps",
  "Modernization",
  "AI & Data",
];

export const POSTS = [
  /* ──────────────────────────────────────────────────────────────── */
  {
    slug: "cloud-migration-strategy-framework",
    title: "Cloud Migration Strategy: A Practical Framework for Mid-Market Businesses",
    excerpt:
      "Most cloud migrations overrun because the sequencing decision is made after the platform decision. Here is the order that keeps budgets intact.",
    metaDescription:
      "A practical cloud migration strategy framework for mid-market businesses — how to sequence assessment, landing zone, workload waves, and FinOps so the project lands on budget.",
    keywords: [
      "cloud migration strategy",
      "cloud migration framework",
      "AWS Azure migration planning",
      "cloud landing zone",
      "cloud cost optimization",
    ],
    category: "Cloud",
    date: "2026-07-14",
    readTime: 9,
    author: "Frontier One Technology",
    image: "blog/cloud-migration.webp",
    related: ["security-by-design-compliance", "legacy-modernization-without-rewrite"],
    body: [
      {
        type: "p",
        text: "Cloud migration rarely fails on technology. It fails on sequence. Organizations pick a provider, sign a commitment, and only then discover that a third of their workloads cannot move without an application change nobody scoped. The bill arrives on schedule; the benefits do not.",
      },
      {
        type: "p",
        text: "The framework below is the order we use on migration engagements. It front-loads the decisions that are expensive to reverse and defers the ones that are cheap to change.",
      },
      { type: "h2", text: "1. Assess the estate before you choose the platform" },
      {
        type: "p",
        text: "A workload inventory is not a server list. For each application you need four facts: who owns it, what it integrates with, what its data residency and compliance constraints are, and what the business impact is if it is unavailable for four hours. Those four facts determine migration approach far more than CPU and memory profiles do.",
      },
      {
        type: "p",
        text: "Expect the inventory to surface applications nobody claims ownership of. That is a finding, not a delay — undocumented dependencies are the single most common cause of migration rollback.",
      },
      { type: "h2", text: "2. Classify by the 6 Rs, honestly" },
      {
        type: "p",
        text: "Rehost, replatform, refactor, repurchase, retire, retain. The discipline is in being honest about refactor. Refactoring is a software project with a software project's timeline, and it should never be hidden inside an infrastructure budget line.",
      },
      {
        type: "ul",
        items: [
          "Rehost — lift and shift. Fastest path, lowest immediate savings, and entirely legitimate as a first wave.",
          "Replatform — managed database, managed runtime, no application rewrite. Usually the best return per unit of effort.",
          "Refactor — justified when the application is strategic and its architecture is the constraint on the business, not before.",
          "Repurchase — moving to SaaS. Cheapest technically, most expensive organizationally, because it is a process change.",
          "Retire — typically 10-20% of an estate. Finding these pays for the assessment.",
          "Retain — regulated, contractual, or hardware-bound workloads that stay put. Deciding this early prevents wasted design work.",
        ],
      },
      { type: "h2", text: "3. Build the landing zone before the first workload" },
      {
        type: "p",
        text: "Identity, network topology, logging, tagging, guardrails, and cost allocation should exist as code before anything production-bearing arrives. Retrofitting governance onto a populated cloud account is one of the most expensive corrections in this discipline — every remediation touches a running system.",
      },
      {
        type: "quote",
        text: "The cost of a landing zone built late is not the rebuild. It is every change-control conversation the rebuild requires.",
      },
      { type: "h2", text: "4. Migrate in waves, and make wave one boring" },
      {
        type: "p",
        text: "Wave one should be low-risk, internally visible, and owned by a team that will give you honest feedback. Its purpose is to prove the runbook, not the strategy. Wave two is where you take on something with real business dependency, because by then the operational muscle exists.",
      },
      {
        type: "p",
        text: "Define rollback criteria per wave, in writing, before the wave starts. A rollback that is planned is a controlled event; a rollback that is improvised is an incident.",
      },
      { type: "h2", text: "5. Attach FinOps on day one, not at the first invoice shock" },
      {
        type: "p",
        text: "Cloud spend is a function of engineering behaviour, and engineering behaviour follows visibility. Tagging standards, per-team budgets, and anomaly alerts cost days to implement and routinely save double-digit percentages of annual run rate. Commitment purchases — reserved capacity, savings plans — should wait until you have ninety days of steady-state usage data. Buying commitments during migration is buying against a workload shape that no longer exists by the time it settles.",
      },
      { type: "h2", text: "What a realistic timeline looks like" },
      {
        type: "p",
        text: "For a mid-market estate of roughly 80-150 applications, assessment runs four to six weeks, landing zone three to five weeks, and migration waves eight to sixteen months depending on refactor volume. Anyone quoting materially less is either working with a smaller estate than they have been shown, or is deferring the governance work into your operations budget.",
      },
      { type: "h2", text: "The decision that matters most" },
      {
        type: "p",
        text: "Not which cloud. It is whether the organization is migrating to reduce cost or to increase delivery speed. Those two goals produce different architectures, different wave orders, and different definitions of success — and a programme that has not chosen between them will under-deliver on both.",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────── */
  {
    slug: "security-by-design-compliance",
    title: "Security by Design: Building Compliance Into Software From Day One",
    excerpt:
      "Retrofitted security is the most expensive kind. What it actually means to shift compliance left — and what it costs when you don't.",
    metaDescription:
      "What security by design means in practice — threat modelling, secure SDLC, compliance evidence as a build artifact, and why retrofitting controls costs 6x more than designing them in.",
    keywords: [
      "security by design",
      "secure software development lifecycle",
      "shift left security",
      "compliance automation",
      "application security consulting",
    ],
    category: "Security",
    date: "2026-06-30",
    readTime: 8,
    author: "Frontier One Technology",
    image: "blog/security-by-design.webp",
    related: ["cloud-migration-strategy-framework", "devops-cost-and-return"],
    body: [
      {
        type: "p",
        text: "Every organization says security is a priority. The test is where it appears in the project plan. If the first security activity is a penetration test two weeks before launch, security is not a priority — it is an acceptance gate, and by then the only affordable response to a finding is to accept the risk.",
      },
      { type: "h2", text: "Why the retrofit is so expensive" },
      {
        type: "p",
        text: "A control that is designed in is a schema decision, an interface boundary, or a library choice. The same control added after release is a migration, a regression cycle, a change window, and a customer communication. The work is not harder — the surrounding coordination is.",
      },
      {
        type: "p",
        text: "This is why the classic figure that a defect costs several times more to fix in production than in design holds even more strongly for security defects: the fix usually changes a data model, and data models have users.",
      },
      { type: "h2", text: "Threat modelling is a one-hour meeting, not a methodology" },
      {
        type: "p",
        text: "Teams avoid threat modelling because they picture a formal STRIDE workshop. In practice a useful session asks four questions at design time: what are we building, what can go wrong, what are we doing about it, and did we do a good enough job. An hour per significant feature, with the engineers who will build it in the room, catches the architectural mistakes that scanners never will.",
      },
      { type: "h2", text: "Controls that belong in the pipeline" },
      {
        type: "ul",
        items: [
          "Dependency and container scanning on every pull request, failing the build on known-exploited vulnerabilities rather than on raw CVE count.",
          "Static analysis tuned to the codebase — an untuned SAST tool trains a team to ignore its output within two sprints.",
          "Secrets detection at commit time, because a secret that reaches history is a rotation event regardless of what happens next.",
          "Infrastructure-as-code policy checks, so a public storage bucket fails review rather than fails an audit.",
          "Signed builds and a software bill of materials, which is increasingly a procurement requirement rather than a maturity nicety.",
        ],
      },
      { type: "h2", text: "Treat compliance evidence as a build artifact" },
      {
        type: "p",
        text: "The most under-rated benefit of shifting left is that the audit stops being a project. If access reviews, change approvals, scan results, and deployment records are emitted automatically by the pipeline, the evidence pack for SOC 2, ISO 27001, HIPAA, or PCI is a query rather than a quarter of somebody's year.",
      },
      {
        type: "quote",
        text: "Organizations that automate evidence collection do not just pass audits faster. They stop making architecture decisions that are convenient to build and impossible to evidence.",
      },
      { type: "h2", text: "Where regulated industries differ" },
      {
        type: "p",
        text: "In financial services and healthcare, the binding constraint is usually data lineage rather than perimeter security. Being able to demonstrate where a record came from, who touched it, and where copies live is often harder than protecting it — and it is almost always a design-time decision. Retrofitting lineage into a system that was built without it is close to a rebuild.",
      },
      { type: "h2", text: "The practical starting point" },
      {
        type: "p",
        text: "Pick one service that is about to enter a significant change. Threat model it, add pipeline controls to it, and automate its evidence. Measure the delta in remediation cost against a comparable service that did not get the treatment. That comparison, in your own numbers, moves budget conversations that no external benchmark will.",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────── */
  {
    slug: "devops-cost-and-return",
    title: "What Enterprise DevOps Actually Costs — And What It Saves",
    excerpt:
      "DevOps is sold on velocity and bought on cost. A straight look at where the money goes and which metrics genuinely predict return.",
    metaDescription:
      "An honest breakdown of enterprise DevOps costs and returns — platform investment, DORA metrics that predict business outcomes, and the failure modes that waste the budget.",
    keywords: [
      "enterprise devops",
      "devops cost",
      "DORA metrics",
      "CI/CD implementation",
      "platform engineering",
    ],
    category: "DevOps",
    date: "2026-06-12",
    readTime: 7,
    author: "Frontier One Technology",
    image: "blog/devops-return.webp",
    related: ["security-by-design-compliance", "cloud-migration-strategy-framework"],
    body: [
      {
        type: "p",
        text: "DevOps transformations are usually justified with deployment frequency and delivered as a tooling purchase. That gap is where the money goes. The tooling is rarely the expensive part; the expensive part is the operating model change that the tooling assumes has already happened.",
      },
      { type: "h2", text: "Where the budget actually goes" },
      {
        type: "ul",
        items: [
          "Platform build — pipelines, environments, and self-service tooling. Visible, estimable, and typically the smallest line.",
          "Test automation — usually the largest and most under-scoped item, because a manual regression suite is the real constraint on deployment frequency.",
          "Environment provisioning — ephemeral environments cost cloud spend and engineering time, and without them parallel work serializes.",
          "Enablement — the cost of engineers learning to operate what they build. Under-funding this produces a platform team that becomes a new ticket queue.",
          "Ongoing platform ownership — a permanent line item, not a project cost. Platforms without owners decay into shadow tooling within a year.",
        ],
      },
      { type: "h2", text: "The four metrics worth reporting" },
      {
        type: "p",
        text: "Deployment frequency, lead time for change, change failure rate, and time to restore service. They are worth reporting together because each one alone is trivially gameable — deployment frequency rises the moment you split a release into three, and change failure rate falls the moment you stop counting minor incidents.",
      },
      {
        type: "p",
        text: "Read as a set, they describe something real: how quickly the organization can act on a decision, and how confidently. That is the number executives are actually buying.",
      },
      { type: "h2", text: "The return that gets under-counted" },
      {
        type: "p",
        text: "Most business cases count engineering hours saved. The larger returns are elsewhere: reduced change-window overtime, shorter incident duration, fewer emergency releases, and — most significantly — the option value of being able to reverse a decision cheaply. Teams that can deploy safely take smaller bets more often, which is a materially different risk profile.",
      },
      {
        type: "quote",
        text: "The point of shipping faster is not shipping more. It is being wrong for less time.",
      },
      { type: "h2", text: "Three failure modes to plan around" },
      {
        type: "ul",
        items: [
          "Buying a platform before defining a golden path. Without an opinionated default, self-service produces sprawl rather than speed.",
          "Automating a broken release process. Automation multiplies whatever process it encodes, including the approvals nobody can justify.",
          "Measuring teams against each other on DORA metrics. The moment these become performance targets, they stop being diagnostic.",
        ],
      },
      { type: "h2", text: "A reasonable first year" },
      {
        type: "p",
        text: "One golden path for one representative application type. Ephemeral environments for that path. Regression suite coverage sufficient that a release does not require a human sign-off checklist. Then a second application type. Programmes that attempt full estate coverage in year one generally deliver a platform nobody has been trained to use.",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────── */
  {
    slug: "legacy-modernization-without-rewrite",
    title: "Legacy System Modernization Without the Big-Bang Rewrite",
    excerpt:
      "Full rewrites have a poor track record and a worse risk profile. How to modernize incrementally while the system stays in service.",
    metaDescription:
      "How to modernize legacy systems without a big-bang rewrite — strangler fig patterns, seam identification, data migration strategy, and how to sequence incremental replacement safely.",
    keywords: [
      "legacy system modernization",
      "application modernization",
      "strangler fig pattern",
      "legacy migration strategy",
      "monolith to microservices",
    ],
    category: "Modernization",
    date: "2026-05-28",
    readTime: 8,
    author: "Frontier One Technology",
    image: "blog/legacy-modernization.webp",
    related: ["cloud-migration-strategy-framework", "ai-use-case-selection"],
    body: [
      {
        type: "p",
        text: "The case for a rewrite is always the same and always compelling: the current system is understood by three people, changes take months, and the technology is out of support. The case against it is only visible later — a rewrite freezes the business for the duration, and the requirements it was scoped against will have moved by delivery.",
      },
      {
        type: "p",
        text: "Incremental modernization is slower on paper and faster in practice, because value ships continuously and the organization never carries two systems' worth of risk at once.",
      },
      { type: "h2", text: "Start by finding the seams" },
      {
        type: "p",
        text: "A seam is a place where behaviour can be intercepted without changing the code on either side of it — an API boundary, a message queue, a scheduled batch, a database view. Modernization progresses at the rate you find seams. Systems with no seams need one built first, and that is a legitimate, fundable first phase.",
      },
      { type: "h2", text: "Route, replace, retire" },
      {
        type: "p",
        text: "Put a facade in front of the legacy system so callers address the facade rather than the system. Route one capability at a time to a new implementation behind that facade. When no traffic reaches the legacy path, retire it. This is the strangler fig pattern, and its virtue is that every step is independently reversible.",
      },
      {
        type: "ul",
          items: [
          "Choose the first capability for low coupling, not high value. The first slice proves the mechanism.",
          "Run new and old in parallel with output comparison before switching traffic. Discrepancies are usually undocumented legacy behaviour, which is exactly what you needed to find.",
          "Delete the legacy path as soon as it is idle. Un-retired code is the reason these programmes stall — the estate grows instead of shrinking.",
        ],
      },
      { type: "h2", text: "Data is the hard part, not the code" },
      {
        type: "p",
        text: "Application logic can be replaced behind a facade. Data cannot be duplicated indefinitely without a source of truth decision. Decide early, per entity, which system owns writes during the transition, and make that ownership explicit in the architecture rather than implicit in a sync job. Bidirectional sync between two systems that both accept writes is the most reliable way to turn a modernization into a data-integrity incident.",
      },
      {
        type: "quote",
        text: "Every modernization that went badly had a period where two systems both believed they owned the same record.",
      },
      { type: "h2", text: "Keep the lights on budget separate" },
      {
        type: "p",
        text: "If modernization and production support share a team and a budget, support wins every sprint — correctly, because production incidents are real and modernization deadlines are internal. Fund and staff them separately, even if the same people rotate between them.",
      },
      { type: "h2", text: "How to know it is working" },
      {
        type: "p",
        text: "Not by percentage complete. Track the number of capabilities served by the new path, the volume of legacy code deleted, and the lead time for a change in the modernized area versus the legacy area. If lead time in the new path is not measurably better within two quarters, the new architecture has inherited the old constraints and the approach needs revisiting before more scope moves.",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────── */
  {
    slug: "ai-use-case-selection",
    title: "Choosing an AI Use Case That Will Still Matter in Three Years",
    excerpt:
      "Most AI pilots succeed technically and die operationally. The selection criteria that separate durable use cases from demos.",
    metaDescription:
      "How to select enterprise AI use cases that survive past the pilot — data readiness, decision ownership, evaluation strategy, and the operating costs that kill deployed models.",
    keywords: [
      "enterprise AI use cases",
      "AI implementation strategy",
      "AI readiness assessment",
      "machine learning ROI",
      "AI consulting",
    ],
    category: "AI & Data",
    date: "2026-05-09",
    readTime: 8,
    author: "Frontier One Technology",
    image: "blog/ai-use-case.webp",
    related: ["devops-cost-and-return", "legacy-modernization-without-rewrite"],
    body: [
      {
        type: "p",
        text: "The failure mode for enterprise AI is not a model that does not work. It is a model that works, demos well, and never reaches a workflow — because no one owns the decision it was built to support, and no one budgeted for keeping it accurate.",
      },
      { type: "h2", text: "Four questions before any pilot" },
      {
        type: "ul",
        items: [
          "Whose decision does this change? If the answer is a committee, the use case has no owner and will not be adopted.",
          "What happens when it is wrong? A use case with no acceptable error mode needs a different solution, not a better model.",
          "Does the data already exist as a byproduct of operations? Data that has to be created for the model will stop being created the moment attention moves.",
          "What is the current cost of the decision being made badly? If nobody can estimate it, the return cannot be evidenced afterwards either.",
        ],
      },
      { type: "h2", text: "Data readiness is a workflow question" },
      {
        type: "p",
        text: "Teams assess data readiness by volume and quality. The more predictive measure is whether the data is produced by a process someone depends on. Operationally load-bearing data stays clean because breaking it breaks someone's day. Data collected for reporting drifts quietly and takes the model with it.",
      },
      { type: "h2", text: "Decide the evaluation before the build" },
      {
        type: "p",
        text: "An evaluation set drawn from real cases, labelled by the people who currently make the decision, is the single highest-return artifact in an AI project. It converts 'the model seems better' into a number, makes regressions visible, and — critically — survives a change of model or vendor. Build it first; it outlives everything else in the project.",
      },
      {
        type: "quote",
        text: "A durable evaluation set is worth more than the first three models you run against it.",
      },
      { type: "h2", text: "The costs that arrive after launch" },
      {
        type: "ul",
        items: [
          "Monitoring for drift, with a defined owner and a defined response, not a dashboard nobody opens.",
          "Periodic re-labelling, because ground truth moves as the business does.",
          "Human review capacity for low-confidence cases — a real staffing line, not an assumption.",
          "Inference spend, which scales with adoption and therefore rises exactly when the use case succeeds.",
        ],
      },
      { type: "h2", text: "Durable use case shapes" },
      {
        type: "p",
        text: "The use cases that last tend to share a profile: a high-frequency decision, a tolerable error cost, an owner who feels the pain today, and data produced as exhaust from a process that will keep running regardless. Document classification in operations, triage and routing in support, anomaly detection in finance and infrastructure, and retrieval over internal knowledge all fit that profile. Use cases that promise to replace judgment in low-frequency, high-stakes decisions almost never do.",
      },
      { type: "h2", text: "Start where the data is already load-bearing" },
      {
        type: "p",
        text: "It is the least exciting selection criterion and the most reliable one. A modest use case on operational data outperforms an ambitious one on data that exists because someone was asked to produce it for a pilot.",
      },
    ],
  },
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);

export const sortedPosts = () =>
  [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
