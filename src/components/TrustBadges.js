import React from 'react';
import { Row, Col } from 'reactstrap';
import '@/assets/scss/trust-badges.scss';

const TrustBadges = ({ variant = 'default' }) => {
    const badges = [
        {
            icon: '🛡️',
            title: '100% Seguro',
            subtitle: 'Durante el Embarazo'
        },
        {
            icon: '✓',
            title: 'Pinturas Certificadas',
            subtitle: 'Para Uso Corporal'
        },
        {
            icon: '📦',
            title: 'Kit Completo',
            subtitle: 'Todo Incluido'
        },
        {
            icon: '🚚',
            title: 'Envío Gratis',
            subtitle: 'A toda Colombia'
        }
    ];

    return (
        <div className={`trust-badges-container ${variant}`}>
            <Row className="trust-badges-row align-items-center">
                {badges.map((badge, index) => (
                    <Col xs="6" lg="3" key={index} className="mb-3 mb-lg-0">
                        <div className="trust-badge">
                            <div className="badge-icon">{badge.icon}</div>
                            <div className="badge-content">
                                <div className="badge-title">{badge.title}</div>
                                <div className="badge-subtitle">{badge.subtitle}</div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default TrustBadges;
