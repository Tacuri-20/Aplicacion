export class AboutSection {
    render() {
        return `
            <div class="container">
                <h1>Acerca de Nosotros</h1>
                <p>Somos un grupo de cinco personas estudiantes de la Uiversidad Nacional de Loja<br> dedicadas a desarrollar soluciones innovadoras.
                <br>Nuestros nombres son:</p>
                <div class="team">
                    <div class="team-member">
                        <img src="img/Tacuri.jpeg" alt="Persona 1">
                        <p>Hector</p>
                    </div>
                    <div class="team-member">
                        <img src="img/Orozco.jpeg" alt="Persona 2">
                        <p>Marco</p>
                    </div>
                    <div class="team-member">
                        <img src="img/Mathias.png" alt="Persona 3">
                        <p>Mathias</p>
                    </div>
                    <div class="team-member">
                        <img src="img/David.jpeg" alt="Persona 4">
                        <p>David</p>
                    </div>
                    <div class="team-member">
                        <img src="img/Tayron.png" alt="Persona 5">
                        <p>Persona 5</p>
                    </div>
                </div>
            </div>
        `;
    }
}
