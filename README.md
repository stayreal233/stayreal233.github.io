# stayreal233.github.io — 任飞扬 (Feiyang Ren) 个人主页与工程作品集

基于瑞士平面排版（Swiss Editorial Typography）与现代工程极简主义构建的个人作品集网站，支持 **中 / 英双语无刷新切换**、**HTML5 Canvas 交互式贝塞尔流体背景**、**3D 视差卡片倾斜**、**磁吸按钮动效** 以及 **定制化 SVG 工程架构与评测图表**。

## 目录结构

```text
portfolio/
├── index.html                    # 主页面结构（含双语标记与语义化分节）
├── styles.css                    # 瑞士网格排版、色彩变量与响应式样式表
├── script.js                     # 双语字典、Canvas 流体曲线、3D 视差与实时时钟
└── assets/
    ├── favicon.svg               # 站点图标
    ├── dbgpt-arch.svg            # 01: DB-GPT (v0.8.2) 二次改造与双路复算架构图
    ├── cua-eval.svg              # 02: CUA-Agent-Eval-Suite 多模态 BBox 坐标质检看板
    ├── rag-multimodal.svg        # 03: BGE LoRA 微调曲线与 1,066 节点 Neo4j 多模态流水线
    └── fullstack-community.svg   # 04: 智慧社区全栈并发架构与 MyBatis-Plus PR #422
```

## 本地预览

直接在浏览器双击打开 `index.html`，或在当前目录启动本地静态服务：

```bash
python -m http.server 8099
```

随后访问 `http://localhost:8099/`。

## 部署到 GitHub Pages (`https://stayreal233.github.io/`)

1. 在 GitHub 上创建名为 `stayreal233.github.io` 的公开仓库（Repository）。
2. 在 `portfolio` 目录下执行：
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio website for Feiyang Ren"
   git branch -M main
   git remote add origin https://github.com/stayreal233/stayreal233.github.io.git
   git push -u origin main
   ```
3. 推送完成后，等待 1~2 分钟即可通过 `https://stayreal233.github.io/` 访问您的在线个人主页。
