<script setup lang="ts">
import axiosInstance from '@/lib/axios';
import { router } from '@/routes';
import type { User } from '@/types';
import { reactive, ref } from 'vue';

const user = ref<User | null>(null)

const getUser = async () => {
    try {
        const response = await axiosInstance.get('/user');
        user.value = response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur :', error);
    }
};

const logout = async () => {
    try {
        const response = await axiosInstance.post('/logout');
        user.value = null;
        router.push("/login");
    } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
    }
};

getUser();
</script>
<template>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl text-slate-200 p-4">Dashboard</h1>
        <p v-if="user.name.length!=0" class="text-slate-300">Bienvenue, <span class="font-bold text-lg">{{ user?.name }}</span>!</p>
        <p class="text-slate-300">{{ user?.email }}</p>
    </div>

    <button v-if="user.name.length!=0" @click="logout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Déconnexion
    </button>
</template>