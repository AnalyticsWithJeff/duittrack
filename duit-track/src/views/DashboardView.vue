<script setup>
    import router from '@/router';

    const logout = () => {
        sessionStorage.removeItem('token');
        router.push('/login');
    };
</script>

<template>
    <h1>Dashboard</h1>
    <button @click="logout">Logout</button>
</template>