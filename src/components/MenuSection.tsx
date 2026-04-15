import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MenuItemProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "default" | "outline";
}

interface MenuSectionProps {
  title: string;
  description?: string;
  items: MenuItemProps[];
  icon?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  onClick,
  href,
  variant = "outline",
}) => {
  if (href) {
    return (
      <a href={href}>
        <Button variant={variant} className="w-full justify-start">
          {label}
        </Button>
      </a>
    );
  }

  return (
    <Button variant={variant} onClick={onClick} className="w-full justify-start">
      {label}
    </Button>
  );
};

export const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  description,
  items,
  icon,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, index) => (
            <div key={index}>
              <MenuItem {...item} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
