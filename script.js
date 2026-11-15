const translations = {
  zh: {
    title: "任飞扬 (stayreal233) — AI 与全栈系统构建者",
    description:
      "任飞扬 (Feiyang Ren / stayreal233) 的个人主页与工程作品集：Python 模型服务后端、开源 AI 框架二次改造、多模态/文本 LoRA 微调与 Vue 3 / Spring Boot 全栈研发。",
    skip: "跳到主要内容",
    brandLabel: "任飞扬 首页",
    navLabel: "主要导航",
    languageLabel: "切换语言",
    navWork: "工作成果",
    navResearch: "科研与荣誉",
    navAbout: "技术与方法",
    navContact: "联系",
    role: "南开大学保研 (985) · 燕山大学软工排名 1/173 · AI 与全栈系统构建者",
    heroSubtitle: "REN FEIYANG // GITHUB @STAYREAL233 // PYTHON · VLM & LORA · FULL-STACK",
    heroStatement: "我把模型服务与全栈工程，做成可验证的系统。",
    heroIntro:
      "燕山大学软件工程大四在读（专业排名 1/173，已保研南开大学多模态与智能体大模型方向），无升学课程压力，可在京全职实习。专注 Python（FastAPI / Flask）模型服务后端、开源 AI 框架（DB-GPT）源码改造、视觉/文本模型 LoRA 微调与 Docker 容器化部署，以及 Vue 3 / Spring Boot 网站全栈开发。",
    exploreWork: "查看核心成果",
    visitGithub: "GitHub 主页",
    available: "随时到岗 · 每周 5 天 · 6 个月全职实习",
    manifestoLabel: "快速了解我",
    manifestoTitle: "在算法模型的精度与工程系统的确定性之间，我两边都要。",
    metric1Kicker: "ACADEMIC RANK // 保研南开 (985)",
    metric1Desc: "燕山大学软件工程专业排名第一（1/173），保研南开大学多模态与智能体大模型方向",
    metric2Kicker: "DB-GPT REFACTOR // 链路提速 -95.3%",
    metric2Desc: "单任务大模型调用减少 50%（2→1 次），确认阶段 HTTP 中位耗时大幅下降，6/6 哈希一致",
    metric3Kicker: "LORA TUNING // 检索与视觉双优",
    metric3Desc: "BGE LoRA 微调 Recall@5 达 87.64%；Stable Diffusion 视觉 LoRA 达 91.8% A-AUROC（中科院 2 区 Top）",
    metric4Kicker: "QUALITY & E2E // 全链路自动化核验",
    metric4Desc: "Qwen2.5-VL 轨迹采集通过率 100%，DB-GPT 改造通过 45 项单测与本机/容器各 22 项端到端验收",
    manifestoOne: "深入大型开源 AI 框架（DB-GPT v0.8.2）源码，用工程改造把冗余大模型追问收敛为 44ms 参数化查询。",
    manifestoTwo: "多模态视觉与文本模型调优：从 4,240 条困难负样本 BGE LoRA 微调，到 Qwen2.5-VL / UI-TARS 图像 BBox 坐标校准。",
    manifestoThree: "全栈闭环研发：熟练驾驭 FastAPI / Flask、Vue 3 / Element Plus、Spring Boot 与 Docker Compose 容器编排。",
    manifestoFour: "双路复算与自动化核验主义者：每一项关键交付都有单元测试、快照复算、DOM/SQLite 联合核验或端到端验收支撑。",
    selectedWork: "核心工作成果",
    workTitle: "不止停留在原型阶段。",
    workIntro: "以下项目与实习成果均来自真实研发与开源改造实践，包含可量化的性能指标、严格的单元测试与容器化端到端交付验收。",

    /* Project 01 */
    p1State: "944ms → 44ms · 45 单测通过",
    p1Type: "AI AGENT & DATA SERVICE · 项目负责人 · 2026.01 - 2026.10",
    p1Title: "DB-GPT 开源 AI 工具二次开发与数据分析服务",
    p1Subtitle: "2026 中国计算机设计大赛省级二等奖 ｜ 现有代码改造、FastAPI 后端与 Docker 部署",
    p1Desc:
      "深度阅读并二次改造开源 Python AI 框架 DB-GPT（v0.8.2）现有代码，挂载自定义运营数据分析模块，打通从动态参数补齐、双路数据质量复算到容器化端到端验收的完整闭环。",
    p1Bullet1:
      "<strong>现有 AI 工具源码改造与链路优化：</strong>阅读并二次改造开源框架 DB-GPT（v0.8.2），挂载自定义分析模块；针对缺参追问二次调用大模型耗时高痛点，改造前后端为动态表单确认直连参数化查询，在 6 组配对评测中将<strong>单任务模型调用减少 50%（2 次 → 1 次）</strong>，确认阶段服务端 HTTP 中位耗时由 <strong>944 ms 降至 44 ms</strong>（6/6 结果哈希一致）。",
    p1Bullet2:
      "<strong>FastAPI 后端服务与数据质量校验：</strong>基于 FastAPI 开发受控参数校验、3s 超时重试（最多 2 次）、细粒度结构化错误码与只读视图隔离接口；实现同一快照下<strong>“SQL 聚合 + Python 明细”双路独立复算服务</strong>，排查修复容器初始化字符集导致 31 个中文字段筛选为空的编码缺陷（<strong>45 项单元测试全部通过</strong>）。",
    p1Bullet3:
      "<strong>网站交互模块与 Docker 容器化部署：</strong>开发动态条件补齐表单、执行轨迹展示、条形图渲染及 HTML/JSON 报告导出 Web 页面；使用 Docker Compose 编排后端服务与数据库容器（锁定镜像摘要与 <code>uv.lock</code>、配置健康检查与数据卷持久化），通过<strong>本机与容器双环境各 22 项端到端自动化验收</strong>。",
    p1Link: "查看 GitHub 仓库",

    /* Project 02 */
    p2State: "100.0% [15/15] 轨迹通过",
    p2Type: "MULTIMODAL VLM & QA TOOLKIT · 项目负责人 · 2026.03 - 2026.06",
    p2Title: "CUA-Agent-Eval-Suite · 多模态视觉推理与坐标质检工具",
    p2Subtitle: "开源工具套件 ｜ 图像 BBox 边界框解析校准、自动化数据校验管道与 Web 看板",
    p2Desc:
      "面向 GUI / Computer-Use 视觉智能体的推理评测与坐标质检开源套件，接入多模态大模型并解决高分屏 DPI 坐标偏移、SoM 幽灵节点与死循环点击等核心工程痛点。",
    p2Bullet1:
      "<strong>多模态视觉模型接入与图像坐标解析调优：</strong>接入 <strong>Qwen2.5-VL-72B</strong> 与 <strong>UI-TARS-7B</strong> 视觉模型服务，基于 Set-of-Marks (SoM) 视觉标记实现页面图像元素边界框（BBox）提取与控件坐标映射；在 Docker + Pytest 隔离环境中排查并修复<strong>高分屏 DPI 坐标换算偏移、SoM 幽灵节点过滤及死循环点击</strong>等现有代码缺陷。",
    p2Bullet2:
      "<strong>自动化数据校验管道与可视化 Web 看板：</strong>编写 Python 批处理脚本采集 30 条多模态图文轨迹（<strong>Qwen2.5-VL 通过率达 100.0% [15/15]</strong>），开发联合核验 DOM、CSV/JSON/Markdown 导出文件与 SQLite 记录的后处理工具，并交付<strong>交互式 HTML 轨迹回放与异常筛查 Web 看板</strong>。",
    p2Link: "查看 GitHub 仓库",

    /* Project 03 */
    p3State: "Recall@5 87.64% · MRR@10 0.7793",
    p3Type: "RAG & MULTIMODAL SYSTEM · 项目负责人 · 2024.12 - 2025.12",
    p3Title: "领域文档知识库问答与多模态服务系统",
    p3Subtitle: "省级大学生创新创业项目 ｜ BGE LoRA 微调、1,066 节点 Neo4j 图谱、Flask 后端与文档解析流水线",
    p3Desc:
      "围绕垂直领域文档构建从困难负样本挖掘、向量检索模型 LoRA 微调，到知识图谱问答与 PPT 讲稿/TTS/Wav2Lip 数字人视频生成的全栈多模态服务系统。",
    p3Bullet1:
      "<strong>数据集构建清洗与模型微调调优：</strong>针对垂直领域高相似文本误召回问题，编写 Python 数据处理流水线结合<strong>语义相似度、关键词重叠及 TF-IDF</strong> 挖掘并清洗 <strong>4,240 条困难负样本</strong>，对 <code>BGE-large-zh-v1.5</code> 进行 LoRA 微调与按轮次评测选优，将检索评测集 <strong>Recall@5 提升至 87.64%、MRR@10 达 0.7793</strong>。",
    p3Bullet2:
      "<strong>Flask 服务后端、文档解析与 Web 模块开发：</strong>基于 Flask 封装文件上传、<strong>1,066 节点 Neo4j 图谱查询</strong>与 RAG 流式推理 RESTful 后端服务，串联 PPT 文档结构化解析、讲稿生成、TTS 与 <strong>Wav2Lip 视觉口型模型</strong>接口；独立开发 Web 前端流式问答渲染、Markdown 解析、ECharts 图谱可视化与来源资源联动模块。",
    p3Link: "访问 GitHub 主页",

    /* Project 04 */
    p4State: "MyBatis-Plus PR #422 · 并发一致性",
    p4Type: "FULL-STACK INTERNSHIP & OPEN SOURCE · 2025.07 - 2025.09",
    p4Title: "智慧社区全栈研发实习 & MyBatis-Plus 开源文档贡献",
    p4Subtitle: "北京软通动力教育科技有限公司（全栈开发实习生）｜ Vue 3 + Spring Boot 研发与开源社区回馈",
    p4Desc:
      "独立负责智慧社区 Web 管理后台与移动端 RESTful 接口全栈研发，重点攻克高并发场景下的数据一致性与多表状态流转难题，并将实战经验沉淀反哺至 MyBatis-Plus 官方文档仓库。",
    p4Bullet1:
      "<strong>网站功能模块与前后端接口开发：</strong>独立负责公告、房产/住户档案、水电报修及投票等 <strong>Vue 3 / Element Plus</strong> Web 管理后台模块与 <strong>Spring Boot</strong> 后端 RESTful 接口研发，实现多条件组合筛选、编码查重、局部字段更新，落实<strong>提交防抖禁用、加载失败重试与空列表兜底</strong>等前端交互。",
    p4Bullet2:
      "<strong>并发一致性与多表数据维护交付：</strong>采用<strong>联合唯一索引、SQL 原子自增与 <code>@Transactional</code> 事务</strong>解决并发重复提交与计数不一致问题；基于 Redis 管理验证码有效期，在事务内按关联依赖顺序处理多表清理与状态流转校验，完成接口自测、多端联调与部署交付。",
    p4Bullet3:
      "<strong>MyBatis-Plus 官方文档开源贡献：</strong>向 MyBatis-Plus 官方文档仓库提交<strong>逻辑删除与唯一索引冲突 FAQ 及 6 组 MySQL 验证示例</strong>（<code>github.com/baomidou/mybatis-plus-doc/pull/422</code>，已提交，协作中）。",
    p4Link: "查看 MyBatis-Plus PR #422",

    /* Section 02: Research, Education & Honors */
    researchLabel: "教育、科研与竞赛荣誉",
    researchTitle: "扎实的学术训练与工程底色。",
    researchIntro: "本科专业排名 1/173 保研南开大学，在多模态异常检测与个性化记忆建模方向发表/在投两篇中科院 Top 期刊论文，并在国际超算与全国程序设计赛事中屡获佳绩。",
    eduHeaderLeft: "EDUCATION // 教育背景",
    eduHeaderRight: "NKU (985) & YSU (RANK 1/173)",
    edu1Period: "2027.09 - 2030.06",
    edu1Sub: "保研硕士（2030 届）",
    edu1Title: "南开大学（985） · 计算机技术",
    edu1Org: "研究方向：多模态、智能体大模型方向",
    edu1Detail: "已获得推免录取资格，大四学年无升学与课程压力，可在京全职实习（每周 5 天 · 6 个月，随时到岗）。",
    edu2Period: "2023.09 - 2027.06",
    edu2Sub: "本科 · 中共党员",
    edu2Title: "燕山大学 · 软件工程",
    edu2Org: "专业排名：1 / 173（专业第一）",
    edu2Detail: "英语能力：CET-6（443 分）、CET-4（527 分）；曾获燕山大学校一等奖学金 3 次、二等奖学金 2 次。",

    pubHeaderLeft: "PUBLICATIONS // 学术论文成果",
    pubHeaderRight: "CAS Q1 / Q2 TOP JOURNALS",
    pub1Tag: "中科院 2 区 Top",
    pub1Sub: "Neurocomputing · 第二作者",
    pub1Title: "Normality-Preserving Continual Industrial Anomaly Detection via Orthogonal LoRA Banks",
    pub1Venue: "Published / Accepted in Neurocomputing (CAS Q2 Top)",
    pub1Detail: "基于 Stable Diffusion 做视觉 LoRA 微调与层选优，在 VisA 数据集上实现像素级 <strong>A-AUROC 达 91.8%（+3.2pp）</strong>。",
    pub2Tag: "中科院 1 区 Top 在投",
    pub2Sub: "ESWA · 第二作者",
    pub2Title: "PS-Mem: Preference-State Memory Modeling for Long-Term Personalized Intelligent Assistants",
    pub2Venue: "Under Review at Expert Systems with Applications (ESWA, CAS Q1 Top)",
    pub2Detail: "围绕长期个性化智能体助手构建偏好-状态双层记忆建模机制，提升跨会话长期上下文一致性与个性化推理能力。",

    honorHeaderLeft: "OPEN SOURCE & HONORS // 开源协作与竞赛荣誉",
    honorHeaderRight: "INTERNATIONAL & NATIONAL AWARDS",
    honor1Tag: "OPEN SOURCE PR",
    honor1Sub: "MyBatis-Plus 官方文档",
    honor1Title: "MyBatis-Plus 逻辑删除与唯一索引冲突 FAQ 及验证示例",
    honor1Venue: "github.com/baomidou/mybatis-plus-doc/pull/422",
    honor1Detail: "提交逻辑删除与唯一索引冲突解决方案 FAQ 及 <strong>6 组可复现 MySQL 验证示例</strong>（已提交，社区协作中）。",
    honor2Tag: "2025.03 - 2026.07",
    honor2Sub: "国家级 / 国际级竞赛奖项",
    honor2Title: "ASC 超算国际二等奖 · 计算机设计大赛省二 · 蓝桥杯与睿抗国三",
    honor2Venue: "4 Major Engineering & Algorithm Competitions",
    honor2Detail:
      "• <strong>ASC 世界大学生超级计算机竞赛</strong> 国际二等奖（2025.03）<br>• <strong>2026 中国计算机设计大赛</strong> 省级二等奖（2026.06）<br>• <strong>蓝桥杯 Python 组</strong> 全国三等奖（2026.06） &amp; <strong>睿抗机器人大赛</strong> 全国三等奖（2026.07）",

    /* Section 03: About & Technical Capabilities */
    aboutLabel: "技术能力与工程方法",
    aboutTitle: "读懂复杂源码，交付可靠系统。",
    aboutLead: "我喜欢站在模型能力与系统工程之间：既关心微调与视觉解析的准确率，也关心每一次接口调用的耗时、事务一致性与容器可复现性。",
    aboutBody:
      "从阅读改造大型开源 AI 框架 DB-GPT、构建多模态视觉大模型（Qwen2.5-VL / UI-TARS）图像 BBox 坐标质检管道，到使用 FastAPI、Flask、Vue 3 与 Spring Boot 交付完整全栈应用，我擅长结合 Claude Code / Cursor 高效排障，把复杂需求变成经得起自动化测试检验的工程成果。",
    principleOne:
      "熟练掌握 Python、SQL，掌握 FastAPI、Flask 构建模型推理接口、文件上传解析与流式后端服务；熟悉 Linux、Git、uv 依赖管理与 Docker / Docker Compose 容器化部署（镜像锁定、健康检查、持久卷与权限隔离）。",
    principleTwo:
      "掌握视觉与文本模型 LoRA 参数高效微调、多模态视觉大模型（Qwen2.5-VL / UI-TARS）图像边界框（BBox）坐标提取校准、文档结构化解析；擅长阅读改造大型现有开源 AI 代码库，结合 Claude Code / Cursor 高效排障。",
    principleThree:
      "熟练使用 Vue 3 / Element Plus、JavaScript / TypeScript、HTML/CSS、ECharts 进行 Web 页面组件化开发、动态表单与可视化图表联调；掌握 Java、Spring Boot、MyBatis-Plus、MySQL、Redis 业务接口研发。",
    toolboxLabel: "核心技术栈",

    /* Section 04: Contact */
    contactKicker: "随时到岗 · 期待合作",
    contactTitle: "正在寻找能直接上手干活的实习生？我们聊聊。",
    contactEmailLabel: "EMAIL // 邮箱",
    contactPhoneLabel: "PHONE // 电话",
    contactStatusLabel: "AVAILABILITY // 到岗状态",
    contactStatusValue: "随时到岗 · 每周 5 天 · 6 个月（可在京全职实习）",
    findMe: "在 GitHub 找到我 (@stayreal233)",
    sendEmail: "发送邮件联系",
    footerLine: "基于任飞扬简历与开源工作成果构建 · DESIGNED WITH INTENT.",
    backTop: "返回顶部",
  },
  en: {
    title: "Feiyang Ren (stayreal233) — AI & Full-Stack Systems Builder",
    description:
      "Portfolio of Feiyang Ren (stayreal233): Python model serving backends, open-source AI framework refactoring (DB-GPT), VLM/text LoRA fine-tuning, and Vue 3 / Spring Boot full-stack engineering.",
    skip: "Skip to main content",
    brandLabel: "Feiyang Ren home",
    navLabel: "Primary navigation",
    languageLabel: "Switch language",
    navWork: "Selected Work",
    navResearch: "Research & Honors",
    navAbout: "Capabilities",
    navContact: "Contact",
    role: "NKU INCOMING M.S. (985) · YSU SE RANK 1/173 · AI & FULL-STACK BUILDER",
    heroSubtitle: "REN FEIYANG // GITHUB @STAYREAL233 // PYTHON · VLM & LORA · FULL-STACK",
    heroStatement: "I turn model services and full-stack engineering into verifiable systems.",
    heroIntro:
      "Senior Software Engineering student at Yanshan University (Rank 1/173, admitted to Nankai University for M.S. in Multimodal & Agent LLMs). Available immediately for full-time internship in Beijing (5 days/week, 6 months). Experienced in FastAPI/Flask backends, DB-GPT refactoring, LoRA fine-tuning, Docker orchestration, and Vue 3 / Spring Boot.",
    exploreWork: "Explore selected work",
    visitGithub: "GitHub Profile",
    available: "AVAILABLE NOW · 5 DAYS/WK · 6 MONTHS IN BEIJING",
    manifestoLabel: "The quick version",
    manifestoTitle: "Between model precision and systems determinism, I choose both.",
    metric1Kicker: "ACADEMIC RANK // NANKAI UNIV. (985)",
    metric1Desc: "Ranked 1st out of 173 in Software Engineering at YSU; exempted for M.S. at Nankai University in Multimodal & Agent LLMs",
    metric2Kicker: "DB-GPT REFACTOR // -95.3% LATENCY",
    metric2Desc: "Cut single-task LLM invocations by 50% (2→1) and reduced confirmation HTTP median latency from 944ms to 44ms (6/6 hash match)",
    metric3Kicker: "LORA TUNING // RAG & VISION",
    metric3Desc: "BGE LoRA reached 87.64% Recall@5; Stable Diffusion visual LoRA achieved 91.8% pixel A-AUROC (CAS Q2 Top, Neurocomputing)",
    metric4Kicker: "QUALITY & E2E // VERIFIED PIPELINES",
    metric4Desc: "100% pass rate [15/15] on Qwen2.5-VL trajectories; 45 unit tests and 22×2 host/container E2E checks passed",
    manifestoOne: "Deep-diving into open-source AI codebases (DB-GPT v0.8.2) to replace redundant LLM round-trips with 44ms parameterized queries.",
    manifestoTwo: "Multimodal & text model tuning: from 4,240 hard-negative BGE LoRA fine-tuning to Qwen2.5-VL / UI-TARS BBox calibration.",
    manifestoThree: "Full-stack delivery: building production modules with FastAPI, Flask, Vue 3, Element Plus, Spring Boot, and Docker Compose.",
    manifestoFour: "Dual-path verification advocate: every system change is backed by unit tests, snapshot cross-checks, and E2E automation.",
    selectedWork: "Selected work",
    workTitle: "Built to leave the prototype.",
    workIntro: "Every project stems from real engineering bottlenecks and is validated through quantitative benchmarks, unit tests, and containerized E2E checks.",

    /* Project 01 */
    p1State: "944ms → 44ms · 45 Tests Passed",
    p1Type: "AI AGENT & DATA SERVICE · PROJECT LEAD · 2026.01 - 2026.10",
    p1Title: "DB-GPT Open-Source AI Refactoring & Data Analytics Service",
    p1Subtitle: "2nd Prize at 2026 China Collegiate Computing Contest (Provincial) ｜ Source Refactoring, FastAPI & Docker",
    p1Desc:
      "Refactored the open-source Python AI framework DB-GPT (v0.8.2) to mount custom analytics modules, streamlining missing-parameter resolution, dual-path data verification, and containerized E2E delivery.",
    p1Bullet1:
      "<strong>Source Code Refactoring & Latency Optimization:</strong> Read and customized DB-GPT (v0.8.2) to mount custom analytics modules; replaced high-latency secondary LLM follow-up calls with a dynamic form direct parameterized query flow, cutting <strong>single-task LLM calls by 50% (2 → 1)</strong> and reducing confirmation HTTP median latency from <strong>944 ms to 44 ms</strong> across 6 paired benchmarks (6/6 identical hashes).",
    p1Bullet2:
      "<strong>FastAPI Backend & Dual-Path Data Reconciliation:</strong> Built FastAPI endpoints with schema validation, 3s timeout retry (max 2), structured error codes, and read-only view isolation; engineered a <strong>dual-path 'SQL Aggregation + Python Detail' independent re-computation service</strong> on identical snapshots and fixed a container charset init bug affecting 31 Chinese fields (<strong>45/45 unit tests passed</strong>).",
    p1Bullet3:
      "<strong>Web Interaction & Docker Compose Orchestration:</strong> Developed dynamic parameter completion forms, execution trace viewers, bar charts, and HTML/JSON report export pages; orchestrated backend and DB containers via Docker Compose (pinned image digests & <code>uv.lock</code>, healthchecks, persistent volumes), passing <strong>22 E2E automated checks on both host and container environments</strong>.",
    p1Link: "View GitHub Repository",

    /* Project 02 */
    p2State: "100.0% [15/15] Pass Rate",
    p2Type: "MULTIMODAL VLM & QA TOOLKIT · PROJECT LEAD · 2026.03 - 2026.06",
    p2Title: "CUA-Agent-Eval-Suite · Multimodal VLM & BBox QA Toolkit",
    p2Subtitle: "Open-Source Toolkit ｜ Set-of-Marks (BBox) Coordinate Calibration, Automated Auditing & Web Replay Board",
    p2Desc:
      "An open-source evaluation and coordinate quality-assurance suite for GUI / Computer-Use agents, integrating large vision-language models and resolving high-DPI coordinate drift and infinite click loops.",
    p2Bullet1:
      "<strong>Multimodal VLM Integration & Coordinate Calibration:</strong> Integrated <strong>Qwen2.5-VL-72B</strong> and <strong>UI-TARS-7B</strong> services using Set-of-Marks (SoM) visual prompting for UI bounding box (BBox) extraction and control mapping; diagnosed and fixed <strong>high-DPI scaling drift, SoM ghost node filtering, and infinite click loops</strong> in isolated Docker + Pytest environments.",
    p2Bullet2:
      "<strong>Automated Validation Pipeline & Web Replay Dashboard:</strong> Authored Python batch pipelines to collect 30 multimodal trajectories (<strong>100.0% [15/15] pass rate on Qwen2.5-VL</strong>), built post-processing tools cross-checking DOM trees, CSV/JSON/Markdown exports, and SQLite records, and delivered an <strong>interactive HTML trajectory replay and anomaly triage dashboard</strong>.",
    p2Link: "View GitHub Repository",

    /* Project 03 */
    p3State: "Recall@5 87.64% · MRR@10 0.7793",
    p3Type: "RAG & MULTIMODAL SYSTEM · PROJECT LEAD · 2024.12 - 2025.12",
    p3Title: "Domain Knowledge Base QA & Multimodal Service System",
    p3Subtitle: "Provincial Innovation Project ｜ BGE LoRA Fine-Tuning, 1,066-Node Neo4j Graph, Flask & Wav2Lip Pipeline",
    p3Desc:
      "An end-to-end domain RAG and multimodal service platform spanning hard-negative mining, embedding LoRA fine-tuning, Neo4j graph reasoning, and automated PPT-to-Wav2Lip video synthesis.",
    p3Bullet1:
      "<strong>Dataset Curation & Embedding LoRA Fine-Tuning:</strong> Addressed false-positive retrieval on high-similarity domain texts by building a Python pipeline combining <strong>semantic similarity, keyword overlap, and TF-IDF</strong> to mine and clean <strong>4,240 hard negatives</strong>; fine-tuned <code>BGE-large-zh-v1.5</code> with LoRA and epoch-wise checkpoint selection, boosting <strong>Recall@5 to 87.64% and MRR@10 to 0.7793</strong>.",
    p3Bullet2:
      "<strong>Flask Backend, Document Parsing & Web Modules:</strong> Wrapped file upload, <strong>1,066-node Neo4j graph queries</strong>, and streaming RAG inference into RESTful Flask services, chaining PPT structural parsing, script generation, TTS, and <strong>Wav2Lip lip-sync</strong> interfaces; independently built the Web frontend featuring streaming QA, Markdown rendering, ECharts graph visualization, and source linkage.",
    p3Link: "Visit GitHub Profile",

    /* Project 04 */
    p4State: "MyBatis-Plus PR #422 · Transactional",
    p4Type: "FULL-STACK INTERNSHIP & OPEN SOURCE · 2025.07 - 2025.09",
    p4Title: "Smart Community Full-Stack Platform & MyBatis-Plus OSS",
    p4Subtitle: "iSoftStone Education (Full-Stack Intern) ｜ Vue 3 + Spring Boot Delivery & Official Doc Contribution",
    p4Desc:
      "Independently developed full-stack admin and mobile RESTful modules for a Smart Community platform, solving concurrency consistency challenges and contributing verified SQL patterns back to MyBatis-Plus.",
    p4Bullet1:
      "<strong>Full-Stack Web Modules & RESTful APIs:</strong> Independently delivered announcement, property/resident archive, utility repair, and voting modules using <strong>Vue 3 / Element Plus</strong> and <strong>Spring Boot</strong>; implemented multi-criteria filtering, duplicate code checks, partial field updates, <strong>debounced submission, retry-on-failure, and empty-state fallbacks</strong>.",
    p4Bullet2:
      "<strong>Concurrency Consistency & Multi-Table Maintenance:</strong> Combined <strong>composite unique indexes, atomic SQL increments, and <code>@Transactional</code></strong> to eliminate duplicate concurrent submissions and counter drift; managed captcha TTLs via Redis and enforced dependency-ordered multi-table cleanup and state transition validation.",
    p4Bullet3:
      "<strong>MyBatis-Plus Official Documentation Contribution:</strong> Submitted a FAQ on <strong>logical deletion vs. unique index conflicts along with 6 verified MySQL reproduction cases</strong> to the official MyBatis-Plus documentation repository (<code>github.com/baomidou/mybatis-plus-doc/pull/422</code>).",
    p4Link: "View MyBatis-Plus PR #422",

    /* Section 02: Research, Education & Honors */
    researchLabel: "Education, Research & Honors",
    researchTitle: "Rigorous academic training meets engineering execution.",
    researchIntro: "Ranked 1/173 in undergraduate Software Engineering and exempted for graduate studies at Nankai University, with two CAS Top journal papers (published/under review) and multiple international/national competition awards.",
    eduHeaderLeft: "EDUCATION // ACADEMIC BACKGROUND",
    eduHeaderRight: "NKU (985) & YSU (RANK 1/173)",
    edu1Period: "2027.09 - 2030.06",
    edu1Sub: "Incoming M.S. (Exempted)",
    edu1Title: "Nankai University (985) · Computer Technology",
    edu1Org: "Research Focus: Multimodal & Agent Large Models",
    edu1Detail: "Admitted via national postgraduate exemption; zero coursework pressure in senior year, available for full-time internship in Beijing (5 days/week · 6 months).",
    edu2Period: "2023.09 - 2027.06",
    edu2Sub: "B.Eng. · CPC Member",
    edu2Title: "Yanshan University · Software Engineering",
    edu2Org: "Academic Rank: 1 / 173 (1st in Department)",
    edu2Detail: "CET-6 (443), CET-4 (527); awarded First-Class University Scholarship 3 times and Second-Class Scholarship twice.",

    pubHeaderLeft: "PUBLICATIONS // RESEARCH PAPERS",
    pubHeaderRight: "CAS Q1 / Q2 TOP JOURNALS",
    pub1Tag: "CAS Q2 Top",
    pub1Sub: "Neurocomputing · 2nd Author",
    pub1Title: "Normality-Preserving Continual Industrial Anomaly Detection via Orthogonal LoRA Banks",
    pub1Venue: "Published in Neurocomputing (CAS Q2 Top)",
    pub1Detail: "Conducted visual LoRA fine-tuning and layer selection on Stable Diffusion, achieving <strong>91.8% (+3.2pp) pixel-level A-AUROC</strong> on the VisA benchmark.",
    pub2Tag: "CAS Q1 Top (Under Review)",
    pub2Sub: "ESWA · 2nd Author",
    pub2Title: "PS-Mem: Preference-State Memory Modeling for Long-Term Personalized Intelligent Assistants",
    pub2Venue: "Under Review at Expert Systems with Applications (ESWA, CAS Q1 Top)",
    pub2Detail: "Designed a dual-layer preference-state memory modeling framework for long-horizon personalized intelligent assistants.",

    honorHeaderLeft: "OPEN SOURCE & HONORS // AWARDS & CONTRIBUTIONS",
    honorHeaderRight: "INTERNATIONAL & NATIONAL AWARDS",
    honor1Tag: "OPEN SOURCE PR",
    honor1Sub: "MyBatis-Plus Official Docs",
    honor1Title: "Logical Deletion & Unique Index Conflict FAQ + 6 MySQL Cases",
    honor1Venue: "github.com/baomidou/mybatis-plus-doc/pull/422",
    honor1Detail: "Contributed a production-tested FAQ and <strong>6 reproducible MySQL verification examples</strong> to the official MyBatis-Plus documentation.",
    honor2Tag: "2025.03 - 2026.07",
    honor2Sub: "International & National Prizes",
    honor2Title: "ASC Student Supercomputer Challenge & National Programming Awards",
    honor2Venue: "4 Major Engineering & Algorithm Competitions",
    honor2Detail:
      "• <strong>ASC World Student Supercomputer Challenge</strong> — International 2nd Prize (2025.03)<br>• <strong>2026 China Collegiate Computing Contest</strong> — Provincial 2nd Prize (2026.06)<br>• <strong>Lanqiao Cup (Python)</strong> National 3rd Prize (2026.06) &amp; <strong>RAICOM Robotics Contest</strong> National 3rd Prize (2026.07)",

    /* Section 03: About & Technical Capabilities */
    aboutLabel: "Technical capabilities & approach",
    aboutTitle: "Read complex codebases. Deliver reliable systems.",
    aboutLead: "I work at the intersection of model capability and systems engineering: caring equally about fine-tuning recall and about HTTP latency, transactional consistency, and container reproducibility.",
    aboutBody:
      "From refactoring DB-GPT and building Set-of-Marks (BBox) visual inspection pipelines with Qwen2.5-VL / UI-TARS, to shipping full-stack applications with FastAPI, Flask, Vue 3, and Spring Boot, I pair deep source reading with AI-assisted debugging (Claude Code / Cursor) to ship verified software.",
    principleOne:
      "Proficient in Python and SQL; experienced in building model inference APIs, file parsing, and streaming services with FastAPI & Flask; skilled in Linux, Git, uv, and Docker / Docker Compose (digest pinning, healthchecks, volumes, privilege isolation).",
    principleTwo:
      "Skilled in visual/text LoRA fine-tuning, multimodal VLM (Qwen2.5-VL / UI-TARS) BBox coordinate extraction & calibration, and document parsing; adept at navigating and refactoring large open-source AI codebases with Claude Code / Cursor.",
    principleThree:
      "Proficient in Vue 3, Element Plus, JavaScript/TypeScript, HTML/CSS, and ECharts for dynamic forms and interactive dashboards; experienced in Java, Spring Boot, MyBatis-Plus, MySQL, and Redis business API development.",
    toolboxLabel: "Technology stack",

    /* Section 04: Contact */
    contactKicker: "Ready to onboard · Let's build together",
    contactTitle: "Looking for an AI, Backend, or Full-Stack Intern? Let's talk.",
    contactEmailLabel: "EMAIL // DIRECT",
    contactPhoneLabel: "PHONE // MOBILE",
    contactStatusLabel: "AVAILABILITY // INTERNSHIP",
    contactStatusValue: "Immediate Start · 5 Days/Week · 6 Months (Full-time in Beijing)",
    findMe: "Find me on GitHub (@stayreal233)",
    sendEmail: "Send me an Email",
    footerLine: "BUILT FROM FEIYANG REN'S RESUME & OPEN-SOURCE WORK · DESIGNED WITH INTENT.",
    backTop: "Back to top",
  },
};

let currentLanguage = localStorage.getItem("portfolio-language") || "zh";

const setLanguage = (language) => {
  const copy = translations[language] || translations.zh;
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key] !== undefined) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (copy[key] !== undefined) {
      element.innerHTML = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (copy[key] !== undefined) {
      element.setAttribute("aria-label", copy[key]);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (copy[key] !== undefined) {
      element.alt = copy[key];
    }
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  document.title = copy.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = copy.description;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = copy.title;
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = copy.description;

  localStorage.setItem("portfolio-language", language);
  updateTime();
};

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 },
  );
  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 3, 2) * 55}ms`;
    observer.observe(element);
  });
  window.addEventListener("load", () => {
    window.setTimeout(() => {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    }, 1000);
  });
}

let scrollFrame;
const updateScrollProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  document.documentElement.style.setProperty("--scroll", progress.toFixed(4));
  scrollFrame = undefined;
};

window.addEventListener(
  "scroll",
  () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollProgress);
  },
  { passive: true },
);

const timeElement = document.querySelector("#local-time");
function updateTime() {
  if (!timeElement) return;
  timeElement.textContent = `${new Intl.DateTimeFormat(currentLanguage === "zh" ? "zh-CN" : "en-GB", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date())} CST`;
}
updateTime();
setInterval(updateTime, 1000);

const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* Hero Generative Bezier Flow Field */
const canvas = document.querySelector("#hero-canvas");
const context = canvas ? canvas.getContext("2d") : null;
const pointer = { x: 0.7, y: 0.32 };

const drawField = () => {
  if (!canvas || !context) return;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, width, height);

  const centerX = pointer.x * width;
  const centerY = pointer.y * height;
  const colors = [
    "rgba(40, 85, 217, 0.24)",
    "rgba(223, 91, 61, 0.2)",
    "rgba(23, 33, 28, 0.11)",
  ];
  for (let line = 0; line < 15; line += 1) {
    const offset = (line - 7) * 34;
    context.beginPath();
    context.moveTo(width * 0.42, height + offset);
    context.bezierCurveTo(
      centerX - 240 + offset * 0.5,
      centerY + 230,
      centerX + 190 - offset * 0.25,
      centerY - 250,
      width + 90,
      height * 0.12 + offset * 0.35,
    );
    context.strokeStyle = colors[line % colors.length];
    context.lineWidth = line % 5 === 0 ? 1.6 : 0.8;
    context.stroke();
  }
  context.fillStyle = "rgba(240, 212, 90, 0.85)";
  context.beginPath();
  context.arc(centerX, centerY, 5, 0, Math.PI * 2);
  context.fill();
};

drawField();
window.addEventListener("resize", drawField, { passive: true });

if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  let canvasFrame;
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    heroSection.addEventListener(
      "pointermove",
      (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointer.x = (event.clientX - bounds.left) / bounds.width;
        pointer.y = (event.clientY - bounds.top) / bounds.height;
        if (!canvasFrame) {
          canvasFrame = requestAnimationFrame(() => {
            drawField();
            canvasFrame = undefined;
          });
        }
      },
      { passive: true },
    );
  }

  document.querySelectorAll(".tilt-surface").forEach((surface) => {
    surface.addEventListener("pointermove", (event) => {
      const bounds = surface.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      surface.style.setProperty("--rx", `${(-y * 3.2).toFixed(2)}deg`);
      surface.style.setProperty("--ry", `${(x * 3.2).toFixed(2)}deg`);
      surface.style.setProperty("--ix", `${(-x * 10).toFixed(1)}px`);
      surface.style.setProperty("--iy", `${(-y * 10).toFixed(1)}px`);
    });
    surface.addEventListener("pointerleave", () => {
      ["--rx", "--ry", "--ix", "--iy"].forEach((property) =>
        surface.style.removeProperty(property),
      );
    });
  });

  document.querySelectorAll(".magnetic").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const bounds = element.getBoundingClientRect();
      const x = event.clientX - bounds.left - bounds.width / 2;
      const y = event.clientY - bounds.top - bounds.height / 2;
      element.style.transform = `translate(${(x * 0.12).toFixed(1)}px, ${(y * 0.12).toFixed(1)}px)`;
    });
    element.addEventListener("pointerleave", () => {
      element.style.transform = "";
    });
  });
}

setLanguage(currentLanguage);
updateScrollProgress();
