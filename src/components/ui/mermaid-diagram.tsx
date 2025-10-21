"use client";

import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

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
      theme: 'neutral', // or 'dark', 'forest', 'default', 'neutral'
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
      },
    });

    const renderDiagram = async () => {
      try {
        if (!chart) return;
        
        // Ensure the chart starts with flowchart TD for consistency
        const fullChart = chart.trim().startsWith('flowchart') 
            ? chart 
            : `flowchart TD\n${chart}`;

        const { svg: rawSvg } = await mermaid.render(diagramId, fullChart);
        setSvg(rawSvg);
      } catch (e: any) {
        console.error('Mermaid rendering error:', e);
        setError("Error al renderizar el diagrama.");
      }
    };

    renderDiagram();
  }, [chart, diagramId]);

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (svg) {
    return <div dangerouslySetInnerHTML={{ __html: svg }} />;
  }

  return <div>Renderizando diagrama...</div>;
};

export default MermaidDiagram;
