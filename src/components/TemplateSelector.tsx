
import { useState } from "react";
import { ChevronDown, FileText, Zap, Code, Globe, Package, Star, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TemplateSelectorProps {
  onSelectTemplate: (template: string) => void;
}

const templates = {
  minimal: {
    name: "Minimal",
    icon: FileText,
    content: `# Project Name

> A simple, clean project description

## Quick Start

\`\`\`bash
npm install
npm start
\`\`\`

## License

MIT`
  },

  modern: {
    name: "Modern Web App",
    icon: Globe,
    content: `<div align="center">

# 🚀 Project Name

**A modern web application built with love**

[![Demo](https://img.shields.io/badge/demo-live-brightgreen.svg?style=for-the-badge)](https://your-demo.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/username/repo.svg?style=for-the-badge)](https://github.com/username/repo/stargazers)

![Screenshot](https://via.placeholder.com/800x400/667eea/ffffff?text=Your+App+Screenshot)

</div>

## ✨ Features

- 🎨 **Beautiful UI** - Modern, responsive design
- ⚡ **Lightning Fast** - Optimized performance
- 🔒 **Secure** - Built with security in mind
- 📱 **Mobile First** - Works perfectly on all devices
- 🌙 **Dark Mode** - Easy on the eyes
- 🎯 **Accessible** - WCAG compliant

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **State Management:** Zustand
- **Routing:** React Router v6
- **Build Tool:** Vite
- **Testing:** Vitest, Testing Library
- **Deployment:** Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/username/project-name.git

# Navigate to project directory
cd project-name

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### Environment Variables

Create a \`.env\` file in the root directory:

\`\`\`env
VITE_API_URL=your_api_url
VITE_APP_NAME=Your App Name
\`\`\`

## 📂 Project Structure

\`\`\`
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── styles/             # Global styles
\`\`\`

## 🤝 Contributing

We love contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Lucide](https://lucide.dev/) - For beautiful icons

---

<div align="center">
Made with ❤️ by [Your Name](https://github.com/username)
</div>`
  },

  opensource: {
    name: "Open Source",
    icon: Star,
    content: `<h1 align="center">
  <br>
  <a href="https://your-project.com"><img src="https://via.placeholder.com/200x200/667eea/ffffff?text=LOGO" alt="Project Name" width="200"></a>
  <br>
  Project Name
  <br>
</h1>

<h4 align="center">A powerful open-source tool for <a href="https://your-project.com" target="_blank">amazing things</a>.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/project-name">
    <img src="https://badge.fury.io/js/project-name.svg" alt="npm version">
  </a>
  <a href="https://github.com/username/project-name/actions">
    <img src="https://github.com/username/project-name/workflows/CI/badge.svg" alt="CI Status">
  </a>
  <a href="https://codecov.io/gh/username/project-name">
    <img src="https://codecov.io/gh/username/project-name/branch/main/graph/badge.svg" alt="Coverage">
  </a>
  <a href="https://github.com/username/project-name/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://via.placeholder.com/800x450/667eea/ffffff?text=App+Screenshot)

## Key Features

* **Cross Platform** - Windows, macOS and Linux ready
* **Live Preview** - Make changes, See changes instantly
* **Syntax Highlighting** - Code syntax highlighting
* **Dark/Light Mode** - Choose your preferred theme
* **Customizable** - Highly customizable interface
* **Open Source** - Free and open source forever

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

\`\`\`bash
# Clone this repository
git clone https://github.com/username/project-name

# Go into the repository
cd project-name

# Install dependencies
npm install

# Run the app
npm start
\`\`\`

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use \`node\` from the command prompt.

## Download

You can [download](https://github.com/username/project-name/releases/tag/v1.0.0) the latest installable version of Project Name for Windows, macOS and Linux.

## Emailware

Project Name is an [emailware](https://en.wiktionary.org/wiki/emailware). Meaning, if you liked using this app or it has helped you in any way, I'd like you send me an email at <email@example.com> about anything you'd want to say about this software. I'd really appreciate it!

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Electron](https://electronjs.org/)

## Related

[project-name-cli](https://github.com/username/project-name-cli) - CLI version of this app

## Support

<a href="https://www.buymeacoffee.com/username" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## You may also like...

- [Another Project](https://github.com/username/another-project) - Another awesome project
- [Cool Tool](https://github.com/username/cool-tool) - A cool development tool

## License

MIT

---

> [your-website.com](https://www.your-website.com) &nbsp;&middot;&nbsp;
> GitHub [@username](https://github.com/username) &nbsp;&middot;&nbsp;
> Twitter [@username](https://twitter.com/username)`
  },

  api: {
    name: "API Documentation",
    icon: Code,
    content: `# 🚀 API Name

> A RESTful API for modern applications

<div align="center">

[![API Status](https://img.shields.io/website?url=https://api.example.com&label=API&style=for-the-badge)](https://api.example.com)
[![Version](https://img.shields.io/badge/version-v2.1.0-blue.svg?style=for-the-badge)](https://api.example.com/v2)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>

## 📖 Table of Contents

- [🔐 Authentication](#authentication)
- [🌐 Base URL](#base-url)
- [📡 Endpoints](#endpoints)
- [💡 Examples](#examples)
- [⚠️ Error Handling](#error-handling)
- [🔒 Rate Limiting](#rate-limiting)
- [🧪 Testing](#testing)

## 🔐 Authentication

This API uses Bearer token authentication. Include your API key in the Authorization header:

\`\`\`http
Authorization: Bearer YOUR_API_KEY
\`\`\`

### Getting an API Key

1. Sign up at [https://api.example.com/signup](https://api.example.com/signup)
2. Verify your email address
3. Generate your API key from the dashboard

## 🌐 Base URL

\`\`\`
https://api.example.com/v2
\`\`\`

## 📡 Endpoints

### Users

#### GET /users
Get all users with pagination

**Query Parameters:**
- \`page\` (integer): Page number (default: 1)
- \`limit\` (integer): Items per page (default: 10, max: 100)
- \`search\` (string): Search by name or email

**Response:**
\`\`\`json
{
  "data": [
    {
      "id": "usr_123",
      "name": "John Doe",
      "email": "john@example.com",
      "avatar": "https://example.com/avatar.jpg",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10
  }
}
\`\`\`

#### POST /users
Create a new user

**Request Body:**
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "avatar": "https://example.com/avatar.jpg"
}
\`\`\`

**Response:** \`201 Created\`
\`\`\`json
{
  "id": "usr_123",
  "name": "John Doe",
  "email": "john@example.com",
  "avatar": "https://example.com/avatar.jpg",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
\`\`\`

## 💡 Examples

### JavaScript (Fetch API)

\`\`\`javascript
const response = await fetch('https://api.example.com/v2/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);
\`\`\`

### cURL

\`\`\`bash
curl -X GET "https://api.example.com/v2/users?page=1&limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"
\`\`\`

### Python (requests)

\`\`\`python
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.example.com/v2/users', headers=headers)
data = response.json()
print(data)
\`\`\`

## ⚠️ Error Handling

The API uses conventional HTTP response codes:

| Code | Description |
|------|-------------|
| 200  | Success |
| 201  | Created |
| 400  | Bad Request |
| 401  | Unauthorized |
| 403  | Forbidden |
| 404  | Not Found |
| 429  | Too Many Requests |
| 500  | Internal Server Error |

**Error Response Format:**
\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request data is invalid",
    "details": {
      "email": ["Email is required"]
    }
  }
}
\`\`\`

## 🔒 Rate Limiting

- **Free Tier:** 1,000 requests per hour
- **Pro Tier:** 10,000 requests per hour
- **Enterprise:** Custom limits

Rate limit headers are included in every response:
\`\`\`
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
\`\`\`

## 🧪 Testing

We provide a Postman collection for easy API testing:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/your-collection-id)

## 📞 Support

- 📧 Email: [support@example.com](mailto:support@example.com)
- 💬 Discord: [Join our community](https://discord.gg/example)
- 📖 Documentation: [https://docs.example.com](https://docs.example.com)

## 🤝 Contributing

We welcome contributions! Please see our [API Contributing Guide](CONTRIBUTING.md).

---

<div align="center">
Made with ❤️ by [Your Team](https://github.com/your-team)
</div>`
  },

  library: {
    name: "Library/Package",
    icon: Package,
    content: `<div align="center">

# 📦 Package Name

**A powerful, lightweight JavaScript library**

[![npm version](https://img.shields.io/npm/v/package-name.svg?style=for-the-badge)](https://www.npmjs.com/package/package-name)
[![Downloads](https://img.shields.io/npm/dm/package-name.svg?style=for-the-badge)](https://www.npmjs.com/package/package-name)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/package-name?style=for-the-badge)](https://bundlephobia.com/package/package-name)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)

</div>

## 🎯 Why Choose This Package?

- ⚡ **Blazing Fast** - Optimized for performance
- 🪶 **Lightweight** - Only 2.5KB gzipped
- 🔧 **Zero Dependencies** - No external dependencies
- 📝 **TypeScript Ready** - Full TypeScript support
- 🧪 **Well Tested** - 100% test coverage
- 🌳 **Tree Shakable** - Import only what you need
- 📱 **Universal** - Works in browsers, Node.js, and React Native

## 📦 Installation

### npm
\`\`\`bash
npm install package-name
\`\`\`

### yarn
\`\`\`bash
yarn add package-name
\`\`\`

### pnpm
\`\`\`bash
pnpm add package-name
\`\`\`

### CDN
\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/package-name@latest/dist/index.umd.js"></script>
\`\`\`

## 🚀 Quick Start

### ES Modules
\`\`\`javascript
import { createInstance, utils } from 'package-name';

const instance = createInstance({
  apiKey: 'your-api-key',
  baseURL: 'https://api.example.com'
});

// Use the instance
const result = await instance.getData();
console.log(result);
\`\`\`

### CommonJS
\`\`\`javascript
const { createInstance } = require('package-name');

const instance = createInstance({
  apiKey: 'your-api-key'
});
\`\`\`

### TypeScript
\`\`\`typescript
import { createInstance, Config, ApiResponse } from 'package-name';

const config: Config = {
  apiKey: 'your-api-key',
  timeout: 5000
};

const instance = createInstance(config);

// Fully typed response
const result: ApiResponse = await instance.getData();
\`\`\`

## 📖 API Reference

### \`createInstance(config)\`

Creates a new instance with the provided configuration.

**Parameters:**
- \`config\` (Config): Configuration object

**Config Properties:**
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| apiKey | string | - | Your API key (required) |
| baseURL | string | 'https://api.example.com' | Base API URL |
| timeout | number | 10000 | Request timeout in ms |
| retries | number | 3 | Number of retry attempts |

**Returns:** \`Instance\`

**Example:**
\`\`\`javascript
const instance = createInstance({
  apiKey: 'sk_test_123',
  timeout: 5000,
  retries: 2
});
\`\`\`

### \`instance.getData(options?)\`

Fetches data from the API.

**Parameters:**
- \`options\` (GetDataOptions, optional): Request options

**Returns:** \`Promise<ApiResponse>\`

**Example:**
\`\`\`javascript
const data = await instance.getData({
  filters: { status: 'active' },
  limit: 50
});
\`\`\`

### Utility Functions

#### \`utils.formatDate(date, format?)\`

Formats a date according to the specified format.

**Parameters:**
- \`date\` (Date | string): Date to format
- \`format\` (string, optional): Format string (default: 'YYYY-MM-DD')

**Returns:** \`string\`

**Example:**
\`\`\`javascript
import { utils } from 'package-name';

const formatted = utils.formatDate(new Date(), 'DD/MM/YYYY');
console.log(formatted); // "15/01/2024"
\`\`\`

## 🔧 Advanced Usage

### Error Handling

\`\`\`javascript
import { createInstance, ApiError } from 'package-name';

try {
  const instance = createInstance({ apiKey: 'invalid-key' });
  const result = await instance.getData();
} catch (error) {
  if (error instanceof ApiError) {
    console.error('API Error:', error.message);
    console.error('Status Code:', error.statusCode);
  } else {
    console.error('Unexpected error:', error);
  }
}
\`\`\`

### Custom Configuration

\`\`\`javascript
const instance = createInstance({
  apiKey: 'your-api-key',
  baseURL: 'https://custom-api.example.com',
  timeout: 15000,
  retries: 5,
  onRetry: (attempt, error) => {
    console.log(\`Retry attempt \${attempt}: \${error.message}\`);
  }
});
\`\`\`

## 🧪 Testing

\`\`\`bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
\`\`\`

## 📊 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ≥ 60    |
| Firefox | ≥ 55    |
| Safari  | ≥ 12    |
| Edge    | ≥ 79    |

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/username/package-name.git
cd package-name

# Install dependencies
npm install

# Run development build
npm run dev

# Run tests
npm test
\`\`\`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all [contributors](https://github.com/username/package-name/contributors)
- Inspired by [similar-project](https://github.com/username/similar-project)
- Built with [awesome-tool](https://github.com/username/awesome-tool)

---

<div align="center">

**[Website](https://package-name.com)** • **[Documentation](https://docs.package-name.com)** • **[NPM](https://www.npmjs.com/package/package-name)** • **[GitHub](https://github.com/username/package-name)**

Made with ❤️ by [Your Name](https://github.com/username)

</div>`
  },

  startup: {
    name: "Startup/Product",
    icon: Rocket,
    content: `<div align="center">

# 🚀 ProductName

**The future of [your industry] is here**

[![Website](https://img.shields.io/badge/website-live-brightgreen.svg?style=for-the-badge)](https://your-product.com)
[![Beta](https://img.shields.io/badge/status-beta-yellow.svg?style=for-the-badge)](https://your-product.com/beta)
[![Users](https://img.shields.io/badge/users-10K+-blue.svg?style=for-the-badge)](#)

[🌐 Visit Website](https://your-product.com) • [📱 Download App](https://your-product.com/download) • [💬 Join Community](https://discord.gg/your-product)

![Hero Image](https://via.placeholder.com/800x400/667eea/ffffff?text=Your+Product+Screenshot)

</div>

## 🎯 What is ProductName?

ProductName revolutionizes the way you [solve a specific problem]. Built for modern teams and individuals who demand excellence, our platform combines cutting-edge technology with intuitive design to deliver an unparalleled experience.

### 🌟 The Problem We Solve

Traditional solutions are:
- ❌ Complex and hard to use
- ❌ Expensive and inflexible  
- ❌ Time-consuming to implement
- ❌ Limited integration options

### ✅ Our Solution

ProductName offers:
- ✨ **Intuitive Interface** - Get started in minutes, not hours
- 💰 **Affordable Pricing** - 10x cheaper than competitors
- ⚡ **Lightning Fast** - 3x faster implementation
- 🔗 **Seamless Integration** - Works with 100+ tools

## 🚀 Key Features

### 🎨 **Beautiful Design**
A clean, modern interface that your team will actually want to use. No more ugly enterprise software.

### 🤖 **AI-Powered**
Smart automation that learns from your behavior and suggests improvements.

### 📊 **Real-time Analytics**
Track your progress with beautiful, actionable insights and reports.

### 🔒 **Enterprise Security**
Bank-level security with SOC2 compliance and end-to-end encryption.

### 🌐 **Global Scale**
99.9% uptime with servers in 12 regions worldwide.

### 🔧 **Custom Integrations**
Connect with your existing tools through our robust API and webhooks.

## 📈 Trusted by Industry Leaders

<div align="center">

![Company Logos](https://via.placeholder.com/600x100/f8f9fa/667eea?text=Trusted+by+Leading+Companies)

*"ProductName has transformed our workflow. We've seen a 300% increase in productivity."*
**- Sarah Johnson, CEO at TechCorp**

</div>

## 🎬 See It In Action

[![Demo Video](https://via.placeholder.com/600x300/667eea/ffffff?text=▶️+Watch+Demo+Video)](https://youtube.com/watch?v=demo)

## 💰 Pricing

<div align="center">

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0/month | • Up to 5 projects<br>• Basic analytics<br>• Community support |
| **Pro** | $29/month | • Unlimited projects<br>• Advanced analytics<br>• Priority support<br>• API access |
| **Enterprise** | Custom | • Custom integrations<br>• Dedicated support<br>• SLA guarantee<br>• On-premise option |

[🚀 Start Free Trial](https://your-product.com/signup) • [💬 Contact Sales](https://your-product.com/contact)

</div>

## 🌟 What Our Users Say

> *"This is exactly what we've been looking for. The ROI was immediate."*
> **- Mark Thompson, CTO at StartupXYZ**

> *"The best investment we've made this year. Highly recommended!"*
> **- Lisa Chen, Product Manager at BigTech**

> *"Finally, a tool that actually works as advertised."*
> **- David Rodriguez, Freelance Developer**

## 🚀 Quick Start

### 1. Sign Up
Create your free account in less than 30 seconds.

### 2. Connect Your Tools
Integrate with your existing workflow in one click.

### 3. Start Building
Begin creating amazing things immediately.

## 📱 Download Our Apps

<div align="center">

[![Download on App Store](https://via.placeholder.com/200x60/000000/ffffff?text=Download+on+App+Store)](https://apps.apple.com/app/your-product)
[![Get it on Google Play](https://via.placeholder.com/200x60/34a853/ffffff?text=Get+it+on+Google+Play)](https://play.google.com/store/apps/details?id=com.yourproduct)

</div>

## 🤝 Join Our Community

- 💬 [Discord](https://discord.gg/your-product) - Chat with our team and community
- 🐦 [Twitter](https://twitter.com/your-product) - Follow us for updates
- 📧 [Newsletter](https://your-product.com/newsletter) - Weekly tips and insights
- 🎥 [YouTube](https://youtube.com/your-product) - Tutorials and demos

## 📞 Support

- 📚 [Documentation](https://docs.your-product.com)
- ❓ [FAQ](https://your-product.com/faq)
- 🎫 [Support Portal](https://support.your-product.com)
- 📧 [Email Us](mailto:support@your-product.com)

## 🗺️ Roadmap

### Q1 2024
- [ ] Mobile app improvements
- [ ] Advanced reporting features
- [ ] New integrations (Slack, Teams)

### Q2 2024
- [ ] AI-powered recommendations
- [ ] Custom branding options
- [ ] Advanced security features

[View Full Roadmap](https://your-product.com/roadmap)

## 🏆 Awards & Recognition

- 🥇 **Best New Product 2024** - ProductHunt
- 🏅 **Top 10 Startups to Watch** - TechCrunch
- ⭐ **4.9/5 Stars** - G2 Reviews

## 📄 Legal

- [Privacy Policy](https://your-product.com/privacy)
- [Terms of Service](https://your-product.com/terms)
- [Security](https://your-product.com/security)

---

<div align="center">

**Ready to get started?**

[🚀 Start Free Trial](https://your-product.com/signup) • [📞 Book a Demo](https://your-product.com/demo)

Made with ❤️ by the ProductName Team

[Website](https://your-product.com) • [Blog](https://blog.your-product.com) • [Careers](https://your-product.com/careers)

</div>`
  },

  security: {
    name: "Security/Privacy",
    icon: Shield,
    content: `# 🔒 ProjectName Security

> Enterprise-grade security and privacy for your peace of mind

<div align="center">

[![Security Audit](https://img.shields.io/badge/security-audited-green.svg?style=for-the-badge)](https://security-report.com)
[![SOC2 Compliant](https://img.shields.io/badge/SOC2-compliant-blue.svg?style=for-the-badge)](https://compliance.com)
[![GDPR Ready](https://img.shields.io/badge/GDPR-ready-success.svg?style=for-the-badge)](https://gdpr-info.eu)

</div>

## 🛡️ Security Overview

We take security seriously. Our comprehensive security program protects your data with industry-leading practices and compliance standards.

### 🔐 Core Security Principles

- **Zero Trust Architecture** - Never trust, always verify
- **End-to-End Encryption** - Data encrypted in transit and at rest
- **Principle of Least Privilege** - Minimal access by default
- **Defense in Depth** - Multiple layers of security controls

## 🏛️ Compliance & Certifications

### ✅ Current Certifications
- **SOC2 Type II** - Annual third-party security audit
- **ISO 27001** - International security management standard
- **GDPR Compliant** - European data protection regulation
- **CCPA Compliant** - California consumer privacy act
- **HIPAA Ready** - Healthcare data protection standards

### 📋 Security Frameworks
- **NIST Cybersecurity Framework**
- **OWASP Top 10** - Web application security
- **CIS Controls** - Critical security controls

## 🔒 Data Protection

### Encryption Standards
- **AES-256** encryption for data at rest
- **TLS 1.3** for data in transit
- **End-to-end encryption** for sensitive communications
- **Hardware Security Modules (HSM)** for key management

### Data Handling
- **Data minimization** - We only collect what we need
- **Data retention policies** - Automatic deletion of old data
- **Right to be forgotten** - Complete data deletion on request
- **Data portability** - Export your data anytime

## 🏢 Infrastructure Security

### Cloud Security
- **Multi-region deployment** with AWS/Google Cloud
- **DDoS protection** with CloudFlare
- **Web Application Firewall (WAF)**
- **Intrusion Detection System (IDS)**

### Network Security
- **Zero-trust network architecture**
- **VPN access** for all administrative tasks
- **Network segmentation** and micro-segmentation
- **Regular penetration testing**

### Server Security
- **Hardened operating systems**
- **Automated security patching**
- **Container security scanning**
- **Runtime protection**

## 👥 Access Controls

### Authentication
- **Multi-Factor Authentication (MFA)** required
- **Single Sign-On (SSO)** integration
- **OAuth 2.0 / OpenID Connect**
- **SAML 2.0** support

### Authorization
- **Role-Based Access Control (RBAC)**
- **Attribute-Based Access Control (ABAC)**
- **Just-in-time access** for elevated privileges
- **Regular access reviews**

## 🔍 Security Monitoring

### 24/7 Monitoring
- **Security Operations Center (SOC)**
- **Automated threat detection**
- **Real-time alerting**
- **Incident response team**

### Logging & Auditing
- **Comprehensive audit logs**
- **Tamper-proof log storage**
- **Log analysis and correlation**
- **Compliance reporting**

## 🚨 Incident Response

### Response Plan
1. **Detection** - Automated and manual monitoring
2. **Analysis** - Threat assessment and classification
3. **Containment** - Immediate threat isolation
4. **Eradication** - Root cause elimination
5. **Recovery** - Service restoration
6. **Lessons Learned** - Process improvement

### Communication
- **Customer notification** within 72 hours
- **Transparent incident reports**
- **Regular status updates**
- **Post-incident analysis**

## 🧪 Security Testing

### Regular Assessments
- **Quarterly penetration testing**
- **Annual security audits**
- **Continuous vulnerability scanning**
- **Code security reviews**

### Bug Bounty Program
We maintain an active bug bounty program with responsible security researchers.

**Scope:**
- Web applications and APIs
- Mobile applications
- Infrastructure components

**Rewards:**
- Critical: $5,000 - $10,000
- High: $1,000 - $5,000
- Medium: $500 - $1,000
- Low: $100 - $500

[Submit Security Report](mailto:security@example.com)

## 📚 Security Resources

### For Developers
- [Security Best Practices](https://docs.example.com/security)
- [API Security Guide](https://docs.example.com/api-security)
- [Secure Coding Guidelines](https://docs.example.com/secure-coding)

### For Administrators
- [Admin Security Checklist](https://docs.example.com/admin-security)
- [User Management Guide](https://docs.example.com/user-management)
- [Compliance Documentation](https://docs.example.com/compliance)

### For End Users
- [Account Security Tips](https://help.example.com/security-tips)
- [Two-Factor Authentication Setup](https://help.example.com/2fa)
- [Privacy Settings Guide](https://help.example.com/privacy)

## 📞 Security Contact

### Report Security Issues
- **Email:** [security@example.com](mailto:security@example.com)
- **GPG Key:** [Download Public Key](https://example.com/gpg-key.asc)
- **Response Time:** Within 24 hours

### Security Team
- **Chief Security Officer:** Jane Smith
- **Security Engineers:** Available 24/7
- **Compliance Team:** Available business hours

## 🔄 Security Updates

### Stay Informed
- Subscribe to our [Security Newsletter](https://example.com/security-updates)
- Follow [@ExampleSecurity](https://twitter.com/examplesecurity) on Twitter
- Check our [Security Blog](https://blog.example.com/security)

### Recent Updates
- **2024-01-15:** Enhanced DDoS protection
- **2024-01-10:** Updated encryption standards
- **2024-01-05:** New security monitoring tools

## 📋 Security Questionnaire

Need security information for your compliance team? Download our:
- [Security Questionnaire](https://example.com/security-questionnaire.pdf)
- [SOC2 Report](https://example.com/soc2-report.pdf) (Under NDA)
- [Penetration Test Summary](https://example.com/pentest-summary.pdf)

---

<div align="center">

**Your security is our priority**

[📞 Contact Security Team](mailto:security@example.com) • [📚 Security Documentation](https://docs.example.com/security)

</div>`
  }
};

export const TemplateSelector = ({ onSelectTemplate }: TemplateSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectTemplate = (templateKey: string) => {
    const template = templates[templateKey as keyof typeof templates];
    onSelectTemplate(template.content);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2">
          <FileText className="h-4 w-4" />
          <span>Templates</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg max-h-80 overflow-y-auto">
        {Object.entries(templates).map(([key, template]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleSelectTemplate(key)}
            className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-50 cursor-pointer"
          >
            <template.icon className="h-4 w-4 text-gray-500" />
            <span className="font-medium">{template.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
