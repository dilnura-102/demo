
        // Simple interactivity for the demo
        document.addEventListener('DOMContentLoaded', function() {
            // Track button clicks
            const buttons = document.querySelectorAll('.button-link');
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    console.log('Tugma bosildi:', this.textContent.trim());
                    
                    // If it's the live app button, show loading
                    if (this.textContent.includes('Ilovani Ochish')) {
                        const originalText = this.innerHTML;
                        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Ochilmoqda...';
                        
                        setTimeout(() => {
                            this.innerHTML = originalText;
                        }, 2000);
                    }
                });
            });
            
            // (Removed automatic footer date display)
            
            // Add video play tracking
            const iframe = document.querySelector('iframe');
            iframe.addEventListener('load', function() {
                console.log('YouTube demo videosi yuklandi');
            });
        });
    