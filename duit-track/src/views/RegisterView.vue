<script setup>
    import logo from '@/assets/logo.svg'
    import login from'@/assets/login.png'
</script>

<template>
    <div class="absolute inset-y-8 inset-x-12 max-h-fit">
        <div class="flex space-x-2">
            <img class="h-8 w-auto" :src="logo" alt="DuitTrack" />
            <h2 class="inline-block font-bold text-2xl">DuitTrack</h2>
        </div>
    </div>
    <section class="flex items-center justify-center min-h-screen p-5">

        <!-- Login Container -->
        <div class="desktop:mt-10 flex max-w-screen items-center">

            <!-- Image -->
            <div class="laptop:block hidden w-2/3 py-10 pl-10">
                <img class="max-h-screen" :src="login" alt="Login" />
            </div>

            <!-- Form -->
            <div class="laptop:w-1/3 px-8">
                <h2 class="font-semibold text-2xl">Welcome to DuitTrack!</h2>
                <p class="mt-4 text-gray-600 font-normal">Please register your account and start the adventure</p>

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
                                <p class="text-violet-600 inline-block">privacy policy and terms</p>
                            </label>
                        </div>
                    </div>
                    <button class="bg-violet-600 rounded-xl text-white py-2">Login</button>
                </form>
                <div class="mt-4 flex justify-center">
                    <p class="text-gray-600 font-normal">
                        Already have an account?
                        <a class="text-indigo-600" href="/">Sign in instead</a>
                    </p>
                </div>
                <!-- Divider -->
                <div class="mt-10 grid grid-cols-3 items-center">
                    <hr class="border-gray-300">
                    <p class="text-center text-sm">or</p>
                    <hr class="border-gray-300">
                </div>
                <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm">
                    <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" viewBox="0 0 48 48">
                        <path fill="#fbc02d" 
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	
                            s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	
                            s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
                        </path>
                        <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	
                            l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                        </path>
                        <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	
                            c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" 
                            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	
                            c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                        </path>
                    </svg>
                    Log in with Google
                </button>
            </div>
        </div>
    </section>
</template>
