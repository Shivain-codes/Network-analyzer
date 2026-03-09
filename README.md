# ⬡ SocialSphere — Multi-Platform Network Intelligence

> **Discrete Mathematics Project** · BML Munjal University · CSE Section 1

A real-time social network analyzer that applies **Discrete Mathematics** concepts including Graph Theory, BFS, PageRank, Betweenness Centrality, and Graph Coloring to live data from GitHub, YouTube, and Instagram.

---

##  Live Demo
**[socialsphere.vercel.app](https://socialsphere.vercel.app)**

---

##  Features

### 📡 Live Platforms
| Platform | Data Source | Type |
|---|---|---|
| **GitHub** | Real follower/following network |  Live API |
| **YouTube** | Channel & related creator network |  Live API |
| **Instagram** | Posts, hashtags, mentions, audience |  Live API |

###  Discrete Mathematics Algorithms
| Algorithm | Applied To |
|---|---|
| **Graph Theory** G=(V,E) | All network visualizations |
| **BFS Traversal** | Shortest path between any 2 nodes |
| **PageRank** | Identifying influencer nodes |
| **Betweenness Centrality** | Finding bridge nodes |
| **Graph Coloring** | Community detection |
| **Clustering Coefficient** | Local network density |
| **Set Theory** A∩B | Mutual connections |



---

##  Deploy Your Own

### 1. Fork this repo

### 2. Deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### 3. Add Environment Variables
In **Vercel Dashboard → Your Project → Settings → Environment Variables**, add:

| Variable Name | Where to Get It |
|---|---|
| `GITHUB_TOKEN` | github.com → Settings → Developer Settings → Personal Access Tokens |
| `YOUTUBE_KEY` | console.cloud.google.com → Enable YouTube Data API v3 → Credentials |
| `INSTAGRAM_TOKEN` | developers.facebook.com → Graph API Explorer |
| `INSTAGRAM_USER_ID` | developers.facebook.com → Graph API Explorer → `/me` endpoint |

### 4. Redeploy
Vercel auto-redeploys after adding env vars. Your keys are **never** in the code!

---

##  Project Structure

```
socialsphere/
├── index.html          # Main app (single-file SPA)
├── api/
│   └── config.js       # Vercel serverless function — serves env vars securely
├── vercel.json         # Vercel configuration
├── .gitignore          # Never commit .env files
└── README.md           # This file
```

---

##  Security

-  API keys stored in **Vercel Environment Variables** — never in code
-  `/api/config` serverless function delivers keys at runtime
-  No keys exposed in GitHub repository
-  `.gitignore` prevents accidental `.env` commits

---



---

##  DM Concepts Reference

```
Graph G = (V, E)
  V = users/posts/hashtags (nodes)
  E = connections/interactions (edges)

BFS Shortest Path:
  Time Complexity: O(V + E)
  
PageRank:
  PR(v) = (1-d)/N + d × Σ PR(u)/deg(u)
  d = 0.85 (damping factor), 30 iterations

Betweenness Centrality:
  BC(v) = Σ σ(s,t|v) / σ(s,t)
  Brandes Algorithm: O(VE)

Graph Coloring (Community Detection):
  k-coloring where adjacent nodes get different colors
  k = number of communities detected
```

---

*Built with D3.js · GitHub API · YouTube Data API v3 · Instagram Graph API*
