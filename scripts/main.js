// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.md\\:hidden');
const navLinks = document.querySelector('.md\\:flex');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-16');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('w-full');
        navLinks.classList.toggle('bg-white');
        navLinks.classList.toggle('shadow-md');
        navLinks.classList.toggle('p-4');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.add('hidden');
            navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'w-full', 'bg-white', 'shadow-md', 'p-4');
        }
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Case Studies Data
const caseStudies = [
    {
        title: " Emotional Intelligence as a Predictor of Self-Efficacy Among Students with Different Levels of Academic Achievement",
        description: "A case study exploring how emotional intelligence training improved academic performance in university students.",
        image: "https://mars-images.imgix.net/seobot/allgpts.co/6571328cebfc152d51ae2e56-00483b5ec7dfb1299d6229cfaaa8f8b4.png?auto=compressimage.png",
        link: "https://pubmed.ncbi.nlm.nih.gov/25927067/"
    },
    {
        title: "Emotional Intelligence and Learning Motivation Among College Students During the COVID-19 Pandemic: A Serial Mediation Model",
        description: "How understanding emotional patterns helped young professionals achieve their career goals.",
        image: "https://th.bing.com/th/id/R.cc2d14f1248ba16061d6bf3c2c8431ef?rik=yRT%2f7jaALpBMRQ&pid=ImgRaw&r=0",
        link: "https://pubmed.ncbi.nlm.nih.gov/37008860/"
    },
    {
        title: "The Role of Emotional Intelligence in Mediating the Relationship Between Emerging Adulthood and Academic Achievement",
        description: "A study on the impact of emotional intelligence training on social relationships in young adults.",
        image: "https://th.bing.com/th/id/R.5d8b8698a9355a4c2b801997e6f1ec8e?rik=GGAGGCRRpSClEA&pid=ImgRaw&r=0",
        link: "https://www.researchgate.net/publication/317977287_The_role_of_emotional_intelligence_in_mediating_the_relationship_between_emerging_adulthood_and_academic_achievement"
    },
    {
        title: "Emotional Intelligence and Academic Achievement: A Case Study of District Anantnag",
        description: "How emotional intelligence techniques helped students manage academic stress effectively.",
        image: "https://th.bing.com/th/id/OIP.ACcfSlvLZalOesaHoZH0-gHaDH?rs=1&pid=ImgDetMain",
        link: "https://www.researchgate.net/publication/386513047_Emotional_Intelligence_and_Academic_Achievement_A_Case_Study_of_District_Anantnag"
    }
];

// Load Case Studies
function loadCaseStudies() {
    const container = document.getElementById('caseStudiesGrid');
    if (!container) return;

    const studiesHTML = caseStudies.map(study => `
        <div class="bg-[#0D1117] rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
            <img src="${study.image}" alt="${study.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold text-[#58A6FF] mb-2">${study.title}</h3>
                <p class="text-[#C9D1D9] mb-4">${study.description}</p>
                <a href="${study.link}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-[#58A6FF] text-[#0D1117] rounded-lg hover:bg-[#238636] hover:text-[#C9D1D9] transition-colors">
                    View Online
                </a>
            </div>
        </div>
    `).join('');

    container.innerHTML = studiesHTML;
}

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    element.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
    observer.observe(element);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCaseStudies();
    loadBlogPosts();
    const videoResourcesBtn = document.querySelector('[data-video-resources]');
    if (videoResourcesBtn) {
        videoResourcesBtn.addEventListener('click', () => {
            window.location.href = 'video-resources.html';
        });
    }
}); 