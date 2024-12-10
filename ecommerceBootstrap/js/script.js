// Navegación
document.getElementById("nav").innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="img/logo.svg" alt="Logo de un planeta de color violeta con el nombre de la marca">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="products.html">Productos</a>
                    </li>
                </ul>
                <div class="d-flex nav-responsive gap-2">
                    <button class="btn" id="mode-toggle" class="mode-toggle">Modo Oscuro</button>
                    <a class="nav-link active" href="shoppingTrolley.html">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                    <a class="nav-link active" href="login.html">
                        <i class="fa-solid fa-user"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
`;

// Modo claro/oscuro
const toggleMode = document.getElementById("mode-toggle");

toggleMode.addEventListener("click", () => {
    toggleMode.textContent = toggleMode.textContent === "Modo Oscuro" ? "Modo Claro" : "Modo Oscuro";
    document.body.classList.toggle("dark-mode");
});

// Footer
document.getElementById("footer").innerHTML = `
    <footer>
        <div class="container-fluid">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Instagram</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Facebook</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Dirección</a>
                </li>
            </ul>
        </div>
    </footer>
`;

const loginForm = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const signupForm = document.getElementById("signup");
const nameInputSignup = document.getElementById("name");
const emailInputSignUp = document.getElementById("email-signup");
const passwordInputSignUp = document.getElementById("password-signup");
const repeatPassword = document.getElementById("repeat-password");
const checkbox = document.getElementById("checkbox");
const nameErrorSignUp = document.getElementById("nameError");
const emailErrorSignUp = document.getElementById("emailErrorSignup");
const passwordErrorSignUp = document.getElementById("passwordErrorSignup");
const repeatErrorSignUp = document.getElementById("repeatErrorSignup");
const conditionsErrorSignUp = document.getElementById("conditionsErrorSignup");

// Validación de formulario Login
if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let esValido = true;

        if (emailInput.value === "") {
            emailError.textContent = "Ingrese su email.";
            emailError.style.display = "block";
            esValido = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            emailError.textContent = "Ingrese un email válido.";
            emailError.style.display = "block";
            esValido = false;
        } else {
            emailError.style.display = "none";
        }

        if (passwordInput.value === "") {
            passwordError.textContent = "Ingrese su contraseña.";
            passwordError.style.display = "block";
            esValido = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = "La contraseña debe tener más de 6 caracteres.";
            passwordError.style.display = "block";
            esValido = false;
        } else if (!/[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]+/.test(passwordInput.value)) {
            passwordError.textContent = "La contraseña debe tener un caracter especial.";
            passwordError.style.display = "block";
            esValido = false;
        } else {
            passwordError.style.display = "none";
        }

        if (esValido) {
            alert("Formulario enviado correctamente.");
            loginForm.reset();
        }
    })
}

// Validación de formulario Sign Up
if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let esValido = true;

        if (nameInputSignup.value === "") {
            nameErrorSignUp.textContent = "Ingrese su nombre.";
            nameErrorSignUp.style.display = "block";
            esValido = false;
        } else {
            nameErrorSignUp.style.display = "none";
        }

        if (emailInputSignUp.value === "") {
            emailErrorSignUp.textContent = "Ingrese su email.";
            emailErrorSignUp.style.display = "block";
            esValido = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInputSignUp.value)) {
            emailErrorSignUp.textContent = "Ingrese un email valido.";
            emailErrorSignUp.style.display = "block";
            esValido = false;
        } else {
            emailErrorSignUp.style.display = "none";
        }

        if (passwordInputSignUp.value === "") {
            passwordErrorSignUp.textContent = "Ingrese una contraseña.";
            passwordErrorSignUp.style.display = "block";
            esValido = false;
        } else if (passwordInputSignUp.value.length < 6) {
            passwordErrorSignUp.textContent = "La contraseña debe tener minimo 6 caracteres.";
            passwordErrorSignUp.style.display = "block";
            esValido = false;
        } else if (!/[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]+/.test(passwordInputSignUp.value)) {
            passwordErrorSignUp.textContent = "La contraseña debe contener un caracter especial.";
            passwordErrorSignUp.style.display = "block";
            esValido = false;
        } else {
            passwordErrorSignUp.style.display = "none";
        }

        if (repeatPassword.value === "") {
            repeatErrorSignUp.textContent = "Ingrese nuevamente la contraseña.";
            repeatErrorSignUp.style.display = "block";
            esValido = false;
        } else if (repeatPassword.value !== passwordInputSignUp.value) {
            repeatErrorSignUp.textContent = "Las contraseñas no coinciden.";
            repeatErrorSignUp.style.display = "block";
            esValido = false;
        } else {
            repeatErrorSignUp.style.display = "none";
        }

        if (!checkbox.checked) {
            conditionsErrorSignUp.textContent = "Debe aceptar los terminos y condiciones."
            conditionsErrorSignUp.style.display = "block";
            esValido = false;
        } else {
            conditionsErrorSignUp.style.display = "none";
        }

        if (esValido) {
            alert("Formulario enviado correctamente.");
            signupForm.reset();
        }
    })

    // Desabilitar botón
    const btnSignUp = document.getElementById("btn-signup");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            btnSignUp.classList.remove("disabled");
            btnSignUp.classList.add("active");
            btnSignUp.removeAttribute("disabled");
        } else {
            btnSignUp.classList.add("disabled");
            btnSignUp.classList.remove("active");
            btnSignUp.setAttribute("disabled", true);
        }
    });
}

// Mostrar productos en Sección Productos
let products = [];

fetch("productos.json")
    .then(res => res.json())
    .then(data => {
        products = data;
        viewProducts(products);
    })
    .catch(error => console.log(error));

const viewProducts = (products) => {
    const container = document.getElementById("productos");
    container.innerHTML = "";
    products.forEach(product => {
        const col = document.createElement("div");
        col.className = "col";
        col.innerHTML = `
            <div class="card" id=${product.id}>
                <img src=${product.img} class="card-img-top img-products" alt=${product.title}>
                <div class="card-body d-flex flex-column justify-content-center">
                    <h5 class="card-title">${product.title}</h5>
                    <h5 class="card-title">$${product.price}</h5>
                    <button class="btn btn-add-trolley" onClick=(addTrolley(${product.id}))>Agregar al carrito</button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Filtrar los productos por la categoría seleccionada
function filterCategory(category) {
    const container = document.getElementById('productos-filtrados');
    const titleCategory = document.getElementById('title-category');
    const filteredProducts = products.filter(product => product.category === category);

    container.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = `
            <div class="col">
                <div class="card">
                    <img src="${product.img}" class="card-img-top img-category" alt="${product.title}">
                    <div class="card-body d-flex flex-column justify-content-center">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="text-center">$${product.price}</p>
                        <button class="btn btn-add-trolley" onClick=(addTrolley(${product.id}))>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
        titleCategory.innerHTML = product.categoryName;
    });

    if (filteredProducts.length === 0) {
        container.innerHTML = `<p>No hay productos disponibles en esta categoría.</p>`;
    }
}


let trolley = JSON.parse(localStorage.getItem('trolley')) || [];

function addTrolley(id) {    
    const product = products.find(product => product.id === id);
    if (product) {
        trolley.push(product);
        localStorage.setItem('trolley', JSON.stringify(trolley));
    }

    renderTrolley();
}

function renderTrolley() {
    const trolleyContainer = document.getElementById('trolley-container');
    const totalPriceContainer = document.getElementById('total-price');

    trolleyContainer.innerHTML = '';

    if (trolley.length === 0) {
        trolleyContainer.innerHTML = '<p>El carrito está vacío.</p>';
        totalPriceContainer.textContent = '$0';
    } else {
        let totalPrice = 0;

        trolley.forEach(product => {
            const productCard = `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${product.img}" class="img-fluid rounded-start" alt="${product.title}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <h5 class="card-title">$${product.price}</h5>
                                <div class="count-product">
                                    <p>Cantidad:</p>
                                    <button class="plus" onclick="changeQuantity('${product.id}', 1)">+</button>
                                    <p>${product.quantity || 1}</p> <!-- Mostrar la cantidad actual -->
                                    <button class="less" onclick="changeQuantity('${product.id}', -1)">-</button>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <i class="fa-solid fa-trash" onclick="removeFromTrolley('${product.id}')"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            trolleyContainer.innerHTML += productCard;
            totalPrice += product.price * (product.quantity || 1);
        });

        document.getElementById('total-price').textContent = `$${totalPrice}`;
    }
}


function changeQuantity(productId, change) {
    const productIndex = trolley.findIndex(product => product.id === parseInt(productId));

    if (productIndex !== -1) {
        const product = trolley[productIndex];

        product.quantity = (product.quantity || 1) + change;

        if (product.quantity < 1) {
            product.quantity = 1;
        }
        
        localStorage.setItem('trolley', JSON.stringify(trolley));

        renderTrolley();
    }
}

function buyItems() {
    if (trolley.length > 0) {
        localStorage.removeItem('trolley');
        alert('Compra exitosa!');
        renderTrolley();
    } else {
        alert('El carrito está vacío.');
    }
}

function removeFromTrolley(productId) {
    trolley = trolley.filter(product => product.id !== parseInt(productId));

    localStorage.setItem('trolley', JSON.stringify(trolley));

    renderTrolley();
}

renderTrolley();