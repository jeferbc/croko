import React from "react";
import Link from "next/link";

const OrderCard = ({
  className = "",
  image,
  orderId,
  orderDate,
  status = "Confirmado",
  title,
  description,
  amount,
  detailsUrl = "#"
}) => {
  return (
    <div className={`order-card ${className}`}>
      <div className="blog-agency">
        <div className="blog-contain">
          {image && <img alt={title} className="img-fluid" src={image} />}
          <div className="img-container">
            <div>
              <div className="blog-info">
                <div className="m-b-20">
                  <div className="center-text d-flex justify-content-between align-items-center flex-wrap">
                    <div className="d-flex align-items-center mb-2">
                      {orderDate && (
                        <>
                          <i aria-hidden="true" className="fa fa-clock-o me-2"></i>
                          <h6 className="me-4 font-blog mb-0">{orderDate}</h6>
                        </>
                      )}
                      {status && (
                        <>
                          <i aria-hidden="true" className="fa fa-check-circle me-2 text-success"></i>
                          <h6 className="font-blog mb-0 text-success">{status}</h6>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {orderId && (
                  <div className="mb-3">
                    <h6 className="font-weight-bold mb-0">
                      <span className="text-muted">Pedido # </span>{orderId}
                    </h6>
                  </div>
                )}

                <h5 className="blog-head font-600">{title}</h5>
                <p className="para2">{description}</p>

                {detailsUrl !== "#" && (
                  <div className="btn-bottom m-t-20">
                    <Link href={detailsUrl}>Ver detalles</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
