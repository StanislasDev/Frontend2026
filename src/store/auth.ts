import axiosInstance from "@/lib/axios";
import { router } from "@/routes";
import type { User, RegisterForm, LoginForm } from "@/types";
import { AxiosError } from "axios";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const user = ref<User | null>(null);
    const isLoggedIn = ref<boolean>(false);

    const errors = reactive({
        name: [],
        email: [],
        password: [],
    });

    const register = async (payload: RegisterForm) => {

        await axiosInstance.get('/sanctum/csrf-cookie', {
            baseURL: "http://localhost:8000"
        });

        // Effacer les erreurs précédentes
        errors.name = [];
        errors.email = [];
        errors.password = [];

        try {
            await axiosInstance.post('/register', payload);
            router.push("/dashboard");
        } catch (e) {
            // pointer les erreurs d'inscription avec AxiosError
            if (e instanceof AxiosError && e.response?.status === 422) {
                errors.name = e.response.data.errors.name;
                errors.email = e.response.data.errors.email;
                errors.password = e.response.data.errors.password;
            }
        }
    };

    const login = async (payload: LoginForm) => {

        await axiosInstance.get('/sanctum/csrf-cookie', {
            baseURL: "http://localhost:8000"
        });

        // Effacer les erreurs précédentes
        errors.email = [];
        errors.password = [];

        try {
            await axiosInstance.post('/login', payload);
            router.push("/dashboard");
        } catch (e) {
            // pointer les erreurs de la connexion avec AxiosError
            if (e instanceof AxiosError && e.response?.status === 422) {
                errors.email = e.response.data.errors.email;
                errors.password = e.response.data.errors.password;
            }
        }
    };

    const getUser = async () => {
        try {
            const response = await axiosInstance.get('/user');
            user.value = response.data;
            isLoggedIn.value = true;
        } catch (error) {
            console.error('Erreur lors de la récupération des informations utilisateur :', error);
        }
    };

    const logout = async () => {
        try {
            const response = await axiosInstance.post('/logout');
            user.value = null;
            isLoggedIn.value = false;
            router.push("/login");
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error);
        }
    };

    return {
        user,
        isLoggedIn,
        errors,
        register,
        login,
        getUser,
        logout
    }
})