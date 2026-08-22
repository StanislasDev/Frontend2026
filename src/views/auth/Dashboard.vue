<script setup lang="ts">
import axiosInstance from '@/lib/axios';

const user = async () => {
    try {
        const response = await axiosInstance.get('/user');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur :', error);
    }
};

const logout = async () => {
    try {
        const response = await axiosInstance.post('/logout');
        console.log(response.data);
        
    } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
    }
};

user();
</script>
<template>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl text-slate-200 p-4">Dashboard</h1>
    </div>
</template>