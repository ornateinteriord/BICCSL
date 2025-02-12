import { jwtDecode } from "jwt-decode";

class TokenService {
  static setToken(token: string): void {
    
    localStorage.setItem("token", token);
  }

  static getToken(): string | null {
    return localStorage.getItem("token");
  }

  static decodeToken(): { id: string; role: string } | null {
    const token = this.getToken();
    if (!token) return null;

    try {
        const decoded = jwtDecode<{ id: string; role: string }>(token);
      
        return decoded;
    } catch (error) {
      console.error("Invalid token", error);
      return null;
    }
  }

  static getRole(): string | null {
    return this.decodeToken()?.role || null;
  }

  static getUserId(): string | null {
    return this.decodeToken()?.id || null;
  }

  static removeToken(): void {
    localStorage.removeItem("token");
  }
}

export default TokenService;
