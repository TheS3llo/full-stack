document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { email, password };

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Login successful:', result);
            // Aquí podrías redirigir al usuario a la página principal o guardar un token de sesión
        } else {
            const errorMessage = await response.text();
            alert('Error during login: ' + errorMessage);
            console.error('Error during login:', errorMessage);
        }
    } catch (error) {
        alert('Error: ' + error.message);
        console.error('Error:', error);
    }
});

document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = { name, email, password };

    try {
        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Registration successful:', result);
            // Aquí podrías redirigir al usuario a la página de login
        } else {
            const errorMessage = await response.text();
            alert('Error during registration: ' + errorMessage);
            console.error('Error during registration:', errorMessage);
        }
    } catch (error) {
        alert('Error: ' + error.message);
        console.error('Error:', error);
    }
});

