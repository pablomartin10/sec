import React from 'react';
export default function Form1() {
    return (
        <div className="form-container">
            <h2>Reporte de Incidente de Seguridad</h2>
            <form>
                <label>Nombre del Reportante</label>
                <input type="text" name="reporterName" required />

                <label>Fecha del Incidente</label>
                <input type="date" name="incidentDate" required />

                <label>Descripción del Incidente</label>
                <textarea name="description" rows="4" required></textarea>

                <label>Subir Evidencia (PDF, Imágenes)</label>
                <input type="file" name="evidence" accept=".pdf,.jpg,.png" />

                <button type="submit">Enviar Reporte</button>
            </form>
        </div>
    );
}