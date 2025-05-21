// Video Resources Data
const videoResources = [
    {
        title: "6 Steps to Improve Your Emotional Intelligence | Ramona Hacker | TEDxTUM",
        description: "Learn the fundamentals of emotional intelligence and how it impacts our daily lives.",
        thumbnail: "https://img.youtube.com/vi/D6_J7FfgWVc/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=D6_J7FfgWVc"
    },
    {
        title: "Daniel Goleman: The 4 domains of emotional intelligence | Daniel Goleman for Big Think+",
        description: "Explore techniques to enhance your self-awareness and emotional understanding.",
        thumbnail: "https://img.youtube.com/vi/erfgEHHfFkU/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=erfgEHHfFkU"
    },
    {
        title: "Emotional Intelligence: From Theory to Everyday Practice",
        description: "Discover strategies for managing emotions in challenging situations.",
        thumbnail: "https://img.youtube.com/vi/e8JMWtwdLQ4/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=e8JMWtwdLQ4"
    },
    {
        title: "Emotional Intelligence - Amazed by the Quran w/ Nouman Ali Khan",
        description: "Learn how to build emotional resilience and bounce back from setbacks.",
        thumbnail: "https://img.youtube.com/vi/jqFWlmlFUrU/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=jqFWlmlFUrU"
    }
];

// Load Video Resources
function loadVideoResources() {
    const container = document.getElementById('videoGrid');
    if (!container) return;

    const videosHTML = videoResources.map(video => `
        <div class="bg-[#161B22] rounded-lg shadow-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <div class="relative">
                <img src="${video.thumbnail}" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div class="w-16 h-16 bg-[#58A6FF] rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-[#58A6FF] mb-2">${video.title}</h3>
                <p class="text-[#C9D1D9] mb-4">${video.description}</p>
                <a href="${video.videoUrl}" target="_blank" rel="noopener noreferrer" 
                   class="inline-block px-6 py-3 bg-[#58A6FF] text-[#0D1117] rounded-lg hover:bg-[#238636] hover:text-[#C9D1D9] transition-colors">
                    Watch Now
                </a>
            </div>
        </div>
    `).join('');

    container.innerHTML = videosHTML;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadVideoResources();
}); 