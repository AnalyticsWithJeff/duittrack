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

            <!-- Form Section -->
            <div class="w-full laptop:w-1/3 my-24 laptop:my-4 bg-gray-100 flex flex-col justify-center items-center relative z-10">
                <div class="px-8 max-w-md">
                    <h2 class="font-semibold text-2xl">Welcome to DuitTrack!</h2>
                    <p class="mt-4 text-gray-600 font-normal">
                        Please register your account and start the adventure
                    </p>

                    <form action="" class="flex flex-col gap-4">
                        <input class="p-3 mt-8 border border-gray-400 rounded-lg" 
                        type="text"
                        name="email"
                        placeholder="Email">
                        <input class="p-3 border border-gray-400 rounded-lg"
                        type="password"
                        name="password"
                        placeholder="Password">
                        <input class="p-3 border border-gray-400 rounded-lg"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password">
                    <div class="my-4 flex items-center mx-2">
                        <div class="flex items-center">
                            <input id="remember-me" type="checkbox" v-model="rememberMe" 
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
                            <a class="text-indigo-600" href="/login">Sign-in Instead</a>
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
                    </button>                </div>
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





