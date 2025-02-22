import React from 'react';

export default function Form3() {
    return (
        <div className="form-container">
            <h2>Chequeo de Higiene y Limpieza</h2>
            <form>
                <label>Área Inspeccionada</label>
                <input type="text" name="inspectionArea" required />

                <label>Fecha del Chequeo</label>
                <input type="date" name="checkDate" required />

                <label>¿El área está limpia y libre de obstrucciones?</label>
                <select name="cleanlinessStatus">
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                </select>

                <button type="submit">Enviar Chequeo</button>
            </form>
        </div>
    );
}
