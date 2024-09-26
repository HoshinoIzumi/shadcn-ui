import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/registry/sydney/ui/button';

type LinksDemoProps = {
  icon?: React.ReactNode;
  backgroundColor?: string;  
  textColor?: string;  
  size?: string;     
};

const LinksDemo: React.FC<LinksDemoProps> = ({  icon, backgroundColor, textColor,size }) => {
  return (
    <Button asChild>
      <a
        className={`link ${size}`}
        href="https://www.sydney.edu.au/"
        style={{
          backgroundColor: backgroundColor, 
          color: textColor,                 
        }}
      >
        Read More {icon && <span className="icon">{icon}</span>}
      </a>
    </Button>
  );
};

export default LinksDemo;
