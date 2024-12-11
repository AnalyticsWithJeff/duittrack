<script setup>
    import logo from '@/assets/logo.svg'
</script>

<template>
    <div class="mt-4 mx-10">
        <div class="absolute inset-y-8 inset-x-9 space-x-2">
            <img class="h-8 w-auto" :src="logo" alt="DuitTrack" />
            <h2 class="inline-block">DuitTrack</h2>
        </div>
        <div class="flex items-center justify-center min-h-svh">
            <div class="my-auto">
                <h2 class="py-2">Welcome to DuitTrack!</h2>
                <p>Please sign-in to your account and start the adventure</p>
                <form @submit.prevent="handleLogin">
                    <div class="my-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                        <input type="email" id="email" v-model="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <div class="my-4">
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" v-model="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <div class="my-4 flex justify-between items-center">
                        <div class="flex items-center">
                            <input id="remember-me" type="checkbox" v-model="rememberMe" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>
                        <div class="text-sm">
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                    </div>
                    <div class="my-4">
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Login
                    </button>
                    </div>
                </form>
                <p>
                    New on our platform?
                    <a class="text-indigo-600" href="/">Create an account</a>
                </p>
            </div>
        </div>
    </div>
</template>
