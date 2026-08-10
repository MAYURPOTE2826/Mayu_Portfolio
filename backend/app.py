from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Enable CORS for all routes so our Next.js frontend can fetch data without issues
CORS(app)

# --- DATA STORE (In a real app, this would come from a database) ---

skills_data = [
    {
        "category": "Programming Languages",
        "skills": ["Python", "JavaScript", "SQL", "Java", "HTML", "CSS"],
    },
    {
        "category": "AI & Machine Learning",
        "skills": ["Scikit-learn", "Pandas", "NumPy", "ML Algorithms", "Data Analysis", "Feature Engineering"],
    },
    {
        "category": "Generative AI & LLMs",
        "skills": ["LangChain", "RAG", "FAISS", "Embeddings", "Prompt Engineering", "API Integration"],
    },
    {
        "category": "Web Development",
        "skills": ["React.js", "Node.js", "Express.js", "FastAPI", "Flask", "MERN Stack", "REST APIs"],
    },
    {
        "category": "Databases",
        "skills": ["MongoDB", "MySQL", "SQLite", "SQL", "Vector Databases (FAISS)"],
    },
    {
        "category": "Tools & Platforms",
        "skills": ["Git", "GitHub", "Docker", "Linux", "Jupyter", "VS Code", "Prometheus", "Grafana"],
    },
]

experience_data = [
    {
        "role": "ML Model Developer",
        "company": "SAP India",
        "duration": "Jan 2025 – Mar 2025",
        "description": "Developed and optimized machine learning models for data analysis and predictive tasks.",
        "tech": ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    },
    {
        "role": "Web Developer Intern (MERN)",
        "company": "EY GDS (Ernst & Young)",
        "duration": "Mar 2025 – May 2025",
        "description": "Built scalable full-stack MERN applications, collaborating with senior developers on robust web solutions.",
        "tech": ["MongoDB", "Express.js", "React.js", "Node.js", "Git"],
    },
    {
        "role": "Developer",
        "company": "AssetCues",
        "duration": "Previous",
        "description": "Contributed to web development and technical implementations for enterprise asset management solutions.",
        "tech": ["Web Development", "Technical Implementation"],
    },
]

projects_data = {
    "featured": [
        {
            "title": "Resilient Architecture Self-Healing System",
            "description": "Intelligent self-healing architecture that detects anomalies and triggers automated recovery actions based on detected patterns.",
            "problem": "Traditional monitoring lacks intelligence for automated recovery, causing delayed downtime.",
            "solution": "Developed an ML-based system using Isolation & Random Forests to detect anomalies and trigger recovery, monitored via Prometheus & Grafana.",
            "tech": ["Python", "Scikit-learn", "Prometheus", "Grafana", "Flask", "Docker", "ML"],
            "github": "#",
            "demo": "#",
        },
        {
            "title": "CodeInsight AI Code Reviewer",
            "description": "AI-powered code analysis tool providing intelligent suggestions, bug detection, and refactoring using LLMs.",
            "problem": "Manual code reviews are time-consuming and lack real-time context-aware feedback.",
            "solution": "Built a FastAPI & React application integrating Gemini Pro for real-time AI code review and best practices.",
            "tech": ["FastAPI", "React", "Gemini Pro", "GitHub Actions", "Python", "Generative AI"],
            "github": "https://github.com/MAYURPOTE2826/",
            "demo": "#",
        },
        {
            "title": "Multi-PDF RAG Chatbot",
            "description": "RAG-based chatbot that extracts and stores vector embeddings to accurately answer questions from multiple PDFs.",
            "problem": "Extracting specific context across multiple large PDF documents is highly inefficient.",
            "solution": "Implemented a robust RAG pipeline with LangChain and FAISS vector DB for semantic search and context-aware Q&A.",
            "tech": ["LangChain", "FAISS", "Streamlit", "Python", "RAG", "LLM"],
            "github": "#",
            "demo": "#",
        },
    ],
    "other": [
        {
            "title": "CGPA Prediction System",
            "description": "Random Forest model on historical data to predict student academic performance with a Flask UI.",
            "tech": ["Python", "Scikit-learn", "Random Forest", "Flask", "Pandas"],
            "github": "#",
        },
        {
            "title": "Health Advisor System",
            "description": "NLP-based symptom analysis using TF-IDF and classification for intelligent health recommendations.",
            "tech": ["Python", "NLP", "TF-IDF", "Scikit-learn", "Flask"],
            "github": "#",
        },
        {
            "title": "Web Series Recommendation",
            "description": "Content-based recommendation system using TF-IDF, Cosine Similarity, and TMDB API.",
            "tech": ["Python", "NLP", "Cosine Similarity", "TMDB API"],
            "github": "#",
        },
        {
            "title": "AI Outfit Color Recommender",
            "description": "Intelligent recommendation logic for outfit color combinations using OpenCV.",
            "tech": ["Python", "OpenCV", "Flask", "Computer Vision"],
            "github": "#",
        },
    ]
}

# --- API ROUTES ---

@app.route('/api/skills', methods=['GET'])
def get_skills():
    return jsonify(skills_data)

@app.route('/api/experience', methods=['GET'])
def get_experience():
    return jsonify(experience_data)

@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify(projects_data)

@app.route('/', methods=['GET'])
def index():
    return jsonify({
        "message": "Welcome to the Mayur Portfolio API!",
        "endpoints": [
            "/api/skills",
            "/api/experience",
            "/api/projects",
            "/api/health"
        ]
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "ok", "message": "Flask API is running"})

if __name__ == '__main__':
    # Run the Flask app on port 5000
    app.run(debug=True, port=5000)
