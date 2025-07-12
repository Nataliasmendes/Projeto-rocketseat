
        function trocarCor() {
            const html = document.documentElement
            html.classList.toggle('light')
            /*html.classList.toggle('light')

            if(html.classList.contains('light')) {
                html.classList.remove('light')
            } else {
                html.classList.add('Light')
            }*/   
        
        //pega a imagem
        const img = document.querySelector("#profile img")

            if(html.classList.contains("light")) {
                img.setAttribute("src", "./assets/avatar-light.png")
                img.setAttribute("alt", "Foto de Natalia sorrindo, usando camiseta roxa.")
                //setAttribute é para mudar algum atributo
            } else {
                img.setAttribute("src", "./assets/avatar-dark.png")
                img.setAttribute("alt", "Foto de Natalia séria, usando blusa vinho.")
            }
        }