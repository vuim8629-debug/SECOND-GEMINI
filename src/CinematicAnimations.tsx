import React from 'react';

export interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({ children, delay = 0, className = '' }) => {
  return (
    <div
      className={`fadeInUpWrapper ${className}`}
      style={{
        animation: `fadeInUp 700ms cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}s both`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInUp;
