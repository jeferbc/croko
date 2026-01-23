const BoyIcon = () => (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Face */}
    <circle cx="32" cy="36" r="22" fill="#FFDBB4"/>
    {/* Hair */}
    <path d="M15 30C15 22 22 14 32 14C42 14 49 22 49 30C49 26 45 20 32 20C19 20 15 26 15 30Z" fill="#5D4037"/>
    {/* Left eye */}
    <circle cx="24" cy="36" r="3" fill="#333"/>
    <circle cx="25" cy="35" r="1" fill="#fff"/>
    {/* Right eye */}
    <circle cx="40" cy="36" r="3" fill="#333"/>
    <circle cx="41" cy="35" r="1" fill="#fff"/>
    {/* Smile */}
    <path d="M26 44C26 44 29 48 32 48C35 48 38 44 38 44" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    {/* Cheeks */}
    <circle cx="18" cy="40" r="3" fill="#FFB6B6" opacity="0.5"/>
    <circle cx="46" cy="40" r="3" fill="#FFB6B6" opacity="0.5"/>
    {/* Blue bow/accessory for boy */}
    <circle cx="12" cy="24" r="6" fill="#4A90D9"/>
    <circle cx="52" cy="24" r="6" fill="#4A90D9"/>
  </svg>
);

const GirlIcon = () => (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Face */}
    <circle cx="32" cy="36" r="22" fill="#FFDBB4"/>
    {/* Hair with bangs */}
    <path d="M12 36C12 22 20 12 32 12C44 12 52 22 52 36C52 30 48 18 32 18C16 18 12 30 12 36Z" fill="#5D4037"/>
    <path d="M18 28C18 28 22 22 32 22C42 22 46 28 46 28C46 28 42 26 32 26C22 26 18 28 18 28Z" fill="#5D4037"/>
    {/* Left eye */}
    <circle cx="24" cy="36" r="3" fill="#333"/>
    <circle cx="25" cy="35" r="1" fill="#fff"/>
    {/* Right eye */}
    <circle cx="40" cy="36" r="3" fill="#333"/>
    <circle cx="41" cy="35" r="1" fill="#fff"/>
    {/* Eyelashes */}
    <path d="M21 33L19 31M24 32L24 29M27 33L29 31" stroke="#333" strokeWidth="1" strokeLinecap="round"/>
    <path d="M37 33L35 31M40 32L40 29M43 33L45 31" stroke="#333" strokeWidth="1" strokeLinecap="round"/>
    {/* Smile */}
    <path d="M26 44C26 44 29 48 32 48C35 48 38 44 38 44" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    {/* Cheeks */}
    <circle cx="18" cy="40" r="3" fill="#FFB6B6" opacity="0.6"/>
    <circle cx="46" cy="40" r="3" fill="#FFB6B6" opacity="0.6"/>
    {/* Pink bow for girl */}
    <path d="M32 10L26 6C24 5 24 8 26 9L32 12L38 9C40 8 40 5 38 6L32 10Z" fill="#E91E8C"/>
    <circle cx="32" cy="10" r="3" fill="#E91E8C"/>
  </svg>
);

const GenderStep = ({ selectedGender, onSelect }) => {
  return (
    <div className="gender-step">
      <p className="gender-subtitle">Selecciona el género para ver diseños personalizados</p>

      <div className="gender-options">
        <div
          className={`gender-card boy ${selectedGender === 'boy' ? 'selected' : ''}`}
          onClick={() => onSelect('boy')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && onSelect('boy')}
        >
          <div className="gender-icon">
            <BoyIcon />
          </div>
          <div className="gender-label">Niño</div>
        </div>

        <div
          className={`gender-card girl ${selectedGender === 'girl' ? 'selected' : ''}`}
          onClick={() => onSelect('girl')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && onSelect('girl')}
        >
          <div className="gender-icon">
            <GirlIcon />
          </div>
          <div className="gender-label">Niña</div>
        </div>
      </div>
    </div>
  );
};

export default GenderStep;
