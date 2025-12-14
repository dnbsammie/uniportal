export function isAuthenticated(): boolean {
    return localStorage.getItem("logged") === "true";
}

export function login(username: string, password: string): boolean {
    if (username === "tcabrera@docente.edu" && password === "0000") {
        localStorage.setItem("logged", "true");
        return true;
    }
    return false;
}

export function logout() {
    localStorage.removeItem("logged");
}
