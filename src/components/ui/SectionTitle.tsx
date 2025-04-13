import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-start',
    center: 'text-center',
    right: 'text-end',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground mx-auto font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}