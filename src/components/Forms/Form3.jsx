import React from 'react';

export default function Form1() {
    return (
        <div className="form-container">
            <h2>Chequeo de Seguridad en Maquinaria</h2>
            <form>
                <label>Nombre del Trabajador</label>
                <input type="text" name="workerName" required />

                <label>Máquina Inspeccionada</label>
                <input type="text" name="machineName" required />

                <label>Fecha del Chequeo</label>
                <input type="date" name="checkDate" required />

                <label>¿La máquina está en condiciones adecuadas?</label>
                <select name="machineStatus">
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                </select>

                <button type="submit">Enviar Chequeo</button>
            </form>
        </div>
    );
}
