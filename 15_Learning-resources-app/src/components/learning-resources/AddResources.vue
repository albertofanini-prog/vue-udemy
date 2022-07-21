<template>
    <div>
        <form>
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url">
            </div>
            <div class="form-control">
                <base-button type="submit">Add it</base-button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    data(){
    }
}
</script>

<style scoped>
    div{
        border: 5px solid red;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form{
        border: 3px solid green;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .form-control{
        border: 2px solid yellow;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    label{
        border: 1px solid blue;
        width: 48%;
    }

    input, textarea{
        border: 1px solid orange;
        width: 48%;
    }
</style>