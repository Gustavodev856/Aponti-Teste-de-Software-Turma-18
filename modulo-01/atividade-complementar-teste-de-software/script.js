let users = [
  {username: "admin", password: "12345678"},
  {username: "psicologa", password: "senha12345"} // usuário da psicóloga
];
let attempts = 0;
let blocked = false;

const toggleBtn = document.getElementById("toggleBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const overlayTitle = document.getElementById("overlayTitle");
const loginMsg = document.getElementById("loginMsg");
const registerMsg = document.getElementById("registerMsg");
const restrictedArea = document.getElementById("restrictedArea");
const logoutBtn = document.getElementById("logoutBtn");

// Elemento do modal de token
const tokenModal = document.createElement("div");
tokenModal.style.position = "fixed";
tokenModal.style.top = "0";
tokenModal.style.left = "0";
tokenModal.style.width = "100%";
tokenModal.style.height = "100%";
tokenModal.style.background = "rgba(0,0,0,0.6)";
tokenModal.style.display = "none";
tokenModal.style.justifyContent = "center";
tokenModal.style.alignItems = "center";
tokenModal.innerHTML = `
  <div style="background:#fff;padding:30px;border-radius:12px;text-align:center;box-shadow:0 6px 16px rgba(0,0,0,0.3)">
    <h3>Verificação de Token</h3>
    <input type="text" id="tokenInput" placeholder="Digite o token" style="padding:10px;width:80%;margin:10px 0;border:1px solid #ccc;border-radius:6px">
    <button id="verifyTokenBtn" style="padding:10px 20px;background:#2563eb;color:#fff;border:none;border-radius:6px;cursor:pointer">Verificar</button>
    <p id="tokenMsg"></p>
  </div>
`;
document.body.appendChild(tokenModal);

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.textContent === "Cadastrar") {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    toggleBtn.textContent = "Login";
    overlayTitle.textContent = "Crie sua conta";
  } else {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    toggleBtn.textContent = "Cadastrar";
    overlayTitle.textContent = "Bem-vindo!";
  }
});

function register() {
  const newName = document.getElementById("registerName").value.trim();
  const newEmail = document.getElementById("registerEmail").value.trim();
  const newPhone = document.getElementById("registerPhone").value.trim();
  const newCrp = document.getElementById("registerCrp").value.trim();
  const newSpecialty = document.getElementById("registerSpecialty").value.trim();
  const newUser = document.getElementById("registerUser").value.trim();
  const newPass = document.getElementById("registerPass").value.trim();

  if (newPass.length < 8) {
    registerMsg.textContent = "A senha deve ter no mínimo 8 caracteres.";
    registerMsg.style.color = "#dc2626";
    return;
  }

  if (users.find(u => u.username === newUser)) {
    registerMsg.textContent = "Usuário já existe!";
    registerMsg.style.color = "#dc2626";
  } else {
    users.push({username: newUser, password: newPass, name: newName, email: newEmail, phone: newPhone, crp: newCrp, specialty: newSpecialty});
    registerMsg.textContent = "Cadastro realizado com sucesso!";
    registerMsg.style.color = "#16a34a";
    console.log(`[AUDITORIA] Novo cadastro: ${newName}, ${newEmail}, ${newPhone}, CRP: ${newCrp}, ${newSpecialty}`);
  }
}

function login() {
  const start = performance.now();
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  if (blocked) {
    loginMsg.textContent = "Usuário bloqueado. Tente novamente em 15 minutos.";
    return;
  }

  const foundUser = users.find(u => u.username === user && u.password === pass);

  if (foundUser) {
    const end = performance.now();
    const responseTime = (end - start) / 1000;
    if (responseTime > 2) {
      loginMsg.textContent = "Tempo de resposta excedeu 2 segundos.";
      return;
    }

    // Se for a psicóloga, pede token
    if (foundUser.username === "psicologa") {
      tokenModal.style.display = "flex";
      document.getElementById("verifyTokenBtn").onclick = () => {
        const token = document.getElementById("tokenInput").value.trim();
        const tokenMsg = document.getElementById("tokenMsg");
        if (token === "123456") { // token correto
          tokenMsg.textContent = "Token válido!";
          tokenMsg.style.color = "#16a34a";
          tokenModal.style.display = "none";
          restrictedArea.style.display = "block";
          logoutBtn.classList.remove("hidden");
          loginMsg.textContent = "Login realizado com sucesso!";
          loginMsg.style.color = "#16a34a";
          console.log("[AUDITORIA] Login da psicóloga com token válido.");
        } else {
          tokenMsg.textContent = "Token inválido. Usuário bloqueado!";
          tokenMsg.style.color = "#dc2626";
          blocked = true;
          setTimeout(() => {
            blocked = false;
            attempts = 0;
            console.log("[AUDITORIA] Usuário desbloqueado após 15 minutos.");
          }, 15 * 60 * 1000);
        }
      };
    } else {
      loginMsg.textContent = "Login realizado com sucesso!";
      loginMsg.style.color = "#16a34a";
      restrictedArea.style.display = "block";
      logoutBtn.classList.remove("hidden");
      console.log(`[AUDITORIA] Login bem-sucedido para usuário: ${user}`);
      attempts = 0;
    }
  } else {
    attempts++;
    loginMsg.textContent = "Credenciais inválidas!";
    loginMsg.style.color = "#dc2626";
    console.log(`[AUDITORIA] Tentativa inválida nº ${attempts} para usuário: ${user}`);
    if (attempts >= 3) {
      blocked = true;
      loginMsg.textContent = "Usuário bloqueado por 15 minutos.";
      console.log(`[AUDITORIA] Usuário ${user} bloqueado por 15 minutos.`);
      setTimeout(() => {
        blocked = false;
        attempts = 0;
        console.log(`[AUDITORIA] Usuário ${user} desbloqueado após 15 minutos.`);
      }, 15 * 60 * 1000);
    }
  }
}

function logout() {
  restrictedArea.style.display = "none";
  logoutBtn.classList.add("hidden");
  loginMsg.textContent = "Logout realizado.";
  loginMsg.style.color = "#1e40af";
  console.log("[AUDITORIA] Logout realizado.");
}
