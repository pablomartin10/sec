import React from 'react';
export default function Form2() {
    return (
        <div className="form-container">
            <h2>Chequeo de EPP (Equipo de Protección Personal)</h2>
            <form>
                <label>Nombre del Trabajador</label>
                <input type="text" name="workerName" required />

                <label>Área de Trabajo</label>
                <input type="text" name="workArea" required />

                <label>Fecha del Chequeo</label>
                <input type="date" name="checkDate" required />

                <label>¿Todo el EPP está en condiciones adecuadas?</label>
                <select name="eppStatus">
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                </select>

                <button type="submit">Enviar Chequeo</button>
            </form>
        </div>
    );
}