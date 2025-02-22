
import React from 'react';

export default function Form2() {
    return (
        <div className="form-container">
            <h2>Chequeo de Señalización de Seguridad</h2>
            <form>
                <label>Ubicación</label>
                <input type="text" name="location" required />

                <label>Tipo de Señalización</label>
                <input type="text" name="signType" required />

                <label>Fecha del Chequeo</label>
                <input type="date" name="checkDate" required />

                <label>¿La señalización está visible y en buen estado?</label>
                <select name="signStatus">
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                </select>

                <button type="submit">Enviar Chequeo</button>
            </form>
        </div>
    );
}
