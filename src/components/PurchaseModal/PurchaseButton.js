'use client';
import { usePurchaseModalContext } from './index';

const PurchaseButton = ({
  children,
  className = '',
  style = {},
  ...props
}) => {
  const { openModal } = usePurchaseModalContext();

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={openModal}
      {...props}
    >
      {children}
    </button>
  );
};

export default PurchaseButton;
