import { ReactNode } from 'react';

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

export const GridContainer = ({ children, className }: GridContainerProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${className}`}>
      {children}
    </div>
  );
};
