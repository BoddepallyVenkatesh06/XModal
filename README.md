# XModal

XModal is a versatile and customizable modal dialog component for web applications. It provides a user-friendly interface for creating modals with various features such as alerts, confirmations, forms, and more.

## Table of Contents 📚

- [Introduction](#introduction)
- [Features](#features)
- [Screenshot](#screenshot)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Introduction🚀

XModal is designed to be a simple yet powerful modal component that can be integrated into any web application. It allows developers to create modals for various purposes, such as displaying messages, collecting user input, and confirming actions, with ease and flexibility.

## Features🛠️

- **Customizable**: Easily customize the appearance and behavior of the modal.
- **Responsive Design**: Works seamlessly on all devices.
- **Multiple Modal Types**: Supports alerts, confirmations, prompts, and custom content.
- **Animation Effects**: Includes smooth opening and closing animations.
- **Keyboard Accessible**: Fully accessible using keyboard navigation.

## Screenshot📷

![XModal Component](https://github.com/BoddepallyVenkatesh06/XModal/blob/main/Screenshot_XModal.png)

## Getting Started🎯

### Prerequisites📋

Before you begin, ensure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)

### Installation⚙️

1. Clone the repository:

```bash
git clone https://github.com/BoddepallyVenkatesh06/XModal.git
cd xmodal
```

2. Install dependencies:

```bash
npm install
```

## Usage📈

To start the development server, run:

```bash
npm start
```

This will start the application in development mode at `http://localhost:3000`.

## API Reference🔌

### Show Modal

- **Method:** `showModal`
- **Parameters:**
  - `type` (string, required): The type of modal to show ('alert', 'confirm', 'prompt', 'custom').
  - `options` (object, optional): Configuration options for the modal.

- **Example:**

```javascript
import { showModal } from 'xmodal';

showModal('alert', {
  title: 'Alert',
  message: 'This is an alert message',
  onClose: () => console.log('Alert closed')
});
```

### Close Modal

- **Method:** `closeModal`
- **Parameters:**
  - `id` (string, required): The ID of the modal to close.

- **Example:**

```javascript
import { closeModal } from 'xmodal';

closeModal('modal-id');
```

### Modal Options

- **title** (string): The title of the modal.
- **message** (string): The message or content of the modal.
- **onClose** (function): Callback function to be called when the modal is closed.
- **onConfirm** (function): Callback function to be called when the confirm button is clicked (for confirm modals).
- **onCancel** (function): Callback function to be called when the cancel button is clicked (for confirm modals).
- **customContent** (React element): Custom content to be displayed inside the modal (for custom modals).

## Contributing❤️

Contributions are welcome! If you'd like to contribute to the XModal project, please follow these steps:

1. Fork the project.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License📝

```
MIT License

© 2024 Venky Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
