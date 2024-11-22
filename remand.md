warhammer-guide/
│
├── frontend/                # 前端项目目录
│   ├── public/             # 静态资源
│   │   ├── images/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/        # 项目资源文件
│   │   │   └── styles.css
│   │   ├── components/    # 组件
│   │   │   ├── Header/
│   │   │   │   └── Header.tsx
│   │   │   ├── Footer/
│   │   │   │   └── Footer.tsx
│   │   │   ├── GuideList/
│   │   │   │   └── GuideList.tsx
│   │   │   └── GuideDetail/
│   │   │       └── GuideDetail.tsx
│   │   ├── pages/         # 页面组件
│   │   │   ├── Home/
│   │   │   │   └── index.tsx
│   │   │   ├── Guides/
│   │   │   │   └── index.tsx
│   │   │   ├── About/
│   │   │   │   └── index.tsx
│   │   │   └── Profile/
│   │   │       └── index.tsx
│   │   ├── services/      # API服务
│   │   │   └── api.ts
│   │   ├── utils/         # 工具函数
│   │   │   └── helpers.ts
│   │   ├── store/         # 状态管理
│   │   │   └── store.ts
│   │   ├── routes/        # 路由配置
│   │   │   └── routes.ts
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── README.md
│
├── backend/                # 后端项目目录
│   ├── src/
│   │   ├── controllers/   # 控制器层
│   │   │   └── guides.js
│   │   ├── models/        # 数据模型层
│   │   │   └── Guide.js
│   │   ├── services/      # 业务逻辑层
│   │   │   └── guideService.js
│   │   ├── routes/        # 路由配置
│   │   │   └── guides.js
│   │   ├── middleware/    # 中间件
│   │   │   └── auth.js
│   │   ├── config/        # 配置文件
│   │   │   └── db.js
│   │   ├── utils/         # 工具函数
│   │   │   └── helpers.js
│   │   └── app.js
│   ├── tests/             # 测试文件
│   │   └── guides.test.js
│   ├── package.json
│   └── README.md
│
├── database/              # 数据库相关
│   ├── migrations/        # 数据库迁移文件
│   │   └── 20240101_initial_migration.js
│   └── seeds/            # 种子数据
│       └── seedGuides.js
│
└── docs/                 # 项目文档
    ├── api/              # API文档
    │   └── README.md
    └── README.md

    战锤攻略个人网站需求文档
1. 项目概述
战锤攻略个人网站旨在为战锤爱好者提供一个分享和获取攻略、战术分析、mod指南以及相关资讯的平台。用户可以浏览最新的攻略文章，订阅战报，获取最新的战锤资讯。

2. 功能需求
2.1 用户功能
浏览攻略：用户可以浏览最新的攻略文章，包括战术分析、模型涂装指南和小说推荐。
搜索攻略：用户可以通过关键词搜索攻略文章。
订阅战报：用户可以通过输入邮箱地址订阅战报，获取最新的战锤资讯。
社交分享：用户可以通过社交媒体分享攻略文章。
2.2 管理员功能
发布攻略：管理员可以发布新的攻略文章。
编辑攻略：管理员可以编辑已发布的攻略文章。
删除攻略：管理员可以删除不再需要的攻略文章。
管理用户：管理员可以管理用户订阅信息。
3. 非功能需求
性能：网站应能快速响应用户请求，页面加载时间不超过3秒。
安全性：用户数据应加密存储，防止数据泄露。
可用性：网站应具备良好的用户体验，界面简洁易用。
兼容性：网站应兼容主流浏览器（Chrome、Firefox、Safari、Edge）。
4. 系统架构
4.1 前端
框架：Next.js
UI库：Tailwind CSS, Chakra UI
状态管理：Redux, React Query
HTTP客户端：Axios
4.2 后端
框架：Express.js
数据库：MongoDB, Mongoose
身份验证：JWT (JSON Web Tokens)
环境变量管理：dotenv
4.3 部署
前端部署：Vercel
后端部署：Heroku, DigitalOcean
数据库托管：MongoDB Atlas
4.4 持续集成/持续部署 (CI/CD)
CI/CD工具：GitHub Actions
5. 数据库设计
5.1 用户表 (users)
字段：
id：用户ID
email：用户邮箱
password：用户密码（加密存储）
role：用户角色（普通用户/管理员）
5.2 攻略表 (guides)
字段：
id：攻略ID
title：攻略标题
description：攻略描述
content：攻略内容
imageUrl：攻略图片URL
createdAt：创建时间
updatedAt：更新时间
5.3 订阅表 (subscriptions)
字段：
id：订阅ID
email：订阅用户邮箱
createdAt：订阅时间
6. API设计
6.1 获取攻略列表
URL：/api/guides
方法：GET
响应：
6.2 创建新攻略
URL：/api/guides
方法：POST
请求体：
响应：
6.3 订阅战报
URL：/api/subscriptions
方法：POST
请求体：
响应：
7. 用户界面设计
首页：展示最新的攻略文章和订阅战报的入口。
攻略详情页：展示攻略的详细内容。
关于页：介绍网站和战锤的相关信息。
个人资料页：展示用户的订阅信息和管理选项。
8. 项目时间表
第一周：项目初始化，前后端框架搭建。
第二周：前端页面设计与开发，后端API设计与开发。
第三周：数据库设计与实现，用户认证与授权。
第四周：测试与部署，项目文档编写。
希望这个需求文档能帮助你更好地规划和开发你的战锤攻略个人网站！