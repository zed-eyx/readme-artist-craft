
import { useState } from "react";
import { ChevronDown, FileText, Zap, Code, Globe, Package } from "lucide-react";
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
  basic: {
    name: "Basic Project",
    icon: FileText,
    content: `# Project Title

A brief description of what this project does and who it's for

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

\`\`\`
git clone https://github.com/username/project-name.git
cd project-name
npm install
\`\`\`

### Executing program

* How to run the program
* Step-by-step bullets
\`\`\`
npm start
\`\`\`

## Authors

Contributors names and contact info

* Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details`
  },
  
  webapp: {
    name: "Web Application",
    icon: Globe,
    content: `# 🌐 Project Name

> A modern web application built with [Your Tech Stack]

[![Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://your-demo-link.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## ✨ Features

- 🚀 Fast and responsive
- 🎨 Beautiful UI/UX
- 📱 Mobile-first design
- 🔒 Secure authentication
- 🌙 Dark mode support

## 🛠️ Built With

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/username/project-name.git

# Navigate to the project directory
cd project-name

# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`

## 📱 Screenshots

![Screenshot 1](path/to/screenshot1.png)
![Screenshot 2](path/to/screenshot2.png)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@username](https://github.com/username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/username)`
  },

  library: {
    name: "Library/Package",
    icon: Package,
    content: `# 📦 Package Name

> A powerful and lightweight JavaScript library for [purpose]

[![npm version](https://badge.fury.io/js/package-name.svg)](https://www.npmjs.com/package/package-name)
[![Downloads](https://img.shields.io/npm/dm/package-name.svg)](https://www.npmjs.com/package/package-name)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🎯 Why this package?

- ⚡ Lightning fast performance
- 🪶 Lightweight (< 5kb gzipped)
- 🔧 Zero dependencies
- 📝 TypeScript support
- 🧪 Well tested (100% coverage)

## 📦 Installation

\`\`\`bash
npm install package-name
\`\`\`

\`\`\`bash
yarn add package-name
\`\`\`

## 🚀 Quick Start

\`\`\`javascript
import { functionName } from 'package-name';

// Basic usage
const result = functionName(parameter);
console.log(result);
\`\`\`

## 📖 API Reference

### \`functionName(parameter)\`

Description of what this function does.

**Parameters:**
- \`parameter\` (string): Description of parameter

**Returns:**
- (string): Description of return value

**Example:**
\`\`\`javascript
const result = functionName('example');
// result: 'expected output'
\`\`\`

## 🧪 Testing

\`\`\`bash
npm test
\`\`\`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © [Your Name](https://github.com/username)`
  },

  api: {
    name: "API Documentation",
    icon: Code,
    content: `# 🚀 API Name

> RESTful API for [purpose]

[![API Status](https://img.shields.io/website?url=https://api.example.com&label=API)](https://api.example.com)
[![Version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://api.example.com/v1)

## 📋 Table of Contents

- [Authentication](#authentication)
- [Endpoints](#endpoints)
- [Examples](#examples)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)

## 🔐 Authentication

This API uses API key authentication. Include your API key in the header:

\`\`\`
Authorization: Bearer YOUR_API_KEY
\`\`\`

## 🛠️ Base URL

\`\`\`
https://api.example.com/v1
\`\`\`

## 📡 Endpoints

### GET /users

Get all users

**Response:**
\`\`\`json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
\`\`\`

### POST /users

Create a new user

**Request Body:**
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com"
}
\`\`\`

## 💡 Examples

### JavaScript (Fetch)

\`\`\`javascript
const response = await fetch('https://api.example.com/v1/users', {
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
curl -X GET https://api.example.com/v1/users \\
  -H "Authorization: Bearer YOUR_API_KEY"
\`\`\`

## ⚠️ Error Handling

The API uses standard HTTP status codes:

- \`200\` - Success
- \`400\` - Bad Request
- \`401\` - Unauthorized
- \`404\` - Not Found
- \`500\` - Internal Server Error

## 🔒 Rate Limiting

- 1000 requests per hour per API key
- Rate limit headers included in response

## 📞 Support

For support, email support@example.com or join our Discord server.`
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
      <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
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
