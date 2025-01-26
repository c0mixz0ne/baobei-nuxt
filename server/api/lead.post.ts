export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig()
    const body = await readBody(event)
    const token = runtimeConfig.public.apitoken
    
    try {
        const data = await $fetch(`https://baobei.s20.online/api/1/lead/create?token=${token}`, {
            method: "POST",
            body: body,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return data

    } catch (error) {
        console.log(error);
        return error;
    }

    return true;
})