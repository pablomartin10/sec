
import React from 'react';

export default function Form4() {
    return (
        <div className="form-container">
            <h2>Chequeo de Almacenamiento de Materiales</h2>
            <form>
                <label>Área de Almacenamiento</label>
                <input type="text" name="storageArea" required />

                <label>Materiales Almacenados</label>
                <input type="text" name="storedMaterials" required />

                <label>Fecha del Chequeo</label>
                <input type="date" name="checkDate" required />

                <label>¿Los materiales están almacenados correctamente?</label>
                <select name="storageStatus">
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                </select>

                <button type="submit">Enviar Chequeo</button>
            </form>
        </div>
    );
}
