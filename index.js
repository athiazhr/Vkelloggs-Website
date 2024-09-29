 const form = document.querySelector('.contact-form form');

        document.querySelectorAll('.error').forEach(function (errorElement) {
            errorElement.style.display = 'none';
        });

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let isValid = true;

            const name = document.getElementById('name').value;
            if (name.trim() === '') {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('nameError').style.display = 'none';
            }

            const email = document.getElementById('email').value;
            if (email.trim() === '') {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('emailError').style.display = 'none';
            }

            const message = document.getElementById('message').value;
            if (message.trim() === '') {
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('messageError').style.display = 'none';
            }

            if (isValid) {
                console.log('Form is valid. Submitting...');
                // Uncomment the next line to proceed with form submission if you're handling it via JavaScript
                // form.submit();
            }
        });