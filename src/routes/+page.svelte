<script>
    import {Box, Typography} from "sx-utils-dnit";
    import {onMount} from "svelte";
    import axios from "axios";

    export let data
    let images = data.content;
    onMount(()=>{
        axios.get("http://localhost:3000/gpt")
    })

    function convertImagesToSrcArray(images) {
        return images.map(image => ({
            src: `data:image/jpeg;base64,${image.data}`,
            filename: image.filename
        }));
    }


</script>
<style>
    :global(body){
        background-color: #cbd8f1;
    }
</style>
<Typography variant={1} align="center">aiGram</Typography>
<Box sx={{flex:"col", flexAlign:"center", m:"0 auto"}}>
    {#await convertImagesToSrcArray(images)}
        <p>loading</p>
    {:then sources}
        {#each sources as imageSrc}
            <Box sx={{flex:"col", flexAlign:"center", m:"4rem auto", border:"6px solid #222222", p:".2rem"}}>
                <h2>{imageSrc.filename.split("-")[0]}</h2>
                <img src={imageSrc.src} alt={imageSrc.filename}/>
            </Box>
        {/each}
    {/await}
</Box>
