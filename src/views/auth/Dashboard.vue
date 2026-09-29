<script setup lang="ts">
import { useAuthStore } from '@/store/auth';

const auth = useAuthStore();
auth.getUser();
</script>
<template>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl text-slate-200 p-4">Dashboard</h1>
        <p v-if="auth.user.name.length!=0" class="text-slate-300">Bienvenue, <span class="font-bold text-lg">{{ auth.user?.name }}</span>!</p>
        <p class="text-slate-300">{{ auth.user?.email }}</p>
    </div>

    <button v-if="auth.user.name.length!=0" @click="auth.logout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Déconnexion
    </button>
</template>