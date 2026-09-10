export const profile = {
  name: 'Wenbin Liao',
  linkedin: 'https://www.linkedin.com/in/wenbinliao',
  github: 'https://github.com/wizice325',
  email: 'wenbinl@umich.edu' as string | null,
  personalEmail: 'victorliao325@gmail.com' as string | null,
  resumeUrl: '/wenbin-liao-resume.pdf' as string | null,
  graduation: 'December 2027',
  graduationPending: false,
};
export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  group: 'AI & Machine Learning' | 'Python & Full-Stack' | 'C++ & Systems';
  kind:
    | 'agent'
    | 'embedded'
    | 'web'
    | 'search'
    | 'distributed'
    | 'retrieval'
    | 'fullstack'
    | 'architecture'
    | 'vision'
    | 'trading';
  source: string | null;
  sourceStatus?: string;
  presentation?: { label: string; url: string };
  pending?: boolean;
  problem: string;
  solution: string;
  features: { title: string; text: string }[];
  contextPending?: string;
  evidence: string;
};
export const projects: Project[] = [
  {
    slug: 'wxo-agent-evaluator',
    title: 'wxO Agent Evaluator',
    category: 'AI ENGINEERING / IBM BOBATHON',
    description:
      'Making complex agent systems easier to inspect: recursive evaluation, system health scores, and actionable findings for watsonx Orchestrate.',
    technologies: ['Python', 'FastAPI', 'React', 'watsonx.ai'],
    group: 'AI & Machine Learning',
    kind: 'agent',
    source: null,
    sourceStatus: 'Internal IBM project',
    problem:
      'Agent configurations can span nested agents, tools, and collaborators. Inspecting each component in isolation makes it difficult to understand configuration issues across the full system.',
    solution:
      'I built an internal full-stack tool that recursively traverses watsonx Orchestrate hierarchies, evaluates their components, and brings system-level findings into an interactive React interface.',
    features: [
      {
        title: 'Recursive discovery',
        text: 'Traverse agents, sub-agents, tools, and collaborators through internal REST APIs to assemble the configuration graph.',
      },
      {
        title: 'Parallel, two-pass evaluation',
        text: 'Use Python, FastAPI, and watsonx.ai to analyze independent nodes concurrently, then aggregate findings across the hierarchy into health scores and recommendations.',
      },
      {
        title: 'Live inspection',
        text: 'Stream per-node findings and progress to the React interface, with collapsible results, run history, and JSON/Markdown export.',
      },
      {
        title: 'Faster repeat workflows',
        text: 'Combine fuzzy agent search with TTL-based caching to avoid repeated agent-list retrievals during iterative evaluation.',
      },
    ],
    evidence:
      'Agent Evaluator / Bobathon work from my IBM Software Developer Internship in San Jose, Summer 2026.',
    contextPending:
      'A public source or demo link, project-specific dates, and any Bobathon results remain unverified.',
  },
  {
    slug: 'search-engine',
    title: 'Search Engine',
    category: 'DISTRIBUTED SYSTEMS / INFORMATION RETRIEVAL',
    description:
      'A service-oriented search platform that indexes a Wikipedia crawl and combines ranked results from distributed index services.',
    technologies: ['Python', 'MapReduce', 'Flask', 'PageRank', 'SQLite'],
    group: 'Python & Full-Stack',
    kind: 'search',
    source: null,
    sourceStatus: 'EECS 485 coursework',
    problem:
      'Transform a document collection into searchable results while keeping indexing, query scoring, and result presentation independently manageable.',
    solution:
      'I built a MapReduce indexing pipeline and separate Search and Index services. The Search service queries multiple index partitions concurrently and merges their ranked responses.',
    features: [
      {
        title: 'Document indexing',
        text: 'Construct a segmented inverted index with TF-IDF weights and document normalization factors. Incorporate supplied PageRank scores when ranking search results.',
      },
      {
        title: 'Query scoring',
        text: 'Load retrieval structures into memory and score queries with cosine similarity through Flask REST APIs.',
      },
      {
        title: 'Concurrent retrieval',
        text: 'Fan out HTTP requests across index partitions, merge responses, and return ranked documents with titles and summaries.',
      },
    ],
    evidence:
      'Web Systems coursework at the University of Michigan, connecting batch indexing with concurrent query services. Reviewed against the local indexing and search implementation.',
    contextPending:
      'Project dates and a public repository or demo URL are pending.',
  },
  {
    slug: 'mapreduce',
    title: 'Distributed MapReduce',
    category: 'SYSTEMS / CONCURRENT PROCESSING',
    description:
      'A Manager/Worker framework for scheduling distributed jobs, monitoring worker health, and recovering interrupted tasks.',
    technologies: ['Python', 'TCP / UDP', 'Multithreading', 'Linux'],
    group: 'Python & Full-Stack',
    kind: 'distributed',
    source: null,
    sourceStatus: 'EECS 485 coursework',
    problem:
      'Coordinate multi-stage data processing across independent worker processes, including when a worker becomes unavailable.',
    solution:
      'I built a distributed Manager/Worker framework that registers workers, partitions input, schedules map and reduce tasks, and coordinates job completion over TCP.',
    features: [
      {
        title: 'Task orchestration',
        text: 'Partition input data, manage intermediate files, and coordinate map/reduce stages across concurrent processes.',
      },
      {
        title: 'Health monitoring and recovery',
        text: 'Use UDP heartbeats to detect unavailable workers and return interrupted tasks to the scheduling queue.',
      },
      {
        title: 'Failure-oriented validation',
        text: 'Exercise worker failures, malformed messages, shutdown behavior, and multi-stage execution to check normal and degraded operation.',
      },
    ],
    evidence:
      'Web Systems coursework at the University of Michigan. The local Manager and Worker implementations establish the scheduling, networking, and recovery behavior described here.',
    contextPending:
      'Project dates and a public repository or demo URL are pending.',
  },
  {
    slug: 'full-stack-social-app',
    title: 'Full-Stack Social App',
    category: 'FULL-STACK / EECS 485',
    description:
      'A photo-sharing application connecting a React feed to authenticated Flask APIs, relational data, and asynchronous social interactions.',
    technologies: ['React', 'Flask', 'SQLite', 'REST APIs', 'Webpack'],
    group: 'Python & Full-Stack',
    kind: 'fullstack',
    source: null,
    sourceStatus: 'EECS 485 coursework',
    problem:
      'Keep a social feed interactive while coordinating pagination, authentication, and persistent likes and comments across the client and server.',
    solution:
      'My course implementation connects React components to a Flask REST API backed by SQLite. The interface fetches paginated posts and updates interactions from API responses without a full page reload.',
    features: [
      {
        title: 'Paginated, continuous feed',
        text: 'Load the next page as the user scrolls, using API-provided next URLs and a post-ID cutoff to keep pagination anchored as new posts arrive.',
      },
      {
        title: 'Asynchronous interactions',
        text: 'Create and remove likes and comments through fetch requests, then update React state from the server response.',
      },
      {
        title: 'Authenticated persistence',
        text: 'Use session or HTTP Basic authentication, parameterized SQLite queries, and ownership checks for deleting likes and comments.',
      },
    ],
    evidence:
      'Insta485 coursework for Web Systems at the University of Michigan. The local React components and Flask API support the implementation described here.',
    contextPending:
      'Project dates and a public repository or demo URL are pending.',
  },
  {
    slug: 'pipeline-cache-simulators',
    title: 'Pipeline & Cache Simulators',
    category: 'COMPUTER ARCHITECTURE / EECS 370',
    description:
      'C implementations that model pipelined LC-2K execution and configurable cache behavior, from data hazards to dirty-block eviction.',
    technologies: ['C', 'LC-2K', 'Pipelining', 'Set-associative caches'],
    group: 'C++ & Systems',
    kind: 'architecture',
    source: null,
    sourceStatus: 'EECS 370 coursework',
    problem:
      'Make the effects of instruction dependencies and memory hierarchy visible in a software model of processor execution.',
    solution:
      'My Computer Organization coursework includes a cycle-based LC-2K pipeline simulator and a configurable cache simulator. Together, they model how instructions and memory requests move through a system.',
    features: [
      {
        title: 'Pipeline hazards',
        text: 'Represent pipeline registers explicitly, forward available values to dependent instructions, and stall on load-use dependencies.',
      },
      {
        title: 'Control flow',
        text: 'Resolve taken branches and flush younger instructions, while coordinating execution, memory access, and register writeback.',
      },
      {
        title: 'Configurable memory hierarchy',
        text: 'Model block size, set count, and associativity with LRU replacement, write-back/write-allocate behavior, and hit, miss, and writeback counters.',
      },
    ],
    evidence:
      'Two Computer Organization course projects at the University of Michigan. Descriptions are based on the local pipeline simulator and cache implementation.',
    contextPending:
      'Project dates and a public repository or demo URL are pending.',
  },
  {
    slug: 'cnn-vision-transformer',
    title: 'CNN & Vision Transformer',
    category: 'MACHINE LEARNING / EECS 445',
    description:
      'Image-classification coursework exploring convolutional and attention-based models through explicit PyTorch architectures and training loops.',
    technologies: ['Python', 'PyTorch', 'CNN', 'Vision Transformer'],
    group: 'AI & Machine Learning',
    kind: 'vision',
    source: null,
    sourceStatus: 'EECS 445 coursework',
    problem:
      'Understand how convolutional features and patch-based attention provide different approaches to learning image representations.',
    solution:
      'Working within the course framework, I implemented convolutional and Vision Transformer model components in PyTorch, with separate training scripts for model fitting and validation.',
    features: [
      {
        title: 'Convolutional features',
        text: 'Combine convolution, activation, pooling, and a classification layer, with explicit parameter initialization and a defined forward pass.',
      },
      {
        title: 'Patch-based attention',
        text: 'Use image patches, positional encodings, query/key/value projections, multi-head attention, residual connections, and layer normalization.',
      },
      {
        title: 'Training workflow',
        text: 'Train with cross-entropy loss and Adam, evaluate validation performance, and use early stopping in the training scripts.',
      },
    ],
    evidence:
      'Introduction to Machine Learning coursework at the University of Michigan. Model components were implemented within provided course scaffolding.',
    contextPending:
      'Project dates, verified model results, and a public repository or demo URL are pending.',
  },
  {
    slug: 'electronic-trading-simulator',
    title: 'Electronic Trading Simulator',
    category: 'ALGORITHMS / EECS 281',
    description:
      'A C++ order-matching simulator using priority queues to manage price-and-arrival ordering, partial fills, and running trade statistics.',
    technologies: ['C++', 'STL', 'Priority queues', 'Heaps'],
    group: 'C++ & Systems',
    kind: 'trading',
    source: null,
    sourceStatus: 'EECS 281 coursework',
    problem:
      'Process an ordered stream of buy and sell instructions while maintaining the best available matches and updating trade statistics incrementally.',
    solution:
      'My course implementation maintains buy and sell heaps for each order book. Matching consumes compatible orders, tracks remaining quantities, and updates running price statistics.',
    features: [
      {
        title: 'Ordered matching',
        text: 'Prioritize buy orders by highest price and sell orders by lowest price, breaking ties by arrival ID. Match crossing prices and preserve unfilled quantities.',
      },
      {
        title: 'Order lifecycle',
        text: 'Track expiration times, discard expired orders at the top of each book, and skip same-client matches in the incoming-order matching loop.',
      },
      {
        title: 'Streaming statistics',
        text: 'Maintain a running median of trade prices with balanced lower and upper heaps and derive midpoint values from the best buy and sell prices.',
      },
    ],
    evidence:
      'Data Structures and Algorithms coursework at the University of Michigan, modeling order processing and incremental statistics in a C++ simulator.',
    contextPending:
      'Project dates and a public repository or demo URL are pending.',
  },
  {
    slug: 'lessons-learned-agent',
    title: 'Lessons-Learned Retrieval Agent',
    category: 'AI ENGINEERING / MDP',
    description:
      'A retrieval-based assistant connecting current project questions to relevant historical lessons, risks, and supporting evidence.',
    technologies: ['Copilot Studio', 'Dataverse', 'SharePoint', 'RAG'],
    group: 'AI & Machine Learning',
    kind: 'retrieval',
    source: null,
    sourceStatus: 'Enterprise project',
    problem:
      'Make historical project knowledge easier to retrieve and apply while respecting access boundaries around enterprise records.',
    solution:
      'As part of my Walbridge MDP work, I built a modular retrieval workflow that formulates queries, finds candidate records, filters evidence, and summarizes relevant lessons.',
    features: [
      {
        title: 'Modular agent workflow',
        text: 'Separate orchestration, query formulation, retrieval, filtering, and summarization so each stage can be inspected and improved independently.',
      },
      {
        title: 'Grounded retrieval',
        text: 'Retrieve records from Dataverse and SharePoint, expand queries, and use fallback strategies when the initial evidence is incomplete.',
      },
      {
        title: 'Evaluation at each stage',
        text: 'Distinguish retrieval quality, answer quality, and groundedness, incorporating stakeholder feedback to refine the workflow.',
      },
    ],
    evidence:
      'Part of my undergraduate AI research work with Walbridge through the University of Michigan Multidisciplinary Design Program, January 2026–Present.',
    contextPending:
      'A public source or demo link is pending; internal enterprise records are not included.',
  },
  {
    slug: 'dormdash',
    title: 'DormDash',
    category: 'EMBEDDED SYSTEMS / MOTOR CONTROL',
    description:
      'From radio input to motor output: Arduino firmware that decodes PPM signals and mixes steering and throttle for differential drive.',
    technologies: ['C++', 'Arduino', 'PlatformIO'],
    group: 'C++ & Systems',
    kind: 'embedded',
    source: 'https://github.com/Wizice325/DormDash',
    presentation: {
      label: 'Watch project presentation',
      url: 'https://www.youtube.com/watch?v=aM6ehLUFxew',
    },
    problem:
      'Translate radio-controller steering and throttle signals into coordinated motor commands for a differential-drive platform.',
    solution:
      'The public firmware targets an Arduino Leonardo. An interrupt routine decodes PPM input, and the control loop shapes the channels and mixes motor outputs through a TB6612FNG driver.',
    features: [
      {
        title: 'Input processing',
        text: 'PPM frame detection, pulse clamping, and atomic channel snapshots connect receiver input to the control loop.',
      },
      {
        title: 'Drive control',
        text: 'Deadband and exponential shaping feed a differential mixer, which normalizes outputs before writing motor PWM.',
      },
      {
        title: 'Operating controls',
        text: 'The source includes an arming channel, disarm handling, status LED behavior, and serial debug output.',
      },
    ],
    evidence:
      'Based on the public main.cpp firmware and platformio.ini configuration.',
    contextPending:
      'Dates, team context, individual contribution, and hardware testing are not documented in the reviewed source.',
  },
];
