// Função para exibir ou ocultar o conteúdo do post
function toggleContent(postId) {
    const content = document.getElementById('post-content-' + postId);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
