<script setup>
    import { ref, onMounted } from 'vue'
    import { RouterLink } from 'vue-router'
    import logo from '@/assets/logo.svg'
    import loginbackground from'@/assets/loginbackground.png'
    import axious from 'axios'
    import router from '@/router'

    const name = ref('');
    const email = ref('');
    const password = ref('');
    const message = ref('');

    const register = async () => {
        axious.post('http://localhost:8081/register', {
            name: name.value,
            email: email.value,
            password: password.value
        }).then((response) => {
            message.value = response.data.message;
            email.value = '';
            password.value = '';
            router.push({ path: 'login', replace: true });
        }).catch((error) => {
            console.error("Error creating user", error);
            message.value = err.response?.data?.message || 'Registration failed';
        });
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
                        Please register your account and start the adventure
                    </p>
                    <p v-if="message" class="message">{{ message }}</p>
                    <form @submit.prevent="register" class="flex flex-col">
                        <label class="relative">
                            <input class="p-3 mt-8 border border-gray-400 rounded-lg hover:border-gray-600 peer focus:ring-0 focus:outline-violet-600 
                                focus:border-violet-600 w-full placeholder-transparent" 
                            type="text"
                            name="name"
                            v-model="name"
                            placeholder="Name">
                            <span class="absolute left-3 top-5 px-1 bg-white text-sm peer-focus:translate-y-0 peer-focus:text-sm peer-focus:bg-white duration-150 
                                peer-focus:text-indigo-600 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:bg-none peer-placeholder-shown:text-base
                                peer-placeholder-shown:text-gray-400 transition-all rounded">
                                Name
                            </span>
                        </label>
                        <label class="relative">
                            <input class="p-3 mt-4 border border-gray-400 rounded-lg hover:border-gray-600 peer focus:ring-0 focus:outline-violet-600 
                                focus:border-violet-600 w-full placeholder-transparent" 
                            type="email"
                            name="email"
                            v-model="email"
                            placeholder="Email">
                            <span class="absolute left-3 top-1 px-1 bg-white text-sm peer-focus:translate-y-0 peer-focus:text-sm peer-focus:bg-white duration-150 
                                peer-focus:text-indigo-600 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:bg-none peer-placeholder-shown:text-base
                                peer-placeholder-shown:text-gray-400 transition-all rounded">
                                E-mail
                            </span>
                        </label>
                        <label class="relative">
                            <input class="p-3 mt-4 border border-gray-400 rounded-lg hover:border-gray-600 peer focus:ring-0 focus:outline-violet-600 
                                focus:border-violet-600 w-full placeholder-transparent" 
                            type="password"
                            name="password"
                            v-model="password"
                            placeholder="Password">
                            <span class="absolute left-3 top-1 px-1 bg-white text-sm peer-focus:translate-y-0 peer-focus:text-sm peer-focus:bg-white duration-150 
                                peer-focus:text-indigo-600 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:bg-none peer-placeholder-shown:text-base
                                peer-placeholder-shown:text-gray-400 transition-all rounded">
                                Password
                            </span>
                        </label>
                        <label class="relative">
                            <input class="p-3 mt-4 border border-gray-400 rounded-lg hover:border-gray-600 peer focus:ring-0 focus:outline-violet-600 
                                focus:border-violet-600 w-full placeholder-transparent" 
                            type="password"
                            name="confirmpassword"
                            placeholder="Confirm Password">
                            <span class="absolute left-3 top-1 px-1 bg-white text-sm peer-focus:translate-y-0 peer-focus:text-sm peer-focus:bg-white duration-150 
                                peer-focus:text-indigo-600 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:bg-none peer-placeholder-shown:text-base
                                peer-placeholder-shown:text-gray-400 transition-all rounded">
                                Confirm Password
                            </span>
                        </label>
                        <div class="my-4 flex items-center mx-2">
                            <div class="flex items-center">
                                <input id="remember-me" type="checkbox"
                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-4 border-gray-300 rounded-2xl">
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900">I agree to 
                                    <p class="text-violet-600 inline-block">Privacy Policy and Terms</p>
                                </label>
                            </div>
                        </div>
                        <button class="bg-violet-600 rounded-xl text-white py-2">Register</button>
                    </form>
                    <div class="mt-4 flex justify-center">
                        <p class="text-gray-600 font-normal">
                            Already have an account?
                            <RouterLink class="text-indigo-600" to="/login">Sign-in Instead</RouterLink>
                        </p>
                    </div>


                    <!-- Divider -->
                    <div class="mt-10 grid grid-cols-3 items-center">
                        <hr class="border-gray-300">
                        <p class="text-center text-sm">or</p>
                        <hr class="border-gray-300">
                    </div>

                    <!-- Login Method-->
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





