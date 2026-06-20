"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface Technology {
  name: string;
  description?: string;
}

export interface Category {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  featured?: boolean;
  technologies?: Technology[];
}

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
    <div className={cn("w-full bg-deep-space text-starlight p-8", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-lead/40 mb-6 text-mercury-blue">
              {headerIcon}
            </div>
          )}
          <h2 className="text-heading-lg md:text-display font-light mb-2 tracking-tight text-starlight">{title}</h2>
          {subtitle && (
            <p className="text-body text-silver">{subtitle}</p>
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
                  "relative overflow-hidden border bg-midnight-slate transition-all duration-300 ease-in-out cursor-pointer",
                  hoveredItem === category.id || expandedItem === category.id
                    ? 'border-lead/60 bg-midnight-slate'
                    : 'border-lead/20 hover:border-lead/40'
                )}
              >
                {/* Content */}
                <div className="flex items-center justify-between h-24 px-6 md:px-8">
                  <div className="flex items-center gap-4 flex-1">
                    {category.icon && (
                      <div className={cn(
                        "transition-colors duration-300",
                        hoveredItem === category.id || expandedItem === category.id ? 'text-mercury-blue' : 'text-silver'
                      )}>
                        {category.icon}
                      </div>
                    )}
                    <div>
                      <h3
                        className={cn(
                          "font-light transition-colors duration-300",
                          category.featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl',
                          hoveredItem === category.id || expandedItem === category.id ? 'text-mercury-blue' : 'text-starlight'
                        )}
                      >
                        {category.title}
                      </h3>
                      {category.subtitle && (
                        <p
                          className={cn(
                            "mt-1 transition-colors duration-300 text-body-sm",
                            hoveredItem === category.id || expandedItem === category.id ? 'text-starlight' : 'text-silver'
                          )}
                        >
                          {category.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-all duration-300",
                      expandedItem === category.id ? 'rotate-180 text-mercury-blue' : 'text-silver',
                      hoveredItem === category.id && 'text-mercury-blue'
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
                <div className="bg-midnight-slate/50 border border-t-0 border-lead/20 p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.technologies?.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-deep-space border border-lead/20 p-4 hover:border-lead/40 hover:bg-mercury-blue/5 transition-all duration-200"
                      >
                        <p className="font-medium text-starlight text-body-sm">{tech.name}</p>
                        {tech.description && (
                          <p className="text-body-sm text-silver mt-1">{tech.description}</p>
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
