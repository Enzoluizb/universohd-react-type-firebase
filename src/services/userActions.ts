import { createNewUser } from "./userService";
import { FirebaseError } from "firebase/app";

export type CreateUserResult = {
    success: boolean;
    emailError?: string;
    passwordError?: string;
};

export async function createUserWithValidation(
    email: string,
    password: string,
    name: string,
    role: "admin" | "especialista" | "mastermind" | "embaixadora"): Promise<CreateUserResult> {

    if (!email.includes("@")) {
        return {
            success: false,
            emailError: "Email inválido",
        };
    }

    if (password.length < 6) {
        return {
            success: false,
            passwordError: "A senha precisa ter pelo menos 6 caracteres",
        };
    }

    try {

        await createNewUser(email, password, name, role);
        return { success: true };

    } catch (error) {

        if (error instanceof FirebaseError) {

            const code = error.code;

            if (code === "auth/email-already-in-use") {
                return {
                    success: false,
                    emailError: "Este email já está cadastrado",
                };
            }

            if (code === "auth/invalid-email") {
                return {
                    success: false,
                    emailError: "Email inválido",
                };
            }

            if (code === "auth/weak-password") {
                return {
                    success: false,
                    passwordError: "A senha deve ter pelo menos 6 caracteres",
                };
            }
        }

        return {
            success: false,
            emailError: "Erro inesperado ao criar usuário",
        };
    }
}