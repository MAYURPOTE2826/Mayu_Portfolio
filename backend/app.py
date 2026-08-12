from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

# Enable CORS for all routes (useful for local development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
            "github": "https://github.com/MAYURPOTE2826/",
            "demo": "https://resilient-architecture-of-self-healing-joa3.onrender.com",
        },
        {
            "title": "CodeInsight AI Code Reviewer",
            "description": "AI-powered code analysis tool providing intelligent suggestions, bug detection, and refactoring using LLMs.",
            "problem": "Manual code reviews are time-consuming and lack real-time context-aware feedback.",
            "solution": "Built a FastAPI & React application integrating Gemini Pro for real-time AI code review and best practices.",
            "tech": ["FastAPI", "React", "Gemini Pro", "GitHub Actions", "Python", "Generative AI"],
            "github": "https://github.com/MAYURPOTE2826/",
            "demo": "https://codeinsight-ai-9xvb.onrender.com",
        },
        {
            "title": "Multi-PDF RAG Chatbot",
            "description": "RAG-based chatbot that extracts and stores vector embeddings to accurately answer questions from multiple PDFs.",
            "problem": "Extracting specific context across multiple large PDF documents is highly inefficient.",
            "solution": "Implemented a robust RAG pipeline with LangChain and FAISS vector DB for semantic search and context-aware Q&A.",
            "tech": ["LangChain", "FAISS", "Streamlit", "Python", "RAG", "LLM"],
            "github": "https://github.com/MAYURPOTE2826/",
            "demo": "https://rag-streamlit-chatbot.onrender.com",
        },
    ],
    "other": [
        {
            "title": "CGPA Prediction System",
            "description": "Random Forest model on historical data to predict student academic performance with a Flask UI.",
            "tech": ["Python", "Scikit-learn", "Random Forest", "Flask", "Pandas"],
            "github": "https://github.com/MAYURPOTE2826/",
        },
        {
            "title": "Health Advisor System",
            "description": "NLP-based symptom analysis using TF-IDF and classification for intelligent health recommendations.",
            "tech": ["Python", "NLP", "TF-IDF", "Scikit-learn", "Flask"],
            "github": "https://github.com/MAYURPOTE2826/",
        },
        {
            "title": "Web Series Recommendation",
            "description": "Content-based recommendation system using TF-IDF, Cosine Similarity, and TMDB API.",
            "tech": ["Python", "NLP", "Cosine Similarity", "TMDB API"],
            "github": "https://github.com/MAYURPOTE2826/",
        },
        {
            "title": "AI Outfit Color Recommender",
            "description": "Intelligent recommendation logic for outfit color combinations using OpenCV.",
            "tech": ["Python", "OpenCV", "Flask", "Computer Vision"],
            "github": "https://github.com/MAYURPOTE2826/",
        },
    ]
}

# --- API ROUTES ---

@app.get('/api/skills')
def get_skills():
    return skills_data

@app.get('/api/experience')
def get_experience():
    return experience_data

@app.get('/api/projects')
def get_projects():
    return projects_data

@app.get('/api/health')
def health_check():
    return {"status": "ok", "message": "FastAPI is running"}

# --- STATIC FILES ---
# Mount the exported Next.js UI from the 'out' directory
out_dir = os.path.join(os.path.dirname(__file__), "..", "out")
if os.path.exists(out_dir):
    app.mount("/", StaticFiles(directory=out_dir, html=True), name="static")

if __name__ == '__main__':
    import uvicorn
    # Run the FastAPI app on port 8000
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
