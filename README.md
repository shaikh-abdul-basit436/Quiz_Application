# 🎯 Quiz Application

A modern and interactive **Quiz Application** built using **Python Flask**, designed to test users' knowledge across multiple technical and general categories. The application provides a clean, responsive interface with randomized questions, multiple difficulty levels, score analysis, and a countdown timer to create an engaging quiz experience.

---

## 🌐 Live Application

Try the Quiz Application online:

👉 https://quizz-application-bvfu.onrender.com/

---

## 🚀 Features:

- 🎯 Multiple Quiz Categories:
  - Python
  - HTML
  - JavaScript
  - General Knowledge
  - C Programming
  - Core Java
  - Artificial Intelligence
  - Data Structures

- 📊 Three Difficulty Levels:
  - Easy
  - Medium
  - Hard

- 🔀 Randomized Questions
  - Every quiz selects random questions from the chosen category and difficulty level.
  - Questions change every time the quiz is restarted.

- ⏱ Quiz Timer
  - 15-second countdown for each question of the quiz.
  - Automatic submission when the timer expires.

- ✅ Answer Validation
  - Users cannot move to the next question without selecting an answer.
  - Previous button available to review earlier questions.

- 📈 Result Analysis
  - Final Score
  - Percentage
  - Pass/Fail Status
  - Performance Message
  - Displays only incorrectly answered questions with correct answers.

- 🎨 Modern User Interface
  - Black & Gold Theme
  - Light & Dark Mode Toggle
  - Theme preference is saved across pages and refreshes
  - Responsive Design
  - Attractive Cards & Buttons
  - Smooth Navigation

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Flask

### Data Storage
- JSON

### Version Control
- Git
- GitHub

---

## 📁 Project Structure

```text
Quiz_Application/
│
├── app.py
├── utils.py
├── questions.json
├── requirements.txt
├── README.md
│
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
└── templates/
    ├── index.html
    ├── instructions.html
    ├── category.html
    ├── difficulty.html
    ├── quiz.html
    └── result.html

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/shaikh-abdul-basit436/Quiz_Application.git
```

### Move into the Project Folder

```bash
cd Quiz_Application
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Virtual Environment

#### Windows

```bash
venv\Scripts\activate
```

#### Linux / macOS

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run the Application

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

## 📚 Quiz Flow

```
Home
   ↓
Instructions
   ↓
Category Selection
   ↓
Difficulty Selection
   ↓
Quiz
   ↓
Result
   ↓
Restart Quiz
```

---

## 📊 Scoring System

- Correct Answer → +1 Score
- Wrong Answer → 0 Score
- Percentage calculated automatically.
- Minimum **40%** required to pass.

---

## 📸 Screens

- Home Page
- Instructions Page
- Category Selection
- Difficulty Selection
- Quiz Interface
- Result Dashboard

---

## 🔮 Future Enhancements

- User Login & Registration
- Admin Dashboard
- Leaderboard
- Question Management System
- Database Integration (MySQL)
- Performance Analytics
- Certificate Generation
- Dark/Light Theme Toggle
- Multiplayer Quiz
- Cloud Deployment

---

## 👨‍💻 Developer

**Shaikh Abdul Basit**

Second-Year B.Sc. Information Technology Student

GitHub:
https://github.com/shaikh-abdul-basit436

Email:
abdulbasitshaikh436@gmail.com

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps support the project and encourages future improvements.

---

## Copyright

© 2026 Shaikh Abdul Basit. All rights reserved.

This project is provided for viewing and educational purposes only.
No part of this project may be copied, modified, distributed, or used for commercial purposes without prior written permission from the author.
