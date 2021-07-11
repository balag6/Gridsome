<template>
    <Layout>
        <h1 v-html="$page.post.title"/>
        <h3>Written by {{ $page.post.author}} on {{$page.post.date}}</h3>
        <g-image :src="$page.post.thumpnail" style="width: 70vw"/>
        <p v-html="$page.post.content" />
    </Layout>
</template>

<page-query>
query Post( $path: String){
    post: post (path: $path){
        id
        title
        author
        date
        content
        thumpnail
        timeToRead
    }
}
</page-query>