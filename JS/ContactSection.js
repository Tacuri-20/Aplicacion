export class ContactSection {
    render() {
        return `
            <div class="container contact-section">
                <div>
                    <h1 style="text-align: center;">Póngase en contacto</h1>
                    <p>
                        Por favor llene este formulario en esta sección para contactar conmigo.<br>
                        <strong>Dirección:</strong> Loja Ecuador.<br>
                        <strong>Correo Electrónico:</strong> hector.tacuri@unl.edu.ec<br>
                        <strong>Teléfono:</strong> 0990795876
                    </p>
                </div>
                <form>
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Mensaje</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        `;
    }
}
