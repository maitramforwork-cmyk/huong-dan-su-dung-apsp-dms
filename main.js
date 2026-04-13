document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Tabs Logic (Install Section)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and target content
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 3. Checklist Logic (Create Customer Section)
    const checkItems = document.querySelectorAll('.check-item');
    checkItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('done');
        });
    });

    // 4. Interactive Timeline Logic (Visit Section)
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineDetails = document.querySelectorAll('.timeline-details');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active classes
            timelineItems.forEach(i => i.classList.remove('active'));
            timelineDetails.forEach(d => d.classList.remove('active'));

            // Set current item active
            item.classList.add('active');
            
            // Show corresponding detail
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Optional: Add auto-reveal effect on scroll (Micro animation)
    const observerOptions = {
        threshold: 0.02,
        rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-panel').forEach(panel => {
        panel.style.opacity = "0";
        panel.style.transform = "translateY(50px)";
        panel.style.transition = "all 0.8s ease-out";
        observer.observe(panel);
    });

});
