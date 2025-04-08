
import React from 'react';
import { cn } from "@/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

const Header = ({ title, description, className, ...props }: HeaderProps) => {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <h2 className="font-poppins text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default Header;
