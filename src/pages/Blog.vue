<template>
    <Layout>
        <h1>Blog Posts</h1>
        <ul>
            <li v-for="post in $page.allPost.edges" v-bind:key="post">
                {{post.node.title}}
            </li>
        </ul>
    </Layout>
</template>

<page-query>
 query{
       allPost{
        edges{
        node{
            id
            title
            author
            thumpnail
            date
            content
            timeToRead
        }
        }
	} 
 }
 </page-query>