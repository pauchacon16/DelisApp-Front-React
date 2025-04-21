export type StatusNotification = "error" | "success" | null;
export type Usuario = {
    username: string,
    phone: string,
    email: string,
    password: string,
    confirmPassword: string
};