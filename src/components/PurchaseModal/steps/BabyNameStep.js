import { getImageNames } from '@/data/designImages';

const BabyNameStep = ({ babyName, onNameChange, email, onEmailChange, gender, selectedImages }) => {
  const imageNames = getImageNames(selectedImages);

  return (
    <div className="baby-name-step">
      <div className="form-group">
        <label htmlFor="babyName" className="form-label">
          Nombre del bebé
        </label>
        <input
          type="text"
          id="babyName"
          className="form-control"
          value={babyName}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Ej: Sofía"
          maxLength={30}
          autoComplete="off"
        />
        <div className="char-count">{babyName.length}/30</div>
        <small className="form-text">
          Incluimos una plantilla personalizada con el nombre de tu bebé
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="tu@email.com"
          autoComplete="email"
        />
      </div>

      <div className="selections-summary">
        <h6>Resumen de tu selección</h6>
        <div className="summary-item">
          <span className="label">Género:</span>
          <span className="value">{gender === 'boy' ? 'Niño' : 'Niña'}</span>
        </div>
        <div className="summary-item">
          <span className="label">Diseños:</span>
          <span className="value">{imageNames.join(', ')}</span>
        </div>
        <div className="summary-total">
          <span className="label">Total a pagar:</span>
          <span className="total-value">$150.000</span>
        </div>
      </div>
    </div>
  );
};

export default BabyNameStep;
