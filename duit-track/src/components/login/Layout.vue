<script setup>
    import logo from '@/assets/logo.svg'
    import login from'@/assets/login.png'
</script>

<template>
    <section class="relative flex min-h-screen overflow-hidden">
        <!-- Main Container -->
        <div class="flex w-full">
            <!-- Image Section -->
            <div class="w-2/3 hidden laptop:flex items-center justify-center relative z-0">
                <img 
                    class="h-[70vh] w-auto object-cover" 
                    :src="login" 
                    alt="Login Background" 
                />
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