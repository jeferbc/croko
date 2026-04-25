import { getImageNames } from '@/data/designImages';

const FIXED_PRICE_LABEL = '$190.000';

const BabyNameStep = ({
  babyName,
  onNameChange,
  email,
  onEmailChange,
  gender,
  selectedImages,
  isPaying,
  paymentError,
}) => {
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
          disabled={isPaying}
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
          disabled={isPaying}
        />
      </div>

      <div className="selections-summary">
        <h6>Resumen de tu selección</h6>
        <table className="summary-table">
          <tbody>
            <tr>
              <th scope="row">Género</th>
              <td>{gender === 'boy' ? 'Niño' : 'Niña'}</td>
            </tr>
            <tr>
              <th scope="row">Diseños</th>
              <td>{imageNames.join(', ')}</td>
            </tr>
            <tr className="summary-total-row">
              <th scope="row">Total a pagar</th>
              <td className="total-value">{FIXED_PRICE_LABEL}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {isPaying && (
        <div className="payment-status" role="status" aria-live="polite">
          Abriendo pasarela de pago...
        </div>
      )}

      {paymentError && (
        <div className="payment-error" role="alert">
          {paymentError}
        </div>
      )}
    </div>
  );
};

export default BabyNameStep;
