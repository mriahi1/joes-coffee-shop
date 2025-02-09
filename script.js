document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        lang: 'en',
        showNav: false,
        contactForm: {
            name: '',
            email: '',
            message: '',
            errors: {}
        },
        toggleLanguage() {
            this.lang = this.lang === 'en' ? 'fr' : 'en';
        },
        toggleNav() {
            this.showNav = !this.showNav;
        },
        validateForm() {
            this.contactForm.errors = {};
            
            if (!this.contactForm.name.trim()) {
                this.contactForm.errors.name 
                    = this.lang === 'en' ? 'Name is required.' : 'Le nom est requis.';
            }
            
            if (!this.contactForm.email.trim()) {
                this.contactForm.errors.email 
                    = this.lang === 'en' ? 'Email is required.' : 'L\'email est requis.';
            } else if (!/^\S+@\S+\.\S+$/.test(this.contactForm.email)) {
                this.contactForm.errors.email 
                    = this.lang === 'en' ? 'Email must be valid.' : 'L\'email doit être valide.';
            }

            if (!this.contactForm.message.trim()) {
                this.contactForm.errors.message 
                    = this.lang === 'en' ? 'Message is required.' : 'Le message est requis.';
            }

            if (Object.keys(this.contactForm.errors).length === 0) {
                // Here, you could integrate an API call or similar to submit the data
                console.log('Form is valid', this.contactForm);
                alert(this.lang === 'en' ? 'Form submitted successfully!' : 'Formulaire soumis avec succès!');
                this.contactForm.name = '';
                this.contactForm.email = '';
                this.contactForm.message = '';
            } else {
                console.error('Form errors', this.contactForm.errors);
            }
        }
    }));
});