let posts = [ ]

function formulario(){
    const post = {
        titulo: document.getElementById("titulo-post").value,
        autor : document.getElementById("autor-post").value,
        conteudo: document.getElementById("conteudo-post").value
    }
    posts.push(post.titulo)
    posts.push(post.autor)
    posts.push(post.conteudo)

    let tituloPost
    let autorPost
    let conteudoPost

    for(let i = 0; i < posts.length; i++){
        tituloPost = posts[i]
        i++
        autorPost = posts[i]
        i++
        conteudoPost = posts[i]
    }

    console.log(posts)

    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""

    document.getElementById("container-de-posts").innerHTML += 
    `<p>${tituloPost}<br> ${autorPost} <br> ${conteudoPost} <br> <hr></p>`
}