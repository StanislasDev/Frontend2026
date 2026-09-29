<script setup lang="ts">
import { reactive } from 'vue';
import type { RegisterForm } from '@/types';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const form = reactive<RegisterForm>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const errors = authStore.errors;
const { register } = authStore;
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl text-slate-200 p-4">Inscription</h1>

        <!-- Formire d'inscription -->
        <form @submit.prevent="register(form)" class="max-w-md w-full mx-auto bg-slate-800 p-6 rounded-lg shadow-md box-content">
            <div class="relative z-0 w-full mb-5 group">
                <input type="name" v-model="form.name" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
                <label for="floating_name" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
                <template v-if="errors.name?.length">
                    <span v-for="error in errors.name" :key="error" class="text-red-500 text-sm mt-1">{{ error }}</span>
                </template>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="email" v-model="form.email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
                <label for="floating_email" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email address</label>
                <template v-if="errors.email?.length">
                    <span v-for="error in errors.email" :key="error" class="text-red-500 text-sm mt-1">{{ error }}</span>
                </template>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="password" v-model="form.password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
                <label for="floating_password" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                <template v-if="errors.password?.length">
                    <span v-for="error in errors.password" :key="error" class="text-red-500 text-sm mt-1">{{ error }}</span>
                </template>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="password" v-model="form.password_confirmation" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
                <label for="floating_repeat_password" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm password</label>
            </div>
            <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Inscription</button>
        </form>
    </div>
    
</template>