"use client";

import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { Skeleton } from './skeleton';

// Generate a unique ID for each diagram
let idCounter = 0;
const generateId = () => `mermaid-diagram-${idCounter++}`;

const MermaidDiagram = ({ chart }: { chart: string }) => {
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [diagramId] = useState(generateId());

  useEffect(() => {
    // Reset state on chart change
    setSvg(null);
    setError(null);

    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral', 
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: false, // Ensure the diagram doesn't try to shrink
        htmlLabels: true,
      },
    });

    const renderDiagram = async () => {
      try {
        if (!chart) return;
        
        const { svg: rawSvg } = await mermaid.render(diagramId, chart);
        setSvg(rawSvg);
      } catch (e: any) {
        console.error('Mermaid rendering error:', e);
        setError("Error al renderizar el diagrama. La sintaxis de la IA podría ser inválida.");
      }
    };

    renderDiagram();
  }, [chart, diagramId]);

  if (error) {
    return (
      <Alert variant="destructive" className="mt-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (svg) {
    // The div wrapper ensures it doesn't shrink and allows scrolling via the parent
    return <div className="min-w-max" dangerouslySetInnerHTML={{ __html: svg }} />;
  }

  return <Skeleton className="h-[450px] w-[600px] max-w-full" />;
};

export default MermaidDiagram;
