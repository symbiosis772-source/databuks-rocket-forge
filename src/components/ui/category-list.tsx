"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

// Define the type for a single technology item
export interface Technology {
  name: string;
  description?: string;
}

// Define the type for a single category item
export interface Category {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  featured?: boolean;
  technologies?: Technology[];
}

// Define the props for the CategoryList component
export interface CategoryListProps {
  title: string;
  subtitle?: string;
  categories: Category[];
  headerIcon?: React.ReactNode;
  className?: string;
}

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}: CategoryListProps) => {
  const [expandedItem, setExpandedItem] = useState<string | number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);

  const toggleExpand = (id: string | number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className={cn("w-full bg-background text-foreground p-8", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-primary mb-6 text-primary-foreground">
              {headerIcon}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {/* Categories List */}
        <div className="space-y-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group"
            >
              <div
                onClick={() => toggleExpand(category.id)}
                onMouseEnter={() => setHoveredItem(category.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  "relative overflow-hidden border bg-card transition-all duration-300 ease-in-out cursor-pointer",
                  hoveredItem === category.id || expandedItem === category.id
                    ? 'border-primary shadow-lg shadow-primary/20 bg-primary/5'
                    : 'border-border hover:border-primary/50'
                )}
              >
                {/* Corner brackets that appear on hover/expand */}
                {(hoveredItem === category.id || expandedItem === category.id) && (
                  <>
                    <div className="absolute top-3 left-3 w-6 h-6">
                      <div className="absolute top-0 left-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute top-0 left-0 w-0.5 h-4 bg-primary" />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6">
                      <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-primary" />
                    </div>
                  </>
                )}

                {/* Content */}
                <div className="flex items-center justify-between h-24 px-6 md:px-8">
                  <div className="flex items-center gap-4 flex-1">
                    {category.icon && (
                      <div className={cn(
                        "transition-colors duration-300",
                        hoveredItem === category.id || expandedItem === category.id ? 'text-primary' : 'text-muted-foreground'
                      )}>
                        {category.icon}
                      </div>
                    )}
                    <div>
                      <h3
                        className={cn(
                          "font-bold transition-colors duration-300",
                          category.featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl',
                          hoveredItem === category.id || expandedItem === category.id ? 'text-primary' : 'text-foreground'
                        )}
                      >
                        {category.title}
                      </h3>
                      {category.subtitle && (
                        <p
                          className={cn(
                            "mt-1 transition-colors duration-300 text-sm",
                            hoveredItem === category.id || expandedItem === category.id ? 'text-foreground/90' : 'text-muted-foreground'
                          )}
                        >
                          {category.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 transition-all duration-300",
                      expandedItem === category.id ? 'rotate-180 text-primary' : 'text-muted-foreground',
                      hoveredItem === category.id && 'text-primary'
                    )}
                  />
                </div>
              </div>

              {/* Expanded Technologies Grid */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  expandedItem === category.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <div className="bg-card/50 border border-t-0 border-border p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.technologies?.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-background border border-border rounded-lg p-4 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                      >
                        <p className="font-medium text-foreground text-sm">{tech.name}</p>
                        {tech.description && (
                          <p className="text-xs text-muted-foreground mt-1">{tech.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
