<script setup>
    import { ref, onMounted } from 'vue'
    import { RouterLink } from 'vue-router'
    import logo from '@/assets/logo.svg'
    import loginbackground from'@/assets/loginbackground.png'
    import axious from 'axios'
    import router from '@/router'

    const email = ref('');
    const password = ref('');
    const message = ref('');

    const login = async () => {
        axious.post('http://localhost:8081/login', {
            email: email.value,
            password: password.value
        }).then((response) => {
            const token = response.data.token;
            sessionStorage.setItem('token', token);
            router.push({ path: 'dashboard', replace: true });
        }).catch((error) => {
            console.error("Login failed", error);
            message.value = err.response?.data?.message || 'Login failed';
        });
    }

    const showPassword = () => {
        const passwordInput = document.getElementById('show-password');
        const showEye = document.getElementById('show-eye');
        const hideEye = document.getElementById('hide-eye');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showEye.classList.remove('hidden');
            hideEye.classList.add('hidden');
        } else {
            passwordInput.type = 'password';
            showEye.classList.add('hidden');
            hideEye.classList.remove('hidden');
        }
    }
</script>

<template>
    <section class="relative flex min-h-screen overflow-hidden">
        <!-- Main Container -->
        <div class="flex w-full">
            <!-- Image Section -->
            <div class="w-2/3 hidden laptop:flex items-center justify-center relative z-0">
                <img 
                    class="h-[70vh] w-auto object-cover" 
                    :src="loginbackground" 
                    alt="Login Background" 
                />
            </div>

            <!-- Form Section -->
            <div class="w-full laptop:w-1/3 my-24 laptop:my-4 bg-gray-100 flex flex-col justify-center items-center relative z-10">
                <div class="px-8 max-w-md">
                    <h2 class="font-semibold text-2xl">Welcome to DuitTrack!</h2>
                    <p class="mt-4 text-gray-600 font-normal">
                        Please sign-in to your account and start the adventure
                    </p>
                    <p v-if="message">{{ message }}</p>
                    <form @submit.prevent="login" class="flex flex-col">
                        <label class="relative">
                            <input class="p-3 mt-8 border border-gray-400 rounded-lg hover:border-gray-600 peer focus:ring-0 focus:outline-none 
                                focus:border-violet-600 w-full placeholder-transparent"
                                type="text"
                                name="email"
                                placeholder="E-mail"
                                v-model="email">
                            <span class="absolute left-3 top-5 px-2 bg-white text-sm peer-focus:translate-y-0 peer-focus:text-sm peer-focus:bg-white duration-200 
                                peer-focus:text-indigo-600 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:bg-none peer-placeholder-shown:text-base
                                peer-placeholder-shown:text-gray-400 transition-all">
                                E-mail
                            </span>
                        </label>
                        
                        <label class="relative">
                            <input class="p-3 mt-5 border border-gray-400 rounded-lg w-full peer hover:border-gray-600 peer focus:ring-0 focus:outline-none 
                                focus:border-violet-600 placeholder-transparent"
                                id="show-password"
                                type="password"
                                name="password"
                                v-model="password"
                                placeholder="Password">
                            <span class="absolute left-3 top-2 px-2 bg-white text-sm peer-focus:translate-y-0 peer-focus:text-sm peer-focus:bg-white duration-200 
                                peer-focus:text-indigo-600 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:bg-none peer-placeholder-shown:text-base
                                peer-placeholder-shown:text-gray-400 transition-all">
                                Password
                            </span>
                            <button @click="showPassword" class="absolute top-[12px] right-3 translate-y-6">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" height="16" 
                                fill="gray"
                                id="show-eye" 
                                class="bi bi-eye hidden" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                fill="currentColor"
                                id="hide-eye"
                                class="bi bi-eye-slash"
                                viewBox="0 0 16 16">
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                                </svg>
                            </button>
                        </label>
                        <div class="my-4 flex justify-between items-center mx-2">
                            <div class="flex items-center">
                                <input id="remember-me" type="checkbox"
                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-4 border-gray-300 rounded-2xl">
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                            </div>
                            <div class="text-sm">
                                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <button class="bg-violet-600 rounded-xl text-white py-2">Login</button>
                    </form>
                    <div class="mt-4 flex justify-center">
                        <p class="text-gray-600 font-normal">
                            New on our platform?
                            <a class="text-indigo-600" href="/register">Create an account</a>
                        </p>
                    </div>
                    <!-- Divider -->
                    <div class="mt-10 grid grid-cols-3 items-center">
                        <hr class="border-gray-300">
                        <p class="text-center text-sm">or</p>
                        <hr class="border-gray-300">
                    </div>
                    <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm">
                        <img class="mr-3" src="https://pngimg.com/d/google_PNG19635.png" alt="Google" width="20" height="20">
                            Log in with Google
                    </button>

                    <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm">
                        <img class="mr-3" src="https://static.vecteezy.com/system/resources/previews/042/127/218/non_2x/round-circle-blue-facebook-logo-with-long-shadow-on-a-transparent-background-free-png.png" alt="Google" width="20" height="20">
                            Log in with Facebook
                    </button>
                </div>
            </div>
        </div>

        <!-- Logo Section -->
        <div class="absolute top-8 left-0 w-2/3 z-20">
            <div class="flex items-center space-x-2 ml-12">
                <img class="h-8 w-auto" :src="logo" alt="DuitTrack Logo" />
                <h2 class="inline-block font-bold text-2xl text-gray-800">DuitTrack</h2>
            </div>
        </div>

    </section>
</template>